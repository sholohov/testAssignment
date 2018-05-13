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

	function resize() {
		mainElem.style.paddingTop = headElem.clientHeight + 'px';
	}

	Tools.onWindowResize(resize);
	resize();
}

function scrollBtnInit() {
	var btn = document.querySelector('#move-to-top');

	btn.addEventListener('click', function () {
		function getScroll() {
			return document.documentElement.scrollTop;
		}
		function run() {
			if (getScroll() > 0) {
				requestAnimationFrame(run);
				window.scrollBy(0, -Math.max(getScroll() / 6, 1));
			}
		}
		run();
	});
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

var _scrollToTop = require('./scrollToTop');

Object.defineProperty(exports, 'scrollToTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollToTop).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./onWindowResize":11,"./scrollToTop":12}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	return typeof obj;
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

/**
 * Олеживает изменение размеров окна браузера и вызывает cb если привысело время указанное в duration
 * @param {function} cb каллбэк
 * @param {number} [duration=300] интервал в миллисикундах
 */
function onWindowResize(cb) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

	var timeout = void 0;
	var fuList = onWindowResize.fu;

	function warnText(fu) {
		console.warn('\u041E\u0448\u0438\u0431\u043A\u0430: \n\t\u0432\u0442\u043E\u0440\u044B\u043C \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043A\u0430\u043B\u043B\u0431\u044D\u043A-\u0444\u0443\u043D\u043A\u0446\u0438\u044F, \u0443 \u0432\u0430\u0441 \u044D\u0442\u043E -', typeof fu === 'undefined' ? 'undefined' : _typeof(fu));
	}

	if (!fuList) {
		onWindowResize.fu = fuList = [];
	}

	if (typeof cb == 'function') {
		fuList.push(cb);
	} else {
		warnText(cb);
	}

	window.addEventListener('resize', function () {
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			fuList.forEach(function (item) {
				item();
			});
		}, duration);
	});
}

