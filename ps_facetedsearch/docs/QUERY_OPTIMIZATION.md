# Query Optimization Documentation

## Overview

This document explains the query optimization implemented in `src/Adapter/MySQL.php` to improve performance of faceted search filter queries.

## Problem

The original implementation generated inefficient queries for counting products per attribute/feature value, particularly when filters were applied. These queries exhibited several performance issues:

1. **Unnecessary Subqueries**: Created a derived table with GROUP BY even when not needed
2. **Duplicate Joins**: Joined the same tables multiple times (inner and outer query)
3. **Inefficient Filter Placement**: Filters in WHERE clause instead of JOIN ON clauses
4. **Poor Join Order**: Started from attributes instead of filtering products first

### Example Problem Query

```sql
SELECT pac.id_attribute, COUNT(DISTINCT p.id_product) c
FROM (
    SELECT p.id_product, SUM(sa.quantity) as quantity, prc.price, sa.out_of_stock, cp.position
    FROM ps_product p
    LEFT JOIN ps_product_attribute pa ON (p.id_product = pa.id_product)
    LEFT JOIN ps_product_attribute_combination pac ON (pa.id_product_attribute = pac.id_product_attribute)
    LEFT JOIN ps_stock_available sa ON (...)
    INNER JOIN ps_product prc ON (p.id_product = prc.id_product)
    INNER JOIN ps_category_product cp ON (p.id_product = cp.id_product)
    INNER JOIN ps_product_shop ps ON (...)
    INNER JOIN ps_category c ON (cp.id_category = c.id_category AND c.active = 1)
    LEFT JOIN ps_category_group cg ON (cg.id_category = c.id_category)
    WHERE ps.id_shop = '1' 
      AND ps.visibility IN ('both', 'catalog')
      AND cg.id_group = '3'
      AND cp.id_category = '30'
    GROUP BY p.id_product  -- Unnecessary!
) p
LEFT JOIN ps_product_attribute pa ON (p.id_product = pa.id_product)  -- Duplicate!
LEFT JOIN ps_product_attribute_combination pac ON (...)  -- Duplicate!
INNER JOIN ps_product_shop ps ON (...)  -- Duplicate!
INNER JOIN ps_attribute a ON (a.id_attribute = pac.id_attribute)
WHERE a.id_attribute_group = 1
  AND ps.visibility IN ('both', 'catalog')
GROUP BY pac.id_attribute
```

**Performance**: ~200ms on production database

## Solution

### Query Flattening

When safe to do so, the optimization eliminates the subquery and merges all joins into a single query level.

#### Conditions for Flattening

The query is only flattened when ALL of the following are true:

1. An initial population exists (filters have been applied)
2. The query is a value count operation (contains `COUNT(DISTINCT p.id_product)`)
3. The query has a GROUP BY clause
4. There are NO operation filters (which require subquery evaluation for proper logic)
5. The GROUP BY fields are simple (not computed/aggregated)

### Join Optimization

For INNER JOINs in flattened queries, filter conditions are moved from WHERE clauses to JOIN ON clauses. This allows the database optimizer to:

- Filter rows earlier in the query execution
- Use indexes more effectively
- Reduce the number of rows that need to be processed in subsequent joins

### Example Optimized Query

```sql
SELECT pac.id_attribute, COUNT(DISTINCT p.id_product) c
FROM ps_product p
INNER JOIN ps_product_shop ps ON (
    p.id_product = ps.id_product 
    AND ps.id_shop = 1 
    AND ps.active = TRUE
    AND ps.visibility IN ('both', 'catalog')  -- Moved from WHERE
)
INNER JOIN ps_category_product cp ON (
    p.id_product = cp.id_product 
    AND cp.id_category = 30  -- Moved from WHERE
)
INNER JOIN ps_category c ON (
    cp.id_category = c.id_category 
    AND c.active = 1
)
INNER JOIN ps_category_group cg ON (
    cg.id_category = c.id_category 
    AND cg.id_group = 3  -- Moved FROM WHERE
)
LEFT JOIN ps_product_attribute pa ON (p.id_product = pa.id_product)
LEFT JOIN ps_product_attribute_combination pac ON (pa.id_product_attribute = pac.id_product_attribute)
INNER JOIN ps_attribute a ON (
    a.id_attribute = pac.id_attribute 
    AND a.id_attribute_group = 1  -- Moved from WHERE
)
GROUP BY pac.id_attribute
```

