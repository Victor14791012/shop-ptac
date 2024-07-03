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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.module.css */ \"(app-pages-browser)/./src/app/componentes/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/componentes/Spinner.js\");\n/* harmony import */ var _ErrorGetData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorGetData */ \"(app-pages-browser)/./src/app/componentes/ErrorGetData.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const [listProducts, setListProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listComplete, setListComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorFetch, setErrorFetch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            try {\n                const response = await fetch(\"https://fakestoreapi.com/products\");\n                const data = await response.json();\n                setListProducts(data);\n                setListComplete(data);\n            } catch (e) {\n                setErrorFetch(true);\n            }\n        };\n        getProduct();\n    }, []);\n    const orderAZ = ()=>{\n        const newList = [\n            ...listProducts\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProducts(newList);\n    };\n    const orderPriceMenor = ()=>{\n        const newList = [\n            ...listProducts\n        ].sort((a, b)=>a.price - b.price);\n        setListProducts(newList);\n    };\n    const orderPriceMaior = ()=>{\n        const newList = [\n            ...listProducts\n        ].sort((a, b)=>b.price - a.price);\n        setListProducts(newList);\n    };\n    const searchText = (text)=>{\n        setSearch(text);\n        if (text.trim() === \"\") {\n            setListProducts(listComplete);\n            return;\n        }\n        const newList = listComplete.filter((products)=>products.title.toUpperCase().trim().includes(text.toUpperCase().trim()));\n        setListProducts(newList);\n    };\n    if (listProducts.length === 0) {\n        if (errorFetch === true) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorGetData__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 61,\n                columnNumber: 14\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 63,\n                columnNumber: 14\n            }, this);\n        }\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: search,\n                        onChange: (e)=>searchText(e.target.value),\n                        placeholder: \"Pesquisar produtos...\",\n                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchInput)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderAZ,\n                            children: \"Ordenar A-Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPriceMenor,\n                            children: \"Ordenar Pre\\xe7o Menor - Maior\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPriceMaior,\n                            children: \"Ordenar Pre\\xe7o Maior - Menor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().productsContainer),\n                    children: listProducts.map((produto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().productCard),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().productImage),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        width: 100,\n                                        height: 100,\n                                        src: produto.image,\n                                        alt: produto.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().productInfo),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().productName),\n                                            children: produto.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().productPrice),\n                                            children: [\n                                                \"$\",\n                                                produto.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().productCategory),\n                                            children: produto.category\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().productActions),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().addToCart),\n                                                    children: \"Adicionar ao Carrinho\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    href: \"/product/\".concat(produto.id),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        class: \"bi bi-info-circle\",\n                                                        style: {\n                                                            fontSize: \"2rem\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 20\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, produto.id, true, {\n                            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Not-Victor\\\\Desktop\\\\shop-ptac\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Main, \"bEAfcdSNLmGPe/7HgNTd6yIQIbc=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNRO0FBQ1A7QUFDVTtBQUNiO0FBR2QsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDWCxnQkFBZ0JVO2dCQUNoQlIsZ0JBQWdCUTtZQUNsQixFQUFFLFVBQU07Z0JBQ05KLGNBQWM7WUFDaEI7UUFDRjtRQUNBQztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlkO1NBQWEsQ0FBQ2UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVFLEtBQUssQ0FBQ0MsYUFBYSxDQUFDRixFQUFFQyxLQUFLO1FBQzlFakIsZ0JBQWdCYTtJQUNsQjtJQUVBLE1BQU1NLGtCQUFrQjtRQUN0QixNQUFNTixVQUFVO2VBQUlkO1NBQWEsQ0FBQ2UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVLLEtBQUssR0FBR0osRUFBRUksS0FBSztRQUNsRXBCLGdCQUFnQmE7SUFDbEI7SUFFQSxNQUFNUSxrQkFBa0I7UUFDdEIsTUFBTVIsVUFBVTtlQUFJZDtTQUFhLENBQUNlLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFSSxLQUFLLEdBQUdMLEVBQUVLLEtBQUs7UUFDbEVwQixnQkFBZ0JhO0lBQ2xCO0lBRUEsTUFBTVMsYUFBYSxDQUFDQztRQUNsQm5CLFVBQVVtQjtRQUVWLElBQUlBLEtBQUtDLElBQUksT0FBTyxJQUFJO1lBQ3RCeEIsZ0JBQWdCQztZQUNoQjtRQUNGO1FBRUEsTUFBTVksVUFBVVosYUFBYXdCLE1BQU0sQ0FBQyxDQUFDQyxXQUNuQ0EsU0FBU1QsS0FBSyxDQUFDVSxXQUFXLEdBQUdILElBQUksR0FBR0ksUUFBUSxDQUFDTCxLQUFLSSxXQUFXLEdBQUdILElBQUk7UUFFdEV4QixnQkFBZ0JhO0lBQ2xCO0lBRUEsSUFBSWQsYUFBYThCLE1BQU0sS0FBSyxHQUFHO1FBQzdCLElBQUl4QixlQUFlLE1BQU07WUFDdkIscUJBQU8sOERBQUNULHFEQUFZQTs7Ozs7UUFDdEIsT0FBTztZQUNMLHFCQUFPLDhEQUFDRCxnREFBT0E7Ozs7O1FBQ2pCO0lBQ0YsT0FBTztRQUNMLHFCQUNFLDhEQUFDbUM7WUFBS0MsV0FBV3JDLDhEQUFXOzs4QkFDMUIsOERBQUNzQztvQkFBSUQsV0FBV3JDLHlFQUFzQjs4QkFDcEMsNEVBQUN3Qzt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBT2pDO3dCQUNQa0MsVUFBVSxDQUFDQyxJQUFNaEIsV0FBV2dCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDMUNJLGFBQVk7d0JBQ1pULFdBQVdyQyxxRUFBa0I7Ozs7Ozs7Ozs7OzhCQUdqQyw4REFBQ3NDO29CQUFJRCxXQUFXckMseUVBQXNCOztzQ0FDcEMsOERBQUNpRDs0QkFBT0MsU0FBU2hDO3NDQUFTOzs7Ozs7c0NBQzFCLDhEQUFDK0I7NEJBQU9DLFNBQVN6QjtzQ0FBaUI7Ozs7OztzQ0FDbEMsOERBQUN3Qjs0QkFBT0MsU0FBU3ZCO3NDQUFpQjs7Ozs7Ozs7Ozs7OzhCQUVwQyw4REFBQ1c7b0JBQUlELFdBQVdyQywyRUFBd0I7OEJBQ3JDSyxhQUFhK0MsR0FBRyxDQUFDLENBQUNDLHdCQUNqQiw4REFBQ2Y7NEJBQXFCRCxXQUFXckMscUVBQWtCOzs4Q0FDakQsOERBQUNzQztvQ0FBSUQsV0FBV3JDLHNFQUFtQjs4Q0FDakMsNEVBQUNELGtEQUFLQTt3Q0FBQ3lELE9BQU87d0NBQUtDLFFBQVE7d0NBQUtDLEtBQUtMLFFBQVFNLEtBQUs7d0NBQUVDLEtBQUtQLFFBQVE5QixLQUFLOzs7Ozs7Ozs7Ozs4Q0FFeEUsOERBQUNlO29DQUFJRCxXQUFXckMscUVBQWtCOztzREFDaEMsOERBQUM4RDs0Q0FBRXpCLFdBQVdyQyxxRUFBa0I7c0RBQUdxRCxRQUFROUIsS0FBSzs7Ozs7O3NEQUNoRCw4REFBQ3VDOzRDQUFFekIsV0FBV3JDLHNFQUFtQjs7Z0RBQUU7Z0RBQUVxRCxRQUFRM0IsS0FBSzs7Ozs7OztzREFDbEQsOERBQUNvQzs0Q0FBRXpCLFdBQVdyQyx5RUFBc0I7c0RBQUdxRCxRQUFRYSxRQUFROzs7Ozs7c0RBQ3ZELDhEQUFDNUI7NENBQUlELFdBQVdyQyx3RUFBcUI7OzhEQUNuQyw4REFBQ2lEO29EQUFPWixXQUFXckMsbUVBQWdCOzhEQUFFOzs7Ozs7OERBQ3JDLDhEQUFDRyxpREFBSUE7b0RBQUNrRSxNQUFNLFlBQXVCLE9BQVhoQixRQUFRaUIsRUFBRTs4REFDakMsNEVBQUNDO3dEQUFFQyxPQUFNO3dEQUFvQkMsT0FBTzs0REFBRUMsVUFBVTt3REFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQVhwRHJCLFFBQVFpQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0lBcUI5QjtBQUNGO0dBaEd3QmxFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcz8yZTAyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21haW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBFcnJvckdldERhdGEgZnJvbSAnLi9FcnJvckdldERhdGEnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCBbbGlzdFByb2R1Y3RzLCBzZXRMaXN0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0Q29tcGxldGUsIHNldExpc3RDb21wbGV0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvckZldGNoLCBzZXRFcnJvckZldGNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiKTsgIFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IFxyXG4gICAgICAgIHNldExpc3RQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgICBzZXRMaXN0Q29tcGxldGUoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHNldEVycm9yRmV0Y2godHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvcmRlckFaID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdHNdLnNvcnQoKGEsIGIpID0+IGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKSk7XHJcbiAgICBzZXRMaXN0UHJvZHVjdHMobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJQcmljZU1lbm9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdHNdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcclxuICAgIHNldExpc3RQcm9kdWN0cyhuZXdMaXN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcmRlclByaWNlTWFpb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0c10uc29ydCgoYSwgYikgPT4gYi5wcmljZSAtIGEucHJpY2UpO1xyXG4gICAgc2V0TGlzdFByb2R1Y3RzKG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlYXJjaFRleHQgPSAodGV4dCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoKHRleHQpO1xyXG5cclxuICAgIGlmICh0ZXh0LnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICBzZXRMaXN0UHJvZHVjdHMobGlzdENvbXBsZXRlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0xpc3QgPSBsaXN0Q29tcGxldGUuZmlsdGVyKChwcm9kdWN0cykgPT5cclxuICAgICAgcHJvZHVjdHMudGl0bGUudG9VcHBlckNhc2UoKS50cmltKCkuaW5jbHVkZXModGV4dC50b1VwcGVyQ2FzZSgpLnRyaW0oKSlcclxuICAgICk7XHJcbiAgICBzZXRMaXN0UHJvZHVjdHMobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxpc3RQcm9kdWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgIGlmIChlcnJvckZldGNoID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybiA8RXJyb3JHZXREYXRhIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNlYXJjaFRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhciBwcm9kdXRvcy4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyQVp9Pk9yZGVuYXIgQS1aPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyUHJpY2VNZW5vcn0+T3JkZW5hciBQcmXDp28gTWVub3IgLSBNYWlvcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclByaWNlTWFpb3J9Pk9yZGVuYXIgUHJlw6dvIE1haW9yIC0gTWVub3I8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtsaXN0UHJvZHVjdHMubWFwKChwcm9kdXRvKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdXRvLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0Q2FyZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSBzcmM9e3Byb2R1dG8uaW1hZ2V9IGFsdD17cHJvZHV0by50aXRsZX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbmZvfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3ROYW1lfT57cHJvZHV0by50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0UHJpY2V9PiR7cHJvZHV0by5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0Q2F0ZWdvcnl9Pntwcm9kdXRvLmNhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZFRvQ2FydH0+QWRpY2lvbmFyIGFvIENhcnJpbmhvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1dG8uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWluZm8tY2lyY2xlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiIH19ID48L2k+IFxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcblxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInN0eWxlcyIsIlNwaW5uZXIiLCJFcnJvckdldERhdGEiLCJMaW5rIiwiTWFpbiIsImxpc3RQcm9kdWN0cyIsInNldExpc3RQcm9kdWN0cyIsImxpc3RDb21wbGV0ZSIsInNldExpc3RDb21wbGV0ZSIsInNlYXJjaCIsInNldFNlYXJjaCIsImVycm9yRmV0Y2giLCJzZXRFcnJvckZldGNoIiwiZ2V0UHJvZHVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9yZGVyQVoiLCJuZXdMaXN0Iiwic29ydCIsImEiLCJiIiwidGl0bGUiLCJsb2NhbGVDb21wYXJlIiwib3JkZXJQcmljZU1lbm9yIiwicHJpY2UiLCJvcmRlclByaWNlTWFpb3IiLCJzZWFyY2hUZXh0IiwidGV4dCIsInRyaW0iLCJmaWx0ZXIiLCJwcm9kdWN0cyIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Iiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInNlYXJjaElucHV0IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIiwib25DbGljayIsInByb2R1Y3RzQ29udGFpbmVyIiwibWFwIiwicHJvZHV0byIsInByb2R1Y3RDYXJkIiwicHJvZHVjdEltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZSIsImFsdCIsInByb2R1Y3RJbmZvIiwicCIsInByb2R1Y3ROYW1lIiwicHJvZHVjdFByaWNlIiwicHJvZHVjdENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJwcm9kdWN0QWN0aW9ucyIsImFkZFRvQ2FydCIsImhyZWYiLCJpZCIsImkiLCJjbGFzcyIsInN0eWxlIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});