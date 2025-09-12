# PrestaShop Faceted Search Module

PrestaShop Faceted Search (ps_facetedsearch) is a PHP module for PrestaShop e-commerce platform that provides advanced product filtering capabilities. The module includes both PHP backend functionality and JavaScript/SCSS frontend components built with modern tooling.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build the Repository
- Install Node.js dependencies: `npm install` -- takes ~30 seconds
- Install PHP dependencies with GitHub auth workaround: `COMPOSER_AUTH='{}' composer install --no-interaction` -- takes 3-5 minutes  
- Build production assets: `npm run build` -- takes ~2.5 seconds
- Build development assets with watch mode: `npm run dev` -- runs continuously in watch mode

### Development Workflow
- **ALWAYS** run the bootstrapping steps first before making any changes
- Use development build for active development: `npm run dev` (runs in watch mode)
- Frontend assets are in `_dev/` directory and compile to `views/dist/`
- Test JavaScript changes: `npm run test` -- takes ~1 second, runs 69 tests
- Lint JavaScript code: `npm run lint` -- takes ~1.5 seconds

### PHP Development
- **WARNING**: PHP testing has compatibility issues with PHP 8.3+
- PHP linting (with compatibility warnings): `PHP_CS_FIXER_IGNORE_ENV=1 composer run lint`
- PHPUnit tests: `composer run test` -- **FAILS on PHP 8.3+** due to PHPUnit 5.7.27 incompatibility
- Use PHP 7.4-8.0 for full PHP toolchain compatibility (as specified in CI workflows)

## Validation

### Required Validation Steps
- **ALWAYS** validate JavaScript builds after making frontend changes: `npm run build`
- **ALWAYS** run JavaScript tests and linting: `npm run test && npm run lint`
- **ALWAYS** check that webpack compilation succeeds without errors
- **MANUAL VALIDATION**: This is a PrestaShop module - cannot run standalone. Integration testing requires a full PrestaShop installation.

### Common Validation Scenarios
- **Frontend changes**: Build assets (`npm run build`), run tests (`npm run test`), check lint (`npm run lint`)
- **PHP changes**: Check syntax manually, use `PHP_CS_FIXER_IGNORE_ENV=1 composer run lint` for style
- **Module integration**: Requires PrestaShop 1.7.6+ environment for full testing

## Environment Requirements

### Confirmed Working Versions
- Node.js: v20.19.5+ (requires Node.js 14+ minimum)
- npm: 10.8.2+
- PHP: 8.3.6 (module supports PHP 7.1-8.4, but dev tools have compatibility issues)
- Composer: 2.8.11+

### Known Compatibility Issues
- PHPUnit 5.7.27 fails on PHP 8.3+ (fatal error with $GLOBALS reference)
- PHP-CS-Fixer v2.19.3 requires `PHP_CS_FIXER_IGNORE_ENV=1` for PHP 8.3+
- Some composer packages require GitHub authentication (workaround: `COMPOSER_AUTH='{}'`)

## Project Structure

### Key Directories and Files
- **Main module file**: `ps_facetedsearch.php` (module class definition)
- **PHP source code**: `src/` (PSR-4 autoloaded namespace: `PrestaShop\Module\FacetedSearch`)
- **Frontend development**: `_dev/front/` and `_dev/back/` (JavaScript/SCSS source)
- **Compiled assets**: `views/dist/` (webpack output - back.js, front.js, CSS files)
- **JavaScript tests**: `tests/js/` (Mocha/Chai test suites)
- **PHP tests**: `tests/php/` (PHPUnit tests - compatibility issues)
- **Configuration files**: 
  - `package.json` (npm scripts and dependencies)
  - `composer.json` (PHP dependencies and autoloading)
  - `webpack.config.js` (asset compilation)
  - `.eslintrc.js` (JavaScript linting rules)
  - `.php_cs.dist` (PHP coding standards)

### Important Module Scripts
- `ps_facetedsearch-clear-cache.php` -- **DEPRECATED** cache clearing script
- `ps_facetedsearch-price-indexer.php` -- price indexing functionality  
- `ps_facetedsearch-attribute-indexer.php` -- attribute indexing functionality

## Common Tasks

### Asset Compilation
The module uses Webpack to compile modern JavaScript and SCSS:
```bash
# Development build with file watching
npm run dev

# Production build (minified)
npm run build
```

### Code Quality
- JavaScript: `npm run lint` (ESLint with PrestaShop config)
- JavaScript fix: `npm run lint-fix`
- PHP: `PHP_CS_FIXER_IGNORE_ENV=1 composer run lint` (PHP-CS-Fixer with warnings)

### Testing
- JavaScript tests: `npm run test` -- 69 passing tests in ~1 second
- PHP tests: `composer run test` -- **FAILS on PHP 8.3+, works on PHP 7.4-8.0**

## CI/CD Information

### GitHub Actions Workflows
- `.github/workflows/js.yml`: JavaScript linting and testing (Node 14, 16)
- `.github/workflows/php.yml`: PHP syntax checking, CS-Fixer, PHPStan, PHPUnit
- `.github/workflows/build-release.yml`: Release automation

### Expected Build Times
- `npm install`: ~30 seconds
- `composer install`: 3-5 minutes (with GitHub auth workaround)
- `npm run build`: ~2.5 seconds
- `npm run test`: ~1 second
- `npm run lint`: ~1.5 seconds

**Note**: All builds are fast - no special timeout considerations needed.

## PrestaShop Integration

### Module Information
- **Compatibility**: PrestaShop 1.7.6.0+
- **Type**: Faceted search and product filtering
- **Namespace**: `PrestaShop\Module\FacetedSearch`
- **Installation**: Copy to PrestaShop `modules/ps_facetedsearch/` directory

### Development Context
- This module cannot run standalone - it requires PrestaShop framework
- Full functional testing requires PrestaShop installation
- Static analysis uses containerized PHPStan with multiple PrestaShop versions
- Always ensure changes are compatible with PrestaShop module architecture

## Troubleshooting

### Common Issues
1. **Composer GitHub auth errors**: Use `COMPOSER_AUTH='{}' composer install --no-interaction`
2. **PHP-CS-Fixer version warnings**: Use `PHP_CS_FIXER_IGNORE_ENV=1 composer run lint`  
3. **PHPUnit failures on PHP 8.3+**: Expected behavior - use PHP 7.4-8.0 for PHP testing
4. **Webpack compilation errors**: Check `_dev/` source files for syntax errors
5. **Missing dependencies**: Run `npm install` and `composer install` first

### Quick Diagnostic Commands
```bash
# Check versions
node --version && npm --version && php --version && composer --version

# Validate installation
ls -la node_modules vendor views/dist

# Test basic functionality  
npm run build && npm run test && npm run lint
```