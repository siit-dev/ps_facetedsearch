/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_dev/cldr/exception/localization.js":
/*!*********************************************!*\
  !*** ./_dev/cldr/exception/localization.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */
var LocalizationException = /*#__PURE__*/_createClass(function LocalizationException(message) {
  _classCallCheck(this, LocalizationException);
  this.message = message;
  this.name = 'LocalizationException';
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalizationException);

/***/ }),

/***/ "./_dev/cldr/number-formatter.js":
/*!***************************************!*\
  !*** ./_dev/cldr/number-formatter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-symbol */ "./_dev/cldr/number-symbol.js");
/* harmony import */ var _specifications_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specifications/price */ "./_dev/cldr/specifications/price.js");
/* harmony import */ var _specifications_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specifications/number */ "./_dev/cldr/specifications/number.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */
/**
 * These placeholders are used in CLDR number formatting templates.
 * They are meant to be replaced by the correct localized symbols in the number formatting process.
 */



var escapeRE = __webpack_require__(/*! lodash.escaperegexp */ "./node_modules/lodash.escaperegexp/index.js");
var CURRENCY_SYMBOL_PLACEHOLDER = '¤';
var DECIMAL_SEPARATOR_PLACEHOLDER = '.';
var GROUP_SEPARATOR_PLACEHOLDER = ',';
var MINUS_SIGN_PLACEHOLDER = '-';
var PERCENT_SYMBOL_PLACEHOLDER = '%';
var PLUS_SIGN_PLACEHOLDER = '+';
var NumberFormatter = /*#__PURE__*/function () {
  /**
   * @param NumberSpecification specification Number specification to be used
   *   (can be a number spec, a price spec, a percentage spec)
   */
  function NumberFormatter(specification) {
    _classCallCheck(this, NumberFormatter);
    this.numberSpecification = specification;
  }

  /**
   * Formats the passed number according to specifications.
   *
   * @param int|float|string number The number to format
   * @param NumberSpecification specification Number specification to be used
   *   (can be a number spec, a price spec, a percentage spec)
   *
   * @return string The formatted number
   *                You should use this this value for display, without modifying it
   */
  return _createClass(NumberFormatter, [{
    key: "format",
    value: function format(number, specification) {
      if (specification !== undefined) {
        this.numberSpecification = specification;
      }

      /*
       * We need to work on the absolute value first.
       * Then the CLDR pattern will add the sign if relevant (at the end).
       */
      var num = Math.abs(number).toFixed(this.numberSpecification.getMaxFractionDigits());
      var _this$extractMajorMin = this.extractMajorMinorDigits(num),
        _this$extractMajorMin2 = _slicedToArray(_this$extractMajorMin, 2),
        majorDigits = _this$extractMajorMin2[0],
        minorDigits = _this$extractMajorMin2[1];
      majorDigits = this.splitMajorGroups(majorDigits);
      minorDigits = this.adjustMinorDigitsZeroes(minorDigits);

      // Assemble the final number
      var formattedNumber = majorDigits;
      if (minorDigits) {
        formattedNumber += DECIMAL_SEPARATOR_PLACEHOLDER + minorDigits;
      }

      // Get the good CLDR formatting pattern. Sign is important here !
      var pattern = this.getCldrPattern(number < 0);
      formattedNumber = this.addPlaceholders(formattedNumber, pattern);
      formattedNumber = this.replaceSymbols(formattedNumber);
      formattedNumber = this.performSpecificReplacements(formattedNumber);
      return formattedNumber;
    }

    /**
     * Get number's major and minor digits.
     *
     * Major digits are the "integer" part (before decimal separator),
     * minor digits are the fractional part
     * Result will be an array of exactly 2 items: [majorDigits, minorDigits]
     *
     * Usage example:
     *  list(majorDigits, minorDigits) = this.getMajorMinorDigits(decimalNumber);
     *
     * @param DecimalNumber number
     *
     * @return string[]
     */
  }, {
    key: "extractMajorMinorDigits",
    value: function extractMajorMinorDigits(number) {
      // Get the number's major and minor digits.
      var result = number.toString().split('.');
      var majorDigits = result[0];
      var minorDigits = result[1] === undefined ? '' : result[1];
      return [majorDigits, minorDigits];
    }

    /**
     * Splits major digits into groups.
     *
     * e.g.: Given the major digits "1234567", and major group size
     *  configured to 3 digits, the result would be "1 234 567"
     *
     * @param string majorDigits The major digits to be grouped
     *
     * @return string The grouped major digits
     */
  }, {
    key: "splitMajorGroups",
    value: function splitMajorGroups(digit) {
      if (!this.numberSpecification.isGroupingUsed()) {
        return digit;
      }

      // Reverse the major digits, since they are grouped from the right.
      var majorDigits = digit.split('').reverse();

      // Group the major digits.
      var groups = [];
      groups.push(majorDigits.splice(0, this.numberSpecification.getPrimaryGroupSize()));
      while (majorDigits.length) {
        groups.push(majorDigits.splice(0, this.numberSpecification.getSecondaryGroupSize()));
      }

      // Reverse back the digits and the groups
      groups = groups.reverse();
      var newGroups = [];
      groups.forEach(function (group) {
        newGroups.push(group.reverse().join(''));
      });

      // Reconstruct the major digits.
      return newGroups.join(GROUP_SEPARATOR_PLACEHOLDER);
    }

    /**
     * Adds or remove trailing zeroes, depending on specified min and max fraction digits numbers.
     *
     * @param string minorDigits Digits to be adjusted with (trimmed or padded) zeroes
     *
     * @return string The adjusted minor digits
     */
  }, {
    key: "adjustMinorDigitsZeroes",
    value: function adjustMinorDigitsZeroes(minorDigits) {
      var digit = minorDigits;
      if (digit.length > this.numberSpecification.getMaxFractionDigits()) {
        // Strip any trailing zeroes.
        digit = digit.replace(/0+$/, '');
      }
      if (digit.length < this.numberSpecification.getMinFractionDigits()) {
        // Re-add needed zeroes
        digit = digit.padEnd(this.numberSpecification.getMinFractionDigits(), '0');
      }
      return digit;
    }

    /**
     * Get the CLDR formatting pattern.
     *
     * @see http://cldr.unicode.org/translation/number-patterns
     *
     * @param bool isNegative If true, the negative pattern
     * will be returned instead of the positive one
     *
     * @return string The CLDR formatting pattern
     */
  }, {
    key: "getCldrPattern",
    value: function getCldrPattern(isNegative) {
      if (isNegative) {
        return this.numberSpecification.getNegativePattern();
      }
      return this.numberSpecification.getPositivePattern();
    }

    /**
     * Replace placeholder number symbols with relevant numbering system's symbols.
     *
     * @param string number
     *                       The number to process
     *
     * @return string
     *                The number with replaced symbols
     */
  }, {
    key: "replaceSymbols",
    value: function replaceSymbols(number) {
      var symbols = this.numberSpecification.getSymbol();
      var map = {};
      map[DECIMAL_SEPARATOR_PLACEHOLDER] = symbols.getDecimal();
      map[GROUP_SEPARATOR_PLACEHOLDER] = symbols.getGroup();
      map[MINUS_SIGN_PLACEHOLDER] = symbols.getMinusSign();
      map[PERCENT_SYMBOL_PLACEHOLDER] = symbols.getPercentSign();
      map[PLUS_SIGN_PLACEHOLDER] = symbols.getPlusSign();
      return this.strtr(number, map);
    }

    /**
     * strtr() for JavaScript
     * Translate characters or replace substrings
     */
  }, {
    key: "strtr",
    value: function strtr(str, pairs) {
      var substrs = Object.keys(pairs).map(escapeRE);
      return str.split(RegExp("(".concat(substrs.join('|'), ")"))).map(function (part) {
        return pairs[part] || part;
      }).join('');
    }

    /**
     * Add missing placeholders to the number using the passed CLDR pattern.
     *
     * Missing placeholders can be the percent sign, currency symbol, etc.
     *
     * e.g. with a currency CLDR pattern:
     *  - Passed number (partially formatted): 1,234.567
     *  - Returned number: 1,234.567 ¤
     *  ("¤" symbol is the currency symbol placeholder)
     *
     * @see http://cldr.unicode.org/translation/number-patterns
     *
     * @param formattedNumber
     *  Number to process
     * @param pattern
     *  CLDR formatting pattern to use
     *
     * @return string
     */
  }, {
    key: "addPlaceholders",
    value: function addPlaceholders(formattedNumber, pattern) {
      /*
       * Regex groups explanation:
       * #          : literal "#" character. Once.
       * (,#+)*     : any other "#" characters group, separated by ",". Zero to infinity times.
       * 0          : literal "0" character. Once.
       * (\.[0#]+)* : any combination of "0" and "#" characters groups, separated by '.'.
       *              Zero to infinity times.
       */
      return pattern.replace(/#?(,#+)*0(\.[0#]+)*/, formattedNumber);
    }

    /**
     * Perform some more specific replacements.
     *
     * Specific replacements are needed when number specification is extended.
     * For instance, prices have an extended number specification in order to
     * add currency symbol to the formatted number.
     *
     * @param string formattedNumber
     *
     * @return mixed
     */
  }, {
    key: "performSpecificReplacements",
    value: function performSpecificReplacements(formattedNumber) {
      if (this.numberSpecification instanceof _specifications_price__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        return formattedNumber.split(CURRENCY_SYMBOL_PLACEHOLDER).join(this.numberSpecification.getCurrencySymbol());
      }
      return formattedNumber;
    }
  }], [{
    key: "build",
    value: function build(specifications) {
      var symbol;
      if (undefined !== specifications.numberSymbols) {
        symbol = _construct(_number_symbol__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(specifications.numberSymbols));
      } else {
        symbol = _construct(_number_symbol__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(specifications.symbol));
      }
      var specification;
      if (specifications.currencySymbol) {
        specification = new _specifications_price__WEBPACK_IMPORTED_MODULE_1__["default"](specifications.positivePattern, specifications.negativePattern, symbol, parseInt(specifications.maxFractionDigits, 10), parseInt(specifications.minFractionDigits, 10), specifications.groupingUsed, specifications.primaryGroupSize, specifications.secondaryGroupSize, specifications.currencySymbol, specifications.currencyCode);
      } else {
        specification = new _specifications_number__WEBPACK_IMPORTED_MODULE_2__["default"](specifications.positivePattern, specifications.negativePattern, symbol, parseInt(specifications.maxFractionDigits, 10), parseInt(specifications.minFractionDigits, 10), specifications.groupingUsed, specifications.primaryGroupSize, specifications.secondaryGroupSize);
      }
      return new NumberFormatter(specification);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberFormatter);

/***/ }),

/***/ "./_dev/cldr/number-symbol.js":
/*!************************************!*\
  !*** ./_dev/cldr/number-symbol.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exception_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exception/localization */ "./_dev/cldr/exception/localization.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */

var NumberSymbol = /*#__PURE__*/function () {
  /**
   * NumberSymbolList constructor.
   *
   * @param string decimal Decimal separator character
   * @param string group Digits group separator character
   * @param string list List elements separator character
   * @param string percentSign Percent sign character
   * @param string minusSign Minus sign character
   * @param string plusSign Plus sign character
   * @param string exponential Exponential character
   * @param string superscriptingExponent Superscripting exponent character
   * @param string perMille Permille sign character
   * @param string infinity The infinity sign. Corresponds to the IEEE infinity bit pattern.
   * @param string nan The NaN (Not A Number) sign. Corresponds to the IEEE NaN bit pattern.
   *
   * @throws LocalizationException
   */
  function NumberSymbol(decimal, group, list, percentSign, minusSign, plusSign, exponential, superscriptingExponent, perMille, infinity, nan) {
    _classCallCheck(this, NumberSymbol);
    this.decimal = decimal;
    this.group = group;
    this.list = list;
    this.percentSign = percentSign;
    this.minusSign = minusSign;
    this.plusSign = plusSign;
    this.exponential = exponential;
    this.superscriptingExponent = superscriptingExponent;
    this.perMille = perMille;
    this.infinity = infinity;
    this.nan = nan;
    this.validateData();
  }

  /**
   * Get the decimal separator.
   *
   * @return string
   */
  return _createClass(NumberSymbol, [{
    key: "getDecimal",
    value: function getDecimal() {
      return this.decimal;
    }

    /**
     * Get the digit groups separator.
     *
     * @return string
     */
  }, {
    key: "getGroup",
    value: function getGroup() {
      return this.group;
    }

    /**
     * Get the list elements separator.
     *
     * @return string
     */
  }, {
    key: "getList",
    value: function getList() {
      return this.list;
    }

    /**
     * Get the percent sign.
     *
     * @return string
     */
  }, {
    key: "getPercentSign",
    value: function getPercentSign() {
      return this.percentSign;
    }

    /**
     * Get the minus sign.
     *
     * @return string
     */
  }, {
    key: "getMinusSign",
    value: function getMinusSign() {
      return this.minusSign;
    }

    /**
     * Get the plus sign.
     *
     * @return string
     */
  }, {
    key: "getPlusSign",
    value: function getPlusSign() {
      return this.plusSign;
    }

    /**
     * Get the exponential character.
     *
     * @return string
     */
  }, {
    key: "getExponential",
    value: function getExponential() {
      return this.exponential;
    }

    /**
     * Get the exponent character.
     *
     * @return string
     */
  }, {
    key: "getSuperscriptingExponent",
    value: function getSuperscriptingExponent() {
      return this.superscriptingExponent;
    }

    /**
     * Gert the per mille symbol (often "‰").
     *
     * @see https://en.wikipedia.org/wiki/Per_mille
     *
     * @return string
     */
  }, {
    key: "getPerMille",
    value: function getPerMille() {
      return this.perMille;
    }

    /**
     * Get the infinity symbol (often "∞").
     *
     * @see https://en.wikipedia.org/wiki/Infinity_symbol
     *
     * @return string
     */
  }, {
    key: "getInfinity",
    value: function getInfinity() {
      return this.infinity;
    }

    /**
     * Get the NaN (not a number) sign.
     *
     * @return string
     */
  }, {
    key: "getNan",
    value: function getNan() {
      return this.nan;
    }

    /**
     * Symbols list validation.
     *
     * @throws LocalizationException
     */
  }, {
    key: "validateData",
    value: function validateData() {
      if (!this.decimal || typeof this.decimal !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid decimal');
      }
      if (!this.group || typeof this.group !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid group');
      }
      if (!this.list || typeof this.list !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid symbol list');
      }
      if (!this.percentSign || typeof this.percentSign !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid percentSign');
      }
      if (!this.minusSign || typeof this.minusSign !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid minusSign');
      }
      if (!this.plusSign || typeof this.plusSign !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid plusSign');
      }
      if (!this.exponential || typeof this.exponential !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid exponential');
      }
      if (!this.superscriptingExponent || typeof this.superscriptingExponent !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid superscriptingExponent');
      }
      if (!this.perMille || typeof this.perMille !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid perMille');
      }
      if (!this.infinity || typeof this.infinity !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid infinity');
      }
      if (!this.nan || typeof this.nan !== 'string') {
        throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid nan');
      }
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberSymbol);

/***/ }),

/***/ "./_dev/cldr/specifications/number.js":
/*!********************************************!*\
  !*** ./_dev/cldr/specifications/number.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exception_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/localization */ "./_dev/cldr/exception/localization.js");
/* harmony import */ var _number_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../number-symbol */ "./_dev/cldr/number-symbol.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */


var NumberSpecification = /*#__PURE__*/function () {
  /**
   * Number specification constructor.
   *
   * @param string positivePattern CLDR formatting pattern for positive amounts
   * @param string negativePattern CLDR formatting pattern for negative amounts
   * @param NumberSymbol symbol Number symbol
   * @param int maxFractionDigits Maximum number of digits after decimal separator
   * @param int minFractionDigits Minimum number of digits after decimal separator
   * @param bool groupingUsed Is digits grouping used ?
   * @param int primaryGroupSize Size of primary digits group in the number
   * @param int secondaryGroupSize Size of secondary digits group in the number
   *
   * @throws LocalizationException
   */
  function NumberSpecification(positivePattern, negativePattern, symbol, maxFractionDigits, minFractionDigits, groupingUsed, primaryGroupSize, secondaryGroupSize) {
    _classCallCheck(this, NumberSpecification);
    this.positivePattern = positivePattern;
    this.negativePattern = negativePattern;
    this.symbol = symbol;
    this.maxFractionDigits = maxFractionDigits;
    // eslint-disable-next-line
    this.minFractionDigits = maxFractionDigits < minFractionDigits ? maxFractionDigits : minFractionDigits;
    this.groupingUsed = groupingUsed;
    this.primaryGroupSize = primaryGroupSize;
    this.secondaryGroupSize = secondaryGroupSize;
    if (!this.positivePattern || typeof this.positivePattern !== 'string') {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid positivePattern');
    }
    if (!this.negativePattern || typeof this.negativePattern !== 'string') {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid negativePattern');
    }
    if (!this.symbol || !(this.symbol instanceof _number_symbol__WEBPACK_IMPORTED_MODULE_1__["default"])) {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid symbol');
    }
    if (typeof this.maxFractionDigits !== 'number') {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid maxFractionDigits');
    }
    if (typeof this.minFractionDigits !== 'number') {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid minFractionDigits');
    }
    if (typeof this.groupingUsed !== 'boolean') {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid groupingUsed');
    }
    if (typeof this.primaryGroupSize !== 'number') {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid primaryGroupSize');
    }
    if (typeof this.secondaryGroupSize !== 'number') {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid secondaryGroupSize');
    }
  }

  /**
   * Get symbol.
   *
   * @return NumberSymbol
   */
  return _createClass(NumberSpecification, [{
    key: "getSymbol",
    value: function getSymbol() {
      return this.symbol;
    }

    /**
     * Get the formatting rules for this number (when positive).
     *
     * This pattern uses the Unicode CLDR number pattern syntax
     *
     * @return string
     */
  }, {
    key: "getPositivePattern",
    value: function getPositivePattern() {
      return this.positivePattern;
    }

    /**
     * Get the formatting rules for this number (when negative).
     *
     * This pattern uses the Unicode CLDR number pattern syntax
     *
     * @return string
     */
  }, {
    key: "getNegativePattern",
    value: function getNegativePattern() {
      return this.negativePattern;
    }

    /**
     * Get the maximum number of digits after decimal separator (rounding if needed).
     *
     * @return int
     */
  }, {
    key: "getMaxFractionDigits",
    value: function getMaxFractionDigits() {
      return this.maxFractionDigits;
    }

    /**
     * Get the minimum number of digits after decimal separator (fill with "0" if needed).
     *
     * @return int
     */
  }, {
    key: "getMinFractionDigits",
    value: function getMinFractionDigits() {
      return this.minFractionDigits;
    }

    /**
     * Get the "grouping" flag. This flag defines if digits
     * grouping should be used when formatting this number.
     *
     * @return bool
     */
  }, {
    key: "isGroupingUsed",
    value: function isGroupingUsed() {
      return this.groupingUsed;
    }

    /**
     * Get the size of primary digits group in the number.
     *
     * @return int
     */
  }, {
    key: "getPrimaryGroupSize",
    value: function getPrimaryGroupSize() {
      return this.primaryGroupSize;
    }

    /**
     * Get the size of secondary digits groups in the number.
     *
     * @return int
     */
  }, {
    key: "getSecondaryGroupSize",
    value: function getSecondaryGroupSize() {
      return this.secondaryGroupSize;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberSpecification);

/***/ }),

/***/ "./_dev/cldr/specifications/price.js":
/*!*******************************************!*\
  !*** ./_dev/cldr/specifications/price.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exception_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/localization */ "./_dev/cldr/exception/localization.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./_dev/cldr/specifications/number.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */



/**
 * Currency display option: symbol notation.
 */
var CURRENCY_DISPLAY_SYMBOL = 'symbol';
var PriceSpecification = /*#__PURE__*/function (_NumberSpecification) {
  /**
   * Price specification constructor.
   *
   * @param string positivePattern CLDR formatting pattern for positive amounts
   * @param string negativePattern CLDR formatting pattern for negative amounts
   * @param NumberSymbol symbol Number symbol
   * @param int maxFractionDigits Maximum number of digits after decimal separator
   * @param int minFractionDigits Minimum number of digits after decimal separator
   * @param bool groupingUsed Is digits grouping used ?
   * @param int primaryGroupSize Size of primary digits group in the number
   * @param int secondaryGroupSize Size of secondary digits group in the number
   * @param string currencySymbol Currency symbol of this price (eg. : €)
   * @param currencyCode Currency code of this price (e.g.: EUR)
   *
   * @throws LocalizationException
   */
  function PriceSpecification(positivePattern, negativePattern, symbol, maxFractionDigits, minFractionDigits, groupingUsed, primaryGroupSize, secondaryGroupSize, currencySymbol, currencyCode) {
    var _this;
    _classCallCheck(this, PriceSpecification);
    _this = _callSuper(this, PriceSpecification, [positivePattern, negativePattern, symbol, maxFractionDigits, minFractionDigits, groupingUsed, primaryGroupSize, secondaryGroupSize]);
    _this.currencySymbol = currencySymbol;
    _this.currencyCode = currencyCode;
    if (!_this.currencySymbol || typeof _this.currencySymbol !== 'string') {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid currencySymbol');
    }
    if (!_this.currencyCode || typeof _this.currencyCode !== 'string') {
      throw new _exception_localization__WEBPACK_IMPORTED_MODULE_0__["default"]('Invalid currencyCode');
    }
    return _this;
  }

  /**
   * Get type of display for currency symbol.
   *
   * @return string
   */
  _inherits(PriceSpecification, _NumberSpecification);
  return _createClass(PriceSpecification, [{
    key: "getCurrencySymbol",
    value:
    /**
     * Get the currency symbol
     * e.g.: €.
     *
     * @return string
     */
    function getCurrencySymbol() {
      return this.currencySymbol;
    }

    /**
     * Get the currency ISO code
     * e.g.: EUR.
     *
     * @return string
     */
  }, {
    key: "getCurrencyCode",
    value: function getCurrencyCode() {
      return this.currencyCode;
    }
  }], [{
    key: "getCurrencyDisplay",
    value: function getCurrencyDisplay() {
      return CURRENCY_DISPLAY_SYMBOL;
    }
  }]);
}(_number__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceSpecification);

/***/ }),

/***/ "./_dev/front/events.js":
/*!******************************!*\
  !*** ./_dev/front/events.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./_dev/front/slider.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay */ "./_dev/front/overlay.js");
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */


$(document).ready(function () {
  prestashop.on('updateProductList', function () {
    (0,_overlay__WEBPACK_IMPORTED_MODULE_1__.hideOverlay)();
    (0,_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  (0,_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  prestashop.on('updateFacets', function () {
    (0,_overlay__WEBPACK_IMPORTED_MODULE_1__.showOverlay)();
  });
});

/***/ }),

/***/ "./_dev/front/overlay.js":
/*!*******************************!*\
  !*** ./_dev/front/overlay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideOverlay: () => (/* binding */ hide),
/* harmony export */   showOverlay: () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _overlay_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay.scss */ "./_dev/front/overlay.scss");
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */


var template = "<div class=\"faceted-overlay\">\n<div class=\"overlay__inner\">\n<div class=\"overlay__content\"><span class=\"spinner\"></span></div>\n</div>\n</div>";
function show() {
  if ($('.faceted-overlay').length === 1) {
    return;
  }
  $('body').append(template);
}
function hide() {
  $('.faceted-overlay').remove();
}


/***/ }),

/***/ "./_dev/front/slider.js":
/*!******************************!*\
  !*** ./_dev/front/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _urlparser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlparser */ "./_dev/front/urlparser.js");