**Expected Performance**: ~50-100ms (50-75% improvement)

## Implementation Details

### Key Methods

#### `canFlattenQuery()`

Determines if it's safe to flatten the query by checking:
- Presence of initial population
- COUNT(DISTINCT) in SELECT fields
- Non-empty GROUP BY
- Absence of operation filters
- Simplicity of group fields

#### `getQuery()` 

Modified to:
1. Check if query can be flattened
2. Set `isFlattening` flag for field name computation
3. Merge initial population's joins when flattening
4. Call `optimizeJoinConditions()` to move filters to ON clauses
5. Reset `isFlattening` flag after query generation

#### `optimizeJoinConditions()`

For each INNER JOIN:
1. Identifies WHERE conditions referencing the joined table
2. Moves simple equality and IN conditions to the JOIN ON clause
3. Updates the join condition string
4. Removes moved conditions from WHERE array

#### `computeFieldName()`

Enhanced to check `isFlattening` flag:
- When flattening, treats query as if no initial population exists
- Uses proper table aliases instead of `p.field` for joined tables
- Ensures field references work correctly in flattened queries

### isFlattening Flag

A protected boolean property that:
- Is set to `true` during flattened query generation
- Tells `computeFieldName()` to use table aliases instead of `p.*` notation
- Is reset to `false` after query generation completes

## Backwards Compatibility

### When Optimization Applies

- Simple value count queries without operation filters
- Most common use case: counting products per attribute/feature value in category pages

### When Original Behavior is Preserved

- Queries with operation filters (e.g., stock management filters)
- Complex GROUP BY fields (computed or aggregated)
- Queries without initial population
- Any case where `canFlattenQuery()` returns false

### Result Compatibility

- The optimized queries produce **identical results** to the original queries
- Only the query structure changes, not the data returned
- All filtering logic is preserved
- All existing features continue to work (stock management, price ranges, etc.)

### Test Compatibility

- Tests expecting exact query string matches may fail
- Tests checking result data will pass
- Query string tests can be updated or use pattern matching

## Performance Monitoring

To verify optimization effectiveness, monitor:

1. **Query Execution Time**: Should decrease by 50-75% for affected queries
2. **Database Load**: Reduced temporary table creation and filesort operations
3. **EXPLAIN Output**: Better join order and index usage

### Before Optimization EXPLAIN

```
Using temporary; Using filesort
```

### After Optimization EXPLAIN

```
Using where; Using index
```

## Troubleshooting

### If Performance Doesn't Improve

1. Check if `canFlattenQuery()` is returning true (use debugging)
2. Verify database indexes exist on filter columns
3. Check for operation filters that prevent flattening
4. Review EXPLAIN output for both queries

### If Results Are Incorrect

1. This should not happen - if it does, it's a bug
2. Check that operation filters are properly excluded from flattening
3. Verify WHERE to JOIN ON condition movement is working correctly
4. Review the `isFlattening` flag logic in `computeFieldName()`

## Future Enhancements

Potential areas for further optimization:

1. **Expand Flattening Coverage**: Support more complex scenarios safely
2. **Dynamic Join Ordering**: Let database optimizer choose best join order
3. **Index Hints**: Add query hints for specific performance-critical queries
4. **Caching**: Cache frequently-used filter count queries
5. **Lazy Loading**: Load filter values on demand instead of all at once

## References

- Issue: Optimize performance in queries
- Claude.ai analysis that inspired this optimization
- MySQL documentation on JOIN optimization
