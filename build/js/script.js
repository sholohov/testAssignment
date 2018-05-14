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

	mainElem.style.paddingTop = headElem.clientHeight + 'px';
	Tools.onWindowResize(contentMarginTop);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkYXRhL2NhdGVnb3J5RGF0YS5qc29uIiwiZGF0YS9wb3B1bGFyUG9zdGVzRGF0YS5qc29uIiwiZGF0YS9wb3J0Zm9saW9EYXRhLmpzb24iLCJkYXRhL3RhZ3NDbG91ZERhdGEuanNvbiIsInNyYy9qcy9jb21wb25lbnRzL0NhdGVnb3J5RWxlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL1BvcHVsYXJQb3N0ZXJzRWxlbS5qcyIsInNyYy9qcy9jb21wb25lbnRzL1BvcnRmb2xpb0VsZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9UYWdzQ2xvdWRFbGVtLmpzIiwic3JjL2pzL2luZGV4LmpzIiwic3JjL2pzL3Rvb2xzL2luZGV4LmpzIiwic3JjL2pzL3Rvb2xzL29uV2luZG93UmVzaXplLmpzIiwic3JjL2pzL3Rvb2xzL3Njcm9sbFBhZ2VUb1RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QSxDQUFBLEVBQUEsRUFBc0I7QUFDckIsVUFBQSxJQUFBLENBQUEsaVZBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxXQUFBLEdBQUEsV0FBQSxHQUFBLFFBQUEsRUFBQSxDQUFBO0FBSUE7O0FBRUQsS0FBSSxDQUFKLE1BQUEsRUFBYTtBQUNaLGlCQUFBLEVBQUEsR0FBb0IsU0FBcEIsRUFBQTtBQUNBOztBQUVELEtBQUksT0FBQSxFQUFBLElBQUosVUFBQSxFQUE2QjtBQUM1QixTQUFBLElBQUEsQ0FBQSxFQUFBO0FBREQsRUFBQSxNQUVPO0FBQ04sV0FBQSxFQUFBO0FBQ0E7O0FBRUQsUUFBQSxnQkFBQSxDQUFBLFFBQUEsRUFBa0MsWUFBVztBQUM1QyxlQUFBLE9BQUE7QUFDQSxZQUFVLFdBQVcsWUFBTTtBQUMxQixVQUFBLE9BQUEsQ0FBZSxVQUFBLElBQUEsRUFBUTtBQUN0QjtBQURELElBQUE7QUFEUyxHQUFBLEVBQVYsUUFBVSxDQUFWO0FBRkQsRUFBQTtBQVFBOztrQkFFYyxjOzs7Ozs7OztBQ3BDZixTQUFBLGVBQUEsR0FBMkI7QUFDMUIsVUFBQSxTQUFBLEdBQXFCO0FBQ3BCLFNBQU8sU0FBQSxlQUFBLENBQVAsU0FBQTtBQUNBO0FBQ0QsVUFBQSxHQUFBLEdBQWU7QUFDZCxNQUFJLGNBQUosQ0FBQSxFQUFxQjtBQUNwQixVQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQW1CLENBQUMsS0FBQSxHQUFBLENBQVUsY0FBVixDQUFBLEVBQXBCLENBQW9CLENBQXBCO0FBQ0EseUJBQUEsR0FBQTtBQUNBO0FBQ0Q7QUFDRDtBQUNBO2tCQUNjLGUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz1be1xyXG5cdFwibmFtZVwiOiBcIldlYiBEZXNpZ25cIixcclxuXHRcImNvdW50XCI6IDEyXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJTbWFydCBQaG9uZVwiLFxyXG5cdFwiY291bnRcIjogMjNcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIkxhcHRvcFwiLFxyXG5cdFwiY291bnRcIjogMVxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiQXBwbGUgU3RvcmVcIixcclxuXHRcImNvdW50XCI6IDE5XHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJXb3JkcHJlc3MgVGhlbWVcIixcclxuXHRcImNvdW50XCI6IDI0XHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJXZWIgRGVzaWduXCIsXHJcblx0XCJjb3VudFwiOiAzNFxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiU3BvcnRcIixcclxuXHRcImNvdW50XCI6IDIxXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJGYXNoaW9uXCIsXHJcblx0XCJjb3VudFwiOiAzNFxyXG59XSIsIm1vZHVsZS5leHBvcnRzPVt7XHJcblx0XCJkZXNjXCI6IFwiU2VtcGVyIGF0IGVnZXN0YXMgc2VkLCBlbGVtZW50dW0gaW4ganVzdG9cIixcclxuXHRcInRpbWVcIjogXCIxMCwgSmFudWFyeSwgMjAxNFwiLFxyXG5cdFwiaW1nXCI6IFwiaW1nL3BvcHVsYXJfcG9zdGVzLmpwZ1wiXHJcbn0sIHtcclxuXHRcImRlc2NcIjogXCJWZWwgZWxlaWZlbmQgaWQgdWxsYW1jb3JwZXIgZXUgdmVsaXRcIixcclxuXHRcInRpbWVcIjogXCIxNCwgSmFudWFyeSwgMjAxNFwiLFxyXG5cdFwiaW1nXCI6IFwiaW1nL3BvcHVsYXJfcG9zdGVzLmpwZ1wiXHJcbn0sIHtcclxuXHRcImRlc2NcIjogXCJQcm9pbiB1cm5hIGVuaW0sIHNlbXBlciBhdCBlZ2VzdGFzXCIsXHJcblx0XCJ0aW1lXCI6IFwiMTAsIEphbnVhcnksIDIwMTRcIixcclxuXHRcImltZ1wiOiBcImltZy9wb3B1bGFyX3Bvc3Rlcy5qcGdcIlxyXG59LCB7XHJcblx0XCJkZXNjXCI6IFwiRnVzY2Ugdml0YWUgZHVpIHNpdCBhbWV0IGxhY3VzIHJ1dHJ1bSBjb252YWxsaXNcIixcclxuXHRcInRpbWVcIjogXCIxMCwgSmFudWFyeSwgMjAxNFwiLFxyXG5cdFwiaW1nXCI6IFwiaW1nL3BvcHVsYXJfcG9zdGVzLmpwZ1wiXHJcbn0sIHtcclxuXHRcImRlc2NcIjogXCJWaXZhbXVzIHNpdCBhbWV0IGxlY3R1cyB2ZW5lbmF0aXNcIixcclxuXHRcInRpbWVcIjogXCIxMCwgSmFudWFyeSwgMjAxNFwiLFxyXG5cdFwiaW1nXCI6IFwiaW1nL3BvcHVsYXJfcG9zdGVzLmpwZ1wiXHJcbn1dIiwibW9kdWxlLmV4cG9ydHM9W3tcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzEuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfMVwiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfMi5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF8yXCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF8zLmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzNcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzQuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfNFwiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfNS5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF81XCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF82LmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzZcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzcuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfN1wiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfOC5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF84XCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF85LmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzlcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn0sIHtcclxuXHRcImltYWdlXCI6IFwiaW1nL3BvcnRmb2xpby9jYXJkXzEwLmpwZ1wiLFxyXG5cdFwibGlua1wiOiBcIiNjYXJkXzEwXCIsXHJcblx0XCJkZXNjcmlwdGlvblwiOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0XCJrZXl3b3Jkc1wiOiBcIkFuaW1hdGlvbiwgR2FtZSBEZXNpZ25cIlxyXG59LCB7XHJcblx0XCJpbWFnZVwiOiBcImltZy9wb3J0Zm9saW8vY2FyZF8xMS5qcGdcIixcclxuXHRcImxpbmtcIjogXCIjY2FyZF8xMVwiLFxyXG5cdFwiZGVzY3JpcHRpb25cIjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFwia2V5d29yZHNcIjogXCJBbmltYXRpb24sIEdhbWUgRGVzaWduXCJcclxufSwge1xyXG5cdFwiaW1hZ2VcIjogXCJpbWcvcG9ydGZvbGlvL2NhcmRfMTIuanBnXCIsXHJcblx0XCJsaW5rXCI6IFwiI2NhcmRfMTJcIixcclxuXHRcImRlc2NyaXB0aW9uXCI6IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcImtleXdvcmRzXCI6IFwiQW5pbWF0aW9uLCBHYW1lIERlc2lnblwiXHJcbn1dIiwibW9kdWxlLmV4cG9ydHM9W3tcclxuXHRcIm5hbWVcIjogXCJEcmVzc1wiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJNaW5pXCJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIlNrYXRlIGFuaW1hbFwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJMb3JlbSBpcHN1bVwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJMaXRlcmF0dXJlXCJcclxufSwge1xyXG5cdFwibmFtZVwiOiBcIkJhcm9xdWVcIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiRHJlc3NcIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiTWluaVwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJTa2F0ZSBhbmltYWxcIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiTG9yZW0gaXBzdW1cIlxyXG59LCB7XHJcblx0XCJuYW1lXCI6IFwiTGl0ZXJhdHVyZVwiXHJcbn0sIHtcclxuXHRcIm5hbWVcIjogXCJCYXJvcXVlXCJcclxufV0iLCJjbGFzcyBDYXRlZ29yeUVsZW0ge1xyXG5cdGJ1aWxkRE9NKGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9nLWNhdGVnb3J5XCIpO1xyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke2l0ZW0ubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNvdW50XCI+JHtpdGVtLmNvdW50fTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2xpPmBcclxuXHRcdFx0KTtcclxuXHRcdH0pLmpvaW4oJycpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlFbGVtOyIsImNsYXNzIFBvcHVsYXJQb3N0ZXJzRWxlbSB7XHJcblx0YnVpbGRET00oZGF0YSkge1xyXG5cdFx0Y29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVsYXItcG9zdGVzXCIpO1xyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzPVwicGljXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtpdGVtLmltZ30pXCI+PC9maWd1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cImRlc2NcIiBocmVmPVwiI1wiIHRpdGxlPVwiJHtpdGVtLmRlc2N9XCI+JHtpdGVtLmRlc2N9PC9hPlxyXG5cdFx0XHRcdFx0XHQ8dGltZSBjbGFzcz1cInRpbWVcIj4ke2l0ZW0udGltZX08L3RpbWU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2xpPmBcclxuXHRcdFx0KTtcclxuXHRcdH0pLmpvaW4oJycpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhclBvc3RlcnNFbGVtOyIsImNsYXNzIFBvcnRmb2xpb0VsZW0ge1xyXG5cdGJ1aWxkRE9NKGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3J0Zm9saW8tbGlzdFwiKTtcclxuXHJcblx0XHRsaXN0RWxlbS5pbm5lckhUTUwgPSBkYXRhLm1hcChpdGVtID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRgPGxpIGNsYXNzPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0uaW1hZ2V9KVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPjxidXR0b24gY2xhc3M9XCJidG4gZnVsbC1zaXplXCI+PC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cImJ0biBsaW5rXCI+PC9idXR0b24+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz4ke2l0ZW0uZGVzY3JpcHRpb259PC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8cD4ke2l0ZW0ua2V5d29yZHN9PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9FbGVtOyIsImNsYXNzIFRhZ3NDbG91ZEVsZW0ge1xyXG5cdGJ1aWxkRE9NKGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWdzLWNsb3VkXCIpO1xyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8YSBjbGFzcz1cInRhZ1wiIGhyZWY9XCIjJHtpdGVtLm5hbWV9XCIgdGl0bGU9XCJcIj4ke2l0ZW0ubmFtZX08L2E+XHJcblx0XHRcdFx0PC9saT5gXHJcblx0XHRcdCk7XHJcblx0XHR9KS5qb2luKCcnKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3NDbG91ZEVsZW07IiwiaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi90b29scydcclxuXHJcbmltcG9ydCBDYXRlZ29yeUVsZW0gZnJvbSAnLi9jb21wb25lbnRzL0NhdGVnb3J5RWxlbSc7XHJcbmNvbnN0IGNhdGVnb3J5RWxlbSA9IG5ldyBDYXRlZ29yeUVsZW0oKTtcclxuXHJcbmltcG9ydCBQb3J0Zm9saW9FbGVtIGZyb20gJy4vY29tcG9uZW50cy9Qb3J0Zm9saW9FbGVtJztcclxuY29uc3QgcG9ydGZvbGlvRWxlbSA9IG5ldyBQb3J0Zm9saW9FbGVtKCk7XHJcblxyXG5pbXBvcnQgUG9wdWxhclBvc3RlcnNFbGVtIGZyb20gJy4vY29tcG9uZW50cy9Qb3B1bGFyUG9zdGVyc0VsZW0nO1xyXG5jb25zdCBwb3B1bGFyUG9zdGVyc0VsZW0gPSBuZXcgUG9wdWxhclBvc3RlcnNFbGVtKCk7XHJcblxyXG5pbXBvcnQgVGFnc0Nsb3VkRWxlbSBmcm9tICcuL2NvbXBvbmVudHMvVGFnc0Nsb3VkRWxlbSc7XHJcbmNvbnN0IHRhZ3NDbG91ZEVsZW0gPSBuZXcgVGFnc0Nsb3VkRWxlbSgpO1xyXG5cclxuaW1wb3J0IGNhdGVnb3J5RGF0YSBmcm9tICcuLi8uLi9kYXRhL2NhdGVnb3J5RGF0YSc7XHJcbmltcG9ydCBwb3J0Zm9saW9EYXRhIGZyb20gJy4uLy4uL2RhdGEvcG9ydGZvbGlvRGF0YSc7XHJcbmltcG9ydCBwb3B1bGFyUG9zdGVzRGF0YSBmcm9tICcuLi8uLi9kYXRhL3BvcHVsYXJQb3N0ZXNEYXRhJztcclxuaW1wb3J0IHRhZ3NDbG91ZERhdGEgZnJvbSAnLi4vLi4vZGF0YS90YWdzQ2xvdWREYXRhJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHRjYXRlZ29yeUVsZW0uYnVpbGRET00oY2F0ZWdvcnlEYXRhKTtcclxuXHRwb3J0Zm9saW9FbGVtLmJ1aWxkRE9NKHBvcnRmb2xpb0RhdGEpO1xyXG5cdHBvcHVsYXJQb3N0ZXJzRWxlbS5idWlsZERPTShwb3B1bGFyUG9zdGVzRGF0YSk7XHJcblx0dGFnc0Nsb3VkRWxlbS5idWlsZERPTSh0YWdzQ2xvdWREYXRhKTtcclxuXHRzY3JvbGxCdG5Jbml0KCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjb250ZW50TWFyZ2luVG9wKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY29udGVudE1hcmdpblRvcCgpIHtcclxuXHRjb25zdCBoZWFkRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcclxuXHRjb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG5cdG1haW5FbGVtLnN0eWxlLnBhZGRpbmdUb3AgPSBoZWFkRWxlbS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cdFRvb2xzLm9uV2luZG93UmVzaXplKGNvbnRlbnRNYXJnaW5Ub3ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxCdG5Jbml0KCkge1xyXG5cdGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZS10by10b3AnKTtcclxuXHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBUb29scy5zY3JvbGxQYWdlVG9Ub3ApO1xyXG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBvbldpbmRvd1Jlc2l6ZSB9IGZyb20gJy4vb25XaW5kb3dSZXNpemUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNjcm9sbFBhZ2VUb1RvcCB9IGZyb20gJy4vc2Nyb2xsUGFnZVRvVG9wJzsiLCIvKipcclxuICog0J7Qu9C10LbQuNCy0LDQtdGCINC40LfQvNC10L3QtdC90LjQtSDRgNCw0LfQvNC10YDQvtCyINC+0LrQvdCwINCx0YDQsNGD0LfQtdGA0LAg0Lgg0LLRi9C30YvQstCw0LXRgiBjYiDQtdGB0LvQuCDQv9GA0LjQstGL0YHQtdC70L4g0LLRgNC10LzRjyDRg9C60LDQt9Cw0L3QvdC+0LUg0LIgZHVyYXRpb25cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2Ig0LrQsNC70LvQsdGN0LpcclxuICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0zMDBdINC40L3RgtC10YDQstCw0Lsg0LIg0LzQuNC70LvQuNGB0LjQutGD0L3QtNCw0YVcclxuICovXHJcbmZ1bmN0aW9uIG9uV2luZG93UmVzaXplKGNiLCBkdXJhdGlvbiA9IDMwMCkge1xyXG5cdGxldCB0aW1lb3V0O1xyXG5cdGxldCBmdUxpc3QgPSBvbldpbmRvd1Jlc2l6ZS5mdTtcclxuXHJcblx0ZnVuY3Rpb24gd2FyblRleHQoZnUpIHtcclxuXHRcdGNvbnNvbGUud2FybihcclxuXHRcdFx0YNCe0YjQuNCx0LrQsDogXFxuXFx00LLRgtC+0YDRi9C8INCw0YDQs9GD0LzQtdC90YLQvtC8INC00L7Qu9C20L3QsCDQsdGL0YLRjCDQutCw0LvQu9Cx0Y3Qui3RhNGD0L3QutGG0LjRjywg0YMg0LLQsNGBINGN0YLQviAtYCxcclxuXHRcdFx0dHlwZW9mIGZ1XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0aWYgKCFmdUxpc3QpIHtcclxuXHRcdG9uV2luZG93UmVzaXplLmZ1ID0gZnVMaXN0ID0gW107XHJcblx0fVxyXG5cclxuXHRpZiAodHlwZW9mIGNiID09ICdmdW5jdGlvbicpIHtcclxuXHRcdGZ1TGlzdC5wdXNoKGNiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2FyblRleHQoY2IpO1xyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRmdUxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCJmdW5jdGlvbiBzY3JvbGxQYWdlVG9Ub3AoKSB7XHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHJ1bigpIHtcclxuXHRcdGlmIChnZXRTY3JvbGwoKSA+IDApIHtcclxuXHRcdFx0d2luZG93LnNjcm9sbEJ5KDAsIC1NYXRoLm1heCgoZ2V0U2Nyb2xsKCkgLyA2KSwgMSkpO1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cnVuKCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsUGFnZVRvVG9wOyJdfQ==
