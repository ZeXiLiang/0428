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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactJPlayer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactJPlaylist;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactJplayer = __webpack_require__(1);

var _reactJplayer2 = _interopRequireDefault(_reactJplayer);

var _reactJplaylist = __webpack_require__(2);

var _reactJplaylist2 = _interopRequireDefault(_reactJplaylist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jPlayerOptions = {
  id: 'AudioPlaylist',
  verticalVolume: true
};

var jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [{
    id: 0,
    title: '超强晦串集合全国最优秀迷幻嗨曲3D车震驾驶空',
    artist: 'Dj余意',
    sources: {
      mp3: 'http://pc64-19.jyw8.com:8421/up01-1134b3a605/DJ%E4%BD%99%E6%84%8F-%E6%97%A0%E6%8D%9F%E5%B8%9D%E5%9B%BD%E3%80%90%E8%B6%85%E5%BC%BA%E6%99%A6%E4%B8%B2%E9%9B%86%E5%90%88%E5%85%A8%E5%9B%BD%E6%9C%80%E4%BC%98%E7%A7%80%E8%BF%B7%E5%B9%BB%E5%97%A8%E6%9B%B23D%E8%BD%A6%E9%9C%87%E9%A9%BE%E9%A9%B6%E7%A9%BA%E9%97%B4%E3%80%91%E6%95%B0%E7%A0%81%E9%BB%91%E8%83%B6.mp3'

    },
    poster: 'http://wp.yunxiu520.com/userfiles/01/touxiang.jpg',
    free: true
  }, {
    id: 1,
    title: '舒服中英文proghouse音乐系列轻松节奏',
    artist: 'DjLicky路起',
    sources: {
      mp3: 'http://pc64-19.jyw8.com:8421/20190504-182685/DjLicky%E8%B7%AF%E8%B5%B7-%E8%88%92%E6%9C%8D%E4%B8%AD%E8%8B%B1%E6%96%87proghouse%E9%9F%B3%E4%B9%90%E7%B3%BB%E5%88%97%E8%BD%BB%E6%9D%BE%E8%8A%82%E5%A5%8F.mp3'

    },
    poster: 'http://wp.yunxiu520.com/userfiles/01/touxiang.jpg'
  }, {
    id: 2,
    title: '界沟黎明脚步徒步专用全新音乐',
    artist: 'Dj杨小林',
    sources: {
      mp3: 'http://pc64-19.jyw8.com:8421/20190504-182685/dj%E6%9D%A8%E5%B0%8F%E6%9E%97-%E7%95%8C%E6%B2%9F%E9%BB%8E%E6%98%8E%E8%84%9A%E6%AD%A5%E5%BE%92%E6%AD%A5%E4%B8%93%E7%94%A8%E5%85%A8%E6%96%B0%E9%9F%B3%E4%B9%90%E4%B8%B2%E7%83%A7%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6.mp3'

    },
    poster: 'http://wp.yunxiu520.com/userfiles/01/touxiang.jpg'
  }]
};

(0, _reactJplaylist.initializeOptions)(jPlayerOptions, jPlaylistOptions);

