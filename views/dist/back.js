/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/back/blocklayered.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/back/blocklayered.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./_dev/back/blocklayered.scss":
/*!*************************************!*\
  !*** ./_dev/back/blocklayered.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_blocklayered_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./blocklayered.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/back/blocklayered.scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_blocklayered_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_blocklayered_scss__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_blocklayered_scss__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_blocklayered_scss__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

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
/*!****************************!*\
  !*** ./_dev/back/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocklayered_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocklayered.scss */ "./_dev/back/blocklayered.scss");
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


/* eslint-disable no-unused-vars, no-alert */
window.checkForm = function checkForm() {
  var isCategorySelected = false;
  var isCategoryControllerSelected = false;
  var isControllerSelected = false;
  var isFilterSelected = false;
  $('#categories-treeview input[type=checkbox]').each(function checkCategoriesCheckboxes() {
    if ($(this).prop('checked')) {
      isCategorySelected = true;
      return false;
    }
    return true;
  });
  $('input[name="controllers[]"]').each(function checkPagesCheckboxes() {
    if ($(this).prop('checked')) {
      isControllerSelected = true;
      if ($(this).val() === 'category') {
        isCategoryControllerSelected = true;
      }
    }
  });
  $('.filter_list_item input[type=checkbox]').each(function checkFilterListCheckboxes() {
    if ($(this).prop('checked')) {
      isFilterSelected = true;
      return false;
    }
    return true;
  });

  // If no controller is selected at all
  if (!isControllerSelected) {
    alert(translations.no_selected_controllers);
    return false;
  }

  // If category controller was checked, but no category is selected
  if (isCategoryControllerSelected && !isCategorySelected) {
    alert(translations.no_selected_categories);
    $('#categories-treeview input[type=checkbox]').first().focus();
    return false;
  }

  // If no filter is selected at all
  if (!isFilterSelected) {
    alert(translations.no_selected_filters);
    $('#filter_list_item input[type=checkbox]').first().focus();
    return false;
  }
  return true;
};
$(document).ready(function () {
  $('.ajaxcall').click(function onAjaxCall() {
    if (this.legend === undefined) {
      this.legend = $(this).html();
    }
    if (this.running === undefined) {
      this.running = false;
    }
    if (this.running === true) {
      return false;
    }
    $('.ajax-message').hide();
    this.running = true;
    if (typeof this.restartAllowed === 'undefined' || this.restartAllowed) {
      $(this).html(this.legend + translations.in_progress);
      $('#indexing-warning').show();
    }
    this.restartAllowed = false;
    var type = $(this).attr('rel');
    $.ajax({
      url: "".concat(this.href, "&ajax=1"),
      context: this,
      dataType: 'json',
      cache: 'false',
      success: function success() {
        this.running = false;
        this.restartAllowed = true;
        $('#indexing-warning').hide();
        $(this).html(this.legend);
        $('#ajax-message-ok span').html(type === 'price' ? translations.url_indexation_finished : translations.attribute_indexation_finished);
        $('#ajax-message-ok').show();
      },
      error: function error() {
        this.restartAllowed = true;
        $('#indexing-warning').hide();
        $('#ajax-message-ko span').html(type === 'price' ? translations.url_indexation_failed : translations.attribute_indexation_failed);
        $('#ajax-message-ko').show();
        $(this).html(this.legend);
        this.running = false;
      }
    });
    return false;
  });
  var totalCount = 0;
  $('.ajaxcall-recurcive').each(function (it, elm) {
    $(elm).click(function onAjaxRecursiveCall(e) {
      e.preventDefault();
      if (this.cursor === undefined) {
        this.cursor = 0;
      }
      if (this.legend === undefined) {
        this.legend = $(this).html();
      }
      if (this.running === undefined) {
        this.running = false;
      }
      if (this.running === true) {
        return false;
      }
      $('.ajax-message').hide();
      this.running = true;
      if (typeof this.restartAllowed === 'undefined' || this.restartAllowed) {
        $(this).html(this.legend + translations.in_progress);
        $('#indexing-warning').show();
      }
      this.restartAllowed = false;
      $.ajax({
        url: "".concat(this.href, "&ajax=1&cursor=").concat(this.cursor),
        context: this,
        dataType: 'json',
        cache: 'false',
        success: function success(res) {
          this.running = false;
          if (res.result) {
            this.cursor = 0;
            totalCount = 0;
            $('#indexing-warning').hide();
            $(this).html(this.legend);
            $('#ajax-message-ok span').html(translations.price_indexation_finished);
            $('#ajax-message-ok').show();
            return;
          }
          totalCount += parseInt(res.count, 10);
          this.cursor = parseInt(res.cursor, 10);
          $(this).html(this.legend + translations.price_indexation_in_progress.replace('%s', "".concat(totalCount, "/").concat(res.total)));
          $(this).click();
        },
        error: function error(res) {
          this.restartAllowed = true;
          $('#indexing-warning').hide();
          $('#ajax-message-ko span').html(translations.price_indexation_failed);
          $('#ajax-message-ko').show();
          $(this).html(this.legend);
          this.cursor = 0;
          this.running = false;
        }
      });
      return false;
    });
  });
  if (typeof PS_LAYERED_INDEXED !== 'undefined' && PS_LAYERED_INDEXED) {
    $('#url-indexe').click();
    $('#full-index').click();
  }
  if (typeof Sortable !== 'undefined') {
    var listFilters = document.getElementById('list-filters');
    if (listFilters !== null) {
      new Sortable(listFilters, {
        animation: 150,
        ghostClass: 'sortable-ghost'
      });
    }
  } else {
    $('.sortable').sortable({
      forcePlaceholderSize: true
    });
  }
  $('.filter_list_item input[type=checkbox]').click(function onFilterLickItemCheckboxesClicked() {
    var currentSelectedFiltersCount = parseInt($('#selected_filters').html(), 10);
    $('#selected_filters').html($(this).prop('checked') ? currentSelectedFiltersCount + 1 : currentSelectedFiltersCount - 1);
  });
  if (typeof window.filters !== 'undefined') {
    var filters = JSON.parse(window.filters);
    var container = null;
    var $el;
    Object.keys(filters).forEach(function (filter) {
      $el = $("#".concat(filter));
      $el.prop('checked', true);
      $('#selected_filters').html(parseInt($('#selected_filters').html(), 10) + 1);
      $("select[name=\"".concat(filter, "_filter_type\"]")).val(filters[filter].filter_type);
      $("select[name=\"".concat(filter, "_filter_show_limit\"]")).val(filters[filter].filter_show_limit);
      if (container === null) {
        container = $("#".concat(filter)).closest('ul');
        $el.closest('li').detach().prependTo(container);
      } else {
        $el.closest('li').detach().insertAfter(container);
      }
      container = $el.closest('li');
    });
  }
});
$(document).on('ready', function () {
  var layeredDefaultCategory = $('input[name="ps_layered_filter_by_default_category"]');
  layeredDefaultCategory.on('change', function initializeOptions(event) {
    var elm = $(this);
    if (!elm.prop('checked')) {
      return;
    }
    if (elm.val() === '1') {
      $('input[name="ps_layered_full_tree"][value="0"]').prop('checked', true);
      $('input[name="ps_layered_full_tree"]').prop('disabled', true);
    } else {
      $('input[name="ps_layered_full_tree"]').prop('disabled', false);
    }
  });
  layeredDefaultCategory.filter('[value="1"]').trigger('change');
});
})();

/******/ })()
;
//# sourceMappingURL=back.js.map