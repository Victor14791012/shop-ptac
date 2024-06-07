"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/componentes/Main.js":
/*!*************************************!*\
  !*** ./src/app/componentes/Main.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css.module.css */ \"(app-pages-browser)/./src/app/componentes/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products/\");\n            const data = await response.json();\n            setProducts(data);\n            setListProduct(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    const orderP = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    const orderPr = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>b.price - a.price);\n        setListProduct(newList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_css_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderAz,\n                children: \"Ordenar A-Z\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderP,\n                children: \"Ordenar Pre\\xe7o Menor - Maior\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderPr,\n                children: \"Ordenar Pre\\xe7o Maior - Menor\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 44,\n                columnNumber: 70\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: listProduct.map((produto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_css_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: produto.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: produto.price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: produto.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 53,\n                                columnNumber: 14\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: produto.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 54,\n                                columnNumber: 14\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                width: 100,\n                                height: 100,\n                                src: produto.image\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: produto.count\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, produto.id, true, {\n                        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 50,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n        lineNumber: 39,\n        columnNumber: 7\n    }, this);\n}\n_s(Main, \"/E9O4rWrfrsZSujOgmU1E4N35YU=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNPO0FBRXZCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUVqREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxhQUFhO1lBQ2pCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENQLFlBQVlNO1lBQ1pKLGVBQWVJO1FBQ2pCO1FBRUFIO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssVUFBVTtRQUNkLE1BQU1DLFVBQVU7ZUFBSVI7U0FBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFDN0VYLGVBQWVPO0lBQ2pCO0lBRUEsTUFBTU0sU0FBUztRQUNiLE1BQU1OLFVBQVU7ZUFBSVI7U0FBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUssS0FBSyxHQUFHSixFQUFFSSxLQUFLO1FBQ2pFZCxlQUFlTztJQUNqQjtJQUVBLE1BQU1RLFVBQVU7UUFDZCxNQUFNUixVQUFVO2VBQUlSO1NBQVksQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVJLEtBQUssR0FBR0wsRUFBRUssS0FBSztRQUNqRWQsZUFBZU87SUFDakI7SUFFQSxxQkFHSSw4REFBQ1M7UUFBS0MsV0FBV3RCLDZEQUFXOzswQkFHNUIsOERBQUN1QjtnQkFBT0MsU0FBU2I7MEJBQVM7Ozs7OzswQkFDMUIsOERBQUNZO2dCQUFPQyxTQUFTTjswQkFBUTs7Ozs7OzBCQUN6Qiw4REFBQ0s7Z0JBQU9DLFNBQVNKOzBCQUFTOzs7Ozs7WUFBb0M7MEJBQUMsOERBQUNLOzs7OzswQkFHaEUsOERBQUNDO2dCQUFJSixXQUFXdEIsNkRBQVc7MEJBRWxCSSxZQUFZdUIsR0FBRyxDQUFDLENBQUNDLHdCQUNsQiw4REFBQ0Y7d0JBQXFCSixXQUFXdEIsNkRBQVc7OzBDQUM1Qyw4REFBQzhCOzBDQUFHRixRQUFRWixLQUFLOzs7Ozs7MENBQ2pCLDhEQUFDYzswQ0FBR0YsUUFBUVQsS0FBSzs7Ozs7OzBDQUNsQiw4REFBQ1c7MENBQUdGLFFBQVFHLFdBQVc7Ozs7OzswQ0FDdkIsOERBQUNEOzBDQUFHRixRQUFRSSxRQUFROzs7Ozs7MENBQ25CLDhEQUFDakMsa0RBQUtBO2dDQUNOa0MsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkMsS0FBS1AsUUFBUVEsS0FBSzs7Ozs7OzBDQUNsQiw4REFBQ047MENBQUdGLFFBQVFTLEtBQUs7Ozs7Ozs7dUJBVFBULFFBQVFVLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjVCO0dBOURrQnJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcz8yZTAyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyAgLy8gQWRpY2lvbmEgZXNzYSBsaW5oYSBwYXJhIGluZGljYXIgcXVlIG8gY29tcG9uZW50ZSDDqSBkbyBsYWRvIGRvIGNsaWVudGVcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jc3MubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdFByb2R1Y3QsIHNldExpc3RQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgc2V0TGlzdFByb2R1Y3QoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9yZGVyQXogPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSkpO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJQID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJQciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGIucHJpY2UgLSBhLnByaWNlKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIFxyXG4gICAgIFxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyQXp9Pk9yZGVuYXIgQS1aPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJQfT5PcmRlbmFyIFByZcOnbyBNZW5vciAtIE1haW9yPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJQcn0+T3JkZW5hciBQcmXDp28gTWFpb3IgLSBNZW5vcjwvYnV0dG9uPiA8YnI+PC9icj5cclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7bGlzdFByb2R1Y3QubWFwKChwcm9kdXRvKT0+XHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1dG8uaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9ID5cclxuICAgICAgICAgICAgICA8cD57cHJvZHV0by50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+e3Byb2R1dG8ucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgPHA+e3Byb2R1dG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgPHA+e3Byb2R1dG8uY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9kdXRvLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgIDxwPntwcm9kdXRvLmNvdW50fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJzdHlsZXMiLCJNYWluIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxpc3RQcm9kdWN0Iiwic2V0TGlzdFByb2R1Y3QiLCJnZXRQcm9kdWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib3JkZXJBeiIsIm5ld0xpc3QiLCJzb3J0IiwiYSIsImIiLCJ0aXRsZSIsImxvY2FsZUNvbXBhcmUiLCJvcmRlclAiLCJwcmljZSIsIm9yZGVyUHIiLCJtYWluIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImJyIiwiZGl2IiwibWFwIiwicHJvZHV0byIsImNhcmQiLCJwIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJjb3VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});