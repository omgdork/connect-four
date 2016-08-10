(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    var rows = arguments.length <= 0 || arguments[0] === undefined ? 6 : arguments[0];
    var columns = arguments.length <= 1 || arguments[1] === undefined ? 7 : arguments[1];
    var toWin = arguments.length <= 2 || arguments[2] === undefined ? 4 : arguments[2];

    _classCallCheck(this, _class);

    this.board = [];
    this.rows = rows;
    this.columns = columns;
    this.toWin = toWin;
    this.moveCount = 0;

    for (var i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (var j = 0; j < this.columns; j++) {
        this.board[i].push(0);
      }
    }
  }

  _createClass(_class, [{
    key: "dropDisc",
    value: function dropDisc(player, columnIndex) {
      for (var i = this.rows - 1; i >= 0; i--) {
        if (this.board[i][columnIndex] === 0) {
          this.board[i][columnIndex] = player;
          this.moveCount++;
          return i;
        }
      }
      return -1;
    }
  }, {
    key: "getWinner",
    value: function getWinner() {
      //vertical
      for (var row = 0; row < Math.ceil(this.rows / 2); row++) {
        for (var column = 0; column < this.columns; column++) {
          var pos1 = this.board[row][column];
          var pos2 = this.board[row + 1][column];
          var pos3 = this.board[row + 2][column];
          var pos4 = this.board[row + 3][column];
          if (hasFourConsecutive(pos1, pos2, pos3, pos4)) {
            return this.board[row][column];
          }
        }
      }

      //horizontal
      for (var _row = 0; _row < this.rows; _row++) {
        for (var _column = 0; _column < Math.ceil(this.columns / 2); _column++) {
          var _pos = this.board[_row][_column];
          var _pos2 = this.board[_row][_column + 1];
          var _pos3 = this.board[_row][_column + 2];
          var _pos4 = this.board[_row][_column + 3];
          if (hasFourConsecutive(_pos, _pos2, _pos3, _pos4)) {
            return this.board[_row][_column];
          }
        }
      }

      //diagonal
      for (var _row2 = 0; _row2 < Math.ceil(this.rows / 2); _row2++) {
        for (var _column2 = 0; _column2 < Math.ceil(this.columns / 2); _column2++) {
          var _pos5 = this.board[_row2][_column2];
          var _pos6 = this.board[_row2 + 1][_column2 + 1];
          var _pos7 = this.board[_row2 + 2][_column2 + 2];
          var _pos8 = this.board[_row2 + 3][_column2 + 3];
          if (hasFourConsecutive(_pos5, _pos6, _pos7, _pos8)) {
            return this.board[_row2][_column2];
          }
        }
      }

      for (var _row3 = Math.ceil(this.rows / 2); _row3 < this.rows; _row3++) {
        for (var _column3 = 0; _column3 < Math.ceil(this.columns / 2); _column3++) {
          var _pos9 = this.board[_row3][_column3];
          var _pos10 = this.board[_row3 - 1][_column3 + 1];
          var _pos11 = this.board[_row3 - 2][_column3 + 2];
          var _pos12 = this.board[_row3 - 3][_column3 + 3];
          if (hasFourConsecutive(_pos9, _pos10, _pos11, _pos12)) {
            return this.board[_row3][_column3];
          }
        }
      }

      //draw
      var maxMoves = this.rows * this.columns;
      if (this.moveCount === maxMoves) {
        return -1;
      }

      //no winner yet
      return 0;
    }
  }]);

  return _class;
}();

exports.default = _class;


function hasFourConsecutive(pos1, pos2, pos3, pos4) {
  return pos1 !== 0 && pos1 === pos2 && pos1 === pos3 && pos1 === pos4;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jqueryMin = require('../../bower_components/jquery/dist/jquery.min.js');

var _jqueryMin2 = _interopRequireDefault(_jqueryMin);

var _game = require('./game.js');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.player = 1;
  }

  _createClass(_class, [{
    key: 'newGame',
    value: function newGame() {
      var _this = this;

      var game = new _game2.default();
      var columns = '';
      for (var i = 0; i < game.columns; i++) {
        columns += '<td></td>';
      }

      var rows = '';
      for (var _i = 0; _i < game.rows; _i++) {
        rows += '<tr>' + columns + '</tr>';
      }

      var board = (0, _jqueryMin2.default)('.board');
      board.children('tbody').html(rows);
      board.on('click', 'td', function (e) {
        var cell = (0, _jqueryMin2.default)(e.currentTarget);
        var columnIndex = cell.index();
        var rowIndex = game.dropDisc(_this.player, columnIndex);

        if (rowIndex >= 0) {
          //draw the disc
          var disc = '<span class="disc disc-player-' + _this.player + '"></span>';
          board.find('tr').eq(rowIndex).children('td').eq(columnIndex).append(disc);

          var winner = game.getWinner();
          if (winner === 0) {
            //switch player
            _this.player = _this.player === 1 ? 2 : 1;

            var _message = (0, _jqueryMin2.default)('.message');
            _message.html('<span class="disc disc-player-' + _this.player + '"></span>Player ' + _this.player + '\'s turn.');
          } else {
            (function () {
              board.off('click', 'td');
              var resultContainer = (0, _jqueryMin2.default)('.result-container');
              var result = winner > 0 ? '<span class="disc disc-player-' + winner + '"></span> Player ' + winner + ' wins!' : 'Draw!';
              message.html(result);

              var btnNewGame = (0, _jqueryMin2.default)('<button type="button" class="btn btn-default btn-new-game">Play Again</button>');
              btnNewGame.click(function () {
                btnNewGame.remove();
                _this.newGame();
              });

              resultContainer.append(btnNewGame);
              board.after(resultContainer);
            })();
          }
        }
      });

      var message = (0, _jqueryMin2.default)('.message');
      message.html('<span class="disc disc-player-' + this.player + '"></span>Player ' + this.player + '\'s turn.');
    }
  }]);

  return _class;
}();

