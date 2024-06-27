/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var design_system_toshyro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! design-system-toshyro */ "./node_modules/design-system-toshyro/lib/index.js");
/* harmony import */ var design_system_toshyro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(design_system_toshyro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function App() {
    const [infos, setInfos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const fetchLogin = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield new Promise((resolve) => chrome.storage.local.get('login', (data) => resolve(data)));
                if (result.login) {
                    setInfos(result.login);
                }
            }
            catch (error) {
                console.error("Failed to fetch login data from chrome.storage.local", error);
            }
        });
        fetchLogin();
    }, []);
    function handleLogin({ email, password }) {
        fetch("https://cs-invest-2.vercel.app/api/user/auth", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(data => data.json())
            .then(json => {
            if (json.message) {
                alert("Email ou Senha inválido.");
                return;
            }
            chrome.storage.local.set({ login: json }, () => {
                setInfos(json);
            });
        });
    }
    function handleSignOut() {
        setInfos(null);
        chrome.storage.local.remove('login');
    }
    function Dashboard() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-screen flex-1 flex-col justify-center px-6 py-18 dark:bg-gradient-to-bl from-slate-800 to-slate-900" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-center text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white" },
                    "Bem-vindo ",
                    infos.name),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full items-center justify-center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: handleSignOut, className: "whitespace-no-wrap rounded-md text-base font-semibold px-[26px] h-[40px] flex items-center justify-center border border-red-500 text-red-500 hover:bg-red-500 hover:text-white" }, "Sair")))));
    }
    function LoginForm() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-screen flex-1 flex-col justify-center px-6 py-18 dark:bg-gradient-to-bl from-slate-800 to-slate-900" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white" }, "Acesse sua conta")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-10" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(design_system_toshyro__WEBPACK_IMPORTED_MODULE_2__.Form, { className: "space-y-6 dark:bg-opacity-0" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(design_system_toshyro__WEBPACK_IMPORTED_MODULE_2__.Input, { label: "Email", name: "email", type: "email", className: "text-slate-200 border-slate-700", validation: { required: "Este campo é obrigatório." } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(design_system_toshyro__WEBPACK_IMPORTED_MODULE_2__.Input, { label: "Senha", name: "password", type: "password", className: "text-slate-200 border-slate-700", validation: { required: "Este campo é obrigatório." } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(design_system_toshyro__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "button", onSubmit: handleLogin, className: "border-0", full: true }, "Entrar"))))));
    }
    if (infos)
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dashboard, null);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoginForm, null);
}
const container = document.createElement('div');
document.body.appendChild(container);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcsinvestextensionreact"] = self["webpackChunkcsinvestextensionreact"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_design-system-toshyro_lib_index_js","src_assets_tailwind_css"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map