/* harmony import */ var _cldr_number_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cldr/number-formatter */ "./_dev/cldr/number-formatter.js");
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */



var formatters = {};
var displayLabelBlock = function displayLabelBlock(formatterId, displayBlock, min, max) {
  if (formatters[formatterId] === undefined) {
    displayBlock.text(displayBlock.text().replace(/([^\d]*)(?:[\d\s.,]+)([^\d]+)(?:[\d\s.,]+)(.*)/, "$1".concat(min, "$2").concat(max, "$3")));
  } else {
    displayBlock.text("".concat(formatters[formatterId].format(min), " - ").concat(formatters[formatterId].format(max)));
  }
};

/**
 * Refresh facets sliders
 */
var refreshSliders = function refreshSliders() {
  $('.faceted-slider').each(function initializeSliders() {
    var $el = $(this);
    var values = $el.data('slider-values');
    var specifications = $el.data('slider-specifications');
    if (specifications !== null && specifications !== undefined) {
      formatters[$el.data('slider-id')] = _cldr_number_formatter__WEBPACK_IMPORTED_MODULE_1__["default"].build(specifications);
    }
    displayLabelBlock($el.data('slider-id'), $("#facet_label_".concat($el.data('slider-id'))), values === null ? $el.data('slider-min') : values[0], values === null ? $el.data('slider-max') : values[1]);
    $("#slider-range_".concat($el.data('slider-id'))).slider({
      range: true,
      min: $el.data('slider-min'),
      max: $el.data('slider-max'),
      values: [values === null ? $el.data('slider-min') : values[0], values === null ? $el.data('slider-max') : values[1]],
      stop: function stop(event, ui) {
        var nextEncodedFacetsURL = $el.data('slider-encoded-url');
        var urlsSplitted = nextEncodedFacetsURL.split('?');
        var queryParams = [];

        // Retrieve parameters if exists
        if (urlsSplitted.length > 1) {
          queryParams = (0,_urlparser__WEBPACK_IMPORTED_MODULE_0__["default"])(urlsSplitted[1]);
        }
        var found = false;
        queryParams.forEach(function (query) {
          if (query.name === 'q') {
            found = true;
          }
        });
        if (!found) {
          queryParams.push({
            name: 'q',
            value: ''
          });
        }

        // Update query parameter
        queryParams.forEach(function (query) {
          if (query.name === 'q') {
            // eslint-disable-next-line
            query.value += [query.value.length > 0 ? '/' : '', $el.data('slider-label'), '-', $el.data('slider-unit'), '-', ui.values[0], '-', ui.values[1]].join('');
          }
        });
        var requestUrl = [urlsSplitted[0], '?', $.param(queryParams)].join('');
        prestashop.emit('updateFacets', requestUrl);
      },
      slide: function slide(event, ui) {
        displayLabelBlock($el.data('slider-id'), $("#facet_label_".concat($el.data('slider-id'))), ui.values[0], ui.values[1]);
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshSliders);

/***/ }),

/***/ "./_dev/front/urlparser.js":
/*!*********************************!*\
  !*** ./_dev/front/urlparser.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */

var getQueryParameters = function getQueryParameters(params) {
  return params.split('&').map(function (str) {
    var _str$split = str.split('='),
      _str$split2 = _slicedToArray(_str$split, 2),
      key = _str$split2[0],
      val = _str$split2[1];
    return {
      name: key,
      value: decodeURIComponent(val).replace(/\+/g, ' ')
    };
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getQueryParameters);

/***/ }),

/***/ "./node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js ***!
  \*********************************************************************/
/***/ (() => {

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);

/***/ }),

/***/ "./node_modules/lodash.escaperegexp/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash.escaperegexp/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/facet.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/facet.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/overlay.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/overlay.scss ***!
  \************************************************************************************************************************************************************************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/slider.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/slider.scss ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./_dev/front/facet.scss":
/*!*******************************!*\
  !*** ./_dev/front/facet.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./facet.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/facet.scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facet_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facet_scss__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facet_scss__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_facet_scss__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./_dev/front/overlay.scss":
/*!*********************************!*\
  !*** ./_dev/front/overlay.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./overlay.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/overlay.scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./_dev/front/slider.scss":
/*!********************************!*\
  !*** ./_dev/front/slider.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./slider.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/slider.scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./_dev/front/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-ui-touch-punch */ "./node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js");
/* harmony import */ var jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./_dev/front/events.js");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.scss */ "./_dev/front/slider.scss");
/* harmony import */ var _facet_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facet.scss */ "./_dev/front/facet.scss");
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */




})();

/******/ })()
;
//# sourceMappingURL=front.js.map