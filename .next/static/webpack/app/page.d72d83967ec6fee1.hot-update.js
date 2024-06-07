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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css.module.css */ \"(app-pages-browser)/./src/app/componentes/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products/\");\n            const data = await response.json();\n            setProducts(data);\n            setListProduct(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    const orderP = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderAz,\n                children: \"Ordenar A-Z\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderP,\n                children: \"Ordenar Pre\\xe7o Menor - Maior\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: orderP,\n                children: \"Ordenar Pre\\xe7o Maior - Maior\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: listProduct.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_css_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    width: 100,\n                                    height: 100,\n                                    src: product.image,\n                                    alt: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.count\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"/E9O4rWrfrsZSujOgmU1E4N35YU=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNPO0FBRXZCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUVqREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxhQUFhO1lBQ2pCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENQLFlBQVlNO1lBQ1pKLGVBQWVJO1FBQ2pCO1FBRUFIO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssVUFBVTtRQUNkLE1BQU1DLFVBQVU7ZUFBSVI7U0FBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFDN0VYLGVBQWVPO0lBQ2pCO0lBRUEsTUFBTU0sU0FBUztRQUNiLE1BQU1OLFVBQVU7ZUFBSVI7U0FBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUssS0FBSyxHQUFHSixFQUFFSSxLQUFLO1FBQ2pFZCxlQUFlTztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNDO2dCQUFPQyxTQUFTWDswQkFBUzs7Ozs7OzBCQUMxQiw4REFBQ1U7Z0JBQU9DLFNBQVNKOzBCQUFROzs7Ozs7MEJBQ3pCLDhEQUFDRztnQkFBT0MsU0FBU0o7MEJBQVE7Ozs7OzswQkFDekIsOERBQUNLOzBCQUNFbkIsWUFBWW9CLEdBQUcsQ0FBQyxDQUFDQyx3QkFDaEIsOERBQUNGO2tDQUNDLDRFQUFDQTs0QkFBSUcsV0FBVzFCLDZEQUFXOzs4Q0FDM0IsOERBQUM0Qjs4Q0FBR0gsUUFBUVQsS0FBSzs7Ozs7OzhDQUNqQiw4REFBQ1k7OENBQUdILFFBQVFOLEtBQUs7Ozs7Ozs4Q0FDakIsOERBQUNTOzhDQUFHSCxRQUFRSSxXQUFXOzs7Ozs7OENBQ3ZCLDhEQUFDRDs4Q0FBR0gsUUFBUUssUUFBUTs7Ozs7OzhDQUNwQiw4REFBQy9CLGtEQUFLQTtvQ0FBQ2dDLE9BQU87b0NBQUtDLFFBQVE7b0NBQUtDLEtBQUtSLFFBQVFTLEtBQUs7b0NBQUVDLEtBQUtWLFFBQVFULEtBQUs7Ozs7Ozs4Q0FDdEUsOERBQUNZOzhDQUFHSCxRQUFRVyxLQUFLOzs7Ozs7Ozs7Ozs7dUJBUFRYLFFBQVFZLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjOUI7R0E5Q3dCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRlcy9NYWluLmpzPzJlMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7ICAvLyBBZGljaW9uYSBlc3NhIGxpbmhhIHBhcmEgaW5kaWNhciBxdWUgbyBjb21wb25lbnRlIMOpIGRvIGxhZG8gZG8gY2xpZW50ZVxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Nzcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0UHJvZHVjdCwgc2V0TGlzdFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0UHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy9cIik7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldFByb2R1Y3RzKGRhdGEpO1xyXG4gICAgICBzZXRMaXN0UHJvZHVjdChkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0UHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJBeiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKSk7XHJcbiAgICBzZXRMaXN0UHJvZHVjdChuZXdMaXN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcmRlclAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XHJcbiAgICBzZXRMaXN0UHJvZHVjdChuZXdMaXN0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJBen0+T3JkZW5hciBBLVo8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclB9Pk9yZGVuYXIgUHJlw6dvIE1lbm9yIC0gTWFpb3I8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclB9Pk9yZGVuYXIgUHJlw6dvIE1haW9yIC0gTWFpb3I8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bGlzdFByb2R1Y3QubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LmNvdW50fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJzdHlsZXMiLCJNYWluIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxpc3RQcm9kdWN0Iiwic2V0TGlzdFByb2R1Y3QiLCJnZXRQcm9kdWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib3JkZXJBeiIsIm5ld0xpc3QiLCJzb3J0IiwiYSIsImIiLCJ0aXRsZSIsImxvY2FsZUNvbXBhcmUiLCJvcmRlclAiLCJwcmljZSIsIm1haW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2IiwibWFwIiwicHJvZHVjdCIsImNsYXNzTmFtZSIsImNhcmQiLCJwIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJjb3VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});