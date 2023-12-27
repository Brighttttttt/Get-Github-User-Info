"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[username]",{

/***/ "./Components/Pagination.js":
/*!**********************************!*\
  !*** ./Components/Pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Pagination.module.css */ \"./styles/Pagination.module.css\");\n/* harmony import */ var _styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\r\n *\r\n * @param itemsPerPage\r\n * @param allItems\r\n * @param paginate\r\n * @param currentPage\r\n * @returns {JSX.Element}\r\n * @constructor\r\n */ function Pagination(param) {\n    var itemsPerPage = param.itemsPerPage, allItems = param.allItems, paginate = param.paginate, currentPage = param.currentPage;\n    var _this = this;\n    var activePage = /**\r\n     * \r\n     * @param item\r\n     * @param currentPage\r\n     */ function activePage(item, currentPage) {\n        if (item === currentPage) className = (_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1___default().active);\n        else className = (_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1___default().paginationItem);\n    };\n    var pageNumbers = [];\n    for(var i = 1; i <= Math.ceil(allItems / itemsPerPage); i++)pageNumbers.push(i);\n    var className;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1___default().paginationBox),\n                children: pageNumbers.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: activePage(item, currentPage),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return paginate(item);\n                            },\n                            className: className,\n                            children: item\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LEGION\\\\Documents\\\\My Codes\\\\Web\\\\Phpstorm\\\\Get-Github-User-Info\\\\Components\\\\Pagination.js\",\n                            lineNumber: 37,\n                            columnNumber: 29\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LEGION\\\\Documents\\\\My Codes\\\\Web\\\\Phpstorm\\\\Get-Github-User-Info\\\\Components\\\\Pagination.js\",\n                        lineNumber: 36,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LEGION\\\\Documents\\\\My Codes\\\\Web\\\\Phpstorm\\\\Get-Github-User-Info\\\\Components\\\\Pagination.js\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LEGION\\\\Documents\\\\My Codes\\\\Web\\\\Phpstorm\\\\Get-Github-User-Info\\\\Components\\\\Pagination.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LEGION\\\\Documents\\\\My Codes\\\\Web\\\\Phpstorm\\\\Get-Github-User-Info\\\\Components\\\\Pagination.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n};\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1BhZ2luYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFxRDtBQUVyRDs7O1FBcUJhTSxVQUFVO1FBQ2YsSUFBR0MsSUFBSTthQUdIQyxTQUFTO0tBQ2hCO0lBaEJELElBQU1HO0lBQ01DLENBQUMsSUFBRUMsSUFBSSxDQUFDQyxJQUFJLENBQUNYLFFBQVEsR0FBQ0Q7SUFHbEMsSUFBSU0sU0FBUztJQWNiO2tCQUVROztnQkFDUUE7MEJBQ0NHO3lDQUNHO3dCQUFJVyxPQUFPLEVBQUVoQixVQUFVLENBQUNDLEVBQUFBLDZFQUFNRixDQUFXOzhHQUNyQzs7OzZCQUFnQzs7NEZBQXlCRTs7Ozs7aUNBQVc7Ozs7OzZCQUNuRTtpQkFDUixDQUFDOzs7OztvQkFDRDs7Ozs7Z0JBQ0g7Ozs7O1lBQ0osQ0FDVDtDQUNKO0FBaEN1Qk4sS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL1BhZ2luYXRpb24uanM/ZjkwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vc3R5bGVzL1BhZ2luYXRpb24ubW9kdWxlLmNzc1wiXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGl0ZW1zUGVyUGFnZVxyXG4gKiBAcGFyYW0gYWxsSXRlbXNcclxuICogQHBhcmFtIHBhZ2luYXRlXHJcbiAqIEBwYXJhbSBjdXJyZW50UGFnZVxyXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7aXRlbXNQZXJQYWdlLCBhbGxJdGVtcywgcGFnaW5hdGUsIGN1cnJlbnRQYWdlfSkge1xyXG4gICAgY29uc3QgcGFnZU51bWJlcnM9W107XHJcbiAgICBmb3IobGV0IGk9MTtpPD1NYXRoLmNlaWwoYWxsSXRlbXMvaXRlbXNQZXJQYWdlKTtpKyspXHJcbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChpKTtcclxuXHJcbiAgICBsZXQgY2xhc3NOYW1lO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGl0ZW1cclxuICAgICAqIEBwYXJhbSBjdXJyZW50UGFnZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBhY3RpdmVQYWdlKGl0ZW0sIGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgaWYoaXRlbT09PWN1cnJlbnRQYWdlKVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9Y2xhc3Nlcy5hY3RpdmU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9Y2xhc3Nlcy5wYWdpbmF0aW9uSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMucGFnaW5hdGlvbkJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhZ2VOdW1iZXJzLm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e2FjdGl2ZVBhZ2UoaXRlbSwgY3VycmVudFBhZ2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PnBhZ2luYXRlKGl0ZW0pfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2l0ZW19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiUGFnaW5hdGlvbiIsIml0ZW1zUGVyUGFnZSIsImFsbEl0ZW1zIiwicGFnaW5hdGUiLCJjdXJyZW50UGFnZSIsImFjdGl2ZVBhZ2UiLCJpdGVtIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwicGFnaW5hdGlvbkl0ZW0iLCJwYWdlTnVtYmVycyIsImkiLCJNYXRoIiwiY2VpbCIsInB1c2giLCJkaXYiLCJuYXYiLCJ1bCIsInBhZ2luYXRpb25Cb3giLCJtYXAiLCJsaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Pagination.js\n"));

/***/ })

});