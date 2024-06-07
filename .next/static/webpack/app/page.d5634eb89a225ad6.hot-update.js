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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css.module.css */ \"(app-pages-browser)/./src/app/componentes/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products/\");\n            const data = await response.json();\n            setProducts(data);\n            setListProduct(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    const orderP = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    const orderPr = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>b.price - a.price);\n        setListProduct(newList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_css_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderAz,\n                children: \"Ordenar A-Z\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderP,\n                children: \"Ordenar Pre\\xe7o Menor - Maior\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderPr,\n                children: \"Ordenar Pre\\xe7o Maior - Menor\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: listProduct.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_css_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    width: 100,\n                                    height: 100,\n                                    src: product.image,\n                                    alt: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.count\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"/E9O4rWrfrsZSujOgmU1E4N35YU=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNPO0FBRXZCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUVqREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxhQUFhO1lBQ2pCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENQLFlBQVlNO1lBQ1pKLGVBQWVJO1FBQ2pCO1FBRUFIO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssVUFBVTtRQUNkLE1BQU1DLFVBQVU7ZUFBSVI7U0FBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFDN0VYLGVBQWVPO0lBQ2pCO0lBRUEsTUFBTU0sU0FBUztRQUNiLE1BQU1OLFVBQVU7ZUFBSVI7U0FBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUssS0FBSyxHQUFHSixFQUFFSSxLQUFLO1FBQ2pFZCxlQUFlTztJQUNqQjtJQUVBLE1BQU1RLFVBQVU7UUFDZCxNQUFNUixVQUFVO2VBQUlSO1NBQVksQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVJLEtBQUssR0FBR0wsRUFBRUssS0FBSztRQUNqRWQsZUFBZU87SUFDakI7SUFFQSxxQkFDRSw4REFBQ1M7UUFBS0MsV0FBV3RCLDZEQUFXOzswQkFDMUIsOERBQUN1QjtnQkFBT0MsU0FBU2I7MEJBQVM7Ozs7OzswQkFDMUIsOERBQUNZO2dCQUFPQyxTQUFTTjswQkFBUTs7Ozs7OzBCQUN6Qiw4REFBQ0s7Z0JBQU9DLFNBQVNKOzBCQUFTOzs7Ozs7MEJBQzFCLDhEQUFDSzswQkFDRXJCLFlBQVlzQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2hCLDhEQUFDRjtrQ0FDQyw0RUFBQ0E7NEJBQUlILFdBQVd0Qiw2REFBVzs7OENBQzNCLDhEQUFDNkI7OENBQUdGLFFBQVFYLEtBQUs7Ozs7Ozs4Q0FDakIsOERBQUNhOzhDQUFHRixRQUFRUixLQUFLOzs7Ozs7OENBQ2pCLDhEQUFDVTs4Q0FBR0YsUUFBUUcsV0FBVzs7Ozs7OzhDQUN2Qiw4REFBQ0Q7OENBQUdGLFFBQVFJLFFBQVE7Ozs7Ozs4Q0FDcEIsOERBQUNoQyxrREFBS0E7b0NBQUNpQyxPQUFPO29DQUFLQyxRQUFRO29DQUFLQyxLQUFLUCxRQUFRUSxLQUFLO29DQUFFQyxLQUFLVCxRQUFRWCxLQUFLOzs7Ozs7OENBQ3RFLDhEQUFDYTs4Q0FBR0YsUUFBUVUsS0FBSzs7Ozs7Ozs7Ozs7O3VCQVBUVixRQUFRVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBYzlCO0dBbkR3QnJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcz8yZTAyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyAgLy8gQWRpY2lvbmEgZXNzYSBsaW5oYSBwYXJhIGluZGljYXIgcXVlIG8gY29tcG9uZW50ZSDDqSBkbyBsYWRvIGRvIGNsaWVudGVcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jc3MubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdFByb2R1Y3QsIHNldExpc3RQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgc2V0TGlzdFByb2R1Y3QoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9yZGVyQXogPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSkpO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJQID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJQciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGIucHJpY2UgLSBhLnByaWNlKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlckF6fT5PcmRlbmFyIEEtWjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyUH0+T3JkZW5hciBQcmXDp28gTWVub3IgLSBNYWlvcjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyUHJ9Pk9yZGVuYXIgUHJlw6dvIE1haW9yIC0gTWVub3I8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bGlzdFByb2R1Y3QubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0LnRpdGxlfSAvPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC5jb3VudH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwic3R5bGVzIiwiTWFpbiIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsaXN0UHJvZHVjdCIsInNldExpc3RQcm9kdWN0IiwiZ2V0UHJvZHVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9yZGVyQXoiLCJuZXdMaXN0Iiwic29ydCIsImEiLCJiIiwidGl0bGUiLCJsb2NhbGVDb21wYXJlIiwib3JkZXJQIiwicHJpY2UiLCJvcmRlclByIiwibWFpbiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJtYXAiLCJwcm9kdWN0IiwiY2FyZCIsInAiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZSIsImFsdCIsImNvdW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});