var AudioPlaylist = function AudioPlaylist() {
  return _react2.default.createElement(
    _reactJplaylist2.default,
    { id: jPlayerOptions.id },
    _react2.default.createElement(
      _reactJplayer2.default,
      { className: 'jp-sleek' },
      _react2.default.createElement(_reactJplayer.Audio, null),
      _react2.default.createElement(
        _reactJplayer.Gui,
        null,
        _react2.default.createElement(
          'div',
          { className: 'jp-controls jp-icon-controls' },
          _react2.default.createElement(
            _reactJplaylist.Previous,
            null,
            _react2.default.createElement('i', { className: 'fa fa-step-backward' })
          ),
          _react2.default.createElement(
            _reactJplayer.Play,
            null,
            _react2.default.createElement('i', { className: 'fa' })
          ),
          _react2.default.createElement(
            _reactJplaylist.Next,
            null,
            _react2.default.createElement('i', { className: 'fa fa-step-forward' })
          ),
          _react2.default.createElement(
            _reactJplaylist.Repeat,
            null,
            _react2.default.createElement('i', { className: 'fa' }),
            _react2.default.createElement('i', { className: 'fa fa-repeat' })
          ),
          _react2.default.createElement(
            _reactJplaylist.Shuffle,
            null,
            _react2.default.createElement('i', { className: 'fa fa-random' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'jp-progress' },
            _react2.default.createElement(
              _reactJplayer.SeekBar,
              null,
              _react2.default.createElement(_reactJplayer.BufferBar, null),
              _react2.default.createElement(_reactJplayer.PlayBar, null),
              _react2.default.createElement(_reactJplayer.CurrentTime, null),
              _react2.default.createElement(_reactJplayer.Duration, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'jp-volume-container' },
            _react2.default.createElement(
              _reactJplayer.Mute,
              null,
              _react2.default.createElement('i', { className: 'fa' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'jp-volume-slider' },
              _react2.default.createElement(
                'div',
                { className: 'jp-volume-bar-container' },
                _react2.default.createElement(_reactJplayer.VolumeBar, null)
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'jp-playlist-container' },
            _react2.default.createElement(
              _reactJplaylist.Playlist,
              null,
              _react2.default.createElement(_reactJplaylist.Remove, null),
              _react2.default.createElement(
                _reactJplaylist.MediaLink,
                null,
                _react2.default.createElement(_reactJplaylist.Title, null)
              )
            ),
            _react2.default.createElement(
              _reactJplaylist.TogglePlaylist,
              null,
              _react2.default.createElement('i', { className: 'fa fa-ellipsis-h' })
            )
          ),
          _react2.default.createElement(
            _reactJplayer.FullScreen,
            null,
            _react2.default.createElement('i', { className: 'fa fa-expand' })
          ),
          _react2.default.createElement(
            _reactJplayer.Download,
            null,
            _react2.default.createElement('i', { className: 'fa fa-download' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'jp-title-container' },
            _react2.default.createElement(_reactJplayer.Poster, null),
            _react2.default.createElement(_reactJplayer.Title, null)
          )
        ),
        _react2.default.createElement(_reactJplayer.BrowserUnsupported, null)
      )
    )
  );
};

exports.default = AudioPlaylist;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(6);

var _reactJplayer = __webpack_require__(1);

var _reactJplaylist = __webpack_require__(2);

var _audioPlaylist = __webpack_require__(3);

var _audioPlaylist2 = _interopRequireDefault(_audioPlaylist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Pass the jPlaylist reducer and it's initialStates to the store */
var store = (0, _redux.createStore)((0, _redux.combineReducers)({ jPlayers: _reactJplayer.reducer, jPlaylists: _reactJplaylist.reducer }));

/* Wrap our player in the Redux Provider and render the jPlaylist.
The provider should go at the root of your App, just like Redux documentation recommends,
so that all components below the Provider have access to the jPlaylists state
*/
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_audioPlaylist2.default, null)
), document.getElementById('app'));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODczYzkyMTc5NzMxZmMxMDE3OTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdEpQbGF5ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdEpQbGF5bGlzdFwiIiwid2VicGFjazovLy8uL3NyYy9hdWRpb1BsYXlsaXN0LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0UmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbImpQbGF5ZXJPcHRpb25zIiwiaWQiLCJ2ZXJ0aWNhbFZvbHVtZSIsImpQbGF5bGlzdE9wdGlvbnMiLCJoaWRlUGxheWxpc3QiLCJwbGF5bGlzdCIsInRpdGxlIiwiYXJ0aXN0Iiwic291cmNlcyIsIm1wMyIsInBvc3RlciIsImZyZWUiLCJBdWRpb1BsYXlsaXN0Iiwic3RvcmUiLCJqUGxheWVycyIsImpQbGF5bGlzdHMiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFF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LG1CQUFEO0FBRkY7QUF0Q0YsU0FERjtBQTRDRSxzQ0FBQyxnQ0FBRDtBQTVDRjtBQUZGO0FBREYsR0FEb0I7QUFBQSxDQUF0Qjs7a0JBc0RlVyxhOzs7Ozs7QUM3R2YsMEI7Ozs7OztBQ0FBLDRCOzs7Ozs7QUNBQSx1Qjs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFFQTtBQUNBLElBQU1DLFFBQVEsd0JBQVksNEJBQWdCLEVBQUVDLCtCQUFGLEVBQVlDLG1DQUFaLEVBQWhCLENBQVosQ0FBZDs7QUFFQTs7OztBQUlBQyxtQkFBU0MsTUFBVCxDQUNFO0FBQUMsc0JBQUQ7QUFBQSxJQUFVLE9BQU9KLEtBQWpCO0FBQ0UsZ0NBQUMsdUJBQUQ7QUFERixDQURGLEVBSUdLLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FKSCxFIiwiZmlsZSI6InVtZFBsYXlsaXN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODczYzkyMTc5NzMxZmMxMDE3OTYiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0SlBsYXllcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0SlBsYXllclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RKUGxheWxpc3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdEpQbGF5bGlzdFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSlBsYXllciwge1xuICBHdWksIFNlZWtCYXIsIEJ1ZmZlckJhcixcbiAgUG9zdGVyLCBBdWRpbywgVGl0bGUsIEZ1bGxTY3JlZW4sIE11dGUsIFBsYXksIFBsYXlCYXIsXG4gIFZvbHVtZUJhciwgRHVyYXRpb24sIEN1cnJlbnRUaW1lLCBEb3dubG9hZCwgQnJvd3NlclVuc3VwcG9ydGVkLFxufSBmcm9tICdyZWFjdC1qcGxheWVyJztcbmltcG9ydCBKUGxheWxpc3QsIHtcbiAgaW5pdGlhbGl6ZU9wdGlvbnMsIFBsYXlsaXN0LCBTaHVmZmxlLCBOZXh0LCBQcmV2aW91cywgUmVwZWF0LFxuICBUb2dnbGVQbGF5bGlzdCwgUmVtb3ZlLCBNZWRpYUxpbmssIFRpdGxlIGFzIFBsYXlsaXN0VGl0bGUsXG59IGZyb20gJ3JlYWN0LWpwbGF5bGlzdCc7XG5cbmNvbnN0IGpQbGF5ZXJPcHRpb25zID0ge1xuICBpZDogJ0F1ZGlvUGxheWxpc3QnLFxuICB2ZXJ0aWNhbFZvbHVtZTogdHJ1ZSxcbn07XG5cbmNvbnN0IGpQbGF5bGlzdE9wdGlvbnMgPSB7XG4gIGhpZGVQbGF5bGlzdDogdHJ1ZSxcbiAgcGxheWxpc3Q6IFtcbiAgICB7XG4gICAgICBpZDogMCxcbiAgICAgIHRpdGxlOiAn6LaF5by65pmm5Liy6ZuG5ZCI5YWo5Zu95pyA5LyY56eA6L+35bm75Zeo5puyM0TovabpnIfpqb7pqbbnqbonLFxuICAgICAgYXJ0aXN0OiAnRGrkvZnmhI8nLFxuICAgICAgc291cmNlczoge1xuICAgICAgICBtcDM6ICdodHRwOi8vcGM2NC0xOS5qeXc4LmNvbTo4NDIxL3VwMDEtMTEzNGIzYTYwNS9ESiVFNCVCRCU5OSVFNiU4NCU4Ri0lRTYlOTclQTAlRTYlOEQlOUYlRTUlQjglOUQlRTUlOUIlQkQlRTMlODAlOTAlRTglQjYlODUlRTUlQkMlQkElRTYlOTklQTYlRTQlQjglQjIlRTklOUIlODYlRTUlOTAlODglRTUlODUlQTglRTUlOUIlQkQlRTYlOUMlODAlRTQlQkMlOTglRTclQTclODAlRTglQkYlQjclRTUlQjklQkIlRTUlOTclQTglRTYlOUIlQjIzRCVFOCVCRCVBNiVFOSU5QyU4NyVFOSVBOSVCRSVFOSVBOSVCNiVFNyVBOSVCQSVFOSU5NyVCNCVFMyU4MCU5MSVFNiU5NSVCMCVFNyVBMCU4MSVFOSVCQiU5MSVFOCU4MyVCNi5tcDMnLFxuICBcbiAgICAgIH0sXG4gICAgICAgIHBvc3RlcjogJ2h0dHA6Ly93cC55dW54aXU1MjAuY29tL3VzZXJmaWxlcy8wMS90b3V4aWFuZy5qcGcnLFxuICAgICAgZnJlZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6ICfoiJLmnI3kuK3oi7Hmlodwcm9naG91c2Xpn7PkuZDns7vliJfovbvmnb7oioLlpY8nLFxuICAgICAgYXJ0aXN0OiAnRGpMaWNreei3r+i1tycsXG4gICAgICBzb3VyY2VzOiB7XG4gICAgICAgIG1wMzogJ2h0dHA6Ly9wYzY0LTE5Lmp5dzguY29tOjg0MjEvMjAxOTA1MDQtMTgyNjg1L0RqTGlja3klRTglQjclQUYlRTglQjUlQjctJUU4JTg4JTkyJUU2JTlDJThEJUU0JUI4JUFEJUU4JThCJUIxJUU2JTk2JTg3cHJvZ2hvdXNlJUU5JTlGJUIzJUU0JUI5JTkwJUU3JUIzJUJCJUU1JTg4JTk3JUU4JUJEJUJCJUU2JTlEJUJFJUU4JThBJTgyJUU1JUE1JThGLm1wMycsXG4gICAgICBcbiAgICAgIH0sXG4gICAgICAgIHBvc3RlcjogJ2h0dHA6Ly93cC55dW54aXU1MjAuY29tL3VzZXJmaWxlcy8wMS90b3V4aWFuZy5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICB0aXRsZTogJ+eVjOayn+m7juaYjuiEmuatpeW+kuatpeS4k+eUqOWFqOaWsOmfs+S5kCcsXG4gICAgICBhcnRpc3Q6ICdEauadqOWwj+aelycsXG4gICAgICBzb3VyY2VzOiB7XG4gICAgICAgIG1wMzogJ2h0dHA6Ly9wYzY0LTE5Lmp5dzguY29tOjg0MjEvMjAxOTA1MDQtMTgyNjg1L2RqJUU2JTlEJUE4JUU1JUIwJThGJUU2JTlFJTk3LSVFNyU5NSU4QyVFNiVCMiU5RiVFOSVCQiU4RSVFNiU5OCU4RSVFOCU4NCU5QSVFNiVBRCVBNSVFNSVCRSU5MiVFNiVBRCVBNSVFNCVCOCU5MyVFNyU5NCVBOCVFNSU4NSVBOCVFNiU5NiVCMCVFOSU5RiVCMyVFNCVCOSU5MCVFNCVCOCVCMiVFNyU4MyVBNyVFNyVBNyU4MSVFNCVCQSVCQSVFOCVBRSVBMiVFNSU4OCVCNi5tcDMnLFxuICAgICAgIFxuICAgICAgfSxcbiAgICAgIHBvc3RlcjogJ2h0dHA6Ly93cC55dW54aXU1MjAuY29tL3VzZXJmaWxlcy8wMS90b3V4aWFuZy5qcGcnLFxuICAgIH0sXG4gIF0sXG59O1xuXG5pbml0aWFsaXplT3B0aW9ucyhqUGxheWVyT3B0aW9ucywgalBsYXlsaXN0T3B0aW9ucyk7XG5cbmNvbnN0IEF1ZGlvUGxheWxpc3QgPSAoKSA9PiAoXG4gIDxKUGxheWxpc3QgaWQ9e2pQbGF5ZXJPcHRpb25zLmlkfT5cbiAgICA8SlBsYXllciBjbGFzc05hbWU9XCJqcC1zbGVla1wiPlxuICAgICAgPEF1ZGlvIC8+XG4gICAgICA8R3VpPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLWNvbnRyb2xzIGpwLWljb24tY29udHJvbHNcIj5cbiAgICAgICAgICA8UHJldmlvdXM+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RlcC1iYWNrd2FyZFwiIC8+PC9QcmV2aW91cz5cbiAgICAgICAgICA8UGxheT48aSBjbGFzc05hbWU9XCJmYVwiPnsvKiBJY29uIHNldCBpbiBjc3MgKi99PC9pPjwvUGxheT5cbiAgICAgICAgICA8TmV4dD48aSBjbGFzc05hbWU9XCJmYSBmYS1zdGVwLWZvcndhcmRcIiAvPjwvTmV4dD5cbiAgICAgICAgICA8UmVwZWF0PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFcIj57LyogSWNvbiBzZXQgaW4gY3NzICovfTwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJlcGVhdFwiIC8+XG4gICAgICAgICAgPC9SZXBlYXQ+XG4gICAgICAgICAgPFNodWZmbGU+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcmFuZG9tXCIgLz48L1NodWZmbGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC1wcm9ncmVzc1wiPlxuICAgICAgICAgICAgPFNlZWtCYXI+XG4gICAgICAgICAgICAgIDxCdWZmZXJCYXIgLz5cbiAgICAgICAgICAgICAgPFBsYXlCYXIgLz5cbiAgICAgICAgICAgICAgPEN1cnJlbnRUaW1lIC8+XG4gICAgICAgICAgICAgIDxEdXJhdGlvbiAvPlxuICAgICAgICAgICAgPC9TZWVrQmFyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianAtdm9sdW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPE11dGU+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhXCI+ey8qIEljb24gc2V0IGluIGNzcyAqL308L2k+XG4gICAgICAgICAgICA8L011dGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLXZvbHVtZS1zbGlkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC12b2x1bWUtYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxWb2x1bWVCYXIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLXBsYXlsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFBsYXlsaXN0PlxuICAgICAgICAgICAgICA8UmVtb3ZlIC8+XG4gICAgICAgICAgICAgIDxNZWRpYUxpbms+XG4gICAgICAgICAgICAgICAgPFBsYXlsaXN0VGl0bGUgLz5cbiAgICAgICAgICAgICAgPC9NZWRpYUxpbms+XG4gICAgICAgICAgICA8L1BsYXlsaXN0PlxuICAgICAgICAgICAgPFRvZ2dsZVBsYXlsaXN0PjxpIGNsYXNzTmFtZT1cImZhIGZhLWVsbGlwc2lzLWhcIiAvPjwvVG9nZ2xlUGxheWxpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZ1bGxTY3JlZW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZXhwYW5kXCIgLz48L0Z1bGxTY3JlZW4+XG4gICAgICAgICAgPERvd25sb2FkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWRvd25sb2FkXCIgLz48L0Rvd25sb2FkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianAtdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8UG9zdGVyIC8+XG4gICAgICAgICAgICA8VGl0bGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCcm93c2VyVW5zdXBwb3J0ZWQgLz5cbiAgICAgIDwvR3VpPlxuICAgIDwvSlBsYXllcj5cbiAgPC9KUGxheWxpc3Q+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1BsYXlsaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2F1ZGlvUGxheWxpc3QuanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RSZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVkdXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHJlZHVjZXIgYXMgalBsYXllcnMgfSBmcm9tICdyZWFjdC1qcGxheWVyJztcbmltcG9ydCB7IHJlZHVjZXIgYXMgalBsYXlsaXN0cyB9IGZyb20gJ3JlYWN0LWpwbGF5bGlzdCc7XG5cbmltcG9ydCBBdWRpb1BsYXlsaXN0IGZyb20gJy4vYXVkaW9QbGF5bGlzdCc7XG5cbi8qIFBhc3MgdGhlIGpQbGF5bGlzdCByZWR1Y2VyIGFuZCBpdCdzIGluaXRpYWxTdGF0ZXMgdG8gdGhlIHN0b3JlICovXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVSZWR1Y2Vycyh7IGpQbGF5ZXJzLCBqUGxheWxpc3RzIH0pKTtcblxuLyogV3JhcCBvdXIgcGxheWVyIGluIHRoZSBSZWR1eCBQcm92aWRlciBhbmQgcmVuZGVyIHRoZSBqUGxheWxpc3QuXG5UaGUgcHJvdmlkZXIgc2hvdWxkIGdvIGF0IHRoZSByb290IG9mIHlvdXIgQXBwLCBqdXN0IGxpa2UgUmVkdXggZG9jdW1lbnRhdGlvbiByZWNvbW1lbmRzLFxuc28gdGhhdCBhbGwgY29tcG9uZW50cyBiZWxvdyB0aGUgUHJvdmlkZXIgaGF2ZSBhY2Nlc3MgdG8gdGhlIGpQbGF5bGlzdHMgc3RhdGVcbiovXG5SZWFjdERPTS5yZW5kZXIoKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXVkaW9QbGF5bGlzdCAvPlxuICA8L1Byb3ZpZGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==