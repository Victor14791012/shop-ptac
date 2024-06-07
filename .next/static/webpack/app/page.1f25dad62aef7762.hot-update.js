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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css.module.css */ \"(app-pages-browser)/./src/app/componentes/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products/\");\n            const data = await response.json();\n            setProducts(data);\n            setListProduct(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    const orderP = ()=>{\n        const no = [\n            ...listProduct\n        ].reverse;\n        setListProduct(no);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderAz,\n                children: \"Ordenar A-Z\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderP,\n                children: \"Ordenar Pre\\xe7o\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: listProduct.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_css_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    width: 100,\n                                    height: 100,\n                                    src: product.image,\n                                    alt: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.count\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"/E9O4rWrfrsZSujOgmU1E4N35YU=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNPO0FBRXZCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUVqREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxhQUFhO1lBQ2pCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENQLFlBQVlNO1lBQ1pKLGVBQWVJO1FBQ2pCO1FBRUFIO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssVUFBVTtRQUNkLE1BQU1DLFVBQVU7ZUFBSVI7U0FBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFDN0VYLGVBQWVPO0lBQ2pCO0lBRUEsTUFBTU0sU0FBUTtRQUNaLE1BQU1DLEtBQUs7ZUFBSWY7U0FBWSxDQUFDZ0IsT0FBTztRQUNuQ2YsZUFBZWM7SUFDakI7SUFFQSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQztnQkFBT0MsU0FBU1o7MEJBQVM7Ozs7OzswQkFDMUIsOERBQUNXO2dCQUFPQyxTQUFTTDswQkFBUTs7Ozs7OzBCQUN6Qiw4REFBQ007MEJBQ0VwQixZQUFZcUIsR0FBRyxDQUFDLENBQUNDLHdCQUNoQiw4REFBQ0Y7a0NBQ0MsNEVBQUNBOzRCQUFJRyxXQUFXM0IsNkRBQVc7OzhDQUMzQiw4REFBQzZCOzhDQUFHSCxRQUFRVixLQUFLOzs7Ozs7OENBQ2pCLDhEQUFDYTs4Q0FBR0gsUUFBUUksS0FBSzs7Ozs7OzhDQUNqQiw4REFBQ0Q7OENBQUdILFFBQVFLLFdBQVc7Ozs7Ozs4Q0FDdkIsOERBQUNGOzhDQUFHSCxRQUFRTSxRQUFROzs7Ozs7OENBQ3BCLDhEQUFDakMsa0RBQUtBO29DQUFDa0MsT0FBTztvQ0FBS0MsUUFBUTtvQ0FBS0MsS0FBS1QsUUFBUVUsS0FBSztvQ0FBRUMsS0FBS1gsUUFBUVYsS0FBSzs7Ozs7OzhDQUN0RSw4REFBQ2E7OENBQUdILFFBQVFZLEtBQUs7Ozs7Ozs7Ozs7Ozt1QkFQVFosUUFBUWEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQWM5QjtHQTdDd0J0QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudGVzL01haW4uanM/MmUwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgIC8vIEFkaWNpb25hIGVzc2EgbGluaGEgcGFyYSBpbmRpY2FyIHF1ZSBvIGNvbXBvbmVudGUgw6kgZG8gbGFkbyBkbyBjbGllbnRlXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY3NzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3RQcm9kdWN0LCBzZXRMaXN0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL1wiKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XHJcbiAgICAgIHNldExpc3RQcm9kdWN0KGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvcmRlckF6ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyUD0gKCkgPT4ge1xyXG4gICAgY29uc3Qgbm8gPSBbLi4ubGlzdFByb2R1Y3RdLnJldmVyc2VcclxuICAgIHNldExpc3RQcm9kdWN0KG5vKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlckF6fT5PcmRlbmFyIEEtWjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyUH0+T3JkZW5hciBQcmXDp288L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bGlzdFByb2R1Y3QubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LmNvdW50fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJzdHlsZXMiLCJNYWluIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxpc3RQcm9kdWN0Iiwic2V0TGlzdFByb2R1Y3QiLCJnZXRQcm9kdWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib3JkZXJBeiIsIm5ld0xpc3QiLCJzb3J0IiwiYSIsImIiLCJ0aXRsZSIsImxvY2FsZUNvbXBhcmUiLCJvcmRlclAiLCJubyIsInJldmVyc2UiLCJtYWluIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsIm1hcCIsInByb2R1Y3QiLCJjbGFzc05hbWUiLCJjYXJkIiwicCIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJjb3VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});