(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[{
	"name": "Web Design",
	"count": 12
}, {
	"name": "Smart Phone",
	"count": 23
}, {
	"name": "Laptop",
	"count": 1
}, {
	"name": "Apple Store",
	"count": 19
}, {
	"name": "Wordpress Theme",
	"count": 24
}, {
	"name": "Web Design",
	"count": 34
}, {
	"name": "Sport",
	"count": 21
}, {
	"name": "Fashion",
	"count": 34
}]
},{}],2:[function(require,module,exports){
module.exports=[{
	"desc": "Semper at egestas sed, elementum in justo",
	"time": "10, January, 2014",
	"img": "img/popular_postes.jpg"
}, {
	"desc": "Vel eleifend id ullamcorper eu velit",
	"time": "14, January, 2014",
	"img": "img/popular_postes.jpg"
}, {
	"desc": "Proin urna enim, semper at egestas",
	"time": "10, January, 2014",
	"img": "img/popular_postes.jpg"
}, {
	"desc": "Fusce vitae dui sit amet lacus rutrum convallis",
	"time": "10, January, 2014",
	"img": "img/popular_postes.jpg"
}, {
	"desc": "Vivamus sit amet lectus venenatis",
	"time": "10, January, 2014",
	"img": "img/popular_postes.jpg"
}]
},{}],3:[function(require,module,exports){
module.exports=[{
	"image": "img/portfolio/card_1.jpg",
	"link": "#card_1",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_2.jpg",
	"link": "#card_2",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_3.jpg",
	"link": "#card_3",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_4.jpg",
	"link": "#card_4",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_5.jpg",
	"link": "#card_5",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_6.jpg",
	"link": "#card_6",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_7.jpg",
	"link": "#card_7",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_8.jpg",
	"link": "#card_8",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_9.jpg",
	"link": "#card_9",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_10.jpg",
	"link": "#card_10",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_11.jpg",
	"link": "#card_11",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}, {
	"image": "img/portfolio/card_12.jpg",
	"link": "#card_12",
	"description": "lorem ipsum dolor sit amet",
	"keywords": "Animation, Game Design"
}]
},{}],4:[function(require,module,exports){
module.exports=[{
	"name": "Dress"
}, {
	"name": "Mini"
}, {
	"name": "Skate animal"
}, {
	"name": "Lorem ipsum"
}, {
	"name": "Literature"
}, {
	"name": "Baroque"
}, {
	"name": "Dress"
}, {
	"name": "Mini"
}, {
	"name": "Skate animal"
}, {
	"name": "Lorem ipsum"
}, {
	"name": "Literature"
}, {
	"name": "Baroque"
}]
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var CategoryElem = function () {
	function CategoryElem() {
		_classCallCheck(this, CategoryElem);
	}

	_createClass(CategoryElem, [{
		key: "buildDOM",
		value: function buildDOM(data) {
			var listElem = document.querySelector("#blog-category");

			listElem.innerHTML = data.map(function (item) {
				return "<li class=\"item\">\n\t\t\t\t\t<span class=\"name\">" + item.name + "</span>\n\t\t\t\t\t<span class=\"count\">" + item.count + "</span>\n\t\t\t\t</li>";
			}).join('');
		}
	}]);

	return CategoryElem;
}();

exports.default = CategoryElem;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var PopularPostersElem = function () {
	function PopularPostersElem() {
		_classCallCheck(this, PopularPostersElem);
	}

	_createClass(PopularPostersElem, [{
		key: "buildDOM",
		value: function buildDOM(data) {
			var listElem = document.querySelector("#popular-postes");

			listElem.innerHTML = data.map(function (item) {
				return "<li class=\"item\">\n\t\t\t\t\t<figure class=\"pic\" style=\"background-image: url(" + item.img + ")\"></figure>\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<a class=\"desc\" href=\"#\" title=\"" + item.desc + "\">" + item.desc + "</a>\n\t\t\t\t\t\t<time class=\"time\">" + item.time + "</time>\n\t\t\t\t\t</div>\n\t\t\t\t</li>";
			}).join('');
		}
	}]);

	return PopularPostersElem;
}();

exports.default = PopularPostersElem;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var PortfolioElem = function () {
	function PortfolioElem() {
		_classCallCheck(this, PortfolioElem);
	}

	_createClass(PortfolioElem, [{
		key: "buildDOM",
		value: function buildDOM(data) {
			var listElem = document.querySelector("#portfolio-list");

			listElem.innerHTML = data.map(function (item) {
				return "<li class=\"item\">\n\t\t\t\t\t<div class=\"card\" style=\"background-image: url(" + item.image + ")\">\n\t\t\t\t\t\t<div class=\"buttons\"><button class=\"btn full-size\"></button><button class=\"btn link\"></button></div>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<h3>" + item.description + "</h3>\n\t\t\t\t\t\t\t<p>" + item.keywords + "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>";
			}).join('');
		}
	}]);

	return PortfolioElem;
}();

exports.default = PortfolioElem;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var TagsCloudElem = function () {
	function TagsCloudElem() {
		_classCallCheck(this, TagsCloudElem);
	}

	_createClass(TagsCloudElem, [{
		key: "buildDOM",
		value: function buildDOM(data) {
			var listElem = document.querySelector("#tags-cloud");

			listElem.innerHTML = data.map(function (item) {
				return "<li class=\"item\">\n\t\t\t\t\t<a class=\"tag\" href=\"#" + item.name + "\" title=\"\">" + item.name + "</a>\n\t\t\t\t</li>";
			}).join('');
		}
	}]);

	return TagsCloudElem;
}();

exports.default = TagsCloudElem;

},{}],9:[function(require,module,exports){
'use strict';

var _tools = require('./tools');

var Tools = _interopRequireWildcard(_tools);

var _CategoryElem = require('./components/CategoryElem');

var _CategoryElem2 = _interopRequireDefault(_CategoryElem);

var _PortfolioElem = require('./components/PortfolioElem');

var _PortfolioElem2 = _interopRequireDefault(_PortfolioElem);

var _PopularPostersElem = require('./components/PopularPostersElem');

var _PopularPostersElem2 = _interopRequireDefault(_PopularPostersElem);

var _TagsCloudElem = require('./components/TagsCloudElem');

var _TagsCloudElem2 = _interopRequireDefault(_TagsCloudElem);

var _categoryData = require('../../data/categoryData');

var _categoryData2 = _interopRequireDefault(_categoryData);

var _portfolioData = require('../../data/portfolioData');

var _portfolioData2 = _interopRequireDefault(_portfolioData);

var _popularPostesData = require('../../data/popularPostesData');

var _popularPostesData2 = _interopRequireDefault(_popularPostesData);

var _tagsCloudData = require('../../data/tagsCloudData');

var _tagsCloudData2 = _interopRequireDefault(_tagsCloudData);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

var categoryElem = new _CategoryElem2.default();

var portfolioElem = new _PortfolioElem2.default();

var popularPostersElem = new _PopularPostersElem2.default();

var tagsCloudElem = new _TagsCloudElem2.default();

document.addEventListener("DOMContentLoaded", function () {
	categoryElem.buildDOM(_categoryData2.default);
	portfolioElem.buildDOM(_portfolioData2.default);
	popularPostersElem.buildDOM(_popularPostesData2.default);
	tagsCloudElem.buildDOM(_tagsCloudData2.default);
	scrollBtnInit();
});

window.addEventListener("load", function () {
	contentMarginTop();
});

function contentMarginTop() {
	var headElem = document.querySelector('#header');
	var mainElem = document.querySelector('#main');

	(function run() {
		mainElem.style.paddingTop = headElem.clientHeight + 'px';
		Tools.onWindowResize(run);
	})();
}

function scrollBtnInit() {
	var btn = document.querySelector('#move-to-top');
	btn.addEventListener('click', Tools.scrollPageToTop);
}

},{"../../data/categoryData":1,"../../data/popularPostesData":2,"../../data/portfolioData":3,"../../data/tagsCloudData":4,"./components/CategoryElem":5,"./components/PopularPostersElem":6,"./components/PortfolioElem":7,"./components/TagsCloudElem":8,"./tools":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _onWindowResize = require('./onWindowResize');

Object.defineProperty(exports, 'onWindowResize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_onWindowResize).default;
  }
});