exports.default = onWindowResize;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.scrollPageToTop = scrollPageToTop;
function scrollPageToTop() {
	function getScroll() {
		return document.documentElement.scrollTop;
	}
	function run() {
		if (getScroll() > 0) {
			requestAnimationFrame(run);
			window.scrollBy(0, -Math.max(getScroll() / 6, 1));
		}
	}
	run();
	console.warn("warn");
}

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkYXRhL2NhdGVnb3J5RGF0YS5qc29uIiwiZGF0YS9wb3B1bGFyUG9zdGVzRGF0YS5qc29uIiwiZGF0YS9wb3J0Zm9saW9EYXRhLmpzb24iLCJkYXRhL3RhZ3NDbG91ZERhdGEuanNvbiIsInNyYy9qcy9jb21wb25lbnRzL0NhdGVnb3J5RWxlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL1BvcHVsYXJQb3N0ZXJzRWxlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL1BvcnRmb2xpb0VsZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9UYWdzQ2xvdWRFbGVtLmpzIiwic3JjL2pzL2luZGV4LmpzIiwic3JjL2pzL3Rvb2xzL2luZGV4LmpzIiwic3JjL2pzL3Rvb2xzL29uV2luZG93UmVzaXplLmpzIiwic3JjL2pzL3Rvb2xzL3Njcm9sbFRvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0FBVSxjQUFWLENBQUEsRUFBcEIsQ0FBb0IsQ0FBcEI7QUFDQTtBQUNEO0FBQ0Q7QUFDQSxTQUFBLElBQUEsQ0FBQSxNQUFBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz1be1xyXG5cdFwibmFtZVwiOiBcIldlYiBEZXNpZ25cIixcclxuXHRcImNvdW50XCI6IDEyXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJTbWFydCBQaG9uZVwiLFxyXG5cdFwiY291bnRcIjogMjNcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIkxhcHRvcFwiLFxyXG5cdFwiY291bnRcIjogMVxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiQXBwbGUgU3RvcmVcIixcclxuXHRcImNvdW50XCI6IDE5XHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJXb3JkcHJlc3MgVGhlbWVcIixcclxuXHRcImNvdW50XCI6IDI0XHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJXZWIgRGVzaWduXCIsXHJcblx0XCJjb3VudFwiOiAzNFxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiU3BvcnRcIixcclxuXHRcImNvdW50XCI6IDIxXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJGYXNoaW9uXCIsXHJcblx0XCJjb3VudFwiOiAzNFxyXG59XSIsIm1vZHVsZS5leHBvcnRzPVt7XHJcblx0XCJkZXNjXCI6IFwiU2VtcGVyIGF0IGVnZXN0YXMgc2VkLCBlbGVtZW50dW0gaW4ganVzdG9cIixcclxuXHRcInRpbWVcIjogXCIxMCwgSmFudWFyeSwgMjAxNFwiLFxyXG5cdFwiaW1nXCI6IFwiaW1nL3BvcHVsYXJfcG9zdGVzLmpwZ1wiXHJcbn0sIHtcclxuXHRcImRlc2NcIjogXCJWZWwgZWxlaWZlbmQgaWQgdWxsYW1jb3JwZXIgZXUgdmVsaXRcIixcclxuXHRcInRpbWVcIjogXCIxNCwgSmFudWFyeSwgMjAxNFwiLFxyXG5cdFwiaW1nXCI6IFwiaW1nL3BvcHVsYXJfcG9zdGVzLmpwZ1wiXHJcbn0sIHtcclxuXHRcImRlc2NcIjogXCJQcm9pbiB1cm5hIGVuaW0sIHNlbXBlciBhdCBlZ2VzdGFzXCIsXHJcblx0XCJ0aW1lXCI6IFwiMTAsIEphbnVhcnksIDIwMTRcIixcclxuXHRcImltZ1wiOiBcImltZy9wb3B1bGFyX3Bvc3Rlcy5qcGdcIlxyXG59LCB7XHJcblx0XCJkZXNjXCI6IFwiRnVzY2Ugdml0YWUgZHVpIHNpdCBhbWV0IGxhY3VzIHJ1dHJ1bSBjb252YWxsaXNcIixcclxuXHRcInRpbWVcIjogXCIxMCwgSmFudWFyeSwgMjAxNFwiLFxyXG5cdFwiaW1nXCI6IFwiaW1nL3BvcHVsYXJfcG9zdGVzLmpwZ1wiXHJcbn0sIHtcclxuXHRcImRlc2NcIjogXCJWaXZhbXVzIHNpdCBhbWV0IGxlY3R1cyB2ZW5lbmF0aXNcIixcclxuXHRcInRpbWVcIjogXCIxMCwgSmFudWFyeSwgMjAxNFwiLFxyXG5cdFwiaW1nXCI6IFwiaW1nL3BvcHVsYXJfcG9zdGVzLmpwZ1wiXHJcbn1dIiwibW9kdWxlLmV4cG9ydHM9W3tcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzEuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfMVwiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfMi5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF8yXCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF8zLmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzNcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzQuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfNFwiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfNS5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF81XCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF82LmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzZcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzcuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfN1wiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfOC5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF84XCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF85LmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzlcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzEwLmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzEwXCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF8xMS5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF8xMVwiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfMTIuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfMTJcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn1dIiwibW9kdWxlLmV4cG9ydHM9W3tcclxuXHRcIm5hbWVcIjogXCJEcmVzc1wiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJNaW5pXCJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIlNrYXRlIGFuaW1hbFwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJMb3JlbSBpcHN1bVwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJMaXRlcmF0dXJlXCJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIkJhcm9xdWVcIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiRHJlc3NcIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiTWluaVwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJTa2F0ZSBhbmltYWxcIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiTG9yZW0gaXBzdW1cIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiTGl0ZXJhdHVyZVwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJCYXJvcXVlXCJcclxufV0iLCJjbGFzcyBDYXRlZ29yeUVsZW0ge1xyXG5cdGJ1aWxkRE9NKGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9nLWNhdGVnb3J5XCIpO1xyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke2l0ZW0ubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNvdW50XCI+JHtpdGVtLmNvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2xpPmBcclxuXHRcdFx0KTtcclxuXHRcdH0pLmpvaW4oJycpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlFbGVtOyIsImNsYXNzIFBvcHVsYXJQb3N0ZXJzRWxlbSB7XHJcblx0YnVpbGRET00oZGF0YSkge1xyXG5cdFx0Y29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVsYXItcG9zdGVzXCIpO1xyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzPVwicGljXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtpdGVtLmltZ30pXCI+PC9maWd1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cImRlc2NcIiBocmVmPVwiI1wiIHRpdGxlPVwiJHtpdGVtLmRlc2N9XCI+JHtpdGVtLmRlc2N9PC9hPlxyXG5cdFx0XHRcdFx0XHQ8dGltZSBjbGFzcz1cInRpbWVcIj4ke2l0ZW0udGltZX08L3RpbWU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2xpPmBcclxuXHRcdFx0KTtcclxuXHRcdH0pLmpvaW4oJycpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhclBvc3RlcnNFbGVtOyIsImNsYXNzIFBvcnRmb2xpb0VsZW0ge1xyXG5cdGJ1aWxkRE9NKGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3J0Zm9saW8tbGlzdFwiKTtcclxuXHJcblx0XHRsaXN0RWxlbS5pbm5lckhUTUwgPSBkYXRhLm1hcChpdGVtID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRgPGxpIGNsYXNzPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0uaW1hZ2V9KVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPjxidXR0b24gY2xhc3M9XCJidG4gZnVsbC1zaXplXCI+PC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cImJ0biBsaW5rXCI+PC9idXR0b24+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz4ke2l0ZW0uZGVzY3JpcHRpb259PC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8cD4ke2l0ZW0ua2V5d29yZHN9PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9FbGVtOyIsImNsYXNzIFRhZ3NDbG91ZEVsZW0ge1xyXG5cdGJ1aWxkRE9NKGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWdzLWNsb3VkXCIpO1xyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzcz1cInRhZ1wiIGhyZWY9XCIjJHtpdGVtLm5hbWV9XCIgdGl0bGU9XCJcIj4ke2l0ZW0ubmFtZX08L2E+XHJcblx0XHRcdFx0PC9saT5gXHJcblx0XHRcdCk7XHJcblx0XHR9KS5qb2luKCcnKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3NDbG91ZEVsZW07IiwiaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi90b29scydcclxuXHJcbmltcG9ydCBDYXRlZ29yeUVsZW0gZnJvbSAnLi9jb21wb25lbnRzL0NhdGVnb3J5RWxlbSc7XHJcbmNvbnN0IGNhdGVnb3J5RWxlbSA9IG5ldyBDYXRlZ29yeUVsZW0oKTtcclxuXHJcbmltcG9ydCBQb3J0Zm9saW9FbGVtIGZyb20gJy4vY29tcG9uZW50cy9Qb3J0Zm9saW9FbGVtJztcclxuY29uc3QgcG9ydGZvbGlvRWxlbSA9IG5ldyBQb3J0Zm9saW9FbGVtKCk7XHJcblxyXG5pbXBvcnQgUG9wdWxhclBvc3RlcnNFbGVtIGZyb20gJy4vY29tcG9uZW50cy9Qb3B1bGFyUG9zdGVyc0VsZW0nO1xyXG5jb25zdCBwb3B1bGFyUG9zdGVyc0VsZW0gPSBuZXcgUG9wdWxhclBvc3RlcnNFbGVtKCk7XHJcblxyXG5pbXBvcnQgVGFnc0Nsb3VkRWxlbSBmcm9tICcuL2NvbXBvbmVudHMvVGFnc0Nsb3VkRWxlbSc7XHJcbmNvbnN0IHRhZ3NDbG91ZEVsZW0gPSBuZXcgVGFnc0Nsb3VkRWxlbSgpO1xyXG5cclxuaW1wb3J0IGNhdGVnb3J5RGF0YSBmcm9tICcuLi8uLi9kYXRhL2NhdGVnb3J5RGF0YSc7XHJcbmltcG9ydCBwb3J0Zm9saW9EYXRhIGZyb20gJy4uLy4uL2RhdGEvcG9ydGZvbGlvRGF0YSc7XHJcbmltcG9ydCBwb3B1bGFyUG9zdGVzRGF0YSBmcm9tICcuLi8uLi9kYXRhL3BvcHVsYXJQb3N0ZXNEYXRhJztcclxuaW1wb3J0IHRhZ3NDbG91ZERhdGEgZnJvbSAnLi4vLi4vZGF0YS90YWdzQ2xvdWREYXRhJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHRjYXRlZ29yeUVsZW0uYnVpbGRET00oY2F0ZWdvcnlEYXRhKTtcclxuXHRwb3J0Zm9saW9FbGVtLmJ1aWxkRE9NKHBvcnRmb2xpb0RhdGEpO1xyXG5cdHBvcHVsYXJQb3N0ZXJzRWxlbS5idWlsZERPTShwb3B1bGFyUG9zdGVzRGF0YSk7XHJcblx0dGFnc0Nsb3VkRWxlbS5idWlsZERPTSh0YWdzQ2xvdWREYXRhKTtcclxuXHRzY3JvbGxCdG5Jbml0KCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjb250ZW50TWFyZ2luVG9wKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY29udGVudE1hcmdpblRvcCgpIHtcclxuXHRjb25zdCBoZWFkRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcclxuXHRjb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG5cdGZ1bmN0aW9uIHJlc2l6ZSgpIHtcclxuXHRcdG1haW5FbGVtLnN0eWxlLnBhZGRpbmdUb3AgPSBoZWFkRWxlbS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cdH1cclxuXHJcblx0VG9vbHMub25XaW5kb3dSZXNpemUocmVzaXplKTtcclxuXHRyZXNpemUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsQnRuSW5pdCgpIHtcclxuXHRsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmUtdG8tdG9wJyk7XHJcblx0XHJcblx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIHJ1bigpIHtcclxuXHRcdFx0aWYgKGdldFNjcm9sbCgpID4gMCkge1xyXG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cnVuKCk7XHJcblx0fSk7XHJcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIG9uV2luZG93UmVzaXplIH0gZnJvbSAnLi9vbldpbmRvd1Jlc2l6ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2Nyb2xsVG9Ub3AgfSBmcm9tICcuL3Njcm9sbFRvVG9wJzsiLCIvKipcclxuICog0J7Qu9C10LbQuNCy0LDQtdGCINC40LfQvNC10L3QtdC90LjQtSDRgNCw0LfQvNC10YDQvtCyINC+0LrQvdCwINCx0YDQsNGD0LfQtdGA0LAg0Lgg0LLRi9C30YvQstCw0LXRgiBjYiDQtdGB0LvQuCDQv9GA0LjQstGL0YHQtdC70L4g0LLRgNC10LzRjyDRg9C60LDQt9Cw0L3QvdC+0LUg0LIgZHVyYXRpb25cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2Ig0LrQsNC70LvQsdGN0LpcclxuICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0zMDBdINC40L3RgtC10YDQstCw0Lsg0LIg0LzQuNC70LvQuNGB0LjQutGD0L3QtNCw0YVcclxuICovXHJcbmZ1bmN0aW9uIG9uV2luZG93UmVzaXplKGNiLCBkdXJhdGlvbiA9IDMwMCkge1xyXG5cdGxldCB0aW1lb3V0O1xyXG5cdGxldCBmdUxpc3QgPSBvbldpbmRvd1Jlc2l6ZS5mdTtcclxuXHJcblx0ZnVuY3Rpb24gd2FyblRleHQoZnUpIHtcclxuXHRcdGNvbnNvbGUud2FybihcclxuXHRcdFx0YNCe0YjQuNCx0LrQsDogXFxuXFx00LLRgtC+0YDRi9C8INCw0YDQs9GD0LzQtdC90YLQvtC8INC00L7Qu9C20L3QsCDQsdGL0YLRjCDQutCw0LvQu9Cx0Y3Qui3RhNGD0L3QutGG0LjRjywg0YMg0LLQsNGBINGN0YLQviAtYCxcclxuXHRcdFx0dHlwZW9mIGZ1XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0aWYgKCFmdUxpc3QpIHtcclxuXHRcdG9uV2luZG93UmVzaXplLmZ1ID0gZnVMaXN0ID0gW107XHJcblx0fVxyXG5cclxuXHRpZiAodHlwZW9mIGNiID09ICdmdW5jdGlvbicpIHtcclxuXHRcdGZ1TGlzdC5wdXNoKGNiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2FyblRleHQoY2IpO1xyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRmdUxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCJleHBvcnQgZnVuY3Rpb24gc2Nyb2xsUGFnZVRvVG9wKCkge1xyXG5cdGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBydW4oKSB7XHJcblx0XHRpZiAoZ2V0U2Nyb2xsKCkgPiAwKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsQnkoMCwgLU1hdGgubWF4KChnZXRTY3JvbGwoKSAvIDYpLCAxKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG5cdGNvbnNvbGUud2FybihcIndhcm5cIik7XHJcbn0iXX0=
