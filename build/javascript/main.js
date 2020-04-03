/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var scores, roundScore, activePlayer;\ninit();\ndocument.querySelector(\".btn--roll\").addEventListener(\"click\", function () {\n  var dice = Math.floor(Math.random() * 6) + 1; // randomise dice number\n\n  var diceDom = document.querySelector(\".-dice\");\n  diceDom.style.display = \"block\";\n  diceDom.src = \"dice-\".concat(dice, \".png\");\n\n  if (dice !== 1) {\n    roundScore += dice;\n    document.querySelector(\"#current-\" + activePlayer).textContent = roundScore;\n  } else {\n    nextPlayer();\n  }\n});\ndocument.querySelector(\".btn--hold\").addEventListener(\"click\", function () {\n  scores[activePlayer] += roundScore; // add current score to the GLOBAL score\n\n  document.querySelector(\"#score-\" + activePlayer).textContent = scores[activePlayer]; // ui update\n\n  if (scores[activePlayer] >= 20) {\n    document.querySelector(\"#name-\" + activePlayer).textContent = \"Winner!\";\n    document.querySelector(\".-dice\").style.display = \"none\";\n    document.querySelector(\".player-\" + activePlayer + \"-panel\").classList.add(\"winner\");\n    document.querySelector(\".player-\" + activePlayer + \"-panel\").classList.remove(\"active\");\n  } else {\n    nextPlayer();\n  }\n});\ndocument.querySelector(\"btn--new\").addEventListener(\"click\", init);\n\nfunction nextPlayer() {\n  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;\n  roundScore = 0;\n  document.getElementById(\"current-0\").textContent = \"0\";\n  document.getElementById(\"current-1\").textContent = \"0\";\n  document.querySelector(\"player-0-panel\").classList.toggle(\"active\");\n  document.querySelector(\"player-1-panel\").classList.toggle(\"active\");\n  document.querySelector(\".-dice\").style.display = \"none\";\n}\n\n;\n\nfunction init() {\n  scores = [0, 0];\n  activePlayer = 0;\n  roundScore = 0;\n  document.querySelector(\".-dice\").style.display = \"none\";\n  document.getElementById(\".score-0\").textContent = \"0\";\n  document.getElementById(\".score-1\").textContent = \"0\";\n  document.getElementById(\".current-0\").textContent = \"0\";\n  document.getElementById(\".current-0\").textContent = \"0\";\n}\n\n;\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/index.scss?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/javascript/index.js ./src/sass/index.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/javascript/index.js */\"./src/javascript/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/sass/index.scss */\"./src/sass/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/javascript/index.js_./src/sass/index.scss?");

/***/ })

/******/ });