var _scrollPageToTop = require('./scrollPageToTop');

Object.defineProperty(exports, 'scrollPageToTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollPageToTop).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./onWindowResize":11,"./scrollPageToTop":12}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Олеживает изменение размеров окна браузера и вызывает cb если привысело время указанное в duration
 * @param {function} cb каллбэк
 * @param {number} [duration=300] интервал в миллисикундах
 */
function onWindowResize(cb) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

	var timeout = void 0;
	window.addEventListener('resize', function () {
		clearTimeout(timeout);
		timeout = setTimeout(cb, duration);
	});
}

exports.default = onWindowResize;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function scrollPageToTop() {
	function getScroll() {
		return document.documentElement.scrollTop;
	}
	function run() {
		if (getScroll() > 0) {
			window.scrollBy(0, -Math.max(getScroll() / 6, 1));
			requestAnimationFrame(run);
		}
	}
	run();
}
exports.default = scrollPageToTop;

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkYXRhL2NhdGVnb3J5RGF0YS5qc29uIiwiZGF0YS9wb3B1bGFyUG9zdGVzRGF0YS5qc29uIiwiZGF0YS9wb3J0Zm9saW9EYXRhLmpzb24iLCJkYXRhL3RhZ3NDbG91ZERhdGEuanNvbiIsInNyYy9qcy9jb21wb25lbnRzL0NhdGVnb3J5RWxlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL1BvcHVsYXJQb3N0ZXJzRWxlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL1BvcnRmb2xpb0VsZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9UYWdzQ2xvdWRFbGVtLmpzIiwic3JjL2pzL2luZGV4LmpzIiwic3JjL2pzL3Rvb2xzL2luZGV4LmpzIiwic3JjL2pzL3Rvb2xzL29uV2luZG93UmVzaXplLmpzIiwic3JjL2pzL3Rvb2xzL3Njcm9sbFBhZ2VUb1RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFBLENBQUEsUUFBQSxFQUFrQyxZQUFXO0FBQzVDLGVBQUEsT0FBQTtBQUNBLFlBQVUsV0FBQSxFQUFBLEVBQVYsUUFBVSxDQUFWO0FBRkQsRUFBQTtBQUlBOztrQkFFYyxjOzs7Ozs7OztBQ2JmLFNBQUEsZUFBQSxHQUEyQjtBQUMxQixVQUFBLFNBQUEsR0FBcUI7QUFDcEIsU0FBTyxTQUFBLGVBQUEsQ0FBUCxTQUFBO0FBQ0E7QUFDRCxVQUFBLEdBQUEsR0FBZTtBQUNkLE1BQUksY0FBSixDQUFBLEVBQXFCO0FBQ3BCLFVBQUEsUUFBQSxDQUFBLENBQUEsRUFBbUIsQ0FBQyxLQUFBLEdBQUEsQ0FBVSxjQUFWLENBQUEsRUFBcEIsQ0FBb0IsQ0FBcEI7QUFDQSx5QkFBQSxHQUFBO0FBQ0E7QUFDRDtBQUNEO0FBQ0E7a0JBQ2MsZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPVt7XHJcblx0XCJuYW1lXCI6IFwiV2ViIERlc2lnblwiLFxyXG5cdFwiY291bnRcIjogMTJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIlNtYXJ0IFBob25lXCIsXHJcblx0XCJjb3VudFwiOiAyM1xyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiTGFwdG9wXCIsXHJcblx0XCJjb3VudFwiOiAxXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJBcHBsZSBTdG9yZVwiLFxyXG5cdFwiY291bnRcIjogMTlcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIldvcmRwcmVzcyBUaGVtZVwiLFxyXG5cdFwiY291bnRcIjogMjRcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIldlYiBEZXNpZ25cIixcclxuXHRcImNvdW50XCI6IDM0XHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJTcG9ydFwiLFxyXG5cdFwiY291bnRcIjogMjFcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIkZhc2hpb25cIixcclxuXHRcImNvdW50XCI6IDM0XHJcbn1dIiwibW9kdWxlLmV4cG9ydHM9W3tcclxuXHRcImRlc2NcIjogXCJTZW1wZXIgYXQgZWdlc3RhcyBzZWQsIGVsZW1lbnR1bSBpbiBqdXN0b1wiLFxyXG5cdFwidGltZVwiOiBcIjEwLCBKYW51YXJ5LCAyMDE0XCIsXHJcblx0XCJpbWdcIjogXCJpbWcvcG9wdWxhcl9wb3N0ZXMuanBnXCJcclxufSwge1xyXG5cdFwiZGVzY1wiOiBcIlZlbCBlbGVpZmVuZCBpZCB1bGxhbWNvcnBlciBldSB2ZWxpdFwiLFxyXG5cdFwidGltZVwiOiBcIjE0LCBKYW51YXJ5LCAyMDE0XCIsXHJcblx0XCJpbWdcIjogXCJpbWcvcG9wdWxhcl9wb3N0ZXMuanBnXCJcclxufSwge1xyXG5cdFwiZGVzY1wiOiBcIlByb2luIHVybmEgZW5pbSwgc2VtcGVyIGF0IGVnZXN0YXNcIixcclxuXHRcInRpbWVcIjogXCIxMCwgSmFudWFyeSwgMjAxNFwiLFxyXG5cdFwiaW1nXCI6IFwiaW1nL3BvcHVsYXJfcG9zdGVzLmpwZ1wiXHJcbn0sIHtcclxuXHRcImRlc2NcIjogXCJGdXNjZSB2aXRhZSBkdWkgc2l0IGFtZXQgbGFjdXMgcnV0cnVtIGNvbnZhbGxpc1wiLFxyXG5cdFwidGltZVwiOiBcIjEwLCBKYW51YXJ5LCAyMDE0XCIsXHJcblx0XCJpbWdcIjogXCJpbWcvcG9wdWxhcl9wb3N0ZXMuanBnXCJcclxufSwge1xyXG5cdFwiZGVzY1wiOiBcIlZpdmFtdXMgc2l0IGFtZXQgbGVjdHVzIHZlbmVuYXRpc1wiLFxyXG5cdFwidGltZVwiOiBcIjEwLCBKYW51YXJ5LCAyMDE0XCIsXHJcblx0XCJpbWdcIjogXCJpbWcvcG9wdWxhcl9wb3N0ZXMuanBnXCJcclxufV0iLCJtb2R1bGUuZXhwb3J0cz1be1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfMS5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF8xXCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF8yLmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzJcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzMuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfM1wiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfNC5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF80XCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF81LmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzVcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzYuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfNlwiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfNy5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF83XCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF84LmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzhcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzkuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfOVwiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfMTAuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfMTBcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzExLmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzExXCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF8xMi5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF8xMlwiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufV0iLCJtb2R1bGUuZXhwb3J0cz1be1xyXG5cdFwibmFtZVwiOiBcIkRyZXNzXCJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIk1pbmlcIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiU2thdGUgYW5pbWFsXCJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIkxvcmVtIGlwc3VtXCJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIkxpdGVyYXR1cmVcIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiQmFyb3F1ZVwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJEcmVzc1wiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJNaW5pXCJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIlNrYXRlIGFuaW1hbFwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJMb3JlbSBpcHN1bVwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJMaXRlcmF0dXJlXCJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIkJhcm9xdWVcIlxyXG59XSIsImNsYXNzIENhdGVnb3J5RWxlbSB7XHJcblx0YnVpbGRET00oZGF0YSkge1xyXG5cdFx0Y29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2ctY2F0ZWdvcnlcIik7XHJcblxyXG5cdFx0bGlzdEVsZW0uaW5uZXJIVE1MID0gZGF0YS5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0YDxsaSBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7aXRlbS5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY291bnRcIj4ke2l0ZW0uY291bnR9PC9zcGFuPlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUVsZW07IiwiY2xhc3MgUG9wdWxhclBvc3RlcnNFbGVtIHtcclxuXHRidWlsZERPTShkYXRhKSB7XHJcblx0XHRjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdWxhci1wb3N0ZXNcIik7XHJcblxyXG5cdFx0bGlzdEVsZW0uaW5uZXJIVE1MID0gZGF0YS5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0YDxsaSBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3M9XCJwaWNcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0uaW1nfSlcIj48L2ZpZ3VyZT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmZvXCI+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwiZGVzY1wiIGhyZWY9XCIjXCIgdGl0bGU9XCIke2l0ZW0uZGVzY31cIj4ke2l0ZW0uZGVzY308L2E+XHJcblx0XHRcdFx0XHRcdDx0aW1lIGNsYXNzPVwidGltZVwiPiR7aXRlbS50aW1lfTwvdGltZT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1bGFyUG9zdGVyc0VsZW07IiwiY2xhc3MgUG9ydGZvbGlvRWxlbSB7XHJcblx0YnVpbGRET00oZGF0YSkge1xyXG5cdFx0Y29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcnRmb2xpby1saXN0XCIpO1xyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5pbWFnZX0pXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25zXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBmdWxsLXNpemVcIj48L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwiYnRuIGxpbmtcIj48L2J1dHRvbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgzPiR7aXRlbS5kZXNjcmlwdGlvbn08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDxwPiR7aXRlbS5rZXl3b3Jkc308L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9saT5gXHJcblx0XHRcdCk7XHJcblx0XHR9KS5qb2luKCcnKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb0VsZW07IiwiY2xhc3MgVGFnc0Nsb3VkRWxlbSB7XHJcblx0YnVpbGRET00oZGF0YSkge1xyXG5cdFx0Y29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhZ3MtY2xvdWRcIik7XHJcblxyXG5cdFx0bGlzdEVsZW0uaW5uZXJIVE1MID0gZGF0YS5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0YDxsaSBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzPVwidGFnXCIgaHJlZj1cIiMke2l0ZW0ubmFtZX1cIiB0aXRsZT1cIlwiPiR7aXRlbS5uYW1lfTwvYT5cclxuXHRcdFx0XHQ8L2xpPmBcclxuXHRcdFx0KTtcclxuXHRcdH0pLmpvaW4oJycpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFnc0Nsb3VkRWxlbTsiLCJpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuL3Rvb2xzJ1xyXG5cclxuaW1wb3J0IENhdGVnb3J5RWxlbSBmcm9tICcuL2NvbXBvbmVudHMvQ2F0ZWdvcnlFbGVtJztcclxuY29uc3QgY2F0ZWdvcnlFbGVtID0gbmV3IENhdGVnb3J5RWxlbSgpO1xyXG5cclxuaW1wb3J0IFBvcnRmb2xpb0VsZW0gZnJvbSAnLi9jb21wb25lbnRzL1BvcnRmb2xpb0VsZW0nO1xyXG5jb25zdCBwb3J0Zm9saW9FbGVtID0gbmV3IFBvcnRmb2xpb0VsZW0oKTtcclxuXHJcbmltcG9ydCBQb3B1bGFyUG9zdGVyc0VsZW0gZnJvbSAnLi9jb21wb25lbnRzL1BvcHVsYXJQb3N0ZXJzRWxlbSc7XHJcbmNvbnN0IHBvcHVsYXJQb3N0ZXJzRWxlbSA9IG5ldyBQb3B1bGFyUG9zdGVyc0VsZW0oKTtcclxuXHJcbmltcG9ydCBUYWdzQ2xvdWRFbGVtIGZyb20gJy4vY29tcG9uZW50cy9UYWdzQ2xvdWRFbGVtJztcclxuY29uc3QgdGFnc0Nsb3VkRWxlbSA9IG5ldyBUYWdzQ2xvdWRFbGVtKCk7XHJcblxyXG5pbXBvcnQgY2F0ZWdvcnlEYXRhIGZyb20gJy4uLy4uL2RhdGEvY2F0ZWdvcnlEYXRhJztcclxuaW1wb3J0IHBvcnRmb2xpb0RhdGEgZnJvbSAnLi4vLi4vZGF0YS9wb3J0Zm9saW9EYXRhJztcclxuaW1wb3J0IHBvcHVsYXJQb3N0ZXNEYXRhIGZyb20gJy4uLy4uL2RhdGEvcG9wdWxhclBvc3Rlc0RhdGEnO1xyXG5pbXBvcnQgdGFnc0Nsb3VkRGF0YSBmcm9tICcuLi8uLi9kYXRhL3RhZ3NDbG91ZERhdGEnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cdGNhdGVnb3J5RWxlbS5idWlsZERPTShjYXRlZ29yeURhdGEpO1xyXG5cdHBvcnRmb2xpb0VsZW0uYnVpbGRET00ocG9ydGZvbGlvRGF0YSk7XHJcblx0cG9wdWxhclBvc3RlcnNFbGVtLmJ1aWxkRE9NKHBvcHVsYXJQb3N0ZXNEYXRhKTtcclxuXHR0YWdzQ2xvdWRFbGVtLmJ1aWxkRE9NKHRhZ3NDbG91ZERhdGEpO1xyXG5cdHNjcm9sbEJ0bkluaXQoKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cdGNvbnRlbnRNYXJnaW5Ub3AoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjb250ZW50TWFyZ2luVG9wKCkge1xyXG5cdGNvbnN0IGhlYWRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xyXG5cdGNvbnN0IG1haW5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcblx0KGZ1bmN0aW9uIHJ1bigpIHtcclxuXHRcdG1haW5FbGVtLnN0eWxlLnBhZGRpbmdUb3AgPSBoZWFkRWxlbS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cdFx0VG9vbHMub25XaW5kb3dSZXNpemUocnVuKTtcclxuXHR9KSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxCdG5Jbml0KCkge1xyXG5cdGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZS10by10b3AnKTtcclxuXHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUb29scy5zY3JvbGxQYWdlVG9Ub3ApO1xyXG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBvbldpbmRvd1Jlc2l6ZSB9IGZyb20gJy4vb25XaW5kb3dSZXNpemUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNjcm9sbFBhZ2VUb1RvcCB9IGZyb20gJy4vc2Nyb2xsUGFnZVRvVG9wJzsiLCIvKipcclxuICog0J7Qu9C10LbQuNCy0LDQtdGCINC40LfQvNC10L3QtdC90LjQtSDRgNCw0LfQvNC10YDQvtCyINC+0LrQvdCwINCx0YDQsNGD0LfQtdGA0LAg0Lgg0LLRi9C30YvQstCw0LXRgiBjYiDQtdGB0LvQuCDQv9GA0LjQstGL0YHQtdC70L4g0LLRgNC10LzRjyDRg9C60LDQt9Cw0L3QvdC+0LUg0LIgZHVyYXRpb25cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2Ig0LrQsNC70LvQsdGN0LpcclxuICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0zMDBdINC40L3RgtC10YDQstCw0Lsg0LIg0LzQuNC70LvQuNGB0LjQutGD0L3QtNCw0YVcclxuICovXHJcbmZ1bmN0aW9uIG9uV2luZG93UmVzaXplKGNiLCBkdXJhdGlvbiA9IDMwMCkge1xyXG5cdGxldCB0aW1lb3V0O1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNiLCBkdXJhdGlvbik7XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9uV2luZG93UmVzaXplOyIsImZ1bmN0aW9uIHNjcm9sbFBhZ2VUb1RvcCgpIHtcclxuXHRmdW5jdGlvbiBnZXRTY3JvbGwoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHR9XHJcblx0ZnVuY3Rpb24gcnVuKCkge1xyXG5cdFx0aWYgKGdldFNjcm9sbCgpID4gMCkge1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsQnkoMCwgLU1hdGgubWF4KChnZXRTY3JvbGwoKSAvIDYpLCAxKSk7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRydW4oKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxQYWdlVG9Ub3A7Il19