exports.default = _class;

},{"../../bower_components/jquery/dist/jquery.min.js":3,"./game.js":1}],3:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = a.document,
      m = "2.1.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return d.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a, b) {
      return n.each(this, a, b);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
    }, isPlainObject: function isPlainObject(a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = s(a);if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.apply(a[e], c), d === !1) break;
        }
      } else if (g) {
        for (; f > e; e++) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }
      } else for (e in a) {
        if (d = b.call(a[e], e, a[e]), d === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : g.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];if (h) for (; g > f; f++) {
        d = b(a[f], f, c), null != d && i.push(d);
      } else for (f in a) {
        d = b(a[f], f, c), null != d && i.push(d);
      }return e.apply([], i);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, e, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
        return a.apply(b || this, e.concat(d.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = M.replace("w", "w#"),
        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
        Q = new RegExp(L + "+", "g"),
        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        S = new RegExp("^" + L + "*," + L + "*"),
        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        V = new RegExp(P),
        W = new RegExp("^" + N + "$"),
        X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        aa = /[+~]/,
        ba = /'|\\/g,
        ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        da = function da(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ea = function ea() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
        }if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
              o[l] = s + ra(o[l]);
            }w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
          }if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute("id");
          }
        }
      }return i(a.replace(R, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = a.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ca, da);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ca, da);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            h = [a],
            i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          h.unshift(c);
        }c = b;while (c = c.parentNode) {
          i.unshift(c);
        }while (h[d] === i[d]) {
          d++;
        }return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, g) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;if (q) {
              if (f) {
                while (p) {
                  l = b;while (l = l[p]) {
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];break;
                  }
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              }return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(ca, da), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Z.test(a.nodeName);
        }, input: function input(a) {
          return Y.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: oa(function () {
          return [0];
        }), last: oa(function (a, b) {
          return [b - 1];
        }), eq: oa(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: oa(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: oa(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function sa(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function ta(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        ga(a, b[d], c);
      }return c;
    }function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }return g;
    }function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : va(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = va(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
        return a === b;
      }, h, !0), l = sa(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
          }m.push(c);
        }
      }return ta(m);
    }function ya(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            m,
            o,
            p = 0,
            q = "0",
            r = _f && [],
            s = [],
            t = j,
            u = _f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;while (o = a[m++]) {
              if (o(l, g, h)) {
                i.push(l);break;
              }
            }k && (w = v);
          }c && ((l = !o && l) && p--, _f && r.push(l));
        }if (p += q, c && q !== p) {
          m = 0;while (o = b[m++]) {
            o(r, s, g, h);
          }if (_f) {
            if (p > 0) while (q--) {
              r[q] || s[q] || (s[q] = F.call(i));
            }s = va(s);
          }H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = v, j = t), r;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, ya(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function filter(a) {
      return this.pushStack(x(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(x(this, a || [], !0));
    }, is: function is(a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
    } });var y,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = n.fn.init = function (a, b) {
    var c, d;if (!a) return this;if ("string" == typeof a) {
      if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) {
          n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        }return this;
      }return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
      C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
      var d = [],
          e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;d.push(a);
        }
      }return d;
    }, sibling: function sibling(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }return c;
    } }), n.fn.extend({ has: function has(a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? n.unique(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return n.dir(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return n.dir(a, "parentNode", c);
    }, next: function next(a) {
      return D(a, "nextSibling");
    }, prev: function prev(a) {
      return D(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return n.dir(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return n.dir(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return n.dir(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return n.dir(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return n.sibling((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return n.sibling(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
    };
  });var E = /\S+/g,
      F = {};function G(a) {
    var b = F[a] = {};return n.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function j(l) {
      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
        if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          b = !1;break;
        }
      }d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
    },
        k = { add: function add() {
        if (h) {
          var c = h.length;!function g(b) {
            n.each(b, function (b, c) {
              var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
            });
          }(arguments), d ? f = h.length : b && (e = c, j(b));
        }return this;
      }, remove: function remove() {
        return h && n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, h, c)) > -1) {
            h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
          }
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
      }, empty: function empty() {
        return h = [], f = 0, this;
      }, disable: function disable() {
        return h = i = b = void 0, this;
      }, disabled: function disabled() {
        return !h;
      }, lock: function lock() {
        return i = void 0, b || k.disable(), this;
      }, locked: function locked() {
        return !i;
      }, fireWith: function fireWith(a, b) {
        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
      }, fire: function fire() {
        return k.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!c;
      } };return k;
  }, n.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var H;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
    } });function I() {
    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
  }n.ready.promise = function (b) {
    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
  }, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) {
        n.access(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  };n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function K() {
    Object.defineProperty(this.cache = {}, 0, { get: function get() {
        return {};
      } }), this.expando = n.expando + K.uid++;
  }K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
      if (!K.accepts(a)) return 0;var b = {},
          c = a[this.expando];if (!c) {
        c = K.uid++;try {
          b[this.expando] = { value: c }, Object.defineProperties(a, b);
        } catch (d) {
          b[this.expando] = c, n.extend(a, b);
        }
      }return this.cache[c] || (this.cache[c] = {}), c;
    }, set: function set(a, b, c) {
      var d,
          e = this.key(a),
          f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) {
        f[d] = b[d];
      }return f;
    }, get: function get(a, b) {
      var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
    }, access: function access(a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) {
          delete g[d[c]];
        }
      }
    }, hasData: function hasData(a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
    }, discard: function discard(a) {
      a[this.expando] && delete this.cache[a[this.expando]];
    } };var L = new K(),
      M = new K(),
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;function P(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}M.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function hasData(a) {
      return M.hasData(a) || L.hasData(a);
    }, data: function data(a, b, c) {
      return M.access(a, b, c);
    }, removeData: function removeData(a, b) {
      M.remove(a, b);
    }, _data: function _data(a, b, c) {
      return L.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      L.remove(a, b);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          }L.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        M.set(this, a);
      }) : J(this, function (b) {
        var c,
            d = n.camelCase(a);if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c) return c;if (c = M.get(f, d), void 0 !== c) return c;if (c = P(f, d, void 0), void 0 !== c) return c;
        } else this.each(function () {
          var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        M.remove(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          L.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      R = ["Top", "Right", "Bottom", "Left"],
      S = function S(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  },
      T = /^(?:checkbox|radio)$/i;!function () {
    var a = l.createDocumentFragment(),
        b = a.appendChild(l.createElement("div")),
        c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
      W = /^(?:mouse|pointer|contextmenu)|click/,
      X = /^(?:focusinfocus|focusoutblur)$/,
      Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
    return !0;
  }function $() {
    return !1;
  }function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }n.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return (typeof n === "undefined" ? "undefined" : _typeof(n)) !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(E) || [""], j = b.length;while (j--) {
          h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;while (j--) {
          if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    }, trigger: function trigger(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          m,
          o,
          p = [d || l],
          q = j.call(b, "type") ? b.type : b,
          r = j.call(b, "namespace") ? b.namespace.split(".") : [];if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
            p.push(g), h = g;
          }h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
        }f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) {
          b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        }return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (L.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) {
        if (i.disabled !== !0 || "click" !== a.type) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            d,
            e,
            f = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) {
        c = d[b], a[c] = f[c];
      }return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } }, simulate: function simulate(a, b, c, d) {
      var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0);
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
      } };
  }), n.fn.extend({ on: function on(a, b, c, d, e) {
      var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        "string" != typeof b && (c = c || b, b = void 0);for (g in a) {
          this.on(g, b, c, a[g], e);
        }return this;
      }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;return 1 === e && (f = d, d = function d(a) {
        return n().off(a), f.apply(this, arguments);
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
        n.event.add(this, a, d, c, b);
      });
    }, one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    }, trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ba = /<([\w:]+)/,
      ca = /<|&#?\w+;/,
      da = /<(?:script|style|link)/i,
      ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fa = /^$|\/(?:java|ecma)script/i,
      ga = /^true\/(.*)/,
      ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function ka(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function la(a) {
    var b = ga.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
  }function na(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
    }
  }function oa(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function pa(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }n.extend({ clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) {
        pa(f[d], g[d]);
      }if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) {
        na(f[d], g[d]);
      } else na(a, h);return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
    }, buildFragment: function buildFragment(a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
        if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
          f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) {
            f = f.lastChild;
          }n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
        } else l.push(b.createTextNode(e));
      }k.textContent = "", m = 0;while (e = l[m++]) {
        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
          j = 0;while (e = f[j++]) {
            fa.test(e.type || "") && c.push(e);
          }
        }
      }return k;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events) for (d in b.events) {
            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          }L.cache[e] && delete L.cache[e];
        }delete M.cache[c[M.expando]];
      }
    } }), n.fn.extend({ text: function text(a) {
      return J(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, remove: function remove(a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
      }return this;
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return J(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(aa, "<$1></$2>");try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = arguments[0];return this.domManip(arguments, function (b) {
        a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    }, detach: function detach(a) {
      return this.remove(a, !0);
    }, domManip: function domManip(a, b) {
      a = e.apply([], a);var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
        var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) {
          h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
        }if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) {
          h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
        }
      }return this;
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
        c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var qa,
      ra = {};function sa(b, c) {
    var d,
        e = n(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return e.detach(), f;
  }function ta(a) {
    var b = l,
        c = ra[a];return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
  }var ua = /^margin/,
      va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
      wa = function wa(b) {
    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
  };function xa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function ya(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }!function () {
    var b,
        c,
        d = l.documentElement,
        e = l.createElement("div"),
        f = l.createElement("div");if (f.style) {
      (function () {
        var g = function g() {
          f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
        };

        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
            return g(), b;
          }, boxSizingReliable: function boxSizingReliable() {
            return null == c && g(), c;
          }, reliableMarginRight: function reliableMarginRight() {
            var b,
                c = f.appendChild(l.createElement("div"));return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
          } });
      })();
    }
  }(), n.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };var za = /^(none|table(?!-c[ea]).+)/,
      Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
      Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
      Ca = { position: "absolute", visibility: "hidden", display: "block" },
      Da = { letterSpacing: "0", fontWeight: "400" },
      Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
    if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
        d = b,
        e = Ea.length;while (e--) {
      if (b = Ea[e] + c, b in a) return b;
    }return d;
  }function Ga(a, b, c) {
    var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }function Ha(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    }return g;
  }function Ia(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = wa(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = xa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
          return Ia(a, b, d);
        }) : Ia(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      } };
  }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
    return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
  }), n.fn.extend({ css: function css(a, b) {
      return J(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = wa(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Ja(this, !0);
    }, hide: function hide() {
      return Ja(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide();
      });
    } });function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e);
  }n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ka.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
    } }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function get(a) {
        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      } } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    } }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
      Ma,
      Na = /^(?:toggle|show|hide)$/,
      Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
      Pa = /queueHooks$/,
      Qa = [Va],
      Ra = { "*": [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = Oa.exec(b),
          f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
          g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
          h = 1,
          i = 20;if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;do {
          h = h || ".5", g /= h, n.style(c.elem, a, g + f);
        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }] };function Sa() {
    return setTimeout(function () {
      La = void 0;
    }), La = n.now();
  }function Ta(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = R[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function Ua(a, b, c) {
    for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function Va(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && S(a),
        q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], Na.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;L.remove(a, "fxshow");for (b in m) {
          n.style(a, b, m[b]);
        }
      });for (d in m) {
        g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function Wa(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function Xa(a, b, c) {
    var d,
        e,
        f = 0,
        g = Qa.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) {
      if (d = Qa[f].call(j, a, k, j.opts)) return d;
    }return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(Xa, { tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
      }
    }, prefilter: function prefilter(a, b) {
      b ? Qa.unshift(a) : Qa.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Pa.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }(b || !c) && n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = L.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (La = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || n.fx.stop(), La = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    clearInterval(Ma), Ma = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
  }();var Ya,
      Za,
      $a = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
    }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    }, attrHooks: { type: { set: function set(a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } } }), Za = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
      var e, f;return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
    };
  });var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
        } } } }), k.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = "string" == typeof a && a,
          i = 0,
          j = this.length;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, this.className));
      });if (h) for (b = (a || "").match(E) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
          f = 0;while (e = b[f++]) {
            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
          }g = n.trim(d), c.className !== g && (c.className = g);
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0 === arguments.length || "string" == typeof a && a,
          i = 0,
          j = this.length;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, this.className));
      });if (h) for (b = (a || "").match(E) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
          f = 0;while (e = b[f++]) {
            while (d.indexOf(" " + e + " ") >= 0) {
              d = d.replace(" " + e + " ", " ");
            }
          }g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = n(this),
              f = a.match(E) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
      });
    }, hasClass: function hasClass(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
      }return !1;
    } });var bb = /\r/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
      } }, k.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }, bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } });var cb = n.now(),
      db = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (a) {
    var b, c;if (!a || "string" != typeof a) return null;try {
      c = new DOMParser(), b = c.parseFromString(a, "text/xml");
    } catch (d) {
      b = void 0;
    }return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
  };var eb = /#.*$/,
      fb = /([?&])_=[^&]*/,
      gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ib = /^(?:GET|HEAD)$/,
      jb = /^\/\//,
      kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      lb = {},
      mb = {},
      nb = "*/".concat("*"),
      ob = a.location.href,
      pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function rb(a, b, c, d) {
    var e = {},
        f = a === mb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function sb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && n.extend(!0, a, d), a;
  }function tb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function ub(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
    }, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function ajax(a, b) {
      "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.ajaxSetup({}, b),
          l = k.context || k,
          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
          o = n.Deferred(),
          p = n.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === t) {
            if (!f) {
              f = {};while (b = gb.exec(e)) {
                f[b[1].toLowerCase()] = b[2];
              }
            }b = f[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === t ? e : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > t) for (b in a) {
            q[b] = [q[b], a[b]];
          } else v.always(a[v.status]);return this;
        }, abort: function abort(a) {
          var b = a || u;return c && c.abort(b), x(0, b), this;
        } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) {
        v.setRequestHeader(j, k.headers[j]);
      }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) {
        v[j](k[j]);
      }if (c = rb(mb, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));try {
          t = 1, c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;x(-1, w);
        }
      } else x(-1, "No Transport");function x(a, b, f, h) {
        var j,
            r,
            s,
            u,
            w,
            x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
      }return v;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d });
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this);
    }, wrapInner: function wrapInner(a) {
      return this.each(n.isFunction(a) ? function (b) {
        n(this).wrapInner(a.call(this, b));
      } : function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };var vb = /%20/g,
      wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }return d.join("&").replace(vb, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (a) {}
  };var Bb = 0,
      Cb = {},
      Db = { 0: 200, 1223: 204 },
      Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in Cb) {
      Cb[a]();
    }
  }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
    var _b2;return k.cors || Eb && !a.crossDomain ? { send: function send(c, d) {
        var e,
            f = a.xhr(),
            g = ++Bb;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
          f[e] = a.xhrFields[e];
        }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
          f.setRequestHeader(e, c[e]);
        }_b2 = function b(a) {
          return function () {
            _b2 && (delete Cb[g], _b2 = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
          };
        }, f.onload = _b2(), f.onerror = _b2("error"), _b2 = Cb[g] = _b2("abort");try {
          f.send(a.hasContent && a.data || null);
        } catch (h) {
          if (_b2) throw h;
        }
      }, abort: function abort() {
        _b2 && _b2();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c;return { send: function send(d, e) {
          b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", _c = function c(a) {
            b.remove(), _c = null, a && e("error" === a.type ? 404 : 200, a.type);
          }), l.head.appendChild(b[0]);
        }, abort: function abort() {
          _c && _c();
        } };
    }
  });var Fb = [],
      Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Fb.pop() || n.expando + "_" + cb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
        e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
  };var Hb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a]);
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };var Ib = a.document.documentElement;function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }return a || Ib;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
    var d = "pageYOffset" === c;n.fn[b] = function (e) {
      return J(this, function (b, e, f) {
        var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
      }, b, e, arguments.length, null);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
      return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var Kb = a.jQuery,
      Lb = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
  }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === U && (a.jQuery = a.$ = n), n;
});


},{}],4:[function(require,module,exports){
'use strict';

var _game = require('../../app/scripts/game.js');

var _game2 = _interopRequireDefault(_game);

var _ui = require('../../app/scripts/ui.js');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Gameplay', function () {
  var game = void 0;
  beforeEach(function () {
    game = new _game2.default();
  });

  describe('Game', function () {
    it('should create a new instance of the game', function () {
      expect(game).toBeDefined();
    });

    it('should have a default of six rows and seven columns', function () {
      expect(game.rows).toEqual(6);
      expect(game.columns).toEqual(7);
    });
  });

  describe('Drop Disc', function () {
    it('should place a disc at next available row of selected column', function () {
      game.dropDisc(1, 0);
      var expectedBoardStateAfterFirstMove = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0]];
      expect(game.board).toEqual(expectedBoardStateAfterFirstMove);

      game.dropDisc(2, 0);
      var expectedBoardStateAfterSecondMove = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0]];
      expect(game.board).toEqual(expectedBoardStateAfterSecondMove);
    });
  });

  describe('Get Winner', function () {
    it('should get a winner when there are four consecutive discs in a horizontal line by a single player', function () {
      game.board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0]];
      expect(game.getWinner()).toEqual(1);
    });

    it('should get a winner when there are four consecutive discs in a vertical line by a single player', function () {
      game.board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 2, 1, 0, 0, 0, 0], [2, 2, 1, 0, 0, 0, 0]];
      expect(game.getWinner()).toEqual(1);
    });

    it('should get a winner when there are four consecutive discs in a diagonal line by a single player', function () {
      game.board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 2, 0, 0, 0], [2, 1, 1, 1, 0, 0, 0], [1, 2, 2, 2, 0, 0, 0]];
      expect(game.getWinner()).toEqual(1);

      game.board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0], [0, 1, 2, 2, 0, 0, 0], [0, 2, 1, 2, 1, 0, 0], [0, 1, 1, 1, 2, 0, 0]];
      expect(game.getWinner()).toEqual(2);
    });

    it('should declare the match a draw if no one wins within the maximum number of moves allowed', function () {
      game.board = [[2, 2, 2, 1, 2, 2, 2], [1, 1, 1, 2, 1, 1, 1], [2, 2, 2, 1, 2, 2, 2], [1, 1, 1, 2, 1, 1, 1], [2, 2, 2, 1, 2, 2, 2], [1, 1, 1, 2, 1, 1, 1]];
      game.moveCount = game.rows * game.columns;
      expect(game.getWinner()).toEqual(-1);
    });
  });
});

},{"../../app/scripts/game.js":1,"../../app/scripts/ui.js":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXGdhbWUuanMiLCJhcHBcXHNjcmlwdHNcXHVpLmpzIiwiYm93ZXJfY29tcG9uZW50c1xcanF1ZXJ5XFxkaXN0XFxqcXVlcnkubWluLmpzIiwidGVzdFxcc3BlY1xcdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FDQ0Usb0JBQThDO0FBQUEsUUFBbEMsSUFBa0MseURBQTNCLENBQTJCO0FBQUEsUUFBeEIsT0FBd0IseURBQWQsQ0FBYztBQUFBLFFBQVgsS0FBVyx5REFBSCxDQUFHOztBQUFBOztBQUM1QyxTQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLENBQWpCOztBQUVBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLElBQXpCLEVBQStCLEdBQS9CLEVBQW9DO0FBQ2xDLFdBQUssS0FBTCxDQUFXLENBQVgsSUFBZ0IsRUFBaEI7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxPQUF6QixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyxhQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7Ozs2QkFFUSxNLEVBQVEsVyxFQUFhO0FBQzVCLFdBQUssSUFBSSxJQUFJLEtBQUssSUFBTCxHQUFZLENBQXpCLEVBQTRCLEtBQUssQ0FBakMsRUFBb0MsR0FBcEMsRUFBeUM7QUFDdkMsWUFBSSxLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsV0FBZCxNQUErQixDQUFuQyxFQUFzQztBQUNwQyxlQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsV0FB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aUMsQ0FBQyxDQUFsQztBQUNELEtBWEQ7QUFZRCxHQTNERDtBQTRERCxDQXZHRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJvd3MgPSA2LCBjb2x1bW5zID0gNywgdG9XaW4gPSA0KSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLnRvV2luID0gdG9XaW47XG4gICAgdGhpcy5tb3ZlQ291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldLnB1c2goMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJvcERpc2MocGxheWVyLCBjb2x1bW5JbmRleCkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnJvd3MgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bY29sdW1uSW5kZXhdID09PSAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bY29sdW1uSW5kZXhdID0gcGxheWVyO1xuICAgICAgICB0aGlzLm1vdmVDb3VudCsrO1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgZ2V0V2lubmVyKCkge1xuICAgIC8vdmVydGljYWxcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBNYXRoLmNlaWwodGhpcy5yb3dzIC8gMik7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLmNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgIGxldCBwb3MxID0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl07XG4gICAgICAgIGxldCBwb3MyID0gdGhpcy5ib2FyZFtyb3cgKyAxXVtjb2x1bW5dO1xuICAgICAgICBsZXQgcG9zMyA9IHRoaXMuYm9hcmRbcm93ICsgMl1bY29sdW1uXTtcbiAgICAgICAgbGV0IHBvczQgPSB0aGlzLmJvYXJkW3JvdyArIDNdW2NvbHVtbl07XG4gICAgICAgIGlmIChoYXNGb3VyQ29uc2VjdXRpdmUocG9zMSwgcG9zMiwgcG9zMywgcG9zNCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2hvcml6b250YWxcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnJvd3M7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBNYXRoLmNlaWwodGhpcy5jb2x1bW5zIC8gMik7IGNvbHVtbisrKSB7XG4gICAgICAgIGxldCBwb3MxID0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl07XG4gICAgICAgIGxldCBwb3MyID0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbiArIDFdO1xuICAgICAgICBsZXQgcG9zMyA9IHRoaXMuYm9hcmRbcm93XVtjb2x1bW4gKyAyXTtcbiAgICAgICAgbGV0IHBvczQgPSB0aGlzLmJvYXJkW3Jvd11bY29sdW1uICsgM107XG4gICAgICAgIGlmIChoYXNGb3VyQ29uc2VjdXRpdmUocG9zMSwgcG9zMiwgcG9zMywgcG9zNCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2RpYWdvbmFsXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgTWF0aC5jZWlsKHRoaXMucm93cyAvIDIpOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgTWF0aC5jZWlsKHRoaXMuY29sdW1ucyAvIDIpOyBjb2x1bW4rKykge1xuICAgICAgICBsZXQgcG9zMSA9IHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dO1xuICAgICAgICBsZXQgcG9zMiA9IHRoaXMuYm9hcmRbcm93ICsgMV1bY29sdW1uICsgMV07XG4gICAgICAgIGxldCBwb3MzID0gdGhpcy5ib2FyZFtyb3cgKyAyXVtjb2x1bW4gKyAyXTtcbiAgICAgICAgbGV0IHBvczQgPSB0aGlzLmJvYXJkW3JvdyArIDNdW2NvbHVtbiArIDNdO1xuICAgICAgICBpZiAoaGFzRm91ckNvbnNlY3V0aXZlKHBvczEsIHBvczIsIHBvczMsIHBvczQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgcm93ID0gTWF0aC5jZWlsKHRoaXMucm93cyAvIDIpOyByb3cgPCB0aGlzLnJvd3M7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBNYXRoLmNlaWwodGhpcy5jb2x1bW5zIC8gMik7IGNvbHVtbisrKSB7XG4gICAgICAgIGxldCBwb3MxID0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl07XG4gICAgICAgIGxldCBwb3MyID0gdGhpcy5ib2FyZFtyb3cgLSAxXVtjb2x1bW4gKyAxXTtcbiAgICAgICAgbGV0IHBvczMgPSB0aGlzLmJvYXJkW3JvdyAtIDJdW2NvbHVtbiArIDJdO1xuICAgICAgICBsZXQgcG9zNCA9IHRoaXMuYm9hcmRbcm93IC0gM11bY29sdW1uICsgM107XG4gICAgICAgIGlmIChoYXNGb3VyQ29uc2VjdXRpdmUocG9zMSwgcG9zMiwgcG9zMywgcG9zNCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2RyYXdcbiAgICBsZXQgbWF4TW92ZXMgPSB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnM7XG4gICAgaWYgKHRoaXMubW92ZUNvdW50ID09PSBtYXhNb3Zlcykge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vbm8gd2lubmVyIHlldFxuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc0ZvdXJDb25zZWN1dGl2ZShwb3MxLCBwb3MyLCBwb3MzLCBwb3M0KSB7XG4gIHJldHVybiBwb3MxICE9PSAwICYmIHBvczEgPT09IHBvczIgJiYgcG9zMSA9PT0gcG9zMyAmJiBwb3MxID09PSBwb3M0O1xufVxuIiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSAxO1xuICB9XG5cbiAgbmV3R2FtZSgpIHtcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgbGV0IGNvbHVtbnMgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUuY29sdW1uczsgaSsrKSB7XG4gICAgICBjb2x1bW5zICs9ICc8dGQ+PC90ZD4nO1xuICAgIH1cblxuICAgIGxldCByb3dzID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLnJvd3M7IGkrKykge1xuICAgICAgcm93cyArPSBgPHRyPiR7Y29sdW1uc308L3RyPmA7XG4gICAgfVxuXG4gICAgbGV0IGJvYXJkID0gJCgnLmJvYXJkJyk7XG4gICAgYm9hcmQuY2hpbGRyZW4oJ3Rib2R5JykuaHRtbChyb3dzKTtcbiAgICBib2FyZC5vbignY2xpY2snLCAndGQnLCAoZSkgPT4ge1xuICAgICAgbGV0IGNlbGwgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICBsZXQgY29sdW1uSW5kZXggPSBjZWxsLmluZGV4KCk7XG4gICAgICBsZXQgcm93SW5kZXggPSBnYW1lLmRyb3BEaXNjKHRoaXMucGxheWVyLCBjb2x1bW5JbmRleCk7XG5cbiAgICAgIGlmIChyb3dJbmRleCA+PSAwKSB7XG4gICAgICAgIC8vZHJhdyB0aGUgZGlzY1xuICAgICAgICBsZXQgZGlzYyA9IGA8c3BhbiBjbGFzcz1cImRpc2MgZGlzYy1wbGF5ZXItJHt0aGlzLnBsYXllcn1cIj48L3NwYW4+YDtcbiAgICAgICAgYm9hcmQuZmluZCgndHInKS5lcShyb3dJbmRleCkuY2hpbGRyZW4oJ3RkJykuZXEoY29sdW1uSW5kZXgpLmFwcGVuZChkaXNjKTtcblxuICAgICAgICB2YXIgd2lubmVyID0gZ2FtZS5nZXRXaW5uZXIoKTtcbiAgICAgICAgaWYgKHdpbm5lciA9PT0gMCkge1xuICAgICAgICAgIC8vc3dpdGNoIHBsYXllclxuICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIgPT09IDEgPyAyIDogMTtcblxuICAgICAgICAgIGxldCBtZXNzYWdlID0gJCgnLm1lc3NhZ2UnKTtcbiAgICAgICAgICBtZXNzYWdlLmh0bWwoYDxzcGFuIGNsYXNzPVwiZGlzYyBkaXNjLXBsYXllci0ke3RoaXMucGxheWVyfVwiPjwvc3Bhbj5QbGF5ZXIgJHt0aGlzLnBsYXllcn0ncyB0dXJuLmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvYXJkLm9mZignY2xpY2snLCAndGQnKTtcbiAgICAgICAgICBsZXQgcmVzdWx0Q29udGFpbmVyID0gJCgnLnJlc3VsdC1jb250YWluZXInKTtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gd2lubmVyID4gMCA/IGA8c3BhbiBjbGFzcz1cImRpc2MgZGlzYy1wbGF5ZXItJHt3aW5uZXJ9XCI+PC9zcGFuPiBQbGF5ZXIgJHt3aW5uZXJ9IHdpbnMhYCA6ICdEcmF3ISc7XG4gICAgICAgICAgbWVzc2FnZS5odG1sKHJlc3VsdCk7XG5cbiAgICAgICAgICBsZXQgYnRuTmV3R2FtZSA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1uZXctZ2FtZVwiPlBsYXkgQWdhaW48L2J1dHRvbj4nKTtcbiAgICAgICAgICBidG5OZXdHYW1lLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGJ0bk5ld0dhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLm5ld0dhbWUoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJlc3VsdENvbnRhaW5lci5hcHBlbmQoYnRuTmV3R2FtZSk7XG4gICAgICAgICAgYm9hcmQuYWZ0ZXIocmVzdWx0Q29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSAkKCcubWVzc2FnZScpO1xuICAgIG1lc3NhZ2UuaHRtbChgPHNwYW4gY2xhc3M9XCJkaXNjIGRpc2MtcGxheWVyLSR7dGhpcy5wbGF5ZXJ9XCI+PC9zcGFuPlBsYXllciAke3RoaXMucGxheWVyfSdzIHR1cm4uYCk7XG4gIH1cbn1cbiIsIi8qISBqUXVlcnkgdjIuMS40IHwgKGMpIDIwMDUsIDIwMTUgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ9Yy5zbGljZSxlPWMuY29uY2F0LGY9Yy5wdXNoLGc9Yy5pbmRleE9mLGg9e30saT1oLnRvU3RyaW5nLGo9aC5oYXNPd25Qcm9wZXJ0eSxrPXt9LGw9YS5kb2N1bWVudCxtPVwiMi4xLjRcIixuPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBuLmZuLmluaXQoYSxiKX0sbz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2cscD0vXi1tcy0vLHE9Ly0oW1xcZGEtel0pL2dpLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtuLmZuPW4ucHJvdG90eXBlPXtqcXVlcnk6bSxjb25zdHJ1Y3RvcjpuLHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBkLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8wPmE/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdOmQuY2FsbCh0aGlzKX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPW4ubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxiLmNvbnRleHQ9dGhpcy5jb250ZXh0LGJ9LGVhY2g6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSxiKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKG51bGwpfSxwdXNoOmYsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihuLmlzUGxhaW5PYmplY3QoZCl8fChlPW4uaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmbi5pc0FycmF5KGMpP2M6W10pOmY9YyYmbi5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1uLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7cmV0dXJuIW4uaXNBcnJheShhKSYmYS1wYXJzZUZsb2F0KGEpKzE+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKT8hMTphLmNvbnN0cnVjdG9yJiYhai5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKT8hMTohMH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9oW2kuY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1sLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsbC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPTAsZj1hLmxlbmd0aCxnPXMoYSk7aWYoYyl7aWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgaWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zi5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmcuY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxmPTAsZz1hLmxlbmd0aCxoPXMoYSksaT1bXTtpZihoKWZvcig7Zz5mO2YrKylkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtlbHNlIGZvcihmIGluIGEpZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7cmV0dXJuIGUuYXBwbHkoW10saSl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGU9ZC5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxlLmNvbmNhdChkLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDprfSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2hbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHMoYSl7dmFyIGI9XCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6MT09PWEubm9kZVR5cGUmJmI/ITA6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9aGEoKSx6PWhhKCksQT1oYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPTE8PDMxLEQ9e30uaGFzT3duUHJvcGVydHksRT1bXSxGPUUucG9wLEc9RS5wdXNoLEg9RS5wdXNoLEk9RS5zbGljZSxKPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxLPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixMPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixNPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTj1NLnJlcGxhY2UoXCJ3XCIsXCJ3I1wiKSxPPVwiXFxcXFtcIitMK1wiKihcIitNK1wiKSg/OlwiK0wrXCIqKFsqXiR8IX5dPz0pXCIrTCtcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK04rXCIpKXwpXCIrTCtcIipcXFxcXVwiLFA9XCI6KFwiK00rXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK08rXCIpKil8LiopXFxcXCl8KVwiLFE9bmV3IFJlZ0V4cChMK1wiK1wiLFwiZ1wiKSxSPW5ldyBSZWdFeHAoXCJeXCIrTCtcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTCtcIiskXCIsXCJnXCIpLFM9bmV3IFJlZ0V4cChcIl5cIitMK1wiKixcIitMK1wiKlwiKSxUPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiooWz4rfl18XCIrTCtcIilcIitMK1wiKlwiKSxVPW5ldyBSZWdFeHAoXCI9XCIrTCtcIiooW15cXFxcXSdcXFwiXSo/KVwiK0wrXCIqXFxcXF1cIixcImdcIiksVj1uZXcgUmVnRXhwKFApLFc9bmV3IFJlZ0V4cChcIl5cIitOK1wiJFwiKSxYPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrTStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitNK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrTS5yZXBsYWNlKFwid1wiLFwidypcIikrXCIpXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitPKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitQKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitMK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTCtcIiooPzooWystXXwpXCIrTCtcIiooXFxcXGQrKXwpKVwiK0wrXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrSytcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK0wrXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK0wrXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK0wrXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFk9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxaPS9eaFxcZCQvaSwkPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sXz0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxhYT0vWyt+XS8sYmE9Lyd8XFxcXC9nLGNhPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitMK1wiP3woXCIrTCtcIil8LilcIixcImlnXCIpLGRhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjowPmQ/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGVhPWZ1bmN0aW9uKCl7bSgpfTt0cnl7SC5hcHBseShFPUkuY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRVt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChmYSl7SD17YXBwbHk6RS5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtHLmFwcGx5KGEsSS5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZ2EoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscyx3LHg7aWYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4sZD1kfHxbXSxrPWIubm9kZVR5cGUsXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09ayYmOSE9PWsmJjExIT09aylyZXR1cm4gZDtpZighZSYmcCl7aWYoMTEhPT1rJiYoZj1fLmV4ZWMoYSkpKWlmKGo9ZlsxXSl7aWYoOT09PWspe2lmKGg9Yi5nZXRFbGVtZW50QnlJZChqKSwhaHx8IWgucGFyZW50Tm9kZSlyZXR1cm4gZDtpZihoLmlkPT09ailyZXR1cm4gZC5wdXNoKGgpLGR9ZWxzZSBpZihiLm93bmVyRG9jdW1lbnQmJihoPWIub3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZChqKSkmJnQoYixoKSYmaC5pZD09PWopcmV0dXJuIGQucHVzaChoKSxkfWVsc2V7aWYoZlsyXSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGo9ZlszXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShqKSksZH1pZihjLnFzYSYmKCFxfHwhcS50ZXN0KGEpKSl7aWYocz1yPXUsdz1iLHg9MSE9PWsmJmEsMT09PWsmJlwib2JqZWN0XCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe289ZyhhKSwocj1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXIucmVwbGFjZShiYSxcIlxcXFwkJlwiKTpiLnNldEF0dHJpYnV0ZShcImlkXCIscykscz1cIltpZD0nXCIrcytcIiddIFwiLGw9by5sZW5ndGg7d2hpbGUobC0tKW9bbF09cytyYShvW2xdKTt3PWFhLnRlc3QoYSkmJnBhKGIucGFyZW50Tm9kZSl8fGIseD1vLmpvaW4oXCIsXCIpfWlmKHgpdHJ5e3JldHVybiBILmFwcGx5KGQsdy5xdWVyeVNlbGVjdG9yQWxsKHgpKSxkfWNhdGNoKHkpe31maW5hbGx5e3J8fGIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUixcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBoYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGlhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gamEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1hLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24gbGEoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiYofmIuc291cmNlSW5kZXh8fEMpLSh+YS5zb3VyY2VJbmRleHx8Qyk7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gaWEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaWEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBwYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1nYS5zdXBwb3J0PXt9LGY9Z2EuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0sbT1nYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89Zy5kb2N1bWVudEVsZW1lbnQsZT1nLmRlZmF1bHRWaWV3LGUmJmUhPT1lLnRvcCYmKGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixlYSwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZWEpKSxwPSFmKGcpLGMuYXR0cmlidXRlcz1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChnLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9JC50ZXN0KGcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWphKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIWcuZ2V0RWxlbWVudHNCeU5hbWV8fCFnLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGMmJmMucGFyZW50Tm9kZT9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2EsZGEpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGNhLGRhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe3JldHVybiBwP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHI9W10scT1bXSwoYy5xc2E9JC50ZXN0KGcucXVlcnlTZWxlY3RvckFsbCkpJiYoamEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxmXScgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0wrXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0wrXCIqKD86dmFsdWV8XCIrSytcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxqYShmdW5jdGlvbihhKXt2YXIgYj1nLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrTCtcIipbKl4kfCF+XT89XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPSQudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmamEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcImRpdlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLFApfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9JC50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8JC50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09Z3x8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1nfHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0ooayxhKS1KKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsaD1bYV0saT1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09Zz8tMTpiPT09Zz8xOmU/LTE6Zj8xOms/SihrLGEpLUooayxiKTowO2lmKGU9PT1mKXJldHVybiBsYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSloLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWkudW5zaGlmdChjKTt3aGlsZShoW2RdPT09aVtkXSlkKys7cmV0dXJuIGQ/bGEoaFtkXSxpW2RdKTpoW2RdPT09dj8tMTppW2RdPT09dj8xOjB9LGcpOm59LGdhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZ2EoYSxudWxsLG51bGwsYil9LGdhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShVLFwiPSckMSddXCIpLCEoIWMubWF0Y2hlc1NlbGVjdG9yfHwhcHx8ciYmci50ZXN0KGIpfHxxJiZxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBnYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxnYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGdhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZELmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxnYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZ2EudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWdhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9Z2Euc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aWEsbWF0Y2g6WCxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShjYSxkYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShjYSxkYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8Z2EuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZ2EuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFguQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZWLnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2EsZGEpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0wrXCIpXCIrYStcIihcIitMK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9Z2EuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShRLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iP2U9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoO2lmKHEpe2lmKGYpe3doaWxlKHApe2w9Yjt3aGlsZShsPWxbcF0paWYoaD9sLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1sLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe2s9cVt1XXx8KHFbdV09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSxtPWpbMF09PT13JiZqWzJdLGw9biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKGw9KytuJiZsJiZsW3BdfHwobT1uPTApfHxvLnBvcCgpKWlmKDE9PT1sLm5vZGVUeXBlJiYrK20mJmw9PT1iKXtrW2FdPVt3LG4sbV07YnJlYWt9fWVsc2UgaWYocyYmKGo9KGJbdV18fChiW3VdPXt9KSlbYV0pJiZqWzBdPT09dyltPWpbMV07ZWxzZSB3aGlsZShsPSsrbiYmbCYmbFtwXXx8KG09bj0wKXx8by5wb3AoKSlpZigoaD9sLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1sLm5vZGVUeXBlKSYmKyttJiYocyYmKChsW3VdfHwobFt1XT17fSkpW2FdPVt3LG1dKSxsPT09YikpYnJlYWs7cmV0dXJuIG0tPWUsbT09PWR8fG0lZD09PTAmJm0vZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2lhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1KKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmlhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShSLFwiJDFcIikpO3JldHVybiBkW3VdP2lhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBnYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShjYSxkYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIFcudGVzdChhfHxcIlwiKXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShjYSxkYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBaLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBZLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6b2EoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0Om9hKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpvYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuWzA+Yz9jK2I6Y119KSxldmVuOm9hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOm9hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6b2EoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpvYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bWEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bmEoYik7ZnVuY3Rpb24gcWEoKXt9cWEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyBxYSxnPWdhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7KCFjfHwoZT1TLmV4ZWMoaCkpKSYmKGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9VC5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShSLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1YW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/Z2EuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiByYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtjPmI7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gc2EoYSxiLGMpe3ZhciBkPWIuZGlyLGU9YyYmXCJwYXJlbnROb2RlXCI9PT1kLGY9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxmKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpcmV0dXJuIGEoYixjLGYpfTpmdW5jdGlvbihiLGMsZyl7dmFyIGgsaSxqPVt3LGZdO2lmKGcpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGUpJiZhKGIsYyxnKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSl7aWYoaT1iW3VdfHwoYlt1XT17fSksKGg9aVtkXSkmJmhbMF09PT13JiZoWzFdPT09ZilyZXR1cm4galsyXT1oWzJdO2lmKGlbZF09aixqWzJdPWEoYixjLGcpKXJldHVybiEwfX19ZnVuY3Rpb24gdGEoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdWEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZT5kO2QrKylnYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gdmEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aT5oO2grKykoZj1hW2hdKSYmKCFjfHxjKGYsZCxlKSkmJihnLnB1c2goZiksaiYmYi5wdXNoKGgpKTtyZXR1cm4gZ31mdW5jdGlvbiB3YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD13YShkKSksZSYmIWVbdV0mJihlPXdhKGUsZikpLGlhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHVhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6dmEocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXZhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9KKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj12YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6SC5hcHBseShnLHIpfSl9ZnVuY3Rpb24geGEoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXNhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD1zYShmdW5jdGlvbihhKXtyZXR1cm4gSihiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07Zj5pO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVtzYSh0YShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtmPmU7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4gd2EoaT4xJiZ0YShtKSxpPjEmJnJhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUixcIiQxXCIpLGMsZT5pJiZ4YShhLnNsaWNlKGksZSkpLGY+ZSYmeGEoYT1hLnNsaWNlKGUpKSxmPmUmJnJhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHRhKG0pfWZ1bmN0aW9uIHlhKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG0sbyxwPTAscT1cIjBcIixyPWYmJltdLHM9W10sdD1qLHU9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx2PXcrPW51bGw9PXQ/MTpNYXRoLnJhbmRvbSgpfHwuMSx4PXUubGVuZ3RoO2ZvcihrJiYoaj1nIT09biYmZyk7cSE9PXgmJm51bGwhPShsPXVbcV0pO3ErKyl7aWYoZSYmbCl7bT0wO3doaWxlKG89YVttKytdKWlmKG8obCxnLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9dil9YyYmKChsPSFvJiZsKSYmcC0tLGYmJnIucHVzaChsKSl9aWYocCs9cSxjJiZxIT09cCl7bT0wO3doaWxlKG89YlttKytdKW8ocixzLGcsaCk7aWYoZil7aWYocD4wKXdoaWxlKHEtLSlyW3FdfHxzW3FdfHwoc1txXT1GLmNhbGwoaSkpO3M9dmEocyl9SC5hcHBseShpLHMpLGsmJiFmJiZzLmxlbmd0aD4wJiZwK2IubGVuZ3RoPjEmJmdhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXYsaj10KSxyfTtyZXR1cm4gYz9pYShmKTpmfXJldHVybiBoPWdhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXhhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx5YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9Z2Euc2VsZWN0PWZ1bmN0aW9uKGEsYixlLGYpe3ZhciBpLGosayxsLG0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG89IWYmJmcoYT1uLnNlbGVjdG9yfHxhKTtpZihlPWV8fFtdLDE9PT1vLmxlbmd0aCl7aWYoaj1vWzBdPW9bMF0uc2xpY2UoMCksai5sZW5ndGg+MiYmXCJJRFwiPT09KGs9alswXSkudHlwZSYmYy5nZXRCeUlkJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtqWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoay5tYXRjaGVzWzBdLnJlcGxhY2UoY2EsZGEpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGU7biYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2Uoai5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1YLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6ai5sZW5ndGg7d2hpbGUoaS0tKXtpZihrPWpbaV0sZC5yZWxhdGl2ZVtsPWsudHlwZV0pYnJlYWs7aWYoKG09ZC5maW5kW2xdKSYmKGY9bShrLm1hdGNoZXNbMF0ucmVwbGFjZShjYSxkYSksYWEudGVzdChqWzBdLnR5cGUpJiZwYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGouc3BsaWNlKGksMSksYT1mLmxlbmd0aCYmcmEoaiksIWEpcmV0dXJuIEguYXBwbHkoZSxmKSxlO2JyZWFrfX19cmV0dXJuKG58fGgoYSxvKSkoZixiLCFwLGUsYWEudGVzdChhKSYmcGEoYi5wYXJlbnROb2RlKXx8YiksZX0sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImRpdlwiKSl9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxrYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGthKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGN8fFwiaW5wdXRcIiE9PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT92b2lkIDA6YS5kZWZhdWx0VmFsdWV9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxrYShLLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6YVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxnYX0oYSk7bi5maW5kPXQsbi5leHByPXQuc2VsZWN0b3JzLG4uZXhwcltcIjpcIl09bi5leHByLnBzZXVkb3Msbi51bmlxdWU9dC51bmlxdWVTb3J0LG4udGV4dD10LmdldFRleHQsbi5pc1hNTERvYz10LmlzWE1MLG4uY29udGFpbnM9dC5jb250YWluczt2YXIgdT1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHY9L148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHc9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHgoYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih3LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBnLmNhbGwoYixhKT49MCE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYobi5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKyluLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9uLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh4KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh4KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF4KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJnUudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIHksej0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxBPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIpe3ZhciBjLGQ7aWYoIWEpcmV0dXJuIHRoaXM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGM9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06ei5leGVjKGEpLCFjfHwhY1sxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fHkpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGNbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChjWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmwsITApKSx2LnRlc3QoY1sxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoYyBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2NdKT90aGlzW2NdKGJbY10pOnRoaXMuYXR0cihjLGJbY10pO3JldHVybiB0aGlzfXJldHVybiBkPWwuZ2V0RWxlbWVudEJ5SWQoY1syXSksZCYmZC5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWQpLHRoaXMuY29udGV4dD1sLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP1widW5kZWZpbmVkXCIhPXR5cGVvZiB5LnJlYWR5P3kucmVhZHkoYSk6YShuKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxuLm1ha2VBcnJheShhLHRoaXMpKX07QS5wcm90b3R5cGU9bi5mbix5PW4obCk7dmFyIEI9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sQz17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtuLmV4dGVuZCh7ZGlyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sc2libGluZzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY319KSxuLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPW4oYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2M+YTthKyspaWYobi5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPXUudGVzdChhKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGE/bihhLGJ8fHRoaXMuY29udGV4dCk6MDtlPmQ7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmbi5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP24udW5pcXVlKGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9nLmNhbGwobihhKSx0aGlzWzBdKTpnLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlKG4ubWVyZ2UodGhpcy5nZXQoKSxuKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEQoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW4uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBEKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uc2libGluZygoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIG4uc2libGluZyhhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihDW2FdfHxuLnVuaXF1ZShlKSxCLnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgRT0vXFxTKy9nLEY9e307ZnVuY3Rpb24gRyhhKXt2YXIgYj1GW2FdPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChFKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0ZbYV18fEcoYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZixnLGg9W10saT0hYS5vbmNlJiZbXSxqPWZ1bmN0aW9uKGwpe2ZvcihiPWEubWVtb3J5JiZsLGM9ITAsZz1lfHwwLGU9MCxmPWgubGVuZ3RoLGQ9ITA7aCYmZj5nO2crKylpZihoW2ddLmFwcGx5KGxbMF0sbFsxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSl7Yj0hMTticmVha31kPSExLGgmJihpP2kubGVuZ3RoJiZqKGkuc2hpZnQoKSk6Yj9oPVtdOmsuZGlzYWJsZSgpKX0saz17YWRkOmZ1bmN0aW9uKCl7aWYoaCl7dmFyIGM9aC5sZW5ndGg7IWZ1bmN0aW9uIGcoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1uLnR5cGUoYyk7XCJmdW5jdGlvblwiPT09ZD9hLnVuaXF1ZSYmay5oYXMoYyl8fGgucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PWQmJmcoYyl9KX0oYXJndW1lbnRzKSxkP2Y9aC5sZW5ndGg6YiYmKGU9YyxqKGIpKX1yZXR1cm4gdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIGgmJm4uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1uLmluQXJyYXkoYixoLGMpKT4tMSloLnNwbGljZShjLDEpLGQmJihmPj1jJiZmLS0sZz49YyYmZy0tKX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9uLmluQXJyYXkoYSxoKT4tMTohKCFofHwhaC5sZW5ndGgpfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBoPVtdLGY9MCx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGg9aT1iPXZvaWQgMCx0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFofSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGk9dm9pZCAwLGJ8fGsuZGlzYWJsZSgpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiFpfSxmaXJlV2l0aDpmdW5jdGlvbihhLGIpe3JldHVybiFofHxjJiYhaXx8KGI9Ynx8W10sYj1bYSxiLnNsaWNlP2Iuc2xpY2UoKTpiXSxkP2kucHVzaChiKTpqKGIpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGsuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFjfX07cmV0dXJuIGt9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KS5wcm9ncmVzcyhjLm5vdGlmeSk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWQuY2FsbChhcmd1bWVudHMpLGU9Yy5sZW5ndGgsZj0xIT09ZXx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZTowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGUpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9kLmNhbGwoYXJndW1lbnRzKTplLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZT4xKWZvcihpPW5ldyBBcnJheShlKSxqPW5ldyBBcnJheShlKSxrPW5ldyBBcnJheShlKTtlPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpLnByb2dyZXNzKGgoYixqLGkpKTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSDtuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSC5yZXNvbHZlV2l0aChsLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4obCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGwpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEkoKXtsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSSwhMSksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEksITEpLG4ucmVhZHkoKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEh8fChIPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1sLnJlYWR5U3RhdGU/c2V0VGltZW91dChuLnJlYWR5KToobC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEksITEpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixJLCExKSkpLEgucHJvbWlzZShiKX0sbi5yZWFkeS5wcm9taXNlKCk7dmFyIEo9bi5hY2Nlc3M9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09bi50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpbi5hY2Nlc3MoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbi5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG4oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn07bi5hY2NlcHREYXRhPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gSygpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNhY2hlPXt9LDAse2dldDpmdW5jdGlvbigpe3JldHVybnt9fX0pLHRoaXMuZXhwYW5kbz1uLmV4cGFuZG8rSy51aWQrK31LLnVpZD0xLEsuYWNjZXB0cz1uLmFjY2VwdERhdGEsSy5wcm90b3R5cGU9e2tleTpmdW5jdGlvbihhKXtpZighSy5hY2NlcHRzKGEpKXJldHVybiAwO3ZhciBiPXt9LGM9YVt0aGlzLmV4cGFuZG9dO2lmKCFjKXtjPUsudWlkKys7dHJ5e2JbdGhpcy5leHBhbmRvXT17dmFsdWU6Y30sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYSxiKX1jYXRjaChkKXtiW3RoaXMuZXhwYW5kb109YyxuLmV4dGVuZChhLGIpfX1yZXR1cm4gdGhpcy5jYWNoZVtjXXx8KHRoaXMuY2FjaGVbY109e30pLGN9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmtleShhKSxmPXRoaXMuY2FjaGVbZV07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZltiXT1jO2Vsc2UgaWYobi5pc0VtcHR5T2JqZWN0KGYpKW4uZXh0ZW5kKHRoaXMuY2FjaGVbZV0sYik7ZWxzZSBmb3IoZCBpbiBiKWZbZF09YltkXTtyZXR1cm4gZn0sZ2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jYWNoZVt0aGlzLmtleShhKV07cmV0dXJuIHZvaWQgMD09PWI/YzpjW2JdfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz8oZD10aGlzLmdldChhLGIpLHZvaWQgMCE9PWQ/ZDp0aGlzLmdldChhLG4uY2FtZWxDYXNlKGIpKSk6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXMua2V5KGEpLGc9dGhpcy5jYWNoZVtmXTtpZih2b2lkIDA9PT1iKXRoaXMuY2FjaGVbZl09e307ZWxzZXtuLmlzQXJyYXkoYik/ZD1iLmNvbmNhdChiLm1hcChuLmNhbWVsQ2FzZSkpOihlPW4uY2FtZWxDYXNlKGIpLGIgaW4gZz9kPVtiLGVdOihkPWUsZD1kIGluIGc/W2RdOmQubWF0Y2goRSl8fFtdKSksYz1kLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGdbZFtjXV19fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiFuLmlzRW1wdHlPYmplY3QodGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfHx7fSl9LGRpc2NhcmQ6ZnVuY3Rpb24oYSl7YVt0aGlzLmV4cGFuZG9dJiZkZWxldGUgdGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfX07dmFyIEw9bmV3IEssTT1uZXcgSyxOPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxPPS8oW0EtWl0pL2c7ZnVuY3Rpb24gUChhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKE8sXCItJDFcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpOLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6Y31jYXRjaChlKXt9TS5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9bi5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIE0uaGFzRGF0YShhKXx8TC5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtcbnJldHVybiBNLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtNLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIEwuYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtMLnJlbW92ZShhLGIpfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9TS5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFMLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bi5jYW1lbENhc2UoZC5zbGljZSg1KSksUChmLGQsZVtkXSkpKTtMLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe00uc2V0KHRoaXMsYSl9KTpKKHRoaXMsZnVuY3Rpb24oYil7dmFyIGMsZD1uLmNhbWVsQ2FzZShhKTtpZihmJiZ2b2lkIDA9PT1iKXtpZihjPU0uZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPU0uZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVAoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPU0uZ2V0KHRoaXMsZCk7TS5zZXQodGhpcyxkLGIpLC0xIT09YS5pbmRleE9mKFwiLVwiKSYmdm9pZCAwIT09YyYmTS5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe00ucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPUwuZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1MLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBMLmdldChhLGMpfHxMLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7TC5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9TC5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgUT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsUj1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sUz1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfSxUPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pOyFmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksay5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGsubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgVT1cInVuZGVmaW5lZFwiO2suZm9jdXNpbkJ1YmJsZXM9XCJvbmZvY3VzaW5cImluIGE7dmFyIFY9L15rZXkvLFc9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51KXxjbGljay8sWD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sWT0vXihbXi5dKikoPzpcXC4oLispfCkkLztmdW5jdGlvbiBaKCl7cmV0dXJuITB9ZnVuY3Rpb24gJCgpe3JldHVybiExfWZ1bmN0aW9uIF8oKXt0cnl7cmV0dXJuIGwuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fW4uZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9TC5nZXQoYSk7aWYocil7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW4uZ3VpZCsrKSwoaT1yLmV2ZW50cyl8fChpPXIuZXZlbnRzPXt9KSwoZz1yLmhhbmRsZSl8fChnPXIuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVybiB0eXBlb2YgbiE9PVUmJm4uZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP24uZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEUpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD1ZLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxrPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0sZiksKG09aVtvXSl8fChtPWlbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxwLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG8sZywhMSkpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9TC5oYXNEYXRhKGEpJiZMLmdldChhKTtpZihyJiYoaT1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEUpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1ZLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyl7bD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbT1pW29dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitwLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcSE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxwLHIuaGFuZGxlKSE9PSExfHxuLnJlbW92ZUV2ZW50KGEsbyxyLmhhbmRsZSksZGVsZXRlIGlbb10pfWVsc2UgZm9yKG8gaW4gaSluLmV2ZW50LnJlbW92ZShhLG8rYltqXSxjLGQsITApO24uaXNFbXB0eU9iamVjdChpKSYmKGRlbGV0ZSByLmhhbmRsZSxMLnJlbW92ZShhLFwiZXZlbnRzXCIpKX19LHRyaWdnZXI6ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGYsZyxoLGksayxtLG8scD1bZHx8bF0scT1qLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscj1qLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoZz1oPWQ9ZHx8bCwzIT09ZC5ub2RlVHlwZSYmOCE9PWQubm9kZVR5cGUmJiFYLnRlc3QocStuLmV2ZW50LnRyaWdnZXJlZCkmJihxLmluZGV4T2YoXCIuXCIpPj0wJiYocj1xLnNwbGl0KFwiLlwiKSxxPXIuc2hpZnQoKSxyLnNvcnQoKSksaz1xLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitxLGI9YltuLmV4cGFuZG9dP2I6bmV3IG4uRXZlbnQocSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9ZT8yOjMsYi5uYW1lc3BhY2U9ci5qb2luKFwiLlwiKSxiLm5hbWVzcGFjZV9yZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrci5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1kKSxjPW51bGw9PWM/W2JdOm4ubWFrZUFycmF5KGMsW2JdKSxvPW4uZXZlbnQuc3BlY2lhbFtxXXx8e30sZXx8IW8udHJpZ2dlcnx8by50cmlnZ2VyLmFwcGx5KGQsYykhPT0hMSkpe2lmKCFlJiYhby5ub0J1YmJsZSYmIW4uaXNXaW5kb3coZCkpe2ZvcihpPW8uZGVsZWdhdGVUeXBlfHxxLFgudGVzdChpK3EpfHwoZz1nLnBhcmVudE5vZGUpO2c7Zz1nLnBhcmVudE5vZGUpcC5wdXNoKGcpLGg9ZztoPT09KGQub3duZXJEb2N1bWVudHx8bCkmJnAucHVzaChoLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvd3x8YSl9Zj0wO3doaWxlKChnPXBbZisrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWY+MT9pOm8uYmluZFR5cGV8fHEsbT0oTC5nZXQoZyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJkwuZ2V0KGcsXCJoYW5kbGVcIiksbSYmbS5hcHBseShnLGMpLG09ayYmZ1trXSxtJiZtLmFwcGx5JiZuLmFjY2VwdERhdGEoZykmJihiLnJlc3VsdD1tLmFwcGx5KGcsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXEsZXx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8by5fZGVmYXVsdCYmby5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpIT09ITF8fCFuLmFjY2VwdERhdGEoZCl8fGsmJm4uaXNGdW5jdGlvbihkW3FdKSYmIW4uaXNXaW5kb3coZCkmJihoPWRba10saCYmKGRba109bnVsbCksbi5ldmVudC50cmlnZ2VyZWQ9cSxkW3FdKCksbi5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGgmJihkW2tdPWgpKSxiLnJlc3VsdH19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe2E9bi5ldmVudC5maXgoYSk7dmFyIGIsYyxlLGYsZyxoPVtdLGk9ZC5jYWxsKGFyZ3VtZW50cyksaj0oTC5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2EudHlwZV18fFtdLGs9bi5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2lmKGlbMF09YSxhLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGEpIT09ITEpe2g9bi5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSxqKSxiPTA7d2hpbGUoKGY9aFtiKytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7YS5jdXJyZW50VGFyZ2V0PWYuZWxlbSxjPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tjKytdKSYmIWEuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkoIWEubmFtZXNwYWNlX3JlfHxhLm5hbWVzcGFjZV9yZS50ZXN0KGcubmFtZXNwYWNlKSkmJihhLmhhbmRsZU9iaj1nLGEuZGF0YT1nLmRhdGEsZT0oKG4uZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZSYmKGEucmVzdWx0PWUpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKCFhLmJ1dHRvbnx8XCJjbGlja1wiIT09YS50eXBlKSlmb3IoO2khPT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKGkuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09YS50eXBlKXtmb3IoZD1bXSxjPTA7aD5jO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P24oZSx0aGlzKS5pbmRleChpKT49MDpuLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPWIuYnV0dG9uO3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihjPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGwsZD1jLmRvY3VtZW50RWxlbWVudCxlPWMuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZCYmZC5zY3JvbGxMZWZ0fHxlJiZlLnNjcm9sbExlZnR8fDApLShkJiZkLmNsaWVudExlZnR8fGUmJmUuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGQmJmQuc2Nyb2xsVG9wfHxlJiZlLnNjcm9sbFRvcHx8MCktKGQmJmQuY2xpZW50VG9wfHxlJiZlLmNsaWVudFRvcHx8MCkpLGEud2hpY2h8fHZvaWQgMD09PWZ8fChhLndoaWNoPTEmZj8xOjImZj8zOjQmZj8yOjApLGF9fSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVtuLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZCxlPWEudHlwZSxmPWEsZz10aGlzLmZpeEhvb2tzW2VdO2d8fCh0aGlzLmZpeEhvb2tzW2VdPWc9Vy50ZXN0KGUpP3RoaXMubW91c2VIb29rczpWLnRlc3QoZSk/dGhpcy5rZXlIb29rczp7fSksZD1nLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGcucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbi5FdmVudChmKSxiPWQubGVuZ3RoO3doaWxlKGItLSljPWRbYl0sYVtjXT1mW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWwpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGcuZmlsdGVyP2cuZmlsdGVyKGEsZik6YX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMhPT1fKCkmJnRoaXMuZm9jdXM/KHRoaXMuZm9jdXMoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PV8oKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVyblwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIik/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO2Q/bi5ldmVudC50cmlnZ2VyKGUsbnVsbCxiKTpuLmV2ZW50LmRpc3BhdGNoLmNhbGwoYixlKSxlLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9aOiQpOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17aXNEZWZhdWx0UHJldmVudGVkOiQsaXNQcm9wYWdhdGlvblN0b3BwZWQ6JCxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDokLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPVosYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1aLGEmJmEuc3RvcFByb3BhZ2F0aW9uJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1aLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybighZXx8ZSE9PWQmJiFuLmNvbnRhaW5zKGQsZSkpJiYoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxrLmZvY3VzaW5CdWJibGVzfHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSwhMCl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1MLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLEwuYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9TC5hY2Nlc3MoZCxiKS0xO2U/TC5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxMLnJlbW92ZShkLGIpKX19fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWN8fGIsYj12b2lkIDApO2ZvcihnIGluIGEpdGhpcy5vbihnLGIsYyxhW2ddLGUpO3JldHVybiB0aGlzfWlmKG51bGw9PWMmJm51bGw9PWQ/KGQ9YixjPWI9dm9pZCAwKTpudWxsPT1kJiYoXCJzdHJpbmdcIj09dHlwZW9mIGI/KGQ9YyxjPXZvaWQgMCk6KGQ9YyxjPWIsYj12b2lkIDApKSxkPT09ITEpZD0kO2Vsc2UgaWYoIWQpcmV0dXJuIHRoaXM7cmV0dXJuIDE9PT1lJiYoZj1kLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGQuZ3VpZD1mLmd1aWR8fChmLmd1aWQ9bi5ndWlkKyspKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGEsZCxjLGIpfSl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4oYj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGM9YixiPXZvaWQgMCksYz09PSExJiYoYz0kKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pO3ZhciBhYT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksYmE9LzwoW1xcdzpdKykvLGNhPS88fCYjP1xcdys7LyxkYT0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLGVhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksZmE9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxnYT0vXnRydWVcXC8oLiopLyxoYT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csaWE9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtpYS5vcHRncm91cD1pYS5vcHRpb24saWEudGJvZHk9aWEudGZvb3Q9aWEuY29sZ3JvdXA9aWEuY2FwdGlvbj1pYS50aGVhZCxpYS50aD1pYS50ZDtmdW5jdGlvbiBqYShhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBrYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBsYShhKXt2YXIgYj1nYS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gbWEoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspTC5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8TC5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfWZ1bmN0aW9uIG5hKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoTC5oYXNEYXRhKGEpJiYoZj1MLmFjY2VzcyhhKSxnPUwuc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtkPmM7YysrKW4uZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1NLmhhc0RhdGEoYSkmJihoPU0uYWNjZXNzKGEpLGk9bi5leHRlbmQoe30saCksTS5zZXQoYixpKSl9fWZ1bmN0aW9uIG9hKGEsYil7dmFyIGM9YS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTphLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gcGEoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmVC50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDooXCJpbnB1dFwiPT09Y3x8XCJ0ZXh0YXJlYVwiPT09YykmJihiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9bi5leHRlbmQoe2Nsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoay5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9b2EoaCksZj1vYShhKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXBhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fG9hKGEpLGc9Z3x8b2EoaCksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKyluYShmW2RdLGdbZF0pO2Vsc2UgbmEoYSxoKTtyZXR1cm4gZz1vYShoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm1hKGcsIWkmJm9hKGEsXCJzY3JpcHRcIikpLGh9LGJ1aWxkRnJhZ21lbnQ6ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlLGYsZyxoLGksaixrPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGw9W10sbT0wLG89YS5sZW5ndGg7bz5tO20rKylpZihlPWFbbV0sZXx8MD09PWUpaWYoXCJvYmplY3RcIj09PW4udHlwZShlKSluLm1lcmdlKGwsZS5ub2RlVHlwZT9bZV06ZSk7ZWxzZSBpZihjYS50ZXN0KGUpKXtmPWZ8fGsuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxnPShiYS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxoPWlhW2ddfHxpYS5fZGVmYXVsdCxmLmlubmVySFRNTD1oWzFdK2UucmVwbGFjZShhYSxcIjwkMT48LyQyPlwiKStoWzJdLGo9aFswXTt3aGlsZShqLS0pZj1mLmxhc3RDaGlsZDtuLm1lcmdlKGwsZi5jaGlsZE5vZGVzKSxmPWsuZmlyc3RDaGlsZCxmLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBsLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShlKSk7ay50ZXh0Q29udGVudD1cIlwiLG09MDt3aGlsZShlPWxbbSsrXSlpZigoIWR8fC0xPT09bi5pbkFycmF5KGUsZCkpJiYoaT1uLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKSxmPW9hKGsuYXBwZW5kQ2hpbGQoZSksXCJzY3JpcHRcIiksaSYmbWEoZiksYykpe2o9MDt3aGlsZShlPWZbaisrXSlmYS50ZXN0KGUudHlwZXx8XCJcIikmJmMucHVzaChlKX1yZXR1cm4ga30sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZSxmPW4uZXZlbnQuc3BlY2lhbCxnPTA7dm9pZCAwIT09KGM9YVtnXSk7ZysrKXtpZihuLmFjY2VwdERhdGEoYykmJihlPWNbTC5leHBhbmRvXSxlJiYoYj1MLmNhY2hlW2VdKSkpe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWZbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7TC5jYWNoZVtlXSYmZGVsZXRlIEwuY2FjaGVbZV19ZGVsZXRlIE0uY2FjaGVbY1tNLmV4cGFuZG9dXX19fSksbi5mbi5leHRlbmQoe3RleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiYodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9amEodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1qYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LHJlbW92ZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPWE/bi5maWx0ZXIoYSx0aGlzKTp0aGlzLGU9MDtudWxsIT0oYz1kW2VdKTtlKyspYnx8MSE9PWMubm9kZVR5cGV8fG4uY2xlYW5EYXRhKG9hKGMpKSxjLnBhcmVudE5vZGUmJihiJiZuLmNvbnRhaW5zKGMub3duZXJEb2N1bWVudCxjKSYmbWEob2EoYyxcInNjcmlwdFwiKSksYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpKTtyZXR1cm4gdGhpc30sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKG9hKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFkYS50ZXN0KGEpJiYhaWFbKGJhLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1hLnJlcGxhY2UoYWEsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEob2EoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF07cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2E9dGhpcy5wYXJlbnROb2RlLG4uY2xlYW5EYXRhKG9hKHRoaXMpKSxhJiZhLnJlcGxhY2VDaGlsZChiLHRoaXMpfSksYSYmKGEubGVuZ3RofHxhLm5vZGVUeXBlKT90aGlzOnRoaXMucmVtb3ZlKCl9LGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5yZW1vdmUoYSwhMCl9LGRvbU1hbmlwOmZ1bmN0aW9uKGEsYil7YT1lLmFwcGx5KFtdLGEpO3ZhciBjLGQsZixnLGgsaSxqPTAsbD10aGlzLmxlbmd0aCxtPXRoaXMsbz1sLTEscD1hWzBdLHE9bi5pc0Z1bmN0aW9uKHApO2lmKHF8fGw+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHAmJiFrLmNoZWNrQ2xvbmUmJmVhLnRlc3QocCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZD1tLmVxKGMpO3EmJihhWzBdPXAuY2FsbCh0aGlzLGMsZC5odG1sKCkpKSxkLmRvbU1hbmlwKGEsYil9KTtpZihsJiYoYz1uLmJ1aWxkRnJhZ21lbnQoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksZD1jLmZpcnN0Q2hpbGQsMT09PWMuY2hpbGROb2Rlcy5sZW5ndGgmJihjPWQpLGQpKXtmb3IoZj1uLm1hcChvYShjLFwic2NyaXB0XCIpLGthKSxnPWYubGVuZ3RoO2w+ajtqKyspaD1jLGohPT1vJiYoaD1uLmNsb25lKGgsITAsITApLGcmJm4ubWVyZ2UoZixvYShoLFwic2NyaXB0XCIpKSksYi5jYWxsKHRoaXNbal0saCxqKTtpZihnKWZvcihpPWZbZi5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChmLGxhKSxqPTA7Zz5qO2orKyloPWZbal0sZmEudGVzdChoLnR5cGV8fFwiXCIpJiYhTC5hY2Nlc3MoaCxcImdsb2JhbEV2YWxcIikmJm4uY29udGFpbnMoaSxoKSYmKGguc3JjP24uX2V2YWxVcmwmJm4uX2V2YWxVcmwoaC5zcmMpOm4uZ2xvYmFsRXZhbChoLnRleHRDb250ZW50LnJlcGxhY2UoaGEsXCJcIikpKX1yZXR1cm4gdGhpc319KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9bihhKSxnPWUubGVuZ3RoLTEsaD0wO2c+PWg7aCsrKWM9aD09PWc/dGhpczp0aGlzLmNsb25lKCEwKSxuKGVbaF0pW2JdKGMpLGYuYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIHFhLHJhPXt9O2Z1bmN0aW9uIHNhKGIsYyl7dmFyIGQsZT1uKGMuY3JlYXRlRWxlbWVudChiKSkuYXBwZW5kVG8oYy5ib2R5KSxmPWEuZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUmJihkPWEuZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUoZVswXSkpP2QuZGlzcGxheTpuLmNzcyhlWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gZS5kZXRhY2goKSxmfWZ1bmN0aW9uIHRhKGEpe3ZhciBiPWwsYz1yYVthXTtyZXR1cm4gY3x8KGM9c2EoYSxiKSxcIm5vbmVcIiE9PWMmJmN8fChxYT0ocWF8fG4oXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpKS5hcHBlbmRUbyhiLmRvY3VtZW50RWxlbWVudCksYj1xYVswXS5jb250ZW50RG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPXNhKGEsYikscWEuZGV0YWNoKCkpLHJhW2FdPWMpLGN9dmFyIHVhPS9ebWFyZ2luLyx2YT1uZXcgUmVnRXhwKFwiXihcIitRK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLHdhPWZ1bmN0aW9uKGIpe3JldHVybiBiLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcub3BlbmVyP2Iub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGIsbnVsbCk6YS5nZXRDb21wdXRlZFN0eWxlKGIsbnVsbCl9O2Z1bmN0aW9uIHhhKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8d2EoYSksYyYmKGc9Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdKSxjJiYoXCJcIiE9PWd8fG4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1uLnN0eWxlKGEsYikpLHZhLnRlc3QoZykmJnVhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9ZikpLHZvaWQgMCE9PWc/ZytcIlwiOmd9ZnVuY3Rpb24geWEoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEoKT92b2lkIGRlbGV0ZSB0aGlzLmdldDoodGhpcy5nZXQ9YikuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19IWZ1bmN0aW9uKCl7dmFyIGIsYyxkPWwuZG9jdW1lbnRFbGVtZW50LGU9bC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGY9bC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGYuc3R5bGUpe2Yuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGYuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGsuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWYuc3R5bGUuYmFja2dyb3VuZENsaXAsZS5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixlLmFwcGVuZENoaWxkKGYpO2Z1bmN0aW9uIGcoKXtmLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjElO3RvcDoxJTtib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjRweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGYuaW5uZXJIVE1MPVwiXCIsZC5hcHBlbmRDaGlsZChlKTt2YXIgZz1hLmdldENvbXB1dGVkU3R5bGUoZixudWxsKTtiPVwiMSVcIiE9PWcudG9wLGM9XCI0cHhcIj09PWcud2lkdGgsZC5yZW1vdmVDaGlsZChlKX1hLmdldENvbXB1dGVkU3R5bGUmJm4uZXh0ZW5kKGsse3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZygpLGJ9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmcoKSxjfSxyZWxpYWJsZU1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7dmFyIGIsYz1mLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7cmV0dXJuIGMuc3R5bGUuY3NzVGV4dD1mLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjBcIixjLnN0eWxlLm1hcmdpblJpZ2h0PWMuc3R5bGUud2lkdGg9XCIwXCIsZi5zdHlsZS53aWR0aD1cIjFweFwiLGQuYXBwZW5kQ2hpbGQoZSksYj0hcGFyc2VGbG9hdChhLmdldENvbXB1dGVkU3R5bGUoYyxudWxsKS5tYXJnaW5SaWdodCksZC5yZW1vdmVDaGlsZChlKSxmLnJlbW92ZUNoaWxkKGMpLGJ9fSl9fSgpLG4uc3dhcD1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07dmFyIHphPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxBYT1uZXcgUmVnRXhwKFwiXihcIitRK1wiKSguKikkXCIsXCJpXCIpLEJhPW5ldyBSZWdFeHAoXCJeKFsrLV0pPShcIitRK1wiKVwiLFwiaVwiKSxDYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sRGE9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxFYT1bXCJXZWJraXRcIixcIk9cIixcIk1velwiLFwibXNcIl07ZnVuY3Rpb24gRmEoYSxiKXtpZihiIGluIGEpcmV0dXJuIGI7dmFyIGM9YlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksZD1iLGU9RWEubGVuZ3RoO3doaWxlKGUtLSlpZihiPUVhW2VdK2MsYiBpbiBhKXJldHVybiBiO3JldHVybiBkfWZ1bmN0aW9uIEdhKGEsYixjKXt2YXIgZD1BYS5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsxXS0oY3x8MCkpKyhkWzJdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gSGEoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bi5jc3MoYSxjK1JbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW4uY3NzKGEsXCJwYWRkaW5nXCIrUltmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1uLmNzcyhhLFwiYm9yZGVyXCIrUltmXStcIldpZHRoXCIsITAsZSkpKTooZys9bi5jc3MoYSxcInBhZGRpbmdcIitSW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW4uY3NzKGEsXCJib3JkZXJcIitSW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIElhKGEsYixjKXt2YXIgZD0hMCxlPVwid2lkdGhcIj09PWI/YS5vZmZzZXRXaWR0aDphLm9mZnNldEhlaWdodCxmPXdhKGEpLGc9XCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZik7aWYoMD49ZXx8bnVsbD09ZSl7aWYoZT14YShhLGIsZiksKDA+ZXx8bnVsbD09ZSkmJihlPWEuc3R5bGVbYl0pLHZhLnRlc3QoZSkpcmV0dXJuIGU7ZD1nJiYoay5ib3hTaXppbmdSZWxpYWJsZSgpfHxlPT09YS5zdHlsZVtiXSksZT1wYXJzZUZsb2F0KGUpfHwwfXJldHVybiBlK0hhKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGYpK1wicHhcIn1mdW5jdGlvbiBKYShhLGIpe2Zvcih2YXIgYyxkLGUsZj1bXSxnPTAsaD1hLmxlbmd0aDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoZltnXT1MLmdldChkLFwib2xkZGlzcGxheVwiKSxjPWQuc3R5bGUuZGlzcGxheSxiPyhmW2ddfHxcIm5vbmVcIiE9PWN8fChkLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmUyhkKSYmKGZbZ109TC5hY2Nlc3MoZCxcIm9sZGRpc3BsYXlcIix0YShkLm5vZGVOYW1lKSkpKTooZT1TKGQpLFwibm9uZVwiPT09YyYmZXx8TC5zZXQoZCxcIm9sZGRpc3BsYXlcIixlP2M6bi5jc3MoZCxcImRpc3BsYXlcIikpKSk7Zm9yKGc9MDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoYiYmXCJub25lXCIhPT1kLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1kLnN0eWxlLmRpc3BsYXl8fChkLnN0eWxlLmRpc3BsYXk9Yj9mW2ddfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGF9bi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz14YShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2NvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpLGk9YS5zdHlsZTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1GYShpLGgpKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTppW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1CYS5leGVjKGMpKSYmKGM9KGVbMV0rMSkqZVsyXStwYXJzZUZsb2F0KG4uY3NzKGEsYikpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiIT09Znx8bi5jc3NOdW1iZXJbaF18fChjKz1cInB4XCIpLGsuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChpW2JdPVwiaW5oZXJpdFwiKSxnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKXx8KGlbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYik7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09RmEoYS5zdHlsZSxoKSksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT14YShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIERhJiYoZT1EYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fG4uaXNOdW1lcmljKGYpP2Z8fDA6ZSk6ZX19KSxuLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/emEudGVzdChuLmNzcyhhLFwiZGlzcGxheVwiKSkmJjA9PT1hLm9mZnNldFdpZHRoP24uc3dhcChhLENhLGZ1bmN0aW9uKCl7cmV0dXJuIElhKGEsYixkKX0pOklhKGEsYixkKTp2b2lkIDB9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGU9ZCYmd2EoYSk7cmV0dXJuIEdhKGEsYyxkP0hhKGEsYixkLFwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpLGUpOjApfX19KSxuLmNzc0hvb2tzLm1hcmdpblJpZ2h0PXlhKGsucmVsaWFibGVNYXJnaW5SaWdodCxmdW5jdGlvbihhLGIpe3JldHVybiBiP24uc3dhcChhLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LHhhLFthLFwibWFyZ2luUmlnaHRcIl0pOnZvaWQgMH0pLG4uZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTs0PmQ7ZCsrKWVbYStSW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LHVhLnRlc3QoYSl8fChuLmNzc0hvb2tzW2ErYl0uc2V0PUdhKX0pLG4uZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKG4uaXNBcnJheShiKSl7Zm9yKGQ9d2EoYSksZT1iLmxlbmd0aDtlPmc7ZysrKWZbYltnXV09bi5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP24uc3R5bGUoYSxiLGMpOm4uY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uyh0aGlzKT9uKHRoaXMpLnNob3coKTpuKHRoaXMpLmhpZGUoKX0pfX0pO2Z1bmN0aW9uIEthKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBLYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW4uVHdlZW49S2EsS2EucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpLYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxcInN3aW5nXCIsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChuLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPUthLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpLYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1LYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9bi5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOkthLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LEthLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1LYS5wcm90b3R5cGUsS2EucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBudWxsPT1hLmVsZW1bYS5wcm9wXXx8YS5lbGVtLnN0eWxlJiZudWxsIT1hLmVsZW0uc3R5bGVbYS5wcm9wXT8oYj1uLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApOmEuZWxlbVthLnByb3BdfSxzZXQ6ZnVuY3Rpb24oYSl7bi5meC5zdGVwW2EucHJvcF0/bi5meC5zdGVwW2EucHJvcF0oYSk6YS5lbGVtLnN0eWxlJiYobnVsbCE9YS5lbGVtLnN0eWxlW24uY3NzUHJvcHNbYS5wcm9wXV18fG4uY3NzSG9va3NbYS5wcm9wXSk/bi5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCk6YS5lbGVtW2EucHJvcF09YS5ub3d9fX0sS2EucHJvcEhvb2tzLnNjcm9sbFRvcD1LYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxuLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9fSxuLmZ4PUthLnByb3RvdHlwZS5pbml0LG4uZnguc3RlcD17fTt2YXIgTGEsTWEsTmE9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLE9hPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK1ErXCIpKFthLXolXSopJFwiLFwiaVwiKSxQYT0vcXVldWVIb29rcyQvLFFhPVtWYV0sUmE9e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKSxkPWMuY3VyKCksZT1PYS5leGVjKGIpLGY9ZSYmZVszXXx8KG4uY3NzTnVtYmVyW2FdP1wiXCI6XCJweFwiKSxnPShuLmNzc051bWJlclthXXx8XCJweFwiIT09ZiYmK2QpJiZPYS5leGVjKG4uY3NzKGMuZWxlbSxhKSksaD0xLGk9MjA7aWYoZyYmZ1szXSE9PWYpe2Y9Znx8Z1szXSxlPWV8fFtdLGc9K2R8fDE7ZG8gaD1ofHxcIi41XCIsZy89aCxuLnN0eWxlKGMuZWxlbSxhLGcrZik7d2hpbGUoaCE9PShoPWMuY3VyKCkvZCkmJjEhPT1oJiYtLWkpfXJldHVybiBlJiYoZz1jLnN0YXJ0PStnfHwrZHx8MCxjLnVuaXQ9ZixjLmVuZD1lWzFdP2crKGVbMV0rMSkqZVsyXTorZVsyXSksY31dfTtmdW5jdGlvbiBTYSgpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TGE9dm9pZCAwfSksTGE9bi5ub3coKX1mdW5jdGlvbiBUYShhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ND5kO2QrPTItYiljPVJbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gVWEoYSxiLGMpe2Zvcih2YXIgZCxlPShSYVtiXXx8W10pLmNvbmNhdChSYVtcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIFZhKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9dGhpcyxtPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJlMoYSkscT1MLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChoPW4uX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWgudW5xdWV1ZWQmJihoLnVucXVldWVkPTAsaT1oLmVtcHR5LmZpcmUsaC5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7aC51bnF1ZXVlZHx8aSgpfSksaC51bnF1ZXVlZCsrLGwuYWx3YXlzKGZ1bmN0aW9uKCl7bC5hbHdheXMoZnVuY3Rpb24oKXtoLnVucXVldWVkLS0sbi5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxoLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1hLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIGJ8fFwid2lkdGhcImluIGIpJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1uLmNzcyhhLFwiZGlzcGxheVwiKSxrPVwibm9uZVwiPT09aj9MLmdldChhLFwib2xkZGlzcGxheVwiKXx8dGEoYS5ub2RlTmFtZSk6aixcImlubGluZVwiPT09ayYmXCJub25lXCI9PT1uLmNzcyhhLFwiZmxvYXRcIikmJihvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbC5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLE5hLmV4ZWMoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW1bZF09cSYmcVtkXXx8bi5zdHlsZShhLGQpfWVsc2Ugaj12b2lkIDA7aWYobi5pc0VtcHR5T2JqZWN0KG0pKVwiaW5saW5lXCI9PT0oXCJub25lXCI9PT1qP3RhKGEubm9kZU5hbWUpOmopJiYoby5kaXNwbGF5PWopO2Vsc2V7cT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9TC5hY2Nlc3MoYSxcImZ4c2hvd1wiLHt9KSxmJiYocS5oaWRkZW49IXApLHA/bihhKS5zaG93KCk6bC5kb25lKGZ1bmN0aW9uKCl7bihhKS5oaWRlKCl9KSxsLmRvbmUoZnVuY3Rpb24oKXt2YXIgYjtMLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG0pbi5zdHlsZShhLGIsbVtiXSl9KTtmb3IoZCBpbiBtKWc9VWEocD9xW2RdOjAsZCxsKSxkIGluIHF8fChxW2RdPWcuc3RhcnQscCYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gV2EoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1uLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG4uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bi5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIFhhKGEsYixjKXt2YXIgZCxlLGY9MCxnPVFhLmxlbmd0aCxoPW4uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPUxhfHxTYSgpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpuLmV4dGVuZCh7fSxiKSxvcHRzOm4uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6TGF8fFNhKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1uLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiP2gucmVzb2x2ZVdpdGgoYSxbaixiXSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcihXYShrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9UWFbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiBkO3JldHVybiBuLm1hcChrLFVhLGopLG4uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG4uZngudGltZXIobi5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9bi5BbmltYXRpb249bi5leHRlbmQoWGEse3R3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtuLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5zcGxpdChcIiBcIik7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLFJhW2NdPVJhW2NdfHxbXSxSYVtjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP1FhLnVuc2hpZnQoYSk6UWEucHVzaChhKX19KSxuLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9uLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG4uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhbi5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1uLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBuLmZ4LnNwZWVkcz9uLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpuLmZ4LnNwZWVkcy5fZGVmYXVsdCwobnVsbD09ZC5xdWV1ZXx8ZC5xdWV1ZT09PSEwKSYmKGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtuLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm4uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxuLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihTKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uaXNFbXB0eU9iamVjdChhKSxmPW4uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1YYSh0aGlzLG4uZXh0ZW5kKHt9LGEpLGYpOyhlfHxMLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9bi50aW1lcnMsZz1MLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZQYS50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyhifHwhYykmJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9TC5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1uLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsbi5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxuLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9bi5mbltiXTtuLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShUYShiLCEwKSxhLGQsZSl9fSksbi5lYWNoKHtzbGlkZURvd246VGEoXCJzaG93XCIpLHNsaWRlVXA6VGEoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOlRhKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG4udGltZXJzPVtdLG4uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPW4udGltZXJzO2ZvcihMYT1uLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fG4uZnguc3RvcCgpLExhPXZvaWQgMH0sbi5meC50aW1lcj1mdW5jdGlvbihhKXtuLnRpbWVycy5wdXNoKGEpLGEoKT9uLmZ4LnN0YXJ0KCk6bi50aW1lcnMucG9wKCl9LG4uZnguaW50ZXJ2YWw9MTMsbi5meC5zdGFydD1mdW5jdGlvbigpe01hfHwoTWE9c2V0SW50ZXJ2YWwobi5meC50aWNrLG4uZnguaW50ZXJ2YWwpKX0sbi5meC5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChNYSksTWE9bnVsbH0sbi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sbi5mbi5kZWxheT1mdW5jdGlvbihhLGIpe3JldHVybiBhPW4uZng/bi5meC5zcGVlZHNbYV18fGE6YSxiPWJ8fFwiZnhcIix0aGlzLnF1ZXVlKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1zZXRUaW1lb3V0KGIsYSk7Yy5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGQpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9bC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsay5jaGVja09uPVwiXCIhPT1hLnZhbHVlLGsub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxiLmRpc2FibGVkPSEwLGsub3B0RGlzYWJsZWQ9IWMuZGlzYWJsZWQsYT1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsay5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgWWEsWmEsJGE9bi5leHByLmF0dHJIYW5kbGU7bi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLG4uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoYSYmMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gdHlwZW9mIGEuZ2V0QXR0cmlidXRlPT09VT9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGQ9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP1phOllhKSksXG52b2lkIDA9PT1jP2QmJlwiZ2V0XCJpbiBkJiZudWxsIT09KGU9ZC5nZXQoYSxiKSk/ZTooZT1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWU/dm9pZCAwOmUpOm51bGwhPT1jP2QmJlwic2V0XCJpbiBkJiZ2b2lkIDAhPT0oZT1kLnNldChhLGMsYikpP2U6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTp2b2lkIG4ucmVtb3ZlQXR0cihhLGIpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChFKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWsucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19fSksWmE9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9JGFbYl18fG4uZmluZC5hdHRyOyRhW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj0kYVtiXSwkYVtiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsJGFbYl09ZiksZX19KTt2YXIgX2E9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9LHByb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPWEubm9kZVR5cGU7aWYoYSYmMyE9PWcmJjghPT1nJiYyIT09ZylyZXR1cm4gZj0xIT09Z3x8IW4uaXNYTUxEb2MoYSksZiYmKGI9bi5wcm9wRml4W2JdfHxiLGU9bi5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5oYXNBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKXx8X2EudGVzdChhLm5vZGVOYW1lKXx8YS5ocmVmP2EudGFiSW5kZXg6LTF9fX19KSxrLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciBhYj0vW1xcdFxcclxcblxcZl0vZztuLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChFKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYixcIiBcIik6XCIgXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJihkKz1lK1wiIFwiKTtnPW4udHJpbShkKSxjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goRSl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoYWIsXCIgXCIpOlwiXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPj0wKWQ9ZC5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO2c9YT9uLnRyaW0oZCk6XCJcIixjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHRoaXMuY2xhc3NOYW1lLGIpLGIpfTpmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1jKXt2YXIgYixkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChFKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZShjPT09VXx8XCJib29sZWFuXCI9PT1jKSYmKHRoaXMuY2xhc3NOYW1lJiZMLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHRoaXMuY2xhc3NOYW1lKSx0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZXx8YT09PSExP1wiXCI6TC5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIiBcIithK1wiIFwiLGM9MCxkPXRoaXMubGVuZ3RoO2Q+YztjKyspaWYoMT09PXRoaXNbY10ubm9kZVR5cGUmJihcIiBcIit0aGlzW2NdLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYixcIiBcIikuaW5kZXhPZihiKT49MClyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgYmI9L1xcci9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKGJiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sISghYy5zZWxlY3RlZCYmaSE9PWV8fChrLm9wdERpc2FibGVkP2MuZGlzYWJsZWQ6bnVsbCE9PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxjLnBhcmVudE5vZGUuZGlzYWJsZWQmJm4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KGQudmFsdWUsZik+PTApJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+PTA6dm9pZCAwfX0say5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfSxiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSk7dmFyIGNiPW4ubm93KCksZGI9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihhKXt2YXIgYixjO2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7Yz1uZXcgRE9NUGFyc2VyLGI9Yy5wYXJzZUZyb21TdHJpbmcoYSxcInRleHQveG1sXCIpfWNhdGNoKGQpe2I9dm9pZCAwfXJldHVybighYnx8Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkmJm4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYSksYn07dmFyIGViPS8jLiokLyxmYj0vKFs/Jl0pXz1bXiZdKi8sZ2I9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxoYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxpYj0vXig/OkdFVHxIRUFEKSQvLGpiPS9eXFwvXFwvLyxrYj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxsYj17fSxtYj17fSxuYj1cIiovXCIuY29uY2F0KFwiKlwiKSxvYj1hLmxvY2F0aW9uLmhyZWYscGI9a2IuZXhlYyhvYi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gcWIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gcmIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09bWI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiBzYihhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZuLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gdGIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gdWIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6b2IsdHlwZTpcIkdFVFwiLGlzTG9jYWw6aGIudGVzdChwYlsxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6bmIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDoveG1sLyxodG1sOi9odG1sLyxqc29uOi9qc29uL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9zYihzYihhLG4uYWpheFNldHRpbmdzKSxiKTpzYihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpxYihsYiksYWpheFRyYW5zcG9ydDpxYihtYiksYWpheDpmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxiPWJ8fHt9O3ZhciBjLGQsZSxmLGcsaCxpLGosaz1uLmFqYXhTZXR1cCh7fSxiKSxsPWsuY29udGV4dHx8ayxtPWsuY29udGV4dCYmKGwubm9kZVR5cGV8fGwuanF1ZXJ5KT9uKGwpOm4uZXZlbnQsbz1uLkRlZmVycmVkKCkscD1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHE9ay5zdGF0dXNDb2RlfHx7fSxyPXt9LHM9e30sdD0wLHU9XCJjYW5jZWxlZFwiLHY9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dCl7aWYoIWYpe2Y9e307d2hpbGUoYj1nYi5leGVjKGUpKWZbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9ZlthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT10P2U6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdHx8KGE9c1tjXT1zW2NdfHxhLHJbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdHx8KGsubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dClmb3IoYiBpbiBhKXFbYl09W3FbYl0sYVtiXV07ZWxzZSB2LmFsd2F5cyhhW3Yuc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHU7cmV0dXJuIGMmJmMuYWJvcnQoYikseCgwLGIpLHRoaXN9fTtpZihvLnByb21pc2UodikuY29tcGxldGU9cC5hZGQsdi5zdWNjZXNzPXYuZG9uZSx2LmVycm9yPXYuZmFpbCxrLnVybD0oKGF8fGsudXJsfHxvYikrXCJcIikucmVwbGFjZShlYixcIlwiKS5yZXBsYWNlKGpiLHBiWzFdK1wiLy9cIiksay50eXBlPWIubWV0aG9kfHxiLnR5cGV8fGsubWV0aG9kfHxrLnR5cGUsay5kYXRhVHlwZXM9bi50cmltKGsuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXCJcIl0sbnVsbD09ay5jcm9zc0RvbWFpbiYmKGg9a2IuZXhlYyhrLnVybC50b0xvd2VyQ2FzZSgpKSxrLmNyb3NzRG9tYWluPSEoIWh8fGhbMV09PT1wYlsxXSYmaFsyXT09PXBiWzJdJiYoaFszXXx8KFwiaHR0cDpcIj09PWhbMV0/XCI4MFwiOlwiNDQzXCIpKT09PShwYlszXXx8KFwiaHR0cDpcIj09PXBiWzFdP1wiODBcIjpcIjQ0M1wiKSkpKSxrLmRhdGEmJmsucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBrLmRhdGEmJihrLmRhdGE9bi5wYXJhbShrLmRhdGEsay50cmFkaXRpb25hbCkpLHJiKGxiLGssYix2KSwyPT09dClyZXR1cm4gdjtpPW4uZXZlbnQmJmsuZ2xvYmFsLGkmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksay50eXBlPWsudHlwZS50b1VwcGVyQ2FzZSgpLGsuaGFzQ29udGVudD0haWIudGVzdChrLnR5cGUpLGQ9ay51cmwsay5oYXNDb250ZW50fHwoay5kYXRhJiYoZD1rLnVybCs9KGRiLnRlc3QoZCk/XCImXCI6XCI/XCIpK2suZGF0YSxkZWxldGUgay5kYXRhKSxrLmNhY2hlPT09ITEmJihrLnVybD1mYi50ZXN0KGQpP2QucmVwbGFjZShmYixcIiQxXz1cIitjYisrKTpkKyhkYi50ZXN0KGQpP1wiJlwiOlwiP1wiKStcIl89XCIrY2IrKykpLGsuaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2RdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2RdKSxuLmV0YWdbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZF0pKSwoay5kYXRhJiZrLmhhc0NvbnRlbnQmJmsuY29udGVudFR5cGUhPT0hMXx8Yi5jb250ZW50VHlwZSkmJnYuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGsuY29udGVudFR5cGUpLHYuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGsuZGF0YVR5cGVzWzBdJiZrLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dP2suYWNjZXB0c1trLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09ay5kYXRhVHlwZXNbMF0/XCIsIFwiK25iK1wiOyBxPTAuMDFcIjpcIlwiKTprLmFjY2VwdHNbXCIqXCJdKTtmb3IoaiBpbiBrLmhlYWRlcnMpdi5zZXRSZXF1ZXN0SGVhZGVyKGosay5oZWFkZXJzW2pdKTtpZihrLmJlZm9yZVNlbmQmJihrLmJlZm9yZVNlbmQuY2FsbChsLHYsayk9PT0hMXx8Mj09PXQpKXJldHVybiB2LmFib3J0KCk7dT1cImFib3J0XCI7Zm9yKGogaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pdltqXShrW2pdKTtpZihjPXJiKG1iLGssYix2KSl7di5yZWFkeVN0YXRlPTEsaSYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbdixrXSksay5hc3luYyYmay50aW1lb3V0PjAmJihnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2LmFib3J0KFwidGltZW91dFwiKX0say50aW1lb3V0KSk7dHJ5e3Q9MSxjLnNlbmQocix4KX1jYXRjaCh3KXtpZighKDI+dCkpdGhyb3cgdzt4KC0xLHcpfX1lbHNlIHgoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geChhLGIsZixoKXt2YXIgaixyLHMsdSx3LHg9YjsyIT09dCYmKHQ9MixnJiZjbGVhclRpbWVvdXQoZyksYz12b2lkIDAsZT1ofHxcIlwiLHYucmVhZHlTdGF0ZT1hPjA/NDowLGo9YT49MjAwJiYzMDA+YXx8MzA0PT09YSxmJiYodT10YihrLHYsZikpLHU9dWIoayx1LHYsaiksaj8oay5pZk1vZGlmaWVkJiYodz12LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobi5sYXN0TW9kaWZpZWRbZF09dyksdz12LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobi5ldGFnW2RdPXcpKSwyMDQ9PT1hfHxcIkhFQURcIj09PWsudHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09YT94PVwibm90bW9kaWZpZWRcIjooeD11LnN0YXRlLHI9dS5kYXRhLHM9dS5lcnJvcixqPSFzKSk6KHM9eCwoYXx8IXgpJiYoeD1cImVycm9yXCIsMD5hJiYoYT0wKSkpLHYuc3RhdHVzPWEsdi5zdGF0dXNUZXh0PShifHx4KStcIlwiLGo/by5yZXNvbHZlV2l0aChsLFtyLHgsdl0pOm8ucmVqZWN0V2l0aChsLFt2LHgsc10pLHYuc3RhdHVzQ29kZShxKSxxPXZvaWQgMCxpJiZtLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdixrLGo/cjpzXSkscC5maXJlV2l0aChsLFt2LHhdKSxpJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3Ysa10pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHZ9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9KX19KSxuLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LG4uZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcEFsbChhLmNhbGwodGhpcyxiKSl9KToodGhpc1swXSYmKGI9bihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzKX0sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2gobi5pc0Z1bmN0aW9uKGEpP2Z1bmN0aW9uKGIpe24odGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX06ZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxuLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg8PTAmJmEub2Zmc2V0SGVpZ2h0PD0wfSxuLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiFuLmV4cHIuZmlsdGVycy5oaWRkZW4oYSl9O3ZhciB2Yj0vJTIwL2csd2I9L1xcW1xcXSQvLHhiPS9cXHI/XFxuL2cseWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLHpiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBBYihhLGIsYyxkKXt2YXIgZTtpZihuLmlzQXJyYXkoYikpbi5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHx3Yi50ZXN0KGEpP2QoYSxlKTpBYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW4udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKUFiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bi5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bi5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1uLmFqYXhTZXR0aW5ncyYmbi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG4uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFuLmlzUGxhaW5PYmplY3QoYSkpbi5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlBYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKHZiLFwiK1wiKX0sbi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBuLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9uLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFuKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZ6Yi50ZXN0KHRoaXMubm9kZU5hbWUpJiYheWIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVQudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1uKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bi5pc0FycmF5KGMpP24ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh4YixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG4uYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0fWNhdGNoKGEpe319O3ZhciBCYj0wLENiPXt9LERiPXswOjIwMCwxMjIzOjIwNH0sRWI9bi5hamF4U2V0dGluZ3MueGhyKCk7YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gQ2IpQ2JbYV0oKX0pLGsuY29ycz0hIUViJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gRWIsay5hamF4PUViPSEhRWIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBrLmNvcnN8fEViJiYhYS5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihjLGQpe3ZhciBlLGY9YS54aHIoKSxnPSsrQmI7aWYoZi5vcGVuKGEudHlwZSxhLnVybCxhLmFzeW5jLGEudXNlcm5hbWUsYS5wYXNzd29yZCksYS54aHJGaWVsZHMpZm9yKGUgaW4gYS54aHJGaWVsZHMpZltlXT1hLnhockZpZWxkc1tlXTthLm1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZShhLm1pbWVUeXBlKSxhLmNyb3NzRG9tYWlufHxjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGUgaW4gYylmLnNldFJlcXVlc3RIZWFkZXIoZSxjW2VdKTtiPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2ImJihkZWxldGUgQ2JbZ10sYj1mLm9ubG9hZD1mLm9uZXJyb3I9bnVsbCxcImFib3J0XCI9PT1hP2YuYWJvcnQoKTpcImVycm9yXCI9PT1hP2QoZi5zdGF0dXMsZi5zdGF0dXNUZXh0KTpkKERiW2Yuc3RhdHVzXXx8Zi5zdGF0dXMsZi5zdGF0dXNUZXh0LFwic3RyaW5nXCI9PXR5cGVvZiBmLnJlc3BvbnNlVGV4dD97dGV4dDpmLnJlc3BvbnNlVGV4dH06dm9pZCAwLGYuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGYub25sb2FkPWIoKSxmLm9uZXJyb3I9YihcImVycm9yXCIpLGI9Q2JbZ109YihcImFib3J0XCIpO3RyeXtmLnNlbmQoYS5oYXNDb250ZW50JiZhLmRhdGF8fG51bGwpfWNhdGNoKGgpe2lmKGIpdGhyb3cgaH19LGFib3J0OmZ1bmN0aW9uKCl7YiYmYigpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6Lyg/OmphdmF8ZWNtYSlzY3JpcHQvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZCxlKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHthc3luYzohMCxjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmUoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGwuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgRmI9W10sR2I9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1GYi5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK2NiKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKEdiLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmIShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZHYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKEdiLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KGRiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe2FbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxGYi5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8bDt2YXIgZD12LmV4ZWMoYSksZT0hYyYmW107cmV0dXJuIGQ/W2IuY3JlYXRlRWxlbWVudChkWzFdKV06KGQ9bi5idWlsZEZyYWdtZW50KFthXSxiLGUpLGUmJmUubGVuZ3RoJiZuKGUpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZC5jaGlsZE5vZGVzKSl9O3ZhciBIYj1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmSGIpcmV0dXJuIEhiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD49MCYmKGQ9bi50cmltKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZSxkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5jb21wbGV0ZShjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChjLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pLHRoaXN9LG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiBuLmdyZXAobi50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O3ZhciBJYj1hLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtmdW5jdGlvbiBKYihhKXtyZXR1cm4gbi5pc1dpbmRvdyhhKT9hOjk9PT1hLm5vZGVUeXBlJiZhLmRlZmF1bHRWaWV3fW4ub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9bi5jc3MoYSxcInBvc2l0aW9uXCIpLGw9bihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPW4uY3NzKGEsXCJ0b3BcIiksaT1uLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG4uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxoKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sbi5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24ub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQ9dGhpc1swXSxlPXt0b3A6MCxsZWZ0OjB9LGY9ZCYmZC5vd25lckRvY3VtZW50O2lmKGYpcmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsbi5jb250YWlucyhiLGQpPyh0eXBlb2YgZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QhPT1VJiYoZT1kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxjPUpiKGYpLHt0b3A6ZS50b3ArYy5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtjLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH0pOmV9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksZC5sZWZ0Kz1uLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOmIudG9wLWQudG9wLW4uY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LW4uY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50fHxJYjt3aGlsZShhJiYhbi5ub2RlTmFtZShhLFwiaHRtbFwiKSYmXCJzdGF0aWNcIj09PW4uY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxJYn0pfX0pLG4uZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYixjKXt2YXIgZD1cInBhZ2VZT2Zmc2V0XCI9PT1jO24uZm5bYl09ZnVuY3Rpb24oZSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihiLGUsZil7dmFyIGc9SmIoYik7cmV0dXJuIHZvaWQgMD09PWY/Zz9nW2NdOmJbZV06dm9pZChnP2cuc2Nyb2xsVG8oZD9hLnBhZ2VYT2Zmc2V0OmYsZD9mOmEucGFnZVlPZmZzZXQpOmJbZV09Zil9LGIsZSxhcmd1bWVudHMubGVuZ3RoLG51bGwpfX0pLG4uZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXlhKGsucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe3JldHVybiBjPyhjPXhhKGEsYiksdmEudGVzdChjKT9uKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmMpOnZvaWQgMH0pfSksbi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uc2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0sbi5mbi5hbmRTZWxmPW4uZm4uYWRkQmFjayxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgS2I9YS5qUXVlcnksTGI9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9TGIpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PUtiKSxufSx0eXBlb2YgYj09PVUmJihhLmpRdWVyeT1hLiQ9biksbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anF1ZXJ5Lm1pbi5tYXAiLCJpbXBvcnQgR2FtZSBmcm9tICcuLi8uLi9hcHAvc2NyaXB0cy9nYW1lLmpzJztcbmltcG9ydCBVSSBmcm9tICcuLi8uLi9hcHAvc2NyaXB0cy91aS5qcyc7XG5cbmRlc2NyaWJlKCdHYW1lcGxheScsICgpID0+IHtcbiAgbGV0IGdhbWU7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGdhbWUgPSBuZXcgR2FtZSgpO1xuICB9KTtcblxuICBkZXNjcmliZSgnR2FtZScsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgZ2FtZScsICgpID0+IHtcbiAgICAgIGV4cGVjdChnYW1lKS50b0JlRGVmaW5lZCgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBoYXZlIGEgZGVmYXVsdCBvZiBzaXggcm93cyBhbmQgc2V2ZW4gY29sdW1ucycsICgpID0+IHtcbiAgICAgIGV4cGVjdChnYW1lLnJvd3MpLnRvRXF1YWwoNik7XG4gICAgICBleHBlY3QoZ2FtZS5jb2x1bW5zKS50b0VxdWFsKDcpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnRHJvcCBEaXNjJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcGxhY2UgYSBkaXNjIGF0IG5leHQgYXZhaWxhYmxlIHJvdyBvZiBzZWxlY3RlZCBjb2x1bW4nLCAoKSA9PiB7XG4gICAgICBnYW1lLmRyb3BEaXNjKDEsIDApO1xuICAgICAgbGV0IGV4cGVjdGVkQm9hcmRTdGF0ZUFmdGVyRmlyc3RNb3ZlID0gW1xuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDBdXG4gICAgICBdO1xuICAgICAgZXhwZWN0KGdhbWUuYm9hcmQpLnRvRXF1YWwoZXhwZWN0ZWRCb2FyZFN0YXRlQWZ0ZXJGaXJzdE1vdmUpO1xuXG4gICAgICBnYW1lLmRyb3BEaXNjKDIsIDApO1xuICAgICAgbGV0IGV4cGVjdGVkQm9hcmRTdGF0ZUFmdGVyU2Vjb25kTW92ZSA9IFtcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMiwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwXVxuICAgICAgXTtcbiAgICAgIGV4cGVjdChnYW1lLmJvYXJkKS50b0VxdWFsKGV4cGVjdGVkQm9hcmRTdGF0ZUFmdGVyU2Vjb25kTW92ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdHZXQgV2lubmVyJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgZ2V0IGEgd2lubmVyIHdoZW4gdGhlcmUgYXJlIGZvdXIgY29uc2VjdXRpdmUgZGlzY3MgaW4gYSBob3Jpem9udGFsIGxpbmUgYnkgYSBzaW5nbGUgcGxheWVyJywgKCkgPT4ge1xuICAgICAgZ2FtZS5ib2FyZCA9IFtcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMiwgMiwgMiwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwXVxuICAgICAgXTtcbiAgICAgIGV4cGVjdChnYW1lLmdldFdpbm5lcigpKS50b0VxdWFsKDEpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBnZXQgYSB3aW5uZXIgd2hlbiB0aGVyZSBhcmUgZm91ciBjb25zZWN1dGl2ZSBkaXNjcyBpbiBhIHZlcnRpY2FsIGxpbmUgYnkgYSBzaW5nbGUgcGxheWVyJywgKCkgPT4ge1xuICAgICAgZ2FtZS5ib2FyZCA9IFtcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAxLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDEsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMiwgMSwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFsyLCAyLCAxLCAwLCAwLCAwLCAwXVxuICAgICAgXTtcbiAgICAgIGV4cGVjdChnYW1lLmdldFdpbm5lcigpKS50b0VxdWFsKDEpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBnZXQgYSB3aW5uZXIgd2hlbiB0aGVyZSBhcmUgZm91ciBjb25zZWN1dGl2ZSBkaXNjcyBpbiBhIGRpYWdvbmFsIGxpbmUgYnkgYSBzaW5nbGUgcGxheWVyJywgKCkgPT4ge1xuICAgICAgZ2FtZS5ib2FyZCA9IFtcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAxLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDEsIDIsIDAsIDAsIDBdLFxuICAgICAgICBbMiwgMSwgMSwgMSwgMCwgMCwgMF0sXG4gICAgICAgIFsxLCAyLCAyLCAyLCAwLCAwLCAwXVxuICAgICAgXTtcbiAgICAgIGV4cGVjdChnYW1lLmdldFdpbm5lcigpKS50b0VxdWFsKDEpO1xuXG4gICAgICBnYW1lLmJvYXJkID0gW1xuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDIsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMSwgMiwgMiwgMCwgMCwgMF0sXG4gICAgICAgIFswLCAyLCAxLCAyLCAxLCAwLCAwXSxcbiAgICAgICAgWzAsIDEsIDEsIDEsIDIsIDAsIDBdXG4gICAgICBdO1xuICAgICAgZXhwZWN0KGdhbWUuZ2V0V2lubmVyKCkpLnRvRXF1YWwoMik7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGRlY2xhcmUgdGhlIG1hdGNoIGEgZHJhdyBpZiBubyBvbmUgd2lucyB3aXRoaW4gdGhlIG1heGltdW0gbnVtYmVyIG9mIG1vdmVzIGFsbG93ZWQnLCAoKSA9PiB7XG4gICAgICBnYW1lLmJvYXJkID0gW1xuICAgICAgICBbMiwgMiwgMiwgMSwgMiwgMiwgMl0sXG4gICAgICAgIFsxLCAxLCAxLCAyLCAxLCAxLCAxXSxcbiAgICAgICAgWzIsIDIsIDIsIDEsIDIsIDIsIDJdLFxuICAgICAgICBbMSwgMSwgMSwgMiwgMSwgMSwgMV0sXG4gICAgICAgIFsyLCAyLCAyLCAxLCAyLCAyLCAyXSxcbiAgICAgICAgWzEsIDEsIDEsIDIsIDEsIDEsIDFdXG4gICAgICBdO1xuICAgICAgZ2FtZS5tb3ZlQ291bnQgPSBnYW1lLnJvd3MgKiBnYW1lLmNvbHVtbnM7XG4gICAgICBleHBlY3QoZ2FtZS5nZXRXaW5uZXIoKSkudG9FcXVhbCgtMSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
