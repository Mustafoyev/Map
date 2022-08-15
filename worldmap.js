/*Copyright 2010-2021 Simplemaps.com
html5worldmapv4.20 - trial version
Use pursuant to license agreement at https://simplemaps.com/license */

/* shifty - v1.5.3 - http://jeremyckahn.github.io/shifty, embedded within map logic*/

/* Raphaël 2.1.2 (tweaked, always global)- JavaScript Vector Library, Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com), Copyright © 2008-2016 Sencha Labs (http://sencha.com), Licensed under the MIT (http://raphaeljs.com/license.html) license. */
!(function (t) {
	var e, f, p, a, d, g, x, y, m;
	t.eve =
		((e = '0.4.2'),
		(f = 'hasOwnProperty'),
		(p = /[\.\/]/),
		(a = function () {}),
		(d = function (t, e) {
			return t - e;
		}),
		((m = function (t, e) {
			t = String(t);
			var r,
				i = x,
				n = Array.prototype.slice.call(arguments, 2),
				s = m.listeners(t),
				a = 0,
				o = [],
				l = {},
				h = [],
				u = g;
			g = t;
			for (var c = (x = 0), f = s.length; c < f; c++)
				'zIndex' in s[c] &&
					(o.push(s[c].zIndex), s[c].zIndex < 0 && (l[s[c].zIndex] = s[c]));
			for (o.sort(d); o[a] < 0; )
				if (((r = l[o[a++]]), h.push(r.apply(e, n)), x)) return (x = i), h;
			for (c = 0; c < f; c++)
				if ('zIndex' in (r = s[c]))
					if (r.zIndex == o[a]) {
						if ((h.push(r.apply(e, n)), x)) break;
						do {
							if (((r = l[o[++a]]) && h.push(r.apply(e, n)), x)) break;
						} while (r);
					} else l[r.zIndex] = r;
				else if ((h.push(r.apply(e, n)), x)) break;
			return (x = i), (g = u), h.length ? h : null;
		})._events = y =
			{ n: {} }),
		(m.listeners = function (t) {
			for (
				var e,
					r,
					i,
					n,
					s,
					a,
					o = t.split(p),
					l = y,
					h = [l],
					u = [],
					c = 0,
					f = o.length;
				c < f;
				c++
			) {
				for (a = [], n = 0, s = h.length; n < s; n++)
					for (r = [(l = h[n].n)[o[c]], l['*']], i = 2; i--; )
						(e = r[i]) && (a.push(e), (u = u.concat(e.f || [])));
				h = a;
			}
			return u;
		}),
		(m.on = function (t, e) {
			if (((t = String(t)), 'function' != typeof e)) return function () {};
			for (var r = t.split(p), i = y, n = 0, s = r.length; n < s; n++)
				i =
					((i = i.n).hasOwnProperty(r[n]) && i[r[n]]) || (i[r[n]] = { n: {} });
			for (i.f = i.f || [], n = 0, s = i.f.length; n < s; n++)
				if (i.f[n] == e) return a;
			return (
				i.f.push(e),
				function (t) {
					+t == +t && (e.zIndex = +t);
				}
			);
		}),
		(m.f = function (t) {
			var e = [].slice.call(arguments, 1);
			return function () {
				m.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)));
			};
		}),
		(m.stop = function () {
			x = 1;
		}),
		(m.nt = function (t) {
			return t ? new RegExp('(?:\\.|\\/|^)' + t + '(?:\\.|\\/|$)').test(g) : g;
		}),
		(m.nts = function () {
			return g.split(p);
		}),
		(m.off = m.unbind =
			function (t, e) {
				if (t) {
					for (
						var r, i, n, s = t.split(p), a = [y], o = 0, l = s.length;
						o < l;
						o++
					)
						for (u = 0; u < a.length; u += n.length - 2) {
							if (((n = [u, 1]), (r = a[u].n), '*' != s[o]))
								r[s[o]] && n.push(r[s[o]]);
							else for (i in r) r[f](i) && n.push(r[i]);
							a.splice.apply(a, n);
						}
					for (o = 0, l = a.length; o < l; o++)
						for (r = a[o]; r.n; ) {
							if (e) {
								if (r.f) {
									for (u = 0, c = r.f.length; u < c; u++)
										if (r.f[u] == e) {
											r.f.splice(u, 1);
											break;
										}
									r.f.length || delete r.f;
								}
								for (i in r.n)
									if (r.n[f](i) && r.n[i].f) {
										for (var h = r.n[i].f, u = 0, c = h.length; u < c; u++)
											if (h[u] == e) {
												h.splice(u, 1);
												break;
											}
										h.length || delete r.n[i].f;
									}
							} else
								for (i in (delete r.f, r.n))
									r.n[f](i) && r.n[i].f && delete r.n[i].f;
							r = r.n;
						}
				} else m._events = y = { n: {} };
			}),
		(m.once = function (t, e) {
			var r = function () {
				return m.unbind(t, r), e.apply(this, arguments);
			};
			return m.on(t, r);
		}),
		(m.version = e),
		(m.toString = function () {
			return 'You are running Eve ' + e;
		}),
		m);
})(this),
	(function (t) {
		!(function (t, N) {
			function j(t) {
				if (j.is(t, 'function')) return i ? t() : N.on('raphael.DOMload', t);
				if (j.is(t, v))
					return j._engine.create[x](j, t.splice(0, 3 + j.is(t[0], F))).add(t);
				var e = Array.prototype.slice.call(arguments, 0);
				if (j.is(e[e.length - 1], 'function')) {
					var r = e.pop();
					return i
						? r.call(j._engine.create[x](j, e))
						: N.on('raphael.DOMload', function () {
								r.call(j._engine.create[x](j, e));
						  });
				}
				return j._engine.create[x](j, arguments);
			}
			(j.version = '2.1.0'), (j.eve = N);
			function s(t, e) {
				return I(t) - I(e);
			}
			function e(t, e, r, i) {
				return (
					null == i && (i = r),
					[
						['M', t, e],
						['m', 0, -i],
						['a', r, i, 0, 1, 1, 0, 2 * i],
						['a', r, i, 0, 1, 1, 0, -2 * i],
						['z'],
					]
				);
			}
			var i,
				E = /[, ]+/,
				a = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
				n = /\{(\d+)\}/g,
				L = 'hasOwnProperty',
				d = { doc: document, win: t },
				r = {
					was: Object.prototype[L].call(d.win, 'Raphael'),
					is: d.win.Raphael,
				},
				o = function () {
					this.ca = this.customAttributes = {};
				},
				x = 'apply',
				M = 'concat',
				g =
					'ontouchstart' in d.win ||
					(d.win.DocumentTouch && d.doc instanceof DocumentTouch),
				w = ' ',
				P = String,
				z = 'split',
				l =
					'click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel'[
						z
					](w),
				h = {
					mousedown: 'touchstart',
					mousemove: 'touchmove',
					mouseup: 'touchend',
				},
				y = P.prototype.toLowerCase,
				B = Math,
				_ = B.max,
				k = B.min,
				S = B.abs,
				m = B.pow,
				T = B.PI,
				F = 'number',
				u = 'string',
				v = 'array',
				c = Object.prototype.toString,
				f =
					((j._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i),
					/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
				p = { NaN: 1, Infinity: 1, '-Infinity': 1 },
				R = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
				C = B.round,
				I = parseFloat,
				b = parseInt,
				A = P.prototype.toUpperCase,
				q = (j._availableAttrs = {
					'arrow-end': 'none',
					'arrow-start': 'none',
					blur: 0,
					'clip-rect': '0 0 1e9 1e9',
					cursor: 'default',
					cx: 0,
					cy: 0,
					fill: '#fff',
					'fill-opacity': 1,
					font: '10px "Arial"',
					'font-family': '"Arial"',
					'font-size': '10',
					'font-style': 'normal',
					'font-weight': 400,
					gradient: 0,
					height: 0,
					href: 'http://raphaeljs.com/',
					'letter-spacing': 0,
					opacity: 1,
					path: 'M0,0',
					r: 0,
					rx: 0,
					ry: 0,
					src: '',
					stroke: '#000',
					'stroke-dasharray': '',
					'stroke-linecap': 'butt',
					'stroke-linejoin': 'butt',
					'stroke-miterlimit': 0,
					'stroke-opacity': 1,
					'stroke-width': 1,
					target: '_blank',
					'text-anchor': 'middle',
					title: 'Raphael',
					transform: '',
					width: 0,
					x: 0,
					y: 0,
				}),
				D = (j._availableAnimAttrs = {
					blur: F,
					'clip-rect': 'csv',
					cx: F,
					cy: F,
					fill: 'colour',
					'fill-opacity': F,
					'font-size': F,
					height: F,
					opacity: F,
					path: 'path',
					r: F,
					rx: F,
					ry: F,
					stroke: 'colour',
					'stroke-opacity': F,
					'stroke-width': F,
					transform: 'transform',
					width: F,
					x: F,
					y: F,
				}),
				V =
					/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
				O = { hs: 1, rg: 1 },
				Y = /,?([achlmqrstvxz]),?/gi,
				G =
					/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
				W =
					/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
				X =
					/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
				H =
					((j._radial_gradient =
						/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
					{}),
				U = function (t) {
					return t;
				},
				$ = (j._rectPath = function (t, e, r, i, n) {
					return n
						? [
								['M', t + n, e],
								['l', r - 2 * n, 0],
								['a', n, n, 0, 0, 1, n, n],
								['l', 0, i - 2 * n],
								['a', n, n, 0, 0, 1, -n, n],
								['l', 2 * n - r, 0],
								['a', n, n, 0, 0, 1, -n, -n],
								['l', 0, 2 * n - i],
								['a', n, n, 0, 0, 1, n, -n],
								['z'],
						  ]
						: [['M', t, e], ['l', r, 0], ['l', 0, i], ['l', -r, 0], ['z']];
				}),
				Z = (j._getPath = {
					path: function (t) {
						return t.attr('path');
					},
					circle: function (t) {
						t = t.attrs;
						return e(t.cx, t.cy, t.r);
					},
					ellipse: function (t) {
						t = t.attrs;
						return e(t.cx, t.cy, t.rx, t.ry);
					},
					rect: function (t) {
						t = t.attrs;
						return $(t.x, t.y, t.width, t.height, t.r);
					},
					image: function (t) {
						t = t.attrs;
						return $(t.x, t.y, t.width, t.height);
					},
					text: function (t) {
						t = t._getBBox();
						return $(t.x, t.y, t.width, t.height);
					},
					set: function (t) {
						t = t._getBBox();
						return $(t.x, t.y, t.width, t.height);
					},
				}),
				Q = (j.mapPath = function (t, e) {
					if (!e) return t;
					for (var r, i, n, s, a, o = 0, l = (t = Ct(t)).length; o < l; o++)
						for (n = 1, s = (a = t[o]).length; n < s; n += 2)
							(r = e.x(a[n], a[n + 1])),
								(i = e.y(a[n], a[n + 1])),
								(a[n] = r),
								(a[n + 1] = i);
					return t;
				});
			if (
				((j._g = d),
				(j.type =
					d.win.SVGAngle ||
					d.doc.implementation.hasFeature(
						'http://www.w3.org/TR/SVG11/feature#BasicStructure',
						'1.1',
					)
						? 'SVG'
						: 'VML'),
				'VML' == j.type)
			) {
				var J,
					K = d.doc.createElement('div');
				if (
					((K.innerHTML = '<v:shape adj="1"/>'),
					((J = K.firstChild).style.behavior = 'url(#default#VML)'),
					!J || 'object' != typeof J.adj)
				)
					return (j.type = '');
				K = null;
			}
			function tt(t) {
				if ('function' == typeof t || Object(t) !== t) return t;
				var e,
					r = new t.constructor();
				for (e in t) t[L](e) && (r[e] = tt(t[e]));
				return r;
			}
			(j.svg = !(j.vml = 'VML' == j.type)),
				(j._Paper = o),
				(j.fn = K = o.prototype = j.prototype),
				(j._id = 0),
				(j._oid = 0),
				(j.is = function (t, e) {
					return 'finite' == (e = y.call(e))
						? !p[L](+t)
						: 'array' == e
						? t instanceof Array
						: ('null' == e && null === t) ||
						  (e == typeof t && null !== t) ||
						  ('object' == e && t === Object(t)) ||
						  ('array' == e && Array.isArray && Array.isArray(t)) ||
						  c.call(t).slice(8, -1).toLowerCase() == e;
				}),
				(j.angle = function (t, e, r, i, n, s) {
					if (null != n) return j.angle(t, e, n, s) - j.angle(r, i, n, s);
					(r = t - r), (i = e - i);
					return r || i ? (180 + (180 * B.atan2(-i, -r)) / T + 360) % 360 : 0;
				}),
				(j.rad = function (t) {
					return ((t % 360) * T) / 180;
				}),
				(j.deg = function (t) {
					return ((180 * t) / T) % 360;
				}),
				(j.snapTo = function (t, e, r) {
					if (((r = j.is(r, 'finite') ? r : 10), j.is(t, v))) {
						for (var i = t.length; i--; ) if (S(t[i] - e) <= r) return t[i];
					} else {
						var n = e % (t = +t);
						if (n < r) return e - n;
						if (t - r < n) return e - n + t;
					}
					return e;
				});
			j.createUUID = (function (t, e) {
				return function () {
					return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
						.replace(t, e)
						.toUpperCase();
				};
			})(/[xy]/g, function (t) {
				var e = (16 * B.random()) | 0;
				return ('x' == t ? e : (3 & e) | 8).toString(16);
			});
			j.setWindow = function (t) {
				N('raphael.setWindow', j, d.win, t),
					(d.win = t),
					(d.doc = d.win.document),
					j._engine.initWin && j._engine.initWin(d.win);
			};
			function et() {
				return 'hsb(' + [this.h, this.s, this.b] + ')';
			}
			function rt() {
				return 'hsl(' + [this.h, this.s, this.l] + ')';
			}
			function it() {
				return this.hex;
			}
			function nt(t, e, r) {
				var i;
				return (
					null == e &&
						j.is(t, 'object') &&
						'r' in t &&
						'g' in t &&
						'b' in t &&
						((r = t.b), (e = t.g), (t = t.r)),
					null == e &&
						j.is(t, u) &&
						((t = (i = j.getRGB(t)).r), (e = i.g), (r = i.b)),
					(1 < t || 1 < e || 1 < r) && ((t /= 255), (e /= 255), (r /= 255)),
					[t, e, r]
				);
			}
			function st(t, e, r, i) {
				return (
					(r = {
						r: (t *= 255),
						g: (e *= 255),
						b: (r *= 255),
						hex: j.rgb(t, e, r),
						toString: it,
					}),
					j.is(i, 'finite') && (r.opacity = i),
					r
				);
			}
			var at = function (t) {
				if (j.vml) {
					var r,
						i = /^\s+|\s+$/g;
					try {
						var e = new ActiveXObject('htmlfile');
						e.write('<body>'), e.close(), (r = e.body);
					} catch (t) {
						r = createPopup().document.body;
					}
					var n = r.createTextRange();
					at = ot(function (t) {
						try {
							r.style.color = P(t).replace(i, '');
							var e = n.queryCommandValue('ForeColor');
							return (
								'#' +
								(
									'000000' +
									(e =
										((255 & e) << 16) |
										(65280 & e) |
										((16711680 & e) >>> 16)).toString(16)
								).slice(-6)
							);
						} catch (t) {
							return 'none';
						}
					});
				} else {
					var s = d.doc.createElement('i');
					(s.title = 'Raphaël Colour Picker'),
						(s.style.display = 'none'),
						d.doc.body.appendChild(s),
						(at = ot(function (t) {
							return (
								(s.style.color = t),
								d.doc.defaultView
									.getComputedStyle(s, '')
									.getPropertyValue('color')
							);
						}));
				}
				return at(t);
			};
			function ot(n, s, a) {
				function o() {
					var t = Array.prototype.slice.call(arguments, 0),
						e = t.join('␀'),
						r = (o.cache = o.cache || {}),
						i = (o.count = o.count || []);
					return (
						r[L](e)
							? (function (t, e) {
									for (var r = 0, i = t.length; r < i; r++)
										if (t[r] === e) return t.push(t.splice(r, 1)[0]);
							  })(i, e)
							: (1e3 <= i.length && delete r[i.shift()],
							  i.push(e),
							  (r[e] = n[x](s, t))),
						a ? a(r[e]) : r[e]
					);
				}
				return o;
			}
			(j.color = function (t) {
				var e;
				return (
					j.is(t, 'object') && 'h' in t && 's' in t && 'b' in t
						? ((e = j.hsb2rgb(t)),
						  (t.r = e.r),
						  (t.g = e.g),
						  (t.b = e.b),
						  (t.hex = e.hex))
						: j.is(t, 'object') && 'h' in t && 's' in t && 'l' in t
						? ((e = j.hsl2rgb(t)),
						  (t.r = e.r),
						  (t.g = e.g),
						  (t.b = e.b),
						  (t.hex = e.hex))
						: (j.is(t, 'string') && (t = j.getRGB(t)),
						  j.is(t, 'object') && 'r' in t && 'g' in t && 'b' in t
								? ((e = j.rgb2hsl(t)),
								  (t.h = e.h),
								  (t.s = e.s),
								  (t.l = e.l),
								  (e = j.rgb2hsb(t)),
								  (t.v = e.b))
								: ((t = { hex: 'none' }).r =
										t.g =
										t.b =
										t.h =
										t.s =
										t.v =
										t.l =
											-1)),
					(t.toString = it),
					t
				);
			}),
				(j.hsb2rgb = function (t, e, r, i) {
					var n, s, a;
					return (
						this.is(t, 'object') &&
							'h' in t &&
							's' in t &&
							'b' in t &&
							((r = t.b), (e = t.s), (i = (t = t.h).o)),
						(s =
							(a = r * e) * (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
						(r = e = n = r - a),
						st(
							(r += [a, s, 0, 0, s, a][(t = ~~t)]),
							(e += [s, a, a, s, 0, 0][t]),
							(n += [0, 0, s, a, a, s][t]),
							i,
						)
					);
				}),
				(j.hsl2rgb = function (t, e, r, i) {
					var n, s, a;
					return (
						this.is(t, 'object') &&
							'h' in t &&
							's' in t &&
							'l' in t &&
							((r = t.l), (e = t.s), (t = t.h)),
						(1 < t || 1 < e || 1 < r) && ((t /= 360), (e /= 100), (r /= 100)),
						(s =
							(a = 2 * e * (r < 0.5 ? r : 1 - r)) *
							(1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
						(r = e = n = r - a / 2),
						st(
							(r += [a, s, 0, 0, s, a][(t = ~~t)]),
							(e += [s, a, a, s, 0, 0][t]),
							(n += [0, 0, s, a, a, s][t]),
							i,
						)
					);
				}),
				(j.rgb2hsb = function (t, e, r) {
					var i, n;
					return (
						(t = (r = nt(t, e, r))[0]),
						(e = r[1]),
						(r = r[2]),
						{
							h:
								((((0 == (n = (i = _(t, e, r)) - k(t, e, r))
									? null
									: i == t
									? (e - r) / n
									: i == e
									? (r - t) / n + 2
									: (t - e) / n + 4) +
									360) %
									6) *
									60) /
								360,
							s: 0 == n ? 0 : n / i,
							b: i,
							toString: et,
						}
					);
				}),
				(j.rgb2hsl = function (t, e, r) {
					var i, n, s;
					return (
						(t = (r = nt(t, e, r))[0]),
						(e = r[1]),
						(r = r[2]),
						(i = ((n = _(t, e, r)) + (s = k(t, e, r))) / 2),
						{
							h:
								((((0 == (s = n - s)
									? null
									: n == t
									? (e - r) / s
									: n == e
									? (r - t) / s + 2
									: (t - e) / s + 4) +
									360) %
									6) *
									60) /
								360,
							s: 0 == s ? 0 : i < 0.5 ? s / (2 * i) : s / (2 - 2 * i),
							l: i,
							toString: rt,
						}
					);
				}),
				(j._path2string = function () {
					return this.join(',').replace(Y, '$1');
				});
			j._preload = function (t, e) {
				var r = d.doc.createElement('img');
				(r.style.cssText = 'position:absolute;left:-9999em;top:-9999em'),
					(r.onload = function () {
						e.call(this), (this.onload = null), d.doc.body.removeChild(this);
					}),
					(r.onerror = function () {
						d.doc.body.removeChild(this);
					}),
					d.doc.body.appendChild(r),
					(r.src = t);
			};
			function lt() {
				return this.hex;
			}
			function ht(t, e) {
				for (var r = [], i = 0, n = t.length; i < n - 2 * !e; i += 2) {
					var s = [
						{ x: +t[i - 2], y: +t[i - 1] },
						{ x: +t[i], y: +t[i + 1] },
						{ x: +t[i + 2], y: +t[i + 3] },
						{ x: +t[i + 4], y: +t[i + 5] },
					];
					e
						? i
							? n - 4 == i
								? (s[3] = { x: +t[0], y: +t[1] })
								: n - 2 == i &&
								  ((s[2] = { x: +t[0], y: +t[1] }),
								  (s[3] = { x: +t[2], y: +t[3] }))
							: (s[0] = { x: +t[n - 2], y: +t[n - 1] })
						: n - 4 == i
						? (s[3] = s[2])
						: i || (s[0] = { x: +t[i], y: +t[i + 1] }),
						r.push([
							'C',
							(-s[0].x + 6 * s[1].x + s[2].x) / 6,
							(-s[0].y + 6 * s[1].y + s[2].y) / 6,
							(s[1].x + 6 * s[2].x - s[3].x) / 6,
							(s[1].y + 6 * s[2].y - s[3].y) / 6,
							s[2].x,
							s[2].y,
						]);
				}
				return r;
			}
			(j.getRGB = ot(function (t) {
				if (!t || (t = P(t)).indexOf('-') + 1)
					return { r: -1, g: -1, b: -1, hex: 'none', error: 1, toString: lt };
				if ('none' == t)
					return { r: -1, g: -1, b: -1, hex: 'none', toString: lt };
				O[L](t.toLowerCase().substring(0, 2)) ||
					'#' == t.charAt() ||
					(t = at(t));
				var e,
					r,
					i,
					n,
					s,
					a = t.match(f);
				return a
					? (a[2] &&
							((i = b(a[2].substring(5), 16)),
							(r = b(a[2].substring(3, 5), 16)),
							(e = b(a[2].substring(1, 3), 16))),
					  a[3] &&
							((i = b((t = a[3].charAt(3)) + t, 16)),
							(r = b((t = a[3].charAt(2)) + t, 16)),
							(e = b((t = a[3].charAt(1)) + t, 16))),
					  a[4] &&
							((s = a[4][z](V)),
							(e = I(s[0])),
							'%' == s[0].slice(-1) && (e *= 2.55),
							(r = I(s[1])),
							'%' == s[1].slice(-1) && (r *= 2.55),
							(i = I(s[2])),
							'%' == s[2].slice(-1) && (i *= 2.55),
							'rgba' == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
							s[3] && '%' == s[3].slice(-1) && (n /= 100)),
					  a[5]
							? ((s = a[5][z](V)),
							  (e = I(s[0])),
							  '%' == s[0].slice(-1) && (e *= 2.55),
							  (r = I(s[1])),
							  '%' == s[1].slice(-1) && (r *= 2.55),
							  (i = I(s[2])),
							  '%' == s[2].slice(-1) && (i *= 2.55),
							  ('deg' != s[0].slice(-3) && '°' != s[0].slice(-1)) ||
									(e /= 360),
							  'hsba' == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
							  s[3] && '%' == s[3].slice(-1) && (n /= 100),
							  j.hsb2rgb(e, r, i, n))
							: a[6]
							? ((s = a[6][z](V)),
							  (e = I(s[0])),
							  '%' == s[0].slice(-1) && (e *= 2.55),
							  (r = I(s[1])),
							  '%' == s[1].slice(-1) && (r *= 2.55),
							  (i = I(s[2])),
							  '%' == s[2].slice(-1) && (i *= 2.55),
							  ('deg' != s[0].slice(-3) && '°' != s[0].slice(-1)) ||
									(e /= 360),
							  'hsla' == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
							  s[3] && '%' == s[3].slice(-1) && (n /= 100),
							  j.hsl2rgb(e, r, i, n))
							: (((a = { r: e, g: r, b: i, toString: lt }).hex =
									'#' +
									(16777216 | i | (r << 8) | (e << 16)).toString(16).slice(1)),
							  j.is(n, 'finite') && (a.opacity = n),
							  a))
					: { r: -1, g: -1, b: -1, hex: 'none', error: 1, toString: lt };
			}, j)),
				(j.hsb = ot(function (t, e, r) {
					return j.hsb2rgb(t, e, r).hex;
				})),
				(j.hsl = ot(function (t, e, r) {
					return j.hsl2rgb(t, e, r).hex;
				})),
				(j.rgb = ot(function (t, e, r) {
					return (
						'#' + (16777216 | r | (e << 8) | (t << 16)).toString(16).slice(1)
					);
				})),
				(j.getColor = function (t) {
					var e = (this.getColor.start = this.getColor.start || {
							h: 0,
							s: 1,
							b: t || 0.75,
						}),
						t = this.hsb2rgb(e.h, e.s, e.b);
					return (
						(e.h += 0.075),
						1 < e.h &&
							((e.h = 0),
							(e.s -= 0.2),
							e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })),
						t.hex
					);
				}),
				(j.getColor.reset = function () {
					delete this.start;
				}),
				(j.parsePathString = function (t) {
					if (!t) return null;
					var e = ut(t);
					if (e.arr) return bt(e.arr);
					var s = {
							a: 7,
							c: 6,
							h: 1,
							l: 2,
							m: 2,
							r: 4,
							q: 4,
							s: 4,
							t: 2,
							v: 1,
							z: 0,
						},
						a = [];
					return (
						j.is(t, v) && j.is(t[0], v) && (a = bt(t)),
						a.length ||
							P(t).replace(G, function (t, e, r) {
								var i = [],
									n = e.toLowerCase();
								if (
									(r.replace(X, function (t, e) {
										e && i.push(+e);
									}),
									'm' == n &&
										2 < i.length &&
										(a.push([e][M](i.splice(0, 2))),
										(n = 'l'),
										(e = 'm' == e ? 'l' : 'L')),
									'r' == n)
								)
									a.push([e][M](i));
								else
									for (
										;
										i.length >= s[n] &&
										(a.push([e][M](i.splice(0, s[n]))), s[n]);

									);
							}),
						(a.toString = j._path2string),
						(e.arr = bt(a)),
						a
					);
				}),
				(j.parseTransformString = ot(function (t) {
					if (!t) return null;
					var n = [];
					return (
						j.is(t, v) && j.is(t[0], v) && (n = bt(t)),
						n.length ||
							P(t).replace(W, function (t, e, r) {
								var i = [];
								y.call(e);
								r.replace(X, function (t, e) {
									e && i.push(+e);
								}),
									n.push([e][M](i));
							}),
						(n.toString = j._path2string),
						n
					);
				}));
			var ut = function (e) {
				var r = (ut.ps = ut.ps || {});
				return (
					r[e] ? (r[e].sleep = 100) : (r[e] = { sleep: 100 }),
					setTimeout(function () {
						for (var t in r)
							r[L](t) && t != e && (r[t].sleep--, r[t].sleep || delete r[t]);
					}),
					r[e]
				);
			};
			function ct(t, e, r, i, n) {
				return (
					t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) -
					3 * e +
					3 * r
				);
			}
			function ft(t, e, r, i, n, s, a, o, l) {
				null == l && (l = 1);
				for (
					var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2,
						u = [
							-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
							0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
						],
						c = [
							0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
							0.1069, 0.1069, 0.0472, 0.0472,
						],
						f = 0,
						p = 0;
					p < 12;
					p++
				) {
					var d = h * u[p] + h,
						g = ct(d, t, r, n, a),
						d = ct(d, e, i, s, o),
						d = g * g + d * d;
					f += c[p] * B.sqrt(d);
				}
				return h * f;
			}
			function pt(t, e, r) {
				var i = j.bezierBBox(t),
					n = j.bezierBBox(e);
				if (!j.isBBoxIntersect(i, n)) return r ? 0 : [];
				for (
					var i = ft.apply(0, t),
						n = ft.apply(0, e),
						s = _(~~(i / 5), 1),
						a = _(~~(n / 5), 1),
						o = [],
						l = [],
						h = {},
						u = r ? 0 : [],
						c = 0;
					c < s + 1;
					c++
				) {
					var f = j.findDotsAtSegment.apply(j, t.concat(c / s));
					o.push({ x: f.x, y: f.y, t: c / s });
				}
				for (c = 0; c < a + 1; c++)
					(f = j.findDotsAtSegment.apply(j, e.concat(c / a))),
						l.push({ x: f.x, y: f.y, t: c / a });
				for (c = 0; c < s; c++)
					for (var p = 0; p < a; p++) {
						var d = o[c],
							g = o[c + 1],
							x = l[p],
							y = l[p + 1],
							m = S(g.x - d.x) < 0.001 ? 'y' : 'x',
							v = S(y.x - x.x) < 0.001 ? 'y' : 'x',
							b = (function (t, e, r, i, n, s, a, o) {
								if (
									!(
										_(t, r) < k(n, a) ||
										k(t, r) > _(n, a) ||
										_(e, i) < k(s, o) ||
										k(e, i) > _(s, o)
									)
								) {
									var l = (t * i - e * r) * (n - a) - (t - r) * (n * o - s * a),
										h = (t * i - e * r) * (s - o) - (e - i) * (n * o - s * a),
										u = (t - r) * (s - o) - (e - i) * (n - a);
									if (u) {
										var c = l / u,
											l = h / u,
											h = +c.toFixed(2),
											u = +l.toFixed(2);
										if (
											!(
												h < +k(t, r).toFixed(2) ||
												h > +_(t, r).toFixed(2) ||
												h < +k(n, a).toFixed(2) ||
												h > +_(n, a).toFixed(2) ||
												u < +k(e, i).toFixed(2) ||
												u > +_(e, i).toFixed(2) ||
												u < +k(s, o).toFixed(2) ||
												u > +_(s, o).toFixed(2)
											)
										)
											return { x: c, y: l };
									}
								}
							})(d.x, d.y, g.x, g.y, x.x, x.y, y.x, y.y);
						b &&
							h[b.x.toFixed(4)] != b.y.toFixed(4) &&
							((h[b.x.toFixed(4)] = b.y.toFixed(4)),
							(d = d.t + S((b[m] - d[m]) / (g[m] - d[m])) * (g.t - d.t)),
							(x = x.t + S((b[v] - x[v]) / (y[v] - x[v])) * (y.t - x.t)),
							0 <= d &&
								d <= 1.001 &&
								0 <= x &&
								x <= 1.001 &&
								(r
									? u++
									: u.push({ x: b.x, y: b.y, t1: k(d, 1), t2: k(x, 1) })));
					}
				return u;
			}
			function dt(t, e, r) {
				(t = j._path2curve(t)), (e = j._path2curve(e));
				for (
					var i, n, s, a, o, l, h, u, c, f, p = r ? 0 : [], d = 0, g = t.length;
					d < g;
					d++
				) {
					var x = t[d];
					if ('M' == x[0]) (i = o = x[1]), (n = l = x[2]);
					else {
						n =
							'C' == x[0]
								? ((i = (c = [i, n].concat(x.slice(1)))[6]), c[7])
								: ((c = [i, n, i, n, o, l, o, l]), (i = o), l);
						for (var y = 0, m = e.length; y < m; y++) {
							var v = e[y];
							if ('M' == v[0]) (s = h = v[1]), (a = u = v[2]);
							else {
								a =
									'C' == v[0]
										? ((s = (f = [s, a].concat(v.slice(1)))[6]), f[7])
										: ((f = [s, a, s, a, h, u, h, u]), (s = h), u);
								var b = pt(c, f, r);
								if (r) p += b;
								else {
									for (var _ = 0, w = b.length; _ < w; _++)
										(b[_].segment1 = d),
											(b[_].segment2 = y),
											(b[_].bez1 = c),
											(b[_].bez2 = f);
									p = p.concat(b);
								}
							}
						}
					}
				}
				return p;
			}
			(j.findDotsAtSegment = function (t, e, r, i, n, s, a, o, l) {
				var h = 1 - l,
					u = m(h, 3),
					c = m(h, 2),
					f = l * l,
					p = f * l,
					d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * a,
					g = u * e + 3 * c * l * i + 3 * h * l * l * s + p * o,
					u = t + 2 * l * (r - t) + f * (n - 2 * r + t),
					c = e + 2 * l * (i - e) + f * (s - 2 * i + e),
					p = r + 2 * l * (n - r) + f * (a - 2 * n + r),
					f = i + 2 * l * (s - i) + f * (o - 2 * s + i),
					r = h * t + l * r,
					i = h * e + l * i,
					a = h * n + l * a,
					l = h * s + l * o,
					o = 90 - (180 * B.atan2(u - p, c - f)) / T;
				return (
					(p < u || c < f) && (o += 180),
					{
						x: d,
						y: g,
						m: { x: u, y: c },
						n: { x: p, y: f },
						start: { x: r, y: i },
						end: { x: a, y: l },
						alpha: o,
					}
				);
			}),
				(j.bezierBBox = function (t, e, r, i, n, s, a, o) {
					j.is(t, 'array') || (t = [t, e, r, i, n, s, a, o]);
					t = kt.apply(null, t);
					return {
						x: t.min.x,
						y: t.min.y,
						x2: t.max.x,
						y2: t.max.y,
						width: t.max.x - t.min.x,
						height: t.max.y - t.min.y,
					};
				}),
				(j.isPointInsideBBox = function (t, e, r) {
					return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
				}),
				(j.isBBoxIntersect = function (t, e) {
					var r = j.isPointInsideBBox;
					return (
						r(e, t.x, t.y) ||
						r(e, t.x2, t.y) ||
						r(e, t.x, t.y2) ||
						r(e, t.x2, t.y2) ||
						r(t, e.x, e.y) ||
						r(t, e.x2, e.y) ||
						r(t, e.x, e.y2) ||
						r(t, e.x2, e.y2) ||
						(((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
							((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
					);
				}),
				(j.pathIntersection = function (t, e) {
					return dt(t, e);
				}),
				(j.pathIntersectionNumber = function (t, e) {
					return dt(t, e, 1);
				}),
				(j.isPointInsidePath = function (t, e, r) {
					var i = j.pathBBox(t);
					return (
						j.isPointInsideBBox(i, e, r) &&
						dt(
							t,
							[
								['M', e, r],
								['H', i.x2 + 10],
							],
							1,
						) %
							2 ==
							1
					);
				}),
				(j._removedFactory = function (t) {
					return function () {
						N(
							'raphael.log',
							null,
							'Raphaël: you are calling to method “' +
								t +
								'” of removed object',
							t,
						);
					};
				});
			function gt(t, e, r, i) {
				return [t, e, r, i, r, i];
			}
			function xt(t, e, r, i, n, s) {
				return [
					(1 / 3) * t + (2 / 3) * r,
					(1 / 3) * e + (2 / 3) * i,
					(1 / 3) * n + (2 / 3) * r,
					(1 / 3) * s + (2 / 3) * i,
					n,
					s,
				];
			}
			function yt(t, e, r, i, n, s, a, o, l) {
				var h = 1 - l;
				return {
					x:
						m(h, 3) * t + 3 * m(h, 2) * l * r + 3 * h * l * l * n + m(l, 3) * a,
					y:
						m(h, 3) * e + 3 * m(h, 2) * l * i + 3 * h * l * l * s + m(l, 3) * o,
				};
			}
			function mt(t) {
				var e = t[0];
				switch (e.toLowerCase()) {
					case 't':
						return [e, 0, 0];
					case 'm':
						return [e, 1, 0, 0, 1, 0, 0];
					case 'r':
						return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
					case 's':
						return 5 == t.length
							? [e, 1, 1, t[3], t[4]]
							: 3 == t.length
							? [e, 1, 1]
							: [e, 1];
				}
			}
			var vt = (j.pathBBox = function (t) {
					var e = ut(t);
					if (e.bbox) return tt(e.bbox);
					if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
					for (
						var r,
							i,
							n = 0,
							s = 0,
							a = [],
							o = [],
							l = 0,
							h = (t = Ct(t)).length;
						l < h;
						l++
					)
						'M' == (i = t[l])[0]
							? ((n = i[1]), (s = i[2]), a.push(n), o.push(s))
							: ((r = kt(n, s, i[1], i[2], i[3], i[4], i[5], i[6])),
							  (a = a[M](r.min.x, r.max.x)),
							  (o = o[M](r.min.y, r.max.y)),
							  (n = i[5]),
							  (s = i[6]));
					var u = k[x](0, a),
						c = k[x](0, o),
						f = _[x](0, a),
						p = _[x](0, o),
						d = f - u,
						g = p - c,
						g = {
							x: u,
							y: c,
							x2: f,
							y2: p,
							width: d,
							height: g,
							cx: u + d / 2,
							cy: c + g / 2,
						};
					return (e.bbox = tt(g)), g;
				}),
				bt = function (t) {
					t = tt(t);
					return (t.toString = j._path2string), t;
				},
				o = (j._pathToRelative = function (t) {
					var e = ut(t);
					if (e.rel) return bt(e.rel);
					(j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t));
					var r = [],
						i = 0,
						n = 0,
						s = 0,
						a = 0,
						o = 0;
					'M' == t[0][0] &&
						((s = i = t[0][1]), (a = n = t[0][2]), o++, r.push(['M', i, n]));
					for (var l = o, h = t.length; l < h; l++) {
						var u = (r[l] = []),
							c = t[l];
						if (c[0] != y.call(c[0]))
							switch (((u[0] = y.call(c[0])), u[0])) {
								case 'a':
									(u[1] = c[1]),
										(u[2] = c[2]),
										(u[3] = c[3]),
										(u[4] = c[4]),
										(u[5] = c[5]),
										(u[6] = +(c[6] - i).toFixed(3)),
										(u[7] = +(c[7] - n).toFixed(3));
									break;
								case 'v':
									u[1] = +(c[1] - n).toFixed(3);
									break;
								case 'm':
									(s = c[1]), (a = c[2]);
								default:
									for (var f = 1, p = c.length; f < p; f++)
										u[f] = +(c[f] - (f % 2 ? i : n)).toFixed(3);
							}
						else {
							(u = r[l] = []), 'm' == c[0] && ((s = c[1] + i), (a = c[2] + n));
							for (var d = 0, g = c.length; d < g; d++) r[l][d] = c[d];
						}
						var x = r[l].length;
						switch (r[l][0]) {
							case 'z':
								(i = s), (n = a);
								break;
							case 'h':
								i += +r[l][x - 1];
								break;
							case 'v':
								n += +r[l][x - 1];
								break;
							default:
								(i += +r[l][x - 2]), (n += +r[l][x - 1]);
						}
					}
					return (r.toString = j._path2string), (e.rel = bt(r)), r;
				}),
				_t = (j._pathToAbsolute = function (t) {
					var e = ut(t);
					if (e.abs) return bt(e.abs);
					if (
						((j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t)),
						!t || !t.length)
					)
						return [['M', 0, 0]];
					var r = [],
						i = 0,
						n = 0,
						s = 0,
						a = 0,
						o = 0;
					'M' == t[0][0] &&
						((s = i = +t[0][1]), (a = n = +t[0][2]), o++, (r[0] = ['M', i, n]));
					for (
						var l,
							h,
							u =
								3 == t.length &&
								'M' == t[0][0] &&
								'R' == t[1][0].toUpperCase() &&
								'Z' == t[2][0].toUpperCase(),
							c = o,
							f = t.length;
						c < f;
						c++
					) {
						if ((r.push((l = [])), (h = t[c])[0] != A.call(h[0])))
							switch (((l[0] = A.call(h[0])), l[0])) {
								case 'A':
									(l[1] = h[1]),
										(l[2] = h[2]),
										(l[3] = h[3]),
										(l[4] = h[4]),
										(l[5] = h[5]),
										(l[6] = +(h[6] + i)),
										(l[7] = +(h[7] + n));
									break;
								case 'V':
									l[1] = +h[1] + n;
									break;
								case 'H':
									l[1] = +h[1] + i;
									break;
								case 'R':
									for (
										var p = [i, n][M](h.slice(1)), d = 2, g = p.length;
										d < g;
										d++
									)
										(p[d] = +p[d] + i), (p[++d] = +p[d] + n);
									r.pop(), (r = r[M](ht(p, u)));
									break;
								case 'M':
									(s = +h[1] + i), (a = +h[2] + n);
								default:
									for (d = 1, g = h.length; d < g; d++)
										l[d] = +h[d] + (d % 2 ? i : n);
							}
						else if ('R' == h[0])
							(p = [i, n][M](h.slice(1))),
								r.pop(),
								(r = r[M](ht(p, u))),
								(l = ['R'][M](h.slice(-2)));
						else for (var x = 0, y = h.length; x < y; x++) l[x] = h[x];
						switch (l[0]) {
							case 'Z':
								(i = s), (n = a);
								break;
							case 'H':
								i = l[1];
								break;
							case 'V':
								n = l[1];
								break;
							case 'M':
								(s = l[l.length - 2]), (a = l[l.length - 1]);
							default:
								(i = l[l.length - 2]), (n = l[l.length - 1]);
						}
					}
					return (r.toString = j._path2string), (e.abs = bt(r)), r;
				}),
				wt = function (t, e, r, i, n, s, a, o, l, h) {
					var u = (120 * T) / 180,
						c = (T / 180) * (+n || 0),
						f = [],
						p = ot(function (t, e, r) {
							return {
								x: t * B.cos(r) - e * B.sin(r),
								y: t * B.sin(r) + e * B.cos(r),
							};
						});
					h
						? ((b = h[0]), (_ = h[1]), (m = h[2]), (v = h[3]))
						: ((t = (g = p(t, e, -c)).x),
						  (e = g.y),
						  (o = (g = p(o, l, -c)).x),
						  (l = g.y),
						  B.cos((T / 180) * n),
						  B.sin((T / 180) * n),
						  1 <
								(y =
									((x = (t - o) / 2) * x) / (r * r) +
									((d = (e - l) / 2) * d) / (i * i)) &&
								((r *= y = B.sqrt(y)), (i *= y)),
						  (g = r * r),
						  (y = i * i),
						  (m =
								((g =
									(s == a ? -1 : 1) *
									B.sqrt(
										S(
											(g * y - g * d * d - y * x * x) / (g * d * d + y * x * x),
										),
									)) *
									r *
									d) /
									i +
								(t + o) / 2),
						  (v = (g * -i * x) / r + (e + l) / 2),
						  (b = B.asin(((e - v) / i).toFixed(9))),
						  (_ = B.asin(((l - v) / i).toFixed(9))),
						  (b = t < m ? T - b : b) < 0 && (b = 2 * T + b),
						  (_ = o < m ? T - _ : _) < 0 && (_ = 2 * T + _),
						  a && _ < b && (b -= 2 * T),
						  !a && b < _ && (_ -= 2 * T));
					var d,
						g,
						x,
						y = _ - b;
					S(y) > u &&
						((d = _),
						(g = o),
						(x = l),
						(_ = b + u * (a && b < _ ? 1 : -1)),
						(o = m + r * B.cos(_)),
						(l = v + i * B.sin(_)),
						(f = wt(o, l, r, i, n, 0, a, g, x, [_, d, m, v]))),
						(y = _ - b);
					var m = B.cos(b),
						v = B.sin(b),
						b = B.cos(_),
						_ = B.sin(_),
						y = B.tan(y / 4),
						r = (4 / 3) * r * y,
						i = (4 / 3) * i * y,
						y = [t, e],
						m = [t + r * v, e - i * m],
						b = [o + r * _, l - i * b],
						l = [o, l];
					if (((m[0] = 2 * y[0] - m[0]), (m[1] = 2 * y[1] - m[1]), h))
						return [m, b, l][M](f);
					for (
						var w = [], k = 0, C = (f = [m, b, l][M](f).join()[z](',')).length;
						k < C;
						k++
					)
						w[k] = k % 2 ? p(f[k - 1], f[k], c).y : p(f[k], f[k + 1], c).x;
					return w;
				},
				kt = ot(function (t, e, r, i, n, s, a, o) {
					var l,
						h = n - 2 * r + t - (a - 2 * n + r),
						u = 2 * (r - t) - 2 * (n - r),
						c = t - r,
						f = (-u + B.sqrt(u * u - 4 * h * c)) / 2 / h,
						p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h,
						d = [e, o],
						g = [t, a];
					return (
						'1e12' < S(f) && (f = 0.5),
						'1e12' < S(p) && (p = 0.5),
						0 < f &&
							f < 1 &&
							((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
						0 < p &&
							p < 1 &&
							((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
						(h = s - 2 * i + e - (o - 2 * s + i)),
						(c = e - i),
						(f =
							(-(u = 2 * (i - e) - 2 * (s - i)) + B.sqrt(u * u - 4 * h * c)) /
							2 /
							h),
						(p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h),
						'1e12' < S(f) && (f = 0.5),
						'1e12' < S(p) && (p = 0.5),
						0 < f &&
							f < 1 &&
							((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
						0 < p &&
							p < 1 &&
							((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
						{
							min: { x: k[x](0, g), y: k[x](0, d) },
							max: { x: _[x](0, g), y: _[x](0, d) },
						}
					);
				}),
				Ct = (j._path2curve = ot(
					function (t, e) {
						var r = !e && ut(t);
						if (!e && r.curve) return bt(r.curve);
						function i(t, e, r) {
							var i, n;
							if (!t) return ['C', e.x, e.y, e.x, e.y, e.x, e.y];
							switch ((t[0] in { T: 1, Q: 1 } || (e.qx = e.qy = null), t[0])) {
								case 'M':
									(e.X = t[1]), (e.Y = t[2]);
									break;
								case 'A':
									t = ['C'][M](wt[x](0, [e.x, e.y][M](t.slice(1))));
									break;
								case 'S':
									(n =
										'C' == r || 'S' == r
											? ((i = 2 * e.x - e.bx), 2 * e.y - e.by)
											: ((i = e.x), e.y)),
										(t = ['C', i, n][M](t.slice(1)));
									break;
								case 'T':
									'Q' == r || 'T' == r
										? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
										: ((e.qx = e.x), (e.qy = e.y)),
										(t = ['C'][M](xt(e.x, e.y, e.qx, e.qy, t[1], t[2])));
									break;
								case 'Q':
									(e.qx = t[1]),
										(e.qy = t[2]),
										(t = ['C'][M](xt(e.x, e.y, t[1], t[2], t[3], t[4])));
									break;
								case 'L':
									t = ['C'][M](gt(e.x, e.y, t[1], t[2]));
									break;
								case 'H':
									t = ['C'][M](gt(e.x, e.y, t[1], e.y));
									break;
								case 'V':
									t = ['C'][M](gt(e.x, e.y, e.x, t[1]));
									break;
								case 'Z':
									t = ['C'][M](gt(e.x, e.y, e.X, e.Y));
							}
							return t;
						}
						function n(t, e) {
							if (7 < t[e].length) {
								t[e].shift();
								for (var r = t[e]; r.length; )
									t.splice(e++, 0, ['C'][M](r.splice(0, 6)));
								t.splice(e, 1), (c = _(a.length, (o && o.length) || 0));
							}
						}
						function s(t, e, r, i, n) {
							t &&
								e &&
								'M' == t[n][0] &&
								'M' != e[n][0] &&
								(e.splice(n, 0, ['M', i.x, i.y]),
								(r.bx = 0),
								(r.by = 0),
								(r.x = t[n][1]),
								(r.y = t[n][2]),
								(c = _(a.length, (o && o.length) || 0)));
						}
						for (
							var a = _t(t),
								o = e && _t(e),
								l = {
									x: 0,
									y: 0,
									bx: 0,
									by: 0,
									X: 0,
									Y: 0,
									qx: null,
									qy: null,
								},
								h = {
									x: 0,
									y: 0,
									bx: 0,
									by: 0,
									X: 0,
									Y: 0,
									qx: null,
									qy: null,
								},
								u = 0,
								c = _(a.length, (o && o.length) || 0);
							u < c;
							u++
						) {
							(a[u] = i(a[u], l)),
								n(a, u),
								o && (o[u] = i(o[u], h)),
								o && n(o, u),
								s(a, o, l, h, u),
								s(o, a, h, l, u);
							var f = a[u],
								p = o && o[u],
								d = f.length,
								g = o && p.length;
							(l.x = f[d - 2]),
								(l.y = f[d - 1]),
								(l.bx = I(f[d - 4]) || l.x),
								(l.by = I(f[d - 3]) || l.y),
								(h.bx = o && (I(p[g - 4]) || h.x)),
								(h.by = o && (I(p[g - 3]) || h.y)),
								(h.x = o && p[g - 2]),
								(h.y = o && p[g - 1]);
						}
						return o || (r.curve = bt(a)), o ? [a, o] : a;
					},
					null,
					bt,
				)),
				Bt =
					((j._parseDots = ot(function (t) {
						for (var e = [], r = 0, i = t.length; r < i; r++) {
							var n = {},
								s = t[r].match(/^([^:]*):?([\d\.]*)/);
							if (((n.color = j.getRGB(s[1])), n.color.error)) return null;
							(n.color = n.color.hex),
								s[2] && (n.offset = s[2] + '%'),
								e.push(n);
						}
						for (r = 1, i = e.length - 1; r < i; r++)
							if (!e[r].offset) {
								for (
									var a = I(e[r - 1].offset || 0), o = 0, l = r + 1;
									l < i;
									l++
								)
									if (e[l].offset) {
										o = e[l].offset;
										break;
									}
								o || ((o = 100), (l = i));
								for (var h = ((o = I(o)) - a) / (l - r + 1); r < l; r++)
									(a += h), (e[r].offset = a + '%');
							}
						return e;
					})),
					(j._tear = function (t, e) {
						t == e.top && (e.top = t.prev),
							t == e.bottom && (e.bottom = t.next),
							t.next && (t.next.prev = t.prev),
							t.prev && (t.prev.next = t.next);
					})),
				St =
					((j._tofront = function (t, e) {
						e.top !== t &&
							(Bt(t, e),
							(t.next = null),
							(t.prev = e.top),
							(e.top.next = t),
							(e.top = t));
					}),
					(j._toback = function (t, e) {
						e.bottom !== t &&
							(Bt(t, e),
							(t.next = e.bottom),
							(t.prev = null),
							(e.bottom.prev = t),
							(e.bottom = t));
					}),
					(j._insertafter = function (t, e, r) {
						Bt(t, r),
							e == r.top && (r.top = t),
							e.next && (e.next.prev = t),
							(t.next = e.next),
							((t.prev = e).next = t);
					}),
					(j._insertbefore = function (t, e, r) {
						Bt(t, r),
							e == r.bottom && (r.bottom = t),
							e.prev && (e.prev.next = t),
							(t.prev = e.prev),
							((e.prev = t).next = e);
					}),
					(j.toMatrix = function (t, e) {
						var r = vt(t),
							t = {
								_: { transform: '' },
								getBBox: function () {
									return r;
								},
							};
						return Tt(t, e), t.matrix;
					})),
				Tt =
					((j.transformPath = function (t, e) {
						return Q(t, St(t, e));
					}),
					(j._extractTransform = function (t, e) {
						if (null == e) return t._.transform;
						e = P(e).replace(/\.{3}|\u2026/g, t._.transform || '');
						var r,
							i = j.parseTransformString(e),
							n = 0,
							e = 0,
							s = 1,
							a = 1,
							o = t._,
							l = new Nt();
						if (((o.transform = i || []), i))
							for (var h = 0, u = i.length; h < u; h++) {
								var c,
									f,
									p,
									d,
									g,
									x = i[h],
									y = x.length,
									m = P(x[0]).toLowerCase(),
									v = x[0] != m,
									b = v ? l.invert() : 0;
								't' == m && 3 == y
									? v
										? ((c = b.x(0, 0)),
										  (f = b.y(0, 0)),
										  (p = b.x(x[1], x[2])),
										  (d = b.y(x[1], x[2])),
										  l.translate(p - c, d - f))
										: l.translate(x[1], x[2])
									: 'r' == m
									? 2 == y
										? ((g = g || t.getBBox(1)),
										  l.rotate(x[1], g.x + g.width / 2, g.y + g.height / 2),
										  (n += x[1]))
										: 4 == y &&
										  (v
												? ((p = b.x(x[2], x[3])),
												  (d = b.y(x[2], x[3])),
												  l.rotate(x[1], p, d))
												: l.rotate(x[1], x[2], x[3]),
										  (n += x[1]))
									: 's' == m
									? 2 == y || 3 == y
										? ((g = g || t.getBBox(1)),
										  l.scale(
												x[1],
												x[y - 1],
												g.x + g.width / 2,
												g.y + g.height / 2,
										  ),
										  (s *= x[1]),
										  (a *= x[y - 1]))
										: 5 == y &&
										  (v
												? ((p = b.x(x[3], x[4])),
												  (d = b.y(x[3], x[4])),
												  l.scale(x[1], x[2], p, d))
												: l.scale(x[1], x[2], x[3], x[4]),
										  (s *= x[1]),
										  (a *= x[2]))
									: 'm' == m &&
									  7 == y &&
									  l.add(x[1], x[2], x[3], x[4], x[5], x[6]),
									(o.dirtyT = 1),
									(t.matrix = l);
							}
						(t.matrix = l),
							(o.sx = s),
							(o.sy = a),
							(o.deg = n),
							(o.dx = r = l.e),
							(o.dy = e = l.f),
							1 == s && 1 == a && !n && o.bbox
								? ((o.bbox.x += +r), (o.bbox.y += +e))
								: (o.dirtyT = 1);
					})),
				At = (j._equaliseTransform = function (t, e) {
					(e = P(e).replace(/\.{3}|\u2026/g, t)),
						(t = j.parseTransformString(t) || []),
						(e = j.parseTransformString(e) || []);
					for (
						var r, i, n, s, a = _(t.length, e.length), o = [], l = [], h = 0;
						h < a;
						h++
					) {
						if (
							((n = t[h] || mt(e[h])),
							(s = e[h] || mt(n)),
							n[0] != s[0] ||
								('r' == n[0].toLowerCase() && (n[2] != s[2] || n[3] != s[3])) ||
								('s' == n[0].toLowerCase() && (n[3] != s[3] || n[4] != s[4])))
						)
							return;
						for (
							o[h] = [], l[h] = [], r = 0, i = _(n.length, s.length);
							r < i;
							r++
						)
							r in n && (o[h][r] = n[r]), r in s && (l[h][r] = s[r]);
					}
					return { from: o, to: l };
				});
			function Nt(t, e, r, i, n, s) {
				null != t
					? ((this.a = +t),
					  (this.b = +e),
					  (this.c = +r),
					  (this.d = +i),
					  (this.e = +n),
					  (this.f = +s))
					: ((this.a = 1),
					  (this.b = 0),
					  (this.c = 0),
					  (this.d = 1),
					  (this.e = 0),
					  (this.f = 0));
			}
			(j._getContainer = function (t, e, r, i) {
				var n = null != i || j.is(t, 'object') ? t : d.doc.getElementById(t);
				if (null != n)
					return n.tagName
						? null == e
							? {
									container: n,
									width: n.style.pixelWidth || n.offsetWidth,
									height: n.style.pixelHeight || n.offsetHeight,
							  }
							: { container: n, width: e, height: r }
						: { container: 1, x: t, y: e, width: r, height: i };
			}),
				(j.pathToRelative = o),
				(j._engine = {}),
				(j.path2curve = Ct),
				(j.matrix = function (t, e, r, i, n, s) {
					return new Nt(t, e, r, i, n, s);
				}),
				(function (t) {
					function i(t) {
						return t[0] * t[0] + t[1] * t[1];
					}
					function n(t) {
						var e = B.sqrt(i(t));
						t[0] && (t[0] /= e), t[1] && (t[1] /= e);
					}
					(t.add = function (t, e, r, i, n, s) {
						var a,
							o,
							l,
							h,
							u = [[], [], []],
							c = [
								[this.a, this.c, this.e],
								[this.b, this.d, this.f],
								[0, 0, 1],
							],
							f = [
								[t, r, n],
								[e, i, s],
								[0, 0, 1],
							];
						for (
							t &&
								t instanceof Nt &&
								(f = [
									[t.a, t.c, t.e],
									[t.b, t.d, t.f],
									[0, 0, 1],
								]),
								a = 0;
							a < 3;
							a++
						)
							for (o = 0; o < 3; o++) {
								for (l = h = 0; l < 3; l++) h += c[a][l] * f[l][o];
								u[a][o] = h;
							}
						(this.a = u[0][0]),
							(this.b = u[1][0]),
							(this.c = u[0][1]),
							(this.d = u[1][1]),
							(this.e = u[0][2]),
							(this.f = u[1][2]);
					}),
						(t.invert = function () {
							var t = this,
								e = t.a * t.d - t.b * t.c;
							return new Nt(
								t.d / e,
								-t.b / e,
								-t.c / e,
								t.a / e,
								(t.c * t.f - t.d * t.e) / e,
								(t.b * t.e - t.a * t.f) / e,
							);
						}),
						(t.clone = function () {
							return new Nt(this.a, this.b, this.c, this.d, this.e, this.f);
						}),
						(t.translate = function (t, e) {
							this.add(1, 0, 0, 1, t, e);
						}),
						(t.scale = function (t, e, r, i) {
							null == e && (e = t),
								(r || i) && this.add(1, 0, 0, 1, r, i),
								this.add(t, 0, 0, e, 0, 0),
								(r || i) && this.add(1, 0, 0, 1, -r, -i);
						}),
						(t.rotate = function (t, e, r) {
							(t = j.rad(t)), (e = e || 0), (r = r || 0);
							var i = +B.cos(t).toFixed(9),
								t = +B.sin(t).toFixed(9);
							this.add(i, t, -t, i, e, r), this.add(1, 0, 0, 1, -e, -r);
						}),
						(t.x = function (t, e) {
							return t * this.a + e * this.c + this.e;
						}),
						(t.y = function (t, e) {
							return t * this.b + e * this.d + this.f;
						}),
						(t.get = function (t) {
							return +this[P.fromCharCode(97 + t)].toFixed(4);
						}),
						(t.toString = function () {
							return j.svg
								? 'matrix(' +
										[
											this.get(0),
											this.get(1),
											this.get(2),
											this.get(3),
											this.get(4),
											this.get(5),
										].join() +
										')'
								: [
										this.get(0),
										this.get(2),
										this.get(1),
										this.get(3),
										0,
										0,
								  ].join();
						}),
						(t.toFilter = function () {
							return (
								'progid:DXImageTransform.Microsoft.Matrix(M11=' +
								this.get(0) +
								', M12=' +
								this.get(2) +
								', M21=' +
								this.get(1) +
								', M22=' +
								this.get(3) +
								', Dx=' +
								this.get(4) +
								', Dy=' +
								this.get(5) +
								", sizingmethod='auto expand')"
							);
						}),
						(t.offset = function () {
							return [this.e.toFixed(4), this.f.toFixed(4)];
						}),
						(t.split = function () {
							var t = {};
							(t.dx = this.e), (t.dy = this.f);
							var e = [
								[this.a, this.c],
								[this.b, this.d],
							];
							(t.scalex = B.sqrt(i(e[0]))),
								n(e[0]),
								(t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
								(e[1] = [
									e[1][0] - e[0][0] * t.shear,
									e[1][1] - e[0][1] * t.shear,
								]),
								(t.scaley = B.sqrt(i(e[1]))),
								n(e[1]),
								(t.shear /= t.scaley);
							var r = -e[0][1],
								e = e[1][1];
							return (
								e < 0
									? ((t.rotate = j.deg(B.acos(e))),
									  r < 0 && (t.rotate = 360 - t.rotate))
									: (t.rotate = j.deg(B.asin(r))),
								(t.isSimple = !(
									+t.shear.toFixed(9) ||
									(t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
								)),
								(t.isSuperSimple =
									!+t.shear.toFixed(9) &&
									t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
									!t.rotate),
								(t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
								t
							);
						}),
						(t.toTransformString = function (t) {
							t = t || this[z]();
							return t.isSimple
								? ((t.scalex = +t.scalex.toFixed(4)),
								  (t.scaley = +t.scaley.toFixed(4)),
								  (t.rotate = +t.rotate.toFixed(4)),
								  (t.dx || t.dy ? 't' + [t.dx, t.dy] : '') +
										(1 != t.scalex || 1 != t.scaley
											? 's' + [t.scalex, t.scaley, 0, 0]
											: '') +
										(t.rotate ? 'r' + [t.rotate, 0, 0] : ''))
								: 'm' +
										[
											this.get(0),
											this.get(1),
											this.get(2),
											this.get(3),
											this.get(4),
											this.get(5),
										];
						});
				})(Nt.prototype);
			o =
				navigator.userAgent.match(/Version\/(.*?)\s/) ||
				navigator.userAgent.match(/Chrome\/(\d+)/);
			('Apple Computer, Inc.' == navigator.vendor &&
				((o && o[1] < 4) || 'iP' == navigator.platform.slice(0, 2))) ||
			('Google Inc.' == navigator.vendor && o && o[1] < 8)
				? (K.safari = function () {
						var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr(
							{ stroke: 'none' },
						);
						setTimeout(function () {
							t.remove();
						});
				  })
				: (K.safari = function () {});
			function Et() {
				this.returnValue = !1;
			}
			function Lt() {
				return this.originalEvent.preventDefault();
			}
			function Mt() {
				this.cancelBubble = !0;
			}
			function Pt() {
				return this.originalEvent.stopPropagation();
			}
			function zt(t) {
				var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
					r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
				return { x: t.clientX + r, y: t.clientY + e };
			}
			function Ft(t) {
				for (
					var e,
						r = t.clientX,
						i = t.clientY,
						n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
						s = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
						a = It.length;
					a--;

				) {
					if (((e = It[a]), g && t.touches)) {
						for (var o, l = t.touches.length; l--; )
							if ((o = t.touches[l]).identifier == e.el._drag.id) {
								(r = o.clientX),
									(i = o.clientY),
									(t.originalEvent || t).preventDefault();
								break;
							}
					} else t.preventDefault();
					var h,
						u = e.el.node,
						c = u.nextSibling,
						f = u.parentNode,
						p = u.style.display;
					d.win.opera && f.removeChild(u),
						(u.style.display = 'none'),
						(h = e.el.paper.getElementByPoint(r, i)),
						(u.style.display = p),
						d.win.opera && (c ? f.insertBefore(u, c) : f.appendChild(u)),
						h && N('raphael.drag.over.' + e.el.id, e.el, h),
						(r += s),
						(i += n),
						N(
							'raphael.drag.move.' + e.el.id,
							e.move_scope || e.el,
							r - e.el._drag.x,
							i - e.el._drag.y,
							r,
							i,
							t,
						);
				}
			}
			for (
				var Rt = d.doc.addEventListener
						? function (s, t, a, o) {
								function e(t) {
									var e = zt(t);
									return a.call(o, t, e.x, e.y);
								}
								return (
									s.addEventListener(t, e, !1),
									g &&
										h[t] &&
										s.addEventListener(
											h[t],
											function (t) {
												for (
													var e = zt(t),
														r = t,
														i = 0,
														n = t.targetTouches && t.targetTouches.length;
													i < n;
													i++
												)
													if (t.targetTouches[i].target == s) {
														((t = t.targetTouches[i]).originalEvent = r),
															(t.preventDefault = Lt),
															(t.stopPropagation = Pt);
														break;
													}
												return a.call(o, t, e.x, e.y);
											},
											!1,
										),
									function () {
										return (
											s.removeEventListener(t, e, !1),
											g && h[t] && s.removeEventListener(h[t], e, !1),
											!0
										);
									}
								);
						  }
						: d.doc.attachEvent
						? function (t, e, i, n) {
								function r(t) {
									t = t || d.win.event;
									var e =
											d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
										r =
											d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
										r = t.clientX + r,
										e = t.clientY + e;
									return (
										(t.preventDefault = t.preventDefault || Et),
										(t.stopPropagation = t.stopPropagation || Mt),
										i.call(n, t, r, e)
									);
								}
								t.attachEvent('on' + e, r);
								return function () {
									return t.detachEvent('on' + e, r), !0;
								};
						  }
						: void 0,
					It = [],
					jt = function (t) {
						j.unmousemove(Ft).unmouseup(jt);
						for (var e, r = It.length; r--; )
							((e = It[r]).el._drag = {}),
								N(
									'raphael.drag.end.' + e.el.id,
									e.end_scope || e.start_scope || e.move_scope || e.el,
									t,
								);
						It = [];
					},
					qt = (j.el = {}),
					Dt = l.length;
				Dt--;

			)
				!(function (i) {
					(j[i] = qt[i] =
						function (t, e) {
							return (
								j.is(t, 'function') &&
									((this.events = this.events || []),
									this.events.push({
										name: i,
										f: t,
										unbind: Rt(
											this.shape || this.node || d.doc,
											i,
											t,
											e || this,
										),
									})),
								this
							);
						}),
						(j['un' + i] = qt['un' + i] =
							function (t) {
								for (var e = this.events || [], r = e.length; r--; )
									e[r].name != i ||
										(!j.is(t, 'undefined') && e[r].f != t) ||
										(e[r].unbind(),
										e.splice(r, 1),
										e.length || delete this.events);
								return this;
							});
				})(l[Dt]);
			(qt.data = function (t, e) {
				var r = (H[this.id] = H[this.id] || {});
				if (0 == arguments.length) return r;
				if (1 != arguments.length)
					return (r[t] = e), N('raphael.data.set.' + this.id, this, e, t), this;
				if (j.is(t, 'object')) {
					for (var i in t) t[L](i) && this.data(i, t[i]);
					return this;
				}
				return N('raphael.data.get.' + this.id, this, r[t], t), r[t];
			}),
				(qt.removeData = function (t) {
					return (
						null == t ? (H[this.id] = {}) : H[this.id] && delete H[this.id][t],
						this
					);
				}),
				(qt.getData = function () {
					return tt(H[this.id] || {});
				}),
				(qt.hover = function (t, e, r, i) {
					return this.mouseover(t, r).mouseout(e, i || r);
				}),
				(qt.unhover = function (t, e) {
					return this.unmouseover(t).unmouseout(e);
				});
			var Vt = [];
			(qt.drag = function (o, l, h, u, c, f) {
				function t(t) {
					(t.originalEvent || t).preventDefault();
					var e = t.clientX,
						r = t.clientY,
						i = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
						n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
					if (((this._drag.id = t.identifier), g && t.touches))
						for (var s, a = t.touches.length; a--; )
							if (
								((s = t.touches[a]),
								(this._drag.id = s.identifier),
								s.identifier == this._drag.id)
							) {
								(e = s.clientX), (r = s.clientY);
								break;
							}
					(this._drag.x = e + n),
						(this._drag.y = r + i),
						It.length || j.mousemove(Ft).mouseup(jt),
						It.push({ el: this, move_scope: u, start_scope: c, end_scope: f }),
						l && N.on('raphael.drag.start.' + this.id, l),
						o && N.on('raphael.drag.move.' + this.id, o),
						h && N.on('raphael.drag.end.' + this.id, h),
						N(
							'raphael.drag.start.' + this.id,
							c || u || this,
							t.clientX + n,
							t.clientY + i,
							t,
						);
				}
				return (
					(this._drag = {}),
					Vt.push({ el: this, start: t }),
					this.mousedown(t),
					this
				);
			}),
				(qt.onDragOver = function (t) {
					t
						? N.on('raphael.drag.over.' + this.id, t)
						: N.unbind('raphael.drag.over.' + this.id);
				}),
				(qt.undrag = function () {
					for (var t = Vt.length; t--; )
						Vt[t].el == this &&
							(this.unmousedown(Vt[t].start),
							Vt.splice(t, 1),
							N.unbind('raphael.drag.*.' + this.id));
					Vt.length || j.unmousemove(Ft).unmouseup(jt), (It = []);
				}),
				(K.circle = function (t, e, r) {
					r = j._engine.circle(this, t || 0, e || 0, r || 0);
					return this.__set__ && this.__set__.push(r), r;
				}),
				(K.rect = function (t, e, r, i, n) {
					n = j._engine.rect(this, t || 0, e || 0, r || 0, i || 0, n || 0);
					return this.__set__ && this.__set__.push(n), n;
				}),
				(K.ellipse = function (t, e, r, i) {
					i = j._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
					return this.__set__ && this.__set__.push(i), i;
				}),
				(K.path = function (t) {
					!t || j.is(t, u) || j.is(t[0], v) || (t += '');
					var e = j._engine.path(j.format[x](j, arguments), this);
					return this.__set__ && this.__set__.push(e), e;
				}),
				(K.image = function (t, e, r, i, n) {
					n = j._engine.image(
						this,
						t || 'about:blank',
						e || 0,
						r || 0,
						i || 0,
						n || 0,
					);
					return this.__set__ && this.__set__.push(n), n;
				}),
				(K.text = function (t, e, r) {
					r = j._engine.text(this, t || 0, e || 0, P(r));
					return this.__set__ && this.__set__.push(r), r;
				}),
				(K.set = function (t) {
					j.is(t, 'array') ||
						(t = Array.prototype.splice.call(arguments, 0, arguments.length));
					var e = new re(t);
					return (
						this.__set__ && this.__set__.push(e),
						(e.paper = this),
						(e.type = 'set'),
						e
					);
				}),
				(K.setStart = function (t) {
					this.__set__ = t || this.set();
				}),
				(K.setFinish = function (t) {
					var e = this.__set__;
					return delete this.__set__, e;
				}),
				(K.setSize = function (t, e) {
					return j._engine.setSize.call(this, t, e);
				}),
				(K.setViewBox = function (t, e, r, i, n) {
					return j._engine.setViewBox.call(this, t, e, r, i, n);
				}),
				(K.top = K.bottom = null),
				(K.raphael = j);
			function Ot() {
				return this.x + w + this.y + w + this.width + ' × ' + this.height;
			}
			(K.getElementByPoint = function (t, e) {
				var r,
					i,
					n,
					s,
					a,
					o = this.canvas,
					l = d.doc.elementFromPoint(t, e);
				if (
					(d.win.opera &&
						'svg' == l.tagName &&
						((i = (r = o).getBoundingClientRect()),
						(n = r.ownerDocument),
						(s = n.body),
						(a = n.documentElement),
						(r = a.clientTop || s.clientTop || 0),
						(n = a.clientLeft || s.clientLeft || 0),
						(s = {
							y: i.top + (d.win.pageYOffset || a.scrollTop || s.scrollTop) - r,
							x:
								i.left +
								(d.win.pageXOffset || a.scrollLeft || s.scrollLeft) -
								n,
						}),
						((n = o.createSVGRect()).x = t - s.x),
						(n.y = e - s.y),
						(n.width = n.height = 1),
						(n = o.getIntersectionList(n, null)).length &&
							(l = n[n.length - 1])),
					!l)
				)
					return null;
				for (; l.parentNode && l != o.parentNode && !l.raphael; )
					l = l.parentNode;
				return (
					l == this.canvas.parentNode && (l = o),
					(l = l && l.raphael ? this.getById(l.raphaelid) : null)
				);
			}),
				(K.getElementsByBBox = function (e) {
					var r = this.set();
					return (
						this.forEach(function (t) {
							j.isBBoxIntersect(t.getBBox(), e) && r.push(t);
						}),
						r
					);
				}),
				(K.getById = function (t) {
					for (var e = this.bottom; e; ) {
						if (e.id == t) return e;
						e = e.next;
					}
					return null;
				}),
				(K.forEach = function (t, e) {
					for (var r = this.bottom; r; ) {
						if (!1 === t.call(e, r)) return this;
						r = r.next;
					}
					return this;
				}),
				(K.getElementsByPoint = function (e, r) {
					var i = this.set();
					return (
						this.forEach(function (t) {
							t.isPointInside(e, r) && i.push(t);
						}),
						i
					);
				}),
				(qt.isPointInside = function (t, e) {
					var r = (this.realPath = Z[this.type](this));
					return (
						this.attr('transform') &&
							this.attr('transform').length &&
							(r = j.transformPath(r, this.attr('transform'))),
						j.isPointInsidePath(r, t, e)
					);
				}),
				(qt.getBBox = function (t) {
					if (this.removed) return {};
					var e = this._;
					return t
						? ((!e.dirty && e.bboxwt) ||
								((this.realPath = Z[this.type](this)),
								(e.bboxwt = vt(this.realPath)),
								(e.bboxwt.toString = Ot),
								(e.dirty = 0)),
						  e.bboxwt)
						: ((!e.dirty && !e.dirtyT && e.bbox) ||
								((!e.dirty && this.realPath) ||
									((e.bboxwt = 0), (this.realPath = Z[this.type](this))),
								(e.bbox = vt(Q(this.realPath, this.matrix))),
								(e.bbox.toString = Ot),
								(e.dirty = e.dirtyT = 0)),
						  e.bbox);
				}),
				(qt.clone = function () {
					if (this.removed) return null;
					var t = this.paper[this.type]().attr(this.attr());
					return this.__set__ && this.__set__.push(t), t;
				}),
				(qt.glow = function (t) {
					if ('text' == this.type) return null;
					for (
						var e = {
								width:
									((t = t || {}).width || 10) +
									(+this.attr('stroke-width') || 1),
								fill: t.fill || !1,
								opacity: t.opacity || 0.5,
								offsetx: t.offsetx || 0,
								offsety: t.offsety || 0,
								color: t.color || '#000',
							},
							r = e.width / 2,
							i = this.paper,
							n = i.set(),
							s = this.realPath || Z[this.type](this),
							s = this.matrix ? Q(s, this.matrix) : s,
							a = 1;
						a < 1 + r;
						a++
					)
						n.push(
							i.path(s).attr({
								stroke: e.color,
								fill: e.fill ? e.color : 'none',
								'stroke-linejoin': 'round',
								'stroke-linecap': 'round',
								'stroke-width': +((e.width / r) * a).toFixed(3),
								opacity: +(e.opacity / r).toFixed(3),
							}),
						);
					return n.insertBefore(this).translate(e.offsetx, e.offsety);
				});
			function Yt(t, e, r, i, n, s, a, o, l) {
				return null == l
					? ft(t, e, r, i, n, s, a, o)
					: j.findDotsAtSegment(
							t,
							e,
							r,
							i,
							n,
							s,
							a,
							o,
							(function (t, e, r, i, n, s, a, o, l) {
								if (!(l < 0 || ft(t, e, r, i, n, s, a, o) < l)) {
									for (
										var h = 0.5, u = 1 - h, c = ft(t, e, r, i, n, s, a, o, u);
										0.01 < S(c - l);

									)
										c = ft(
											t,
											e,
											r,
											i,
											n,
											s,
											a,
											o,
											(u += (c < l ? 1 : -1) * (h /= 2)),
										);
									return u;
								}
							})(t, e, r, i, n, s, a, o, l),
					  );
			}
			var o = function (p, d) {
					return function (t, e, r) {
						for (
							var i,
								n,
								s,
								a,
								o,
								l = '',
								h = {},
								u = 0,
								c = 0,
								f = (t = Ct(t)).length;
							c < f;
							c++
						) {
							if ('M' == (s = t[c])[0]) (i = +s[1]), (n = +s[2]);
							else {
								if (
									e <
									u + (a = Yt(i, n, s[1], s[2], s[3], s[4], s[5], s[6]))
								) {
									if (d && !h.start) {
										if (
											((l += [
												'C' +
													(o = Yt(
														i,
														n,
														s[1],
														s[2],
														s[3],
														s[4],
														s[5],
														s[6],
														e - u,
													)).start.x,
												o.start.y,
												o.m.x,
												o.m.y,
												o.x,
												o.y,
											]),
											r)
										)
											return l;
										(h.start = l),
											(l = [
												'M' + o.x,
												o.y + 'C' + o.n.x,
												o.n.y,
												o.end.x,
												o.end.y,
												s[5],
												s[6],
											].join()),
											(u += a),
											(i = +s[5]),
											(n = +s[6]);
										continue;
									}
									if (!p && !d)
										return {
											x: (o = Yt(
												i,
												n,
												s[1],
												s[2],
												s[3],
												s[4],
												s[5],
												s[6],
												e - u,
											)).x,
											y: o.y,
											alpha: o.alpha,
										};
								}
								(u += a), (i = +s[5]), (n = +s[6]);
							}
							l += s.shift() + s;
						}
						return (
							(h.end = l),
							(o = p
								? u
								: d
								? h
								: j.findDotsAtSegment(
										i,
										n,
										s[0],
										s[1],
										s[2],
										s[3],
										s[4],
										s[5],
										1,
								  )).alpha && (o = { x: o.x, y: o.y, alpha: o.alpha }),
							o
						);
					};
				},
				Gt = o(1),
				Wt = o(),
				Xt = o(0, 1);
			(j.getTotalLength = Gt),
				(j.getPointAtLength = Wt),
				(j.getSubpath = function (t, e, r) {
					if (this.getTotalLength(t) - r < 1e-6) return Xt(t, e).end;
					r = Xt(t, r, 1);
					return e ? Xt(r, e).end : r;
				}),
				(qt.getTotalLength = function () {
					var t = this.getPath();
					if (t)
						return this.node.getTotalLength
							? this.node.getTotalLength()
							: Gt(t);
				}),
				(qt.getPointAtLength = function (t) {
					var e = this.getPath();
					if (e) return Wt(e, t);
				}),
				(qt.getPath = function () {
					var t,
						e = j._getPath[this.type];
					if ('text' != this.type && 'set' != this.type)
						return e && (t = e(this)), t;
				}),
				(qt.getSubpath = function (t, e) {
					var r = this.getPath();
					if (r) return j.getSubpath(r, t, e);
				});
			o = j.easing_formulas = {
				linear: function (t) {
					return t;
				},
				'<': function (t) {
					return m(t, 1.7);
				},
				'>': function (t) {
					return m(t, 0.48);
				},
				'<>': function (t) {
					var e = 0.48 - t / 1.04,
						r = B.sqrt(0.1734 + e * e),
						t = r - e,
						e = -r - e,
						e =
							m(S(t), 1 / 3) * (t < 0 ? -1 : 1) +
							m(S(e), 1 / 3) * (e < 0 ? -1 : 1) +
							0.5;
					return 3 * (1 - e) * e * e + e * e * e;
				},
				backIn: function (t) {
					return t * t * (2.70158 * t - 1.70158);
				},
				backOut: function (t) {
					return --t * t * (2.70158 * t + 1.70158) + 1;
				},
				elastic: function (t) {
					return t == !!t
						? t
						: m(2, -10 * t) * B.sin((2 * T * (t - 0.075)) / 0.3) + 1;
				},
				bounce: function (t) {
					var e = 7.5625,
						r = 2.75,
						t =
							t < 1 / r
								? e * t * t
								: t < 2 / r
								? e * (t -= 1.5 / r) * t + 0.75
								: t < 2.5 / r
								? e * (t -= 2.25 / r) * t + 0.9375
								: e * (t -= 2.625 / r) * t + 0.984375;
					return t;
				},
			};
			(o.easeIn = o['ease-in'] = o['<']),
				(o.easeOut = o['ease-out'] = o['>']),
				(o.easeInOut = o['ease-in-out'] = o['<>']),
				(o['back-in'] = o.backIn),
				(o['back-out'] = o.backOut);
			var Ht = [],
				Ut =
					t.requestAnimationFrame ||
					t.webkitRequestAnimationFrame ||
					t.mozRequestAnimationFrame ||
					t.oRequestAnimationFrame ||
					t.msRequestAnimationFrame ||
					function (t) {
						setTimeout(t, 16);
					},
				$t = function () {
					for (var t = +new Date(), e = 0; e < Ht.length; e++) {
						var r = Ht[e];
						if (!r.el.removed && !r.paused) {
							var i,
								n = t - r.start,
								s = r.ms,
								a = r.easing,
								o = r.from,
								l = r.diff,
								h = r.to,
								u = (r.t, r.el),
								c = {},
								f = {};
							if (
								(r.initstatus
									? ((n =
											((r.initstatus * r.anim.top - r.prev) /
												(r.percent - r.prev)) *
											s),
									  (r.status = r.initstatus),
									  delete r.initstatus,
									  r.stop && Ht.splice(e--, 1))
									: (r.status =
											(r.prev + (r.percent - r.prev) * (n / s)) / r.anim.top),
								!(n < 0))
							)
								if (n < s) {
									var p,
										d = a(n / s);
									for (p in o)
										if (o[L](p)) {
											switch (D[p]) {
												case F:
													b = +o[p] + d * s * l[p];
													break;
												case 'colour':
													b =
														'rgb(' +
														[
															Zt(C(o[p].r + d * s * l[p].r)),
															Zt(C(o[p].g + d * s * l[p].g)),
															Zt(C(o[p].b + d * s * l[p].b)),
														].join(',') +
														')';
													break;
												case 'path':
													b = [];
													for (var g = 0, x = o[p].length; g < x; g++) {
														b[g] = [o[p][g][0]];
														for (var y = 1, m = o[p][g].length; y < m; y++)
															b[g][y] = +o[p][g][y] + d * s * l[p][g][y];
														b[g] = b[g].join(w);
													}
													b = b.join(w);
													break;
												case 'transform':
													if (l[p].real)
														for (b = [], g = 0, x = o[p].length; g < x; g++)
															for (
																b[g] = [o[p][g][0]], y = 1, m = o[p][g].length;
																y < m;
																y++
															)
																b[g][y] = o[p][g][y] + d * s * l[p][g][y];
													else {
														function v(t) {
															return +o[p][t] + d * s * l[p][t];
														}
														var b = [['m', v(0), v(1), v(2), v(3), v(4), v(5)]];
													}
													break;
												case 'csv':
													if ('clip-rect' == p)
														for (b = [], g = 4; g--; )
															b[g] = +o[p][g] + d * s * l[p][g];
													break;
												default:
													var _ = [][M](o[p]);
													for (
														b = [], g = u.paper.customAttributes[p].length;
														g--;

													)
														b[g] = +_[g] + d * s * l[p][g];
											}
											c[p] = b;
										}
									u.attr(c),
										(function (t, e, r) {
											setTimeout(function () {
												N('raphael.anim.frame.' + t, e, r);
											});
										})(u.id, u, r.anim);
								} else {
									if (
										(!(function (t, e, r) {
											setTimeout(function () {
												N('raphael.anim.frame.' + e.id, e, r),
													N('raphael.anim.finish.' + e.id, e, r),
													j.is(t, 'function') && t.call(e);
											});
										})(r.callback, u, r.anim),
										u.attr(h),
										Ht.splice(e--, 1),
										1 < r.repeat && !r.next)
									) {
										for (i in h) h[L](i) && (f[i] = r.totalOrigin[i]);
										r.el.attr(f),
											Kt(
												r.anim,
												r.el,
												r.anim.percents[0],
												null,
												r.totalOrigin,
												r.repeat - 1,
											);
									}
									r.next &&
										!r.stop &&
										Kt(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat);
								}
						}
					}
					j.svg && u && u.paper && u.paper.safari(), Ht.length && Ut($t);
				},
				Zt = function (t) {
					return 255 < t ? 255 : t < 0 ? 0 : t;
				};
			function Qt(t, e, r, i, n, s) {
				var a,
					l = 3 * e,
					h = 3 * (i - e) - l,
					u = 1 - l - h,
					o = 3 * r,
					c = 3 * (n - r) - o,
					f = 1 - o - c;
				function p(t) {
					return ((u * t + h) * t + l) * t;
				}
				return (
					(a = (function (t, e) {
						var r, i, n, s, a, o;
						for (n = t, o = 0; o < 8; o++) {
							if (((s = p(n) - t), S(s) < e)) return n;
							if (S((a = (3 * u * n + 2 * h) * n + l)) < 1e-6) break;
							n -= s / a;
						}
						if (((i = 1), (n = t) < (r = 0))) return r;
						if (i < n) return i;
						for (; r < i; ) {
							if (((s = p(n)), S(s - t) < e)) return n;
							s < t ? (r = n) : (i = n), (n = (i - r) / 2 + r);
						}
						return n;
					})(t, (a = 1 / (200 * s)))),
					((f * a + c) * a + o) * a
				);
			}
			function Jt(t, e) {
				var r = [],
					i = {};
				if (((this.ms = e), (this.times = 1), t)) {
					for (var n in t) t[L](n) && ((i[I(n)] = t[n]), r.push(I(n)));
					r.sort(s);
				}
				(this.anim = i), (this.top = r[r.length - 1]), (this.percents = r);
			}
			function Kt(t, e, r, i, n, s) {
				r = I(r);
				var a,
					o,
					l,
					h,
					u,
					c = t.ms,
					f = {},
					p = {},
					d = {};
				if (i)
					for (x = 0, y = Ht.length; x < y; x++) {
						var g = Ht[x];
						if (g.el.id == e.id && g.anim == t) {
							g.percent != r ? (Ht.splice(x, 1), (l = 1)) : (o = g),
								e.attr(g.totalOrigin);
							break;
						}
					}
				else i = +p;
				for (var x = 0, y = t.percents.length; x < y; x++) {
					if (t.percents[x] == r || t.percents[x] > i * t.top) {
						(r = t.percents[x]),
							(u = t.percents[x - 1] || 0),
							(c = (c / t.top) * (r - u)),
							(h = t.percents[x + 1]),
							(a = t.anim[r]);
						break;
					}
					i && e.attr(t.anim[t.percents[x]]);
				}
				if (a) {
					if (o) (o.initstatus = i), (o.start = new Date() - o.ms * i);
					else {
						for (var m in a)
							if (a[L](m) && (D[L](m) || e.paper.customAttributes[L](m)))
								switch (
									((f[m] = e.attr(m)),
									null == f[m] && (f[m] = q[m]),
									(p[m] = a[m]),
									D[m])
								) {
									case F:
										d[m] = (p[m] - f[m]) / c;
										break;
									case 'colour':
										f[m] = j.getRGB(f[m]);
										var v = j.getRGB(p[m]);
										d[m] = {
											r: (v.r - f[m].r) / c,
											g: (v.g - f[m].g) / c,
											b: (v.b - f[m].b) / c,
										};
										break;
									case 'path':
										var b = Ct(f[m], p[m]),
											_ = b[1];
										for (
											f[m] = b[0], d[m] = [], x = 0, y = f[m].length;
											x < y;
											x++
										) {
											d[m][x] = [0];
											for (var w = 1, k = f[m][x].length; w < k; w++)
												d[m][x][w] = (_[x][w] - f[m][x][w]) / c;
										}
										break;
									case 'transform':
										(v = e._), (b = At(v[m], p[m]));
										if (b)
											for (
												f[m] = b.from,
													p[m] = b.to,
													d[m] = [],
													d[m].real = !0,
													x = 0,
													y = f[m].length;
												x < y;
												x++
											)
												for (
													d[m][x] = [f[m][x][0]], w = 1, k = f[m][x].length;
													w < k;
													w++
												)
													d[m][x][w] = (p[m][x][w] - f[m][x][w]) / c;
										else {
											(b = e.matrix || new Nt()),
												(v = {
													_: { transform: v.transform },
													getBBox: function () {
														return e.getBBox(1);
													},
												});
											(f[m] = [b.a, b.b, b.c, b.d, b.e, b.f]),
												Tt(v, p[m]),
												(p[m] = v._.transform),
												(d[m] = [
													(v.matrix.a - b.a) / c,
													(v.matrix.b - b.b) / c,
													(v.matrix.c - b.c) / c,
													(v.matrix.d - b.d) / c,
													(v.matrix.e - b.e) / c,
													(v.matrix.f - b.f) / c,
												]);
										}
										break;
									case 'csv':
										var C = P(a[m])[z](E),
											B = P(f[m])[z](E);
										if ('clip-rect' == m)
											for (f[m] = B, d[m] = [], x = B.length; x--; )
												d[m][x] = (C[x] - f[m][x]) / c;
										p[m] = C;
										break;
									default:
										for (
											C = [][M](a[m]),
												B = [][M](f[m]),
												d[m] = [],
												x = e.paper.customAttributes[m].length;
											x--;

										)
											d[m][x] = ((C[x] || 0) - (B[x] || 0)) / c;
								}
						var S,
							T = a.easing,
							A = j.easing_formulas[T];
						if (
							((A =
								A ||
								((A = P(T).match(R)) && 5 == A.length
									? ((S = A),
									  function (t) {
											return Qt(t, +S[1], +S[2], +S[3], +S[4], c);
									  })
									: U)),
							(T = a.start || t.start || +new Date()),
							(g = {
								anim: t,
								percent: r,
								timestamp: T,
								start: T + (t.del || 0),
								status: 0,
								initstatus: i || 0,
								stop: !1,
								ms: c,
								easing: A,
								from: f,
								diff: d,
								to: p,
								el: e,
								callback: a.callback,
								prev: u,
								next: h,
								repeat: s || t.times,
								origin: e.attr(),
								totalOrigin: n,
							}),
							Ht.push(g),
							i &&
								!o &&
								!l &&
								((g.stop = !0), (g.start = new Date() - c * i), 1 == Ht.length))
						)
							return $t();
						l && (g.start = new Date() - g.ms * i), 1 == Ht.length && Ut($t);
					}
					N('raphael.anim.start.' + e.id, e, t);
				}
			}
			function te(t) {
				for (var e = 0; e < Ht.length; e++)
					Ht[e].el.paper == t && Ht.splice(e--, 1);
			}
			(qt.animateWith = function (t, e, r, i, n, s) {
				var a = this;
				if (a.removed) return s && s.call(a), a;
				s = r instanceof Jt ? r : j.animation(r, i, n, s);
				Kt(s, a, s.percents[0], null, a.attr());
				for (var o = 0, l = Ht.length; o < l; o++)
					if (Ht[o].anim == e && Ht[o].el == t) {
						Ht[l - 1].start = Ht[o].start;
						break;
					}
				return a;
			}),
				(qt.onAnimation = function (t) {
					return (
						t
							? N.on('raphael.anim.frame.' + this.id, t)
							: N.unbind('raphael.anim.frame.' + this.id),
						this
					);
				}),
				(Jt.prototype.delay = function (t) {
					var e = new Jt(this.anim, this.ms);
					return (e.times = this.times), (e.del = +t || 0), e;
				}),
				(Jt.prototype.repeat = function (t) {
					var e = new Jt(this.anim, this.ms);
					return (e.del = this.del), (e.times = B.floor(_(t, 0)) || 1), e;
				}),
				(j.animation = function (t, e, r, i) {
					if (t instanceof Jt) return t;
					(!j.is(r, 'function') && r) || ((i = i || r || null), (r = null)),
						(e = +e || 0);
					var n,
						s,
						a = {};
					for (s in (t = Object(t)))
						t[L](s) &&
							I(s) != s &&
							I(s) + '%' != s &&
							((n = !0), (a[s] = t[s]));
					return n
						? (r && (a.easing = r),
						  i && (a.callback = i),
						  new Jt({ 100: a }, e))
						: new Jt(t, e);
				}),
				(qt.animate = function (t, e, r, i) {
					var n = this;
					if (n.removed) return i && i.call(n), n;
					i = t instanceof Jt ? t : j.animation(t, e, r, i);
					return Kt(i, n, i.percents[0], null, n.attr()), n;
				}),
				(qt.setTime = function (t, e) {
					return t && null != e && this.status(t, k(e, t.ms) / t.ms), this;
				}),
				(qt.status = function (t, e) {
					var r,
						i,
						n = [],
						s = 0;
					if (null != e) return Kt(t, this, -1, k(e, 1)), this;
					for (r = Ht.length; s < r; s++)
						if ((i = Ht[s]).el.id == this.id && (!t || i.anim == t)) {
							if (t) return i.status;
							n.push({ anim: i.anim, status: i.status });
						}
					return t ? 0 : n;
				}),
				(qt.pause = function (t) {
					for (var e = 0; e < Ht.length; e++)
						Ht[e].el.id != this.id ||
							(t && Ht[e].anim != t) ||
							(!1 !== N('raphael.anim.pause.' + this.id, this, Ht[e].anim) &&
								(Ht[e].paused = !0));
					return this;
				}),
				(qt.resume = function (t) {
					for (var e, r = 0; r < Ht.length; r++)
						Ht[r].el.id != this.id ||
							(t && Ht[r].anim != t) ||
							((e = Ht[r]),
							!1 !== N('raphael.anim.resume.' + this.id, this, e.anim) &&
								(delete e.paused, this.status(e.anim, e.status)));
					return this;
				}),
				(qt.stop = function (t) {
					for (var e = 0; e < Ht.length; e++)
						Ht[e].el.id != this.id ||
							(t && Ht[e].anim != t) ||
							(!1 !== N('raphael.anim.stop.' + this.id, this, Ht[e].anim) &&
								Ht.splice(e--, 1));
					return this;
				}),
				N.on('raphael.remove', te),
				N.on('raphael.clear', te),
				(qt.toString = function () {
					return 'Raphaël’s object';
				});
			var ee,
				re = function (t) {
					if (((this.items = []), (this.length = 0), (this.type = 'set'), t))
						for (var e = 0, r = t.length; e < r; e++)
							!t[e] ||
								(t[e].constructor != qt.constructor &&
									t[e].constructor != re) ||
								((this[this.items.length] = this.items[this.items.length] =
									t[e]),
								this.length++);
				},
				ie = re.prototype;
			for (ee in ((ie.push = function () {
				for (var t, e, r = 0, i = arguments.length; r < i; r++)
					!(t = arguments[r]) ||
						(t.constructor != qt.constructor && t.constructor != re) ||
						((this[(e = this.items.length)] = this.items[e] = t),
						this.length++);
				return this;
			}),
			(ie.pop = function () {
				return this.length && delete this[this.length--], this.items.pop();
			}),
			(ie.forEach = function (t, e) {
				for (var r = 0, i = this.items.length; r < i; r++)
					if (!1 === t.call(e, this.items[r], r)) return this;
				return this;
			}),
			qt))
				qt[L](ee) &&
					(ie[ee] = (function (r) {
						return function () {
							var e = arguments;
							return this.forEach(function (t) {
								t[r][x](t, e);
							});
						};
					})(ee));
			(ie.attr = function (t, e) {
				if (t && j.is(t, v) && j.is(t[0], 'object'))
					for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]);
				else
					for (var n = 0, s = this.items.length; n < s; n++)
						this.items[n].attr(t, e);
				return this;
			}),
				(ie.clear = function () {
					for (; this.length; ) this.pop();
				}),
				(ie.splice = function (t, e, r) {
					(t = t < 0 ? _(this.length + t, 0) : t),
						(e = _(0, k(this.length - t, e)));
					for (var i = [], n = [], s = [], a = 2; a < arguments.length; a++)
						s.push(arguments[a]);
					for (a = 0; a < e; a++) n.push(this[t + a]);
					for (; a < this.length - t; a++) i.push(this[t + a]);
					var o = s.length;
					for (a = 0; a < o + i.length; a++)
						this.items[t + a] = this[t + a] = a < o ? s[a] : i[a - o];
					for (a = this.items.length = this.length -= e - o; this[a]; )
						delete this[a++];
					return new re(n);
				}),
				(ie.exclude = function (t) {
					for (var e = 0, r = this.length; e < r; e++)
						if (this[e] == t) return this.splice(e, 1), !0;
				}),
				(ie.animate = function (t, e, r, i) {
					(!j.is(r, 'function') && r) || (i = r || null);
					var n,
						s = this.items.length,
						a = s,
						o = this;
					if (!s) return this;
					i &&
						(n = function () {
							--s || i.call(o);
						}),
						(r = j.is(r, u) ? r : n);
					for (
						var l = j.animation(t, e, r, n), h = this.items[--a].animate(l);
						a--;

					)
						this.items[a] &&
							!this.items[a].removed &&
							this.items[a].animateWith(h, l, l),
							(this.items[a] && !this.items[a].removed) || s--;
					return this;
				}),
				(ie.insertAfter = function (t) {
					for (var e = this.items.length; e--; ) this.items[e].insertAfter(t);
					return this;
				}),
				(ie.getBBox = function () {
					for (
						var t, e = [], r = [], i = [], n = [], s = this.items.length;
						s--;

					)
						this.items[s].removed ||
							((t = this.items[s].getBBox()),
							e.push(t.x),
							r.push(t.y),
							i.push(t.x + t.width),
							n.push(t.y + t.height));
					return {
						x: (e = k[x](0, e)),
						y: (r = k[x](0, r)),
						x2: (i = _[x](0, i)),
						y2: (n = _[x](0, n)),
						width: i - e,
						height: n - r,
					};
				}),
				(ie.clone = function (t) {
					t = this.paper.set();
					for (var e = 0, r = this.items.length; e < r; e++)
						t.push(this.items[e].clone());
					return t;
				}),
				(ie.toString = function () {
					return 'Raphaël‘s set';
				}),
				(ie.glow = function (r) {
					var i = this.paper.set();
					return (
						this.forEach(function (t, e) {
							t = t.glow(r);
							null != t &&
								t.forEach(function (t, e) {
									i.push(t);
								});
						}),
						i
					);
				}),
				(ie.isPointInside = function (e, r) {
					var i = !1;
					return (
						this.forEach(function (t) {
							if (t.isPointInside(e, r))
								return console.log('runned'), !(i = !0);
						}),
						i
					);
				}),
				(j.registerFont = function (t) {
					if (!t.face) return t;
					this.fonts = this.fonts || {};
					var e,
						r = { w: t.w, face: {}, glyphs: {} },
						i = t.face['font-family'];
					for (e in t.face) t.face[L](e) && (r.face[e] = t.face[e]);
					if (
						(this.fonts[i] ? this.fonts[i].push(r) : (this.fonts[i] = [r]),
						!t.svg)
					)
						for (var n in ((r.face['units-per-em'] = b(
							t.face['units-per-em'],
							10,
						)),
						t.glyphs))
							if (t.glyphs[L](n)) {
								var s = t.glyphs[n];
								if (
									((r.glyphs[n] = {
										w: s.w,
										k: {},
										d:
											s.d &&
											'M' +
												s.d.replace(/[mlcxtrv]/g, function (t) {
													return (
														{ l: 'L', c: 'C', x: 'z', t: 'm', r: 'l', v: 'c' }[
															t
														] || 'M'
													);
												}) +
												'z',
									}),
									s.k)
								)
									for (var a in s.k) s[L](a) && (r.glyphs[n].k[a] = s.k[a]);
							}
					return t;
				}),
				(K.getFont = function (t, e, r, i) {
					if (
						((i = i || 'normal'),
						(r = r || 'normal'),
						(e =
							+e ||
							{ normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] ||
							400),
						j.fonts)
					) {
						var n,
							s = j.fonts[t];
						if (!s) {
							var a,
								o = new RegExp(
									'(^|\\s)' + t.replace(/[^\w\d\s+!~.:_-]/g, '') + '(\\s|$)',
									'i',
								);
							for (a in j.fonts)
								if (j.fonts[L](a) && o.test(a)) {
									s = j.fonts[a];
									break;
								}
						}
						if (s)
							for (
								var l = 0, h = s.length;
								l < h &&
								((n = s[l]).face['font-weight'] != e ||
									(n.face['font-style'] != r && n.face['font-style']) ||
									n.face['font-stretch'] != i);
								l++
							);
						return n;
					}
				}),
				(K.print = function (t, e, r, i, n, s, a, o) {
					(s = s || 'middle'),
						(a = _(k(a || 0, 1), -1)),
						(o = _(k(o || 1, 3), 1));
					var l,
						h = P(r)[z](''),
						u = 0,
						c = 0,
						f = '';
					if ((j.is(i, 'string') && (i = this.getFont(i)), i)) {
						l = (n || 16) / i.face['units-per-em'];
						for (
							var p,
								d,
								n = i.face.bbox[z](E),
								g = +n[0],
								x = n[3] - n[1],
								y = 0,
								m = +n[1] + ('baseline' == s ? x + +i.face.descent : x / 2),
								v = 0,
								b = h.length;
							v < b;
							v++
						)
							'\n' == h[v]
								? ((c = d = u = 0), (y += x * o))
								: ((p = (c && i.glyphs[h[v - 1]]) || {}),
								  (d = i.glyphs[h[v]]),
								  (u += c
										? (p.w || i.w) + ((p.k && p.k[h[v]]) || 0) + i.w * a
										: 0),
								  (c = 1)),
								d &&
									d.d &&
									(f += j.transformPath(d.d, [
										't',
										u * l,
										y * l,
										's',
										l,
										l,
										g,
										m,
										't',
										(t - g) / l,
										(e - m) / l,
									]));
					}
					return this.path(f).attr({ fill: '#000', stroke: 'none' });
				}),
				(K.add = function (t) {
					if (j.is(t, 'array'))
						for (var e, r = this.set(), i = 0, n = t.length; i < n; i++)
							(e = t[i] || {}), a[L](e.type) && r.push(this[e.type]().attr(e));
					return r;
				}),
				(j.format = function (t, e) {
					var r = j.is(e, v) ? [0][M](e) : arguments;
					return (
						t &&
							j.is(t, u) &&
							r.length - 1 &&
							(t = t.replace(n, function (t, e) {
								return null == r[++e] ? '' : r[e];
							})),
						t || ''
					);
				}),
				(j.fullfill = (function () {
					var e = /\{([^\}]+)\}/g,
						n = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
					return function (t, i) {
						return String(t).replace(e, function (t, e) {
							return (
								(r = t),
								(s = t = i),
								e.replace(n, function (t, e, r, i, n) {
									(e = e || i),
										s &&
											(e in s && (s = s[e]),
											'function' == typeof s && n && (s = s()));
								}),
								(s = (null == s || s == t ? r : s) + '')
							);
							var r, s;
						});
					};
				})()),
				(j.ninja = function () {
					return r.was ? (d.win.Raphael = r.is) : delete t.Raphael, j;
				}),
				(j.st = ie),
				(function (e, t, r) {
					null == e.readyState &&
						e.addEventListener &&
						(e.addEventListener(
							t,
							(r = function () {
								e.removeEventListener(t, r, !1), (e.readyState = 'complete');
							}),
							!1,
						),
						(e.readyState = 'loading')),
						(function t() {
							/in/.test(e.readyState)
								? setTimeout(t, 9)
								: j.eve('raphael.DOMload');
						})();
				})(document, 'DOMContentLoaded'),
				N.on('raphael.DOMload', function () {
					i = !0;
				}),
				(function () {
					if (j.svg) {
						var k = 'hasOwnProperty',
							C = String,
							g = parseFloat,
							x = parseInt,
							y = Math,
							m = y.max,
							v = y.abs,
							b = y.pow,
							_ = /[, ]+/,
							f = j.eve,
							w = 'http://www.w3.org/1999/xlink',
							B = {
								block: 'M5,0 0,2.5 5,5z',
								classic: 'M5,0 0,2.5 5,5 3.5,3 3.5,2z',
								diamond: 'M2.5,0 5,2.5 2.5,5 0,2.5z',
								open: 'M6,1 1,3.5 6,6',
								oval: 'M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z',
							},
							S = {};
						j.toString = function () {
							return (
								'Your browser supports SVG.\nYou are running Raphaël ' +
								this.version
							);
						};
						function T(t, e) {
							var i = 'linear',
								r = t.id + e,
								n = 0.5,
								s = 0.5,
								a = t.node,
								o = t.paper,
								l = a.style,
								h = j._g.doc.getElementById(r);
							if (!h) {
								if (
									((e = (e = C(e).replace(
										j._radial_gradient,
										function (t, e, r) {
											return (
												(i = 'radial'),
												e &&
													r &&
													((n = g(e)),
													(r = 2 * (0.5 < (s = g(r))) - 1),
													0.25 < b(n - 0.5, 2) + b(s - 0.5, 2) &&
														(s = y.sqrt(0.25 - b(n - 0.5, 2)) * r + 0.5) &&
														0.5 != s &&
														(s = s.toFixed(5) - 1e-5 * r)),
												''
											);
										},
									)).split(/\s*\-\s*/)),
									'linear' == i)
								) {
									var u = e.shift(),
										u = -g(u);
									if (isNaN(u)) return null;
									var c = [0, 0, y.cos(j.rad(u)), y.sin(j.rad(u))],
										u = 1 / (m(v(c[2]), v(c[3])) || 1);
									(c[2] *= u),
										(c[3] *= u),
										c[2] < 0 && ((c[0] = -c[2]), (c[2] = 0)),
										c[3] < 0 && ((c[1] = -c[3]), (c[3] = 0));
								}
								var f = j._parseDots(e);
								if (!f) return null;
								if (
									((r = r.replace(/[\(\)\s,\xb0#]/g, '_')),
									t.gradient &&
										r != t.gradient.id &&
										(o.defs.removeChild(t.gradient), delete t.gradient),
									!t.gradient)
								) {
									(h = L(i + 'Gradient', { id: r })),
										(t.gradient = h),
										L(
											h,
											'radial' == i
												? { fx: n, fy: s }
												: {
														x1: c[0],
														y1: c[1],
														x2: c[2],
														y2: c[3],
														gradientTransform: t.matrix.invert(),
												  },
										),
										o.defs.appendChild(h);
									for (var p = 0, d = f.length; p < d; p++)
										h.appendChild(
											L('stop', {
												offset: f[p].offset || (p ? '100%' : '0%'),
												'stop-color': f[p].color || '#fff',
											}),
										);
								}
							}
							return (
								L(a, {
									fill: 'url(#' + r + ')',
									opacity: 1,
									'fill-opacity': 1,
								}),
								(l.fill = ''),
								(l.opacity = 1),
								(l.fillOpacity = 1)
							);
						}
						function A(t) {
							var e = t.getBBox(1);
							L(t.pattern, {
								patternTransform:
									t.matrix.invert() + ' translate(' + e.x + ',' + e.y + ')',
							});
						}
						function N(t, e, r) {
							if ('path' == t.type) {
								for (
									var i,
										n,
										s,
										a,
										o,
										l,
										h,
										u,
										c,
										f = C(e).toLowerCase().split('-'),
										p = t.paper,
										d = r ? 'end' : 'start',
										g = t.node,
										x = t.attrs,
										y = x['stroke-width'],
										m = f.length,
										v = 'classic',
										b = 3,
										_ = 3,
										w = 5;
									m--;

								)
									switch (f[m]) {
										case 'block':
										case 'classic':
										case 'oval':
										case 'diamond':
										case 'open':
										case 'none':
											v = f[m];
											break;
										case 'wide':
											_ = 5;
											break;
										case 'narrow':
											_ = 2;
											break;
										case 'long':
											b = 5;
											break;
										case 'short':
											b = 2;
									}
								for (u in ((u =
									'open' == v
										? ((b += 2),
										  (_ += 2),
										  (w += 2),
										  (l = 1),
										  (n = r ? 4 : 1),
										  { fill: 'none', stroke: x.stroke })
										: ((n = l = b / 2), { fill: x.stroke, stroke: 'none' })),
								t._.arrows
									? r
										? (t._.arrows.endPath && S[t._.arrows.endPath]--,
										  t._.arrows.endMarker && S[t._.arrows.endMarker]--)
										: (t._.arrows.startPath && S[t._.arrows.startPath]--,
										  t._.arrows.startMarker && S[t._.arrows.startMarker]--)
									: (t._.arrows = {}),
								'none' != v
									? ((s = 'raphael-marker-' + v),
									  (a = 'raphael-marker-' + d + v + b + _),
									  j._g.doc.getElementById(s)
											? S[s]++
											: (p.defs.appendChild(
													L(L('path'), {
														'stroke-linecap': 'round',
														d: B[v],
														id: s,
													}),
											  ),
											  (S[s] = 1)),
									  (o = j._g.doc.getElementById(a))
											? (S[a]++, (h = o.getElementsByTagName('use')[0]))
											: ((o = L(L('marker'), {
													id: a,
													markerHeight: _,
													markerWidth: b,
													orient: 'auto',
													refX: n,
													refY: _ / 2,
											  })),
											  (h = L(L('use'), {
													'xlink:href': '#' + s,
													transform:
														(r
															? 'rotate(180 ' + b / 2 + ' ' + _ / 2 + ') '
															: '') +
														'scale(' +
														b / w +
														',' +
														_ / w +
														')',
													'stroke-width': (1 / ((b / w + _ / w) / 2)).toFixed(
														4,
													),
											  })),
											  o.appendChild(h),
											  p.defs.appendChild(o),
											  (S[a] = 1)),
									  L(h, u),
									  (l = l * ('diamond' != v && 'oval' != v)),
									  (h = r
											? ((i = t._.arrows.startdx * y || 0),
											  j.getTotalLength(x.path) - l * y)
											: ((i = l * y),
											  j.getTotalLength(x.path) -
													(t._.arrows.enddx * y || 0))),
									  ((u = {})['marker-' + d] = 'url(#' + a + ')'),
									  (h || i) && (u.d = j.getSubpath(x.path, i, h)),
									  L(g, u),
									  (t._.arrows[d + 'Path'] = s),
									  (t._.arrows[d + 'Marker'] = a),
									  (t._.arrows[d + 'dx'] = l),
									  (t._.arrows[d + 'Type'] = v),
									  (t._.arrows[d + 'String'] = e))
									: ((h = r
											? ((i = t._.arrows.startdx * y || 0),
											  j.getTotalLength(x.path) - i)
											: ((i = 0),
											  j.getTotalLength(x.path) -
													(t._.arrows.enddx * y || 0))),
									  t._.arrows[d + 'Path'] &&
											L(g, { d: j.getSubpath(x.path, i, h) }),
									  delete t._.arrows[d + 'Path'],
									  delete t._.arrows[d + 'Marker'],
									  delete t._.arrows[d + 'dx'],
									  delete t._.arrows[d + 'Type'],
									  delete t._.arrows[d + 'String']),
								S))
									!S[k](u) ||
										S[u] ||
										((c = j._g.doc.getElementById(u)) &&
											c.parentNode.removeChild(c));
							}
						}
						function E(t, e, r) {
							if ((e = l[C(e).toLowerCase()])) {
								for (
									var i = t.attrs['stroke-width'] || '1',
										n =
											{ round: i, square: i, butt: 0 }[
												t.attrs['stroke-linecap'] || r['stroke-linecap']
											] || 0,
										s = [],
										a = e.length;
									a--;

								)
									s[a] = e[a] * i + (a % 2 ? 1 : -1) * n;
								L(t.node, { 'stroke-dasharray': s.join(',') });
							}
						}
						function p(t, e) {
							var r,
								i = t.node,
								n = t.attrs,
								s = i.style.visibility;
							for (r in ((i.style.visibility = 'hidden'), e))
								if (e[k](r) && j._availableAttrs[k](r)) {
									var a = e[r];
									switch (((n[r] = a), r)) {
										case 'blur':
											t.blur(a);
											break;
										case 'href':
										case 'title':
											var o = L('title'),
												l = j._g.doc.createTextNode(a);
											o.appendChild(l), i.appendChild(o);
											break;
										case 'target':
											var h = i.parentNode;
											'a' != h.tagName.toLowerCase() &&
												((o = L('a')),
												h.insertBefore(o, i),
												o.appendChild(i),
												(h = o)),
												'target' == r
													? h.setAttributeNS(
															w,
															'show',
															'blank' == a ? 'new' : a,
													  )
													: h.setAttributeNS(w, r, a);
											break;
										case 'cursor':
											i.style.cursor = a;
											break;
										case 'transform':
											t.transform(a);
											break;
										case 'arrow-start':
											N(t, a);
											break;
										case 'arrow-end':
											N(t, a, 1);
											break;
										case 'clip-rect':
											var u,
												l = C(a).split(_);
											4 == l.length &&
												(t.clip &&
													t.clip.parentNode.parentNode.removeChild(
														t.clip.parentNode,
													),
												(h = L('clipPath')),
												(u = L('rect')),
												(h.id = j.createUUID()),
												L(u, { x: l[0], y: l[1], width: l[2], height: l[3] }),
												h.appendChild(u),
												t.paper.defs.appendChild(h),
												L(i, { 'clip-path': 'url(#' + h.id + ')' }),
												(t.clip = u)),
												a ||
													((u = i.getAttribute('clip-path')) &&
														((d = j._g.doc.getElementById(
															u.replace(/(^url\(#|\)$)/g, ''),
														)) && d.parentNode.removeChild(d),
														L(i, { 'clip-path': '' }),
														delete t.clip));
											break;
										case 'path':
											'path' == t.type &&
												(L(i, {
													d: a ? (n.path = j._pathToAbsolute(a)) : 'M0,0',
												}),
												(t._.dirty = 1),
												t._.arrows &&
													('startString' in t._.arrows &&
														N(t, t._.arrows.startString),
													'endString' in t._.arrows &&
														N(t, t._.arrows.endString, 1)));
											break;
										case 'width':
											if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fx)) break;
											(r = 'x'), (a = n.x);
										case 'x':
											n.fx && (a = -n.x - (n.width || 0));
										case 'rx':
											if ('rx' == r && 'rect' == t.type) break;
										case 'cx':
											i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
											break;
										case 'height':
											if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fy)) break;
											(r = 'y'), (a = n.y);
										case 'y':
											n.fy && (a = -n.y - (n.height || 0));
										case 'ry':
											if ('ry' == r && 'rect' == t.type) break;
										case 'cy':
											i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
											break;
										case 'r':
											'rect' == t.type
												? L(i, { rx: a, ry: a })
												: i.setAttribute(r, a),
												(t._.dirty = 1);
											break;
										case 'src':
											'image' == t.type && i.setAttributeNS(w, 'href', a);
											break;
										case 'stroke-width':
											(1 == t._.sx && 1 == t._.sy) ||
												(a /= m(v(t._.sx), v(t._.sy)) || 1),
												t.paper._vbSize && (a *= t.paper._vbSize),
												i.setAttribute(r, a),
												n['stroke-dasharray'] && E(t, n['stroke-dasharray'], e),
												t._.arrows &&
													('startString' in t._.arrows &&
														N(t, t._.arrows.startString),
													'endString' in t._.arrows &&
														N(t, t._.arrows.endString, 1));
											break;
										case 'stroke-dasharray':
											E(t, a, e);
											break;
										case 'fill':
											if (C(a).match(j._ISURL)) {
												L(i, { fill: a });
												break;
											}
											var c,
												f,
												p = j.getRGB(a);
											if (p.error) {
												if (
													('circle' == t.type ||
														'ellipse' == t.type ||
														'r' != C(a).charAt()) &&
													T(t, a)
												) {
													!('opacity' in n || 'fill-opacity' in n) ||
														((c = j._g.doc.getElementById(
															i
																.getAttribute('fill')
																.replace(/^url\(#|\)$/g, ''),
														)) &&
															((f = c.getElementsByTagName('stop')),
															L(f[f.length - 1], {
																'stop-opacity':
																	('opacity' in n ? n.opacity : 1) *
																	('fill-opacity' in n ? n['fill-opacity'] : 1),
															}))),
														(n.gradient = a),
														(n.fill = 'none');
													break;
												}
											} else
												delete e.gradient,
													delete n.gradient,
													!j.is(n.opacity, 'undefined') &&
														j.is(e.opacity, 'undefined') &&
														L(i, { opacity: n.opacity }),
													!j.is(n['fill-opacity'], 'undefined') &&
														j.is(e['fill-opacity'], 'undefined') &&
														L(i, { 'fill-opacity': n['fill-opacity'] });
											p[k]('opacity') &&
												L(i, {
													'fill-opacity':
														1 < p.opacity ? p.opacity / 100 : p.opacity,
												});
										case 'stroke':
											(p = j.getRGB(a)),
												i.setAttribute(r, p.hex),
												'stroke' == r &&
													p[k]('opacity') &&
													L(i, {
														'stroke-opacity':
															1 < p.opacity ? p.opacity / 100 : p.opacity,
													}),
												'stroke' == r &&
													t._.arrows &&
													('startString' in t._.arrows &&
														N(t, t._.arrows.startString),
													'endString' in t._.arrows &&
														N(t, t._.arrows.endString, 1));
											break;
										case 'gradient':
											('circle' != t.type &&
												'ellipse' != t.type &&
												'r' == C(a).charAt()) ||
												T(t, a);
											break;
										case 'opacity':
											n.gradient &&
												!n[k]('stroke-opacity') &&
												L(i, { 'stroke-opacity': 1 < a ? a / 100 : a });
										case 'fill-opacity':
											if (n.gradient) {
												(c = j._g.doc.getElementById(
													i.getAttribute('fill').replace(/^url\(#|\)$/g, ''),
												)) &&
													((f = c.getElementsByTagName('stop')),
													L(f[f.length - 1], { 'stop-opacity': a }));
												break;
											}
										default:
											'font-size' == r && (a = x(a, 10) + 'px');
											var d = r.replace(/(\-.)/g, function (t) {
												return t.substring(1).toUpperCase();
											});
											(i.style[d] = a), (t._.dirty = 1), i.setAttribute(r, a);
									}
								}
							M(t, e), (i.style.visibility = s);
						}
						function o(t, e) {
							((this[0] = this.node = t).raphael = !0),
								(this.id = j._oid++),
								(t.raphaelid = this.id),
								(this.matrix = j.matrix()),
								(this.realPath = null),
								(this.paper = e),
								(this.attrs = this.attrs || {}),
								(this._ = {
									transform: [],
									sx: 1,
									sy: 1,
									deg: 0,
									dx: 0,
									dy: 0,
									dirty: 1,
								}),
								e.bottom || (e.bottom = this),
								(this.prev = e.top),
								e.top && (e.top.next = this),
								((e.top = this).next = null);
						}
						var L = function (t, e) {
								if (e)
									for (var r in ('string' == typeof t && (t = L(t)), e))
										e[k](r) &&
											('xlink:' == r.substring(0, 6)
												? t.setAttributeNS(w, r.substring(6), C(e[r]))
												: t.setAttribute(r, C(e[r])));
								else
									(t = j._g.doc.createElementNS(
										'http://www.w3.org/2000/svg',
										t,
									)).style &&
										(t.style.webkitTapHighlightColor = 'rgba(0,0,0,0)');
								return t;
							},
							l = {
								'': [0],
								none: [0],
								'-': [3, 1],
								'.': [1, 1],
								'-.': [3, 1, 1, 1],
								'-..': [3, 1, 1, 1, 1, 1],
								'. ': [1, 3],
								'- ': [4, 3],
								'--': [8, 3],
								'- .': [4, 3, 1, 3],
								'--.': [8, 3, 1, 3],
								'--..': [8, 3, 1, 3, 1, 3],
							},
							M = function (t, e) {
								if (
									'text' == t.type &&
									(e[k]('text') ||
										e[k]('font') ||
										e[k]('font-size') ||
										e[k]('x') ||
										e[k]('y'))
								) {
									var r = t.attrs,
										i = t.node,
										n = i.firstChild
											? x(
													j._g.doc.defaultView
														.getComputedStyle(i.firstChild, '')
														.getPropertyValue('font-size'),
													10,
											  )
											: 10;
									if (e[k]('text')) {
										for (r.text = e.text; i.firstChild; )
											i.removeChild(i.firstChild);
										for (
											var s,
												a = C(e.text).split('\n'),
												o = [],
												l = 0,
												h = a.length;
											l < h;
											l++
										)
											(s = L('tspan')),
												l && L(s, { dy: 1.2 * n, x: r.x }),
												s.appendChild(j._g.doc.createTextNode(a[l])),
												i.appendChild(s),
												(o[l] = s);
									} else
										for (
											l = 0, h = (o = i.getElementsByTagName('tspan')).length;
											l < h;
											l++
										)
											l ? L(o[l], { dy: 1.2 * n, x: r.x }) : L(o[0], { dy: 0 });
									L(i, { x: r.x, y: r.y }), (t._.dirty = 1);
									(t = t._getBBox()), (t = r.y - (t.y + t.height / 2));
									t && j.is(t, 'finite') && L(o[0], { dy: t });
								}
							},
							t = j.el;
						((o.prototype = t).constructor = o),
							(j._engine.path = function (t, e) {
								var r = L('path');
								e.canvas && e.canvas.appendChild(r);
								e = new o(r, e);
								return (
									(e.type = 'path'),
									p(e, { fill: 'none', stroke: '#000', path: t }),
									e
								);
							}),
							(t.rotate = function (t, e, r) {
								return (
									this.removed ||
										((t = C(t).split(_)).length - 1 &&
											((e = g(t[1])), (r = g(t[2]))),
										(t = g(t[0])),
										null == r && (e = r),
										(null != e && null != r) ||
											((e = (i = this.getBBox(1)).x + i.width / 2),
											(r = i.y + i.height / 2)),
										this.transform(this._.transform.concat([['r', t, e, r]]))),
									this
								);
								var i;
							}),
							(t.scale = function (t, e, r, i) {
								return (
									this.removed ||
										((t = C(t).split(_)).length - 1 &&
											((e = g(t[1])), (r = g(t[2])), (i = g(t[3]))),
										(t = g(t[0])),
										null == e && (e = t),
										null == i && (r = i),
										(null != r && null != i) || (n = this.getBBox(1)),
										(r = null == r ? n.x + n.width / 2 : r),
										(i = null == i ? n.y + n.height / 2 : i),
										this.transform(
											this._.transform.concat([['s', t, e, r, i]]),
										)),
									this
								);
								var n;
							}),
							(t.translate = function (t, e) {
								return (
									this.removed ||
										((t = C(t).split(_)).length - 1 && (e = g(t[1])),
										(t = g(t[0]) || 0),
										(e = +e || 0),
										this.transform(this._.transform.concat([['t', t, e]]))),
									this
								);
							}),
							(t.transform = function (t) {
								var e = this._;
								return null == t
									? e.transform
									: (j._extractTransform(this, t),
									  this.clip &&
											L(this.clip, { transform: this.matrix.invert() }),
									  this.pattern && A(this),
									  this.node && L(this.node, { transform: this.matrix }),
									  (1 == e.sx && 1 == e.sy) ||
											((e = this.attrs[k]('stroke-width')
												? this.attrs['stroke-width']
												: 1),
											this.attr({ 'stroke-width': e })),
									  this);
							}),
							(t.hide = function () {
								return (
									this.removed ||
										this.paper.safari((this.node.style.display = 'none')),
									this
								);
							}),
							(t.show = function () {
								return (
									this.removed ||
										this.paper.safari((this.node.style.display = '')),
									this
								);
							}),
							(t.remove = function () {
								if (!this.removed && this.node.parentNode) {
									var t,
										e = this.paper;
									for (t in (e.__set__ && e.__set__.exclude(this),
									f.unbind('raphael.*.*.' + this.id),
									this.gradient && e.defs.removeChild(this.gradient),
									j._tear(this, e),
									'a' == this.node.parentNode.tagName.toLowerCase()
										? this.node.parentNode.parentNode.removeChild(
												this.node.parentNode,
										  )
										: this.node.parentNode.removeChild(this.node),
									this))
										this[t] =
											'function' == typeof this[t]
												? j._removedFactory(t)
												: null;
									this.removed = !0;
								}
							}),
							(t._getBBox = function () {
								var t;
								'none' == this.node.style.display && (this.show(), (t = !0));
								var e = {};
								try {
									e = this.node.getBBox();
								} catch (t) {
								} finally {
									e = e || {};
								}
								return t && this.hide(), e;
							}),
							(t.attr = function (t, e) {
								if (this.removed) return this;
								if (null == t) {
									var r,
										i = {};
									for (r in this.attrs)
										this.attrs[k](r) && (i[r] = this.attrs[r]);
									return (
										i.gradient &&
											'none' == i.fill &&
											(i.fill = i.gradient) &&
											delete i.gradient,
										(i.transform = this._.transform),
										i
									);
								}
								if (null == e && j.is(t, 'string')) {
									if (
										'fill' == t &&
										'none' == this.attrs.fill &&
										this.attrs.gradient
									)
										return this.attrs.gradient;
									if ('transform' == t) return this._.transform;
									for (
										var n = t.split(_), s = {}, a = 0, o = n.length;
										a < o;
										a++
									)
										(t = n[a]) in this.attrs
											? (s[t] = this.attrs[t])
											: j.is(this.paper.customAttributes[t], 'function')
											? (s[t] = this.paper.customAttributes[t].def)
											: (s[t] = j._availableAttrs[t]);
									return o - 1 ? s : s[n[0]];
								}
								if (null == e && j.is(t, 'array')) {
									for (s = {}, a = 0, o = t.length; a < o; a++)
										s[t[a]] = this.attr(t[a]);
									return s;
								}
								var l, h;
								for (h in (null != e
									? ((l = {})[t] = e)
									: null != t && j.is(t, 'object') && (l = t),
								l))
									f('raphael.attr.' + h + '.' + this.id, this, l[h]);
								for (h in this.paper.customAttributes)
									if (
										this.paper.customAttributes[k](h) &&
										l[k](h) &&
										j.is(this.paper.customAttributes[h], 'function')
									) {
										var u,
											c = this.paper.customAttributes[h].apply(
												this,
												[].concat(l[h]),
											);
										for (u in ((this.attrs[h] = l[h]), c))
											c[k](u) && (l[u] = c[u]);
									}
								return p(this, l), this;
							}),
							(t.toFront = function () {
								if (this.removed) return this;
								'a' == this.node.parentNode.tagName.toLowerCase()
									? this.node.parentNode.parentNode.appendChild(
											this.node.parentNode,
									  )
									: this.node.parentNode.appendChild(this.node);
								var t = this.paper;
								return t.top != this && j._tofront(this, t), this;
							}),
							(t.toBack = function () {
								if (this.removed) return this;
								var t = this.node.parentNode;
								'a' == t.tagName.toLowerCase()
									? t.parentNode.insertBefore(
											this.node.parentNode,
											this.node.parentNode.parentNode.firstChild,
									  )
									: t.firstChild != this.node &&
									  t.insertBefore(this.node, this.node.parentNode.firstChild),
									j._toback(this, this.paper);
								this.paper;
								return this;
							}),
							(t.insertAfter = function (t) {
								if (this.removed) return this;
								var e = t.node || t[t.length - 1].node;
								return (
									e.nextSibling
										? e.parentNode.insertBefore(this.node, e.nextSibling)
										: e.parentNode.appendChild(this.node),
									j._insertafter(this, t, this.paper),
									this
								);
							}),
							(t.insertBefore = function (t) {
								if (this.removed) return this;
								var e = t.node || t[0].node;
								return (
									e.parentNode.insertBefore(this.node, e),
									j._insertbefore(this, t, this.paper),
									this
								);
							}),
							(t.blur = function (t) {
								var e,
									r,
									i = this;
								return (
									0 != +t
										? ((e = L('filter')),
										  (r = L('feGaussianBlur')),
										  (i.attrs.blur = t),
										  (e.id = j.createUUID()),
										  L(r, { stdDeviation: +t || 1.5 }),
										  e.appendChild(r),
										  i.paper.defs.appendChild(e),
										  (i._blur = e),
										  L(i.node, { filter: 'url(#' + e.id + ')' }))
										: (i._blur &&
												(i._blur.parentNode.removeChild(i._blur),
												delete i._blur,
												delete i.attrs.blur),
										  i.node.removeAttribute('filter')),
									i
								);
							}),
							(j._engine.circle = function (t, e, r, i) {
								var n = L('circle');
								t.canvas && t.canvas.appendChild(n);
								t = new o(n, t);
								return (
									(t.attrs = {
										cx: e,
										cy: r,
										r: i,
										fill: 'none',
										stroke: '#000',
									}),
									(t.type = 'circle'),
									L(n, t.attrs),
									t
								);
							}),
							(j._engine.rect = function (t, e, r, i, n, s) {
								var a = L('rect');
								t.canvas && t.canvas.appendChild(a);
								t = new o(a, t);
								return (
									(t.attrs = {
										x: e,
										y: r,
										width: i,
										height: n,
										r: s || 0,
										rx: s || 0,
										ry: s || 0,
										fill: 'none',
										stroke: '#000',
									}),
									(t.type = 'rect'),
									L(a, t.attrs),
									t
								);
							}),
							(j._engine.ellipse = function (t, e, r, i, n) {
								var s = L('ellipse');
								t.canvas && t.canvas.appendChild(s);
								t = new o(s, t);
								return (
									(t.attrs = {
										cx: e,
										cy: r,
										rx: i,
										ry: n,
										fill: 'none',
										stroke: '#000',
									}),
									(t.type = 'ellipse'),
									L(s, t.attrs),
									t
								);
							}),
							(j._engine.image = function (t, e, r, i, n, s) {
								var a = L('image');
								L(a, {
									x: r,
									y: i,
									width: n,
									height: s,
									preserveAspectRatio: 'none',
								}),
									a.setAttributeNS(w, 'href', e),
									t.canvas && t.canvas.appendChild(a);
								t = new o(a, t);
								return (
									(t.attrs = { x: r, y: i, width: n, height: s, src: e }),
									(t.type = 'image'),
									t
								);
							}),
							(j._engine.text = function (t, e, r, i) {
								var n = L('text');
								t.canvas && t.canvas.appendChild(n);
								t = new o(n, t);
								return (
									(t.attrs = {
										x: e,
										y: r,
										'text-anchor': 'middle',
										text: i,
										font: j._availableAttrs.font,
										stroke: 'none',
										fill: '#000',
									}),
									(t.type = 'text'),
									p(t, t.attrs),
									t
								);
							}),
							(j._engine.setSize = function (t, e) {
								return (
									(this.width = t || this.width),
									(this.height = e || this.height),
									this.canvas.setAttribute('width', this.width),
									this.canvas.setAttribute('height', this.height),
									this._viewBox && this.setViewBox.apply(this, this._viewBox),
									this
								);
							}),
							(j._engine.create = function () {
								var t = j._getContainer.apply(0, arguments),
									e = t && t.container,
									r = t.x,
									i = t.y,
									n = t.width,
									s = t.height;
								if (!e) throw new Error('SVG container not found.');
								var a,
									o = L('svg'),
									t = 'overflow:hidden;',
									r = r || 0,
									i = i || 0;
								return (
									L(o, {
										height: (s = s || 342),
										version: 1.1,
										width: (n = n || 512),
										xmlns: 'http://www.w3.org/2000/svg',
									}),
									1 == e
										? ((o.style.cssText =
												t +
												'position:absolute;left:' +
												r +
												'px;top:' +
												i +
												'px'),
										  j._g.doc.body.appendChild(o),
										  (a = 1))
										: ((o.style.cssText = t + 'position:relative'),
										  e.firstChild
												? e.insertBefore(o, e.firstChild)
												: e.appendChild(o)),
									((e = new j._Paper()).width = n),
									(e.height = s),
									(e.canvas = o),
									e.clear(),
									(e._left = e._top = 0),
									a && (e.renderfix = function () {}),
									e.renderfix(),
									e
								);
							}),
							(j._engine.setViewBox = function (t, e, r, i, n) {
								f('raphael.setViewBox', this, this._viewBox, [t, e, r, i, n]);
								var s,
									a = m(r / this.width, i / this.height),
									o = this.top,
									l = n ? 'meet' : 'xMinYMin',
									h =
										null == t
											? (this._vbSize && (a = 1),
											  delete this._vbSize,
											  '0 0 ' + this.width + ' ' + this.height)
											: ((this._vbSize = a), t + ' ' + e + ' ' + r + ' ' + i);
								for (
									L(this.canvas, { viewBox: h, preserveAspectRatio: l });
									a && o;

								)
									(s = 'stroke-width' in o.attrs ? o.attrs['stroke-width'] : 1),
										o.attr({ 'stroke-width': s }),
										(o._.dirty = 1),
										(o._.dirtyT = 1),
										(o = o.prev);
								return (this._viewBox = [t, e, r, i, !!n]), this;
							}),
							(j.prototype.renderfix = function () {
								var e,
									r = this.canvas,
									t = r.style;
								try {
									e = r.getScreenCTM() || r.createSVGMatrix();
								} catch (t) {
									e = r.createSVGMatrix();
								}
								var i = -e.e % 1,
									n = -e.f % 1;
								(i || n) &&
									(i &&
										((this._left = (this._left + i) % 1),
										(t.left = this._left + 'px')),
									n &&
										((this._top = (this._top + n) % 1),
										(t.top = this._top + 'px')));
							}),
							(j.prototype.clear = function () {
								j.eve('raphael.clear', this);
								for (var t = this.canvas; t.firstChild; )
									t.removeChild(t.firstChild);
								(this.bottom = this.top = null),
									(this.desc = L('desc')).appendChild(
										j._g.doc.createTextNode(
											'Created with Raphaël ' + j.version,
										),
									),
									t.appendChild(this.desc),
									t.appendChild((this.defs = L('defs')));
							}),
							(j.prototype.remove = function () {
								for (var t in (f('raphael.remove', this),
								this.canvas.parentNode &&
									this.canvas.parentNode.removeChild(this.canvas),
								this))
									this[t] =
										'function' == typeof this[t] ? j._removedFactory(t) : null;
							});
						var e,
							r = j.st;
						for (e in t)
							t[k](e) &&
								!r[k](e) &&
								(r[e] = (function (r) {
									return function () {
										var e = arguments;
										return this.forEach(function (t) {
											t[r].apply(t, e);
										});
									};
								})(e));
					}
				})(),
				(function () {
					if (j.vml) {
						function g(t, e, r) {
							var i = j.matrix();
							return i.rotate(-t, 0.5, 0.5), { dx: i.x(e, r), dy: i.y(e, r) };
						}
						function v(t, e, r, i, n, s) {
							var a,
								o = t._,
								l = t.matrix,
								h = o.fillpos,
								u = t.node,
								c = u.style,
								f = 1,
								p = '',
								d = M / e,
								t = M / r;
							(c.visibility = 'hidden'),
								e &&
									r &&
									((u.coordsize = x(d) + A + x(t)),
									(c.rotation = s * (e * r < 0 ? -1 : 1)),
									s && ((i = (a = g(s, i, n)).dx), (n = a.dy)),
									e < 0 && (p += 'x'),
									r < 0 && (p += ' y') && (f = -1),
									(c.flip = p),
									(u.coordorigin = i * -d + A + n * -t),
									(h || o.fillsize) &&
										((t = (t = u.getElementsByTagName(S)) && t[0]),
										u.removeChild(t),
										h &&
											((a = g(s, l.x(h[0], h[1]), l.y(h[0], h[1]))),
											(t.position = a.dx * f + A + a.dy * f)),
										o.fillsize &&
											(t.size =
												o.fillsize[0] * x(e) + A + o.fillsize[1] * x(r)),
										u.appendChild(t)),
									(c.visibility = 'visible'));
						}
						var b = 'hasOwnProperty',
							_ = String,
							w = parseFloat,
							c = Math,
							k = c.round,
							C = c.max,
							B = c.min,
							x = c.abs,
							S = 'fill',
							T = /[, ]+/,
							f = j.eve,
							A = ' ',
							N = {
								M: 'm',
								L: 'l',
								C: 'c',
								Z: 'x',
								m: 't',
								l: 'r',
								c: 'v',
								z: 'x',
							},
							E = /([clmz]),?([^clmz]*)/gi,
							i = / progid:\S+Blur\([^\)]+\)/g,
							L = /-?[^,\s-]+/g,
							h = 'position:absolute;left:0;top:0;width:1px;height:1px',
							M = 21600,
							P = { path: 1, rect: 1, image: 1 },
							z = { circle: 1, ellipse: 1 };
						j.toString = function () {
							return (
								'Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël ' +
								this.version
							);
						};
						function F(t, e, r) {
							for (
								var i = _(e).toLowerCase().split('-'),
									r = r ? 'end' : 'start',
									n = i.length,
									s = 'classic',
									a = 'medium',
									o = 'medium';
								n--;

							)
								switch (i[n]) {
									case 'block':
									case 'classic':
									case 'oval':
									case 'diamond':
									case 'open':
									case 'none':
										s = i[n];
										break;
									case 'wide':
									case 'narrow':
										o = i[n];
										break;
									case 'long':
									case 'short':
										a = i[n];
								}
							t = t.node.getElementsByTagName('stroke')[0];
							(t[r + 'arrow'] = s),
								(t[r + 'arrowlength'] = a),
								(t[r + 'arrowwidth'] = o);
						}
						function p(t, e) {
							t.attrs = t.attrs || {};
							var r,
								i,
								n,
								s,
								a,
								o,
								l,
								h = t.node,
								u = t.attrs,
								c = h.style,
								f =
									P[t.type] &&
									(e.x != u.x ||
										e.y != u.y ||
										e.width != u.width ||
										e.height != u.height ||
										e.cx != u.cx ||
										e.cy != u.cy ||
										e.rx != u.rx ||
										e.ry != u.ry ||
										e.r != u.r),
								p =
									z[t.type] &&
									(u.cx != e.cx ||
										u.cy != e.cy ||
										u.r != e.r ||
										u.rx != e.rx ||
										u.ry != e.ry),
								d = t;
							for (r in e) e[b](r) && (u[r] = e[r]);
							if (
								(f && ((u.path = j._getPath[t.type](t)), (t._.dirty = 1)),
								e.href && (h.href = e.href),
								e.title && (h.title = e.title),
								e.target && (h.target = e.target),
								e.cursor && (c.cursor = e.cursor),
								'blur' in e && t.blur(e.blur),
								((e.path && 'path' == t.type) || f) &&
									((h.path = (function (t) {
										var e = /[ahqstv]/gi,
											r = j._pathToAbsolute;
										if (
											(_(t).match(e) && (r = j._path2curve),
											(e = /[clmz]/g),
											r == j._pathToAbsolute && !_(t).match(e))
										) {
											var i = _(t).replace(E, function (t, e, r) {
												var i = [],
													n = 'm' == e.toLowerCase(),
													s = N[e];
												return (
													r.replace(L, function (t) {
														n &&
															2 == i.length &&
															((s += i + N['m' == e ? 'l' : 'L']), (i = [])),
															i.push(k(t * M));
													}),
													s + i
												);
											});
											return i;
										}
										for (
											var n, s, a = r(t), i = [], o = 0, l = a.length;
											o < l;
											o++
										) {
											(n = a[o]),
												'z' == (s = a[o][0].toLowerCase()) && (s = 'x');
											for (var h = 1, u = n.length; h < u; h++)
												s += k(n[h] * M) + (h != u - 1 ? ',' : '');
											i.push(s);
										}
										return i.join(A);
									})(
										~_(u.path).toLowerCase().indexOf('r')
											? j._pathToAbsolute(u.path)
											: u.path,
									)),
									'image' == t.type &&
										((t._.fillpos = [u.x, u.y]),
										(t._.fillsize = [u.width, u.height]),
										v(t, 1, 1, 0, 0, 0))),
								'transform' in e && t.transform(e.transform),
								p &&
									((s = +u.cx),
									(i = +u.cy),
									(p = +u.rx || +u.r || 0),
									(n = +u.ry || +u.r || 0),
									(h.path = j.format(
										'ar{0},{1},{2},{3},{4},{1},{4},{1}x',
										k((s - p) * M),
										k((i - n) * M),
										k((s + p) * M),
										k((i + n) * M),
										k(s * M),
									)),
									(t._.dirty = 1)),
								'clip-rect' in e &&
									(4 == (i = _(e['clip-rect']).split(T)).length &&
										((i[2] = +i[2] + +i[0]),
										(i[3] = +i[3] + +i[1]),
										((s = (n = h.clipRect || j._g.doc.createElement('div'))
											.style).clip = j.format(
											'rect({1}px {2}px {3}px {0}px)',
											i,
										)),
										h.clipRect ||
											((s.position = 'absolute'),
											(s.top = 0),
											(s.left = 0),
											(s.width = t.paper.width + 'px'),
											(s.height = t.paper.height + 'px'),
											h.parentNode.insertBefore(n, h),
											n.appendChild(h),
											(h.clipRect = n))),
									e['clip-rect'] ||
										(h.clipRect && (h.clipRect.style.clip = 'auto'))),
								t.textpath &&
									((o = t.textpath.style),
									e.font && (o.font = e.font),
									e['font-family'] &&
										(o.fontFamily =
											'"' +
											e['font-family']
												.split(',')[0]
												.replace(/^['"]+|['"]+$/g, '') +
											'"'),
									e['font-size'] && (o.fontSize = e['font-size']),
									e['font-weight'] && (o.fontWeight = e['font-weight']),
									e['font-style'] && (o.fontStyle = e['font-style'])),
								'arrow-start' in e && F(d, e['arrow-start']),
								'arrow-end' in e && F(d, e['arrow-end'], 1),
								(null == e.opacity &&
									null == e['stroke-width'] &&
									null == e.fill &&
									null == e.src &&
									null == e.stroke &&
									null == e['stroke-width'] &&
									null == e['stroke-opacity'] &&
									null == e['fill-opacity'] &&
									null == e['stroke-dasharray'] &&
									null == e['stroke-miterlimit'] &&
									null == e['stroke-linejoin'] &&
									null == e['stroke-linecap']) ||
									((o = (o = h.getElementsByTagName(S)) && o[0]) || (o = R(S)),
									'image' == t.type && e.src && (o.src = e.src),
									e.fill && (o.on = !0),
									(null != o.on && 'none' != e.fill && null !== e.fill) ||
										(o.on = !1),
									o.on &&
										e.fill &&
										((g = _(e.fill).match(j._ISURL))
											? (o.parentNode == h && h.removeChild(o),
											  (o.rotate = !0),
											  (o.src = g[1]),
											  (o.type = 'tile'),
											  (a = t.getBBox(1)),
											  (o.position = a.x + A + a.y),
											  (t._.fillpos = [a.x, a.y]),
											  j._preload(g[1], function () {
													t._.fillsize = [this.offsetWidth, this.offsetHeight];
											  }))
											: ((o.color = j.getRGB(e.fill).hex),
											  (o.src = ''),
											  (o.type = 'solid'),
											  j.getRGB(e.fill).error &&
													(d.type in { circle: 1, ellipse: 1 } ||
														'r' != _(e.fill).charAt()) &&
													I(d, e.fill, o) &&
													((u.fill = 'none'),
													(u.gradient = e.fill),
													(o.rotate = !1)))),
									('fill-opacity' in e || 'opacity' in e) &&
										((l =
											((+u['fill-opacity'] + 1 || 2) - 1) *
											((+u.opacity + 1 || 2) - 1) *
											((+j.getRGB(e.fill).o + 1 || 2) - 1)),
										(l = B(C(l, 0), 1)),
										(o.opacity = l),
										o.src && (o.color = 'none')),
									h.appendChild(o),
									(a = !1),
									(g =
										h.getElementsByTagName('stroke') &&
										h.getElementsByTagName('stroke')[0]) ||
										(a = g = R('stroke')),
									((e.stroke && 'none' != e.stroke) ||
										e['stroke-width'] ||
										null != e['stroke-opacity'] ||
										e['stroke-dasharray'] ||
										e['stroke-miterlimit'] ||
										e['stroke-linejoin'] ||
										e['stroke-linecap']) &&
										(g.on = !0),
									('none' != e.stroke &&
										null !== e.stroke &&
										null != g.on &&
										0 != e.stroke &&
										0 != e['stroke-width']) ||
										(g.on = !1),
									(o = j.getRGB(e.stroke)),
									g.on && e.stroke && (g.color = o.hex),
									(l =
										((+u['stroke-opacity'] + 1 || 2) - 1) *
										((+u.opacity + 1 || 2) - 1) *
										((+o.o + 1 || 2) - 1)),
									(o = 0.75 * (w(e['stroke-width']) || 1)),
									(l = B(C(l, 0), 1)),
									null == e['stroke-width'] && (o = u['stroke-width']),
									e['stroke-width'] && (g.weight = o),
									o && o < 1 && (l *= o) && (g.weight = 1),
									(g.opacity = l),
									e['stroke-linejoin'] &&
										(g.joinstyle = e['stroke-linejoin'] || 'miter'),
									(g.miterlimit = e['stroke-miterlimit'] || 8),
									e['stroke-linecap'] &&
										(g.endcap =
											'butt' == e['stroke-linecap']
												? 'flat'
												: 'square' == e['stroke-linecap']
												? 'square'
												: 'round'),
									e['stroke-dasharray'] &&
										((l = {
											'-': 'shortdash',
											'.': 'shortdot',
											'-.': 'shortdashdot',
											'-..': 'shortdashdotdot',
											'. ': 'dot',
											'- ': 'dash',
											'--': 'longdash',
											'- .': 'dashdot',
											'--.': 'longdashdot',
											'--..': 'longdashdotdot',
										}),
										(g.dashstyle = l[b](e['stroke-dasharray'])
											? l[e['stroke-dasharray']]
											: '')),
									a && h.appendChild(g)),
								'text' == d.type)
							) {
								d.paper.canvas.style.display = '';
								var h = d.paper.span,
									g = u.font && u.font.match(/\d+(?:\.\d*)?(?=px)/),
									c = h.style;
								u.font && (c.font = u.font),
									u['font-family'] && (c.fontFamily = u['font-family']),
									u['font-weight'] && (c.fontWeight = u['font-weight']),
									u['font-style'] && (c.fontStyle = u['font-style']),
									(g = w(u['font-size'] || (g && g[0])) || 10),
									(c.fontSize = 100 * g + 'px'),
									d.textpath.string &&
										(h.innerHTML = _(d.textpath.string)
											.replace(/</g, '&#60;')
											.replace(/&/g, '&#38;')
											.replace(/\n/g, '<br>'));
								h = h.getBoundingClientRect();
								(d.W = u.w = (h.right - h.left) / 100),
									(d.H = u.h = (h.bottom - h.top) / 100),
									(d.X = u.x),
									(d.Y = u.y + d.H / 2),
									('x' in e || 'y' in e) &&
										(d.path.v = j.format(
											'm{0},{1}l{2},{1}',
											k(u.x * M),
											k(u.y * M),
											k(u.x * M) + 1,
										));
								for (
									var x = [
											'x',
											'y',
											'text',
											'font',
											'font-family',
											'font-weight',
											'font-style',
											'font-size',
										],
										y = 0,
										m = x.length;
									y < m;
									y++
								)
									if (x[y] in e) {
										d._.dirty = 1;
										break;
									}
								switch (u['text-anchor']) {
									case 'start':
										(d.textpath.style['v-text-align'] = 'left'),
											(d.bbx = d.W / 2);
										break;
									case 'end':
										(d.textpath.style['v-text-align'] = 'right'),
											(d.bbx = -d.W / 2);
										break;
									default:
										(d.textpath.style['v-text-align'] = 'center'), (d.bbx = 0);
								}
								d.textpath.style['v-text-kern'] = !0;
							}
						}
						function u(t, e) {
							((this[0] = this.node = t).raphael = !0),
								(this.id = j._oid++),
								(t.raphaelid = this.id),
								(this.X = 0),
								(this.Y = 0),
								(this.attrs = {}),
								(this.paper = e),
								(this.matrix = j.matrix()),
								(this._ = {
									transform: [],
									sx: 1,
									sy: 1,
									dx: 0,
									dy: 0,
									deg: 0,
									dirty: 1,
									dirtyT: 1,
								}),
								e.bottom || (e.bottom = this),
								(this.prev = e.top),
								e.top && (e.top.next = this),
								((e.top = this).next = null);
						}
						var R,
							I = function (t, e, r) {
								t.attrs = t.attrs || {};
								t.attrs;
								var i = Math.pow,
									n = 'linear',
									s = '.5 .5';
								if (
									((t.attrs.gradient = e),
									(e = (e = _(e).replace(
										j._radial_gradient,
										function (t, e, r) {
											return (
												(n = 'radial'),
												e &&
													r &&
													((e = w(e)),
													(r = w(r)),
													0.25 < i(e - 0.5, 2) + i(r - 0.5, 2) &&
														(r =
															c.sqrt(0.25 - i(e - 0.5, 2)) *
																(2 * (0.5 < r) - 1) +
															0.5),
													(s = e + A + r)),
												''
											);
										},
									)).split(/\s*\-\s*/)),
									'linear' == n)
								) {
									var a = e.shift(),
										a = -w(a);
									if (isNaN(a)) return null;
								}
								var o = j._parseDots(e);
								if (!o) return null;
								if (((t = t.shape || t.node), o.length)) {
									t.removeChild(r),
										(r.on = !0),
										(r.method = 'none'),
										(r.color = o[0].color),
										(r.color2 = o[o.length - 1].color);
									for (var l = [], h = 0, u = o.length; h < u; h++)
										o[h].offset && l.push(o[h].offset + A + o[h].color);
									(r.colors = l.length ? l.join() : '0% ' + r.color),
										'radial' == n
											? ((r.type = 'gradientTitle'),
											  (r.focus = '100%'),
											  (r.focussize = '0 0'),
											  (r.focusposition = s),
											  (r.angle = 0))
											: ((r.type = 'gradient'), (r.angle = (270 - a) % 360)),
										t.appendChild(r);
								}
								return 1;
							},
							t = j.el;
						((u.prototype = t).constructor = u),
							(t.transform = function (t) {
								if (null == t) return this._.transform;
								var e,
									r = this.paper._viewBoxShift,
									i = r
										? 's' + [r.scale, r.scale] + '-1-1t' + [r.dx, r.dy]
										: '';
								r &&
									(e = t =
										_(t).replace(/\.{3}|\u2026/g, this._.transform || '')),
									j._extractTransform(this, i + t);
								var n = this.matrix.clone(),
									s = this.skew,
									a = this.node,
									o = ~_(this.attrs.fill).indexOf('-'),
									r = !_(this.attrs.fill).indexOf('url(');
								return (
									n.translate(1, 1),
									r || o || 'image' == this.type
										? ((s.matrix = '1 0 0 1'),
										  (s.offset = '0 0'),
										  (i = n.split()),
										  (o && i.noRotation) || !i.isSimple
												? ((a.style.filter = n.toFilter()),
												  (t = this.getBBox()),
												  (r = this.getBBox(1)),
												  (o = t.x - r.x),
												  (r = t.y - r.y),
												  (a.coordorigin = o * -M + A + r * -M),
												  v(this, 1, 1, o, r, 0))
												: ((a.style.filter = ''),
												  v(this, i.scalex, i.scaley, i.dx, i.dy, i.rotate)))
										: ((a.style.filter = ''),
										  (s.matrix = _(n)),
										  (s.offset = n.offset())),
									e && (this._.transform = e),
									this
								);
							}),
							(t.rotate = function (t, e, r) {
								return this.removed
									? this
									: null != t
									? ((t = _(t).split(T)).length - 1 &&
											((e = w(t[1])), (r = w(t[2]))),
									  (t = w(t[0])),
									  null == r && (e = r),
									  (null != e && null != r) ||
											((e = (i = this.getBBox(1)).x + i.width / 2),
											(r = i.y + i.height / 2)),
									  (this._.dirtyT = 1),
									  this.transform(this._.transform.concat([['r', t, e, r]])),
									  this)
									: void 0;
								var i;
							}),
							(t.translate = function (t, e) {
								return (
									this.removed ||
										((t = _(t).split(T)).length - 1 && (e = w(t[1])),
										(t = w(t[0]) || 0),
										(e = +e || 0),
										this._.bbox && ((this._.bbox.x += t), (this._.bbox.y += e)),
										this.transform(this._.transform.concat([['t', t, e]]))),
									this
								);
							}),
							(t.scale = function (t, e, r, i) {
								return (
									this.removed ||
										((t = _(t).split(T)).length - 1 &&
											((e = w(t[1])),
											(r = w(t[2])),
											(i = w(t[3])),
											isNaN(r) && (r = null),
											isNaN(i) && (i = null)),
										(t = w(t[0])),
										null == e && (e = t),
										null == i && (r = i),
										(null != r && null != i) || (n = this.getBBox(1)),
										(r = null == r ? n.x + n.width / 2 : r),
										(i = null == i ? n.y + n.height / 2 : i),
										this.transform(
											this._.transform.concat([['s', t, e, r, i]]),
										),
										(this._.dirtyT = 1)),
									this
								);
								var n;
							}),
							(t.hide = function () {
								return this.removed || (this.node.style.display = 'none'), this;
							}),
							(t.show = function () {
								return this.removed || (this.node.style.display = ''), this;
							}),
							(t._getBBox = function () {
								return this.removed
									? {}
									: {
											x: this.X + (this.bbx || 0) - this.W / 2,
											y: this.Y - this.H,
											width: this.W,
											height: this.H,
									  };
							}),
							(t.remove = function () {
								if (!this.removed && this.node.parentNode) {
									for (var t in (this.paper.__set__ &&
										this.paper.__set__.exclude(this),
									j.eve.unbind('raphael.*.*.' + this.id),
									j._tear(this, this.paper),
									this.node.parentNode.removeChild(this.node),
									this.shape && this.shape.parentNode.removeChild(this.shape),
									this))
										this[t] =
											'function' == typeof this[t]
												? j._removedFactory(t)
												: null;
									this.removed = !0;
								}
							}),
							(t.attr = function (t, e) {
								if (this.removed) return this;
								if (null == t) {
									var r,
										i = {};
									for (r in this.attrs)
										this.attrs[b](r) && (i[r] = this.attrs[r]);
									return (
										i.gradient &&
											'none' == i.fill &&
											(i.fill = i.gradient) &&
											delete i.gradient,
										(i.transform = this._.transform),
										i
									);
								}
								if (null == e && j.is(t, 'string')) {
									if (
										t == S &&
										'none' == this.attrs.fill &&
										this.attrs.gradient
									)
										return this.attrs.gradient;
									for (
										var n = t.split(T), s = {}, a = 0, o = n.length;
										a < o;
										a++
									)
										(t = n[a]) in this.attrs
											? (s[t] = this.attrs[t])
											: j.is(this.paper.customAttributes[t], 'function')
											? (s[t] = this.paper.customAttributes[t].def)
											: (s[t] = j._availableAttrs[t]);
									return o - 1 ? s : s[n[0]];
								}
								if (this.attrs && null == e && j.is(t, 'array')) {
									for (s = {}, a = 0, o = t.length; a < o; a++)
										s[t[a]] = this.attr(t[a]);
									return s;
								}
								var l, h;
								for (h in (null != e && ((l = {})[t] = e),
								null == e && j.is(t, 'object') && (l = t),
								l))
									f('raphael.attr.' + h + '.' + this.id, this, l[h]);
								if (l) {
									for (h in this.paper.customAttributes)
										if (
											this.paper.customAttributes[b](h) &&
											l[b](h) &&
											j.is(this.paper.customAttributes[h], 'function')
										) {
											var u,
												c = this.paper.customAttributes[h].apply(
													this,
													[].concat(l[h]),
												);
											for (u in ((this.attrs[h] = l[h]), c))
												c[b](u) && (l[u] = c[u]);
										}
									l.text &&
										'text' == this.type &&
										(this.textpath.string = l.text),
										p(this, l);
								}
								return this;
							}),
							(t.toFront = function () {
								return (
									this.removed || this.node.parentNode.appendChild(this.node),
									this.paper &&
										this.paper.top != this &&
										j._tofront(this, this.paper),
									this
								);
							}),
							(t.toBack = function () {
								return (
									this.removed ||
										(this.node.parentNode.firstChild != this.node &&
											(this.node.parentNode.insertBefore(
												this.node,
												this.node.parentNode.firstChild,
											),
											j._toback(this, this.paper))),
									this
								);
							}),
							(t.insertAfter = function (t) {
								return (
									this.removed ||
										(t.constructor == j.st.constructor && (t = t[t.length - 1]),
										t.node.nextSibling
											? t.node.parentNode.insertBefore(
													this.node,
													t.node.nextSibling,
											  )
											: t.node.parentNode.appendChild(this.node),
										j._insertafter(this, t, this.paper)),
									this
								);
							}),
							(t.insertBefore = function (t) {
								return (
									this.removed ||
										(t.constructor == j.st.constructor && (t = t[0]),
										t.node.parentNode.insertBefore(this.node, t.node),
										j._insertbefore(this, t, this.paper)),
									this
								);
							}),
							(t.blur = function (t) {
								var e = this.node.runtimeStyle,
									r = (r = e.filter).replace(i, '');
								return (
									0 != +t
										? ((this.attrs.blur = t),
										  (e.filter =
												r +
												A +
												' progid:DXImageTransform.Microsoft.Blur(pixelradius=' +
												(+t || 1.5) +
												')'),
										  (e.margin = j.format('-{0}px 0 0 -{0}px', k(+t || 1.5))))
										: ((e.filter = r), (e.margin = 0), delete this.attrs.blur),
									this
								);
							}),
							(j._engine.path = function (t, e) {
								var r = R('shape');
								(r.style.cssText = h),
									(r.coordsize = M + A + M),
									(r.coordorigin = e.coordorigin);
								var i = new u(r, e),
									n = { fill: 'none', stroke: '#000' };
								t && (n.path = t),
									(i.type = 'path'),
									(i.path = []),
									(i.Path = ''),
									p(i, n),
									e.canvas.appendChild(r);
								e = R('skew');
								return (
									(e.on = !0),
									r.appendChild(e),
									(i.skew = e),
									i.transform(''),
									i
								);
							}),
							(j._engine.rect = function (t, e, r, i, n, s) {
								var a = j._rectPath(e, r, i, n, s),
									o = t.path(a),
									t = o.attrs;
								return (
									(o.X = t.x = e),
									(o.Y = t.y = r),
									(o.W = t.width = i),
									(o.H = t.height = n),
									(t.r = s),
									(t.path = a),
									(o.type = 'rect'),
									o
								);
							}),
							(j._engine.ellipse = function (t, e, r, i, n) {
								(t = t.path()), t.attrs;
								return (
									(t.X = e - i),
									(t.Y = r - n),
									(t.W = 2 * i),
									(t.H = 2 * n),
									(t.type = 'ellipse'),
									p(t, { cx: e, cy: r, rx: i, ry: n }),
									t
								);
							}),
							(j._engine.circle = function (t, e, r, i) {
								(t = t.path()), t.attrs;
								return (
									(t.X = e - i),
									(t.Y = r - i),
									(t.W = t.H = 2 * i),
									(t.type = 'circle'),
									p(t, { cx: e, cy: r, r: i }),
									t
								);
							}),
							(j._engine.image = function (t, e, r, i, n, s) {
								var a = j._rectPath(r, i, n, s),
									o = t.path(a).attr({ stroke: 'none' }),
									l = o.attrs,
									h = o.node,
									t = h.getElementsByTagName(S)[0];
								return (
									(l.src = e),
									(o.X = l.x = r),
									(o.Y = l.y = i),
									(o.W = l.width = n),
									(o.H = l.height = s),
									(l.path = a),
									(o.type = 'image'),
									t.parentNode == h && h.removeChild(t),
									(t.rotate = !0),
									(t.src = e),
									(t.type = 'tile'),
									(o._.fillpos = [r, i]),
									(o._.fillsize = [n, s]),
									h.appendChild(t),
									v(o, 1, 1, 0, 0, 0),
									o
								);
							}),
							(j._engine.text = function (t, e, r, i) {
								var n = R('shape'),
									s = R('path'),
									a = R('textpath');
								(e = e || 0),
									(r = r || 0),
									(i = i || ''),
									(s.v = j.format(
										'm{0},{1}l{2},{1}',
										k(e * M),
										k(r * M),
										k(e * M) + 1,
									)),
									(s.textpathok = !0),
									(a.string = _(i)),
									(a.on = !0),
									(n.style.cssText = h),
									(n.coordsize = M + A + M),
									(n.coordorigin = '0 0');
								var o = new u(n, t),
									l = {
										fill: '#000',
										stroke: 'none',
										font: j._availableAttrs.font,
										text: i,
									};
								(o.shape = n),
									(o.path = s),
									(o.textpath = a),
									(o.type = 'text'),
									(o.attrs.text = _(i)),
									(o.attrs.x = e),
									(o.attrs.y = r),
									(o.attrs.w = 1),
									(o.attrs.h = 1),
									p(o, l),
									n.appendChild(a),
									n.appendChild(s),
									t.canvas.appendChild(n);
								t = R('skew');
								return (
									(t.on = !0),
									n.appendChild(t),
									(o.skew = t),
									o.transform(''),
									o
								);
							}),
							(j._engine.setSize = function (t, e) {
								var r = this.canvas.style;
								return (
									(this.width = t) == +t && (t += 'px'),
									(this.height = e) == +e && (e += 'px'),
									(r.width = t),
									(r.height = e),
									(r.clip = 'rect(0 ' + t + ' ' + e + ' 0)'),
									this._viewBox &&
										j._engine.setViewBox.apply(this, this._viewBox),
									this
								);
							}),
							(j._engine.setViewBox = function (t, e, r, i, n) {
								j.eve('raphael.setViewBox', this, this._viewBox, [
									t,
									e,
									r,
									i,
									n,
								]);
								var s,
									a = this.width,
									o = this.height,
									l = 1 / C(r / a, i / o);
								return (
									n &&
										(r * (s = o / i) < a && (t -= (a - r * s) / 2 / s),
										i * (a = a / r) < o && (e -= (o - i * a) / 2 / a)),
									(this._viewBox = [t, e, r, i, !!n]),
									(this._viewBoxShift = { dx: -t, dy: -e, scale: l }),
									this.forEach(function (t) {
										t.transform('...');
									}),
									this
								);
							}),
							(j._engine.initWin = function (t) {
								var e = t.document;
								e.createStyleSheet().addRule(
									'.rvml',
									'behavior:url(#default#VML)',
								);
								try {
									e.namespaces.rvml ||
										e.namespaces.add('rvml', 'urn:schemas-microsoft-com:vml'),
										(R = function (t) {
											return e.createElement('<rvml:' + t + ' class="rvml">');
										});
								} catch (t) {
									R = function (t) {
										return e.createElement(
											'<' +
												t +
												' xmlns="urn:schemas-microsoft.com:vml" class="rvml">',
										);
									};
								}
							}),
							j._engine.initWin(j._g.win),
							(j._engine.create = function () {
								var t = j._getContainer.apply(0, arguments),
									e = t.container,
									r = t.height,
									i = t.width,
									n = t.x,
									s = t.y;
								if (!e) throw new Error('VML container not found.');
								var a = new j._Paper(),
									o = (a.canvas = j._g.doc.createElement('div')),
									t = o.style,
									n = n || 0,
									s = s || 0,
									i = i || 512,
									r = r || 342;
								return (
									(a.width = i) == +i && (i += 'px'),
									(a.height = r) == +r && (r += 'px'),
									(a.coordsize = 216e5 + A + 216e5),
									(a.coordorigin = '0 0'),
									(a.span = j._g.doc.createElement('span')),
									(a.span.style.cssText =
										'position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;'),
									o.appendChild(a.span),
									(t.cssText = j.format(
										'top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden',
										i,
										r,
									)),
									1 == e
										? (j._g.doc.body.appendChild(o),
										  (t.left = n + 'px'),
										  (t.top = s + 'px'),
										  (t.position = 'absolute'))
										: e.firstChild
										? e.insertBefore(o, e.firstChild)
										: e.appendChild(o),
									(a.renderfix = function () {}),
									a
								);
							}),
							(j.prototype.clear = function () {
								j.eve('raphael.clear', this),
									(this.canvas.innerHTML = ''),
									(this.span = j._g.doc.createElement('span')),
									(this.span.style.cssText =
										'position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;'),
									this.canvas.appendChild(this.span),
									(this.bottom = this.top = null);
							}),
							(j.prototype.remove = function () {
								for (var t in (j.eve('raphael.remove', this),
								this.canvas.parentNode.removeChild(this.canvas),
								this))
									this[t] =
										'function' == typeof this[t] ? j._removedFactory(t) : null;
								return !0;
							});
						var e,
							r = j.st;
						for (e in t)
							t[b](e) &&
								!r[b](e) &&
								(r[e] = (function (r) {
									return function () {
										var e = arguments;
										return this.forEach(function (t) {
											t[r].apply(t, e);
										});
									};
								})(e));
					}
				})(),
				r.was ? (d.win.Raphael = j) : (t.Raphael = j);
		})(t, t.eve);
	})(this);

/* Map path and default settings - you can edit this */
var simplemaps_worldmap_mapinfo = {
	map_name: 'world',
	state_bbox_array: {
		BD: { y: 332, x: 1472, x2: 1501, y2: 369 },
		BE: { y: 173, x: 999, x2: 1017, y2: 185 },
		BF: { y: 405, x: 956, x2: 999, y2: 440 },
		BG: { y: 218, x: 1101, x2: 1133, y2: 237 },
		BA: { y: 212, x: 1067, x2: 1087, y2: 228 },
		BB: { y: 416.1, x: 650.8, x2: 652, y2: 418 },
		BL: { y: 386.7, x: 635.1, x2: 635.4, y2: 387 },
		BM: { y: 293.9, x: 636.5, x2: 637.3, y2: 294.5 },
		BN: { y: 466.8, x: 1633.1, x2: 1639.9, y2: 476.1 },
		BO: { y: 564, x: 594, x2: 665, y2: 649 },
		JP: { y: 210, x: 1683, x2: 1736, y2: 303 },
		BI: { y: 517, x: 1150.8, x2: 1160.6, y2: 531 },
		BJ: { y: 423, x: 991, x2: 1008, y2: 462 },
		BT: { y: 320, x: 1474, x2: 1492, y2: 330 },
		JM: { y: 382.9, x: 549, x2: 561, y2: 388.2 },
		BW: { y: 615, x: 1096, x2: 1150, y2: 674 },
		WS: { y: 588.3, x: 14.7, x2: 22.8, y2: 592 },
		BR: { y: 468, x: 568, x2: 790, y2: 719 },
		BS: { y: 329, x: 553, x2: 583, y2: 368 },
		BY: { y: 144, x: 1098, x2: 1143, y2: 174 },
		BZ: { y: 383, x: 486.1, x2: 494.3, y2: 400 },
		RU: { y: 10, x: 1080, x2: 1780, y2: 238 },
		RW: { y: 509, x: 1151, x2: 1161, y2: 521 },
		RS: { y: 206, x: 1081, x2: 1104, y2: 231 },
		LT: { y: 143, x: 1085, x2: 1112, y2: 158 },
		RE: { y: 635.8, x: 1293.4, x2: 1296.8, y2: 639 },
		LU: { y: 181.3, x: 1014.4, x2: 1017.1, y2: 185.5 },
		LR: { y: 447, x: 922, x2: 944, y2: 474 },
		RO: { y: 193, x: 1088, x2: 1137, y2: 222 },
		GW: { y: 421, x: 892, x2: 909, y2: 431 },
		GU: { y: 414.2, x: 1800, x2: 1801.5, y2: 416.8 },
		GT: { y: 387, x: 468, x2: 492, y2: 414 },
		GR: { y: 234, x: 1092, x2: 1127, y2: 278 },
		GQ: { y: 487.2, x: 1039, x2: 1050, y2: 495.3 },
		GP: { y: 395.8, x: 640.1, x2: 643.5, y2: 399.9 },
		BH: { y: 333.3, x: 1264, x2: 1265, y2: 336.2 },
		GY: { y: 448, x: 639, x2: 666, y2: 494 },
		GF: { y: 465, x: 677, x2: 694, y2: 489 },
		GE: { y: 223, x: 1191, x2: 1229, y2: 238 },
		GD: { y: 423.3, x: 638.5, x2: 639.4, y2: 424.8 },
		GB: { y: 130, x: 950, x2: 995, y2: 182 },
		GA: { y: 487, x: 1036, x2: 1068, y2: 527 },
		SV: { y: 409.2, x: 480, x2: 493, y2: 417.4 },
		GN: { y: 421, x: 901, x2: 942, y2: 455 },
		GM: { y: 412.7, x: 892, x2: 909, y2: 417.5 },
		GL: { y: 1, x: 720, x2: 944, y2: 121 },
		KW: { y: 308.8, x: 1241, x2: 1251, y2: 318.7 },
		GH: { y: 431, x: 968, x2: 992, y2: 472 },
		OM: { y: 332, x: 1276, x2: 1318, y2: 395 },
		JO: { y: 288, x: 1177, x2: 1198, y2: 314 },
		HR: { y: 204, x: 1056, x2: 1085, y2: 229 },
		HT: { y: 374, x: 570, x2: 587, y2: 386 },
		HU: { y: 191, x: 1068, x2: 1100, y2: 209 },
		HN: { y: 399, x: 484, x2: 520, y2: 418 },
		PR: { y: 382.9, x: 607, x2: 622, y2: 386.7 },
		PS: { y: 293, x: 1175.5, x2: 1178.7, y2: 300.5 },
		PW: { y: 452.8, x: 1746.8, x2: 1747.7, y2: 454.6 },
		PT: { y: 231, x: 936, x2: 953, y2: 265 },
		PY: { y: 626, x: 639, x2: 687, y2: 679 },
		IQ: { y: 262, x: 1195, x2: 1251, y2: 315 },
		PA: { y: 440, x: 518, x2: 550, y2: 455 },
		PF: { y: 558, x: 138, x2: 206, y2: 679 },
		PG: { y: 518, x: 1783, x2: 1869, y2: 570 },
		PE: { y: 502, x: 525, x2: 600, y2: 620 },
		PK: { y: 263, x: 1318, x2: 1402, y2: 350 },
		PH: { y: 383, x: 1649, x2: 1702, y2: 466 },
		PL: { y: 152, x: 1054, x2: 1104, y2: 188 },
		ZM: { y: 555, x: 1109, x2: 1175, y2: 617 },
		BQSE: { y: 389.4, x: 634.1, x2: 634.3, y2: 389.7 },
		EH: { y: 324, x: 891, x2: 939, y2: 367 },
		BQSA: { y: 388.5, x: 632.7, x2: 632.9, y2: 388.7 },
		EE: { y: 124, x: 1093, x2: 1115, y2: 137 },
		EG: { y: 299, x: 1121, x2: 1191, y2: 361 },
		ZA: { y: 644, x: 1076, x2: 1167, y2: 725 },
		EC: { y: 493, x: 527, x2: 560, y2: 534 },
		AL: { y: 228, x: 1086.1, x2: 1095.8, y2: 247 },
		AO: { y: 530, x: 1051, x2: 1122, y2: 617 },
		KZ: { y: 149, x: 1217, x2: 1419, y2: 241 },
		ET: { y: 406, x: 1173, x2: 1257, y2: 480 },
		ZW: { y: 601, x: 1128, x2: 1170, y2: 645 },
		SA: { y: 295, x: 1176, x2: 1295, y2: 397 },
		ES: { y: 221, x: 938, x2: 1002, y2: 271 },
		ER: { y: 386, x: 1190, x2: 1229, y2: 422 },
		ME: { y: 223, x: 1081.5, x2: 1091, y2: 233 },
		MD: { y: 192, x: 1119, x2: 1138, y2: 210 },
		MG: { y: 579, x: 1226, x2: 1270, y2: 666 },
		MF: { y: 385.5, x: 633.8, x2: 634.3, y2: 386 },
		MA: { y: 272, x: 892, x2: 980, y2: 364 },
		UZ: { y: 210, x: 1271, x2: 1366, y2: 263 },
		MM: { y: 320, x: 1499, x2: 1548, y2: 438 },
		ML: { y: 342, x: 918, x2: 1010, y2: 437 },
		MN: { y: 169, x: 1420, x2: 1588, y2: 235 },
		MH: { y: 456, x: 1953.8, x2: 1954.8, y2: 456.4 },
		MK: { y: 230.3, x: 1092, x2: 1106, y2: 239.7 },
		MU: { y: 628.1, x: 1305, x2: 1340, y2: 633.5 },
		MT: { y: 270.2, x: 1061.8, x2: 1063.9, y2: 272 },
		MW: { y: 561, x: 1170, x2: 1187, y2: 610 },
		MV: { y: 474.7, x: 1402.7, x2: 1402.9, y2: 475 },
		MQ: { y: 406.3, x: 642.6, x2: 644.8, y2: 409.3 },
		MP: { y: 381, x: 1799.1, x2: 1804.5, y2: 411 },
		MS: { y: 393.9, x: 637.9, x2: 638.4, y2: 394.8 },
		MR: { y: 326, x: 892, x2: 959, y2: 408 },
		UG: { y: 474, x: 1154, x2: 1185, y2: 511 },
		MY: { y: 457, x: 1553, x2: 1661, y2: 497 },
		MX: { y: 292, x: 354, x2: 504, y2: 409 },
		VU: { y: 586, x: 1921, x2: 1932, y2: 632 },
		FR: { y: 175, x: 963, x2: 1036, y2: 236 },
		AF: { y: 255, x: 1312, x2: 1385, y2: 314 },
		FI: { y: 64, x: 1071, x2: 1125, y2: 122 },
		FJ: { y: 606, x: 1977, x2: 1995, y2: 625 },
		FK: { y: 828, x: 688, x2: 705, y2: 836.5 },
		FM: { y: 440, x: 1766, x2: 1909, y2: 468 },
		FO: { y: 107.6, x: 953.4, x2: 958.4, y2: 113.3 },
		NI: { y: 405, x: 493, x2: 520, y2: 433 },
		NL: { y: 160, x: 1003, x2: 1020, y2: 177 },
		NO: { y: 13, x: 1008, x2: 1114, y2: 133 },
		NA: { y: 611, x: 1052, x2: 1127, y2: 688 },
		NC: { y: 628, x: 1898, x2: 1920, y2: 647 },
		NE: { y: 351, x: 988, x2: 1075, y2: 427 },
		NG: { y: 413, x: 1002, x2: 1069, y2: 475 },
		NZ: { y: 723, x: 1827, x2: 1930, y2: 801 },
		BQBO: { y: 422.8, x: 601, x2: 602.3, y2: 424.6 },
		NP: { y: 307, x: 1424, x2: 1471, y2: 332 },
		NR: { y: 505, x: 1932.7, x2: 1933, y2: 505.3 },
		XK: { y: 224.3, x: 1089.8, x2: 1098.5, y2: 233.4 },
		CI: { y: 434, x: 938, x2: 972, y2: 474 },
		CH: { y: 196, x: 1017, x2: 1039, y2: 208 },
		CO: { y: 422, x: 539, x2: 607, y2: 529 },
		CN: { y: 161, x: 1372, x2: 1662, y2: 385 },
		CM: { y: 419, x: 1034, x2: 1077, y2: 491 },
		CL: { y: 615, x: 593, x2: 669, y2: 856 },
		CA: { y: 2, x: 348, x2: 778, y2: 232 },
		CG: { y: 478, x: 1049, x2: 1091, y2: 534 },
		CF: { y: 430, x: 1068, x2: 1141, y2: 487 },
		CD: { y: 468, x: 1055, x2: 1163, y2: 587 },
		CZ: { y: 175, x: 1047, x2: 1080, y2: 191 },
		CY: { y: 275.9, x: 1158.8, x2: 1168.6, y2: 279.5 },
		CR: { y: 430, x: 502, x2: 520, y2: 449 },
		CW: { y: 422.3, x: 596.8, x2: 599.1, y2: 424.5 },
		CV: { y: 391, x: 844, x2: 859, y2: 407 },
		CU: { y: 353, x: 515, x2: 573, y2: 374 },
		SZ: { y: 667, x: 1154.9, x2: 1162.6, y2: 677 },
		SY: { y: 263, x: 1178, x2: 1211, y2: 294 },
		SX: { y: 385.9, x: 633.8, x2: 634.2, y2: 386.1 },
		KG: { y: 224, x: 1350, x2: 1401, y2: 250 },
		KE: { y: 467, x: 1179, x2: 1224, y2: 532 },
		SS: { y: 423, x: 1121, x2: 1186, y2: 479 },
		SR: { y: 463, x: 658, x2: 681, y2: 490 },
		KH: { y: 408, x: 1562, x2: 1592, y2: 435 },
		KN: { y: 390, x: 634.7, x2: 636.4, y2: 392 },
		KM: { y: 574.8, x: 1229.9, x2: 1237.1, y2: 581.3 },
		ST: { y: 491, x: 1023, x2: 1028.6, y2: 502 },
		SK: { y: 185, x: 1070, x2: 1098, y2: 196 },
		KR: { y: 254, x: 1653, x2: 1677, y2: 281 },
		SI: { y: 201.7, x: 1055, x2: 1070, y2: 210.5 },
		KP: { y: 226, x: 1636, x2: 1662, y2: 260 },
		SO: { y: 425, x: 1219, x2: 1275, y2: 513 },
		SN: { y: 395, x: 887, x2: 922, y2: 423 },
		SL: { y: 437, x: 912, x2: 929, y2: 458 },
		SC: { y: 531, x: 1247, x2: 1301, y2: 563 },
		SB: { y: 544, x: 1866, x2: 1927, y2: 578 },
		KY: { y: 375, x: 532.5, x2: 542.1, y2: 378.1 },
		SG: { y: 494.1, x: 1574.4, x2: 1576.5, y2: 495.3 },
		SE: { y: 70, x: 1037, x2: 1088, y2: 149 },
		SD: { y: 361, x: 1110, x2: 1201, y2: 447 },
		DO: { y: 374, x: 585, x2: 605, y2: 389 },
		DM: { y: 401.5, x: 641.5, x2: 642.7, y2: 404.2 },
		DJ: { y: 420, x: 1221.1, x2: 1230.3, y2: 432 },
		DK: { y: 135, x: 1024, x2: 1046, y2: 153 },
		DE: { y: 152, x: 1015, x2: 1060, y2: 199 },
		YE: { y: 380, x: 1225, x2: 1284, y2: 421 },
		AT: { y: 188, x: 1034, x2: 1071, y2: 204 },
		DZ: { y: 263, x: 939, x2: 1053, y2: 380 },
		US: { y: 58, x: 100, x2: 646, y2: 380 },
		LV: { y: 134, x: 1085, x2: 1118, y2: 148 },
		UY: { y: 695, x: 672, x2: 700, y2: 726 },
		YT: { y: 583.1, x: 1239.9, x2: 1240.9, y2: 585.2 },
		LB: { y: 279, x: 1175.5, x2: 1182.7, y2: 289 },
		LC: { y: 411.3, x: 643, x2: 644.1, y2: 413.8 },
		LA: { y: 358, x: 1544, x2: 1590, y2: 413 },
		TV: { y: 556.4, x: 1998.9, x2: 1999, y2: 556.6 },
		TW: { y: 339, x: 1651, x2: 1659.2, y2: 361 },
		TT: { y: 429, x: 636.9, x2: 645.2, y2: 437.3 },
		TR: { y: 232, x: 1122, x2: 1224, y2: 272 },
		LK: { y: 439, x: 1437, x2: 1449, y2: 464 },
		TN: { y: 262, x: 1027, x2: 1048, y2: 307 },
		TO: { y: 602, x: 1, x2: 16, y2: 640 },
		TL: { y: 554.9, x: 1692, x2: 1706, y2: 562.1 },
		TM: { y: 228, x: 1258, x2: 1338, y2: 275 },
		TJ: { y: 239, x: 1340, x2: 1383, y2: 266 },
		LS: { y: 686, x: 1133, x2: 1146, y2: 699 },
		TH: { y: 371, x: 1530, x2: 1579, y2: 465 },
		TG: { y: 431, x: 986, x2: 997, y2: 464 },
		TD: { y: 352, x: 1062, x2: 1120, y2: 454 },
		TC: { y: 360.8, x: 584.7, x2: 588.7, y2: 362 },
		LY: { y: 289, x: 1038, x2: 1126, y2: 376 },
		VC: { y: 416, x: 641.6, x2: 642.5, y2: 417.5 },
		AE: { y: 335, x: 1271, x2: 1298, y2: 357 },
		VE: { y: 424, x: 572, x2: 649, y2: 497 },
		AG: { y: 388.2, x: 640, x2: 641.3, y2: 392.6 },
		VG: { y: 383.3, x: 625.2, x2: 626.1, y2: 383.8 },
		AI: { y: 384.5, x: 634, x2: 634.6, y2: 384.9 },
		VI: { y: 383.8, x: 623.2, x2: 625.2, y2: 388.3 },
		IS: { y: 84, x: 882, x2: 928, y2: 101 },
		IR: { y: 247, x: 1218, x2: 1334, y2: 341 },
		AM: { y: 237, x: 1213, x2: 1231, y2: 253 },
		IT: { y: 200, x: 1021, x2: 1083, y2: 267 },
		VN: { y: 352, x: 1553, x2: 1602, y2: 447 },
		AS: { y: 593.1, x: 26.6, x2: 34.3, y2: 594.1 },
		AR: { y: 642, x: 604, x2: 692, y2: 854 },
		AU: { y: 570, x: 1603, x2: 1829, y2: 782 },
		IL: { y: 288, x: 1172.1, x2: 1179.5, y2: 312 },
		AW: { y: 420.7, x: 591.9, x2: 592.9, y2: 422 },
		IN: { y: 274, x: 1364, x2: 1520, y2: 451 },
		TZ: { y: 508, x: 1154, x2: 1214, y2: 577 },
		IC: { y: 314, x: 887, x2: 913, y2: 324 },
		AZ: { y: 233, x: 1220, x2: 1249, y2: 256 },
		IE: { y: 151, x: 938, x2: 957, y2: 172 },
		ID: { y: 467, x: 1526, x2: 1786, y2: 568 },
		UA: { y: 168, x: 1096, x2: 1185, y2: 217 },
		QA: { y: 334, x: 1266, x2: 1270.9, y2: 344 },
		MZ: { y: 568, x: 1156, x2: 1215, y2: 674 },
	},
	paths: {
		BD: 'M1500.6 360.3l0.6 4.6-2.1-1 1.1 5.2-2.1-3.3-0.8-3.3-1.5-3.1-2.8-3.7-5.2-0.3 0.9 2.7-1.2 3.5-2.6-1.3-0.6 1.2-1.7-0.7-2.2-0.6-1.6-5.3-2.6-4.8 0.3-3.9-3.7-1.7 0.9-2.3 3-2.4-4.6-3.4 1.2-4.4 4.9 2.8 2.7 0.3 1.2 4.5 5.4 0.9 5.1-0.1 3.4 1.1-1.6 5.4-2.4 0.4-1.2 3.6 3.6 3.4 0.3-4.2 1.5 0 4.4 10.2z',
		BE: 'M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z',
		BF: 'M988.5 406l-0.5 3.1 0.8 2.9 3.1 4.2 0.2 3.1 6.5 1.5-0.1 4.4-1.2 1.9-2.8 0.6-1.1 2.8-2 0.7-4.9-0.1-2.6-0.5-1.8 1-2.5-0.5-9.8 0.3-0.2 3.7 0.8 4.8-3.9-1.6-2.6 0.2-2 1.6-2.5-1.3-1-2.2-2.5-1.4-0.4-3.7 1.6-2.7-0.2-2.2 4.5-5.3 0.9-4.4 1.5-1.6 2.7 0.9 2.4-1.3 0.8-1.7 4.3-2.8 1.1-2 5.3-2.7 3.1-0.9 1.4 1.2 3.6 0z',
		BG: 'M1132.6 221.6l-2.3 2.6-1.3 4.5 2.1 3.6-4.6-0.8-5 2 0.3 3.2-4.6 0.6-3.9-2.3-4 1.8-3.8-0.2-0.8-4.2-2.8-2.1 0.7-0.8-0.6-0.8 0.6-2 1.8-2-2.8-2.7-0.7-2.4 1.1-1.4 1.8 2.6 1.9-0.4 4 0.9 7.6 0.4 2.3-1.6 5.9-1.5 4 2.3 3.1 0.7z',
		BA: 'M1083 214.3l1.9-0.1-1.1 2.8 2.7 2.5-0.5 2.9-1.1 0.3-0.9 0.6-1.6 1.5-0.4 3.5-4.8-2.4-2.1-2.7-2.1-1.4-2.5-2.4-1.3-1.9-2.7-3 0.8-2.6 2 1.5 1-1.4 2.3-0.1 4.5 1.1 3.5-0.1 2.4 1.4z',
		BB: 'M651.5 418l-0.6-0.2-0.1-0.5 0-0.8 0.2-0.4 0.2 0.2 0.2 0.6 0.5 0.3 0.1 0.4-0.5 0.4z',
		BL: 'M635.2 387l-0.1-0.3 0.3 0.1-0.2 0.2z',
		BM: 'M637.3 294l-0.3 0-0.1 0.1 0.1 0.2-0.4 0.2-0.1-0.1 0.2-0.1 0.1 0 0.1-0.3 0.3-0.1 0.1 0.1z',
		BN: 'M1633.1 472.8l2.2-2.4 4.6-3.6-0.1 3.2-0.1 4.1-2.7-0.2-1.1 2.2-2.8-3.3z',
		BO: 'M662.5 631.4l-0.3-2-5.4-3.3-5.2-0.1-9.6 1.9-2.1 5.6 0.2 3.5-1.5 7.7-1-1.4-6.4-0.3-1.6 5.2-3.7-4.6-7.5-1.6-4 5.8-3.9 0.9-3.1-8.9-3.7-7.2 1.1-6.2-3.2-2.7-1.2-4.6-3.2-4.4 2.9-6.9-2.9-5.4 1.1-2.2-1.2-2.4 1.9-3.2-0.3-5.4 0-4.6 1.1-2.1-5.5-10.4 4.2 0.6 2.9-0.2 1.1-1.9 4.8-2.6 2.9-2.4 7.3-1.1-0.4 4.8 0.9 2.5-0.3 4.3 6.5 5.7 6.4 1.1 2.3 2.4 3.9 1.3 2.5 1.8 3.5 0 3.4 1.9 0.5 3.7 1.2 1.9 0.3 2.7-1.7 0.1 2.8 7.5 10.7 0.3-0.5 3.7 0.8 2.5 3.2 1.8 1.7 4-0.6 5.1-1.3 2.8 0.8 3.6-1.6 1.4z',
		JP: 'M1708.5 282.6l1.6 2.2-1.3 3.9-3.1-2.1-2.1 1.5 0.1 3.7-4.3-1.8-1.2-3 1.3-3.9 3.4 0.8 1-2.7 4.6 1.4z m24.6-19.2l0.6 5.1 2.5 3.2-0.6 4.5-5.4 3-9.2 0.4-4.4 7.4-4.7-2.5-2.4-4.8-8.6 1.4-5.1 3-6.2 0.2 7.4 4.7 0.8 10.9-2.5 2.7-3.6-2.5-0.9-5.8-4.1-1.8-4-4.4 4.3-2 1.1-4.1 3.9-3.3 2-4.4 9.7-1.9 6.3 1.3 0-11.4 5.1 3.1 4.5-6.4 1.7-2.5-1-7.8-5.1-7.2-0.2-4 4.8-1.2 8.2 8.9 2.8 5.1-1.3 6.5 3.6 6.6z m-11.9-44.8l4.5 1.3 1.8-2.6 6 7.1-6.4 1.7-0.4 6.3-10.9-4.3 1.6 6.9-5.7 0.1-4.7-6.3-0.6-4.9 5.2-0.3-4.4-8.8-1.8-4.9 10.5 6.6 5.3 2.1z',
		BI: 'M1154.9 530.4l-0.6 0.1 0-0.3-2-6.1 0-0.1-0.1-1-1.4-2.9 3.5 0.5 1.7-3.7 3.1 0.4 0.3 2.5 1.2 1.5 0 2.1-1.4 1.3-2.3 3.4-2 2.3z',
		BJ: 'M1006.7 427l-0.2 2.1 1.3 3.8-1.1 2.6 0.6 1.7-2.8 4-1.7 2-1.1 4 0.2 4.1-0.3 10.3-4.7 0.8-1.4-4.4 0.3-14.8-1.2-1.3-0.2-3.2-2-2.2-1.7-1.9 0.7-3.4 2-0.7 1.1-2.8 2.8-0.6 1.2-1.9 1.9-1.9 2 0 4.3 3.7z',
		BT: 'M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z',
		JM: 'M556.5 387.1l-1.8 1.1-3-1.1-2.9-2.3 0.8-1.5 2.4-0.4 1.3 0.2 3.7 0.6 2.7 1.5 0.8 1.8-4 0.1z',
		BW: 'M1127.6 615.7l1.9 5.1 1.1 1.2 1.6 3.7 6.1 7 2.3 0.7-0.1 2.3 1.5 4.1 4.3 1 3.4 2.9-8.1 4.7-5.2 4.8-2 4.3-1.8 2.4-3 0.5-1.2 3.1-0.6 2-3.6 1.4-4.5-0.3-2.5-1.8-2.3-0.7-2.8 1.4-1.5 3.1-2.7 1.9-2.8 2.9-4 0.7-1.1-2.3 0.6-3.9-3-6.1-1.4-1 0.6-18.7 5.5-0.2 0.8-22.9 4.2-0.2 8.7-2.3 2 2.7 3.7-2.5 1.7 0 3.2-1.5 1 0.5z',
		WS: 'M21.9 591.3l0.3 0.1 0.3 0.1 0.3 0.2-0.1 0.3-1 0-0.3-0.1-0.3 0.1-0.2-0.1-0.4-0.2-0.3 0.1-0.3-0.2-0.2-0.2-0.6-0.3 0.1-0.4 0.4-0.2 0.4 0 0.5 0 0.9 0.4 0.5 0.1 0 0.3z m-4.5-2.8l0.6 0.6 0.2 0.7-0.1 0.3 0.1 0.3-0.3 0-0.3-0.2-0.3 0.2-0.9 0.1-0.3-0.3-0.2-0.4-0.2-0.1-0.3-0.3-0.5-0.4-0.2-0.2 0-0.2 0.4 0.1 0.3-0.1 0.6-0.2 0.4 0 0.5-0.1 0.3 0 0.2 0.2z',
		BR: 'M665.8 489.6l3.1 0.6 0.6-1.4-1-1.2 0.6-1.9 2.3 0.6 2.7-0.7 3.2 1.4 2.5 1.3 1.7-1.7 1.3 0.2 0.8 1.8 2.7-0.4 2.2-2.5 1.8-4.7 3.4-5.9 2-0.3 1.3 3.6 3 11.2 3.1 1.1 0.1 4.4-4.3 5.3 1.7 1.9 10.1 1 0.2 6.5 4.3-4.2 7.1 2.3 9.5 3.9 2.8 3.7-0.9 3.6 6.6-2 11 3.4 8.5-0.2 8.4 5.3 7.4 7.2 4.4 1.8 4.8 0.3 2.1 2 2 8.2 1.1 3.9-2.1 10.6-2.7 4.2-7.7 8.9-3.4 7.3-4 5.5-1.4 0.2-1.3 4.7 0.9 12-1.1 9.9-0.3 4.2-1.6 2.6-0.5 8.6-5.2 8.3-0.5 6.7-4.3 2.7-1.1 3.9-6 0-8.5 2.4-3.7 2.9-6 1.9-6.1 5.1-4.1 6.4-0.3 4.8 1.3 3.5-0.3 6.5-0.8 3.1-3.4 3.6-4.5 11.3-4 5-3.2 3.1-1.5 6.1-2.9 3.6-2.1-3.6 1.8-3.1-3.8-4.3-4.8-3.6-6.3-4.1-1.9 0.2-6.3-5-3.4 0.7 6-8.7 5.3-6.3 3.3-2.6 4.2-3.5-0.4-5.1-3.2-3.8-2.6 1.3 0.7-3.7 0.3-3.8-0.3-3.6-2.1-1.1-2 1-2.1-0.3-0.8-2.4-1.1-5.9-1.2-1.9-3.9-1.8-2.2 1.3-5.9-1.3-0.4-8.7-2-3.5 1.6-1.4-0.8-3.6 1.3-2.8 0.6-5.1-1.7-4-3.2-1.8-0.8-2.5 0.5-3.7-10.7-0.3-2.8-7.5 1.7-0.1-0.3-2.7-1.2-1.9-0.5-3.7-3.4-1.9-3.5 0-2.5-1.8-3.9-1.3-2.3-2.4-6.4-1.1-6.5-5.7 0.3-4.3-0.9-2.5 0.4-4.8-7.3 1.1-2.9 2.4-4.8 2.6-1.1 1.9-2.9 0.2-4.2-0.6-3.2 1.1-2.6-0.7-0.1-9.7-4.4 3.7-5-0.1-2.3-3.5-3.8-0.3 1-2.8-3.3-3.9-2.6-5.8 1.5-1.1-0.2-2.8 3.4-1.8-0.7-3.5 1.4-2.2 0.3-3 6.3-4.4 4.6-1.2 0.8-1 5.1 0.3 2.2-17.6 0.1-2.8-0.9-3.6-2.6-2.4 0.1-4.7 3.2-1 1.1 0.7 0.2-2.5-3.3-0.7 0-4 11 0.2 1.9-2.3 1.6 2.1 1 3.8 1.1-0.8 3.1 3.4 4.4-0.4 1.1-2 4.2-1.5 2.4-1.1 0.7-2.7 4.1-1.8-0.3-1.4-4.8-0.5-0.7-4.1 0.3-4.3-2.5-1.6 1.1-0.6 4.1 0.8 4.5 1.6 1.7-1.5 4.1-1 6.4-2.4 2.1-2.5-0.7-1.8 3-0.2 1.2 1.4-0.8 2.9 2 0.9 1.2 3-1.6 2.3-1 5.4 1.4 3.3 0.3 3 3.5 3 2.8 0.3 0.6-1.3 1.8-0.3 2.6-1.1 1.8-1.7 3.2 0.6 1.3-0.3z',
		BS: 'M580.4 366l-0.4 0.5-0.2 0.5-0.6 0.3-0.5 0-0.1-0.1-0.4 0.2-0.5 0.1-0.6-0.2-0.4 0.1-0.1-0.5 0.3-0.2 0.2-0.3 0.4-0.2 0.3-0.4 0.4 0 0.3-0.2 0.2 0.3 0.5 0.2 0.5-0.2 0.7-1 0.3 0 0 0.2-0.3 0.9z m0.2-1.7l-0.2-0.6 0.6-0.3 0.3 0.3 0 0.2-0.3 0.1-0.4 0.3z m0.4-6.5l0.2-0.1 0.5 0.3 0.4 0 0.4 0.1 0.3 0.2 0 0.3-0.2 0.1-0.5-0.4-0.4 0-0.1-0.1-0.5 0.2-0.5-0.2 0-0.1 0.2-0.5 0.2 0.2z m-3.9-1.8l-0.2 0.4 0 0.7-0.1 0.4-0.4 0.3-0.2 0.4-0.4 0.3-0.7 0.3-0.1 0.2-0.2-0.2 0.1-0.2 0.4-0.1 0.2-0.2 0-0.2 0.4-0.1 0.2-0.4 0.4-0.1 0.3-0.4-0.2-0.3-0.4 0-0.2-0.2 0.4-0.5 0.1-0.1 0.6 0z m-1.9-0.3l0.1 0.1 0.4 0 0.4 0.2-0.4 0.4-0.1-0.2-0.2 0-0.4-0.1-0.4-0.2-0.3-0.6 0.3-0.1 0.4 0.1 0.2 0.4z m-9.2-5.9l0.6 0.7 0.3 0.2 0.3 0.5-0.3-0.1-0.1-0.2-0.3-0.1-0.4-0.4-0.2-0.1-0.2-0.4 0.3-0.1z m3.7 0l0.3 0.6 0.2 0.5 0 0.4 0.2 0.2 0.2 0.7 0 0.9 0.2 0.3 0.5 0.2 0.4 0.6 0 0.8-0.4-0.7 0-0.2-0.3-0.4-0.6-0.2 0.2-0.2-0.3-0.3 0-0.3 0.2-0.3-0.1-0.5-0.3-0.4 0.1-0.1-0.3-0.4-0.1-0.6-0.2 0.1 0.1-0.7z m2.9 0l-0.3 0.2-0.3-0.1-0.1-0.2 0.6-0.2 0.1 0.3z m-8.2-1.9l-0.1-0.1-0.3-0.7 0.2 0 0.2 0.8z m10.5-0.5l-0.4 0.6-0.4 0 0.2-0.3 0.1-0.6 0.4-0.3 0.1 0.4 0 0.2z m-18.5-1.2l-0.3 0.1-0.2 0.3-0.3-0.1 0.6-0.4 0.2 0.1z m0.2 0.7l0.4 0.2 0.2-0.2 0.1-0.5 0.2-0.1 0.2 0.6 0 0.5-0.1 0.3 0.1 0.6 0 0.3-0.4 0.8-0.2 0.1-0.4-0.2 0.2-0.3 0.4-0.2-0.1-0.1-0.6 0.4-0.2-0.2 0.4-0.3-0.4 0-0.2 0.1-0.2-0.2 0-0.7 0.1-0.2-0.4-0.5 0-0.2 0.4-0.2 0.1-0.3 0.3-0.1 0.1-0.2 0.6-0.3 0.1 0.4-0.5 0.4-0.2 0.3z m13.5-0.6l0.1 0.5-0.2-0.1-0.5 0.1-0.4 0.1-0.1-0.2 0.3-0.2 0.4-0.3 0-0.2-0.4-0.2-0.2-0.6-0.1-0.6-0.4-0.4 0-0.2-0.5-0.5 0.3-0.3 0.4 0.4 0 0.5 0.2 0.3 0.1 0.5 0.3 0.5 0.4 0.3 0.1 0.3 0.2 0.3z m-10.3-5.5l0.3 0.2-0.6 0.3-0.3-0.1-0.2 0.2-0.5-0.1 0.2-0.3 0.4-0.2 0.7 0z m-4.2-0.5l0.4-0.2 0.3 0.3-0.1 0.2 0.1 0.2-0.2 0.4 0.3 0.3 0.2 0.9 0.2 0.3 0.4 0.5-0.2 0.7 0.1 0.6-0.2 0.3-0.3 0.1-0.4 0.4-0.3 0.2-0.3 0-0.3 0.2-0.3 0 0-0.4-0.3-0.2 0.1-0.6-0.3 0.3-0.2-0.1-0.6-0.4-0.3-0.3-0.2-0.3 0.7-0.3 0.5 0.7 0.1-0.6-0.3-0.1-0.1-0.3 0.1-0.3 0.6-0.6 0.2-0.4-0.1-0.1 0.3-0.4 0-0.5-0.2-0.7 0.1-0.1 0.3 0 0.2 0.3z m8.1-2.6l0.1 0.2 0.3 0.4 0.8 0.7 0.5 0.1 0.1 0.1 0.2 0.4 0.3 0.4 0.5 0.4 0 0.2-0.2 0.8-0.1 0.2 0 0.3-0.1 0.5-0.2 0.3-0.1 0.7-0.1 0.1-0.2-0.6-0.4-0.3 0.1-0.2 0.5 0.1 0.2-0.2-0.1-0.2 0.1-0.4 0.3-0.4 0.1-0.5 0-0.3-0.5-0.4-0.4-0.7-0.3-0.2-0.6-0.3-0.3-0.3-0.6-0.2-0.4 0.2 0.4-0.9 0.1 0z m-8.8-7.5l0.5 0.2 0.1 0 0.7 0.1 0.2-0.2 0.2 0.1 0.5 0 0.4-0.2 0.4 0 0.3-0.2 0.1 0.5-0.1 0.2-0.3 0-0.4 0-1.1 0.2-0.3 0-1.5 0.4-0.7 0.4-0.4 0-0.2-0.1-0.3-0.3-0.5-0.6 0.6 0.3 0.1 0.2 0.5 0 0.5-0.2 0.4-0.6-0.3-0.1 0.2-0.3 0.1-0.3 0.3 0.5z m4.3-1.3l0.8 0.2 0.2-0.1 0.4 0.3 0.9 1 0.2 0.6 0.4 0.1 0.7 0.5 0 0.2-0.2 0.5 0.2 0.7-0.4 0-0.5 0.4-0.1 0.2-0.3 1-0.1 0.9-0.2 0.2-0.3-0.2-0.1-0.4-0.4-0.1 0.3-0.5 0.2 0 0.5-0.4-0.1-0.4 0.2-0.4 0-0.3 0.2-0.3 0-0.6 0.2-0.1 0.2-0.3 0.1-0.3-0.3-0.1-0.5-0.1-0.1-0.3 0-0.2-0.4-0.2 0-0.3-0.3-0.7-0.2-0.1-0.3 0.1-0.5-0.1-0.3 0-0.6-0.4 0.5 0z',
		BY: 'M1141.6 162.7l-3.9-0.2-0.8 0.6 1.5 2 2 4-4.1 0.3-1.3 1.4 0.3 3.1-2.1-0.6-4.3 0.3-1.5-1.5-1.7 1.1-1.9-0.9-3.9-0.1-5.7-1.5-4.9-0.5-3.8 0.2-2.4 1.6-2.3 0.3-0.5-2.8-1.9-2.8 2.8-1.3-0.4-2.4-1.7-2.3-0.6-2.7 4.7 0 4.8-2.3 0.5-3.4 3.6-2-1-2.7 2.7-1 4.6-2.3 5.3 1.5 0.9 1.5 2.4-0.7 4.8 1.4 1.1 2.9-0.7 1.6 3.8 4 2.1 1.1 0 1.1 3.4 1.1 1.7 1.6-1.6 1.3z',
		BZ: 'M487.8 399.8l-1.7 0 1.3-7.2 0.7-5.1 0.1-1 0.7-0.3 0.9 0.8 2.5-3.9 1.1-0.1-0.1 1 1 0-0.3 1.8-1.3 2.7 0.4 1-0.9 2.3 0.3 0.6-1 3.3-1.3 1.7-1.1 0.2-1.3 2.2z',
		TN: 'M1048.2 289.1l-0.1 4.9-2.6 1.8-1.6 2.1-3.6 2.5 0.6 2.6-0.4 2.8-2.6 1.4-2.6-11.5-3.4-2.6-0.1-1.5-4.5-3.9-0.6-4.8 3.2-3.6 1.1-5.3-1-6.1 1-3.3 5.7-2.5 3.7 0.7 0 3.3 4.4-2.4 0.4 1.2-2.5 3.2 0.1 2.9 1.9 1.6-0.5 5.6-3.5 3.2 1.2 3.5 2.8 0.1 1.4 3.1 2.1 1z',
		RW: 'M1158.8 509.1l2.2 3.6-0.3 3.8-1.6 0.8-3.1-0.4-1.7 3.7-3.5-0.5 0.6-3.6 0.8-0.5 0.2-3.8 1.6-1.8 1.4 0.7 3.4-2z',
		RS: 'M1102 218.2l-1.1 1.4 0.7 2.4 2.8 2.7-1.8 2-0.6 2 0.6 0.8-0.7 0.8-2.4 0.2-1.7 0.3-0.3-0.5 0.6-0.7 0.4-1.6-0.7 0.1-1.1-1.2-0.9-0.3-0.8-1-1-0.4-0.8-0.9-0.9 0.4-0.5 2.1-1.2 0.4 0.4-0.5-2.1-1.3-1.7-0.7-0.9-0.9-1.4-1.1 1.1-0.3 0.5-2.9-2.7-2.5 1.1-2.8-1.9 0.1 1.7-2.4-1.7-1.8-1.5-2.5 3.7-1.6 3.2 0.3 3 2.4 0.8 2.1 3.2 1.4 0.7 2.6 3.1 1.9 1.5-1.4 1.3 0.7-1 1.1 1 1.1z',
		TL: 'M1692.7 562.1l0.1-1.9-0.5-1.3 0.8-1.5 4.9-1.4 4-0.3 1.8-0.8 2.1 0.8-2.2 1.8-6.1 2.8-4.9 1.8z',
		RE: 'M1295 635.8l0.4 0 0.4 0.2 0.3 0.3 0 0.3 0.1 0.5 0.3 0.2 0.2 0.2 0.1 0.2-0.2 0.6-0.1 0.4-0.2 0.2-0.4 0.1-0.9 0-0.2-0.2-0.8-0.4-0.3-0.5 0-0.3-0.3-0.6 0.1-0.4 0.2-0.2 0.2-0.4 0.1 0 0.5-0.2 0.5 0z',
		TM: 'M1338.3 262l-1.6-0.2-2.9-1.7-0.3 2.2-4.2 1.3 0.2 5.1-2.6 2-4 0.9-0.4 2.9-3.9 0.9-5.9-2.5-1.7-5.3-4-0.3-7.3-5.6-4.3-0.7-6.6-3.3-3.9-0.6-2 1.2-3.6-0.2-3 3.7-4.4 1.2-1.9-4.5-0.6-6.7-4.6-2.2 0.4-4.3-3.5-0.4-0.1-5.4 5.3 1.6 4.1-2-4.7-3.9-2.4-3.6-3.8 1.6 0.6 4.7-2.6-4.1 1.8-2.2 5.6-1.3 3.9 1.8 4.8 5 2.6-0.3 5.9-0.1-1.7-3.2 3.8-2.2 3.4-3.7 7.9 3.4 1.9 5 2.3 1.3 5.5-0.3 2.1 1.2 4.3 6.6 7.1 4.4 4.2 3 6.3 3.1 7.7 2.8 0.8 3.9z',
		TJ: 'M1357 243.6l-1.4 1.9-6-1 0.6 3.6 5.5-0.5 7.1 2.1 9.6-1 3.1 6 1.5-0.7 3.7 1.5 0.5 2.5 1.8 3.6-5.4 0-3.8-0.5-2.5 2.9-2.2 0.6-1.5 1.4-2.7-2.1-0.9-5.4-1.7-0.3 0.1-2-3.3-1.4-1.7 2.2 0.2 2.6-0.6 0.9-3.2-0.1-0.9 2.9-2.1-1.2-3.4 2-1.8-0.7 1.3-6.5-2.4-4.8-4.2-1.5 0.6-2.8 4.4 0.3 1.5-3.5 0.5-4.1 6.5-1.5-0.2 3 1.3 1.7 2.1-0.1z',
		RO: 'M1118.9 193.1l1.6 0.7 1.8 1.8 2 2.6 3.4 3.8 0.6 2.7-0.2 2.7 1.3 2.9 2.4 1.2 2.3-1.1 2.4 1.1 0.4 1.7-2.3 1.3-1.6-0.6-0.4 7.7-3.1-0.7-4-2.3-5.9 1.5-2.3 1.6-7.6-0.4-4-0.9-1.9 0.4-1.8-2.6-1-1.1 1-1.1-1.3-0.7-1.5 1.4-3.1-1.9-0.7-2.6-3.2-1.4-0.8-2.1-3-2.4 3.9-1.2 2.6-4.3 1.9-4.2 2.9-1.3 2-1.4 3.2 0.7 3.2 0 2.5 1.6 1.6-1 3.6-0.6 1-1.5 2.1 0z',
		GW: 'M909.2 421l-0.1 2.2-0.6 0.7 0.4 2.1-0.9 0.8-1.2 0.1-1.5 1-1.7-0.1-2.6 3.1-2.9-2.6-2.4-0.5-1.3-1.8 0.1-1-1.7-1.3-0.4-1.4 3-1 1.9 0.2 1.5-0.8 10.4 0.3z',
		GU: 'M1800.8 415.5l-0.1 0.4 0 0.6-0.1 0.3-0.3 0-0.2-0.3-0.1-0.5 0-0.5 0.6-0.5 0.1-0.2 0.1-0.5 0.2-0.1 0.1 0.2 0.4 0.1-0.2 0.5-0.5 0.5z',
		GT: 'M488.1 387.5l-0.7 5.1-1.3 7.2 1.7 0 1.7 1.2 0.6-1 1.5 0.8-2.8 2.5-2.9 1.8-0.5 1.2 0.3 1.3-1.3 1.6-1.4 0.4 0.3 0.8-1.2 0.7-2 1.6-0.3 0.9-2.8-1.1-3.5-0.1-2.4-1.3-2.8-2.6 0.4-1.9 0.8-1.5-0.7-1.2 3.3-5.2 7.2 0 0.4-2.2-0.8-0.4-0.5-1.4-1.9-1.5-1.8-2.1 2.5-0.1 0.5-3.6 5.2 0 5.2 0.1z',
		GR: 'M1112.7 272.6l3.1 2.2 4.1-0.4 4 0.4 0 1.2 2.8-0.8-0.5 1.9-7.6 0.5-0.1-1-6.6-1.3 0.8-2.7z m9.2-32.7l-3.2-0.2-2.7-0.6-6.2 1.6 4 3.6-2.5 1.1-2.9 0-3.1-3.3-0.9 1.4 1.6 3.8 2.9 3-1.9 1.4 3.2 2.9 2.8 1.9 0.4 3.6-5-1.7 1.8 3.3-3.3 0.6 2.5 5.7-3.5 0.1-4.6-2.8-2.4-5.1-1.3-4.3-2.3-2.9-3-3.7-0.5-1.8 2.2-3.1 0.1-2.1 1.7-0.9-0.1-1.7 3.4-0.5 1.8-1.4 2.8 0.1 0.8-1.1 1-0.2 3.8 0.2 4-1.8 3.9 2.3 4.6-0.6-0.3-3.2 2.7 1.7-1.1 4-1.2 0.7z',
		GQ: 'M1050.3 487.3l0 7.7-8.2 0-1.9 0.3-1.1-0.9 1.9-7.2 9.3 0.1z',
		GP: 'M643 399.9l-0.3 0-0.2-0.4 0.1-0.2 0.3-0.3 0.3 0.2 0.1 0.3 0 0.2-0.3 0.2z m-1.8-2.6l0.3 0 0 0.2 0 0.1-0.2 0.1 0 0.8 0 0.4-0.2 0.2-0.6 0.3 0-0.2-0.2-0.2-0.1-0.5 0-0.5-0.1-0.5 0-0.3 0.2-0.3 0.3-0.1 0.5 0.3 0.1 0.2z m1.4-0.4l0.4 0.1 0.5 0.4-1.3 0.3-0.3 0.1-0.4-0.3 0.1-0.6 0.2-0.1-0.1-0.6 0.1-0.2 0.3-0.2 0.3 0.4 0 0.4 0.2 0.3z',
		BH: 'M1264.1 333.3l0.3 0.1 0.2-0.1 0.4 0.7-0.1 0.2 0.1 0.9 0 0.7-0.2 0.4-0.1-0.4-0.6-0.8 0.1-0.4-0.2-0.7 0-0.4 0.1-0.2z',
		GY: 'M662.9 463.5l-1 5.8-3.5 1.6 0.3 1.5-1.1 3.4 2.4 4.6 1.8 0 0.7 3.6 3.3 5.6-1.3 0.3-3.2-0.6-1.8 1.7-2.6 1.1-1.8 0.3-0.6 1.3-2.8-0.3-3.5-3-0.3-3-1.4-3.3 1-5.4 1.6-2.3-1.2-3-2-0.9 0.8-2.9-1.2-1.4-3 0.2-3.7-4.8 1.6-1.8 0-3 3.5-1 1.4-1.2-1.8-2.4 0.5-2.3 4.7-3.8 3.6 2.4 3.3 4.1 0.1 3.4 2.1 0.1 3 3.1 2.1 2.3z',
		GF: 'M677.3 487l1.5-2.8 0.5-2.9 1-2.7-2.1-3.8-0.3-4.4 3.1-5.5 1.9 0.7 4.1 1.5 5.9 5.4 0.8 2.6-3.4 5.9-1.8 4.7-2.2 2.5-2.7 0.4-0.8-1.8-1.3-0.2-1.7 1.7-2.5-1.3z',
		GE: 'M1215.7 227.9l5.1 1.3 2.1 2.6 3.6 1.5-1.2 0.8 3.3 3.5-0.6 0.7-2.9-0.3-4.2-1.9-1.1 1.1-7 1-5.6-3.2-5.5 0.3 0.3-2.7-2.1-4.3-3.4-2.4-3-0.7-2.2-1.9 0.4-0.8 4.6 1.1 7.7 1 7.6 3.1 1.2 1.2 2.9-1z',
		GD: 'M639.2 424.5l-0.4 0.3-0.2-0.1-0.1-0.5 0.2-0.5 0.3-0.4 0.3 0 0.1 0.3-0.1 0.7-0.1 0.2z',
		GB: 'M956.7 158.2l-3.5-1.2-3 0.1 1.2-3.3-0.9-3.2 4-0.3 4.9 3.8-2.7 4.1z m15.9-28.7l-5.1 6.5 4.7-0.8 5.1 0-1.3 4.9-4.3 5.4 4.9 0.3 0.3 0.7 4.2 7.1 3.2 1 2.9 7 1.4 2.4 5.9 1.1-0.6 4-2.4 1.8 1.9 3.2-4.4 3.2-6.5-0.1-8.4 1.8-2.2-1.3-3.3 2.9-4.5-0.7-3.6 2.4-2.5-1.2 7.3-6.5 4.4-1.4-7.6-1-1.3-2.5 5.1-1.9-2.5-3.3 1-4 7.1 0.6 0.8-3.6-3.1-3.7-0.1-0.1-5.7-1.1-1.1-1.6 1.8-2.7-1.5-1.7-2.6 2.9-0.1-5.9-2.2-3 1.9-6.2 3.8-4.8 3.6 0.4 5.6-0.5z',
		GA: 'M1060.5 487.3l-0.4 2.8 1.6 3.3 4.2-0.5 1.4 1.2-2.5 7.5 2.7 3.8 0.6 5-0.7 4.3-1.7 3-5-0.3-3.1-3.1-0.4 2.9-3.8 0.8-2 1.6 2.1 4.2-4.3 3.6-5.8-6.5-3.7-5.3-3.5-6.6 0.2-2.2 1.3-2 1.3-4.7 1.2-4.8 1.9-0.3 8.2 0 0-7.7 2.7-0.4 3.4 0.8 3.4-0.8 0.7 0.4z',
		GN: 'M921.5 421.9l0.3 2.4 0.9 0 1.5-0.9 0.9 0.2 1.6 1.7 2.4 0.5 1.5-1.4 1.9-0.9 1.3-0.9 1.1 0.2 1.3 1.4 0.6 1.8 2.3 2.7-1.1 1.6-0.3 2.1 1.2-0.6 0.7 0.7-0.3 1.9 1.7 1.9-1.1 0.5-0.5 2.2 1.3 2.6 1.4 5.2-2.1 0.7-0.5 0.9 0.4 1.3-0.4 2.8-0.9 0-1.6-0.2-1.1 2.6-1.6 0-1.1-1.4 0.4-2.6-2.4-3.9-1.4 0.7-1.3 0.2-1.5 0.3 0.1-2.3-0.9-1.7 0.2-1.9-1.2-2.7-1.6-2.3-4.5 0-1.3 1.2-1.6 0.2-1 1.4-0.6 1.7-3.1 2.9-2.4-3.8-2.2-2.5-1.4-0.9-1.4-1.3-0.6-2.8-0.8-1.4-1.7-1.1 2.6-3.1 1.7 0.1 1.5-1 1.2-0.1 0.9-0.8-0.4-2.1 0.6-0.7 0.1-2.2 2.7 0.1 4.1 1.5 1.2-0.1 0.4-0.7 3.1 0.5 0.8-0.4z',
		GM: 'M891.6 417.4l0.8-2.9 6.1-0.1 1.3-1.6 1.8-0.1 2.2 1.6 1.7 0 1.9-1 1.1 1.8-2.5 1.5-2.4-0.2-2.4-1.3-2.1 1.5-1 0-1.4 0.9-5.1-0.1z',
		GL: 'M896.3 1.4l19.9 3-6.7 1.4-13 0.2-18.5 0.4 1.4 0.7 12.3-0.5 9.7 1.4 7-1.2 2.4 1.4-4.5 2.4 9.2-1.6 17.1-1.5 10 0.8 1.7 1.7-14.8 2.9-2.2 1-11.4 0.8 8.1 0.2-4.9 3.2-3.6 2.9-1.2 5.2 3.7 3.2-5.9 0.1-6.5 1.6 6.3 2.6-0.1 4.2-4.2 0.5 4.1 4.3-8.7 0.4 4 2-1.6 1.8-5.7 0.8-5.5 0.1 4.2 3.4-0.5 2.4-7.3-2.2-2.4 1.4 5 1.3 4.6 3.2 0.6 4.3-7.4 1-2.7-2.1-4.2-3 0.5 3.6-5.4 2.8 10.7 0.2 5.5 0.3-11.9 4.7-12.2 4.3-12.7 1.8-4.6 0.1-4.9 2.1-7.5 5.8-10.2 3.9-3 0.3-6.1 1.3-6.6 1.4-4.8 3.4-1.4 4-3.4 3.8-8.6 4.6 0.3 4.5-3.6 4.8-4.1 5.7-6.5 0.4-5-4.8-9-0.1-3.2-3.2-0.8-5.6-4.8-7.2-0.7-3.7 1.5-5.1-3.7-5.1 3.3-4.1-1.9-2 7-6.4 7.2-2.1 2.6-2.2 2.8-4.2-5.5 1.9-2.6 0.8-4.1 0.7-4.2-1.7 1.5-3.7 3-2.8 3.8-0.1 7.6 1.5-5.3-3.4-2.7-1.8-4.4 0.7-2.6-1.3 7-4.8-1.3-2-1.1-3.5-1.4-5.4-3.6-1.9 1.4-2.1-8.1-2.9-7.7-0.4-10.1 0.2-9.5 0.4-3.1-1.6-3.8-3.1 11-1.5 7.6-0.2-14.6-1.3-6.5-1.9 2.2-1.8 15.7-2.2 15-2.2 2.8-1.6-8.1-1.6 4.6-1.7 14.7-2.9 5.4-0.4 0.2-1.8 9-1.1 11-0.6 10.4 0 2.8 1.2 10.6-2.2 7.1 1.5 4.6 0.3 6.2 1.3-6.7-2.1 1.6-1.7 12.7-2.2 11.6 0.2 5.1-1.4 11.9-0.3 26.3 0.4z',
		GH: 'M986.5 431.1l-0.4 2 2.3 3.3 0 4.7 0.6 5 1.4 2.4-1.3 5.7 0.5 3.2 1.5 4.1 1.3 2.3-8.9 3.7-3.2 2.2-5.1 1.9-5-1.8 0.2-2.6-2.4-5.5 1.5-7.3 2.4-5.3-1.5-9.2-0.8-4.8 0.2-3.7 9.8-0.3 2.5 0.5 1.8-1 2.6 0.5z',
		OM: 'M1283.8 394.9l-2.2-4.5-5.2-10.6 16.3-6.4 2.6-12.8-3-4.6 0-2.6 1.3-2.6-0.2-2.6 2.4-1.3-1.1-0.9 0-4.2 2.8 0 3 4.4 3.3 2.3 4.1 0.9 3.4 1.1 2.9 3.7 1.7 2.1 2 0.9 0.2 1.4-1.7 3.8-0.7 1.8-2.2 2.1-1.7 4.4-2.5-0.4-1 1.6-0.7 3.2 1.1 4.3-0.5 0.8-2.5 0-3.3 2.4-0.3 3.1-1.2 1.4-3.5-0.1-2 1.6 0.2 2.6-2.6 1.8-3.1-0.6-3.6 2.2-2.5 0.3z m12.4-58.2l-1.3-2.2 1.4-2.1 0.7 0.5-0.2 2.7-0.6 1.1z',
		JO: 'M1198.1 295.3l-0.9 1-10.4 3.2 6 6.5-1.6 1-0.7 2.2-4.1 0.9-1.1 2.3-2.1 2-6.2-1.1-0.3-0.9 1.8-10.2-0.4-2.5 0.6-1.9-0.4-4 0.7-2 6.3 2.6 9.7-6.9 3.1 7.8z',
		HR: 'M1081.5 207.6l1.5 2.5 1.7 1.8-1.7 2.4-2.4-1.4-3.5 0.1-4.5-1.1-2.3 0.1-1 1.4-2-1.5-0.8 2.6 2.7 3 1.3 1.9 2.5 2.4 2.1 1.4 2.1 2.7 4.8 2.4-0.5 1-5-2.3-3.2-2.3-4.8-1.9-4.7-4.6 1-0.5-2.5-2.7-0.3-2.1-3.3-1-1.4 2.7-1.6-2.1 0-2.2 0.1-0.1 3.6 0.2 0.8-1 1.8 1 2 0.1-0.1-1.7 1.7-0.7 0.3-2.5 3.9-1.7 1.6 0.8 4 2.7 4.3 1.2 1.8-1z',
		HT: 'M586.8 375.3l0.1 3.4-0.7 2.5-1.5 1.1 1.3 1.9-0.3 1.8-3.6-1.1-2.7 0.4-3.4-0.4-2.7 1.2-2.8-2 0.7-2.1 5.1 0.9 4.1 0.5 2.2-1.4-2.3-2.8 0.4-2.5-3.5-1 1.5-1.7 3.4 0.2 4.7 1.1z',
		HU: 'M1096.2 191.9l3 1.7 0.5 1.7-2.9 1.3-1.9 4.2-2.6 4.3-3.9 1.2-3.2-0.3-3.7 1.6-1.8 1-4.3-1.2-4-2.7-1.6-0.8-1.2-2.1-0.8-0.1 1.3-4-1.1-1.4 2.8 0 0.2-2.6 2.7 1.7 1.9 0.6 4.1-0.7 0.3-1.3 1.9-0.2 2.3-0.9 0.6 0.4 2.3-0.8 1-1.5 1.6-0.4 5.5 1.9 1-0.6z',
		HN: 'M519.6 405.5l-1.9-0.1-0.9 0.9-2 0.8-1.4 0-1.3 0.8-1.1-0.2-0.9-1-0.6 0.2-0.9 1.5-0.5-0.1-0.2 1.4-2.1 1.7-1.2 0.8-0.6 0.8-1.5-1.3-1.4 1.7-1.2 0-1.3 0.1-0.2 3.2-0.8 0-0.8 1.5-1.8 0.3-0.8-2-1.7-0.6 0.7-2.6-0.7-0.7-1.2-0.4-2.5 0.7-0.1-0.8-1.6-1.1-1.1-1.2-1.6-0.6 1.3-1.6-0.3-1.3 0.5-1.2 2.9-1.8 2.8-2.5 0.6 0.3 1.3-1.1 1.6-0.1 0.5 0.5 0.9-0.3 2.6 0.6 2.6-0.2 1.8-0.7 0.8-0.7 1.7 0.3 1.3 0.4 1.5-0.1 1.2-0.6 2.5 0.9 0.8 0.2 1.6 1.2 1.5 1.4 1.9 1 1.3 1.7z',
		PR: 'M607.1 385.9l-0.3-0.2 0.1-0.2 0.3 0 0.1 0.1-0.2 0.3z m14.6-0.5l-0.2 0-0.9 0.3-0.6 0 0.2-0.2 0.4-0.2 0.4-0.1 0.6 0.1 0.1 0.1z m-9.5-2.4l0.6 0.1 0.6 0 0.3 0.1 0.6-0.1 0.3 0.1 0.4-0.1 0.2 0.1 0.5-0.1 0.4 0.1 0.3 0 0.8 0.2 0-0.2 0.6 0.2 0.1-0.1 0.8 0.1 0.2 0.2 0.2 0 0.6 0.3 0.2-0.1-0.1 0.7 0.2 0.3-0.9 0.3-0.3 0.4-0.3 0.6-0.3 0.2-0.3 0.1-0.4 0-0.6 0.1-0.3 0.2-0.7-0.1-0.2-0.2-0.5 0.2-0.3-0.3-0.7 0.2-0.9-0.1-0.3 0.1-0.6 0.1-0.2 0.1-0.2-0.2-0.4-0.1-0.3 0.2-0.6-0.1 0.3-0.7 0-0.4 0.2-0.4-0.2-0.6-0.2-0.1-0.1-0.4 0.4-0.2 0.2-0.1 0-0.5 0.4-0.2 0.5 0.1z',
		PS: 'M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z',
		PW: 'M1747.7 453.1l-0.2 0.4 0.1 0.1-0.2 0.6 0.1 0.2-0.5 0.2-0.2-0.7 0.3-0.2-0.2-0.2 0.3-0.6 0.3-0.1 0.2 0.3z',
		PT: 'M946.9 263.7l-2.2 1.6-2.8-0.9-2.7 0.7 0.9-5-0.3-3.9-2.4-0.6-1.1-2.4 0.5-4.2 2.2-2.3 0.5-2.6 1.2-3.8 0-2.7-0.9-2.3-0.2-2.2 1.9-1.6 2.2-0.9 1.2 3.1 3 0 0.9-0.8 3.1 0.2 1.3 3.2-2.4 1.7-0.3 5-0.8 0.9-0.3 3.1-2.3 0.5 2 3.8-1.6 4.2 1.8 1.9-0.8 1.7-2 2.4 0.4 2.2z',
		KN: 'M636.3 392l-0.3 0-0.1-0.2 0.2-0.4 0.2 0 0.1 0.2-0.1 0.4z m-0.7-1.5l-0.1 0.3-0.2 0-0.4-0.2-0.2-0.2 0.3-0.4 0.5 0.4 0.1 0.1z',
		PY: 'M662.5 631.4l2 3.5 0.4 8.7 5.9 1.3 2.2-1.3 3.9 1.8 1.2 1.9 1.1 5.9 0.8 2.4 2.1 0.3 2-1 2.1 1.1 0.3 3.6-0.3 3.8-0.7 3.7-0.3 5.6-4.3 5-4.2 1-6.3-1-5.8-1.7 4.2-9.8-1.1-2.8-5.9-2.5-7.3-4.8-4.6-1-11.3-10.4 1.5-7.7-0.2-3.5 2.1-5.6 9.6-1.9 5.2 0.1 5.4 3.3 0.3 2z',
		AI: 'M634.2 384.9l-0.2 0 0.3-0.4 0.3 0-0.2 0.3-0.2 0.1z',
		PA: 'M549.3 446.2l-0.7 0.9 1.1 3.8-1.1 1.9-1.8-0.5-0.9 3.1-1.8-1.8-1-3.5 1.4-1.7-1.4-0.4-0.9-2.1-2.8-1.8-2.4 0.4-1.3 2.2-2.4 1.6-1.2 0.2-0.6 1.4 2.5 3.5-1.6 0.8-0.8 0.9-2.7 0.4-0.8-3.9-0.8 1.1-1.8-0.4-1-2.5-2.3-0.5-1.5-0.7-2.4 0-0.2 1.4-0.6-1 0.3-1.3 0.6-1.3-0.2-1.1 0.9-0.8-1.1-0.9 0.1-2.6 2.2-0.6 1.9 2.3-0.2 1.4 2.2 0.3 0.6-0.6 1.5 1.6 2.8-0.5 2.5-1.6 3.5-1.3 2-1.9 3.1 0.4-0.2 0.6 3.1 0.2 2.4 1.2 1.8 1.9 2 1.8z',
		PF: 'M195.3 679.3l-0.1-0.1-0.2-0.3 0.1-0.2 0.3 0.2-0.1 0.4z m10.3-38.1l-0.1 0.1-0.3-0.2 0.2-0.2 0.2 0.3z m-6.2-24.7l-0.2-0.1 0.2-0.6 0.5-0.4 0.3 0 0 0.2-0.2 0.4-0.6 0.5z m-47.7-1l0.7 0.2 0.3 0.4 0 0.3-0.2 0.1-0.5-0.1-0.4-0.6-0.1-0.2-0.6 0.2-0.2 0-0.6-0.1-0.2-0.4-0.3-0.5 0-0.3 0.1-0.2 0.5-0.1 0.5 0 0.5 0.2 0.2 0.4 0.1 0.6 0.2 0.1z m-3-1.5l-0.2 0.6-0.5-0.2 0.1-0.3 0.5-0.2 0.1 0.1z m-7.6-4.3l-0.2 0.1-0.2-0.3 0.3-0.1 0.1 0.3z m-2.1 0.4l-0.3 0.2-0.3 0-0.2-0.8 0.2-0.2 0.7 0.8-0.1 0z m-1-1.8l0.2 0.1 0 0.5-0.4-0.2-0.1-0.3 0.3-0.1z m28.3-2.9l-0.3 0.1 0.1-0.3 0.2 0.2z m38-35.9l-0.3 0 0-0.4-0.2-0.3 0.4 0.1 0.1 0.4 0 0.2z m-3.1-3.5l-0.2 0 0-0.4 0.2-0.3 0.3 0.2-0.2 0.2-0.1 0.3z m1.2-1.6l0 0.3-0.4 0.1-0.6 0 0 0.3-0.4-0.1-0.2-0.2-0.1-0.3 0.7-0.4 0.3 0 0.2 0.2 0.5 0.1z m-6.9-2.6l0 0.4 0 0.2-0.3 0-0.3-0.4 0.3-0.3 0.3 0.1z m2.4-3l0.3 0.1 0.1 0.1-0.6 0.2-0.1-0.3 0.3-0.1z m-3.7-0.6l0.9 0.1 0.3 0.3 0 0.2-0.4 0.3-0.8 0-0.1-0.5-0.1-0.4 0.2 0z',
		PG: 'M1868.1 545.6l-1.6 0.7-2.3-2.5-2.2-4.1-0.8-4.9 0.8-0.6 0.5 1.9 1.6 1.5 2.4 4 2.5 2.2-0.9 1.8z m-21.4-8.6l-3 0.5-1 1.8-3.2 1.6-3 1.5-3.1 0-4.5-1.9-3.1-1.8 0.6-2 5 1 3.2-0.5 1-3.1 0.9-0.2 0.3 3.4 3.2-0.4 1.8-2.2 3.3-2.3-0.4-3.8 3.4-0.1 1.1 1-0.4 3.6-2.1 3.9z m-63.8 23.4l1.6-21 1-20.9 9.6 4.4 10.3 3.7 3.7 3.3 3 3.2 0.6 3.8 9.2 4 1.1 3.4-5.2 0.7 0.9 4.3 4.7 4.2 3 6.8 3.3-0.2-0.6 2.8 4.3 1.1-1.8 1.2 5.7 2.7-0.9 1.9-3.8 0.4-1.2-1.6-4.7-0.8-5.6-0.9-4-4.1-2.8-3.6-2.5-5.6-7.1-2.8-4.9 1.8-3.7 2.2 0.3 4.7-4.6 2.2-3.1-1.1-5.8-0.2z m70.7-29.7l-1.8 1.7-0.9-3.8-1.1-2.4-2.5-2.1-3.1-2.8-4-1.9 1.6-1.5 3 1.8 1.9 1.4 2.3 1.5 2.1 2.7 2.1 2.1 0.4 3.3z',
		PE: 'M590.5 529.4l-5.1-0.3-0.8 1-4.6 1.2-6.3 4.4-0.3 3-1.4 2.2 0.7 3.5-3.4 1.8 0.2 2.8-1.5 1.1 2.6 5.8 3.3 3.9-1 2.8 3.8 0.3 2.3 3.5 5 0.1 4.4-3.7 0.1 9.7 2.6 0.7 3.2-1.1 5.5 10.4-1.1 2.1 0 4.6 0.3 5.4-1.9 3.2 1.2 2.4-1.1 2.2 2.9 5.4-2.9 6.9-1.1 3.3-2.8 1.6-5.9-3.7-0.8-2.6-11.7-6.4-10.7-7.1-4.7-3.9-2.8-5.3 0.8-1.9-5.4-8.4-6.4-11.8-6-12.8-2.4-3-2-4.7-4.6-4.2-4.1-2.6 1.7-2.8-3-6.2 1.7-4.5 4.4-4 0.7 2.7-1.6 1.5 0.3 2.3 2.3-0.5 2.3 0.7 2.5 3.3 3.1-2.7 0.9-4.3 3.4-5.6 6.7-2.5 6.1-6.8 1.7-4.1-0.8-4.9 1.5-0.6 3.8 3 1.8 3.1 2.6 1.6 3.5 6.7 4.2 0.9 3.1-1.7 2.1 1.1 3.4-0.6 4.4 3-3.5 6.6 1.7 0.1 2.9 3.4z',
		PK: 'M1401.6 273.9l-3.8 5.4-5.7 1-8.5-1.6-2 2.8 3.3 5.6 2.9 4.4 5.1 3.1-3.8 3.7 1 4.6-3.9 6.5-2.2 6.5-4.5 6.7-6.5-0.5-4.9 6.8 4 2.8 1.4 5 3.5 3.2 1.8 5.5-12.1 0-3.2 4.3-4.2-1.6-2.2-4.6-4.9-4.9-10 1.2-9 0.1-7.6 0.9 1.1-7.4 7.5-3.4-0.9-2.9-2.7-1.1-1-5.6-5.7-2.8-2.8-3.9-3.2-3.4 9.6 3.3 5.3-1 3.4 0.8 0.9-1.4 3.9 0.6 6.6-2.7-0.8-5.4 2.3-3.7 4.1 0 0.2-1.7 4-0.9 2.1 0.6 1.8-1.8-1.1-3.9 1.4-3.8 3.1-1.7-3.1-4.2 5.2 0.2 0.9-2.3-0.8-2.5 2-2.7-1.4-3.2-1.9-2.7 2.4-2.8 5.3-1.3 5.9-0.8 2.4-1.1 2.9-0.8 4.7 3 2.9 5 9.5 2.5z',
		PH: 'M1700.5 447.8l0.9 4.3 0.6 3.6-1.6 5.8-2.5-6.5-2.4 3.3 2.1 4.7-1.4 3-6.9-3.7-1.9-4.7 1.5-3-3.8-3.1-1.6 2.7-2.6-0.3-4 3.6-1-1.9 1.8-5.4 3.4-1.8 2.9-2.4 2.2 2.9 4.2-1.7 0.7-2.9 4-0.2-0.8-4.9 4.9 3 0.7 3.2 0.6 2.4z m-14.6-12l-1.8 2.1-1.4 4.1-1.6 1.9-3.9-4.4 1-1.8 1.3-1.8 0.2-3.9 3.1-0.4-0.5 4.3 3.6-6.2 0 6.1z m-30.3 6.2l-7.1 6.1 2.4-4.5 3.8-4 3-4.4 2.3-6.4 1.6 5.3-3.5 3.5-2.5 4.4z m17.5-16.5l3.6 2 3.5 0 0.2 2.6-2.3 2.8-3.4 1.9-0.5-3 0.1-3.3-1.2-3z m20.1-1.8l2.4 7.2-4.5-1.7 0.3 2.2 1.8 3.9-2.6 1.5-0.6-4.6-1.8-0.3-1.2-3.9 3.3 0.5-0.3-2.4-4-4.9 5.4 0.1 1.8 2.4z m-23-5.8l-0.9 5.6-2.7-3.2-3.5-4.9 4.8 0.2 2.3 2.3z m-6.5-34.9l3.8 1.9 1.4-1.7 0.8 1.6-0.4 2.7 2.6 4.6-0.6 5.3-2.9 2.1-0.1 5.2 2 5.1 3 0.7 2.4-0.7 7.5 3.5-0.1 3.5 2.1 1.6-0.3 2.9-4.7-3.1-2.5-3.4-1.2 2.4-4-3.9-5 1-3-1.4-0.1-2.7 1.6-1.6-1.9-1.5-0.4 2.3-3.3-3.7-1.3-2.8-1.1-6.1 2.6 2.1-1.1-10.1 0.8-5.8 3.4 0z',
		PL: 'M1079.9 154.8l5.9 0.7 8.8-0.1 2.5 0.7 1.4 1.9 0.6 2.7 1.7 2.3 0.4 2.4-2.8 1.3 1.9 2.8 0.5 2.8 3.2 5.4-0.3 1.7-2.3 0.7-3.8 5.2 1.6 2.8-1.1-0.4-5-2.4-3.5 0.9-2.4-0.6-2.8 1.3-2.7-2.2-1.9 0.9-0.3-0.4-2.6-3.1-3.7-0.3-0.7-2-3.4-0.7-0.6 1.6-2.8-1.3 0.2-1.7-3.7-0.5-2.5-2-2.4-3.9 0.2-2.2-1.5-3.3-1.9-2.1 1.2-1.7-1.4-3.1 3.1-1.8 7.1-2.8 5.8-2 4.8 1 0.6 1.5 4.6 0z',
		ZM: 'M1162.1 556.8l0.3 0.2 2.2 1.1 3.6 1.1 3.2 1.9 2.6 2.9 1.3 5.4-1 1.7-1.3 5.2 0.9 5.4-1.8 2.2-2 6 2.9 1.6-17.2 5.3 0.4 4.6-4.3 0.9-3.3 2.5-0.8 2.2-2 0.6-5.1 5.2-3.2 4.2-1.9 0.1-1.8-0.7-6.2-0.7-1-0.5 0-0.5-2.2-1.5-3.6-0.3-4.6 1.4-3.6-4-3.6-5.2 0.8-20.5 11.7 0.1-0.4-2.2 0.9-2.4-0.9-3 0.7-3.1-0.6-2 1.9 0.1 0.3 2 2.7-0.1 3.5 0.6 1.9 2.9 4.4 0.9 3.5-2 1.2 3.3 4.3 0.9 2 2.8 2.2 3.5 4.3 0-0.2-6.9-1.6 1.2-3.9-2.5-1.5-1.2 0.9-6.4 1.1-7.6-1.2-2.8 1.7-4.1 1.5-0.8 7.7-1.1 0.9 0.3-0.3 1.4 1.9 0.5 1.2 1.3 1-0.3-0.5-1.1z',
		BQSE: 'M634.3 389.6l-0.2 0.1 0-0.2 0.1-0.1 0.1 0.2z',
		EH: 'M938.9 324.3l-0.1 0.4-0.1 1.2-0.2 9.8-18-0.4-0.2 16.5-5.2 0.5-1.5 3.3 0.9 9.3-21.7 0-1.3 2.1 0.3-2.7 0.1 0 12.5-0.5 0.7-2.3 2.4-2.9 2-8.9 7.9-6.9 2.7-8.1 1.8-0.5 1.9-5 4.6-0.7 2 0.9 2.5 0 1.8-1.5 3.4-0.2-0.1-3.4 0.9 0z',
		RU: 'M1689.5 177.4l13.7 11-8.9-2 3.7 9 9.6 6.4 3 4.4-6.5-3.8 0.1 4.9-4.7-5.3-3.8-6.1-5.6-6.7-2.4-4.8-6.4-8.2-8-6.1-6.8-8.4 1.9-2.8-4.4-2.8 1.3-0.9 4.9 4 6.9 5.9 5.2 6.1 7.2 6.2z m-594.9-22l-8.8 0.1-5.9-0.7 0.7-2.6 6.3-2 5.1 1.1 2.2 0.9-0.2 1.7 0.6 1.5z m453.8-107.2l-5.9 0.1-8.9-0.6-1-0.3 0.7-2 4.2-0.5 8.4 2 2.5 1.3z m12.6-9.5l-1.1 2-6.9-0.4-10.3-2-1.8-1.6 8.3 0.7 11.8 1.3z m-25.5-2.4l3.1 3.8-14.3-0.2-4.6 1.2-12.5-3.3-3.4-3.4 3.5-0.9 10.2 0.2 18 2.6z m-316.7 25l-2.2 0.4-13.5-0.7-2.3-2.3-7.9-1.4-2-2.9 3.5-1.1-1.6-2.8 5.4-4.4-4-0.6 6.7-4.5-2.5-2.3 6.8-2.6 10.3-3.2 11.7-0.9 5-1.8 6.7-0.6 4.2 1.9-1.3 1.5-11.4 2.5-9.9 2.3-8.7 4.8-2.8 5-3.3 5 3.1 4.3 10 4.4z m442.9 169.7l-1.4-1.1-1.9-3.3 2.5-0.1-3.9-7.5-4.7-5.4 2.9-2.2 6.9 1.1-0.6-6.2-2.8-6.8 0.3-2.3-1.3-5.7-6.9 1.9-2.6 2.4-7.6 0-6-5.8-9-4.5-10-2-6.2-6-4.5-3.8-3.8-2.7-7.7-6.2-6-2.2-8.6-1.9-6.2 0.2-5.1 1.1-1.7 3.1 3.7 1.4 2.5 3.4-1.3 2 0.2 6.5 1.9 2.8-4.4 3.9-7.4-2.4-5.6 0.6-3.9-2.1-3.4-0.7-4.4 4.4-5.9 1-3.6 1.6-6.8-1-4.6 0-4.9-3.2-6.6-2.9-5.4-0.9-5.7 0.8-4 1.2-8.5-2.6-3.6-4.6-6.7-1.6-4.8-0.8-7-2.5-1.3 6.4 4 3.6-2.4 4.4-8-1.6-5-0.2-4.8-2.9-5.2-0.1-5.3-1.9-5.9 2.9-6.7 5.3-4.7 1.1-1.7 0.5-4.4-3.8-6 0.9-3.3-2.7-4-1.2-4.1-3.6-3.3-1.1-6.2 1.6-8.4-3.5-1.1 3.2-18.3-15.6-8.4-4.7 0.8-2-9.2 5.8-4.4 0.3-1.1-3.3-7.1-2.1-4.3 1.5-4.4-6.3-9.1-1.3-3.1 2.5-10.9 2.3-1.7 1.5-17 2.1-1.4 2.1 5.1 4.2-4 1.6 1.5 1.6-3.5 3 9.4 4.3-0.2 2.9-7-0.3-0.8 1.9-7.3-3.2-7.7 0.1-4.4 2.6-6.6-2.5-12-4.3-7.6 0.2-8.1 6.7 0.6 4.5-6-3.6-2.2 6.9 1.8 1.2-1.7 4.8 5.3 4.2 3.6-0.2 4.3 4.2 0.2 3.2 2.8 1.1-1.4 3.7-4.6 1-3.6 6.5 6 6.1 0.4 4.2 7.3 7.5-2.5 2.6-0.6 1.6-2.4-0.5-4.3-3.8-1.5-0.2-3.6-1.5-2.1-2.6-5.1-1.3-2.9 1-1.2-1.2-7.6-3.1-7.7-1-4.6-1.1-0.4 0.8-7.6-5.4-6.2-2.4-5.1-3.7 3.6-1 3.2-5.2-3.3-2.5 6.9-2.6-0.4-1.4-4.3 1-0.4-2.7 2.2-1.8 4.8-0.4 0.3-2.1-1.8-3.5 1.3-3.2-0.4-1.9-7.7-2-2.9 0.1-3.6-2.9-3.6 1-6.7-2.2-0.1-1.2-2.3-2.7-3.9-0.3-0.8-1.9 0.9-1.3-3.8-3.5-4.9 0.6-1.5-0.3-1 1.4-1.8-0.2-2-4-1.5-2 0.8-0.6 3.9 0.2 1.6-1.3-1.7-1.6-3.4-1.1 0-1.1-2.1-1.1-3.8-4 0.7-1.6-1.1-2.9-4.8-1.4-2.4 0.7-0.9-1.5-5.3-1.5-2.1-3.6-1-2.9-2.5-1.3 1.6-1.9-2.4-5.6 2.6-3.4-0.9-1 4.5-3.3-5.4-2.8 8-7.4 3.4-3.4 0.9-2.9-7.4-3.9 0.9-3.8-4.9-4.2 1.7-4.8-6.5-6.3 2.9-4.2-7.3-3.7-0.4-3.8 3.2-0.5 6.4-2.1 3.7-1.9 7.7 3.2 11.7 1.3 17.7 6.2 4.1 2.6 1.5 3.7-3.7 2.9-6.5 1.5-20.2-4.2-2.9 0.7 8.1 4.1 1 2.6 1.9 5.8 6.1 1.7 3.8 1.5-0.2-2.8-3.4-2.4 2.1-2.2 11.6 3.6 3.2-1.4-4.3-4.2 8.1-5.4 4.1 0.3 4.6 1.9 1.1-3.8-4.7-3.3 0.8-3.3-4.3-3.4 12.3 1.8 3.6 3-5.1 0.7 1.2 3.1 4.1 1.9 6-1.2-0.4-3.5 7.7-2.7 12.4-4.6 3.2 0.2-2.5 3.3 5.4 0.6 2.1-1.9 7.7-0.1 5-2.3 6.4 3.3 2.8-3.6-6-3.1 1.2-1.8 13 1.6 6.6 1.7 18.6 6.2 1.1-2.8-5.9-2.9-0.8-1.1-5.3-0.6-0.2-2.5-4.7-4.2-1.1-1.7 4.3-4.7-0.6-4.8 2.2-1 11.4 1.4 2.9 2.9-0.9 4.2 3.7 1.7 3.8 3.7 3.8 7.4 6.7 3.3 0.5 3.7-3.5 7.8 5.3 0.8 0.5-2 3.8-1.4-0.5-2.7 1.9-2.7-4.4-3.1-0.4-3.6-4.8-0.4-2.9-3-0.4-5.4-8.2-4.3 4.7-3.5-3.7-3.7 1.9-0.1 4.2 2.8 2.1 5.1 5 1-4.6-3.8 5.1-2.1 8.1-0.3 9.6 3-6.9-4.3-4.9-5.5 5.9-1 9.5 0.2 7.8-0.7-5.6-2.6 1.3-3.3 4.2-0.2 4.9-2.4 9.3-0.7-0.2-1.4 9.3-0.4 4.3 1.1 5.4-2.6 7 0.1-1.5-2.2 0.9-2 6.2-2 8.3 1.6-3.5 1.2 9.4 0.7 4.1 2.4 1.9-1.2 10.9 0.1 11.6 2.4 5.5 1.8 2.5 2.6-2.4 1.5-6.6 2.8-1.1 1.5 5.6 0.7 7.2 1.3 2.4-1 5.8 3.3 0.2-1.3 5.2-0.8 13.6 0.8 3.8 2.4 17.4 0.8-4.8-3.9 9.5 0.9 6.1-0.1 9.9 2.7 6 3.3 0.4 2.2 10.1 4.2 9 2.1-3-5.5 9.4 2.3 5-1.4 9.8 1.6 1-1.4 7.6 0.7-9.4-4.9 2.1-2.2 40.4 3.4 7.9 3.1 16.3 4 14.8-1 9.3 0.9 6.6 2.2 5.1 3.9 7.3 1.5 3.9-1.1 7-0.1 9.3 1 6.9-0.6 14.3 4.8 2.5-1.7-8.5-3.4-1.8-2.4 15.3 1.5 8-0.3 15.8 2.5 9.5 2.4 33.2 22.1-2 2.5-6.2-0.4 8.2 3 9.1 4.7 4.2 1.5 3.8 2.4 1 1.5-10-1.2-6.6 4.3-3 0.7-1.6 4.1-2 3.6 1.7 2.7-11.5-4.1-6.1 4.6-4.7-2.2-1.4 2.6-7-0.9 3.1 3.9 1.1 5.8 2.9 2.4 6.8 1.3 9.1 8.7-4.1 0.3 3.4 5 4.7 2.6-5 3.1 5.4 7-5.7 1.5 4.5 6.2-1.7 5.8-5.7-4.3-10.5-8.9-16.2-13.6-6.5-8.3 0.1-3.6-2.8-2.8 5.7-1.3-0.2-7.5 0.7-6 2.5-4.7-6.6-8.2-4.7 0.5 3.2 4.8-3.6 6.4-12.3-7.2-9.1 2 0 9.8 7.7 3.6-8.5 1.6-6.4 0.6-4.3-4.3-8-0.9-2.5 2.9-15.1-1-13.2 1.7-3.5 11.7-5 14.2 8.2 0.8 5.7 3.8 5.8 1.3 0.4-3 5.6 0.4 12.8 6.7 4.7 5.2 1.4 6.2 5.5 7.4 5.3 9.9-1 9.1 1.3 4.3-2 7.4-2.1 7.3-0.9 3.7-4.6 3.7-3.1 0.1-5.2-3.1-4.1 4.7 0.5 2.1z m-294.6-207.9l-18.1 1.8-1.3-6.1 2.2-0.5 3.1 0.3 12.6 2.6 1.5 1.9z m-202.3-10l-4.3 0.5-2.9 0.4 0 0.7-3.6 0.7-4.5-1 1.1-1.4-7.8-0.1 6.3-0.8 5.2 0 1.5 1.1 1.3-1 2.8-0.7 5.8 0.9-0.9 0.7z m180.3 7.3l-7.1 0.6-11.7-1.3-8.1-1.7-6.6-3.2-5.9-0.8 5.4-2.9 6.2-0.9 9.6 2 13.7 4.2 4.5 4z',
		EE: 'M1113.7 124.6l0.9 1-2.6 3.4 2.4 5.6-1.6 1.9-3.8-0.1-4.4-2.2-2.1-0.7-3.8 1-0.1-3.5-1.5 0.8-3.3-2.1-1-3.4 5.5-1.7 5.6-0.8 5.1 0.9 4.7-0.1z',
		EG: 'M1172.1 301.4l3.9 9.4 0.7 1.6-1.3 2.6-0.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-0.5 0.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1 0.4 4.2 6.8 5.8 1.1 1.3-22.1 0-21.5 0-22.3 0-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-0.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-0.6 3.9 0.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3 0.4 2.5-1.6z',
		ZA: 'M1159.4 644.7l2.2 9 1.1 4.6-1.4 7.1 0.4 2.3-2.7-1.1-1.7 0.4-0.6 1.9-1.7 2.4-0.1 2.2 3.1 3.5 3.2-0.7 1.4-2.8 4.1 0-1.7 4.7-1 5.3-1.7 2.9-4 3.3-1.1 0.9-2.6 3.3-1.8 3.3-3.5 4.6-6.7 6.6-4.1 3.8-4.3 3-5.9 2.4-2.7 0.4-0.9 1.8-3.2-1-2.7 1.2-5.7-1.2-3.3 0.8-2.2-0.4-5.8 2.6-4.6 1-3.5 2.4-2.4 0.2-2.1-2.3-1.8-0.1-2.2-2.9-0.3 0.9-0.6-1.7 0.3-3.8-1.5-4.3 1.8-1.2 0.1-4.9-3.3-6-2.4-5.4 0-0.1-3.6-8.3 2.8-3.2 2 1.8 0.8 2.7 2.5 0.5 3.4 1.2 2.9-0.5 5-3.3 1.1-23.7 1.4 1 3 6.1-0.6 3.9 1.1 2.3 4-0.7 2.8-2.9 2.7-1.9 1.5-3.1 2.8-1.4 2.3 0.7 2.5 1.8 4.5 0.3 3.6-1.4 0.6-2 1.2-3.1 3-0.5 1.8-2.4 2-4.3 5.2-4.8 8.1-4.7 2.2 0 2.7 1.1 1.9-0.8 2.9 0.7z m-20.3 53.2l1.1-2 3.1-1 1.1-2.1 1.9-3.1-1.7-2-2.2-2-2.7 1.4-3.1 2.5-3.2 4 3.7 5 2-0.7z',
		EC: 'M559 502.8l0.8 4.9-1.7 4.1-6.1 6.8-6.7 2.5-3.4 5.6-0.9 4.3-3.1 2.7-2.5-3.3-2.3-0.7-2.3 0.5-0.3-2.3 1.6-1.5-0.7-2.7 2.9-4.8-1.3-2.8-2.1 3-3.5-2.9 1.1-1.8-1-5.8 2-1 1-4 2.1-4.1-0.3-2.6 3.1-1.4 3.9-2.5 5.6 3.6 1.1-0.1 1.4 2.8 4.8 0.9 1.6-1 2.8 2.1 2.4 1.5z',
		IT: 'M1068.2 256.4l-1.7 5.1 0.9 1.9-0.9 3.3-4.2-2.4-2.7-0.7-7.5-3.2 0.5-3.3 6.2 0.6 5.4-0.7 4-0.6z m-34-19l3.3 4.5-0.4 8.5-2.4-0.4-2.1 2.1-2-1.7-0.5-7.7-1.3-3.6 2.9 0.3 2.5-2z m21.7-33.5l-0.4 3.1 1.4 2.7-4.1-1-3.9 2.3 0.4 3.1-0.5 1.8 1.9 3.2 5 3.2 2.9 5.3 6.1 5.1 4-0.1 1.4 1.4-1.4 1.3 4.8 2.3 4 1.9 4.7 3.4 0.6 1.1-0.8 2.3-3.1-3-4.6-1-1.9 4.1 3.9 2.4-0.4 3.3-2.1 0.4-2.5 5.5-2.2 0.5-0.1-2 0.9-3.4 1.1-1.4-2.3-3.7-1.8-3.2-2.2-0.8-1.8-2.7-3.4-1.2-2.4-2.6-3.8-0.4-4.3-2.8-4.9-4.2-3.7-3.6-1.9-6.3-2.6-0.7-4.2-2.1-2.3 0.8-2.9 3-2.1 0.4 0.5-2.7-2.8-0.8-1.5-4.9 1.7-1.9-1.5-2.4 0.1-1.8 2.2 1.4 2.5-0.3 2.7-2.2 0.9 1 2.4-0.2 1-2.5 3.8 0.8 2.1-1.1 0.3-2.5 3.1 0.9 0.5-1.2 4.9-1.1 1.3 2.1 7.3 1.7z',
		VN: 'M1586.5 363.5l-6.5 5.4-3.7 6.1-0.6 4.5 5.3 6.7 6.5 8.4 5.7 4 4.1 5.1 4 11.9 0.4 11.3-4.3 4.2-6.1 4.2-4.2 5.3-6.6 6-2.3-4.1 1.2-4.4-4.4-3.6 4.6-2.6 5.9-0.5-2.8-3.8 9-5-0.1-7.7-1.8-4.3 0.2-6.4-2-4.5-4.9-4.5-4.4-5.6-5.7-7.6-7.3-3.9 1.2-2.3 3.3-1.7-3-5.6-6.8 0-3.5-5.8-4-5.1 2.7-1.6 4.4 0.1 5.3-0.8 4.1-3.4 3.1 2.4 5.3 1.2-0.3 3.7 3.1 2.6 5.9 1.7z',
		SB: 'M1926.8 576.2l0.3 0.2-0.1 0.4 0.3 0 0 0.2-0.8 0-0.3-0.5 0.2-0.3 0.4 0z m-38.3-0.6l0.2 0 1 0.8 0.5 0.3 0.9 0.7-0.1 0.3-0.2 0-0.2 0.2-0.2-0.3-0.1 0-0.2-0.2-0.1-0.4-0.4-0.1 0-0.3-0.3-0.1-0.1 0.1-0.2 0-0.9-0.4-0.2-0.4 0.3-0.4 0.3 0.2z m36.9-1.5l-0.2 0.3-0.3-0.2 0-0.2 0.3-0.2 0.2 0.3z m-2.3-3.9l0.1 0.1 0.3 0-0.1 0.4-0.5 0.2-0.3 0-0.4 0.1-0.4 0.6-0.1-0.3-0.3 0.1-0.2-0.2 0-0.3 0.5-0.1 0-0.2 0.3-0.4 0.7 0.1 0.4-0.1z m-26.3-2.8l0.3-0.1 0.6 0.3 0.5 0.5 0.3 0.3 0.2 0 0.2 0.2 0.2 0 0.3 0.3 0.3-0.1 0.4 0.1 0.2 0.2 0.4 0 0.3-0.1 0.2 0.3 0.2 0.8 0.3 0.3 0 0.5-0.2 0.2 0.1 0.3-0.4-0.2-0.3 0.2-0.3-0.1-0.5-0.3-0.2 0-0.6-0.2-0.4-0.1-0.2-0.3-0.3-0.2-0.3-0.1-0.2-0.3-0.4-0.2 0.2-0.4-0.1-0.4 0-0.4-0.2-0.1-0.6-0.2-0.3 0.1-0.1-0.2 0.1-0.3 0.1-0.3 0.2 0z m4-3.4l-0.1 0.2 0 0.7-0.2-0.2 0-0.5 0.3-0.2z m-2.9-1.8l0.3 0.9 0.2 0.4 0 0.4 0.1 0.5-0.2 0.3-0.4-0.7-0.1 0.3-0.3-0.5 0.1-1 0.1-0.2 0-0.3 0.2-0.1z m-8.4 0.2l0.3 0 0.3-0.1 0.4 0.1 0.1-0.1 0.5 0 0.8 0 0.2 0.3 0.3 0.1 0.2 0.3 0.2 0 0.2 0.1 0.4 0.4 0 0.6 0.2 0 0.4 0.2 0.1 0.3 0 0.6-0.1 0.1-0.7 0.2-0.2 0.1-0.4-0.1-0.4-0.2-0.4 0-0.1-0.2-0.5-0.3-0.6 0-0.5 0.1-0.5 0-0.5-0.1-0.3-0.2-0.3 0.1-0.3-0.4-0.3-0.2-0.3-0.8-0.2-0.4 0.2-0.2-0.1-0.2 0-0.7 0.1-0.3 0.6-0.3 0.4 0.2 0.4 0.5 0.1 0.3 0.3 0.2z m2.3-2.4l0.5 0.5-0.3 0.3-0.3-0.2 0-0.1 0.1-0.5z m0 0l-0.2 0.4-0.1 0-0.4-0.3-0.3 0.1-0.2-0.1-0.1-0.2 0.3-0.1 0.2-0.2 0.5 0.1 0.3 0.3z m-6.6-0.5l0.1 0.2 0.2 0.1-0.2 0.4-0.4 0.2-0.3-0.4 0.6-0.5z m-8.5-1.8l0.2 0.3-0.1 0.3-0.8-0.4 0.5-0.3 0.2 0.1z m3.4 0.8l-0.3-0.2 0.1-0.3 0.3-0.3 0 0.5 0.1 0.2-0.2 0.1z m-0.9-1.8l0.2-0.1 0.4 0 0 0.2-0.4 0.3 0.2 0.2 0 0.3-0.4 0.4-0.2 0.1-0.3-0.1-0.4-0.4 0.1-0.6 0.3-0.1 0.2-0.4 0.3-0.1 0 0.3z m-3.6 0.1l-0.2 0.1-0.2 0.5 0.4 0.5-0.5-0.2 0-0.2-0.1-0.3-0.4-0.4 0-0.2 0.4-0.2 0.1-0.3 0.4-0.3 0.3 0.2 0 0.4-0.2 0.4z m12.9-0.5l0.2 0.2-0.1 0.2-0.2-0.1-0.6-0.5 0.2-0.4 0.3-0.1 0.2 0.2-0.1 0.3 0.1 0.2z m6.5-0.8l0.4 0.8 0.6 0.8 0 0.3-0.4 0.2 0 0.5 0 0.3 0.1 0.2 0.2 0 0.2 0.3 0.5 0.4 0.1 0.5 0.1 0.3 0.2 0.2-0.2 0.2 0.3 0.3-0.1 0.1 0.1 0.5-0.2 0.2 0.3 0.3 0.1 0.5 0.2 0.5 0 0.6-0.1 0.1-0.3-0.3-0.3-0.5 0-0.3-0.3-0.4-0.4-0.3-0.3-0.3-0.5-0.6-0.4-0.3-0.3-0.9-0.2-1-0.2-0.7 0-0.5-0.1-0.4 0.4-0.4-0.1-0.3-0.5-0.7-0.1-0.3 0.1-0.1 0.4 0.1 0.2 0.1 0.3-0.3 0.2 0.3z m-20.7-0.3l-0.2-0.4-0.3-0.3 0.4 0 0.1 0.7z m-0.1-1l0.4 0.1 0.1 0.1 0.1 0.5-0.2 0-0.2-0.4-0.2-0.3z m3.1 0.2l-0.1 0.3 0.2 0 0.5 0 0.4 0.7 0 0.2 0.2 0.3 0.1 0.5-0.2 0.2 0 0.3-0.6-0.2-0.2-0.2-0.3 0-0.4-0.3-0.1-0.2-0.1-0.3 0.4 0.1-0.3-0.8-0.1-0.2-0.5 0.1-0.2 0.1-0.4 0-0.3 0.4-0.4-0.2 0-0.6 0.2-0.2 0.4 0 0-0.4 0.4-0.6 0.4-0.3 0.3-0.2 0.4 0.3 0.2 0.4-0.1 0.7 0.2 0.1z m-5.9 0l-0.1 0-0.2-0.8 0.1-0.3 0-0.4 0.2 0.1 0.1 0.4 0 0.7-0.1 0.3z m3.4-0.5l-0.3 0.2-0.1-0.1-0.4 0-0.3-0.3-0.1-0.3-0.1-0.3 0.1-0.3 0.3-0.4 0.5-0.2 0.2 0.2 0.3 0.5 0 0.6-0.1 0.4z m-3-3.5l0.4 0.5 0 0.1 0.7 0.4-0.1 0.3-0.6 0.7 0 0.3-0.3 0.1 0-0.4-0.2 0 0-0.4-0.2-0.4-0.3-0.2-0.1-0.3 0.1-0.3 0.2-0.2 0.2-0.2 0.2 0z m10.3 0.1l0.3 0.2-0.2 0.1-0.5 0.1-0.1-0.3 0.2-0.2 0.3 0.1z m0.9 0l0.2-0.1 0.5 0.3 0.3 0.1 0.2 0.2 0.3 0.5 0.3 0.1 0.3 0.3 0 0.3 0.5 0.1 0 0.3 0.3 0.1 0.3-0.1 0.1 0.1 0.4 0.2 0.1 0.2 0.3-0.1 0.3 0.1 0.1 0.3 0.4 0.3 0.3 0.3 0.4 0.3 1 1-0.3 0.4 0.3 0.5 0.1 0.6-0.3-0.1-0.3-0.4-0.7-0.8-0.4-0.1-0.5-0.4-0.6-0.1-0.1-0.3-0.6-0.2-0.5-0.5-0.2 0-0.8-0.6-0.5-0.3 0-0.2-0.4-0.2-0.2-0.2-0.2-0.4-0.4-0.3-0.1-0.2 0-0.4-0.4-0.5-0.2-0.1 0-0.3 0.7 0.3z m-1.5-0.6l0.2 0.2 0.2-0.1 0.3 0.2-0.1 0.2-0.3-0.1-0.3-0.4z m-4.5-0.6l0.5 0-0.2 0.2-0.3-0.1 0-0.1z m4.3 0l-0.2 0.5-0.1-0.2 0.3-0.3z m-2.7 0.4l-0.5 0.1-0.2-0.2 0.3-0.4 0.3 0.1 0.1 0.4z m-12.5-0.9l0.2 0.3-0.2 0.2-0.3-0.1-0.1-0.1 0.4-0.3z m1.5-1.9l0.3 0.2-0.1 0.3-0.7 0.2-0.3-0.3 0.3-0.6 0.2-0.1 0.3 0.3z m1.7-0.9l0 0.5-0.2-0.2 0-0.2 0.2-0.1z m2.9-1.5l0.3 0.1 0.4 0.5 0.3 0.2 0.3 0.1 0.3 0.3 0.8 0.4 0.4 0.5 0 0.4 0.1 0.6 0.2 0.2 0.3 0.3 0.2 0 0.1 0.4 0.7 0.3 0.4-0.1 0.1 0.1 0 0.3-0.3 0.1-0.2 0.3-0.5-0.2-0.8-0.4-0.5 0-0.3-0.4-0.7-0.4-0.6-1-0.6-1-0.5-0.3-0.7-0.7 0-0.5 0-0.2 0.3-0.2 0.3 0.1 0.2 0.2z',
		ET: 'M1207.3 408.5l3.9 0.1 5 2.6 1.5 2.2 2.6 2.1 2.5 3.7 2 2.1-1.9 2.8-1.8 3 0.5 1.8 0.2 2 3.2 0.1 1.3-0.5 1.3 1.2-1.2 2.2 2.2 3.6 2.2 3.1 2.2 2.3 18.7 7.6 4.8-0.1-15.6 19.3-7.3 0.3-5 4.5-3.6 0.1-1.5 2.1-3.9 0-2.3-2.2-5.2 2.7-1.6 2.7-3.8-0.6-1.3-0.7-1.3 0.2-1.8-0.1-7.2-5.4-4 0-1.9-2.1-0.1-3.6-2.9-1.1-3.5-7-2.6-1.5-1-2.6-3-3.1-3.5-0.5 1.9-3.6 3-0.2 0.8-1.9-0.2-5 0-0.8 1.5-6.7 2.6-1.8 0.5-2.6 2.3-5 3.3-3.1 2-6.4 0.7-5.5 6.6 1.4 1.5-4.8 3.6 2.9 3.2-1.5 1.4 1.3z',
		SO: 'M1222.1 512.6l-3.3-5.3-0.2-23.4 4.9-7.2 1.5-2.1 3.6-0.1 5-4.5 7.3-0.3 15.6-19.3-4.8 0.1-18.7-7.6-2.2-2.3-2.2-3.1-2.2-3.6 1.2-2.2 1.9-3.5 1.9 1.2 1.2 2.7 2.7 2.7 2.8 0 5.2-1.7 6.1-0.7 4.9-2 2.8-0.4 2-1.2 3.2-0.2 1.8-0.2 2.5-0.9 3-0.7 2.5-2.2 2.2 0 0.2 1.8-0.4 3.7 0.2 3.4-1.1 2.3-1.4 7-2.4 7.1-3.3 8.2-4.6 9.4-4.7 7.2-6.6 8.8-5.6 5.2-8.4 6.4-5.3 4.8-6.2 7.8-1.3 3.4-1.3 1.5z',
		ZW: 'M1159.4 644.7l-2.9-0.7-1.9 0.8-2.7-1.1-2.2 0-3.4-2.9-4.3-1-1.5-4.1 0.1-2.3-2.3-0.7-6.1-7-1.6-3.7-1.1-1.2-1.9-5.1 6.2 0.7 1.8 0.7 1.9-0.1 3.2-4.2 5.1-5.2 2-0.6 0.8-2.2 3.3-2.5 4.3-0.9 0.2 2.4 4.7-0.1 2.6 1.3 1.1 1.6 2.7 0.5 2.8 2-0.4 8.2-1.3 4.4-0.4 4.8 0.8 1.9-0.9 3.8-0.8 0.6-1.7 4.6-6.2 7.3z',
		KY: 'M532.7 377.8l0.3 0.1 0.2-0.4 0.4 0.1 0.5 0 0.1 0.2-0.2 0.2-0.2-0.1-0.4 0.1-0.2 0.1-0.7 0 0.2-0.3z m8.1-2.5l-0.7 0.3 0.2-0.3 0.5 0z m0.6 0.1l-0.1-0.1 0.8-0.3-0.2 0.3-0.5 0.1z',
		ES: 'M976.6 223.4l2 2.4 9.5 2.9 1.9-1.4 5.8 2.9 5.9-0.8 0.4 3.7-4.9 4.2-6.6 1.4-0.5 2.1-3.2 3.5-2 5.2 2 3.7-3 2.8-1.2 4.2-4 1.3-3.7 4.9-6.8 0.1-5-0.1-3.4 2.2-2.1 2.4-2.6-0.5-1.9-2.2-1.4-3.6-4.9-1-0.4-2.2 2-2.4 0.8-1.7-1.8-1.9 1.6-4.2-2-3.8 2.3-0.5 0.3-3.1 0.8-0.9 0.3-5 2.4-1.7-1.3-3.2-3.1-0.2-0.9 0.8-3 0-1.2-3.1-2.2 0.9-1.9 1.6 0.5-4.5-2-2.7 7.4-4.6 6.2 1.1 6.9 0 5.4 1.1 4.3-0.4 8.3 0.3z',
		ER: 'M1228.9 420.3l-1.7 1.6-2.4-0.6-2-2.1-2.5-3.7-2.6-2.1-1.5-2.2-5-2.6-3.9-0.1-1.4-1.3-3.2 1.5-3.6-2.9-1.5 4.8-6.6-1.4-0.7-2.5 2-9.5 0.3-4.2 1.7-2 4-1.1 2.7-3.6 3.6 7.4 1.9 5.9 3.2 3.1 8 6.1 3.3 3.6 3.2 3.8 1.8 2.2 2.9 1.9z',
		ME: 'M1090.6 227.2l-0.8 1.4-1.4 0.6-0.4-1.2-1.9 3.1 0.5 2.1-1.1-0.5-1.7-2.1-2.3-1.3 0.5-1 0.4-3.5 1.6-1.5 0.9-0.6 1.4 1.1 0.9 0.9 1.7 0.7 2.1 1.3-0.4 0.5z',
		MD: 'M1129.4 210.3l-1.3-2.9 0.2-2.7-0.6-2.7-3.4-3.8-2-2.6-1.8-1.8-1.6-0.7 1.1-0.9 3.2-0.6 4 1.9 2 0.3 2.6 1.7-0.1 2.1 2 1 1.1 2.6 2 1.6-0.2 1 1 0.6-1.3 0.5-3-0.2-0.6-0.9-1 0.5 0.6 1.1-1.1 2.1-0.6 2.1-1.2 0.7z',
		MG: 'M1267.9 588.9l0.4 7.7 1.3 3-0.7 3.1-1.2 1.8-1.6-3.7-1.2 1.9 0.8 4.7-0.7 2.8-1.7 1.4-0.7 5.5-2.7 7.5-3.4 8.8-4.3 12.2-2.9 8.9-3.1 7.5-4.6 1.5-5.1 2.7-3-1.6-4.2-2.3-1.2-3.4 0-5.7-1.5-5.1-0.2-4.7 1.3-4.6 2.6-1.1 0.2-2.1 2.9-4.9 0.8-4.1-1.1-3-0.8-4.1-0.1-5.9 2.2-3.6 1-4.1 2.8-0.2 3.2-1.3 2.2-1.2 2.4-0.1 3.4-3.6 4.9-4 1.8-3.2-0.6-2.8 2.4 0.8 3.3-4.4 0.3-3.9 2-2.9 1.8 2.8 1.4 2.7 1.2 4.3z',
		MF: 'M634.2 386l-0.4-0.1 0.2-0.3 0.3-0.1-0.1 0.5z',
		MA: 'M974.8 276l1.9 4.1 0.3 3.9 1.9 6.8 1.4 1.4-1 2.5-7.1 1.1-2.5 2.3-3.1 0.6-0.3 4.8-6.4 2.5-2.1 3.2-4.5 1.7-5.4 1-8.9 4.8-0.1 7.6-0.9 0 0.1 3.4-3.4 0.2-1.8 1.5-2.5 0-2-0.9-4.6 0.7-1.9 5-1.8 0.5-2.7 8.1-7.9 6.9-2 8.9-2.4 2.9-0.7 2.3-12.5 0.5-0.1 0 0.3-3 2.2-1.7 1.9-3.4-0.3-2.2 2-4.5 3.2-4.1 1.9-1 1.6-3.7 0.2-3.5 2.1-3.9 3.8-2.4 3.6-6.5 0.1-0.1 2.9-2.5 5.1-0.7 4.4-4.4 2.8-1.7 4.7-5.4-1.2-7.9 2.2-5.6 0.9-3.4 3.6-4.3 5.4-2.9 4.1-2.7 3.7-6.6 1.8-4 3.9 0.1 3.1 2.7 5.1-0.4 5.5 1.4 2.4 0z',
		UZ: 'M1352.7 230.7l1.7 0.6-3 4.1 4.6 2.4 3.2-1.6 7.2 3.4-5.3 4.6-4.1-0.6-2.1 0.1-1.3-1.7 0.2-3-6.5 1.5-0.5 4.1-1.5 3.5-4.4-0.3-0.6 2.8 4.2 1.5 2.4 4.8-1.3 6.5-4.3-1.4-3 0-0.8-3.9-7.7-2.8-6.3-3.1-4.2-3-7.1-4.4-4.3-6.6-2.1-1.2-5.5 0.3-2.3-1.3-1.9-5-7.9-3.4-3.4 3.7-3.8 2.2 1.7 3.2-5.9 0.1-6.2-23.4 12-3.7 1.1 0.5 9.2 4.5 4.8 2.4 6.6 5.7 5.7-0.9 8.6-0.5 7.6 4.6 1.5 6.4 2.6 0.1 2.5 5.2 6.7 0.2 2.3 3 2 0 0.9-4.6 5.4-4.4 2.6-1.2z',
		MM: 'M1548.4 364.2l-4.1 4.2-0.8 2.3-3 1.5-2.8 2.8-3.9 0.3-1.5 6.9-2.2 1.2 3.5 5.6 4.1 4.7 2.9 4.3-1.4 5.5-1.8 1.2 1.8 3.2 4.3 5.1 1 3.6 0.2 3 2.7 5.9-2.6 6-2.2 6.6-0.9-4.8 1.3-4.9-2.2-3.8-0.2-7-2.6-3.4-2.7-7.6-2-8.1-3.1-5.4-3.2 3.3-5.8 4.5-3.3-0.5-3.6-1.5 0.9-8-2-6-5.3-7.4 0.3-2.3-3.4-0.9-4.6-5.2-1.1-5.2 2.1 1-0.6-4.6 2.5-1.5-1-2.7 1-2.2-0.9-6.7 4.6 1.5 1.6-5.3-0.3-3.1 2-5.4-0.9-3.7 6.2-4.4 4.2 1.1-1.4-3.9 1.7-1.2-1-2.4 3.1-0.5 2.7 3.8 2.7 1.5 1.3 4.9 0.9 5.3-4.2 5.4 0.7 7.6 5.6-1.1 2.4 5.9 3.7 1.3-0.8 5.3 4.5 2.4 2.6 1.2 3.8-1.9 0.5 2.7z',
		ML: 'M1010.2 378.8l0.1 14.8-3.1 4.3-0.4 4-5 1-7.7 0.5-2 2.3-3.6 0.3-3.6 0-1.4-1.2-3.1 0.9-5.3 2.7-1.1 2-4.3 2.8-0.8 1.7-2.4 1.3-2.7-0.9-1.5 1.6-0.9 4.4-4.5 5.3 0.2 2.2-1.6 2.7 0.4 3.7-2.4 1-1.3 0.8-0.9-2.7-1.6 0.7-1-0.1-1 1.8-4.4 0-1.5-1-0.8 0.6-1.7-1.9 0.3-1.9-0.7-0.7-1.2 0.6 0.3-2.1 1.1-1.6-2.3-2.7-0.6-1.8-1.3-1.4-1.1-0.2-1.3 0.9-1.9 0.9-1.5 1.4-2.4-0.5-1.6-1.7-0.9-0.2-1.5 0.9-0.9 0-0.3-2.4 0.3-2-0.5-2.4-2-1.8-1.1-3.7-0.2-4 1.9-1.2 1-3.8 1.8-0.1 3.9 1.8 3.2-1.3 2.1 0.4 0.9-1.4 22.5-0.1 1.3-4.5-1-0.8-2.5-27.7-2.4-27.7 8.5-0.1 18.6 14 18.7 14 1.3 3 3.5 1.8 2.6 1.1 0.1 4.1 6.2-0.7z',
		MN: 'M1496.2 181.5l4-1.2 5.7-0.8 5.4 0.9 6.6 2.9 4.9 3.2 4.6 0 6.8 1 3.6-1.6 5.9-1 4.4-4.4 3.4 0.7 3.9 2.1 5.6-0.6 0.6 4.7 0.3 6.3 2.8 2.5 2.3-0.8 5.5 1 2.5-2.3 5.2 2 7.2 4.4 0.8 2.2-4.4-0.7-6.8 0.8-2.5 1.8-1.3 4.2-6.4 2.4-3.2 3.4-5.9-1.3-3.2-0.6-0.5 4.1 2.9 2.4 1.9 2.1-2.4 2.2-2 3.4-4.9 2.2-7.6 0.2-7.2 2.2-4.4 3.4-3.3-1.9-6.2 0-9.4-3.9-5.6-0.9-6.4 0.9-11.3-1.5-5.6 0.2-4.7-3.8-5-5.8-3.4-0.7-8-4-7.2-0.8-6.5-1.1-3-2.8-1.4-7.3-5.8-5.1-8.2-2.3-5.7-3.3-3.3-4.4 4.7-1.1 6.7-5.3 5.9-2.9 5.3 1.9 5.2 0.1 4.8 2.9 5 0.2 8 1.6 2.4-4.4-4-3.6 1.3-6.4 7 2.5 4.8 0.8 6.7 1.6 3.6 4.6 8.5 2.6z',
		MH: 'M1953.8 456l1 0.4-0.2 0-0.8-0.4z',
		MK: 'M1105.5 236.6l-1 0.2-0.8 1.1-2.8-0.1-1.8 1.4-3.4 0.5-2.3-1.5-1-2.7 0.5-2.2 0.7 0.1 0.1-1.3 2.9-1 1.2-0.3 1.7-0.3 2.4-0.2 2.8 2.1 0.8 4.2z',
		MU: 'M1307.7 630.8l0.4 0.9-0.2 0.6-0.4 0.4 0.1 0.3-0.3 0.3-0.5 0.2-0.5 0-0.6-0.1-0.1 0.1-0.3-0.3 0.2-0.2 0.1-0.4 0.1-0.7 0.2-0.4 0.5-0.4 0.1-0.2 0.2-0.5 0.4-0.3 0.4 0.1 0.2 0.6z m31.8-2.1l-0.3-0.3 0.4-0.2 0.3-0.1 0.2 0.1-0.1 0.2-0.5 0.3z',
		MT: 'M1063.9 271.7l-0.2 0.3-0.5-0.2-0.5-0.3 0-0.5-0.1-0.1 0.6 0 0.4 0.3 0.2 0.2 0.1 0.3z m-1.6-1.1l-0.5-0.1 0-0.2 0.4-0.1 0.4 0.3-0.3 0.1z',
		MW: 'M1182.3 588.9l0.4 0 1.9 2.1 2.2 4.6 0.1 8.3-2.5 1.3-1.9 4.5-3.5-4-0.2-4.5 1.3-3-0.2-2.6-2.2-1.6-1.5 0.6-3.2-3.1-2.9-1.6 2-6 1.8-2.2-0.9-5.4 1.3-5.2 1-1.7-1.3-5.4-2.6-2.9 5.5 1.2 1 1.7-0.1 0.8 1.8 4.1 0.2 7.7-1.8 3.6 1.6 4.7-0.2 2.8 1.2 1.9-0.1 2.4 0.9 1.4 1-1.6 1.9 2.5 0.2-0.8-1-3.4-1.1-0.3-0.1-0.9z',
		MV: 'M1402.9 474.8l0 0.2-0.2-0.1 0.2-0.2 0 0.1z',
		MQ: 'M644 406.9l0 0.2 0.4-0.1-0.2 0.5 0.2 0.2 0 0.2 0.2 0.2 0.2 0.9-0.3 0.3-0.1-0.4-0.1 0.1-0.6-0.1-0.4 0-0.2-0.3 0.6-0.5-0.4 0-0.4-0.4-0.1-0.5-0.2-0.5 0.3-0.4 0.4 0.1 0.5 0.3 0.2 0.2z',
		MP: 'M1802.5 411.1l-0.1 0.1-0.2-0.1-0.1-0.2 0.5-0.2 0.2 0.2-0.3 0.2z m1.5-5.1l-0.2 0-0.3-0.6 0.1-0.3 0.3 0 0 0.3 0.2 0.2-0.1 0.4z m0.5-1.6l-0.2 0.2 0.1 0.3-0.4 0 0-0.7 0.1-0.2 0.4-0.2-0.1 0.5 0.1 0.1z m-1.9-7.5l-0.3 0-0.1-0.2 0.4 0 0 0.2z m-1.9-11l-0.1-0.2 0-0.5 0.3-0.1 0.2 0.3-0.4 0.5z m-1.2-4.3l-0.4-0.1 0-0.3 0.2-0.1 0.2 0.2 0 0.3z',
		MS: 'M638.2 393.9l0.2 0.4 0 0.3-0.2 0.2-0.2-0.1-0.1-0.3 0.3-0.5z',
		MR: 'M959.2 341.5l-8.5 0.1 2.4 27.7 2.5 27.7 1 0.8-1.3 4.5-22.5 0.1-0.9 1.4-2.1-0.4-3.2 1.3-3.9-1.8-1.8 0.1-1 3.8-1.9 1.2-3.6-4.4-3.4-4.8-3.6-1.7-2.7-1.8-3.1 0-2.8 1.4-2.7-0.5-2 2-0.4-3.4 1.6-3.2 0.8-6-0.4-6.4-0.6-3.2 0.6-3.2-1.4-3-2.8-2.8 1.3-2.1 21.7 0-0.9-9.3 1.5-3.3 5.2-0.5 0.2-16.5 18 0.4 0.2-9.8 20.5 15.6z',
		UG: 'M1179 474.5l2.7 4.5 0.7 3.2 2.6 7.4-2.1 4.7-2.8 4.2-1.6 2.6 0 0.3-0.2-0.4-3-1.3-2.4 1.6-3.6 0.9-2.6 3.7 0.3 2.5-6.2-0.1-2 0.8-3.4 2-1.4-0.7 0.1-4.8 1.3-2.5 0.3-5.1 1.2-3 2.2-3.3 2.1-1.8 1.9-2.2-2.3-0.9 0.3-7.5 2.3-1.8 3.6 1.5 4.5-1.5 4 0 3.5-3z',
		MY: 'M1564.3 461.9l1.4 0.6 3.5 3.9 2.5 4.3 0.6 4.3-0.5 2.9 0.6 2.2 0.5 3.8 2.1 1.8 2.3 5.7 0 2.1-4 0.5-5.5-4.8-6.8-5.1-0.8-3.3-3.4-4.3-1-5.3-2.2-3.5 0.4-4.7-1.4-2.7 0.9-1.1 4.8 2.8 0.6 3.3 3.7-0.8 1.7-2.6z m89.8 13.4l-5-1.1-6.5 0-1.7 7.3-2.1 2.2-2.6 8.9-4.6 1.4-5.4-1.8-2.7 0.6-3.3 3.2-3.6-0.4-3.7 1.3-3.9-3.7-1-4.3 4.2 2.2 4.3-1.2 1-5.4 2.4-1.2 6.8-1.4 3.8-5.1 2.6-4 2.8 3.3 1.1-2.2 2.7 0.2 0.1-4.1 0.1-3.2 4.1-4.4 2.6-5 2.3-0.1 3.1 3.3 0.4 2.8 3.8 1.8 4.8 1.9-0.2 2.5-3.8 0.3 1.1 3.2-4 2.2z',
		MX: 'M449.3 335.9l2.2-0.2-3.2 5.7-1.8 4.6-1.8 8.6-1.1 3.1 0.4 3.5 1.3 3.2 0.4 4.9 3 4.8 0.8 3.7 1.7 3.1 5.7 1.7 1.9 2.7 5.2-1.8 4.3-0.6 4.4-1.2 3.6-1.1 3.9-2.6 1.8-3.7 1.2-5.4 1.2-1.9 4-1.7 6.1-1.5 4.9 0.3 3.4-0.6 1.2 1.4-0.6 3.1-3.5 3.8-1.8 3.9 0.9 1.1-1.2 2.8-2.1 5-1.2-1.7-1.1 0.1-1.1 0.1-2.5 3.9-0.9-0.8-0.7 0.3-0.1 1-5.2-0.1-5.2 0-0.5 3.6-2.5 0.1 1.8 2.1 1.9 1.5 0.5 1.4 0.8 0.4-0.4 2.2-7.2 0-3.3 5.2 0.7 1.2-0.8 1.5-0.4 1.9-5.6-6.9-2.6-2.1-4.4-1.7-3.2 0.5-4.8 2.4-2.9 0.6-3.7-1.7-4.1-1.2-4.8-2.9-4.1-0.9-5.9-3-4.3-3.1-1.1-1.7-3.1-0.4-5.4-2-1.9-2.9-5.4-3.7-2.2-4-0.8-3.2 1.9-0.6-0.3-1.8 1.6-1.7 0.4-2.2-1.5-2.9 0-2.5-1.3-3.3-3.8-6.4-4.6-5-1.9-4-4.1-2.6-0.7-1.6 1.7-3.9-2.4-1.5-2.5-3.2-0.2-4.4-2.8-0.6-2.3-3.3-1.7-3.2 0.3-2-1.5-4.8-0.3-4.9 0.8-2.5-3.1-2.6-1.9 0.3-2.4-1.7-1.8 2.6-0.1 3-1 4.9 1 2.6 2.8 4.4 0.4 1.6 0.7 0.4 0.1 2.2 1-0.1 0 4.2 1.3 1.6 0.5 2.3 2.7 3.2 0.4 6 1 2.8 0.9 3-0.3 3.4 2.6 0.2 1.6 2.9 1.5 2.9-0.3 1.2-2.8 2.3-1 0-0.7-3.9-2.9-3.7-3.4-3.1-2.5-1.6 1.2-4.7-0.1-3.5-2.1-2-3.1-2.8-0.9 0.8-1-1.7-3-1.5-2.2-3.8 0.5-0.4 2.1 0.3 2.7-2.4 1-2.9-2.9-4.6-2.6-1.7-0.8-4-0.6-4.3-0.8-5.1-0.2-5.8 6.3-0.5 7.1-0.7-0.9 1.3 7 3.1 10.9 4.5 10.8 0 4.3 0 0.8-2.7 9.4 0 1.3 2.3 2.1 2.1 2.4 2.8 0.8 3.3 0.4 3.6 2.3 1.9 4 1.9 4.8-5 4.5-0.2 3.2 2.6 1.6 4.4 0.9 3.8 2.4 3.6 0.2 4.5 0.9 3 3.9 2 3.6 1.4z',
		IL: 'M1179.1 288.2l0.4 2.6-0.6 1 0.1 0-0.7 2-2.1-0.8-0.7 4.2 1.5 0.7-1.3 0.9-0.1 1.7 2.5-0.8 0.4 2.5-1.8 10.2-0.7-1.6-3.9-9.4 1.4-2.1-0.4-0.4 1.1-3 0.6-4.8 0.6-1.7 0.1 0 1.8 0 0.4-1.1 1.4-0.1z',
		FR: 'M1035.7 231.4l-1.5 4.9-2.4-1.3-1.3-4.2 0.9-2.4 3.2-2.4 1.1 5.4z m-21.3-46.4l1.1 0.5 1.4-0.1 2.4 1.6 7.2 1.2-2.4 4.2-0.4 4.5-1.3 1.1-2.3-0.6 0.2 1.6-3.6 3.5 0 2.9 2.4-1 1.8 2.7-0.1 1.8 1.5 2.4-1.7 1.9 1.5 4.9 2.8 0.8-0.5 2.7-4.5 3.6-10.2-1.7-7.4 2.1-0.6 3.8-5.9 0.8-5.8-2.9-1.9 1.4-9.5-2.9-2-2.4 2.7-3.8 1-12.6-5.1-6.6-3.7-3.2-7.6-2.4-0.4-4.6 6.5-1.3 8.3 1.6-1.5-7.1 4.7 2.7 11.4-4.8 1.5-5.1 4.2-1.3 0.8 2.2 2.2 0.1 2.4 2.5 3.5 2.9 2.5-0.5 4.4 2.9z',
		FI: 'M1104.1 70.1l0.4 3.8 7.3 3.7-2.9 4.2 6.5 6.3-1.7 4.8 4.9 4.2-0.9 3.8 7.4 3.9-0.9 2.9-3.4 3.4-8 7.4-8 0.5-7.6 2.1-7.1 1.3-3.2-3.2-4.7-1.9 0.1-5.8-3-5.2 1.6-3.4 3.3-3.5 8.8-6.2 2.6-1.2-0.9-2.4-6.5-2.6-1.8-2.2-1.8-8.5-7.2-3.7-6-2.7 2.2-1.4 5.1 2.8 5.3-0.2 4.7 1.3 3.4-2.4 1.1-4 5.9-1.8 5.8 2.1-0.8 3.8z',
		FJ: 'M1989.1 624.9l-0.3 0.1 0.1-0.4 0.2 0.3z m-7.5-1.6l0.2 0.2 0.3 0.1 0 0.3-0.5 0.2-0.5-0.3-0.5 0.3-0.3 0-0.2 0.3 0.1 0.3-0.4-0.1-0.1 0.2-0.4-0.1-0.1 0.1-0.4-0.2 0.3-0.1 0.2-0.1 0.2-0.2 0.4 0.1 0.3-0.3 0.2-0.3 0.5-0.1 0.5-0.3 0.2 0z m0.9-0.1l-0.2 0.1-0.2-0.1 0.2-0.2 0.2 0.2z m5.9-6.1l0.1 0.5-0.2 0.6-0.1-0.2-0.1-0.4-0.2 0 0.1-0.5 0.2-0.1 0.2 0.1z m-2.6-1.4l-0.1 0-0.1-0.4 0.2-0.2 0.4-0.1 0 0.4-0.2 0.2-0.2 0.1z m-2.2-2.5l-0.1 0.4 0.3 0.2 0.1 0.3 0.3 0.4 0.3 0.1 0.1 0.3 0.2 0 0.1 0.4-0.3 0.5 0.1 0.2 0.1 0.5-0.3 0.2 0 0.5 0.2 0 0.1 0.5-0.3 0.3-0.6 0.2-0.1-0.2-0.3 0.1-0.1 0.2-0.3-0.3-0.8 0.3-0.8 0.7-0.3-0.1-0.4 0.2-0.3-0.1-0.6 0.1-0.3-0.2-0.9-0.3-0.3-0.1-0.6-0.1-0.2-0.1-0.5-0.2-0.2-1 0.3-0.7 0.3 0 0.3-0.1 0.1-0.5 0.3-0.1 0.1-0.4-0.2-0.2 0.6-0.4 0.4-0.5 0.1 0.1 0.6-0.5 0.2 0 0.9-0.4 0.6 0.2 0.3-0.1 0.5-0.2 0.6-0.1 0.3-0.3 0.4 0.3z m6.3 0.2l-0.2 0.1 0.2-0.9 0.4 0-0.1 0.4-0.3 0.4z m-11.4-2l-0.2 0.3-0.5 0.3 0-0.3 0.4-0.4 0.3 0.1z m14.9-0.4l-0.2-0.2 0.1-0.2 0.5-0.5 0.3-0.5-0.3 1.1-0.4 0.3z m1-5l-0.4 0.4-0.8 1.1-0.3 0.1-0.7 0.4-0.2 0.6-0.4 0.2-0.2 0.3-0.1 0.2 0.3 0.1 0.6-0.3 0.1-0.1 0.3-0.3 0.2-0.3 0.6-0.3 0.3-0.3 0.6-0.3 0 0.3-0.5 0.7-0.2 0.1 0.1 0.6-0.3 0.3-0.3-0.3-0.4 0-0.5 0.1-0.4 0.3-0.7 0.1-1 0 0.5-0.5-0.4-0.2-0.6 0.2-0.4 0.2 0 0.2-0.3 0.1-0.2 0.1-0.1 0.4-0.2 0.3-0.3-0.1 0-0.2-0.4-0.1-0.4 0.2-0.2 0.5-0.3 0.2-0.3 0 0-0.3 0-0.4-0.2-0.4 0.1-0.2-0.1-0.1-0.6 0.2 0-0.4 0.4-0.3 0.1 0-0.1-0.5 0.3-0.1 0.5 0.3 0.6-0.4 0.2 0 0.3-0.3 0.2 0 0.3-0.3 0-0.2 0.8-0.1 0.9-0.3 0.3-0.1 0.4 0.1 0.5-0.2 0.2-0.4 0.2 0 0.2-0.4 0.4 0.1 0.1-0.2 0.2 0.1 1-0.5 0.1 0.3 0.2-0.1 0.2 0.1 0.3-0.3 0.5-0.2 0.1 0.1-0.5 0.4-0.2 0z',
		FK: 'M697.4 836.2l0.4-0.1 0 0.4-0.8-0.3 0.3-0.3 0.2-0.1-0.1 0.4z m-0.7-1.4l0.2 0.2 0.4 0.1 0.1 0.4-0.3 0.1-0.1-0.4-0.2-0.2-0.1-0.2z m6.2-0.8l0.2 0.1-0.1 0.4-0.3-0.1-0.2-0.3 0.3-0.2 0.1 0.1z m-12.1-0.9l0 0.2 0.1 0.3-0.4 0.1-0.3-0.1-0.2-0.2-0.3-0.1-0.1-0.4 0.2 0 0.1-0.2 0.3-0.1 0.2 0.1-0.3 0.3 0.3 0.1 0.3-0.3 0.1 0.3z m2.9-1.3l-0.4-0.2-0.5-0.3-0.8-0.3 0.1-0.4-0.7-0.1-0.3-0.1-0.3-0.4 0.2-0.1 0.8 0.3 0.8 0.4 0.5 0.1 0.4 0.1 0.3-0.3 0.1-0.3 0.2 0.1 0.4-0.2 0.1 0.2 0.5 0 0 0.3 0.3 0 0.9-0.2 0.1 0.2 0.3 0 0.4-0.1-0.3-0.2-0.1-0.3 0.4 0 0.6 0.2 0.1 0.4-0.4 0.5 0.1 0.3-0.2 0.2-0.4 0-0.3 0.8-0.3 0.3-0.3 0.6-0.1 0.3-0.5 0.3-0.1-0.2-0.4 0 0 0.3-0.8-0.1-0.1 0.1 0.3 0.4-0.1 0.1-0.2 0.4-0.4 0-0.3 0.4-0.3 0.1-0.2 0-0.2-0.3-0.4-0.3 0-0.2-0.5 0 0.6 0.4-0.4 0-0.5-0.3-0.2-0.1-0.4-0.2-0.3-0.2 0-0.2 0.7 0.2 0.6-0.2-0.5-0.2-0.1-0.1 0.9 0 0.4 0.1 0.3 0.2 0-0.2 0.4-0.1 0.1-0.3-0.4-0.2-0.2-0.5 0.1-0.2 0.6 0 0.2 0.1 0.4-0.1-0.1-0.3-0.8 0 0 0.1-0.4 0.2-0.6 0-0.5-0.3 0-0.3 0.7 0.2 0.6-0.2 0.3 0 0.5-0.1 0.4 0.2 0-0.1-0.4-0.1z m1.6-1.9l0.3 0 0.3 0.3-0.3 0.1-0.3 0 0-0.4z m-1 0l-0.3 0-0.1-0.3 0.4 0.1 0 0.2z m-1.4-0.2l0.6-0.1 0.2 0.3-0.3 0.4-0.2-0.1-0.3 0.1-0.3-0.2 0.3-0.2 0.3 0.2 0.1-0.2-0.5-0.1 0.1-0.1z m7.2 0.1l0.6 0 0.1-0.1 0.5-0.1 0.4 0.2 0.4 0.3 0.1 0.3 0 0.1-0.5 0.1-0.2-0.3-0.2-0.1-0.1 0.3 0.2 0.1 0.1 0.3 0.3-0.2 0.2 0.1 0.1 0.4 0.3 0.1 0.1-0.1 0.5 0.3 0.1-0.4-0.8-0.2 0.1-0.5 0.3-0.2 1.5-0.1 0.7 0.6 0.2 0.1 0 0.4-0.6-0.1-0.5-0.2-0.6 0.2 0.3 0.2 0.4 0.1 0.9 0.1 0.3 0.1 0.1 0.2-0.2 0.5-0.5 0-0.1 0.1-0.7 0.1-0.5 0.2 0.3 0.2-0.9 0.4-0.4-0.1-0.5 0.1-0.7 0-0.6-0.2-0.6-0.4 0 0.3 0.3 0.2 0.6 0.2 0.3 0.3 0.2-0.1 0.4 0.1 0.4 0.3-0.2 0.1 0.2 0.5-0.2 0-0.3-0.3-0.4-0.1-0.5 0.4-0.2-0.3-0.3-0.2-0.3 0-0.5-0.2-0.2 0.1 0.2 0.4 0.3 0 0.2 0.2-0.2 0.1 0.7 0.6-0.2 0.1-0.4-0.2-0.3 0-0.3-0.3-0.3-0.1-0.3-0.1-0.1 0.6 0.5 0.1 0 0.3-0.1 0.2-0.4-0.1-0.1-0.2-0.5-0.2-0.1-0.2-0.2 0-0.4-0.5 0.3-0.4 0-0.2-0.4-0.5 0-0.2 0.5-0.2-0.1-0.2 0.5-0.1-0.1-0.3 0.6-0.4 0.6-0.2 0.4 0.4 0 0.4 0.3-0.1-0.5-0.6 0.1-0.3-0.6-0.2-0.4-0.3 0.1-0.2 0.4 0.2 0.1-0.5-0.7-0.2 0.1-0.3 0.2 0.1 0.3-0.2 0.3 0 0.2-0.3-0.3-0.3 0.4 0 0.5 0.2z m-5-0.4l0.7 0 0.2 0.2 0.2-0.2 0.2 0.1 0.2 0.3-0.2 0.1-0.4-0.1-0.4-0.2-0.8-0.1 0.1-0.2 0.2 0.1z m-6.8-1.1l-0.5-0.1 0.1-0.2 0.4 0.3z',
		FM: 'M1909.4 467.7l-0.2 0.3-0.5-0.1 0-0.2 0.5-0.4 0.2 0.4z m-28.2-10.6l0.4 0 0.3 0.2 0.1 0.4-0.2 0.1 0.1 0.2-0.1 0.2-0.6 0-0.2-0.2 0-0.2-0.2-0.3 0-0.3 0.4-0.1z m-114.7-16.6l0.1 0.3-0.3 0-0.3 0.5-0.1-0.1 0.3-0.8 0.4-0.1-0.1 0.2z',
		FO: 'M955.6 112l0.4 0.2 0.3 0 0.1 0.2 0 0.4 0.2 0.3-0.1 0.2-0.6-0.4-0.2-0.4-0.2-0.2-0.2-0.3 0.3 0z m0.3-1.6l0.8 0.2 0.2 0.2-0.1 0.4-0.1 0.1-0.4-0.5-0.5-0.1-0.2-0.4 0.3 0.1z m-1.3-1.4l0.1 0.2 0.3 0 0 0.3-0.4 0-0.2 0.2-0.6-0.2-0.2-0.1-0.2-0.3 0.5-0.1 0.1-0.1 0.6 0.1-0.3-0.2 0.2-0.8 0.5 0.1 0.3 0.5 0 0.1 0.6 0.2 0.3 0.5 0.3 0.2-0.1 0.6-0.5-0.4-0.2-0.2-0.2-0.1-0.1-0.2-0.2-0.2-0.5 0-0.1-0.1z m3.7-0.6l-0.2-0.2 0.3-0.2-0.1 0.4z m-2.4 0.5l-0.4-0.2-0.3-0.3-0.1-0.3 0.1-0.1 0.4-0.1 0.3 0 0.6 0.4-0.1 0.2 0.1 0.2 0.6 0.2 0 0.2-0.4 0.3-0.8-0.5z m2.2-0.6l-0.3 0.4-0.3-0.2-0.3 0 0.2-0.3-0.1-0.4 0.1-0.1 0.2 0.4 0.5 0.2z m-0.9 0l-0.2 0-0.2-0.4 0.1-0.3 0.2 0.4 0.1 0.3z',
		NI: 'M519.6 405.5l-0.5 0.7-0.5 1.4 0.4 2.3-1.5 2.2-0.8 2.6-0.5 2.8 0.2 1.7-0.1 2.9-0.9 0.6-0.7 2.8 0.2 1.7-1.2 1.6 0.1 1.7 0.8 1.1-1.4 1.4-1.7-0.5-0.8-1.3-1.8-0.5-1.3 0.8-3.6-1.7-0.9 0.8-1.8-2-2.5-2.6-1.1-2.1-2.2-2.1-2.5-2.9 0.7-1 0.8 1 0.5-0.4 1.8-0.3 0.8-1.5 0.8 0 0.2-3.2 1.3-0.1 1.2 0 1.4-1.7 1.5 1.3 0.6-0.8 1.2-0.8 2.1-1.7 0.2-1.4 0.5 0.1 0.9-1.5 0.6-0.2 0.9 1 1.1 0.2 1.3-0.8 1.4 0 2-0.8 0.9-0.9 1.9 0.1z',
		NL: 'M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-0.5 2.5-1.7 4-9 6.5-2.6 4 0.2 0.9 2.1-0.9 5.6-1.2 2.3-2.9 0 1.1 6.5z',
		NO: 'M1113.7 67.5l-6.4 2.1-3.2 0.5 0.8-3.8-5.8-2.1-5.9 1.8-1.1 4-3.4 2.4-4.7-1.3-5.3 0.2-5.1-2.8-2.2 1.4-2.6 0.2 0.1 3.6-8-0.9-0.6 3.1-4 0-2.3 3.9-3.4 6.1-5.7 7.9 1.8 2-1.3 2.2-4.3-0.1-2.4 5.4 1 7.7 3.1 2.9-0.8 6.9-3.4 4-1.8 3.4-3.3-3.6-8.6 6.8-6.1 1.4-6.5-3-1.8-6.3-2-13.5 4-3.7 11.3-4.9 8.1-5.9 7.2-7.8 8.9-10.7 6.4-4.1 10.3-6.8 8.5-2.4 6.7 0.3 5.2-4.4 7.4 0.2 7-1 13.7 3.9-4.9 1.4 5.4 3.4z m-37.1-42.3l-7.6 1.9-6.8-1.1 2.2-1.2-2.6-1.5 7.3-0.9 1.9 1.7 5.6 1.1z m-25.6-8.5l12.6 3.4-8.6 1.8-1.2 3.4-3 0.9-0.9 4-4.4 0.2-8.5-2.9 3-1.7-5.7-1.4-7.7-3.9-3.2-3.5 9.3-1.6 2.3 1.5 5 0 1-1.5 5.2-0.2 4.8 1.5z m24.4-3l7.4 1.5-4.4 2.4-10.1 0.5-10.7-0.8-1-1.2-5.1 0-4.3-2 10.5-1.2 5.4 1 3.1-1.3 9.2 1.1z',
		NA: 'M1116.2 614.3l4.6-1.4 3.6 0.3 2.2 1.5 0 0.5-3.2 1.5-1.7 0-3.7 2.5-2-2.7-8.7 2.3-4.2 0.2-0.8 22.9-5.5 0.2-0.6 18.7-1.1 23.7-5 3.3-2.9 0.5-3.4-1.2-2.5-0.5-0.8-2.7-2-1.8-2.8 3.2-3.9-4.9-2-4.6-1-6.3-1.2-4.6-1.6-9.9 0.1-7.7-0.6-3.5-2.1-2.7-2.8-5.3-2.8-7.7-1.1-4-4.4-6.3-0.3-4.9 2.7-1.2 3.4-1.1 3.6 0.2 3.3 2.9 0.8-0.5 22.7-0.2 3.8 3 13.5 0.9 10.4-2.6z',
		VU: 'M1931.8 631.8l-0.5-0.2 0.2-0.4 0.5-0.1 0.2 0.4-0.1 0.2-0.3 0.1z m-1.2-3.8l-0.2 0-0.3-0.1-0.4-0.5-0.1-0.4 0-0.4 0.2-0.2 0.1-0.4 0.3-0.1 0.4 0-0.2 0.3 0 0.5 0.7 0.5-0.3 0.3-0.2 0.5z m0-5.9l0.3 0 0.1 0.2-0.5 0.1 0.1 0.3 0.4 0.2 0.1 0.3-0.1 0.4-0.4 0.1-0.4-0.3-0.4 0-0.2-0.2-0.3-0.2 0.1-0.4 0-0.3 0.2-0.5 0.3-0.4 0.5 0 0.2 0.1-0.1 0.4 0.1 0.2z m-3-7.6l0.6-0.1 0.1 0.1 0.2 0.6 0.2 0.3 0.1 0.1-0.4 0.6-0.8 0.2-0.3-0.3-0.1-0.5-0.3-0.1-0.4 0.3-0.1-0.1 0.2-0.4 0.4-0.3 0.4-0.5 0.2 0.1z m2.3-3.9l-0.1-0.3 0.3 0-0.2 0.3z m-1.6-2.4l0.1 0.5 0 0.2 0.4 0.1 0.2 0.5 0.5 0 0 0.4-0.1 0.1-0.3-0.3-0.3-0.1-0.6 0.2-0.3-0.1-0.1-0.2-0.1-0.4 0.2-0.5 0.2-0.3 0.2-0.1z m0.9-0.2l-0.1 0-0.1-0.3 0.2 0 0 0.3z m0.2-1.4l-0.2 0.2-0.6 0-0.3 0.1-0.2-0.2-0.4-0.1-0.5-0.4 0.1-0.2 0.5-0.2 0.4-0.1 0.4-0.3 0.1-0.3 0.2 0 0.1 0.3 0 0.6 0.5 0.4-0.1 0.2z m-4.7-1.3l0.2 0.3 0.6 0.4 0.7 0.7 0.1 0.1 0 0.4 0.2 0.3-0.3 0.2-0.4 0.4 0-0.2-0.3-0.1-0.4 0-0.2 0.1 0 0.2-0.4 0.2-0.3-0.1 0-0.7-0.1-0.6 0.1-0.6 0.1-0.5-0.2-0.5-0.6 0.3-0.2-0.2-0.1-0.3 0-0.3 0.3-0.3 0-0.4 0.1-0.3 0.3-0.1 0.6 0.3-0.1 0.2 0.2 0.5-0.1 0.2 0.2 0.4z m-0.6-2.4l-0.3 0-0.5-0.3 0-0.1 0.2-0.3 0.2-0.1 0.5 0.1-0.1 0.4 0 0.3z m-0.5-1l0.4-0.3 0.1 0.1 0.1 0.3-0.5 0-0.1-0.1z m5.7 2.6l-0.2-0.1 0.1-1.2-0.1-0.3 0.1-0.5 0.3-0.8 0.1-0.5 0.2 0.6-0.1 0.3 0 0.6 0 1-0.1 0.6-0.3 0.3z m-1.3-3.3l-0.7 0-0.3-0.1 0-0.2 0.9-0.7 0.5-0.2 0.5-0.1 0 0.2-0.3 0.4-0.2 0.3-0.4 0.4z m1.9-0.7l0 0.2-0.3 0 0.1-0.3 0.2-1.3 0-0.1 0.1-1.2 0.2 0.1-0.1 1.3 0.1 0.3-0.1 0.5-0.2 0.5z m-6.3 1.4l-0.9-0.1-0.6 0.3-0.1 0.2-0.2 0-0.1-0.6-0.2-0.1-0.4-1 0.4-0.8 0-0.4-0.1-0.2 0-1.4-0.1-0.3 0-0.5 0.2-0.3 0-0.3 0.2-0.3 0-0.2 0.3-0.1 0.1 0.5 0.2 0.4 0.2 0.3 0.1 1.3-0.1 0.8 0 0.1 0.6-0.1 0.3-0.3 0.2-0.8 0-0.2 0.3-0.2 0.3 0.1-0.1 0.4 0 0.9 0.3 0.1 0 0.5-0.2 0.1 0.3 0.4-0.2 0.2 0 0.5 0.2 0.5-0.1 0.2-0.3 0-0.5 0.4z m4.2-9.3l0.4 0.3-0.1 0.4-0.3 0.3-0.2 0.2-0.6 0 0-0.4 0.1-0.4 0.2-0.3 0.5-0.1z m0.6-1.9l-0.3 0.2-0.2 0.1 0 0.2-0.2 0.1 0-0.3-0.2-0.2-0.1-0.3 0.1-0.4 0.2-0.1 0.4-0.2 0.1 0.2 0.1 0.4 0 0.1 0.1 0.2z m-5-4.2l-0.1-0.1 0.1-0.5 0.2 0.2-0.2 0.4z',
		NC: 'M1915.2 646.9l-0.2 0.1-0.2 0.4-0.4-0.2 0.2-0.5 0.1-0.2 0.3 0.1 0.2 0.3z m4.4-7.8l-0.1 0.1 0.2 0.4 0.3 0 0.4-0.2-0.1 0.6-0.2 0.2-0.1 0.4-0.5 0.3-0.4-0.2 0-0.1-0.3-0.3 0.1-0.2-0.2-0.2 0.1-0.4-0.1-0.4 0.1 0 0.4 0.1 0.4-0.1z m-2.7-4.3l-0.2 0.5 0 0.4-0.2 0.3 0.3 0.2 0.2 0.1 0.1 0.2-0.1 0.2 0.3 0.4-0.2 0-0.2 0.5-0.2 0.2-0.3-0.1-0.2-0.3-0.1-0.2-0.6-0.1-0.3-0.5 0-0.2-0.1-0.3 0.3 0 0.3-0.2 0.4-0.3 0.1-0.3-0.4-0.2-0.4 0.1 0.2-0.4 0.3-0.1 0.2 0.1 0.4-0.3 0.4 0.3z m-3.4-1.6l-0.3 0.6-0.1 0.3 0.3 0-0.5 0.5-0.2 0.2-0.1-0.2 0.3-0.4 0.2-0.5 0.4-0.5z m0 0l-0.2-0.4 0.4 0 0.1 0.4-0.3 0z m-13.9-2.4l0.2 0.1 0.5 0.9 0.3 0.3 0.3-0.1 0.2-0.3 0.9 0.5 0.3 0.5 0.7 0.6 0.3 0.4 0.1 0.3 0.4 0.4 0.1 0.2 0.2 0 0.3 0.3 0.9 0.2 0.1 0.3 0 0.4 0.3 0.4 0.4 0.1-0.3 0.5 0.1 0.2 0.4 0.5 0.1 0 0.4 0.5-0.1 0.4 0.7 0.2 0.4 0.5 0.3 0 0.3 0.2 0.5 0.4-0.1 0.3 0.3 0 0.4 0.5 0.6 0.4 0 0.2 0.3 0.1 0.3 0.3 0 0.2 0.3 0.6 0.4 0.4 0.1-0.1 0.4 0.6 0.5 0.1 0.3 0.3 0 0.4 0.1 0.4 0.1 0.1-0.2 0.6-0.7 0.4-0.1-0.3-0.3 0.1-0.3 0.3-0.6-0.8-0.4 0-0.1-0.2-0.2 0-0.2 0.3-0.9-0.9-0.2 0-0.4-0.5 0.1-0.8-0.3 0-0.4 0-0.3-0.2-0.1-0.2-0.2-0.1-0.3 0 0-0.3-0.2-0.5-0.4 0.1-0.8-0.5-0.1-0.2 0-0.3-0.3 0.2-0.6-0.3-0.1-0.4-0.4-0.3-0.2-0.5-0.5-0.1 0.2-0.2-0.3-0.3-0.3-0.1-0.3-0.7 0-0.4-0.2-0.3-0.3 0-0.2-0.6 0.1-0.2-0.7-0.4-0.3-0.2-0.4-0.6 0.3-0.2-0.2-0.2-0.2-0.3 0-0.5-0.5-0.3 0-0.6-0.2-0.3 0.3 0 0.1-0.3-0.1-0.2-0.6 0-0.2-0.3 0.5-0.7-0.3-0.3 0.2-0.1z m1.1 0.3l-0.3-0.1 0.1-0.4 0.2 0.5z m-2.3-2.4l-0.2 0.2-0.1-0.4 0.2-0.2 0.1 0.4z',
		NE: 'M1068.6 355l1.6 10 2.2 1.7 0.1 2 2.4 2.2-1.2 2.8-1.8 13-0.2 8.4-7 6-2.3 8.5 2.4 2.4 0 4.1 3.7 0.1-0.6 3.1-1.5 0.3-0.2 2.1-1 0.1-3.9-7-1.4-0.3-4.3 3.6-4.4-1.9-3-0.3-1.6 0.9-3.3-0.2-3.3 2.7-2.9 0.2-6.8-3.3-2.7 1.5-2.9-0.1-2.1-2.4-5.6-2.4-6.1 0.8-1.4 1.3-0.8 3.7-1.6 2.6-0.4 5.8-4.3-3.7-2 0-1.9 1.9 0.1-4.4-6.5-1.5-0.2-3.1-3.1-4.2-0.8-2.9 0.5-3.1 3.6-0.3 2-2.3 7.7-0.5 5-1 0.4-4 3.1-4.3-0.1-14.8 7.8-2.8 16-12.6 18.8-12.3 8.8 2.8 3.2 3.5 3.8-2.4z',
		NG: 'M1066.2 421.7l2.3 2.5-0.6 1.2-0.3 2.1-4.7 5-1.4 4.1-0.8 3.3-1.2 1.5-1.1 4.5-3 2.6-0.8 3.2-1.3 2.6-0.5 2.7-3.9 2.2-3.2-2.7-2.1 0.1-3.4 3.8-1.6 0-2.7 6.2-1.4 4.6-5.9 2.3-2.1-0.3-2.2 1.4-4.5-0.1-3.1-4.1-1.9-4.6-4-4.2-4.2 0-5 0 0.3-10.3-0.2-4.1 1.1-4 1.7-2 2.8-4-0.6-1.7 1.1-2.6-1.3-3.8 0.2-2.1 0.4-5.8 1.6-2.6 0.8-3.7 1.4-1.3 6.1-0.8 5.6 2.4 2.1 2.4 2.9 0.1 2.7-1.5 6.8 3.3 2.9-0.2 3.3-2.7 3.3 0.2 1.6-0.9 3 0.3 4.4 1.9 4.3-3.6 1.4 0.3 3.9 7 1-0.1z',
		NZ: 'M1886.2 764.4l-0.8 2.6 5.6-2.6-0.5 2.7-2.1 2.7-4.2 2.9-7.1 4.7-4.7 2.6-0.6 3-4 0.1-6.3 2.4-4.7 4.1-8.2 6.4-6.3 2.8-4 1.8-4.6-0.1-1.5-2.1-5.1-0.4 1-2.4 6.5-4.6 11.4-6.3 4.3-1.2 5.6-2.4 7-3.3 5.7-3.3 6-4.7 3.1-1.6 3.5-3.6 5.8-2.9-0.8 2.7z m29-30.5l-0.4 6.8 2.9-4.4 1.3 1.8-2.4 4.8 2.9 2.1 3.2 0.5 4.7-2.4 2.2 0.7-5.2 5.7-4.2 3.7-3.9-0.1-2.8 1.9-1.5 2.8-1.6 1.1-4.6 3.5-5.9 4.3-6 2.6 0.5-1.7-1.5-0.9 6.9-5.2 0.9-3.6-3.8-2.5 1.8-2.3 5.3-2.2 4.2-5 2.5-4.1 0.6-4.3 0.8-1.1-0.9-2.7-0.7-5.6 0.4-4.6 2.2-0.5 0.9 3.6 3.2 1.6-2 5.7z',
		BQBO: 'M602 424.6l-0.2 0-0.1-0.5 0.1-0.3-0.1-0.3-0.4-0.1-0.3-0.3 0.1-0.3 1.2 0.6-0.1 0.2 0 0.4-0.2 0.2 0 0.4z',
		NP: 'M1469 322.9l0.2 2.7 1.5 4.1-0.1 2.5-4.6 0.1-6.9-1.5-4.3-0.6-3.8-3.2-7.7-0.9-7.8-3.6-5.8-3.1-5.8-2.4 0.9-6 2.8-3 1.9-1.5 4.8 2 6.4 4.2 3.3 0.9 2.5 3.1 4.5 1.2 5 2.9 6.5 1.4 6.5 0.7z',
		NR: 'M1933 505.3l-0.2 0-0.1-0.3 0.3 0 0 0.3z',
		XK: 'M1097.8 230.8l-1.2 0.3-2.9 1-0.1 1.3-0.7-0.1-0.6-2.3-1.3-0.7-1.2-1.7 0.8-1.4 1.2-0.4 0.5-2.1 0.9-0.4 0.8 0.9 1 0.4 0.8 1 0.9 0.3 1.1 1.2 0.7-0.1-0.4 1.6-0.6 0.7 0.3 0.5z',
		CI: 'M955.9 435.2l2.5 1.4 1 2.2 2.5 1.3 2-1.6 2.6-0.2 3.9 1.6 1.5 9.2-2.4 5.3-1.5 7.3 2.4 5.5-0.2 2.6-2.6 0-3.9-1.2-3.7 0-6.7 1.2-3.9 1.8-5.6 2.4-1.1-0.2 0.4-5.3 0.6-0.8-0.2-2.5-2.4-2.7-1.8-0.4-1.6-1.8 1.2-2.9-0.5-3.1 0.2-1.8 0.9 0 0.4-2.8-0.4-1.3 0.5-0.9 2.1-0.7-1.4-5.2-1.3-2.6 0.5-2.2 1.1-0.5 0.8-0.6 1.5 1 4.4 0 1-1.8 1 0.1 1.6-0.7 0.9 2.7 1.3-0.8 2.4-1z',
		CH: 'M1034.4 197.5l0.2 1.1-0.7 1.5 2.3 1.2 2.6 0.2-0.3 2.5-2.1 1.1-3.8-0.8-1 2.5-2.4 0.2-0.9-1-2.7 2.2-2.5 0.3-2.2-1.4-1.8-2.7-2.4 1 0-2.9 3.6-3.5-0.2-1.6 2.3 0.6 1.3-1.1 4.2 0 1-1.3 5.5 1.9z',
		CO: 'M584.4 426.2l-3.7 1.1-1.6 3.2-2.3 1.8-1.8 2.4-0.9 4.6-1.8 3.8 2.9 0.4 0.6 2.9 1.2 1.5 0.3 2.5-0.7 2.4 0.1 1.4 1.4 0.5 1.2 2.2 7.3-0.6 3.3 0.8 3.8 5.6 2.3-0.7 4.1 0.3 3.2-0.7 2 1.1-1.2 3.4-1.3 2.2-0.6 4.6 1.1 4.3 1.5 1.9 0.2 1.4-2.9 3.2 2 1.4 1.5 2.3 1.6 6.4-1.1 0.8-1-3.8-1.6-2.1-1.9 2.3-11-0.2 0 4 3.3 0.7-0.2 2.5-1.1-0.7-3.2 1-0.1 4.7 2.6 2.4 0.9 3.6-0.1 2.8-2.2 17.6-2.9-3.4-1.7-0.1 3.5-6.6-4.4-3-3.4 0.6-2.1-1.1-3.1 1.7-4.2-0.9-3.5-6.7-2.6-1.6-1.8-3.1-3.8-3-1.5 0.6-2.4-1.5-2.8-2.1-1.6 1-4.8-0.9-1.4-2.8-1.1 0.1-5.6-3.6-0.7-2 2.1-0.5-0.2-3.2 1.4-2.4 2.8-0.4 2.5-4 2.2-3.4-2-1.5 1.2-3.7-1.1-5.9 1.3-1.7-0.7-5.4-2.2-3.5 0.9-3.1 1.8 0.5 1.1-1.9-1.1-3.8 0.7-0.9 2.9 0.2 4.5-4.5 2.4-0.7 0.1-2.1 1.4-5.5 3.4-2.9 3.5-0.2 0.6-1.3 4.4 0.5 4.6-3.2 2.3-1.4 2.9-3.1 2 0.4 1.3 1.7-1.2 2.1z',
		CN: 'M1602.2 381.9l-4.3 3.1-4.9-2-1-5.5 2.2-2.9 5.8-1.8 3.3 0.1 1.6 2.5-2 2.8-0.7 3.7z m23.4-196.4l9 4.5 6 5.8 7.6 0 2.6-2.4 6.9-1.9 1.3 5.7-0.3 2.3 2.8 6.8 0.6 6.2-6.9-1.1-2.9 2.2 4.7 5.4 3.9 7.5-2.5 0.1 1.9 3.3-5.5-3.8 0 3.6-6.4 2.7 2.8 3.4-4.6-0.3-3.6-2-1.1 4.6-3.9 3.4-2.1 4.1-6.3 1.8-2.4 3-4.8 1.8 1.3-3-2.3-2.5 2-4.3-4.5-3.3-3.4 2.2-3.6 4.5-1.3 4.1-5 0.3-1.3 3 4.8 4.3 4.8 1.1 1.4 2.8 5.1 1.9 3.8-4.6 5.9 2.5 3.5 0.2 2.3 3.3-6.7 1.8-1 3.5-3.8 3.2-0.9 4.5 7.1 3.5 4.6 6.3 5.5 5.9 5.5 4.9 1.6 4.8-2.8 1.8 2.4 3.4 3.9 2 0.8 5.2 0.1 5.1-2.8 0.6-2.1 6.9-2.3 8.5-3.4 7.6-6.4 5.9-6.6 5.5-6.1 0.7-2.9 2.8-2.3-2-2.5 3.1-7.2 3.3-5.8 0.9-0.7 6.8-3.1 0.4-2.2-4.7 0.9-2.4-7.8-2.1-2.4 1.1-5.9-1.7-3.1-2.6 0.3-3.7-5.3-1.2-3.1-2.4-4.1 3.4-5.3 0.8-4.4-0.1-2.7 1.6-2.7 0.9 2 7.4-3-0.2-0.8-1.5-0.5-2.7-3.8 1.9-2.6-1.2-4.5-2.4 0.8-5.3-3.7-1.3-2.4-5.9-5.6 1.1-0.7-7.6 4.2-5.4-0.9-5.3-1.3-4.9-2.7-1.5-2.7-3.8-3.1 0.5-6.1-1 1.2-2.7-3.6-4-3.2 2.7-4.9-1.5-5.4 4-3.9 4.8-4.2 0.8-2.8-1.7-2.9-0.2-4.3-1.4-2.6 1.6-2.6 4.8-1.5-5.1-3.1 1.4-6.5-0.7-6.5-1.4-5-2.9-4.5-1.2-2.5-3.1-3.3-0.9-6.4-4.2-4.8-2-1.9 1.5-8.6-4.5-6.2-4-3.2-7.1 4.1 0.9-0.6-3.3-3-3.3-0.8-5.2-7.7-7.6-9.5-2.5-2.9-5-4.7-3-1.5-1.8-1.8-3.6-0.5-2.5-3.7-1.5-1.5 0.7-3.1-6 1.1-1.4-1.2-1.5 4.1-3 3.2-1.3 5.8 0.9 0.6-4.1 6.4-0.7 1-2.6 6.9-3.4 0.2-1.4-1.7-3.7 2.9-1.6-8.8-11 9.1-2.5 2-1.4-1-11.3 10.8 2.1 1.6-2.9-2.5-6.2 3.8-0.6 1.9-4.2 1.7-0.5 3.3 4.4 5.7 3.3 8.2 2.3 5.8 5.1 1.4 7.3 3 2.8 6.5 1.1 7.2 0.8 8 4 3.4 0.7 5 5.8 4.7 3.8 5.6-0.2 11.3 1.5 6.4-0.9 5.6 0.9 9.4 3.9 6.2 0 3.3 1.9 4.4-3.4 7.2-2.2 7.6-0.2 4.9-2.2 2-3.4 2.4-2.2-1.9-2.1-2.9-2.4 0.5-4.1 3.2 0.6 5.9 1.3 3.2-3.4 6.4-2.4 1.3-4.2 2.5-1.8 6.8-0.8 4.4 0.7-0.8-2.2-7.2-4.4-5.2-2-2.5 2.3-5.5-1-2.3 0.8-2.8-2.5-0.3-6.3-0.6-4.7 7.4 2.4 4.4-3.9-1.9-2.8-0.2-6.5 1.3-2-2.5-3.4-3.7-1.4 1.7-3.1 5.1-1.1 6.2-0.2 8.6 1.9 6 2.2 7.7 6.2 3.8 2.7 4.5 3.8 6.2 6 10 2z',
		CM: 'M1072.8 454.2l-2.8 6.5-1.4 1.1-0.4 5 0.6 2.7-0.5 1.9 2.7 3.4 0.5 2.3 2.1 3.3 2.6 2.1 0.3 2.9 0.6 1.9-0.4 3.4-4.5-1.5-4.6-1.7-7.1-0.2-0.7-0.4-3.4 0.8-3.4-0.8-2.7 0.4-9.3-0.1 0.9-5.1-2.3-4.3-2.6-1-1.1-2.9-1.5-0.9 0.1-1.8 1.4-4.6 2.7-6.2 1.6 0 3.4-3.8 2.1-0.1 3.2 2.7 3.9-2.2 0.5-2.7 1.3-2.6 0.8-3.2 3-2.6 1.1-4.5 1.2-1.5 0.8-3.3 1.4-4.1 4.7-5 0.3-2.1 0.6-1.2-2.3-2.5 0.2-2.1 1.5-0.3 2.3 4.1 0.5 4.2-0.2 4.3 3.2 5.8-3.2 0-1.6 0.4-2.6-0.6-1.2 3 3.4 3.8 2.5 1.1 0.8 2.6 1.8 4.4-0.8 1.8z',
		CL: 'M655.1 837.9l6 13.6 5 0 3 0.2-0.5 2.4-3.2 1.9-2.4-0.2-3.1-0.5-4.2-1.8-5.4-0.9-7.5-3.4-6.4-3.2-9.8-6.9 4.6 1.3 8.6 4.1 7.3 2.2 1.2-2.8-0.3-4.2 3.4-2.6 3.7 0.8z m-40.7-190.1l0.9 1.6-1.2 6.7-5.6 3.1 1.6 10.7-0.8 2.1 2 2.5-3.3 4-2.6 6-0.9 5.9 1.7 6.2-2.1 6.6 4.9 11.1 1.6 1.2 1.4 5.9-1.6 6.2 1.4 5.4-3 4.2 1.6 5.8 3.3 6.3-2.5 2.3 0.2 5.7 0.8 6.5 3.3 7.8-1.7 1.3 3.7 7.3 3.1 2.4-0.8 2.7 2.8 1.2 1.4 2.4-1.8 1.2 1.8 3.7 1.1 8.3-0.7 5.4 1.8 3.2-0.1 3.9-2.7 2.8 3.1 6.5 2.6 2.3 3.1-0.4 1.9 4.6 3.5 3.6 12.1 0.8 4.9 1-4.3 0-1.7 1.5-3.4 2.2 1.7 5.7-1.9 0.1-6.3-1.9-7.5-4.3-7.6-3.5-3.2-3.9-0.3-3.6-4.2-4.2-5-10.6-0.2-6 3.4-4.8-8.3-1.9 2.7-5.5-2-10.5 6.5 2.2-1.8-13.1-4-1.7 1 7.9-3.5-0.9-1.5-9-2-11.8 1.1-4.4-3.3-6.2-2.4-7.2 2.2-0.3 0.6-10.3 1.2-10.3 0.1-9.5-3.3-9.7 0.6-5.3-2.1-7.9 1.8-7.8-0.9-12.4 0-13.4 0.1-14.3-1.5-10.5-2.1-9.1 2.8-1.6 1.1-3.3 3.2 4.4 1.2 4.6 3.2 2.7-1.1 6.2 3.7 7.2 3.1 8.9 3.9-0.9z',
		CA: 'M665.9 203.6l3.4 0.9 4.7-0.2-3.3 2.6-2 0.4-5.5-2.7-0.6-2.1 2.5-1.9 0.8 3z m14.4-16l-2.4 0.1-5.8-1.9-3.5-3 1.9-0.5 5.9 1.6 4.2 2.6-0.3 1.1z m-307.9 3.7l-3.1 0.9-6.3-2.8 0-2.2-2.9-2.2 0.3-1.8-4.3-1.1 0.6-3.4 1.5-1.4 4.1 1.3 2.4 1 4.1 0.6 0.2 2.2 0.4 2.9 3.2 2.6-0.2 3.4z m339.1-13.5l-5 5.4 3.9-2.1 2.9 1.4-2.4 2.1 3.8 1.7 2.8-1.5 4.3 1.9-2.8 4.6 3.8-1.1-0.3 3.3 0.5 3.9-3.6 5.6-2.4 0.2-2.9-1.2 2.5-5.1-1.2-0.8-7.3 5.4-3-0.2 4.4-3-4.4-1.5-5.5 0.4-9.6-0.2-0.2-1.8 3.8-2.3-1.7-1.6 5.4-3.8 8.2-9.9 4.2-3.5 5-2.1 2.1 0.2-1.5 1.7-3.8 3.9z m-360-21.4l1.5 0.8 5-0.5-7.2 6.9 0.3 5-1.9 0-0.7-2.8 0.5-2.9-0.8-1.9 1.3-2.7 2-1.9z m283.4-47.5l-3.6 3-1.7-0.5-0.1-1.7 0.4-0.4 2.8-1.7 1.7 0.1 0.5 1.2z m-9.7-3.2l-7.2 3.2-3-0.2 0-1.5 5-2.7 6 0.1-0.8 1.1z m-3.1-16.8l-0.9 2.5 2.7-0.9 1.5 1.5 3.5 2 3.8 1.7-1.4 2.7 3.5-0.4 1.9 1.9-5 1.8-5.9-1.4-0.8-2.6-6.3 3.1-8.2 2.9 0.7-3.3-6.3 0.5 5.7-2.8 3.6-4.5 5.1-5.1 2.8 0.4z m44.9-8.3l-4.9 0.3 0.7-2.7 3.8-3.1 4.3-0.7 2.3 1.5-1.5 2.3-0.9 0.8-3.8 1.6z m-74.5-10.7l-4.1 1.9-4.2-1.6-3.9 0.5-3.4-2.4 5-1.7 4.9-2.3 3 1.5 1.6 1 0.4 1 0.7 2.1z m53 142.6l-2.2-3.6 2.9-8.5-1.6-1.8-3.7 1-1.1-1.6-5.5 4.7-3.2 4.9-2.8 2.9-2.5 1-1.7 0.3-1.1 1.5-9.3 0-7.8 0.1-2.7 1.1-6.8 4.4 0-0.1-0.9-0.4-2 0.9-1.9 1.3-1.8-1.1-4.7 0.8-3.9 0.9-1.9 0.8-2.3 2.1 1.8 0.7 1.7-0.4 0.3 0-0.3 1.9-4.8 0.7-2.8 0.8-1.7 1-2.6-0.6-1.6 0.3-2.9 1.8-4.6 2-2.7-0.4 2-2.2 3.7-3.5 4.1-2.1 1.1-1.8 0.9-3 3.8-3.5 0.9-4 1.1 3.9 3.8 0.9 2.4-2.1-1.4-4.8-0.9-2-4-1.2-3.8-0.7-3.9 0-3.4-0.8-0.4-1.4-1.4 0.9-1.2-0.2 1.9-2.1-1.8-0.8 1.9-2.4-1.2-1.8 1.7-1.8-5.2-0.9-0.1-3.6-0.8-0.8-3.3-0.2-4.1-1.2-1.5 0.8-1.8 1.5-3.3 1-3.1 2.5-5.4-1.7-4.4 0.8-3.9-1.9-4.6-1-3.3-0.4-1-1 0.9-3.4-1.7 0-1.3 2.4-10.2 0-17 0-16.8 0-14.9 0-14.8 0-14.7 0-15.1 0-4.8 0-14.7 0-14.1 0-0.7 0-5.4-6.1-1.6-2.7-7-2.6 1.3-5.5 3.6-3.7-4.1-2.7 3.1-4.9-2.1-4.4 2.5-3.2 5.1-2.9 3.2-3.8-4.6-3.8 1.4-6.9 1.1-4.2-1.6-2.7-0.8-2.4 0.6-3.1-6.5 1.9-7.6 3.3-0.3-3.8-0.5-2.6-2.8-1.6-4.2-0.2 35.6-32.7 24.6-20.4 6 1.3 3.3 2.6 3.7 0.5 6.3-2.2 7-1.7 5.3 0.6 8.9-2.3 8.2-1.3 0.2 2.2 4.5-1.3 3.9-2.5 2.1 0.6 1.4 4.8 9.5-3.7-3.9 4.1 6-0.9 3.2-1.5 4.6 0.3 3.9 2.2 7.5 2 4.7 0.9 4.4-0.3 2.9 2.8-8.5 2.7 6.4 1.1 11.9-0.6 4.4-1 1.4 3.3 7.1-2.7-2.1-2.4 4.5-1.8 5.2-0.3 3.9-0.5 2.1 1.3 1.5 2.9 5-0.4 5.3 2.5 7.2-0.9 6 0.1 2.4-3.4 4.5-0.9 4.9 1.8-4.3 5.2 6.2-4.4 3.2 0.2 6.4-5.5-1.6-3.3-2.9-2.2 5.5-5.9 8.2-3.8 4.5 0.9 2 2.3 0.4 6-5.8 2.6 6.7 1.1-4.4 5.5 8.9-4.2 2.2 3.5-4.3 4 1.3 3.7 7.3-3.9 6.5-4.8 4.7-5.9 5.5 0.4 5.4 0.8 3.6 2.7-1.7 2.7-5.1 2.9 0.9 2.9-2.4 2.7-10.9 3.9-6.5 0.9-3.2-1.7-3.3 2.8-7.4 4.7-3 2.5-7.7 3.8-6.5 0.4-5.1 2.4-2.9 3.8-5.7 0.7-8.7 4.7-9.4 6.5-5 4.6-4.9 6.9 6 1-1.5 5.5-0.8 4.6 7.3-1.2 7 2.6 3.3 2.3 1.7 2.8 4.9 1.7 3.6 2.5 7.6 0.4 4.8 0.6-3.6 5.2-1.7 6.1 0.1 6.9 4.4 5.9 4.7-2 5.6-6.4 2.3-9.6-1.7-3.2 9-2.9 7.5-4.2 4.8-4.2 1.7-4-0.4-5.1-3.2-4.5 8.9-6.2 1-5.3 3.9-9 3.8-1.4 6.7 1.6 4.2 0.6 4.5-1.6 3.1 2 3.6 3.4 0.2 2.2 7.7 0.5-2.6 4.9-2.3 7.4 3.8 1 1.6 3.5 8.2-3.3 7.5-6.6 4.2-2.7 1.1 5.3 2.6 7.5 2 7.2-3.4 3.8 4.8 3.4 2.9 3.4 6.9 1.6 2.4 1.9 0 5.2 3.4 0.8 1.1 2.3-2 6.9-4.3 2.3-4.2 2.2-8.8 2.2-7.9 5-8.6 1.1-10.1-1.4-7.3 0-5.3 0.4-5.7 4.5-7.4 2.8-10.1 8.2-7.9 5.8 4.7-1 10.9-8.3 12.3-5.2 7.6-0.6 3.3 3.1-6.1 4.2-0.6 6.7 0.1 4.8 5.6 3.1 8.6-0.9 7.2-7.1-1 4.6 2.5 2.3-7.4 4.1-12.4 3.8-5.8 2.5-7.2 4.6-3.7-0.5 1.5-5.3 10.4-5.3-8.1 0.2-5.9 0.8z m-106.5-163.8l-4.7 2.4 10.5-1.5 2.6 2.6 7.3-2.7 1.8 1.7-2.2 5.1 4.3-2.1 2.8-5.3 4.3-0.8 3 0.8 2.2 2.1-2.7 5.1-2.4 3.7 4.2 2.6 5 2.6-2.6 2.3-7.1 0.5 0.8 2-3.2 2-6.7-0.8-5.7-1.5-5.1 0.3-9.5 1.9-11.3 0.8-7.9 0.5 0.3-2.6-4.1-1.4-4.3 0.6-0.6-4.3 3.3-0.6 7.3-0.9 5.5 0.3 6.2-1-6.5-1.2-9.1 0.4-5.7-0.1 0-1.9 11.7-2.2-6.3 0.1-5.4-1.4 7.8-3.9 5.2-2.1 14.2-3.1 2.8 1z m39.5-1.5l-7 3.4-2.3-3.6 2.1-0.8 5.5-0.2 1.7 1.2z m108.6 1.6l-0.7 1.4-4.1-0.1-4.1-0.1-4.9 0.7-0.9-0.4-2.1-2.7 1.7-1.8 2.2-0.4 8.4 0.6 4.5 2.8z m-39.8-0.3l0.3 3.2 7.2-4.1 11.7-2.1 2.3 5.3-3.2 3.4 9-1.5 5.3-2.1 6.8 2.6 3.7 2.5-1.1 2.3 8.2-1.2 1.9 3.4 8.4 2.1 2.2 2.1 0.9 5.1-9.1 2.5 7.7 3.6 5.9 1.2 3.3 5 6.5 0.4-3.3 3.9-10.9 6.5-4-2.4-3.8-5.4-5.9 0.7-2.3 3.3 2.7 3.2 4.5 2.6 1 1.5-0.1 5.7-3.6 4.1-4.7-1.6-8.6-4.5 3.6 4.9 2.8 3.5-0.3 2-10.9-2.3-7.6-3.4-3.8-2.7 2.4-1.7-4.8-2.9-4.7-2.7-0.9 1.6-13.1 0.9-2.4-1.9 5.4-4.2 8.1-0.1 9.3-0.7-0.2-2 3.1-2.8 8.8-5.4 0.4-2.5-0.5-1.8-4.7-2.7-7.1-1.8 3.5-1.4-2-3.4-3.4-0.3-1.9-1.8-3.3 1.6-7.9 0.7-14-1.2-7.4-1.6-5.9-0.8-1.9-1.9 6.3-2.4-5.7 0 3.3-5.3 7.1-4.6 6-2.1 11.2-1.4-5.8 3.3z m-50.4-3.5l3.6 1.1 7.6-0.7-0.5 1.5-6.1 2.5 3.8 2.2-5.2 4.7-8.4 2-3.4-0.4-0.9-2-5.9-4 1.7-1.7 7.4 0.6-0.9-3.3 7.2-2.5z m22.6 5.5l-7.8 3.9-4.4-0.2 1.8-4.6 2.6-2.5 4.2-2.2 5.2-1.4 7.9 0.2 6.2 1.2-10.1 4.6-5.6 1z m-115.8 7.2l-13.5 2.6 0.6-2.3-6-2.8 4.4-2.2 7.5-3.8 7.6-3.4 0.4-3.1 14-0.8 4.2 1.1 9.5 0.3 1.9 1.4 1.6 2.2-6.5 1.3-13.9 3.6-9.2 3.7-2.6 2.2z m125.2-18.4l-4.1 1.9-5.2-0.4-3.2-1.3 4.5-2.2 6.9-1.4 1.4 1.8-0.3 1.6z m-8.8-8.7l0.2 2.3-2.8 2.5-5.8 3.8-6.9 0.5-3.2-0.8 3.4-2.9-6.6 0.3 4.3-3.8 3.8 0.2 7.7-1.7 4.9 0.3 1-0.7z m-39.4 2.6l-0.7 1.7 4.4-0.8 3.6 0.2-2.3 2.5-5.1 2.3-13.9 0.8-12.3 2.2-6 0.1 1.5-1.6 10.7-2.3-17.9 0.6-4.2-0.9 11.7-4.8 5.4-1.4 8.3 1.7 2.9 2.9 6.1 0.4 0.7-4.7 5.8-1.8 3.1 0.5-1.8 2.4z m55.7-4.4l2.3 1.6 7.4 0 1.4 1.6-2.8 1.8 3.1 1.1 1.2 1.2 4.9 0.2 5.1 0.4 7.1-1 8.1-0.5 5.8 0.4 2.3 1.9-1 2-3.6 1.4-6.7 1.1-4.3-0.7-11.8 0.8-8 0.1-5.6-0.6-8.6-1.6 1.6-2.8 2.1-2.4-1.4-2.2-7-0.6-2.6-1.5 3.8-2 7.2 0.3z m-75.7-2.6l-5.8 3.7-5.3 1.7-3.8 0.2-9.9 2.1-7.1 0.8-3.6-1.1 11.7-3.7 12.2-3.1 5.5 0.1 6.1-0.7z m81.2 0.6l-1.8 0.1-6.6-0.3 0.7-1.3 7.2 0.1 1.6 0.8-1.1 0.6z m-58.8-0.9l-8.8 1.4-3.3-1.5 5.1-1.5 6-0.5 4.1 0.7-3.1 1.4z m7.8-4.2l-5.7 0.9-6 0 1-0.7 5.7-1.3 1.7 0.2 3.3 0.9z m46.8 2.5l-6.6 1-1.6-1.1 0.6-1.7 2.2-1.9 4.4 0.2 1.7 0.3 2.3 1.6-3 1.6z m-13.8-1.2l-1.1 1.9-5.3-0.5-4-1.5-7.8-0.2 5.3-1.3-2.8-1.1 2.2-1.8 6.1 0.6 7.5 1.7-0.1 2.2z m54.1-6.1l2.7 1.5-6.5 1.3-10.6 3.5-6.8 0.3-6.8-0.6-1.6-1.9 2.1-1.6 4.3-1.2-6.6 0-2-1.5 0.4-1.9 4.9-1.9 4.1-1.3 4-0.3-0.3-1 8.3-0.2 1.6 2.2 4.7 0.9 4.8 0.9-0.7 2.8z m79.2-14l8.7 0.3 6.7 0.5 5.2 1-1.1 1-9.8 1.7-9 0.8-4 0.9 7.5 0-10.5 2.5-6.8 1.2-9.3 3.5-8.1 0.7-3.1 1-11.3 0.4 4.4 0.6-3.3 0.8 0.7 2.3-5 1.6-6.9 1.3-3.5 1.8-6.6 1.5-0.5 1.1 6.5-0.2-1.1 1.2-12.7 2.9-8.5-1.4-11.7 0.8-5-0.6-6.8-0.3 2.1-2.3 8-1.1 2-3.4 2.6-0.3 7.5 2-1.7-3-4.9-0.9 5-1.8 7.6-1.1 2.8-1.6-3-1.7 1.1-2.2 9.4 0.1 2.2 0.5 7.3-1.6-7.3-0.5-12.6 0.3-4.4-1.4-0.8-1.7-2.5-1.2 1.1-1.3 6-0.8 4.2-0.1 7.4-0.6 6.8-1.5 3.9 0.2 2.4 1.1 5-2 5.2-0.6 6.5-0.4 10.4-0.2 1.3 0.4 10.3-0.6 7 0.2 7 0.2z',
		CG: 'M1090.9 479.3l-0.3 3.9-1.7 3.4-1.1 4-0.7 5.7 0.3 3.7-0.9 2.2-0.1 2.4-0.7 2-3.7 3.1-2.6 3.3-2.5 6.2 0.1 5.3-1.4 2.1-3.3 3.1-3.4 4-2.1-1.1-0.3-1.8-3.1-0.1-2 2.5-1.5-0.7-2.1-2.2-1.7 1.1-2.3 2.8-4.6-6.8 4.3-3.6-2.1-4.2 2-1.6 3.8-0.8 0.4-2.9 3.1 3.1 5 0.3 1.7-3 0.7-4.3-0.6-5-2.7-3.8 2.5-7.5-1.4-1.2-4.2 0.5-1.6-3.3 0.4-2.8 7.1 0.2 4.6 1.7 4.5 1.5 0.4-3.4 3-6 3.3-3.4 3.9 1.1 3.6 0.3z',
		CF: 'M1121.3 446.5l3.9 2.5 3.1 2.6 0.1 2.1 3.9 3.3 2.4 2.8 1.4 3.8 4.3 2.6 0.9 2-1.8 0.7-3.7-0.1-4.2-0.7-2.1 0.5-0.9 1.6-1.8 0.2-2.2-1.4-6.3 3.2-2.6-0.6-0.8 0.5-1.6 3.9-4.3-1.3-4.1-0.6-3.6-2.4-4.7-2.2-3 2.1-2.2 3.2-0.5 4.5-3.6-0.3-3.9-1.1-3.3 3.4-3 6-0.6-1.9-0.3-2.9-2.6-2.1-2.1-3.3-0.5-2.3-2.7-3.4 0.5-1.9-0.6-2.7 0.4-5 1.4-1.1 2.8-6.5 4.6-0.5 1-1.7 1 0.2 1.4 1.4 7.1-2.4 2.4-2.5 2.9-2.3-0.6-2.2 1.6-0.6 5.5 0.4 5.2-3 4-7 2.8-2.6 3.6-1.1 0.7 2.7 3.3 4 0 2.7-0.8 2.6 0.4 2 1.9 1.9 0.5 0.3z',
		CD: 'M1141.3 468.2l3.5 5.3 2.6 0.8 1.5-1.1 2.6 0.4 3.1-1.3 1.4 2.7 5.1 4.3-0.3 7.5 2.3 0.9-1.9 2.2-2.1 1.8-2.2 3.3-1.2 3-0.3 5.1-1.3 2.5-0.1 4.8-1.6 1.8-0.2 3.8-0.8 0.5-0.6 3.6 1.4 2.9 0.1 1-1.2 10.3 1.5 3.6-1 2.7 1.8 4.6 3.4 3.5 0.7 3.5 1.6 1.7-0.3 1.1-0.9-0.3-7.7 1.1-1.5 0.8-1.7 4.1 1.2 2.8-1.1 7.6-0.9 6.4 1.5 1.2 3.9 2.5 1.6-1.2 0.2 6.9-4.3 0-2.2-3.5-2-2.8-4.3-0.9-1.2-3.3-3.5 2-4.4-0.9-1.9-2.9-3.5-0.6-2.7 0.1-0.3-2-1.9-0.1-2.6-0.4-3.5 1-2.4-0.2-1.4 0.6 0.4-7.6-1.8-2.4-0.4-4 0.9-3.9-1.1-2.4-0.1-4.1-6.8 0.1 0.5-2.3-2.9 0-0.3 1.1-3.5 0.3-1.5 3.7-0.9 1.6-3.1-0.9-1.8 0.9-3.8 0.5-2.1-3.3-1.3-2.1-1.6-3.9-1.3-4.7-16.7-0.1-2 0.7-1.7-0.1-2.3 0.9-0.8-2 1.4-0.7 0.2-2.8 1-1.6 2-1.4 1.5 0.7 2-2.5 3.1 0.1 0.3 1.8 2.1 1.1 3.4-4 3.3-3.1 1.4-2.1-0.1-5.3 2.5-6.2 2.6-3.3 3.7-3.1 0.7-2 0.1-2.4 0.9-2.2-0.3-3.7 0.7-5.7 1.1-4 1.7-3.4 0.3-3.9 0.5-4.5 2.2-3.2 3-2.1 4.7 2.2 3.6 2.4 4.1 0.6 4.3 1.3 1.6-3.9 0.8-0.5 2.6 0.6 6.3-3.2 2.2 1.4 1.8-0.2 0.9-1.6 2.1-0.5 4.2 0.7 3.7 0.1 1.8-0.7z',
		CZ: 'M1059.7 175.2l2.5 2 3.7 0.5-0.2 1.7 2.8 1.3 0.6-1.6 3.4 0.7 0.7 2 3.7 0.3 2.6 3.1-1.5 0-0.7 1.1-1.1 0.3-0.2 1.4-0.9 0.3-0.1 0.6-1.6 0.6-2.2-0.1-0.6 1.4-2.4-1.2-2.3 0.3-4-1.9-1.7 0.5-2.6 2.6-3.8-2.1-3-2.6-2.6-1.5-0.7-2.7-1-1.8 3.4-1.3 1.7-1.6 3.5-1.2 1.1-1.2 1.3 0.7 2.2-0.6z',
		CY: 'M1168.2 276.7l0.1 0.2 0.3 0.4-0.4-0.1-0.3 0-0.4 0.2-0.3-0.3 0-0.3 0.3-0.1 0.2 0.1 0.5-0.1z m-1.7 0.5l0 0.1-0.2 0.2-0.1 0.6-0.1 0.2-0.3 0-0.2 0.2-0.5 0.2-0.2 0.1-0.6 0.3-0.4-0.1-0.5 0.1-0.3 0.4-0.2-0.3-0.3 0.1-0.2 0-0.3-0.3-0.4 0.3-0.5 0-0.5-0.2-0.5-0.1-0.4-0.3-0.3-0.6-0.3-0.3-0.2-0.7-0.2-0.3 0.1-0.3 0.5 0.3 0.4-0.1 0.2-0.3 0.1-0.3 0.3-0.1 0.2 0.1 0.2-0.2 0.2 0 0.1 0.4 0.5 0.2 0.1 0.2 0.6 0 0.6-0.5 0.4 0.1 0.3-0.2 0.3 0.1 0.4 0.2 0.2-0.3 0.3 0 0.3 0.4 0 0.6 0.3-0.2 0.3 0.2 0.1-0.1 0.7 0.2z',
		CR: 'M514.6 431.6l1.2 3.5 2 2.6 2.5 2.7-2.2 0.6-0.1 2.6 1.1 0.9-0.9 0.8 0.2 1.1-0.6 1.3-0.3 1.3-3-1.4-1.1-1.4 0.7-1.1-0.1-1.4-1.5-1.5-2.2-1.3-1.8-0.8-0.3-1.9-1.4-1.1 0.2 1.8-1.2 1.6-1.2-1.8-1.7-0.7-0.7-1.2 0.1-2 0.9-2-1.5-0.9 1.4-1.3 0.9-0.8 3.6 1.7 1.3-0.8 1.8 0.5 0.8 1.3 1.7 0.5 1.4-1.4z',
		CW: 'M599 424.5l-0.3 0-0.4-0.3-0.3-0.1-0.3-0.3-0.1-0.2-0.3-0.1-0.2-0.4-0.3-0.3 0.1-0.5 0.5 0.3 0.1 0.5 0.4 0.4 0.7 0.2 0.2 0.3 0.3 0.4-0.1 0.1z',
		CV: 'M847.8 406.5l-0.2 0.3-0.2-0.2 0-0.3 0.3-0.1 0.1 0.3z m1.9 0.1l-0.2 0.1-0.4-0.1-0.3-0.3-0.1-0.3 0.2-0.4 0.5-0.3 0.4 0 0.2 0.7-0.1 0.4-0.2 0.2z m3.5-3.1l0.2 0.1 0 0.2 0.2 0.2 0.4 0.5 0.2 0 0.2 0.3 0.2 0.5 0.2 0.2-0.3 0.5-0.3 0.1-0.5-0.1-0.3-0.1-0.3-0.3 0-0.2-0.2-0.1-0.1-0.4 0.1-0.2 0-0.3 0.2-0.4-0.2-0.5 0.3 0z m3.1 0l0.3 0.1 0.1 0.6-0.1 0.4-0.4 0.2-0.4-0.4 0.2-0.4-0.1-0.2 0.4-0.3z m2-5.7l0.3-0.2 0.5 0.2 0.1 0.2 0 0.7-0.4 0.3-0.3 0.2-0.3 0-0.5-0.2 0-0.5 0.2-0.2 0-0.6 0.1-0.1 0.3 0.2z m-8-2.8l0.4-0.1 0.3 0.2 0.4 0 0.3 0.2 0.1 0.2-0.5 0-0.7-0.3-0.2 0.1-0.3 0.6-0.3-0.6-0.1-0.1-0.1-0.4 0.3-0.1 0.4 0.3z m7.8-0.5l0.1 0.1-0.1 0.6-0.2 0.1 0-0.5-0.2-0.3 0-0.3-0.1-0.3 0.4-0.3 0.2 0.2-0.1 0.6 0 0.1z m-11.3-1.3l0.2 0.3 0.1 0.3-0.7 0.3-0.3-0.2-0.2-0.2 0.4-0.4 0.5-0.1z m-0.8-1.8l0.3 0.1 0 0.2 0.3 0.3-0.2 0.4-0.6 0.3-0.4 0.4-0.7 0.1 0-0.1 0-0.5-0.2-0.2 0-0.2 0.2-0.2 0.2 0 0.2-0.2 0.7-0.4 0.2 0z',
		CU: 'M544.8 355.7l1.9 2.3 5.2-0.7 1.8 1.5 4.2 4 3.2 2.9 1.8-0.1 3.2 1.3-0.6 1.8 4 0.3 3.9 2.6-0.8 1.5-3.8 0.8-3.8 0.3-3.7-0.5-8.1 0.6 4.2-3.5-2.1-1.7-3.6-0.4-1.7-1.9-0.8-3.6-3.2 0.2-5-1.7-1.5-1.4-7.1-1-1.8-1.2 2.3-1.6-5.4-0.3-4.4 3.3-2.3 0.1-1 1.6-2.8 0.7-2.3-0.7 3.2-1.9 1.5-2.4 2.7-1.4 3-1.2 4.3-0.6 1.4-0.8 4.7 0.5 4.4 0.1 4.9 2.2z',
		SZ: 'M1161.7 667.7l0.6 2.9 0.3 2.9-1.4 2.8-3.2 0.7-3.1-3.5 0.1-2.2 1.7-2.4 0.6-1.9 1.7-0.4 2.7 1.1z',
		SY: 'M1195 287.5l-9.7 6.9-6.3-2.6-0.1 0 0.6-1-0.4-2.6 0.9-3.5 2.7-2.5-1.2-2.5-2.5-0.3-1.1-4.9 1-2.7 1.3-1.4 1.2-1.4-0.2-3.5 1.9 1.2 5.6-1.8 3 1.2 4.4 0 5.7-2.4 2.9 0.1 5.9-1-2.1 4-2.7 1.6 1.2 4.7-1 7.7-11 6.7z',
		SX: 'M634.2 386l0 0.1-0.4-0.1 0-0.1 0.4 0.1z',
		KG: 'M1400.5 230.2l-0.2 1.4-6.9 3.4-1 2.6-6.4 0.7-0.6 4.1-5.8-0.9-3.2 1.3-4.1 3 1.2 1.5-1.1 1.4-9.6 1-7.1-2.1-5.5 0.5-0.6-3.6 6 1 1.4-1.9 4.1 0.6 5.3-4.6-7.2-3.4-3.2 1.6-4.6-2.4 3-4.1-1.7-0.6 0.3-2.8 3.1-0.9 9.2 2.2-0.5-3.7 2.5-1.4 8.2 2.7 1.6-0.7 8.6 0.2 7.9 0.6 3.4 2.3 3.5 1z',
		KE: 'M1223.5 476.7l-4.9 7.2 0.2 23.4 3.3 5.3-4 2.6-1.4 2.7-2.2 0.4-0.8 4.6-1.9 2.6-1.1 4.2-2.3 2.1-8.1-6.4-0.3-3.7-20.5-13.1 0.4-4.7-1.4-2.5 0-0.3 1.6-2.6 2.8-4.2 2.1-4.7-2.6-7.4-0.7-3.2-2.7-4.5 3.4-3.8 3.8-4.2 2.9 1.1 0.1 3.6 1.9 2.1 4 0 7.2 5.4 1.8 0.1 1.3-0.2 1.3 0.7 3.8 0.6 1.6-2.7 5.2-2.7 2.3 2.2 3.9 0z',
		SS: 'M1178.1 441.1l0.2 5-0.8 1.9-3 0.2-1.9 3.6 3.5 0.5 3 3.1 1 2.6 2.6 1.5 3.5 7-3.8 4.2-3.4 3.8-3.5 3-4 0-4.5 1.5-3.6-1.5-2.3 1.8-5.1-4.3-1.4-2.7-3.1 1.3-2.6-0.4-1.5 1.1-2.6-0.8-3.5-5.3-0.9-2-4.3-2.6-1.4-3.8-2.4-2.8-3.9-3.3-0.1-2.1-3.1-2.6-3.9-2.5 1.7-0.7 2-1.2 1.3-5.8 1.5-2.9 4.1-0.9 1 1.7 2.9 3.8 1.6 0.5 2-1.1 4.1 0.3 0.8 1.3 5.6 0 0.2-1.3 2.9-1.3 0.5-1.8 2.1-1.3 4.8 3.7 2.9-0.7 2.7-4.6 3-3.5-0.5-3.9-1.5-1.8 3.4-0.4 0.4-1.4 2.6 0.4-0.6 4.8 0.9 4.6 2.9 2.5 0.8 2.2-0.1 3.2 0.8 0.2z',
		SR: 'M681 464.9l-3.1 5.5 0.3 4.4 2.2 3.8-1.1 2.7-0.5 3-1.5 2.7-3.2-1.4-2.7 0.7-2.3-0.6-0.6 1.9 1 1.2-0.6 1.4-3.1-0.6-3.3-5.6-0.7-3.6-1.8 0-2.4-4.6 1.1-3.4-0.3-1.5 3.5-1.6 1-5.8 6.8 1.3 0.6-1.2 4.6-0.5 6.1 1.8z',
		KH: 'M1589.8 410.6l1.8 4.3 0.1 7.7-9 5 2.8 3.8-5.9 0.5-4.6 2.6-4.8-0.9-2.6-3.4-3.5-6.6-2.1-7.8 3.1-5.3 7.1-1.2 5.3 0.9 5 2.5 2-4.4 5.3 2.3z',
		SV: 'M492.5 415.9l-0.7 1.5-3.3-0.1-2-0.6-2.2-1.3-3-0.4-1.5-1.4 0.3-0.9 2-1.6 1.2-0.7-0.3-0.8 1.4-0.4 1.6 0.6 1.1 1.2 1.6 1.1 0.1 0.8 2.5-0.7 1.2 0.4 0.7 0.7-0.7 2.6z',
		KM: 'M1233.2 581.3l-0.9-0.1-0.2-0.4 0-0.3 0.5 0.1 0.7 0.5-0.1 0.2z m3.7-1.9l0.2 1 0 0.7-0.1 0.2-0.2-0.3-0.4-0.3-0.1-0.2-0.3-0.1-0.6-0.4 0.1-0.1 0.5 0.2 0.3-0.1 0.2-0.4 0-0.2 0.3-0.1 0.1 0.1z m-5.7-1l-0.5-0.4-0.3-0.1-0.3-0.2-0.2-0.6 0.1-0.3 0-0.2 0.2-1.2-0.1-0.1 0.2-0.4 0.5-0.1 0.2 0.3-0.2 1.2 0.1 0.3 0.2 0.4 0.1 0.5 0.2 0.6-0.2 0.3z',
		ST: 'M1023.9 501.3l-0.2 0-0.2 0.3-0.2 0-0.1-0.4-0.2-0.8 0-0.3 0.4-0.5 0.3-0.1 0.3-0.3 0.4 0.1 0.2 0.4 0.1 0.3-0.1 0.4-0.2 0.3-0.3 0.4-0.2 0.2z m4.6-9.8l-0.1 0.3-0.2 0.1-0.3-0.1 0-0.3 0.2-0.1 0-0.3 0.2-0.2 0.3 0.1-0.1 0.5z',
		SK: 'M1098.1 187.7l-1.2 1.7-0.7 2.5-1 0.6-5.5-1.9-1.6 0.4-1 1.5-2.3 0.8-0.6-0.4-2.3 0.9-1.9 0.2-0.3 1.3-4.1 0.7-1.9-0.6-2.7-1.7-0.7-2.1 0.3-0.8 0.6-1.4 2.2 0.1 1.6-0.6 0.1-0.6 0.9-0.3 0.2-1.4 1.1-0.3 0.7-1.1 1.5 0 0.3 0.4 1.9-0.9 2.7 2.2 2.8-1.3 2.4 0.6 3.5-0.9 5 2.4z',
		KR: 'M1652.9 259.5l0-0.6 2.5 0.2 0.6-2.8 3.6-0.4 2-0.4 0-1.5 8.3 7.5 3.3 4.2 3.4 7.4-0.5 3.5-4.3 1.2-3.1 2.7-4.6 0.5-2.1-3.5-1.1-4.8-5.3-6.6 3.4-1.1-6.1-5.5z',
		SI: 'M1069.8 203.9l-3.9 1.7-0.3 2.5-1.7 0.7 0.1 1.7-2-0.1-1.8-1-0.8 1-3.6-0.2 1.1-0.5-1.4-2.7 0.4-3.1 4.2 0.5 2.4-1.5 4.4-0.1 0.9-1.1 0.8 0.1 1.2 2.1z',
		KP: 'm 1660.3,229.9 1.4,1.1 -2.2,-0.4 -1,2.2 -0.3,2.1 2.8,4.6 -1.9,1.4 -0.3,1.1 -0.9,1.9 -2.9,1.1 -1.4,1.7 1.3,2.7 -0.3,0.7 2.6,1.1 4.4,2.8 v 1.5 l -2,0.4 -3.6,0.4 -0.6,2.8 -2.5,-0.2 v 0.6 l -3.2,-1.2 -0.1,1.2 -1.3,0.5 -0.7,-1.2 -1.7,-0.6 -1.9,-1 0.1,-2.8 0.9,-0.8 -1,-1.1 -0.4,-3.5 -0.9,-1 -3.4,-0.7 -3.4,-1.7 2.1,-4.1 3.9,-3.4 1.1,-4.6 3.6,2 4.6,0.3 -2.8,-3.4 6.4,-2.7 v -3.6 z',
		KW: 'M1247.5 309.4l1.5 2.8-0.3 1.5 2.4 4.8-3.9 0.2-1.7-3.1-5-0.6 3.3-6.2 3.7 0.6z',
		SN: 'M918 408l0.2 4 1.1 3.7 2 1.8 0.5 2.4-0.3 2-0.8 0.4-3.1-0.5-0.4 0.7-1.2 0.1-4.1-1.5-2.7-0.1-10.4-0.3-1.5 0.8-1.9-0.2-3 1-0.8-4.9 5.1 0.1 1.4-0.9 1 0 2.1-1.5 2.4 1.3 2.4 0.2 2.5-1.5-1.1-1.8-1.9 1-1.7 0-2.2-1.6-1.8 0.1-1.3 1.6-6.1 0.1-2.3-5-2.7-2.2 2.5-1.3 2.8-4.5 1.4-3.3 2-2 2.7 0.5 2.8-1.4 3.1 0 2.7 1.8 3.6 1.7 3.4 4.8 3.6 4.4z',
		SL: 'M928.5 447.9l-2.6 3-2.6 3.4-0.3 1.9-1.4 2.1-1.5-0.5-4-2.6-3-3.4-0.9-2.4-0.7-4.7 3.1-2.9 0.6-1.7 1-1.4 1.6-0.2 1.3-1.2 4.5 0 1.6 2.3 1.2 2.7-0.2 1.9 0.9 1.7-0.1 2.3 1.5-0.3z',
		SC: 'M1249 562.1l-0.3 0.2-0.5 0-0.4 0.2-0.4 0 0-0.2 0.5 0 0.4-0.1 0.4-0.3 0.2 0 0.1 0.2z m-0.5-0.3l-0.2 0.1-0.4 0 0-0.2 0.6 0.1z m51.9-30.3l0.4 0.4-0.2 0.3-0.2-0.3-0.3-0.2 0.2-0.5 0.1 0.3z',
		KZ: 'M1338.3 160.5l4.4-0.3 9.2-5.8-0.8 2 8.4 4.7 18.3 15.6 1.1-3.2 8.4 3.5 6.2-1.6 3.3 1.1 4.1 3.6 4 1.2 3.3 2.7 6-0.9 4.4 3.8-1.9 4.2-3.8 0.6 2.5 6.2-1.6 2.9-10.8-2.1 1 11.3-2 1.4-9.1 2.5 8.8 11-2.9 1.6 1.7 3.7-3.5-1-3.4-2.3-7.9-0.6-8.6-0.2-1.6 0.7-8.2-2.7-2.5 1.4 0.5 3.7-9.2-2.2-3.1 0.9-0.3 2.8-2.6 1.2-5.4 4.4-0.9 4.6-2 0-2.3-3-6.7-0.2-2.5-5.2-2.6-0.1-1.5-6.4-7.6-4.6-8.6 0.5-5.7 0.9-6.6-5.7-4.8-2.4-9.2-4.5-1.1-0.5-12 3.7 6.2 23.4-2.6 0.3-4.8-5-3.9-1.8-5.6 1.3-1.8 2.2-0.6-1.6 0.6-2.6-1.5-2.2-6.5-2.2-3.7-5.7-3.2-1.6-0.6-2.1 5.1 0.6-1-4.6 4.1-1 4.7 0.9-0.7-6.1-1.9-3.9-5 0.3-4.7-1.5-5.1 2.7-4.4 1.4-2.8-1.1-0.2-3.2-4.3-4.2-3.6 0.2-5.3-4.2 1.7-4.8-1.8-1.2 2.2-6.9 6 3.6-0.6-4.5 8.1-6.7 7.6-0.2 12 4.3 6.6 2.5 4.4-2.6 7.7-0.1 7.3 3.2 0.8-1.9 7 0.3 0.2-2.9-9.4-4.3 3.5-3-1.5-1.6 4-1.6-5.1-4.2 1.4-2.1 17-2.1 1.7-1.5 10.9-2.3 3.1-2.5 9.1 1.3 4.4 6.3 4.3-1.5 7.1 2.1 1.1 3.3z',
		SA: 'M1240.5 315l5 0.6 1.7 3.1 3.9-0.2 2.7 5.6 2.9 1.4 1.2 2.3 4 2.7 0.7 2.6-0.4 2.2 0.9 2.1 1.8 1.8 0.9 2.1 1 1.6 1.8 1.3 1.5-0.5 1.3 2.5 0.3 1.4 2.7 6.6 16.9 3.2 1-1.4 3 4.6-2.6 12.8-16.3 6.4-15.9 2.5-5 2.9-3.5 6.7-2.6 1.1-1.5-2.1-2.1 0.3-5.5-0.7-1.1-0.6-6.4 0.1-1.5 0.6-2.4-1.6-1.3 3.1 0.8 2.7-2.4 2.1-0.9-2.8-1.8-1.9-0.5-2.6-3.1-2.3-3.3-5.4-1.9-5.2-4.1-4.4-2.5-1.1-4.1-6.1-0.9-4.4 0-3.8-3.6-7.2-2.8-2.5-3-1.3-2.1-3.7 0.2-1.4-1.8-3.4-1.7-1.4-2.5-4.8-3.8-5.1-3.1-4.4-2.7 0 0.5-3.5 0.1-2.3 0.4-2.6 6.2 1.1 2.1-2 1.1-2.3 4.1-0.9 0.7-2.2 1.6-1-6-6.5 10.4-3.2 0.9-1 6.8 1.8 8.6 4.5 16.8 12.9 10.2 0.5z',
		SG: 'm 1576.2725,494.53088 h 0.1 l 0.1,0.1 -0.1,0.1 -0.1,0.1 -0.1,0.1 v 0.1 h -0.1 -0.1 l -0.2,0.1 -0.1,0.1 h -0.1 v 0 0.1 h -0.1 -0.1 -0.1 v -0.1 0 l -0.1,-0.1 h -0.1 -0.1 l -0.2,-0.1 h -0.1 -0.1 -0.1 l -0.1,-0.1 0.1,-0.1 0.1,-0.2 0.1,-0.2 v -0.1 l 0.1,-0.1 h 0.1 0.1 0.1 l 0.2,-0.1 h 0.1 0.1 l 0.2,0.1 0.4,0.2 z',
		SE: 'M1088.2 87l-7 1.6-3.5 3.9 1.3 3.5-6.2 4.5-7.8 5-2.1 8.1 3.7 4.1 4.8 3.3-3.3 6.6-4.6 1.4-0.6 10-2.1 5.7-5.7-0.6-2.2 4.8-5.5 0.3-1.9-5.7-4.5-6.9-4.2-8.4 1.8-3.4 3.4-4 0.8-6.9-3.1-2.9-1-7.7 2.4-5.4 4.3 0.1 1.3-2.2-1.8-2 5.7-7.9 3.4-6.1 2.3-3.9 4 0 0.6-3.1 8 0.9-0.1-3.6 2.6-0.2 6 2.7 7.2 3.7 1.8 8.5 1.8 2.2z',
		SD: 'M1191 409.2l-0.7 5.5-2 6.4-3.3 3.1-2.3 5-0.5 2.6-2.6 1.8-1.5 6.7 0 0.8-0.8-0.2 0.1-3.2-0.8-2.2-2.9-2.5-0.9-4.6 0.6-4.8-2.6-0.4-0.4 1.4-3.4 0.4 1.5 1.8 0.5 3.9-3 3.5-2.7 4.6-2.9 0.7-4.8-3.7-2.1 1.3-0.5 1.8-2.9 1.3-0.2 1.3-5.6 0-0.8-1.3-4.1-0.3-2 1.1-1.6-0.5-2.9-3.8-1-1.7-4.1 0.9-1.5 2.9-1.3 5.8-2 1.2-1.7 0.7-0.5-0.3-1.9-1.9-0.4-2 0.8-2.6 0-2.7-3.3-4-0.7-2.7 0-1.6-2.1-1.9-0.1-3.7-1.3-2.5-1.9 0.4 0.5-2.4 1.4-2.6-0.7-2.7 1.8-2-1.2-1.5 1.3-3.9 2.5-4.8 4.8 0.5-1.1-25.5 0-2.7 6.4 0-0.5-12.8 22.3 0 21.5 0 22.1 0 2.1 6.3-1.2 1.1 1.2 6.7 2.5 7.6 2.2 1.6 3.2 2.4-2.7 3.6-4 1.1-1.7 2-0.3 4.2-2 9.5 0.7 2.5z',
		DO: 'M585.7 386l0.3-1.8-1.3-1.9 1.5-1.1 0.7-2.5-0.1-3.4 0.8-1.1 4.3 0 3.2 1.6 1.5-0.1 0.7 2.3 3.1-0.2-0.4 1.9 2.5 0.3 2.5 2.3-2.3 2.6-2.6-1.4-2.6 0.3-1.8-0.3-1.1 1.2-2.2 0.4-0.7-1.6-1.9 0.9-2.7 4.4-1.3-1-0.1-1.8z',
		DM: 'M642 401.7l0.5 0.1 0.2 0.5 0 0.6-0.1 0.8-0.1 0.2-0.2 0.1-0.4 0.2 0.1-0.4-0.1-0.2-0.1-0.7-0.3-0.5 0-0.3 0.1-0.3 0-0.3 0.2 0 0.2 0.2z',
		DJ: 'M1229.5 428.2l-1.9 3.5-1.3-1.2-1.3 0.5-3.2-0.1-0.2-2-0.5-1.8 1.8-3 1.9-2.8 2.4 0.6 1.7-1.6 1.4 2-0.1 2.6-3.1 1.6 2.4 1.7z',
		DK: 'M1046.1 147.7l-2.4 4.9-5.2-3.5-0.9-2.5 6.8-2 1.7 3.1z m-12.8 3.8l-2.9 0.9-3.7-0.8-2.1-3.4-0.4-6.1 0.6-1.7 1.3-1.8 4-0.3 1.6-1.7 3.6-1.7 0 3.1-1.2 2 0.7 1.6 2.6 0.9-1 2.3-1.4-0.6-3.1 4.3 1.4 3z',
		VG: 'M626.1 383.4l-0.4 0.2-0.1 0-0.3 0.2-0.1-0.1 0.1-0.3 0.6-0.1 0.2 0.1z',
		DE: 'M1053.9 158.9l1.4 3.1-1.2 1.7 1.9 2.1 1.5 3.3-0.2 2.2 2.4 3.9-2.2 0.6-1.3-0.7-1.1 1.2-3.5 1.2-1.7 1.6-3.4 1.3 1 1.8 0.7 2.7 2.6 1.5 3 2.6-1.6 2.9-1.7 0.8 1 4.1-0.4 1.1-1.7-1.3-2.4-0.2-3.5 1.1-4.4-0.3-0.6 1.7-2.7-1.7-1.4 0.3-5.5-1.9-1 1.3-4.2 0 0.4-4.5 2.4-4.2-7.2-1.2-2.4-1.6 0.2-2.7-1-1.4 0.4-4.2-1.1-6.5 2.9 0 1.2-2.3 0.9-5.6-0.9-2.1 0.8-1.3 4-0.3 1 1.3 3.1-3-1.3-2.3-0.4-3.4 3.7 0.8 2.9-0.9 0.3 2.3 4.9 1.4 0.1 2.2 4.7-1.2 2.6-1.6 5.6 2.4 2.4 1.9z',
		YE: 'M1283.8 394.9l-4 1.7-0.9 2.9 0 2.2-5.4 2.7-8.8 3-4.7 4.5-2.5 0.4-1.7-0.4-3.2 2.7-3.5 1.2-4.7 0.3-1.4 0.4-1.1 1.7-1.5 0.5-0.8 1.6-2.8-0.2-1.7 0.9-4-0.3-1.6-3.8 0-3.5-1-1.9-1.3-4.7-1.8-2.6 1.1-0.4-0.7-2.9 0.6-1.2-0.4-2.8 2.4-2.1-0.8-2.7 1.3-3.1 2.4 1.6 1.5-0.6 6.4-0.1 1.1 0.6 5.5 0.7 2.1-0.3 1.5 2.1 2.6-1.1 3.5-6.7 5-2.9 15.9-2.5 5.2 10.6 2.2 4.5z',
		DZ: 'M1031 264.6l-1 3.3 1 6.1-1.1 5.3-3.2 3.6 0.6 4.8 4.5 3.9 0.1 1.5 3.4 2.6 2.6 11.5 1.9 5.7 0.4 3-0.8 5.2 0.4 3-0.6 3.5 0.6 4-2.2 2.7 3.4 4.7 0.2 2.7 2.1 3.6 2.5-1.2 4.5 3 2.5 4-18.8 12.3-16 12.6-7.8 2.8-6.2 0.7-0.1-4.1-2.6-1.1-3.5-1.8-1.3-3-18.7-14-18.6-14-20.5-15.6 0.1-1.2 0.1-0.4 0.1-7.6 8.9-4.8 5.4-1 4.5-1.7 2.1-3.2 6.4-2.5 0.3-4.8 3.1-0.6 2.5-2.3 7.1-1.1 1-2.5-1.4-1.4-1.9-6.8-0.3-3.9-1.9-4.1 5.1-3.5 5.8-1.1 3.3-2.6 5.1-2 9-1.1 8.8-0.5 2.7 0.9 4.9-2.5 5.7-0.1 2.2 1.5 3.6-0.4z',
		US: 'M118.8 379.3l-1.1 1.1-1.2-0.9 0.6-1.8-0.4-2.4 0.5-0.7 1.2-1-0.1-1.3 0.4-0.6 0.4 0.1 1.9 1.1 0.9 0.6 0.7 0.8 0.9 2.3-0.2 0.3-2.5 1.4-2 1z m-0.7-10l-2 0.4-0.6-1.3-0.5-0.5 0-0.4 0.7-0.6 1.8 0.6 1.2 1-0.6 0.8z m-3-3.4l-0.3 0.7-3-0.2 0.6-0.8 2.7 0.3z m-4.7-1l-0.4 0.4-0.4-0.1-1.9-0.2-0.3-1.5-0.2-0.2 1.7-0.9 0.4 0.4 1.1 2.1z m-8.4-4.2l-0.8 0.6-1.6-1.1 0.4-0.5 1-0.6 1.3 0.1-0.3 1.5z m437.5-166.2l-6.1 2-4.7 2.5-4.6 2.7-0.5 0.9 5.7-1.3 2.1 2.1 4.6-1.5 4.9-2.1 5.4-2.1-3.1 3.3 2.5 0.8 2.5 2.4 5.1-1.4 5.1-0.5 0.3 1.8 1.5 0.2 1.2 0.2 1.5 2.5-4.7 0.6-0.1 0-3.7-0.7-4.5 1.2-3.7 0.6-4.7 4.1-3 2.3 0.4 0.7 5.5-4.1 0.7 0-4.7 4.9-2.9 4.4-2.5 3.6-0.6 3.1-0.8 1.5-0.6 1.7 0.1 3.3 0.3 0.5 1.8-0.1 1.6-0.7 1.4-0.8 3.3-3.1 1.8-4.2-0.1-3.9 1.4-2.7 2.6-3.1 2.1-2.2 2.7-1.5-0.4 2.1 2.2-3.1 1.3-0.6 1.7-2.4 3.8 1.3 2.8 2.4-0.8 2.9-1.6 2.9-3.8 2.5-0.4 1.6 1 0 4.3-2.7 1.6 0.6-0.5 3.7-0.7 2.6-3.7 3.5-2 2.2-2.7 2.4 2.7 1.3 2.5 0.4 4-0.9 3.7-1.7 3-0.9 4.6-1.8 5.8-3.8 0.1-0.6 0.3-1.9 2.7-0.8 3.9 0.3 4 0.5 4.6-2.1 0.6-2.5-0.2-0.9 6.8-4.4 2.7-1.1 7.8-0.1 9.3 0 1.1-1.5 1.7-0.3 2.5-1 2.8-2.9 3.2-4.9 5.5-4.7 1.1 1.6 3.7-1 1.6 1.8-2.9 8.5 2.2 3.6 0.2 2.1-6.4 3-6 2.2-6 1.9-4 3.8-1.3 1.4-1.2 3.4 0.7 3.3 2.1 0.2 0.2-2.3 1.1 1.4-1 1.8-3.8 1-2.5-0.1-4.2 1.1-2.3 0.3-3.1 0.3-5 1.9 8.1-1.2 1.1 1.2-7.9 1.9-3.3 0 0.4-0.8-2.1 1.8 1.4 0.3-2.5 4.6-5.3 4.9 0.1-1.7-1.1-0.3-1.2-1.6 0 3.5 1 1.1-0.6 2.4-2.4 2.5-4.5 5.1-0.4-0.2 2.9-4.4-2-2.4 1-5.4-1.9 2.8 0 4.1-3.2-1 3 2-1.5 6.1 1.4 0.5 0 2.2-1 6.4-4.6 4.7-6.1 1.9-4.4 3.8-2.8 0.4-3.4 2.4-1.3 2.1-6.9 4.2-3.8 3.1-3.5 3.8-1.9 4.5 0 4.5 0.6 5.5 1.5 4.5-0.5 2.8 1.3 7.4-1 4.4-0.6 2.5-2 3.9-1.8 0.8-2.6-0.8-0.4-2.8-1.8-1.5-2-5.5-1.6-4.9-0.4-2.5 2-4.3-0.8-3.5-3.1-5.4-1.9-1-6.1 3-0.9-0.4-2-3-3-1.6-6.4 0.9-4.6-0.8-4.3 0.5-2.5 1 0.6 1.7-0.7 2.6 0.8 1.3-1.2 0.8-1.8-0.9-2.3 1.2-3.9-0.2-3.3-3.4-4.9 0.8-3.6-1.5-3.5 0.5-5 1.5-6.1 4.7-6.1 2.8-3.7 3-1.9 2.9-1 4.5-0.4 3 0.6 2.2-2.2 0.2-3.6-1.4-3.9-2-0.9-3-0.2-4.5-2.4-3.6-0.9-3.8-1.6-4.4-3.2-2.6-4.5 0.2-4.8 5-4-1.9-2.3-1.9-0.4-3.6-0.8-3.3-2.4-2.8-2.1-2.1-1.3-2.3-9.4 0-0.8 2.7-4.3 0-10.8 0-10.9-4.5-7-3.1 0.9-1.3-7.1 0.7-6.3 0.5 0.3-3.2-2.1-3.7-2.2-0.8 0.1-1.8-2.9-0.4-1.2-1.7-4.8-0.6-0.9-1.1 0.8-3.5-2.5-6.4-0.5-8.9 0.9-1.5-1.3-2.1-1.5-5.4 1.8-5.2-0.9-3.5 3.9-5.3 2.8-5.4 1.1-4.9 5.5-6 4-5.7 4-5.7 4.3-8.5 1.8-5.3 0.4-2.9 1.4-1.3 5.8 2.2-1 5.9 2.2-1.7 2.5-5.1 1.6-5.1 14.1 0 14.7 0 4.8 0 15.1 0 14.7 0 14.8 0 14.9 0 16.8 0 17 0 10.2 0 1.3-2.4 1.7 0-0.9 3.4 1 1 3.3 0.4 4.6 1 3.9 1.9 4.4-0.8 5.4 1.7z m-264.5-55.9l-7 2.3-0.8-1.6 2.3-2.8 6.4-2.1 3.5-0.9 2.6 0.4 0 1.9-7 2.8z m-39-16.6l-3.9 0.9-1.7-1.1-0.8-1.6 5.7-1 3 0.6-2.3 2.2z m1.2-22.4l1.2 1 3.5-0.5 1.6 1.5 3.3 0.7-1.2 0.7-4.9 1.2-1.7-1.3-0.3-1-4.3 0.3-0.3-0.5 3.1-2.1z m172.8-33l-24.6 20.4-35.6 32.7 4.2 0.2 2.8 1.6 0.5 2.6 0.3 3.8 7.6-3.3 6.5-1.9-0.6 3.1 0.8 2.4 1.6 2.7-1.1 4.2-1.4 6.9 4.6 3.8-3.2 3.8-5.1 2.9-0.6-2.2-2.5-2 3.3-5.2-1.6-4.9 2.7-5.6-4.1-0.4-7.1-0.1-3.8-1.8-3.3-6.1-3.3-1.1-5.7-2.1-6.8 0.5-6-2.7-2.7-2.5-6.3 1.2-3.5 4.1-2.9 0.4-6.6 1.2-6.2 2-6.4 1.3 3.2-3.5 8.4-5.8 6.8-1.8 0.4-1.4-9.4 3.2-7.4 3.9-11.2 4.2 0.2 2.9-9 4.2-7.7 2.5-6.6 1.9-4 2.6-10.6 3.1-4.5 2.8-8.2 2.6-2.7-0.4-6.2 1.6-7 2.1-6.1 2-10 1.8 0.4-1.1 8.2-2.8 6.6-1.9 8.6-3.3 6.5-0.6 5-2.5 10.4-3.6 2.3-1.2 5.7-2.1 5.8-4.5 6.2-3.5-7.3 1.8-0.3-1.1-4.9 2.2 0.4-3-3.6 2.1 1.6-2.9-7.3 2.3-2.8 0 3.7-3.5 3.3-2.2-0.4-2.1-7.2 1.2-0.6-2.8-1.3-1.4 4-3.3-0.4-2.5 5.9-3.3 7.7-3.3 5.3-2.9 4.1-0.4 1.8 0.9 7.1-2.8 2.5 0.5 5.6-1.8 2.5-2.6-1.1-1 6-2.2-2.8 0.1-6.2 1.2-2.9 1.3-1.8-1.3-6.9 0.7-4.6-1.4 1.2-2.3-1-3.2 9.2-2.4 13.2-2.7 3.5 0-4.3 2.8 9.2-0.2 1.2-3.5-2.3-2.1 0.8-2.8-0.7-2.3-3.3-1.7 6.5-2.9 7.5-0.2 8.8-2.4 4.8-2.6 7.9-2.6 4.8-0.6 11.2-2.4 3.1 0.4 10.4-2.8 4.4 1.1-0.5 2.4 3.3-1 6.3 0.3-1.9 1.2 4.9 0.9 4.9-0.5 6.2 1.6 7.2 0.6 2.2 0.6 6.6-0.8 4.1 1.6 3.5 0.7z',
		UY: 'M699.7 718.6l-1.6 4.1-5.4 3.5-4.2-1.3-2.8 0.7-5.5-2.7-3.6 0.2-3.9-3.6-0.4-4.1 0.9-1.4-1.2-6.4 0.4-6.6 0.5-5.2 3.4-0.7 6.3 5 1.9-0.2 6.3 4.1 4.8 3.6 3.8 4.3-1.8 3.1 2.1 3.6z',
		YT: 'M1240.2 583.1l0.2 0.3 0.5 0.2 0 0.3-0.2 0.2 0.1 0.2-0.3 0.6 0.1 0.2-0.3 0.1-0.2-0.3 0-0.3 0.2-0.2-0.2-0.7-0.1-0.1-0.1-0.2 0.3-0.3z',
		LB: 'M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z',
		LC: 'M643.7 413.8l-0.2-0.2-0.4-0.2-0.1-0.2 0-0.6 0.1-0.2 0.7-1.1 0.3 0.2 0 0.7-0.1 0.8-0.1 0.4-0.2 0.4z',
		LA: 'M1589.8 410.6l-5.3-2.3-2 4.4-5-2.5 1.5-2.9-0.4-5.4-5.3-5.6-1.3-6.4-5-5.2-4.3-0.4-0.8 2.2-3.2 0.2-1.9-1.1-5.3 3.8-1-5.8 0.4-6.7-3.8-0.3-0.9-3.9-2.7-2 0.8-2.3 4.1-4.2 0.8 1.5 3 0.2-2-7.4 2.7-0.9 4 5.1 3.5 5.8 6.8 0 3 5.6-3.3 1.7-1.2 2.3 7.3 3.9 5.7 7.6 4.4 5.6 4.9 4.5 2 4.5-0.2 6.4z',
		TV: 'M1998.9 556.6l0-0.2 0.1 0 0 0.1-0.1 0.1z',
		TW: 'M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-0.1 3.9-1.2 10.3z',
		TT: 'M642.8 432.2l-0.2 0.5-0.3 0.4-0.2 0.1-0.1 0.4 0.2 0.6-0.2 0.1 0 0.7 0.2 0.3 0.2 0.2-0.2 0.2-0.1 0.3 0 0.7-0.2 0.1-0.4 0.2-0.5 0.1-0.3 0-0.5 0.1-0.5-0.1-0.4 0.1-0.3-0.1-0.5 0.2-0.4-0.2-0.6 0-0.3 0.2-0.3-0.1 0.5-0.2 0.3-0.3 0.4-0.1 0.4-0.3 0.2-0.3 0.6 0.1 0.3-0.4-0.2-0.8 0.2-0.4 0-0.5 0-0.2-0.3-0.4-0.3-0.1-0.4-0.1-0.1-0.1 0.4-0.3 1.1-0.1 0.2-0.2 1.1 0 0.1-0.1 1.2-0.2 0.2 0z m2.4-3.2l-0.1 0.5-0.3 0.1-0.4 0.3-0.2 0-0.7 0.4-0.2-0.2 0.3-0.3 0.7-0.5 0.9-0.3z',
		TR: 'M1201.7 235.3l5.5-0.3 5.6 3.2 1.3 2.2 0.1 3.1 4.2 1.6 2.4 1.8-3.3 1.9 2.9 7.3-0.7 2 3.8 5.1-2.4 1.1-2.1-1.6-6.3-0.9-2.1 1-5.9 1-2.9-0.1-5.7 2.4-4.4 0-3-1.2-5.6 1.8-1.9-1.2 0.2 3.5-1.2 1.4-1.3 1.4-2.3-2.9 1.7-2.4-3.2 0.6-4.6-1.5-3.2 3.7-8 0.7-4.7-3.4-5.7-0.2-1 2.6-3.6 0.8-5.4-3.4-5.8 0.1-3.8-6.4-4.2-3.5 2-5-3.6-3.1 5.1-6.1 8-0.2 1.6-4.9 10 0.9 5.6-4.1 5.8-1.8 8.5-0.2 9.8 4.5 7.9 2.5 5.8-1 4.6 0.6 5.5-3.4z m-79.8 4.6l1.2-0.7 1.1-4-2.7-1.7 5-2 4.6 0.8 0.9 2.5 4.8 2-0.7 1.6-6.2 0.3-2 2-3.9 3.4-2-2.9-0.1-1.3z',
		LK: 'M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z',
		LV: 'M1112.8 136.5l2.5 1.3 1 2.9 2.1 3.6-4.6 2.3-2.7 1-5-2.9-2.5-0.4-0.9-1.2-4.5 0.6-7.9-0.4-5.1 1.8-0.5-4.5 1.7-3.8 4.1-2 4.4 4.5 3.7-0.2 0.1-4.6 3.8-1 2.1 0.7 4.4 2.2 3.8 0.1z',
		TO: 'M14.7 639.5l-0.5-0.3 0-0.2 0.3-0.2 0.2 0.7z m-2.8-2.1l0.3 0 0.4 0.3 0.3 0.1 0.2-0.4 0.3 0.3-0.3 0.3 0.1 0.2-0.1 0.2-0.2-0.1-0.3-0.3-0.7-0.2 0-0.4z m-0.8-8.6l-0.2 0.1-0.1-0.5 0.2 0.1 0.1 0.3z m4.4-7.5l-0.5 0.3-0.2 0-0.1-0.1 0.3-0.5 0.3 0.1 0.2 0.2z m-14.1-19.3l-0.1 0.1-0.3-0.1 0.1-0.2 0.3 0 0 0.2z',
		LT: 'M1111.1 147.6l1 2.7-3.6 2-0.5 3.4-4.8 2.3-4.7 0-1.4-1.9-2.5-0.7-0.6-1.5 0.2-1.7-2.2-0.9-5.1-1.1-1.7-5.1 5.1-1.8 7.9 0.4 4.5-0.6 0.9 1.2 2.5 0.4 5 2.9z',
		LU: 'M1016.9 185.4l-1.4 0.1-1.1-0.5 0.4-3.5 1.3-0.2 1 1.4-0.2 2.7z',
		LR: 'M938.6 452.5l-0.2 1.8 0.5 3.1-1.2 2.9 1.6 1.8 1.8 0.4 2.4 2.7 0.2 2.5-0.6 0.8-0.4 5.3-1.5 0.1-5.8-3.1-5.2-4.9-4.8-3.5-3.8-4.1 1.4-2.1 0.3-1.9 2.6-3.4 2.6-3 1.3-0.2 1.4-0.7 2.4 3.9-0.4 2.6 1.1 1.4 1.6 0 1.1-2.6 1.6 0.2z',
		LS: 'M1139.1 697.9l-2 0.7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1-1.1 2z',
		TH: 'M1577.5 410.2l-5.3-0.9-7.1 1.2-3.1 5.3 2.1 7.8-5.3-3-4.8 0.2 0.3-5.1-4.9 0 0.2 7.1-2.2 9.4-1.4 5.7 0.7 4.6 3.7 0.2 2.7 5.9 1.3 5.5 3.4 3.7 3.4 0.7 3.1 3.4-1.7 2.6-3.7 0.8-0.6-3.3-4.8-2.8-0.9 1.1-2.3-2.4-1.2-3.2-3.2-3.6-2.9-3.1-0.7 3.8-1.3-3.6 0.4-4 1.2-6.1 2.2-6.6 2.6-6-2.7-5.9-0.2-3-1-3.6-4.3-5.1-1.8-3.2 1.8-1.2 1.4-5.5-2.9-4.3-4.1-4.7-3.5-5.6 2.2-1.2 1.5-6.9 3.9-0.3 2.8-2.8 3-1.5 2.7 2 0.9 3.9 3.8 0.3-0.4 6.7 1 5.8 5.3-3.8 1.9 1.1 3.2-0.2 0.8-2.2 4.3 0.4 5 5.2 1.3 6.4 5.3 5.6 0.4 5.4-1.5 2.9z',
		TG: 'M991.4 431.2l-0.7 3.4 1.7 1.9 2 2.2 0.2 3.2 1.2 1.3-0.3 14.8 1.4 4.4-4.5 1.4-1.3-2.3-1.5-4.1-0.5-3.2 1.3-5.7-1.4-2.4-0.6-5 0-4.7-2.3-3.3 0.4-2 4.9 0.1z',
		TD: 'M1119.2 376.1l1.1 25.5-4.8-0.5-2.5 4.8-1.3 3.9 1.2 1.5-1.8 2 0.7 2.7-1.4 2.6-0.5 2.4 1.9-0.4 1.3 2.5 0.1 3.7 2.1 1.9 0 1.6-3.6 1.1-2.8 2.6-4 7-5.2 3-5.5-0.4-1.6 0.6 0.6 2.2-2.9 2.3-2.4 2.5-7.1 2.4-1.4-1.4-1-0.2-1 1.7-4.6 0.5 0.8-1.8-1.8-4.4-0.8-2.6-2.5-1.1-3.4-3.8 1.2-3 2.6 0.6 1.6-0.4 3.2 0-3.2-5.8 0.2-4.3-0.5-4.2-2.3-4.1 0.6-3.1-3.7-0.1 0-4.1-2.4-2.4 2.3-8.5 7-6 0.2-8.4 1.8-13 1.2-2.8-2.4-2.2-0.1-2-2.2-1.7-1.6-10 5.5-3.5 22.5 12.3 22.6 12.3z',
		TC: 'M587.7 361.6l0.7 0 0.3 0.4-0.3 0-0.3-0.1-0.5 0.1-0.1-0.3 0.2-0.1z m-2.7-0.1l0.3 0.4 0.6-0.1-0.2 0.2-0.6 0-0.4-0.2 0.3-0.3z m2.2-0.6l0 0.5-0.5-0.2-0.1-0.3 0.1-0.1 0.5 0.1z',
		BQSA: 'M632.8 388.7l-0.1 0 0.1-0.2 0.1 0.1-0.1 0.1z',
		LY: 'M1122.6 299.1l-1.7 3.1 1 2.8-1.1 3.9 2 5.2 1.3 22.8 1 23.7 0.5 12.8-6.4 0 0 2.7-22.6-12.3-22.5-12.3-5.5 3.5-3.8 2.4-3.2-3.5-8.8-2.8-2.5-4-4.5-3-2.5 1.2-2.1-3.6-0.2-2.7-3.4-4.7 2.2-2.7-0.6-4 0.6-3.5-0.4-3 0.8-5.2-0.4-3-1.9-5.7 2.6-1.4 0.4-2.8-0.6-2.6 3.6-2.5 1.6-2.1 2.6-1.8 0.1-4.9 6.4 2.2 2.3-0.6 4.5 1.1 7.3 2.9 2.8 5.7 4.9 1.2 7.8 2.7 6 3.2 2.5-1.7 2.5-2.9-1.6-4.9 1.5-3.2 3.7-3 3.7-0.8 7.4 1.3 2 2.8 2 0.1 1.8 1.1 5.4 0.7 1.5 2.1z',
		VC: 'M642.2 417.4l-0.1 0.1-0.5-0.3 0-0.4 0.2-0.3 0.2-0.5 0.4 0 0.1 0.4-0.1 0.8-0.2 0.2z',
		AE: 'M1296.2 336.7l1.3 5.1-2.8 0 0 4.2 1.1 0.9-2.4 1.3 0.2 2.6-1.3 2.6 0 2.6-1 1.4-16.9-3.2-2.7-6.6-0.3-1.4 0.9-0.4 0.4 1.8 4.2-1 4.6 0.2 3.4 0.2 3.3-4.4 3.7-4.1 3-4 1.3 2.2z',
		VE: 'M648.7 448.1l-4.7 3.8-0.5 2.3 1.8 2.4-1.4 1.2-3.5 1 0 3-1.6 1.8 3.7 4.8 0.7 1.8-2.1 2.5-6.4 2.4-4.1 1-1.7 1.5-4.5-1.6-4.1-0.8-1.1 0.6 2.5 1.6-0.3 4.3 0.7 4.1 4.8 0.5 0.3 1.4-4.1 1.8-0.7 2.7-2.4 1.1-4.2 1.5-1.1 2-4.4 0.4-3.1-3.4-1.6-6.4-1.5-2.3-2-1.4 2.9-3.2-0.2-1.4-1.5-1.9-1.1-4.3 0.6-4.6 1.3-2.2 1.2-3.4-2-1.1-3.2 0.7-4.1-0.3-2.3 0.7-3.8-5.6-3.3-0.8-7.3 0.6-1.2-2.2-1.4-0.5-0.1-1.4 0.7-2.4-0.3-2.5-1.2-1.5-0.6-2.9-2.9-0.4 1.8-3.8 0.9-4.6 1.8-2.4 2.3-1.8 1.6-3.2 3.7-1.1-0.2 1.5-3.4 0.8 1.7 2.9-0.3 3.4-2.7 3.7 1.9 5.1 2.5-0.4 1.5-4.7-1.7-2.2 0-4.9 7.2-2.6-0.6-3 2.1-2.1 1.7 4.6 4 0.1 3.4 3.5 0.2 2.2 5 0 6.1-0.6 3.1 2.8 4.2 0.8 3.3-2 0.1-1.6 7.1-0.4 6.7-0.1-4.9 1.9 1.8 3.1 4.5 0.4 4.2 3.2 0.7 5.1 2.9-0.1 2.2 1.5z',
		AG: 'M640.7 391.9l0.6 0.3-0.2 0.3-0.2 0-0.7 0.1-0.2-0.1 0-0.5 0.3-0.1 0.1-0.3 0.2 0 0.1 0.3z m0-3.7l0.2 0 0.2 0.2 0.1 0.4-0.1 0.3-0.2 0.1-0.1-0.2-0.3-0.2 0-0.5 0.2-0.1z',
		AF: 'M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z',
		IQ: 'M1223.5 263.2l4.7 7.6 3.8 2 0.9 3.7-2.3 2.2-0.5 5 4.6 6.1 7.1 3.6 3.5 4.8-0.2 4.7 1.7 0 0.5 3.4 3.5 3.4-3.3-0.3-3.7-0.6-3.3 6.2-10.2-0.5-16.8-12.9-8.6-4.5-6.8-1.8-3.1-7.8 11-6.7 1-7.7-1.2-4.7 2.7-1.6 2.1-4 2.1-1 6.3 0.9 2.1 1.6 2.4-1.1z',
		VI: 'M624.5 387.8l0.3 0.3-1.1 0.2-0.1-0.5 0.7-0.2 0.2 0.2z m0.7-3.8l-0.2 0.2-0.5 0 0-0.2 0.3-0.1 0.4 0.1z m-1.4-0.2l0.4 0.3-0.2 0.2-0.3-0.2-0.5 0 0.2-0.2 0.4-0.1z',
		IS: 'M924.8 84.5l-1.4 3.6 4.4 3.8-6.1 4.3-13.1 3.9-3.9 1.1-5.6-0.9-11.9-1.8 4.8-2.5-9-2.7 7.9-1.1 0.1-1.7-8.8-1.3 3.6-3.7 6.6-0.8 6 3.8 7-3 5.1 1.5 7.3-2.9 7 0.4z',
		IR: 'M1229 253.2l1.8-0.2 5.3-4.7 1.9-0.5 1.9 1.9-1.2 3.1 3.9 3.4 1.3-0.4 2.5 4.8 5.3 1.3 4.3 3.2 7.7 1.1 8-1.7 0.2-1.5 4.4-1.2 3-3.7 3.6 0.2 2-1.2 3.9 0.6 6.6 3.3 4.3 0.7 7.3 5.6 4 0.3 1.7 5.3-0.6 8-0.5 4.7 2.5 1-1.6 3.5 2.7 5.1 1.2 4.1 4.3 1.1 1.1 4.1-3.9 5.8 3.2 3.4 2.8 3.9 5.7 2.8 1 5.6 2.7 1.1 0.9 2.9-7.5 3.4-1.1 7.4-10.6-1.9-6.2-1.5-6.3-0.8-3.3-7.9-2.8-1.1-4.1 1.1-5.1 3.1-7-2.1-6.1-5-5.5-1.8-4.4-6.1-5.2-8.5-2.8 1-3.7-2.1-1.7 2.5-3.5-3.4-0.5-3.4-1.7 0 0.2-4.7-3.5-4.8-7.1-3.6-4.6-6.1 0.5-5 2.3-2.2-0.9-3.7-3.8-2-4.7-7.6-3.8-5.1 0.7-2-2.9-7.3 3.3-1.9 1.2 2.5 3.2 2.9 3.8 0.9z',
		AM: 'M1230.8 253l-1.8 0.2-2.8-3.7-0.2-1-2.3 0-1.9-1.7-1 0.1-2.4-1.8-4.2-1.6-0.1-3.1-1.3-2.2 7-1 1.4 1.6 2.2 1.1-0.7 1.6 3.2 2.2-1.1 2.1 2.6 1.7 2.5 1 0.9 4.5z',
		AL: 'M1088 228l0.4 1.2 1.4-0.6 1.2 1.7 1.3 0.7 0.6 2.3-0.5 2.2 1 2.7 2.3 1.5 0.1 1.7-1.7 0.9-0.1 2.1-2.2 3.1-0.9-0.4-0.2-1.4-3.1-2.2-0.7-3 0.1-4.4 0.5-1.9-0.9-1-0.5-2.1 1.9-3.1z',
		AO: 'M1121.2 572l0.6 2-0.7 3.1 0.9 3-0.9 2.4 0.4 2.2-11.7-0.1-0.8 20.5 3.6 5.2 3.6 4-10.4 2.6-13.5-0.9-3.8-3-22.7 0.2-0.8 0.5-3.3-2.9-3.6-0.2-3.4 1.1-2.7 1.2-0.5-4 0.9-5.7 2-5.9 0.3-2.7 1.9-5.8 1.4-2.6 3.3-4.2 1.9-2.9 0.6-4.7-0.3-3.7-1.6-2.3-1.5-3.9-1.3-3.8 0.3-1.4 1.7-2.5-1.6-6.2-1.2-4.3-2.8-4.1 0.6-1.2 2.3-0.9 1.7 0.1 2-0.7 16.7 0.1 1.3 4.7 1.6 3.9 1.3 2.1 2.1 3.3 3.8-0.5 1.8-0.9 3.1 0.9 0.9-1.6 1.5-3.7 3.5-0.3 0.3-1.1 2.9 0-0.5 2.3 6.8-0.1 0.1 4.1 1.1 2.4-0.9 3.9 0.4 4 1.8 2.4-0.4 7.6 1.4-0.6 2.4 0.2 3.5-1 2.6 0.4z m-65.9-33l-1.5-4.8 2.3-2.8 1.7-1.1 2.1 2.2-2 1.4-1 1.6-0.2 2.8-1.4 0.7z',
		AS: 'M27.7 593.3l-0.3 0.4-0.2 0.3-0.2 0.1-0.4-0.3 0.2-0.2 0.3 0 0.1-0.2 0.5-0.1z m6.6 0l-0.5 0.1-0.1-0.2 0.4-0.1 0.2 0.2z',
		AR: 'M669.1 851.7l-3-0.2-5 0-6-13.6 3.1 2.8 4.3 4.6 7.8 3.7 7.3 1.5-0.8 3-4.4 0.3-3.3-2.1z m-30.5-207l11.3 10.4 4.6 1 7.3 4.8 5.9 2.5 1.1 2.8-4.2 9.8 5.8 1.7 6.3 1 4.2-1 4.3-5 0.3-5.6 2.6-1.3 3.2 3.8 0.4 5.1-4.2 3.5-3.3 2.6-5.3 6.3-6 8.7-0.5 5.2-0.4 6.6 1.2 6.4-0.9 1.4 0.4 4.1 0.3 3.4 7.8 5.5 0.2 4.4 3.9 2.8 0.3 3.1-3.3 8.2-7 3.5-10.2 1.3-6-0.7 2.1 3.9 0.1 4.7 1.8 3.2-2.5 2.3-5.1 0.9-5.6-2.4-1.5 1.7 2.5 6.3 4 1.9 2.3-2 2.5 3.3-4.2 2-2.9 4 1.2 6.3-0.1 3.4-4.8 0-3 3.2 0.1 4.8 6.5 4.6 5.2 1.2 0.2 5.7-4.6 3.5-0.6 7.3-3.5 2.4-0.9 2.9 4.2 6.5 4.6 3.5-2.1-0.3-4.9-1-12.1-0.8-3.5-3.6-1.9-4.6-3.1 0.4-2.6-2.3-3.1-6.5 2.7-2.8 0.1-3.9-1.8-3.2 0.7-5.4-1.1-8.3-1.8-3.7 1.8-1.2-1.4-2.4-2.8-1.2 0.8-2.7-3.1-2.4-3.7-7.3 1.7-1.3-3.3-7.8-0.8-6.5-0.2-5.7 2.5-2.3-3.3-6.3-1.6-5.8 3-4.2-1.4-5.4 1.6-6.2-1.4-5.9-1.6-1.2-4.9-11.1 2.1-6.6-1.7-6.2 0.9-5.9 2.6-6 3.3-4-2-2.5 0.8-2.1-1.6-10.7 5.6-3.1 1.2-6.7-0.9-1.6 4-5.8 7.5 1.6 3.7 4.6 1.6-5.2 6.4 0.3 1 1.4z',
		AU: 'M1743 763.6l3.7 2.2 3.3-0.9 4.9-1.2 2.8 0.4-4.5 7.6-3.3 2.1-4 5.2-0.6-1.8-6.6 4.4-0.8-0.3-3-0.2 0.5-5.4 2-4.2 0.6-5.6 2-2.9 3 0.6z m50.5-173.4l1.2 5 4-2.4 1.4 2.7 2.3 2.5-1.1 2.9 0.2 5.5 0.2 3.2 1.3 0.8 0.4 5.5-1.2 3.3 0.8 4.3 5.4 3.4 3.2 3 3.2 2.8-1.1 1.6 2.3 4 0.5 7 2.6-1.4 1.5 2.7 1.6-0.9-0.7 6.8 2.9 3.9 1.9 2.4 2.8 5.2 0 5.2-1 3.7-1.8 3.9 0.7 5.5-2.5 5.7-2.1 3-3.8 5.7-1.5 3.7-3.1 4.6-5 5.8-5.5 3.2-4.4 4.9-3.3 3.2-4.4 5.5-3.7 3.2-3.9 4.8-3.1 4.4-0.8 2.1-4.3 2.2-6.1 0.2-6.3 2.7-3.8 2.4-4.8 2.8-2.7-2.9-2.6-1.1 2.6-3.3-3.5 1.2-7.2 4.6-3.6-1.7-2.4-1-2.8-0.5-4.1-1.8-1.3-4 1.5-4.8 0.4-3.3-1.4-2.6-4.7-0.7 3.2-3.2 0.9-4.7-4.7 4.4-5.3 1.2 4.5-3.5 2.5-3.7 3.5-3.2 1.6-4.7-6.8 5.4-4.3 2.2-4.3 5.1-3-2.6 1.7-3.4-1.4-4.7-1.8-2.4 1.6-1.5-5.3-3.9-3.8-0.1-4-3.2-9.9 0.6-7.9 2.3-6.9 2.2-5-0.4-7 3.3-5.3 1.4-2.3 3.4-3 2.6-4.7 0.2-3.6 0.5-4.2-1.1-4.2 0.7-3.8 0.3-4.5 3.4-1.5-0.3-3.4 1.8-3.4 2-3.8-0.2-3.5 0-4.1-4.1-2.4-1.2 1.5-3.7 2.9-0.9 1.5-1.4 0.6-2.3 2.3-4.5 0.7-3.8-0.7-6.5 0.2-3.7 1.4-3.6-0.9-4.2 0.3-1.9-1.7-2.6 0.7-5-1.9-5.1-0.1-2.7 1.8 2.8-0.5-6 2.3 1.9 1.1 2.5 0.6-3.3-1.6-5.1-0.1-2-0.8-1.9 1.3-3.7 1.5-1.6 1.3-3.2 0.1-3.8 3.1-4.6-0.4 4.9 3.1-4.4 4.9-2.2 3.2-2.7 4.7-2.4 2.6-0.5 1.4 0.8 4.8-2.4 3.5-0.7 1.1-1.4 1.5-0.6 3.1 0.2 6.2-1.9 3.5-2.9 2-3.4 3.9-3.2 0.7-2.6 0.7-3.5 4.9-5.5 1.4 5.6 2.6-1.3-1.5-3 2.3-3.1 2.2 1.4 1.5-4.9 3.5-3.2 1.8-2.5 2.9-1.1 0.4-1.8 2.3 0.7 0.4-1.6 2.6-0.9 2.8-0.9 3.7 3 2.6 3.8 3.5 0 3.5 0.6-0.7-3.5 3.5-5.1 2.7-1.7-0.6-1.6 2.9-3.7 3.7-2.3 2.7 0.8 4.9-1.2 0.3-3.3-3.9-2.1 3.1-0.9 3.6 1.6 2.7 2.6 4.5 1.6 1.7-0.6 3.3 2 3.5-1.9 2 0.6 1.5-1.3 2.2 3.2-2 3.5-2.5 2.6-1.9 0.2 0.3 2.5-2.2 3.2-2.5 3.2 0.2 1.8 3.8 3.6 4 2 2.5 2.2 3.3 3.8 1.6 0 2.6 1.7 0.5 2 4.9 2.1 4.1-2.2 1.8-3.4 1.7-2.9 1.3-3.5 2.6-5.1-0.2-3.1 0.7-1.9-0.1-3.6 1.4-4.9 1.3-1.3-0.6-2.1 1.8-3.4 1.5-3.5 0.4-1.9 2.3-2.4 1.3 3.2-0.1 4 1.3 0.8-0.1 2.7 1.6 3.2-0.1 3.7-0.6 2.3z',
		AT: 'M1070.6 190.8l-0.3 0.8 0.7 2.1-0.2 2.6-2.8 0 1.1 1.4-1.3 4-0.9 1.1-4.4 0.1-2.4 1.5-4.2-0.5-7.3-1.7-1.3-2.1-4.9 1.1-0.5 1.2-3.1-0.9-2.6-0.2-2.3-1.2 0.7-1.5-0.2-1.1 1.4-0.3 2.7 1.7 0.6-1.7 4.4 0.3 3.5-1.1 2.4 0.2 1.7 1.3 0.4-1.1-1-4.1 1.7-0.8 1.6-2.9 3.8 2.1 2.6-2.6 1.7-0.5 4 1.9 2.3-0.3 2.4 1.2z',
		AW: 'M592.9 422l-0.5-0.2-0.5-0.5 0.1-0.6 0.2 0.3 0.4 0.4 0.3 0.5 0 0.1z',
		IN: 'M1427.6 308l-2.8 3-0.9 6 5.8 2.4 5.8 3.1 7.8 3.6 7.7 0.9 3.8 3.2 4.3 0.6 6.9 1.5 4.6-0.1 0.1-2.5-1.5-4.1-0.2-2.7 3.1-1.4 1.5 5.1 0.4 1.2 5.5 2.5 3.2-1 4.7 0.4 4.5-0.2-0.5-3.9-2.6-2.1 4.2-0.8 3.9-4.8 5.4-4 4.9 1.5 3.2-2.7 3.6 4-1.2 2.7 6.1 1 1 2.4-1.7 1.2 1.4 3.9-4.2-1.1-6.2 4.4 0.9 3.7-2 5.4 0.3 3.1-1.6 5.3-4.6-1.5 0.9 6.7-1 2.2 1 2.7-2.5 1.5-4.4-10.2-1.5 0-0.3 4.2-3.6-3.4 1.2-3.6 2.4-0.4 1.6-5.4-3.4-1.1-5.1 0.1-5.4-0.9-1.2-4.5-2.7-0.3-4.9-2.8-1.2 4.4 4.6 3.4-3 2.4-0.9 2.3 3.7 1.7-0.3 3.9 2.6 4.8 1.6 5.3-0.5 2.4-3.8-0.1-6.6 1.3 0.9 4.8-2.4 3.8-7.5 4.4-5.3 7.5-3.8 4.1-5 4.2 0.3 2.9-2.6 1.6-4.8 2.3-2.6 0.3-1.2 4.9 1.9 8.4 0.7 5.3-1.9 6.1 0.7 10.9-2.9 0.3-2.3 4.9 1.9 2.2-5.1 1.8-1.7 4.3-2.2 1.9-5.6-6-3.1-9-2.5-6.5-2.2-3-3.4-6.2-2-8-1.4-4-5.9-8.8-3.5-12.5-2.6-8.2-0.8-7.8-1.7-6-7.7 3.9-4-0.8-8.1-7.8 2.4-2.3-1.9-2.5-7.1-5.5 3.2-4.3 12.1 0-1.8-5.5-3.5-3.2-1.4-5-4-2.8 4.9-6.8 6.5 0.5 4.5-6.7 2.2-6.5 3.9-6.5-1-4.6 3.8-3.7-5.1-3.1-2.9-4.4-3.3-5.6 2-2.8 8.5 1.6 5.7-1 3.8-5.4 7.7 7.6 0.8 5.2 3 3.3 0.6 3.3-4.1-0.9 3.2 7.1 6.2 4 8.6 4.5z',
		TZ: 'M1167 508.4l-0.2 3.9-1.1 4.5 1.6 2.5 2.5-1.5 3.3-0.4 0.7 0.8 3.3-1.6-2.3-2.2 1.9-2.9 2.8-2.9 20.5 13.1 0.3 3.7 8.1 6.4-2.8 8 0.3 3.6 3.5 2.3 0.2 1.7-1.7 3.9 0.3 1.9-0.4 3.1 1.8 4 2.2 6.4 2 1.4-4.6 3.7-6.2 2.5-3.4-0.1-2.1 1.9-3.9 0.2-1.5 0.8-6.7-1.8-2.2 0.2 0.1-0.1-1.8-2.4-0.3-6.8-2.9-3.4-0.4 1.2-1-1.7-5.5-1.2-3.2-1.9-3.6-1.1-2.2-1.1-0.3-0.2-2.7-6.6-0.4-3.9-4.5-4.4 1.4-2.4-1.1-2.6 0.2-2.7-1-0.9 0.3-2.8 0.6-0.1 2-2.3 2.3-3.4 1.4-1.3 0-2.1-1.2-1.5-0.3-2.5 1.6-0.8 0.3-3.8-2.2-3.6 2-0.8 6.2 0.1z',
		IC: 'M888.4 323.4l-0.3 0.5-0.4 0.5-0.3-0.4-0.4 0-0.2-0.2 0.2-0.3 0.4 0.1 0.4-0.4 0.3-0.2 0.2 0.1 0.1 0.3z m13.6-2.3l0 0.5 0.2 0.4-0.2 0.7 0.1 0.3-0.4 0.4-0.5 0.2-0.2 0.2-0.6-0.2-0.5-0.5-0.2-0.4 0-0.6 0.6-0.4 0.1-0.5 0-0.2 0.6 0.1 0.4 0 0.3 0.1 0.3-0.1z m-9.9 0.8l-0.2 0-0.3-0.2-0.2-0.3 0.1-0.4 0.1-0.3 0.3 0 0.3 0 0.5 0.4 0.1 0.3-0.5 0.5-0.2 0z m6.1-3.5l0 0.2-0.6 0.3-0.4 0.5-0.3 0.2 0 0.4-0.4 0.7-0.1 0.4-0.5 0.6-0.1 0.2-0.2 0-0.6 0.2-0.1-0.1-0.1-0.4-0.3-0.4-0.1-0.2-0.2-0.3 0-0.3-0.4-0.6 0.5-0.3 0.3 0.2 0.6-0.2 0.4 0 0.5-0.2 0.5-0.4 0-0.2 0.6-0.3 0.6 0 0.3-0.1 0.1 0.1z m10.2 2.8l-0.3 0.4-0.4 0.1-0.3-0.1-0.4 0 0-0.2 0.3 0 0.6-0.2 0.4-0.3 0.3-0.3 0.1-0.5 0.1-0.3 0.2-0.5 0.3-0.4 0.3-0.6 0.2-0.8 0.2-0.2 0.4-0.1 0.3 0.3 0.1 0.5-0.1 0.5-0.1 0.5 0 0.5-0.1 0.1-0.3 0.7-0.3 0.3-0.6 0.1-0.7 0.3-0.2 0.2z m-19.6-4.5l0.3-0.1 0.2 0.3 0.2 0.5-0.2 0.3 0.1 0.4-0.6 1-0.1-0.1-0.1-0.4-0.4-0.9-0.1-0.3-0.1-0.2 0.2-0.4 0.3-0.2 0.3 0.1z m24.1-2l0 0.4-0.2 0.5-0.7 0.5-0.5 0.1-0.4 0.5-0.5-0.2 0-0.1 0.2-0.4 0-0.4 0.2-0.3 0.3-0.2 0.3 0 0.3-0.3 0.5 0 0.1-0.1 0.2-0.5 0.2-0.1 0.2 0.2-0.2 0.4z',
		AZ: 'M1229 253.2l-3.8-0.9-3.2-2.9-1.2-2.5 1-0.1 1.9 1.7 2.3 0 0.2 1 2.8 3.7z m6.3-17l2.5-2.6 3.5 3.3 3.6 4.6 2.5 0.3 1.9 1.7-4.2 0.5 0.1 5-0.4 2.2-1.7 1.5 0.8 3.1-1.3 0.4-3.9-3.4 1.2-3.1-1.9-1.9-1.9 0.5-5.3 4.7-0.9-4.5-2.5-1-2.6-1.7 1.1-2.1-3.2-2.2 0.7-1.6-2.2-1.1-1.4-1.6 1.1-1.1 4.2 1.9 2.9 0.3 0.6-0.7-3.3-3.5 1.2-0.8 1.5 0.2 4.3 3.8 2.4 0.5 0.6-1.6z',
		IE: 'M956.7 158.2l0.7 4.4-3.9 5.5-8.8 3.6-6.8-0.9 4.3-6.4-2.1-6.2 6.7-4.8 3.7-2.8 0.9 3.2-1.2 3.3 3-0.1 3.5 1.2z',
		ID: 'M1667.5 567.6l-2.4 0.1-7.1-4.5 5.4-1.3 2.8 2 1.8 1.9-0.5 1.8z m24.8-8.7l0.5 1.3-0.1 1.9-4.1 4.8-5 1.4-0.6-0.7 0.7-2.2 2.8-3.9 5.8-2.6z m-39.6-5.1l1.9 1.7 3.6-0.5 1.2 2.7-6.7 1.3-3.9 0.9-3.1-0.1 2.2-3.7 3.2 0 1.6-2.3z m28.3 0l-1.1 3.6-8.6 1.8-7.5-0.8 0.2-2.4 4.6-1.3 3.4 1.9 3.8-0.5 5.2-2.3z m-80.2-8.5l10.8 0.7 1.4-2.7 10.3 3.1 1.8 4.2 8.4 1.2 6.7 3.8-6.6 2.4-6.1-2.6-5.1 0.2-5.8-0.5-5.2-1.1-6.4-2.5-4.1-0.6-2.4 0.8-10.2-2.7-0.8-2.7-5.1-0.5 4.2-6.1 6.8 0.4 4.4 2.5 2.4 0.5 0.6 2.2z m147.9-3.6l-3.2 4.4-0.2-4.8 1.1-2.3 1.3-2.2 1.2 1.9-0.2 3z m-41.4-17.7l-2.2 2.2-3.8-1.2-1-2.8 5.7-0.3 1.3 2.1z m18.4-2.3l1.8 4.9-4.6-2.7-4.7-0.5-3.3 0.4-3.9-0.2 1.5-3.5 7-0.3 6.2 1.9z m59.8-3.2l-1 20.9-1.6 21-4.6-5.3-5.6-1.3-1.5 1.8-7.2 0.2 2.8-5.2 3.7-1.8-1-7-2.3-5.3-10.7-5.5-4.6-0.5-8.3-6-1.8 3.2-2.2 0.5-1.1-2.3 0.1-2.8-4.2-3.2 6.2-2.3 4 0.1-0.4-1.7-8.3 0-2.2-3.8-5-1.2-2.3-3.2 7.6-1.5 2.9-2.1 9.1 2.6 0.9 2.4 1.3 10.4 5.7 3.8 5-6.8 6.6-3.8 5 0 4.8 2.2 4.1 2.3 6.1 1.2z m-89.1-25.8l-4.5 6.4-4.3 1.2-5.4-1.2-9.5 0.3-4.9 0.9-0.8 4.9 5 5.7 3.1-2.9 10.6-2.2-0.5 2.9-2.5-0.9-2.5 3.8-5.1 2.5 5.1 8.2-1.1 2.2 4.8 7.4-0.3 4.2-3.1 1.9-2.1-2.3 3-5.2-5.7 2.5-1.3-1.8 0.8-2.5-3.9-3.8 0.7-6.2-3.9 1.9 0.2 7.5-0.2 9.2-3.7 0.9-2.3-1.8 1.9-5.9-0.6-6.2-2.4-0.1-1.6-4.4 2.5-4.2 0.9-5.1 3-9.7 1.1-2.6 4.8-4.8 4.5 1.9 7.1 0.9 6.5-0.3 5.6-4.6 1 1.4z m19.6 1.9l-0.3 5.6-2.9-0.7-0.9 3.9 2.3 3.4-1.6 0.8-2.2-4.1-1.7-8.2 1-5.1 1.8-2.3 0.5 3.5 3.4 0.5 0.6 2.7z m-108-5.7l1 4.3 3.9 3.7 3.7-1.3 3.6 0.4 3.3-3.2 2.7-0.6 5.4 1.8 4.6-1.4 2.6-8.9 2.1-2.2 1.7-7.3 6.5 0 5 1.1-3 5.8 4.4 6-0.9 3 6.4 5.9-6.7 0.8-1.8 4.4 0.2 5.8-5.5 4.4-0.4 6.4-2.5 9.8-0.7-2.3-6.6 2.9-2.1-3.9-4-0.4-2.8-2.1-6.8 2.4-1.9-3.2-3.8 0.4-4.6-0.7-0.6-8.6-2.8-1.8-2.7-5.5-0.8-5.6 0.6-6 3.3-4.3z m-22.8 50.5l-6.2 0.1-4.5-5.3-7.1-5.3-2.3-3.9-4.1-5.2-2.7-4.8-4.2-9-4.9-5.4-1.7-5.5-2.2-5-5.2-4-3.1-5.5-4.4-3.6-6.2-7.1-0.6-3.3 3.6 0.3 8.9 1.2 5.2 6.3 4.6 4.4 3.2 2.6 5.5 6.9 5.8 0.1 4.8 4.4 3.4 5.4 4.3 3-2.3 5.2 3.3 2.2 2 0.2 0.9 4.5 1.9 3.5 4.1 0.6 2.6 4.1-1.7 8-0.7 9.9z',
		UA: 'M1157.2 174.6l2.3 2.7 0.1 1.2 6.7 2.2 3.6-1 3.6 2.9 2.9-0.1 7.7 2 0.4 1.9-1.3 3.2 1.8 3.5-0.3 2.1-4.8 0.4-2.2 1.8 0.4 2.7-3.9 0.5-3 2.1-4.6 0.3-4 2.4 1 3.9 2.8 1.5 5.1-0.4-0.6 2.3-5.4 1.1-6.3 3.6-3.1-1.3 0.7-2.9-5.9-1.9 0.7-1.2 4.6-2.1-1.7-1.4-8.1-1.6-0.8-2.4-4.5 0.8-1.3 3.5-3.3 4.6-2.4-1.1-2.3 1.1-2.4-1.2 1.2-0.7 0.6-2.1 1.1-2.1-0.6-1.1 1-0.5 0.6 0.9 3 0.2 1.3-0.5-1-0.6 0.2-1-2-1.6-1.1-2.6-2-1 0.1-2.1-2.6-1.7-2-0.3-4-1.9-3.2 0.6-1.1 0.9-2.1 0-1 1.5-3.6 0.6-1.6 1-2.5-1.6-3.2 0-3.2-0.7-2 1.4-0.5-1.7-3-1.7 0.7-2.5 1.2-1.7 1.1 0.4-1.6-2.8 3.8-5.2 2.3-0.7 0.3-1.7-3.2-5.4 2.3-0.3 2.4-1.6 3.8-0.2 4.9 0.5 5.7 1.5 3.9 0.1 1.9 0.9 1.7-1.1 1.5 1.5 4.3-0.3 2.1 0.6-0.3-3.1 1.3-1.4 4.1-0.3 1.8 0.2 1-1.4 1.5 0.3 4.9-0.6 3.8 3.5-0.9 1.3 0.8 1.9 3.9 0.3z',
		QA: 'M1270.1 343.7l-1.5 0.5-1.8-1.3-0.8-4.7 1.1-3.3 1.5-0.7 1.8 2 0.5 3.7-0.8 3.8z',
		MZ: 'm 1166.7,673.5 h -4.1 l -0.3,-2.9 -0.6,-2.9 -0.4,-2.3 1.4,-7.1 -1.1,-4.6 -2.2,-9 6.2,-7.3 1.7,-4.6 0.8,-0.6 0.9,-3.8 -0.8,-1.9 0.4,-4.8 1.3,-4.4 0.4,-8.2 -2.8,-2 -2.7,-0.5 -1.1,-1.6 -2.6,-1.3 -4.7,0.1 -0.2,-2.4 -0.4,-4.6 17.2,-5.3 3.2,3.1 1.5,-0.6 2.2,1.6 0.2,2.6 -1.3,3 0.2,4.5 3.5,4 1.9,-4.5 2.5,-1.3 -0.1,-8.3 -2.2,-4.6 -1.9,-2.1 h -0.4 l -0.6,-7.3 1.5,-6.1 2.2,-0.2 6.7,1.8 1.5,-0.8 3.9,-0.2 2.1,-1.9 3.4,0.1 6.2,-2.5 4.6,-3.7 0.9,2.8 -0.5,6.4 0.5,5.7 -0.2,10 0.8,3.1 -1.9,4.6 -2.4,4.5 -3.7,4 -5.3,2.4 -6.5,3.1 -6.6,6.9 -2.2,1.2 -4.2,4.6 -2.3,1.4 -0.8,4.6 2.4,4.9 0.9,3.7 v 2 l 1,-0.4 -0.5,6.3 -1.1,3 1.2,1.1 -1,2.7 -2.4,2.3 -4.7,2.1 -6.9,3.5 -2.5,2.4 0.3,2.7 1.3,0.4 z',
	},
	names: {
		BD: 'Bangladesh',
		BE: 'Belgium',
		BF: 'Burkina Faso',
		BG: 'Bulgaria',
		BA: 'Bosnia and Herzegovina',
		BB: 'Barbados',
		BL: 'Saint-Barthélemy',
		BM: 'Bermuda',
		BN: 'Brunei',
		BO: 'Bolivia',
		JP: 'Japan',
		BI: 'Burundi',
		BJ: 'Benin',
		BT: 'Bhutan',
		JM: 'Jamaica',
		BW: 'Botswana',
		WS: 'Samoa',
		BR: 'Brazil',
		BS: 'Bahamas',
		BY: 'Belarus',
		BZ: 'Belize',
		TN: 'Tunisia',
		RW: 'Rwanda',
		RS: 'Serbia',
		TL: 'Timor-Leste',
		RE: 'Reunion (France)',
		TM: 'Turkmenistan',
		TJ: 'Tajikistan',
		RO: 'Romania',
		GW: 'Guinea-Bissau',
		GU: 'Guam',
		GT: 'Guatemala',
		GR: 'Greece',
		GQ: 'Equatorial Guinea',
		GP: 'Guadeloupe (France)',
		BH: 'Bahrain',
		GY: 'Guyana',
		GF: 'France',
		GE: 'Georgia',
		GD: 'Grenada',
		GB: 'United Kingdom',
		GA: 'Gabon',
		GN: 'Guinea',
		GM: 'The Gambia',
		GL: 'Greenland',
		GH: 'Ghana',
		OM: 'Oman',
		JO: 'Jordan',
		HR: 'Croatia',
		HT: 'Haiti',
		HU: 'Hungary',
		HN: 'Honduras',
		PR: 'Puerto Rico',
		PS: 'Palestine',
		PW: 'Palau',
		PT: 'Portugal',
		KN: 'Saint Kitts and Nevis',
		PY: 'Paraguay',
		AI: 'Anguilla',
		PA: 'Panama',
		PF: 'French Polynesia',
		PG: 'Papua New Guinea',
		PE: 'Peru',
		PK: 'Pakistan',
		PH: 'Philippines',
		PL: 'Poland',
		ZM: 'Zambia',
		BQSE: 'St. Eustatius (Netherlands)',
		EH: 'Western Sahara',
		RU: 'Russian Federation',
		EE: 'Estonia',
		EG: 'Egypt',
		ZA: 'South Africa',
		EC: 'Ecuador',
		IT: 'Italy',
		VN: 'Vietnam',
		SB: 'Solomon Islands',
		ET: 'Ethiopia',
		SO: 'Somalia',
		ZW: 'Zimbabwe',
		KY: 'Cayman Islands',
		ES: 'Spain',
		ER: 'Eritrea',
		ME: 'Montenegro',
		MD: 'Moldova',
		MG: 'Madagascar',
		MF: 'Saint Martin (French)',
		MA: 'Morocco',
		UZ: 'Uzbekistan',
		MM: 'Myanmar',
		ML: 'Mali',
		MN: 'Mongolia',
		MH: 'Marshall Islands',
		MK: 'Macedonia',
		MU: 'Mauritius',
		MT: 'Malta',
		MW: 'Malawi',
		MV: 'Maldives',
		MQ: 'Martinique (France)',
		MP: 'Northern Mariana Islands',
		MS: 'Montserrat',
		MR: 'Mauritania',
		UG: 'Uganda',
		MY: 'Malaysia',
		MX: 'Mexico',
		IL: 'Israel',
		FR: 'France',
		FI: 'Finland',
		FJ: 'Fiji',
		FK: 'Falkland Islands',
		FM: 'Micronesia',
		FO: 'Faeroe Islands',
		NI: 'Nicaragua',
		NL: 'Netherlands',
		NO: 'Norway',
		NA: 'Namibia',
		VU: 'Vanuatu',
		NC: 'New Caledonia',
		NE: 'Niger',
		NG: 'Nigeria',
		NZ: 'New Zealand',
		BQBO: 'Netherlands',
		NP: 'Nepal',
		NR: 'Nauru',
		XK: 'Kosovo',
		CI: "Côte d'Ivoire",
		CH: 'Switzerland',
		CO: 'Colombia',
		CN: 'China',
		CM: 'Cameroon',
		CL: 'Chile',
		CA: 'Canada',
		CG: 'Republic of Congo',
		CF: 'Central African Republic',
		CD: 'Democratic Republic of the Congo',
		CZ: 'Czech Republic',
		CY: 'Cyprus',
		CR: 'Costa Rica',
		CW: 'Curaco (Netherlands)',
		CV: 'Cape Verde',
		CU: 'Cuba',
		SZ: 'Swaziland',
		SY: 'Syria',
		SX: 'Saint Martin (Dutch)',
		KG: 'Kyrgyzstan',
		KE: 'Kenya',
		SS: 'South Sudan',
		SR: 'Suriname',
		KH: 'Cambodia',
		SV: 'El Salvador',
		KM: 'Comoros',
		ST: 'São Tomé and Principe',
		SK: 'Slovakia',
		KR: 'South Korea',
		SI: 'Slovenia',
		KP: 'North Korea',
		KW: 'Kuwait',
		SN: 'Senegal',
		SL: 'Sierra Leone',
		SC: 'Seychelles',
		KZ: 'Kazakhstan',
		SA: 'Saudi Arabia',
		SG: 'Singapore',
		SE: 'Sweden',
		SD: 'Sudan',
		DO: 'Dominican Republic',
		DM: 'Dominica',
		DJ: 'Djibouti',
		DK: 'Denmark',
		VG: 'British Virgin Islands',
		DE: 'Germany',
		YE: 'Yemen',
		DZ: 'Algeria',
		US: 'United States',
		UY: 'Uruguay',
		YT: 'Mayotte (France)',
		LB: 'Lebanon',
		LC: 'Saint Lucia',
		LA: 'Laos',
		TV: 'Tuvalu',
		TW: 'Taiwan',
		TT: 'Trinidad and Tobago',
		TR: 'Turkey',
		LK: 'Sri Lanka',
		LV: 'Latvia',
		TO: 'Tonga',
		LT: 'Lithuania',
		LU: 'Luxembourg',
		LR: 'Liberia',
		LS: 'Lesotho',
		TH: 'Thailand',
		TG: 'Togo',
		TD: 'Chad',
		TC: 'Turks and Caicos Islands',
		BQSA: 'Saba (Netherlands)',
		LY: 'Libya',
		VC: 'Saint Vincent and the Grenadines',
		AE: 'United Arab Emirates',
		VE: 'Venezuela',
		AG: 'Antigua and Barbuda',
		AF: 'Afghanistan',
		IQ: 'Iraq',
		VI: 'United States Virgin Islands',
		IS: 'Iceland',
		IR: 'Iran',
		AM: 'Armenia',
		AL: 'Albania',
		AO: 'Angola',
		AS: 'American Samoa',
		AR: 'Argentina',
		AU: 'Australia',
		AT: 'Austria',
		AW: 'Aruba',
		IN: 'India',
		TZ: 'Tanzania',
		IC: 'Canary Islands (Spain)',
		AZ: 'Azerbaijan',
		IE: 'Ireland',
		ID: 'Indonesia',
		UA: 'Ukraine',
		QA: 'Qatar',
		MZ: 'Mozambique',
	},
	default_regions: {
		0: { name: 'North America', states: ['MX', 'CA', 'US', 'GL', 'BM'] },
		1: {
			name: 'South America',
			states: [
				'EC',
				'AR',
				'VE',
				'BR',
				'CO',
				'BO',
				'PE',
				'BZ',
				'CL',
				'CR',
				'CU',
				'DO',
				'SV',
				'GT',
				'GY',
				'GF',
				'HN',
				'NI',
				'PA',
				'PY',
				'PR',
				'SR',
				'UY',
				'JM',
				'HT',
				'BS',
				'FK',
				'AI',
				'AG',
				'AW',
				'BB',
				'VG',
				'KY',
				'DM',
				'MQ',
				'LC',
				'VC',
				'GD',
				'GP',
				'MS',
				'TC',
				'SX',
				'MF',
				'KN',
				'CW',
			],
		},
		2: {
			name: 'Europe',
			states: [
				'IT',
				'NL',
				'NO',
				'DK',
				'IE',
				'GB',
				'RO',
				'DE',
				'FR',
				'AL',
				'AM',
				'AT',
				'BY',
				'BE',
				'LU',
				'BG',
				'CZ',
				'EE',
				'GE',
				'GR',
				'HU',
				'IS',
				'LV',
				'LT',
				'MD',
				'PL',
				'PT',
				'RS',
				'SI',
				'HR',
				'BA',
				'ME',
				'MK',
				'SK',
				'ES',
				'FI',
				'SE',
				'CH',
				'TR',
				'CY',
				'UA',
				'XK',
				'MT',
				'FO',
			],
		},
		3: {
			name: 'Africa and the Middle East',
			states: [
				'QA',
				'BH',
				'SA',
				'AE',
				'SY',
				'OM',
				'KW',
				'PK',
				'AZ',
				'AF',
				'IR',
				'IQ',
				'IL',
				'PS',
				'JO',
				'LB',
				'YE',
				'TJ',
				'TM',
				'UZ',
				'KG',
				'NE',
				'AO',
				'EG',
				'TN',
				'GA',
				'DZ',
				'LY',
				'CG',
				'GQ',
				'BJ',
				'BW',
				'BF',
				'BI',
				'CM',
				'CF',
				'TD',
				'CI',
				'CD',
				'DJ',
				'ET',
				'GM',
				'GH',
				'GN',
				'GW',
				'KE',
				'LS',
				'LR',
				'MG',
				'MW',
				'ML',
				'MA',
				'MR',
				'MZ',
				'NA',
				'NG',
				'ER',
				'RW',
				'SN',
				'SL',
				'SO',
				'ZA',
				'SD',
				'SS',
				'SZ',
				'TZ',
				'TG',
				'UG',
				'EH',
				'ZM',
				'ZW',
				'RE',
				'KM',
				'SC',
				'MU',
				'CV',
				'IC',
				'ST',
				'YT',
			],
		},
		4: {
			name: 'South Asia',
			states: [
				'SG',
				'TW',
				'IN',
				'AU',
				'MY',
				'NP',
				'NZ',
				'TH',
				'BN',
				'JP',
				'VN',
				'LK',
				'SB',
				'FJ',
				'BD',
				'BT',
				'KH',
				'LA',
				'MM',
				'KP',
				'PG',
				'PH',
				'KR',
				'ID',
				'CN',
				'MV',
				'NC',
				'VU',
				'NR',
			],
		},
		5: { name: 'North Asia', states: ['MN', 'RU', 'KZ'] },
	},
	proj: 'robinson',
	proj_coordinates: [
		{ lat: 48.86666667, x: 997.9, lng: 2.333333333, y: 189.1 },
		{ lat: -34.615, x: 673.5, lng: -58.446, y: 724.1 },
		{ lat: -33.874, x: 1798.2, lng: 151.203, y: 719.3 },
	],
	initial_view: { y: 0.99, x: 0.99, x2: 2018.99, y2: 864.5600000000001 },
};

/* Map logic - do not edit */
!(function (a) {
	var b,
		c,
		d,
		f = {};
	(function () {
		var c,
			b,
			d,
			e,
			a,
			f,
			g,
			h,
			i,
			j,
			k,
			l = this || Function('return this')(),
			_ = (function () {
				'use strict';
				var c,
					d,
					n,
					o,
					p,
					q = 'linear',
					e =
						Date.now ||
						function () {
							return +new Date();
						},
					_ = 'undefined' != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : e;
				function r() {}
				function f(a, c) {
					for (var b in a) Object.hasOwnProperty.call(a, b) && c(b);
				}
				function b(a, b) {
					return (
						f(b, function (c) {
							a[c] = b[c];
						}),
						a
					);
				}
				function g(b, a) {
					f(a, function (c) {
						void 0 === b[c] && (b[c] = a[c]);
					});
				}
				function h(e, d, g, h, j, f, k) {
					var a,
						b,
						l = e < f ? 0 : (e - f) / j;
					for (a in d)
						d.hasOwnProperty(a) &&
							((b = 'function' == typeof (b = k[a]) ? b : c[b]),
							(d[a] = i(g[a], h[a], b, l)));
					return d;
				}
				function i(a, b, c, d) {
					return a + (b - a) * c(d);
				}
				function j(b, d) {
					var c = a.prototype.filter,
						e = b._filterArgs;
					f(c, function (a) {
						void 0 !== c[a][d] && c[a][d].apply(b, e);
					});
				}
				function k(a, b, c, d, e, g, f, i, k, l, m) {
					(p = b + c + d),
						(n = Math.min(m || _(), p)),
						(o = p <= n),
						(p = d - (p - n)),
						a.isPlaying() &&
							(o
								? (k(f, a._attachment, p), a.stop(!0))
								: ((a._scheduleId = l(a._timeoutHandler, 1e3 / 60)),
								  j(a, 'beforeTween'),
								  n < b + c
										? h(1, e, g, f, 1, 1, i)
										: h(n, e, g, f, d, b + c, i),
								  j(a, 'afterTween'),
								  k(e, a._attachment, p)));
				}
				function m(b, c) {
					var d = {},
						a = typeof c;
					return (
						f(
							b,
							'string' == a || 'function' == a
								? function (a) {
										d[a] = c;
								  }
								: function (a) {
										d[a] || (d[a] = c[a] || q);
								  },
						),
						d
					);
				}
				function a(b, a) {
					(this._currentState = b || {}),
						(this._configured = !1),
						(this._scheduleFunction = d),
						void 0 !== a && this.setConfig(a);
				}
				return (
					(d =
						('undefined' != typeof window &&
							(window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.oRequestAnimationFrame ||
								window.msRequestAnimationFrame ||
								(window.mozCancelRequestAnimationFrame &&
									window.mozRequestAnimationFrame))) ||
						setTimeout),
					(a.prototype.tween = function (a) {
						return this._isTweening
							? this
							: ((void 0 === a && this._configured) || this.setConfig(a),
							  (this._timestamp = _()),
							  this._start(this.get(), this._attachment),
							  this.resume());
					}),
					(a.prototype.setConfig = function (a) {
						(a = a || {}),
							(this._configured = !0),
							(this._attachment = a.attachment),
							(this._pausedAtTime = null),
							(this._scheduleId = null),
							(this._delay = a.delay || 0),
							(this._start = a.start || r),
							(this._step = a.step || r),
							(this._finish = a.finish || r),
							(this._duration = a.duration || 500),
							(this._currentState = b({}, a.from || this.get())),
							(this._originalState = this.get()),
							(this._targetState = b({}, a.to || this.get()));
						var e = this;
						this._timeoutHandler = function () {
							k(
								e,
								e._timestamp,
								e._delay,
								e._duration,
								e._currentState,
								e._originalState,
								e._targetState,
								e._easing,
								e._step,
								e._scheduleFunction,
							);
						};
						var c = this._currentState,
							d = this._targetState;
						return (
							g(d, c),
							(this._easing = m(c, a.easing || q)),
							(this._filterArgs = [c, this._originalState, d, this._easing]),
							j(this, 'tweenCreated'),
							this
						);
					}),
					(a.prototype.get = function () {
						return b({}, this._currentState);
					}),
					(a.prototype.set = function (a) {
						this._currentState = a;
					}),
					(a.prototype.pause = function () {
						return (this._pausedAtTime = _()), (this._isPaused = !0), this;
					}),
					(a.prototype.resume = function () {
						return (
							this._isPaused && (this._timestamp += _() - this._pausedAtTime),
							(this._isPaused = !1),
							(this._isTweening = !0),
							this._timeoutHandler(),
							this
						);
					}),
					(a.prototype.seek = function (a) {
						a = Math.max(a, 0);
						var b = _();
						return (
							this._timestamp + a === 0 ||
								((this._timestamp = b - a),
								this.isPlaying() ||
									((this._isTweening = !0),
									(this._isPaused = !1),
									k(
										this,
										this._timestamp,
										this._delay,
										this._duration,
										this._currentState,
										this._originalState,
										this._targetState,
										this._easing,
										this._step,
										this._scheduleFunction,
										b,
									),
									this.pause())),
							this
						);
					}),
					(a.prototype.stop = function (a) {
						return (
							(this._isTweening = !1),
							(this._isPaused = !1),
							(this._timeoutHandler = r),
							(
								l.cancelAnimationFrame ||
								l.webkitCancelAnimationFrame ||
								l.oCancelAnimationFrame ||
								l.msCancelAnimationFrame ||
								l.mozCancelRequestAnimationFrame ||
								l.clearTimeout
							)(this._scheduleId),
							a &&
								(j(this, 'beforeTween'),
								h(
									1,
									this._currentState,
									this._originalState,
									this._targetState,
									1,
									0,
									this._easing,
								),
								j(this, 'afterTween'),
								j(this, 'afterTweenEnd'),
								this._finish.call(this, this._currentState, this._attachment)),
							this
						);
					}),
					(a.prototype.isPlaying = function () {
						return this._isTweening && !this._isPaused;
					}),
					(a.prototype.setScheduleFunction = function (a) {
						this._scheduleFunction = a;
					}),
					(a.prototype.dispose = function () {
						for (var a in this) this.hasOwnProperty(a) && delete this[a];
					}),
					(a.prototype.filter = {}),
					(c = a.prototype.formula =
						{
							linear: function (a) {
								return a;
							},
						}),
					b(a, {
						now: _,
						each: f,
						tweenProps: h,
						tweenProp: i,
						applyFilter: j,
						shallowCopy: b,
						defaults: g,
						composeEasingObject: m,
					}),
					'function' == typeof SHIFTY_DEBUG_NOW && (l.timeoutHandler = k),
					(l.Tweenable = a)
				);
			})();
		function m(a) {
			b.each(a, function (c) {
				var b = a[c];
				'string' == typeof b && b.match(h) && (a[c] = p(h, b, n));
			});
		}
		function n(b) {
			var a;
			return (
				'rgb(' +
				(b =
					(3 === (a = (a = b).replace(/#/, '')).length &&
						(a = (a = a.split(''))[0] + a[0] + a[1] + a[1] + a[2] + a[2]),
					(j[0] = o(a.substr(0, 2))),
					(j[1] = o(a.substr(2, 2))),
					(j[2] = o(a.substr(4, 2))),
					j))[0] +
				',' +
				b[1] +
				',' +
				b[2] +
				')'
			);
		}
		function o(a) {
			return parseInt(a, 16);
		}
		function p(c, d, g) {
			var a = d.match(c),
				b = d.replace(c, i);
			if (a)
				for (var e, h = a.length, f = 0; f < h; f++)
					(e = a.shift()), (b = b.replace(i, g(e)));
			return b;
		}
		function q(c) {
			for (
				var d = c.match(a), f = d.length, e = c.match(g)[0], b = 0;
				b < f;
				b++
			)
				e += parseInt(d[b], 10) + ',';
			return e.slice(0, -1) + ')';
		}
		function r(c, a) {
			b.each(a, function (d) {
				for (var e = t(c[d]), f = e.length, b = 0; b < f; b++)
					c[a[d].chunkNames[b]] = +e[b];
				delete c[d];
			});
		}
		function s(c, a) {
			b.each(a, function (b) {
				var d = c[b],
					e = (function (c, b) {
						k.length = 0;
						for (var d = b.length, a = 0; a < d; a++) k.push(c[b[a]]);
						return k;
					})(
						(function (c, d) {
							for (var a, e = {}, f = d.length, b = 0; b < f; b++)
								(e[(a = d[b])] = c[a]), delete c[a];
							return e;
						})(c, a[b].chunkNames),
						a[b].chunkNames,
					),
					d = (function (d, c) {
						for (var a = d, e = c.length, b = 0; b < e; b++)
							a = a.replace(i, +c[b].toFixed(4));
						return a;
					})(a[b].formatString, e);
				c[b] = p(f, d, q);
			});
		}
		function t(b) {
			return b.match(a);
		}
		_.shallowCopy(_.prototype.formula, {
			easeInQuad: function (a) {
				return Math.pow(a, 2);
			},
			easeOutQuad: function (a) {
				return -(Math.pow(a - 1, 2) - 1);
			},
			easeInOutQuad: function (a) {
				return (a /= 0.5) < 1
					? 0.5 * Math.pow(a, 2)
					: -0.5 * ((a -= 2) * a - 2);
			},
			easeInCubic: function (a) {
				return Math.pow(a, 3);
			},
			easeOutCubic: function (a) {
				return Math.pow(a - 1, 3) + 1;
			},
			easeInOutCubic: function (a) {
				return (a /= 0.5) < 1
					? 0.5 * Math.pow(a, 3)
					: 0.5 * (Math.pow(a - 2, 3) + 2);
			},
			easeInQuart: function (a) {
				return Math.pow(a, 4);
			},
			easeOutQuart: function (a) {
				return -(Math.pow(a - 1, 4) - 1);
			},
			easeInOutQuart: function (a) {
				return (a /= 0.5) < 1
					? 0.5 * Math.pow(a, 4)
					: -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
			},
			easeInQuint: function (a) {
				return Math.pow(a, 5);
			},
			easeOutQuint: function (a) {
				return Math.pow(a - 1, 5) + 1;
			},
			easeInOutQuint: function (a) {
				return (a /= 0.5) < 1
					? 0.5 * Math.pow(a, 5)
					: 0.5 * (Math.pow(a - 2, 5) + 2);
			},
			easeInSine: function (a) {
				return 1 - Math.cos(a * (Math.PI / 2));
			},
			easeOutSine: function (a) {
				return Math.sin(a * (Math.PI / 2));
			},
			easeInOutSine: function (a) {
				return -0.5 * (Math.cos(Math.PI * a) - 1);
			},
			easeInExpo: function (a) {
				return 0 === a ? 0 : Math.pow(2, 10 * (a - 1));
			},
			easeOutExpo: function (a) {
				return 1 === a ? 1 : 1 - Math.pow(2, -10 * a);
			},
			easeInOutExpo: function (a) {
				return 0 === a
					? 0
					: 1 === a
					? 1
					: (a /= 0.5) < 1
					? 0.5 * Math.pow(2, 10 * (a - 1))
					: 0.5 * (2 - Math.pow(2, -10 * --a));
			},
			easeInCirc: function (a) {
				return -(Math.sqrt(1 - a * a) - 1);
			},
			easeOutCirc: function (a) {
				return Math.sqrt(1 - Math.pow(a - 1, 2));
			},
			easeInOutCirc: function (a) {
				return (a /= 0.5) < 1
					? -0.5 * (Math.sqrt(1 - a * a) - 1)
					: 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
			},
			easeOutBounce: function (a) {
				return a < 1 / 2.75
					? 7.5625 * a * a
					: a < 2 / 2.75
					? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
					: a < 2.5 / 2.75
					? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
					: 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
			},
			easeInBack: function (a) {
				return a * a * (2.70158 * a - 1.70158);
			},
			easeOutBack: function (a) {
				return --a * a * (2.70158 * a + 1.70158) + 1;
			},
			easeInOutBack: function (a) {
				var b = 1.70158;
				return (a /= 0.5) < 1
					? a * a * ((1 + (b *= 1.525)) * a - b) * 0.5
					: 0.5 * ((a -= 2) * a * ((1 + (b *= 1.525)) * a + b) + 2);
			},
			elastic: function (a) {
				return (
					-1 *
						Math.pow(4, -8 * a) *
						Math.sin(((6 * a - 1) * (2 * Math.PI)) / 2) +
					1
				);
			},
			swingFromTo: function (a) {
				var b = 1.70158;
				return (a /= 0.5) < 1
					? a * a * ((1 + (b *= 1.525)) * a - b) * 0.5
					: 0.5 * ((a -= 2) * a * ((1 + (b *= 1.525)) * a + b) + 2);
			},
			swingFrom: function (a) {
				return a * a * (2.70158 * a - 1.70158);
			},
			swingTo: function (a) {
				return --a * a * (2.70158 * a + 1.70158) + 1;
			},
			bounce: function (a) {
				return a < 1 / 2.75
					? 7.5625 * a * a
					: a < 2 / 2.75
					? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
					: a < 2.5 / 2.75
					? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
					: 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
			},
			bouncePast: function (a) {
				return a < 1 / 2.75
					? 7.5625 * a * a
					: a < 2 / 2.75
					? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
					: a < 2.5 / 2.75
					? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
					: 2 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
			},
			easeFromTo: function (a) {
				return (a /= 0.5) < 1
					? 0.5 * Math.pow(a, 4)
					: -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
			},
			easeFrom: function (a) {
				return Math.pow(a, 4);
			},
			easeTo: function (a) {
				return Math.pow(a, 0.25);
			},
		}),
			(_.setBezierFunction = function (b, c, d, e, f) {
				var g,
					h,
					i,
					j,
					a =
						((g = c),
						(h = d),
						(i = e),
						(j = f),
						function (a) {
							return (function (g, c, d, h, i, l) {
								var a,
									j = 0,
									k = 0,
									e = 0,
									m = 0,
									f = 0,
									b = 0;
								function n(a) {
									return ((j * a + k) * a + e) * a;
								}
								function _(a) {
									return 0 <= a ? a : 0 - a;
								}
								return (
									(j = 1 - (e = 3 * c) - (k = 3 * (h - c) - e)),
									(((1 - (b = 3 * d) - (f = 3 * (i - d) - b)) *
										(a = (function (d, h) {
											var b, c, a, f, i, g, l;
											for (a = d, g = 0; g < 8; g++) {
												if (_((f = n(a) - d)) < h) return a;
												if (1e-6 > _((i = (3 * j * (l = a) + 2 * k) * l + e)))
													break;
												a -= f / i;
											}
											if (((c = 1), (a = d) < (b = 0))) return b;
											if (c < a) return c;
											for (; b < c && !(_((f = n(a)) - d) < h); )
												f < d ? (b = a) : (c = a), (a = 0.5 * (c - b) + b);
											return a;
										})(g, (a = 0.005))) +
										f) *
										a +
										b) *
										a
								);
							})(a, g, h, i, j, 1);
						});
				return (
					(a.displayName = b),
					(a.x1 = c),
					(a.y1 = d),
					(a.x2 = e),
					(a.y2 = f),
					(_.prototype.formula[b] = a)
				);
			}),
			(_.unsetBezierFunction = function (a) {
				delete _.prototype.formula[a];
			}),
			((c = new _())._filterArgs = []),
			(_.interpolate = function (d, e, g, a, b) {
				var f = _.shallowCopy({}, d),
					h = b || 0,
					b = _.composeEasingObject(d, a || 'linear');
				return (
					c.set({}),
					((a = c._filterArgs).length = 0),
					(a[0] = f),
					(a[1] = d),
					(a[2] = e),
					(a[3] = b),
					_.applyFilter(c, 'tweenCreated'),
					_.applyFilter(c, 'beforeTween'),
					(b = _.tweenProps(g, f, d, e, 1, h, b)),
					_.applyFilter(c, 'afterTween'),
					b
				);
			}),
			(b = _),
			(d = /(\d|\-|\.)/),
			(e = /([^\-0-9\.]+)/g),
			(a = /[0-9.\-]+/g),
			(f = new RegExp(
				'rgb\\(' +
					a.source +
					/,\s*/.source +
					a.source +
					/,\s*/.source +
					a.source +
					'\\)',
				'g',
			)),
			(g = /^.*\(/),
			(h = /#([0-9]|[a-f]){3,6}/gi),
			(i = 'VAL'),
			(j = []),
			(k = []),
			(b.prototype.filter.token = {
				tweenCreated: function (a, g, h, j) {
					var c, f;
					m(a),
						m(g),
						m(h),
						(this._tokenData =
							((c = a),
							(f = {}),
							b.each(c, function (b) {
								var g,
									h,
									a = c[b];
								'string' == typeof a &&
									((g = t(a)),
									(f[b] = {
										formatString:
											((a = (h = a).match(e))
												? (1 === a.length || h.charAt(0).match(d)) &&
												  a.unshift('')
												: (a = ['', '']),
											a.join(i)),
										chunkNames: (function (c, d) {
											for (var b = [], e = c.length, a = 0; a < e; a++)
												b.push('_' + d + '_' + a);
											return b;
										})(g, b),
									}));
							}),
							f));
				},
				beforeTween: function (c, d, e, f) {
					var g, a;
					(g = f),
						(a = this._tokenData),
						b.each(a, function (c) {
							var d = a[c].chunkNames,
								h = d.length,
								e = g[c];
							if ('string' == typeof e)
								for (
									var f = e.split(' '), i = f[f.length - 1], b = 0;
									b < h;
									b++
								)
									g[d[b]] = f[b] || i;
							else for (b = 0; b < h; b++) g[d[b]] = e;
							delete g[c];
						}),
						r(c, this._tokenData),
						r(d, this._tokenData),
						r(e, this._tokenData);
				},
				afterTween: function (c, d, e, f) {
					var g, a;
					s(c, this._tokenData),
						s(d, this._tokenData),
						s(e, this._tokenData),
						(g = f),
						(a = this._tokenData),
						b.each(a, function (d) {
							var b = a[d].chunkNames,
								h = b.length,
								e = g[b[0]];
							if ('string' == typeof e) {
								for (var f = '', c = 0; c < h; c++)
									(f += ' ' + g[b[c]]), delete g[b[c]];
								g[d] = f.substr(1);
							} else g[d] = e;
						});
				},
			});
	}.call(null),
		(function (a, b) {
			(a = a || 'docReady'), (b = b || window);
			var c = [],
				d = !1,
				e = !1;
			function f() {
				if (!d) {
					d = !0;
					for (var a = 0; a < c.length; a++) c[a].fn.call(window, c[a].ctx);
					c = [];
				}
			}
			function g() {
				'complete' === document.readyState && f();
			}
			b[a] = function (a, b) {
				if (d) {
					setTimeout(function () {
						a(b);
					}, 1);
					return;
				}
				c.push({ fn: a, ctx: b }),
					'complete' !== document.readyState &&
					(document.attachEvent || 'interactive' !== document.readyState)
						? e ||
						  (document.addEventListener
								? (document.addEventListener('DOMContentLoaded', f, !1),
								  window.addEventListener('load', f, !1))
								: (document.attachEvent('onreadystatechange', g),
								  window.attachEvent('onload', f)),
						  (e = !0))
						: setTimeout(f, 1);
			};
		})('docReady', f),
		(b = window.console),
		(c = window.Object),
		(d = window.Array),
		(void 0 === b || void 0 === b.log) && ((b = {}).log = function () {}),
		'function' != typeof c.create &&
			(c.create = function (b) {
				function a() {}
				return (a.prototype = b), new a();
			}),
		d.prototype.forEach ||
			(d.prototype.forEach = function (b, c) {
				for (var a = 0, d = this.length; a < d; ++a)
					b.call(c, this[a], a, this);
			}),
		(Object.size = function (a) {
			var b,
				c = 0;
			for (b in a) a.hasOwnProperty(b) && c++;
			return c;
		}));
	var e = (function () {
			function a(b) {
				if ('object' != typeof b || null === b) return b;
				var c = b.constructor();
				for (var d in b) c[d] = a(b[d]);
				return c;
			}
			var b = {
				Android: function () {
					return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function () {
					return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function () {
					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function () {
					return navigator.userAgent.match(/Opera\sMini/i);
				},
				Windows: function () {
					return navigator.userAgent.match(/IEMobile/i);
				},
				any: function () {
					return (
						b.Android() || b.BlackBerry() || b.iOS() || b.Opera() || b.Windows()
					);
				},
			};
			function c(a, c) {
				var d = a[0],
					e = a[1],
					f = Raphael.transformPath('M' + d + ',' + e, c).toString(),
					b = /M(-?\d+.?\d*),(-?\d+.?\d*)/.exec(f);
				return [b[1], b[2]];
			}
			function d(a) {
				return Math.min.apply(Math, a);
			}
			function f(a) {
				return Math.max.apply(Math, a);
			}
			return {
				min: d,
				max: f,
				addEvent: function (a, b, c) {
					a.attachEvent
						? ((a['e' + b + c] = c),
						  (a[b + c] = function () {
								a['e' + b + c](window.event);
						  }),
						  a.attachEvent('on' + b, a[b + c]))
						: a.addEventListener(b, c, !1);
				},
				isMobile: b,
				linePath: function (c, d, e, f) {
					var a = { x: c, y: d },
						b = { x: e, y: f };
					return 'M' + a.x + ' ' + a.y + ' L' + b.x + ' ' + b.y;
				},
				clone: a,
				isFunction: function (a) {
					return a && '[object Function]' === {}.toString.call(a);
				},
				findPos: function (c) {
					function f(a, b) {
						if (a.currentStyle) var c = a.currentStyle[b];
						else if (window.getComputedStyle)
							var c = window.getComputedStyle(a, null)[b];
						return c;
					}
					var d,
						g = f(document.body, 'position');
					'relative' == g && (document.body.style.position = 'static'),
						f(document.body, 'position');
					for (
						var e = (d = 0), a = c, h = !1;
						(a = a.parentNode) && a != document.body;

					)
						(e -= a.scrollLeft || 0),
							(d -= a.scrollTop || 0),
							'fixed' == f(a, 'position') && (h = !0);
					if (h && !window.opera) {
						var b,
							i =
								(b = document.getElementsByTagName('html')[0]).scrollTop &&
								document.documentElement.scrollTop
									? [b.scrollLeft, b.scrollTop]
									: b.scrollTop || document.documentElement.scrollTop
									? [
											b.scrollLeft + document.documentElement.scrollLeft,
											b.scrollTop + document.documentElement.scrollTop,
									  ]
									: document.body.scrollTop
									? [document.body.scrollLeft, document.body.scrollTop]
									: [0, 0];
						(e += i[0]), (d += i[1]);
					}
					do (e += c.offsetLeft), (d += c.offsetTop);
					while ((c = c.offsetParent));
					return (document.body.style.position = g), [e, d];
				},
				replaceAll: function (a, b, c) {
					return a.replace(new RegExp(b, 'g'), c);
				},
				rotate_bbox: function (a, b) {
					var p = [a.x, a.y],
						q = [a.x2, a.y],
						r = [a.x, a.y2],
						s = [a.x2, a.y2],
						e = c(p, b),
						g = c(q, b),
						h = c(r, b),
						i = c(s, b),
						j = [e[0], g[0], h[0], i[0]],
						k = [e[1], g[1], h[1], i[1]],
						l = d(j),
						m = f(j),
						n = d(k),
						o = f(k);
					return { x: l, y: n, x2: m, y2: o, width: m - l, height: o - n };
				},
				rotate: c,
				bbox_union: function (c) {
					for (var d = [], f = [], g = [], h = [], b = 0; b < c.length; b++) {
						var a = c[b];
						d.push(a.x), f.push(a.x2), h.push(a.y), g.push(a.y2);
					}
					var i = e.min(d),
						j = e.max(f),
						k = e.min(h),
						l = e.max(g);
					return { x: i, x2: j, y: k, y2: l, width: j - i, height: l - k };
				},
				distance: function (a, b) {
					var e = a.x,
						f = a.y,
						g = b.x,
						h = b.y,
						c = g - e,
						d = h - f;
					return Math.sqrt(d * d + c * c);
				},
				x_in_array: function (c, a) {
					for (var b = a.length; b--; ) if (a[b] === c) return !0;
					return !1;
				},
				clear_sets: function (c) {
					for (var a = 0; a < c.length; a++) {
						var b = c[a];
						b.forEach(function (a) {
							a.remove();
						}),
							b.splice(0, b.length);
					}
				},
				delete_element: function (a) {
					a.parentNode && a.parentNode.removeChild(a);
				},
				to_float: function (b) {
					var a = parseFloat(b);
					return !isNaN(a) && a;
				},
				callback_closure: function (a, b) {
					return function () {
						return b(a);
					};
				},
				new_style: function (b) {
					var c = document.getElementsByTagName('head')[0],
						a = document.createElement('style');
					return (
						(a.type = 'text/css'),
						(a.media = 'screen'),
						a.styleSheet
							? (a.styleSheet.cssText = b)
							: a.appendChild(document.createTextNode(b)),
						c.appendChild(a),
						a
					);
				},
			};
		})(),
		h = !!window[a + '_mapdata'] && window[a + '_mapdata'],
		i = !!window[a + '_mapinfo'] && window[a + '_mapinfo'],
		k = a.substring(0, a.length - 3).replace('simplemaps_', ''),
		l = !0,
		m = !1,
		j = [],
		n = {
			rounded_box:
				'm2.158.263h5.684c1.05 0 1.895.845 1.895 1.895v5.684c0 1.05-.845 1.895-1.895 1.895h-5.684c-1.05 0-1.895-.845-1.895-1.895v-5.684c0-1.05.845-1.895 1.895-1.895z',
			plus: 'm4.8 1.5c-.111 0-.2.089-.2.2v3h-2.9c-.111 0-.2.134-.2.3 0 .166.089.3.2.3h2.9v3c0 .111.089.2.2.2h.2c.111 0 .2-.089.2-.2v-3h3.1c.111 0 .2-.134.2-.3 0-.166-.089-.3-.2-.3h-3.1v-3c0-.111-.089-.2-.2-.2z',
			minus:
				'm1.8 4.7h6.6c.111 0 .2.134.2.3 0 .166-.089.3-.2.3h-6.6c-.111 0-.2-.134-.2-.3 0-.166.089-.3.2-.3',
			arrow:
				'm7.07 8.721c2.874-1.335 2.01-5.762-2.35-5.661v-1.778l-3.445 2.694 3.445 2.843v-1.818c3.638-.076 3.472 2.802 2.35 3.721z',
		},
		g = {
			mapdata: h,
			mapinfo: i,
			load: o,
			hooks: e.clone({
				over_state: !1,
				over_region: !1,
				over_location: !1,
				out_state: !1,
				out_region: !1,
				out_location: !1,
				click_state: !1,
				click_region: !1,
				click_location: !1,
				close_popup: !1,
				zoomable_click_state: !1,
				zoomable_click_region: !1,
				complete: !1,
				refresh_complete: !1,
				zooming_complete: !1,
				back: !1,
				ready: !1,
				click_xy: !1,
			}),
			plugin_hooks: e.clone({
				over_state: [],
				over_region: [],
				over_location: [],
				out_state: [],
				out_region: [],
				out_location: [],
				click_state: [],
				click_region: [],
				click_location: [],
				preclick_state: [],
				preclick_region: [],
				preclick_location: [],
				close_popup: [],
				zoomable_click_state: [],
				zoomable_click_region: [],
				complete: [],
				refresh_complete: [],
				zooming_complete: [],
				back: [],
				ready: [],
				click_xy: [],
			}),
			copy: function () {
				var a = {
					mapdata: e.clone(this.mapdata),
					mapinfo: e.clone(this.mapinfo),
					hooks: e.clone(this.hooks),
					plugin_hooks: e.clone(this.plugin_hooks),
					copy: this.copy,
					load: o,
				};
				return j.push(a), a;
			},
			create: function () {
				var b = {
					mapdata: !!window[a + '_mapdata'] && e.clone(window[a + '_mapdata']),
					mapinfo: !!window[a + '_mapinfo'] && e.clone(window[a + '_mapinfo']),
					hooks: e.clone(this.hooks),
					plugin_hooks: e.clone(this.plugin_hooks),
					copy: this.copy,
					load: o,
				};
				return j.push(b), b;
			},
			mobile_device: !!e.isMobile.any(),
			loaded: !1,
		};
	function o() {
		var o,
			p,
			q,
			r,
			s,
			t,
			u,
			v,
			w,
			x,
			y,
			z,
			b,
			A,
			B,
			C,
			D,
			E,
			F,
			G,
			H,
			I,
			J,
			K,
			L,
			M,
			N,
			O,
			P,
			Q,
			R,
			S,
			T,
			U,
			V,
			W,
			X,
			Y,
			Z,
			$,
			aa,
			ab,
			ac,
			ad,
			ae,
			af,
			ag,
			ah,
			ai,
			aj,
			ak,
			al,
			am,
			an,
			ao,
			ap,
			aq,
			ar,
			as,
			at,
			au,
			av,
			aw,
			ax,
			ay,
			az,
			aA,
			aB,
			aC,
			aD,
			aE,
			aF,
			aG,
			aH,
			aI,
			aJ,
			aK,
			aL,
			aM,
			aN,
			aO,
			aP,
			aQ,
			aR,
			aS,
			aT,
			aU,
			aV,
			aW,
			aX,
			aY,
			aZ,
			a$,
			a_,
			a0,
			a1,
			a2,
			a3,
			a4,
			a5,
			a6,
			a7,
			a8,
			a9,
			ba,
			bb,
			bc,
			bd,
			be,
			bf,
			bg,
			bh,
			bi,
			bj,
			bk,
			bl,
			bm,
			bn,
			bo,
			bp,
			bq,
			br,
			bs,
			bt,
			bu,
			bv,
			bw,
			bx,
			by,
			bz,
			bA,
			bB,
			bC,
			bD,
			bE,
			bF,
			bG,
			bH,
			bI,
			bJ,
			bK,
			a = this,
			c = a.mapdata,
			d = a.mapinfo;
		if (!c || !d) {
			console.log('The mapdata or mapinfo object is missing or corrupted.');
			return;
		}
		var bL = a.hooks,
			bM = a.plugin_hooks;
		function bN(d, e) {
			var b = bL[d];
			b && b.apply(null, e);
			for (var f = a.plugin_hooks[d], c = 0; c < f.length; c++) {
				var b = f[c];
				b && b.apply(null, e);
			}
		}
		var b = void 0 === c.main_settings.div ? 'map' : c.main_settings.div;
		if (!document.getElementById(b))
			return (
				console.log(
					"Can't find target for map #" +
						b +
						'.  Check mapdata.main_settings.div',
				),
				!1
			);
		function bO() {
			(H =
				!!s.background_image_url &&
				'no' != s.background_image_url &&
				s.background_image_url),
				(I = !!s.background_image_bbox && s.background_image_bbox),
				(Y = 'yes' == s.background_transparent ? 0 : 1),
				($ = s.label_size ? s.label_size : 22),
				(aa = s.label_color ? s.label_color : '#ffffff'),
				(ab = 'yes' == s.url_new_tab),
				(ac = s.location_opacity ? s.location_opacity : 1),
				(ad = 'yes' == s.js_hooks),
				(ae = s.border_size ? s.border_size : 1.5),
				(af = s.popup_color ? s.popup_color : '#ffffff'),
				(O = s.popup_orientation ? s.popup_orientation : 'auto'),
				(N = s.popup_centered ? s.popup_centered : 'auto'),
				(ah = s.popup_opacity ? s.popup_opacity : 0.9),
				(ai = s.popup_shadow > -1 ? s.popup_shadow : 1),
				(aj = s.popup_corners ? s.popup_corners : 5),
				(ak = 'yes' == s.popup_nocss),
				(ag = !!s.popup_maxwidth && s.popup_maxwidth),
				(al = s.popup_font
					? s.popup_font
					: '12px/1.5 Verdana, Arial, Helvetica, sans-serif'),
				(Z = 'no' != s.zoom_out_incrementally),
				(X = s.adjacent_opacity ? s.adjacent_opacity : 0.3),
				(J = s.zoom_time ? s.zoom_time : 0.5),
				(L = s.zoom_increment ? s.zoom_increment : 2),
				(K = 'no' != s.zoom_mobile),
				(U = s.fade_time ? 1e3 * s.fade_time : 200),
				(W = c.labels),
				(M = s.custom_shapes ? s.custom_shapes : {}),
				(R = !!s.initial_back && 'no' != s.initial_back && s.initial_back),
				(V = 'yes' == s.hide_eastern_labels),
				(S = s.link_text ? s.link_text : 'View Website'),
				(P = !!s.order_number && s.order_number),
				(Q = s.zoom_percentage ? s.zoom_percentage : 0.99);
		}
		function bP(a) {
			return 'on_click' == a || ('detect' == a && !!aq);
		}
		var bQ = !1;
		function bR(f) {
			if (
				((av.style.width = ''),
				(aw.style.width = ''),
				z
					? ((aB = av.offsetWidth) < 1 && (aB = av.parentNode.offsetWidth),
					  (aw.style.width = aB + 'px'))
					: ((aB = void 0 === s.width ? 800 : s.width),
					  (av.style.width = aB + 'px')),
				(aB *= 1),
				d.calibrate
					? (((aG = {}).x = -1 * d.calibrate.x_adjust),
					  (aG.y = -1 * d.calibrate.y_adjust),
					  (aG.x2 = aG.x + d.calibrate.width),
					  (aG.y2 = (aG.x2 - aG.x) / d.calibrate.ratio))
					: (aG = d.initial_view),
				(aE = aG.x2 - aG.x),
				(aF = aG.y2 - aG.y),
				(aJ = aE / aF),
				(aC = aB / aJ),
				(aH = aE / 1e3),
				(au.style.height = aC + 'px'),
				!f)
			) {
				if (((aD = aB / aE), (aI = 1), x)) {
					var b = [];
					for (var g in d.state_bbox_array) {
						var h = d.state_bbox_array[g];
						b.push(h);
					}
					var a = e.bbox_union(b),
						i = 0.5 * (a.x2 + a.x) * aD,
						j = 0.5 * (a.y2 + a.y) * aD;
					aA = 'r' + x + ',' + i + ',' + j;
					var c = e.rotate_bbox(aG, aA);
					(aE = c.width), (aF = c.height);
				}
				(aS = 's' + aD + ',' + aD + ',0,0'), (aR = x ? aS + aA : aS);
			}
		}
		function bS(a, b, c) {
			if ((void 0 === c && (c = 'location' == a ? 4 : 1), 'location' == a))
				var d = bx[b];
			else if ('state' == a) var d = bp[b];
			else if ('region' != a) return !1;
			else var d = bq[b];
			var e = function () {
				var a = d.sm.on_click;
				(d.sm.on_click = !0),
					(d.sm.content = ce(d)),
					cX(d.sm.type, d.sm.id, function () {
						(d.sm.on_click = a), (d.sm.content = ce(d));
					});
			};
			'state' == a
				? cy(D, function () {
						d.sm.zoomable || d.sm.region ? cT(d.sm.id, e) : e();
				  })
				: 'location' == a
				? cy(D, function () {
						cV(d.sm.id, c, e);
				  })
				: 'region' == a &&
				  cy(D, function () {
						cU(d.sm.bbox, 1, e);
				  });
		}
		var bT = !1,
			bU = !1;
		function bV() {
			if (l) {
				if (location.hostname.match('simplemaps.com')) {
					l = !1;
					return;
				}
				if (bT) {
					if (Math.random() > 0.05) return;
					e.delete_element(bT);
				}
				((bT = document.createElement('div')).style.cssText =
					'overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom:' +
					(m ? '20px' : '5px') +
					' !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;'),
					au.appendChild(bT),
					(bT.innerHTML =
						'<a style="overflow: visible !important; clip-path: none !important; opacity: 1 !important;  filter: opacity(0) !important; transform: none !important; display: block !important; visibility: visible !important; font: 18px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; font-weight: bold !important; float: right !important; color: #000000 !important; text-decoration: none !important;" href="https://simplemaps.com" title="For evaluation use only.">Simplemaps.com Trial</a>'),
					an || 503 == bT.innerHTML.length || (au.innerHTML = '');
			}
		}
		function bW() {
			a2.hide(), (at.style.display = 'none');
		}
		function bX() {
			a2.show(), (at.style.display = 'none');
		}
		function bY() {
			(bf = c.locations),
				(a9 = []),
				(ba = []),
				(bd = []),
				(be = []),
				(bb = []),
				(bi = []),
				(function () {
					var a = {};
					if (
						((a.color = !1),
						(a.hover_color = !1),
						(a.opacity = s.region_opacity ? s.region_opacity : 1),
						(a.hover_opacity = s.region_hover_opacity
							? s.region_hover_opacity
							: 0.6),
						(a.url = !1),
						(a.description = !1),
						(a.description_mobile = !1),
						(a.inactive = !1),
						(a.zoomable = !0),
						(a.hide_name = 'yes' == s.region_hide_name),
						(a.popup = s.region_popups ? s.region_popups : ar),
						(a.cascade = 'yes' == s.region_cascade_all),
						(a.zoom_percentage = Q),
						(a.x = !1),
						(a.y = !1),
						(a.x2 = !1),
						(a.y2 = !1),
						F)
					)
						for (var d in F)
							for (var e = 0; e < F[d].states.length; e++)
								bd[F[d].states[e]] = d;
					for (var b in F)
						for (var c in ((bb[b] = Object.create(a)),
						F[b].url && (bb[b].zoomable = !1),
						F[b]))
							'default' != F[b][c] && (bb[b][c] = F[b][c]),
								'yes' == F[b][c] && (bb[b][c] = !0),
								'no' == F[b][c] && (bb[b][c] = !1);
				})(),
				(function () {
					for (var a in ((bg = function (b) {
						var a = {};
						(a.color = s.state_color),
							(a.image_url = !!s.state_image_url && s.state_image_url),
							(a.image_size = s.state_image_size ? s.state_image_size : 'auto'),
							(a.image_position = s.state_image_position
								? s.state_image_position
								: 'center'),
							(a.image_x = s.state_image_x ? s.state_image_x : '0'),
							(a.image_y = s.state_image_y ? s.state_image_y : '0'),
							(a.image_color = !!s.state_image_color && s.state_image_color),
							(a.image_background_opacity = s.image_background_opacity
								? s.image_background_opacity
								: '1'),
							(a.image_hover_url =
								!!s.state_image_hover_url && s.state_image_hover_url),
							(a.image_hover_size = s.state_image_hover_size
								? s.state_image_hover_size
								: 'auto'),
							(a.image_hover_position = s.state_image_hover_position
								? s.state_image_hover_position
								: 'center'),
							(a.image_hover_x = s.state_image_hover_x
								? s.state_image_hover_x
								: '0'),
							(a.image_hover_y = s.state_image_hover_y
								? s.state_image_hover_y
								: '0'),
							(a.image_hover_color =
								!!s.state_image_hover_color && s.state_image_hover_color),
							(a.pulse_size = s.state_pulse_size ? s.state_pulse_size : 1.1),
							(a.pulse_speed = s.state_pulse_speed ? s.state_pulse_speed : 1);
						var e = s.state_pulse_color;
						(a.pulse_color = !!e && 'auto' != e && e),
							(a.hover_color = s.state_hover_color),
							(a.image_source = !1),
							(a.description = s.state_description),
							(a.url = s.state_url),
							(a.inactive = 'yes' == s.all_states_inactive),
							(a.hide = 'yes' == s.all_states_hidden),
							(a.hide_label = !1),
							(a.hide_name = 'yes' == s.state_hide_name),
							(a.border_color = s.border_color ? s.border_color : '#ffffff'),
							(a.border_hover_color =
								!!s.border_hover_color && s.border_hover_color),
							(a.border_hover_size =
								!!s.border_hover_size && s.border_hover_size),
							(a.emphasize = 'yes'),
							(a.zoom_percentage = Q),
							(a.zoomable = 'yes' == s.all_states_zoomable),
							(a.popup = s.state_popups ? s.state_popups : ar),
							(a.opacity = s.state_opacity ? s.state_opacity : 1),
							(a.hover_opacity = s.state_hover_opacity
								? s.state_hover_opacity
								: 1),
							(a.description_mobile =
								!!s.state_description_mobile && state_description_mobile),
							a.pu,
							(a.path = !1);
						var c = !!bd[b] && bd[b];
						for (var d in (c && bb[c].hide && (a.hide = !0),
						c &&
							bb[c].cascade &&
							(bb[c].color && (a.color = bb[c].color),
							bb[c].hover_color && (a.hover_color = bb[c].hover_color),
							bb[c].description && (a.description = bb[c].description),
							bb[c].url && (a.url = bb[c].url),
							bb[c].inactive && (a.inactive = bb[c].inactive),
							bb[c].hide && (a.hide = bb[c].hide)),
						(a9[b] = Object.create(a)),
						'us' == k &&
							('GU' == b || 'PR' == b || 'VI' == b || 'MP' == b || 'AS' == b) &&
							(a9[b].hide = 'yes'),
						'us' == k &&
							V &&
							('VT' == b ||
								'NJ' == b ||
								'DE' == b ||
								'DC' == b ||
								'NH' == b ||
								'MA' == b ||
								'CT' == b ||
								'RI' == b ||
								'MD' == b) &&
							(a9[b].hide_label = 'yes'),
						r[b]))
							'default' != r[b][d] && (a9[b][d] = r[b][d]),
								'yes' == r[b][d] && (a9[b][d] = !0),
								'no' == r[b][d] && (a9[b][d] = !1);
						'off' == s.state_hover_color && (a9[b].hover_color = a9[b].color);
					}),
					(bc = {}),
					d.paths))
						bc[a] = !0;
					for (var a in c.state_specific)
						c.state_specific[a] && c.state_specific[a].path && (bc[a] = !0);
					for (var a in bc) bg(a);
				})(),
				(function () {
					var a = {};
					(a.font_family = s.label_font ? s.label_font : 'arial,sans-serif'),
						(a.color = s.label_color ? s.label_color : 'white'),
						(a.hover_color = s.label_hover_color
							? s.label_hover_color
							: a.color),
						(a.opacity =
							s.label_opacity || '0' == s.label_opacity ? s.label_opacity : 1),
						(a.hover_opacity = s.label_hover_opacity
							? s.label_hover_opacity
							: a.opacity),
						(a.size = $),
						(a.hide = 'yes' == s.hide_labels),
						(a.line = !1),
						(a.scale = !!s.label_scale && s.label_scale),
						(a.scale_limit = s.scale_limit ? s.scale_limit : 0.0625),
						(a.rotate = s.label_rotate ? s.label_rotate : 0),
						(a.line_color = s.label_line_color
							? s.label_line_color
							: '#000000'),
						(a.line_size = s.label_line_size ? s.label_line_size : '1'),
						(a.line_x = !1),
						(a.line_y = !1),
						(a.parent_type = 'state'),
						(a.parent_id = !1),
						(a.anchor = s.label_anchor ? s.label_anchor : 'middle'),
						(a.pill = !1),
						(a.width = !!s.pill_width && s.pill_width),
						(a.x = !1),
						(a.y = !1),
						(a.name = 'Not Named'),
						(a.pill_radius = s.pill_radius ? s.pill_radius : 'auto'),
						(a.display = !!s.label_display && s.label_display),
						(a.display_ids = !1),
						(a.id = !1);
					var c = 'no' == s.import_labels ? {} : d.default_labels,
						e = function (b) {
							for (var d in ((be[b] = Object.create(a)), c[b]))
								'default' != c[b][d] && (be[b][d] = c[b][d]),
									'yes' == c[b][d] && (be[b][d] = !0),
									'no' == c[b][d] && (be[b][d] = !1);
						},
						f = function (b) {
							for (var c in (be[b] || (be[b] = Object.create(a)), W[b]))
								'default' != W[b][c] && (be[b][c] = W[b][c]),
									'yes' == W[b][c] && (be[b][c] = !0),
									'no' == W[b][c] && (be[b][c] = !1);
						};
					for (var b in c) e(b);
					for (var b in W) f(b);
					bh = function (a) {
						e(a), f(a);
					};
				})(),
				(function () {
					var a = {},
						e = aq
							? s.scale_limit_mobile
								? s.scale_limit_mobile
								: 0.4
							: 0.0625;
					(a.scale_limit = s.scale_limit ? s.scale_limit : e),
						(a.color = s.location_color ? s.location_color : '#FF0067'),
						(a.hover_color =
							!!s.location_hover_color && s.location_hover_color),
						(a.border = s.location_border ? s.location_border : 1.5),
						(a.border_color = s.location_border_color
							? s.location_border_color
							: '#FFFFFF'),
						(a.hover_border = s.location_hover_border
							? s.location_hover_border
							: 2),
						(a.size = s.location_size),
						(a.description = s.location_description),
						(a.description_mobile =
							!!s.location_description_mobile && location_description_mobile),
						(a.url = s.location_url),
						(a.inactive = 'yes' == s.all_locations_inactive),
						(a.type = s.location_type),
						(a.position = 'top'),
						(a.pulse = 'yes' == s.location_pulse),
						(a.pulse_size = s.location_pulse_size ? s.location_pulse_size : 4),
						(a.pulse_speed = s.location_pulse_speed
							? s.location_pulse_speed
							: 0.5);
					var d = s.location_pulse_color;
					for (var b in ((a.pulse_color = !!d && 'auto' != d && d),
					(a.image_source = s.location_image_source
						? s.location_image_source
						: ''),
					(a.hide = s.all_locations_hide ? s.all_locations_hide : 'no'),
					(a.opacity = ac),
					(a.scale = !s.location_scale || s.location_scale),
					(a.hover_opacity =
						!!s.location_hover_opacity && s.location_hover_opacity),
					(a.image_source = s.location_image_source
						? s.location_image_source
						: ''),
					(a.image_url = !!s.location_image_url && s.location_image_url),
					(a.image_position = s.location_image_position
						? s.location_image_position
						: 'center'),
					(a.image_hover_source = s.location_image_hover_source
						? s.location_image_hover_source
						: ''),
					(a.image_hover_url =
						!!s.location_image_hover_url && s.location_image_hover_url),
					(a.image_hover_position = s.location_image_hover_position
						? s.location_image_hover_position
						: 'center'),
					(a.popup = s.location_popups ? s.location_popups : ar),
					(a.x = !1),
					(a.y = !1),
					(a.display = s.location_display ? s.location_display : 'all'),
					(a.display_ids = !1),
					(a.hide = 'yes' == s.all_locations_hidden),
					(a.hide_name = 'yes' == s.location_hide_name),
					void 0 == a.type && (a.type = 'square'),
					bf)) {
						for (var c in ((ba[b] = Object.create(a)), bf[b])) {
							if ('overwrite_image_location' == c) {
								ba[b].image_url = bf[b][c];
								continue;
							}
							'region' == c && (ba[b].display = 'region'),
								'default' != bf[b][c] && (ba[b][c] = bf[b][c]),
								'yes' == bf[b][c] && (ba[b][c] = !0),
								'no' == bf[b][c] && (ba[b][c] = !1);
						}
						ba[b].hover_opacity || (ba[b].hover_opacity = ba[b].opacity),
							ba[b].hover_color || (ba[b].hover_color = ba[b].color);
					}
				})(),
				(function () {
					var b = {};
					(b.color = s.line_color ? s.line_color : '#000000'),
						(b.size = s.line_size ? s.line_size : 1.5),
						(b.dash = s.line_dash ? s.line_dash : ''),
						(b.origin_location = !1),
						(b.destination_location = !1),
						(b.angle = !1);
					var e = c.lines ? c.lines : c.borders;
					for (var a in e)
						for (var d in ((bi[a] = Object.create(b)), e[a]))
							'default' != e[a][d] && (bi[a][d] = e[a][d]),
								'yes' == e[a][d] && (bi[a][d] = !0),
								'no' == e[a][d] && (bi[a][d] = !1);
				})();
		}
		var bZ = !1,
			b$ = !1,
			b_ = !1;
		function b0(i, j) {
			if ('lambert' == d.proj)
				var b = function (d) {
					var b = Math.PI,
						j = 0.017453293 * d.lat,
						e = 0.017453293 * d.lng,
						f = 1.57079637,
						c = 0.575958669,
						g = 0.785398185,
						a =
							Math.log(Math.cos(c) * (1 / Math.cos(g))) /
							Math.log(
								Math.tan(0.25 * b + 0.5 * g) *
									(1 / Math.tan(0.25 * b + 0.5 * c)),
							),
						h = (Math.cos(c) * Math.pow(Math.tan(0.25 * b + 0.5 * c), a)) / a,
						i = h * Math.pow(1 / Math.tan(0.25 * b + 0.5 * j), a);
					return {
						x: i * Math.sin(a * (e - f)),
						y:
							h * Math.pow(1 / Math.tan(0.25 * b + 0.3926990925), a) -
							i * Math.cos(a * (e - f)),
					};
				};
			else if ('xy' == d.proj)
				var b = function (a) {
					return { x: a.lng, y: a.lat };
				};
			else if ('robinson_pacific' == d.proj)
				var b = function (b) {
					var a = b.lng - 150;
					return a < -180 && (a += 360), n({ lat: b.lat, lng: a });
				};
			else if ('mercator' == d.proj)
				var b = function (a) {
					var b =
						Math.log(Math.tan((a.lat / 90 + 1) * (Math.PI / 4))) *
						(180 / Math.PI);
					return { x: a.lng, y: b };
				};
			else var b = n;
			var k = { lat: i, lng: j };
			function n(b) {
				var j = function (a, b) {
						return Math.floor(b / a) * a;
					},
					g = function (a) {
						return a < 0 ? -1 : 1;
					},
					k = g(b.lng),
					l = g(b.lat),
					m = Math.abs(b.lng),
					d = Math.abs(b.lat),
					a = j(5, d - 1e-10);
				a = 0 == d ? 0 : a;
				var c = a / 5,
					h = (a + 5) / 5,
					i = (d - a) / 5,
					e = [
						0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851,
						0.814752, 0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645,
						0.67777182, 0.64475739, 0.60987582, 0.57134484, 0.52729731,
						0.48562614, 0.45167814,
					],
					f = [
						0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556,
						0.5868982, 0.67182264, 0.75336633, 0.83518048, 0.91537187,
						0.99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062,
						1.31998003, 1.3523,
					],
					n = (e[h] - e[c]) * i + e[c],
					o = (f[h] - f[c]) * i + f[c];
				return { x: n * m * 0.017453293 * k * 1, y: o * l * 1 };
			}
			var a = d.proj_coordinates;
			function l(A, i, j, k) {
				var l,
					m,
					d,
					v,
					w,
					n,
					f,
					g,
					a,
					h,
					o,
					p,
					q,
					r,
					s,
					t = b(A),
					x = b(i),
					y = b(j),
					B = b(k),
					C = e.distance(t, x),
					D = e.distance(t, y),
					E = e.distance(x, y),
					F = e.distance(i, j),
					u = E / F,
					c =
						((l = i.x),
						(m = i.y),
						(d = C / u),
						(v = j.x),
						(w = j.y),
						(n = D / u),
						(f = v - l),
						(g = w - m),
						(a = Math.sqrt(g * g + f * f)),
						(h = (d * d - n * n + a * a) / (2 * a)),
						(o = l + (f * h) / a),
						(p = m + (g * h) / a),
						(q = Math.sqrt(d * d - h * h)),
						(r = -g * (q / a)),
						(s = f * (q / a)),
						{ opt1: { x: o + r, y: p + s }, opt2: { x: o - r, y: p - s } }),
					z = e.distance(t, B) / u,
					G = Math.abs(e.distance(c.opt1, k) - z),
					H = Math.abs(e.distance(c.opt2, k) - z);
				return G < H
					? { x: c.opt1.x, y: c.opt1.y }
					: { x: c.opt2.x, y: c.opt2.y };
			}
			function m(a, b, h) {
				var c = /lat[ ]?<([-]?\d+[\.]?\d+)/g.exec(o);
				if (c && a > e.to_float(c[1])) return !1;
				var d = /lat[ ]?>([-]?\d+[\.]?\d+)/g.exec(o);
				if (d && a < e.to_float(d[1])) return !1;
				var f = /lng[ ]?<([-]?\d+[\.]?\d+)/g.exec(o);
				if (f && b > e.to_float(f[1])) return !1;
				var g = /lng[ ]?>([-]?\d+[\.]?\d+)/g.exec(o);
				return !(g && b < e.to_float(g[1]));
			}
			var c = d.proj_rules;
			if (c)
				for (var f = 0; f < c.length; f++) {
					var g = c[f],
						o = g.condition;
					if (m(i, j, g.condition)) {
						var h = g.points;
						return l(k, a[h[0]], a[h[1]], a[h[2]]);
					}
				}
			return l(k, a[0], a[1], a[2]);
		}
		var b1 = !1;
		function b2(c) {
			if (c.sm.zooming_dimensions) return c.sm.zooming_dimensions;
			var g,
				d = e.rotate_bbox(c.sm.bbox, aR),
				h = d.x,
				i = d.y,
				a = d.width,
				b = d.height,
				f = c.sm.zp,
				j = aE * aD,
				k = aF * aD;
			return (
				(h -= (a / f - a) * 0.5),
				(i -= (b / f - b) * 0.5),
				(a /= f),
				(b /= f),
				a / b > aJ
					? ((i -= (k * (g = a / j) - b) / 2), (b = a / aJ))
					: ((h -= (j * (g = b / k) - a) / 2), (a = b * aJ)),
				{ x: h, y: i, w: a, h: b, r: g }
			);
		}
		function b3(a) {
			if (a) {
				aX.stop();
				for (var b = 0; b < a.sm.states.length; ++b) {
					var c = bp[a.sm.states[b]];
					c.attr(c.sm.attributes), cw(c, 'reset', !1, 'state');
				}
			}
		}
		function b4(a) {
			if (a) {
				a.stop(), a.attr(a.sm.attributes);
				for (var b = 0; b < a.sm.states.length; ++b)
					cw(bp[a.sm.states[b]], 'reset', !1, 'region');
			}
		}
		function b5() {
			aY.forEach(function (a) {
				-1 != a.sm.id && b4(a);
			});
		}
		function b6(c, f) {
			var b,
				g,
				h,
				a = c.sm.display,
				i = f.sm.type;
			if ('all' == a || ('out' == a && 'out' == i)) return !0;
			if ('region' == a && 'region' == i)
				return (
					(b = c),
					(g = f),
					(h = b.sm.point0),
					b.sm.display_ids
						? b.sm.display_ids.indexOf(g.sm.id) > -1
						: !!Raphael.isPointInsideBBox(g.sm.bbox, h.x, h.y)
				);
			if ('state' == a && 'state' == i)
				return (function (b, c) {
					var a = b.sm.point0;
					if (b.sm.display_ids) return b.sm.display_ids.indexOf(c.sm.id) > -1;
					if (Raphael.isPointInsideBBox(c.sm.bbox, a.x, a.y)) {
						var e = d.paths[c.sm.id];
						if (Raphael.isPointInsidePath(e, a.x, a.y)) return !0;
					}
					return !1;
				})(c, f);
			var j = e.to_float(a);
			return !!j && !!(aI < j);
		}
		function b7(a, c, d) {
			var b = { transform: c };
			am || aq || d ? a.attr(b) : a.animate(b, 1e3 * J);
		}
		function b8(a, c) {
			var d,
				f,
				b = a.sm.type;
			bW(),
				(d = a),
				(f = c),
				aZ.hide(),
				aZ.forEach(function (a) {
					if (!a.sm.hide && (b6(a, d) && a.show(), a.sm.scale)) {
						var b = aI > a.sm.scale_limit ? aI : a.sm.scale_limit,
							c = cp(a, b * aD);
						b7(a, c, f);
					}
				}),
				(function (d, b) {
					for (var e in (a0.hide(), bt)) {
						var a = bt[e];
						if (!a.sm.hide) {
							if ((b6(a, d) && bu[a.sm.id].show(), a.sm.line)) {
								var f = co(a);
								a.sm.line.attr({ path: f, transform: aR });
							}
							if (a.sm.scale) {
								var g = aI > a.sm.scale_limit ? aI : a.sm.scale_limit,
									c = cp(a, g * aD);
								b7(a, c, b), a.sm.pill && b7(bw[a.sm.id], c, b);
							}
						}
					}
				})(a, c),
				e.x_in_array(b, ['state', 'region', 'out']) && b5(),
				'region' == b
					? b3(a)
					: 'state' == b
					? b3(bq[a.sm.region])
					: 'manual' == b &&
					  aY.forEach(function (a) {
							-1 != a.sm.id &&
								(a.sm.zooming_dimensions.r > aI && a.sm.zoomable
									? b3(a)
									: b4(a));
					  }),
				'out' != b && 'manual' != b
					? (aX.stop(),
					  aW.stop(),
					  aX.attr({ 'fill-opacity': X }),
					  aW.attr({ 'fill-opacity': X }),
					  a.stop(),
					  a.attr({ 'fill-opacity': 1 }),
					  a.sm.labels.forEach(function (a) {
							a.sm &&
								a.sm.pill &&
								(a.sm.pill.stop(), a.sm.pill.attr({ 'fill-opacity': 1 }));
					  }),
					  a.animate(
							{
								'stroke-width': a.sm.border_hover_size * (aB / aE) * aH * 1.25,
							},
							1e3 * J,
					  ))
					: (aX.attr({ 'fill-opacity': 1 }), aW.attr({ 'fill-opacity': 1 })),
				aX.animate({ 'stroke-width': ae * (aB / aE) * aH * 1.25 }, 1e3 * J);
		}
		function b9(a) {
			B && '-1' != A && 'region' == a.sm.type
				? !R || bX()
				: 'state' == a.sm.type || 'region' == a.sm.type || R
				? bX()
				: y && 'out' != a.sm.type && bX();
		}
		function ca(a) {
			return { x: a.x, y: a.y, w: a.w, h: a.h };
		}
		function cb() {
			D.sm && E && (bK.hide(), (E = !1), D.sm && bE.call(D), (ap = !1));
		}
		function cc(a, c, g) {
			if (!bZ) {
				cb(),
					cA && (cA.stop(), (cA = !1)),
					cz && a != cz && bE.call(cz),
					(D = !1),
					(bk = a),
					bK.hide(),
					(E = !1),
					(bZ = !0),
					(a.sm.zooming_dimensions = b2(a));
				var b = ca(a.sm.zooming_dimensions),
					d = ca(br.sm.zooming_dimensions);
				(aI = a.sm.zooming_dimensions.r),
					b8(a, c),
					am || (aq && !K) || c
						? ((bm = b), aK.setViewBox(b.x, b.y, b.w, b.h, !1), h())
						: (bl = (f.Tweenable ? new f.Tweenable() : new Tweenable()).tween({
								from: d,
								to: b,
								duration: 1e3 * J,
								easing: 'easeOutQuad',
								step: function (b) {
									var a;
									(bm = a = b), aK.setViewBox(a.x, a.y, a.w, a.h, !1);
								},
								finish: function () {
									h(b);
								},
						  }));
			}
			function h() {
				b9(a, c),
					(br = a),
					(bZ = !1),
					(ap = !1),
					c5(),
					bN('zooming_complete', []),
					e.isFunction(g) && g();
			}
		}
		function cd(h) {
			var c = '',
				g = {};
			for (var e in d.paths) {
				var a,
					f = d.paths[e];
				f = Raphael._pathToAbsolute(f);
				var b = Raphael.pathBBox(f),
					i = b.x2 - b.x;
				a = i < 10 ? 10 : 1;
				var j = Math.round(b.x * a) / a,
					k = Math.round(b.y * a) / a,
					l = Math.round(b.y2 * a) / a,
					m = Math.round(b.x2 * a) / a;
				(c +=
					"'" + e + "':{x: " + j + ',y:' + k + ',x2:' + m + ',y2:' + l + '},'),
					(g[e] = b);
			}
			return (
				(c = c.substring(0, c.length - 1)),
				(c += '}'),
				h || console.log('The new state_bbox_array is: \n\n{' + c),
				g
			);
		}
		function ce(a) {
			var g = a.sm.description,
				l =
					'<a id="xpic_sm_' +
					b +
					'" href="#"><img src="data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%20256%20256%22%20height%3D%22256px%22%20id%3D%22Layer_1%22%20version%3D%221.1%22%20viewBox%3D%220%200%20256%20256%22%20width%3D%22256px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M137.051%2C128l75.475-75.475c2.5-2.5%2C2.5-6.551%2C0-9.051s-6.551-2.5-9.051%2C0L128%2C118.949L52.525%2C43.475%20%20c-2.5-2.5-6.551-2.5-9.051%2C0s-2.5%2C6.551%2C0%2C9.051L118.949%2C128l-75.475%2C75.475c-2.5%2C2.5-2.5%2C6.551%2C0%2C9.051%20%20c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875s3.275-0.625%2C4.525-1.875L128%2C137.051l75.475%2C75.475c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875%20%20s3.275-0.625%2C4.525-1.875c2.5-2.5%2C2.5-6.551%2C0-9.051L137.051%2C128z%22%2F%3E%3C%2Fsvg%3E" style="width: 100%" alt="Close" border="0" /></a>',
				m = '<a style="line-height: 1.5" id="xpic_sm_' + b + '">X</a>',
				c = am ? m : l;
			c = '<div class="xmark_sm">' + c + '</div>';
			var d = a.sm.url ? a.sm.url : '',
				h = d,
				i = 'javascript:' == h.substring(0, 11),
				n = e.replaceAll(h, "'", '"'),
				j = ab
					? 'return (function(e){window.open("' +
					  d +
					  '","_blank"); return false})()'
					: i
					? 'return (function(){window.location.href="' +
					  d +
					  '"; return false;})()'
					: 'return (function(){window.top.location.href="' +
					  d +
					  '"; return false;})()';
			i && (j = '(function(){' + n + '})()');
			var f = a.sm.description_mobile
				? a.sm.description_mobile
				: '<div class="tt_mobile_sm"><a tabindex="0" class="btn_simplemaps" onClick=\'' +
				  j +
				  "'>" +
				  S +
				  '</a></div>';
			a.sm.on_click || ((c = ''), (f = '')),
				'' != a.sm.url || a.sm.description_mobile || (f = '');
			var k =
				'' == g ? (k = '') : '<div class="tt_custom_sm"; />' + g + '</div>';
			return (
				'<div class="tt_sm"><div>' +
				(a.sm.hide_name
					? ''
					: '<div class="tt_name_sm">' + a.sm.name + '</div>') +
				c +
				'<div style="clear: both;"></div></div>' +
				k +
				f +
				'</div></div>'
			);
		}
		function cf(g, d) {
			var a = g.sm.zooming_dimensions;
			if (a.w > d.sm.zooming_dimensions.w) return !1;
			var b = d.sm.bbox,
				c = { x: b.x * aD, y: b.y * aD, x2: b.x2 * aD, y2: b.y2 * aD },
				e = a.x + a.w / 2,
				f = a.y + a.h / 2;
			return e > c.x && f > c.y && e < c.x2 && f < c.y2;
		}
		function cg(k, a) {
			var p = a.hover ? '_hover' : '',
				l = b + '_pattern_' + k.sm.id + p,
				m = document.getElementById(l);
			m && e.delete_element(m);
			var g = au.firstChild,
				h = g.namespaceURI,
				n = g.querySelector('defs'),
				c = document.createElementNS(h, 'pattern'),
				q = k.sm.id;
			(c.id = l), c.setAttribute('patternUnits', 'objectBoundingBox');
			var o = document.createElementNS(h, 'image'),
				i = document.createElementNS(h, 'rect'),
				t = a.image_color ? a.image_color : a.color;
			i.setAttribute('fill', '#ffffff'),
				i.setAttribute('opacity', a.bg_opacity),
				o.setAttributeNS(
					'http://www.w3.org/1999/xlink',
					'xlink:href',
					a.image_url,
				),
				c.appendChild(i),
				c.appendChild(o),
				n.appendChild(c),
				g.appendChild(n);
			var j = a.image_position,
				u = 'auto' == a.image_size,
				v = 'repeat' == j,
				w = 'manual' == j,
				y = 'center' == j,
				f = Raphael.pathBBox(d.paths[q]),
				r = f.x2 - f.x,
				s = f.y2 - f.y,
				z = r / s;
			return (
				Raphael._preload(a.image_url, function () {
					var e,
						f,
						b,
						k = this.offsetWidth,
						l = this.offsetHeight,
						d = k / l,
						m =
							((b = a.image_size),
							u
								? v || w
									? (b =
											d > 1 ? (k > r ? 1 : k / r) : l > s ? 1 / z : l / s / z)
									: y && ((b = d / z), d > z || (b = 1 / b))
								: b > 1 && (b = (a.image_size * aH) / r),
							b),
						g = r * m,
						n = g / d,
						h = 0,
						j = 0;
					if (
						(v
							? ((e = m), (f = (m * z) / d))
							: w
							? ((e = 1), (f = 1), (h = a.image_x * r), (j = a.image_y * s))
							: y &&
							  ((e = 1), (f = 1), (h = 0.5 * (r - g)), (j = 0.5 * (s - n))),
						i.setAttribute('x', 0),
						i.setAttribute('y', 0),
						i.setAttribute('width', r),
						i.setAttribute('height', s),
						i.setAttribute('fill', t),
						i.setAttribute('opacity', '1'),
						c.setAttribute('y', 0),
						c.setAttribute('x', 0),
						c.setAttribute('y', 0),
						c.setAttribute('width', e),
						c.setAttribute('height', f),
						o.setAttribute('x', h),
						o.setAttribute('y', j),
						o.setAttribute('width', g),
						x)
					) {
						var p = h + 0.5 * g,
							q = j + 0.5 * n;
						o.setAttribute(
							'transform',
							'rotate(-' + x + ',' + p + ',' + q + ')',
						);
					}
					o.setAttribute('height', n);
				}),
				'url("#' + c.id + '")'
			);
		}
		var ch = !1;
		function ci(a) {
			a || ((bo = {}), (bp = {})), (ch = d.state_bbox_array);
			var c = ae * aD * aH * 1.25;
			for (var b in ((bn = function (e) {
				var n,
					g = !bp[e],
					a = a9[e],
					o = a.path ? a.path : d.paths[e],
					b = g ? aK.path(o) : bp[e];
				g && (b.sm = { id: e }),
					am || b.node.setAttribute('class', 'sm_state sm_state_' + e);
				var h = {
						fill: a.color,
						opacity: a.opacity,
						stroke: a.border_color,
						cursor: 'pointer',
						'stroke-opacity': 1,
						'stroke-width': c,
						'stroke-linejoin': 'round',
					},
					p = a.border_hover_color ? a.border_hover_color : s.border_color,
					m = a.border_hover_size ? a.border_hover_size : ae,
					k = {
						opacity: a.hover_opacity,
						fill: a.hover_color,
						stroke: p,
						'stroke-width': m * aD * aH * 1.25,
					};
				if (((b.sm.image = !1), a.image_url && !am)) {
					var l = {
							hover: !1,
							image_url: a.image_url,
							image_size: a.image_size,
							image_position: a.image_position,
							image_x: a.image_x,
							image_y: a.image_y,
							image_color: a.image_color,
							bg_opacity: a.image_background_opacity,
						},
						j = cg(b, l);
					if (((b.sm.image = !0), (h.fill = j), a.image_hover_url)) {
						var l = {
								hover: !0,
								image_url: a.image_hover_url,
								image_size: a.image_hover_size,
								image_position: a.image_hover_position,
								image_x: a.image_hover_x,
								image_y: a.image_hover_y,
								image_color: a.image_hover_color,
								bg_opacity: a.image_background_opacity,
							},
							j = cg(b, l);
						k.fill = j;
					} else k.fill = j;
				}
				a.inactive && (h.cursor = 'default'),
					a.image_source &&
						((b.sm.ignore_hover = !0),
						(h.fill = 'url(' + q + a.image_source + ')')),
					(a.border_hover_color || a.border_hover_size) && a.emphasize
						? (b.sm.emphasizable = !0)
						: (b.sm.emphasizable = !1),
					(b.sm.border_hover_size = m),
					b.attr(h),
					b.transform(aR),
					(b.sm.attributes = h),
					(b.sm.over_attributes = k),
					(b.sm.description = a.description),
					(b.sm.adjacent_attributes = { 'fill-opacity': X }),
					(b.sm.hide = a.hide),
					(b.sm.hide_label = a.hide_label),
					(b.sm.hide_name = a.hide_name),
					g && (b.sm.region = !1),
					(b.sm.name = a.name ? a.name : d.names[e]),
					b.sm.name || (b.sm.name = e),
					(b.sm.url = a.url),
					(b.sm.inactive = a.inactive),
					(b.sm.on_click = bP(a.popup)),
					(b.sm.popup_off = 'off' == (n = a.popup)),
					(b.sm.labels = []),
					(b.sm.zp = a.zoom_percentage),
					(b.sm.zoomable = a.zoomable),
					(b.sm.description_mobile = a.description_mobile),
					(b.sm.type = 'state'),
					(b.sm.hide_labels = a.hide_label),
					(b.sm.content = ce(b));
				var f = ch[e];
				f || (f = Raphael.pathBBox(d.paths[e]));
				var i = { x: f.x, x2: f.x2, y: f.y, y2: f.y2 };
				(b.sm.bbox = i),
					(b.sm.bbox.width = i.x2 - i.x),
					(b.sm.bbox.height = i.y2 - i.y),
					(b.sm.pulse_speed = a.pulse_speed),
					(b.sm.pulse_size = a.pulse_size),
					(b.sm.pulse_color = a.pulse_color ? a.pulse_color : a.border_color),
					b.sm.hide ? b.hide() : g && aN.push(b),
					g && ((bp[e] = b), aX.push(b));
			}),
			bc))
				bn(b);
			bn[-1], aX.hide();
		}
		function cj() {
			aU.attr({ fill: s.background_color, 'fill-opacity': Y, stroke: 'none' });
		}
		var ck = !1;
		function cl(i) {
			if ((i || (bq = {}), F))
				for (var c in F) {
					var b = bb[c],
						j = F[c],
						a = i ? bq[c] : aK.set();
					if (!i) {
						if (((a.sm = {}), (a.sm.states = []), bq[c])) {
							console.log('Duplicate Regions');
							continue;
						}
						for (var k = [], l = 0; l < j.states.length; l++) {
							var m = j.states[l],
								d = bp[m];
							if (!d) {
								console.log(m + ' does not exist');
								continue;
							}
							if (d.sm.region) {
								console.log(d.sm.name + ' already assigned to a region');
								continue;
							}
							(d.sm.region = c),
								a.sm.states.push(m),
								(am && d.sm.ignore_hover && (b.color || b.hover_color)) ||
									a.push(d),
								k.push(d.sm.bbox);
						}
						b.x &&
							b.y &&
							b.x2 &&
							b.y2 &&
							(k = [{ x: b.x, y: b.y, x2: b.x2, y2: b.y2 }]),
							(a.sm.bbox = e.bbox_union(k));
					}
					var q,
						n = { 'fill-opacity': b.opacity, cursor: 'pointer' },
						o = { 'fill-opacity': b.hover_opacity };
					b.color && (n.fill = b.color),
						b.hover_color && (o.fill = b.hover_color),
						b.inactive && (n.cursor = 'default'),
						(a.sm.attributes = n),
						(a.sm.name = j.name),
						(a.sm.description = b.description),
						(a.sm.description_mobile = b.description_mobile),
						(a.sm.url = b.url),
						(a.sm.labels = aK.set()),
						(a.sm.on_click = bP(b.popup)),
						(a.sm.over_attributes = o),
						(a.sm.hide_name = b.hide_name),
						(a.sm.adjacent_attributes = { 'fill-opacity': X }),
						(a.sm.zoomable = b.zoomable),
						(a.sm.popup_off = 'off' == (q = b.popup)),
						(a.sm.zp = b.zoom_percentage),
						(a.sm.inactive = b.inactive),
						(a.sm.type = 'region'),
						(a.sm.id = c),
						(a.sm.content = ce(a)),
						i || (aY.push(a), (bq[c] = a)),
						(a.sm.zooming_dimensions = b2(a));
				}
			if (!i) {
				bq[-1] = {};
				var f = bq[-1];
				(f.sm = {}), (f.sm.type = 'out'), (f.sm.zp = 1);
				var g = e.clone(aG);
				if (
					((g.width = g.x2 - g.x),
					(g.height = g.y2 - g.y),
					(f.sm.bbox = g),
					(f.sm.zooming_dimensions = b2(f)),
					(br = f),
					'object' == typeof A
						? (((bs = {}).sm = { type: 'manual', zp: 1, bbox: A }),
						  (bs.sm.zooming_dimensions = b2(bs)),
						  (A = -1),
						  (B = !1))
						: -1 == A ||
						  A in bq ||
						  (A in bp
								? ((ck = bp[A]), (B = !1))
								: console.log(
										'The initial_zoom is not the id of a region or state',
								  ),
						  (A = -1)),
					w)
				) {
					bq[-2] = {};
					var p = bq[-2];
					p.sm = { type: 'manual', zp: 1 };
					var h = b2(bq[A]),
						r = h.w,
						s = h.h,
						t = h.w * (w - 1) * 0.5,
						u = h.h * (w - 1) * 0.5;
					p.sm.zooming_dimensions = {
						x: h.x - t,
						y: h.y - u,
						w: r * w,
						h: s * w,
						r: w,
					};
				}
			}
		}
		function cm(c) {
			var a = c.getBBox(!0);
			if (am) {
				var f = c._getBBox(!0);
				a.height = f.height;
			}
			var d = 0.5 * a.width,
				e = 0.5 * a.height,
				b = c.sm.point0;
			return {
				x: b.x - d,
				y: b.y - e,
				x2: b.x + d,
				y2: b.y + e,
				width: a.width,
				height: a.height,
			};
		}
		function cn() {
			for (var a in (e.clear_sets([a0, aM, aW]),
			(bt = {}),
			(bw = {}),
			(bu = {}),
			(be = be.reverse()),
			(bv = function (g) {
				var b = be[g],
					C = !1,
					D = !1;
				if (be.hasOwnProperty(g)) {
					var O = !bt[g],
						j = aK.set(),
						u = { x: 1 * b.x, y: 1 * b.y },
						k = {},
						c = !1,
						v = !1;
					if (
						('state' == b.parent_type
							? (c = bp[b.parent_id])
							: 'region' == b.parent_type
							? (c = bq[b.parent_id])
							: 'location' == b.parent_type && (c = bx[b.parent_id]),
						!b.x && !b.y && c)
					) {
						if ('location' == c.sm.type)
							(D = !0),
								(k.x = c.sm.x),
								(k.y = c.sm.y),
								(u = c.sm.point0),
								(C = !0),
								c.sm.auto_size && (v = !0);
						else if ('state' == c.sm.type) {
							var o = c.sm.bbox;
							if (o.cx && o.cy)
								var h = I,
									i = J;
							else
								var h = (o.x + o.x2) / 2,
									i = (o.y + o.y2) / 2;
							(b.x = h), (b.y = i), (k.x = h), (k.y = i), (u = { x: h, y: i });
						}
					}
					if ((b.parent_type, !c)) {
						console.log('The following object does not exist: ' + g);
						return;
					}
					if (('Not Named' == b.name && c && (b.name = c.sm.id), O)) {
						if (!D) {
							var E = e.rotate([b.x, b.y], aR);
							k = { x: E[0], y: E[1] };
						}
						var a = aK.text(k.x, k.y, b.name);
						bt[g] = a;
					} else var a = bt[g];
					(a.sm = {}),
						(a.sm.hide = b.hide),
						c && (c.sm.hide_label || c.sm.hide) && (a.sm.hide = !0),
						(a.sm.parent = c),
						c.sm.labels.push(a),
						c.sm.region && bq[c.sm.region].sm.labels.push(a);
					var w = {
							'stroke-width': 0,
							fill: b.color,
							'font-size': b.size,
							'font-weight': 'bold',
							cursor: 'pointer',
							'font-family': b.font_family,
							'text-anchor': b.anchor,
							opacity: b.opacity,
						},
						P = { fill: b.hover_color, opacity: b.hover_opacity },
						Q = { fill: b.color, opacity: b.opacity };
					if (
						(c.sm.inactive && (w.cursor = 'default'),
						a.attr(w),
						(a.sm.attributes = w),
						(a.sm.over_attributes = P),
						(a.sm.out_attributes = Q),
						(a.sm.type = 'label'),
						(a.sm.id = g),
						(a.sm.scale = C || b.scale),
						(a.sm.scale_limit = b.scale_limit),
						(a.sm.x = k.x),
						(a.sm.y = k.y),
						(a.sm.point0 = u),
						(a.sm.line_x = b.line_x),
						(a.sm.line_y = b.line_y),
						(a.sm.line = !1),
						(a.sm.rotate = b.rotate),
						a.transform(cp(a, aD)),
						b.display
							? (a.sm.display = b.display)
							: 'region' == b.parent_type
							? (a.sm.display = 'out')
							: 'location' == b.parent_type
							? (a.sm.display = c.sm.display)
							: (a.sm.display = s.labels_display ? s.labels_display : 'all'),
						(a.sm.display_ids = !!b.display_ids && b.display_ids),
						(b.line || b.pill || v) && (a.sm.bbox = cm(a)),
						'auto' == b.display && 'state' == b.parent_type)
					) {
						(a.sm.display = 1e-4), a.sm.bbox || (a.sm.bbox = cm(a));
						var F = [1.01, 0.501, 0.251, 0.1251, 0.06251, 0.031251],
							q = d.paths[c.sm.id],
							r = c.sm.bbox;
						for (var R in F) {
							var t = F[R],
								n = cm(a),
								G = n.width * t * 0.5,
								H = n.height * t * 0.5,
								I = 0.5 * (n.x2 + n.x),
								J = 0.5 * (n.y2 + n.y),
								h = I - G,
								x = I + G,
								i = J - H,
								y = J + H,
								S = h > r.x && x < r.x2,
								T = i > r.y && y < r.y2;
							if (S && T) {
								var U = Raphael.isPointInsidePath(q, h, i),
									V = Raphael.isPointInsidePath(q, x, i),
									W = Raphael.isPointInsidePath(q, h, y),
									X = Raphael.isPointInsidePath(q, x, y),
									Y = U && V && W && X,
									Z = n.width / t < aE;
								if (Y && Z) {
									a.sm.display = t;
									break;
								}
							}
							if (!a.sm.scale) break;
						}
					}
					if (b.line) {
						var $ = co(a),
							l = aK.path($),
							aa = b.line_size * aH * aD * 1.25,
							ab = {
								stroke: b.line_color,
								cursor: 'pointer',
								'stroke-width': aa,
							};
						l.attr(ab),
							(l.sm = {}),
							(l.sm.type = 'label'),
							(a.sm.pill = !1),
							(l.sm.size = b.line_size),
							(l.sm.id = g),
							(a.sm.line = l),
							aM.push(l),
							j.push(l);
					}
					if ('state' == c.sm.type && b.pill) {
						var K = a.sm.bbox,
							L = 0.15,
							ac = K.width * (1 + 3 * L),
							M = b.width ? b.width : ac,
							z = K.height * (1 + L),
							h = a.sm.x - 0.5 * M,
							i = a.sm.y - 0.5 * z,
							ad = 'auto' != b.pill_radius ? b.pill_radius : z / 5;
						if (bw[g]) var f = bw[g];
						else {
							var f = aK.rect(h, i, M, z, ad);
							bw[g] = f;
						}
						if (
							(f.transform(cp(a, aD)),
							(f.sm = {}),
							(f.sm.parent = c),
							(f.sm.attributes = e.clone(c.sm.attributes)),
							c.sm.image && (f.sm.attributes.fill = a9[c.sm.id].color),
							(f.sm.over_attributes = e.clone(c.sm.over_attributes)),
							c.sm.image &&
								(f.sm.over_attributes.fill = a9[c.sm.id].hover_color),
							(f.sm.adjacent_attributes = e.clone(c.sm.adjacent_attributes)),
							f.attr(f.sm.attributes),
							e.x_in_array(a.sm.display, ['state', 'all']) &&
								(c.sm.bbox = e.bbox_union([c.sm.bbox, a.sm.bbox])),
							e.x_in_array(a.sm.display, ['region', 'all']) && c.sm.region)
						) {
							var p = bq[c.sm.region];
							(p.sm.bbox = e.bbox_union([p.sm.bbox, a.sm.bbox])),
								(p.sm.zooming_dimensions = !1),
								(p.sm.zooming_dimensions = b2(p));
						}
						(a.sm.pill = f), aW.push(f), j.push(f), j.push(a);
					} else j.push(a);
					if (
						(('out' != a.sm.display && 'all' != a.sm.display) || a.sm.hide
							? j.hide()
							: aQ.push(j),
						'location' != a.sm.parent.sm.type || a.sm.line || aO.push(j),
						a0.push(j),
						(bu[g] = j),
						am || a.node.setAttribute('class', 'sm_label sm_label_' + g),
						v)
					) {
						var A =
								((s.location_auto_padding
									? 1 + 2 * s.location_auto_padding
									: 1.3) *
									a.sm.bbox.width) /
								aH,
							m = a.sm.parent,
							ae = m.sm.labels,
							N = m.sm.shape_type;
						'triangle' == N ? (A *= 1.3) : 'star' == N && (A *= 2);
						var B = m.sm.id;
						(ba[B].size = A), by(B);
						var m = bx[B];
						(a.sm.parent = m),
							(m.sm.labels = ae),
							m.sm.labels.push(a),
							(m.sm.auto_size = !0);
					}
				}
			}),
			be))
				bv(a);
			a0.hide();
		}
		function co(b) {
			var a = b.sm.bbox,
				r = a.x2 - a.x,
				s = a.y2 - a.y,
				i = b.sm.scale ? aI : 1,
				j = 0.5 * (1 - i) * r,
				k = 0.5 * (1 - i) * s,
				f = b.sm.line_x,
				g = b.sm.line_y,
				l = !f || !g,
				m = b.sm.parent.sm.type;
			if ('location' == m && l)
				(f = b.sm.parent.sm.point0.x), (g = b.sm.parent.sm.point0.y);
			else if ('state' == m && l) {
				var h = b.sm.parent.sm.bbox;
				(f = 0.5 * (h.x2 + h.x)), (g = 0.5 * (h.y2 + h.y));
			}
			var n = { x: f, y: g },
				d = [];
			d.push({ x: a.x2 - j, y: 0.5 * (a.y + a.y2) }),
				d.push({ x: a.x + j, y: 0.5 * (a.y + a.y2) }),
				d.push({ x: 0.5 * (a.x + a.x2), y: a.y + k }),
				d.push({ x: 0.5 * (a.x + a.x2), y: a.y2 - k });
			var c = {};
			for (var o in d) {
				var p = d[o],
					q = e.distance(p, n);
				(0 == o || q < c.distance) &&
					((c.label = p), (c.location = n), (c.distance = q));
			}
			return e.linePath(c.label.x, c.label.y, c.location.x, c.location.y);
		}
		function cp(a, d, b, e, f, c) {
			var g = void 0 === e ? a.sm.x : e,
				h = void 0 === f ? a.sm.y : f;
			return (
				void 0 === b && (b = '0,0'),
				void 0 === c && (c = a.sm.rotate),
				't ' + b + ' s' + d + ',' + d + ',' + g + ',' + h + 'r' + c
			);
		}
		var cq = {
			triangle: 'M -0.57735,.3333 .57735,.3333 0,-.6666 Z',
			diamond: 'M 0,-0.5 -0.4,0 0,0.5 0.4,0 Z',
			marker:
				'm-.015-.997c-.067 0-.13.033-.18.076-.061.054-.099.136-.092.219-.0001.073.034.139.068.201.058.104.122.206.158.32.021.058.039.117.058.175.006.009.011-.004.011-.009.037-.125.079-.249.144-.362.043-.08.095-.157.124-.244.022-.075.016-.161-.026-.229-.048-.08-.134-.136-.227-.146-.013-.0001-.027-.0001-.04-.0001z',
			heart:
				'm-.275-.5c-.137.003-.257.089-.3.235-.073.379.348.539.58.765.202-.262.596-.33.576-.718-.017-.086-.065-.157-.13-.206-.087-.066-.208-.089-.311-.05-.055.02-.106.053-.143.098-.065-.081-.169-.127-.272-.125',
			star: 'm0-.549c-.044.126-.084.252-.125.379-.135.0001-.271.0001-.405.002.108.078.216.155.323.233-.002.029-.016.057-.023.085-.032.099-.066.199-.097.298.049-.031.095-.068.143-.101.062-.044.124-.089.185-.133.109.077.216.158.326.233-.04-.127-.082-.253-.123-.379.109-.079.219-.156.327-.236-.135-.0001-.27-.002-.405-.003-.042-.126-.081-.252-.125-.377',
		};
		function cr(c) {
			for (var a in M) cq[a] = M[a];
			var b = [];
			for (var a in cq) b.push(a);
			for (var a in (e.clear_sets([aZ]),
			(bx = {}),
			(by = function (i) {
				var y,
					m = 'center',
					a = ba[i];
				if ('image' != a.type)
					var k = {
							'stroke-width': a.border * aD * aH,
							stroke: a.border_color,
							fill: a.color,
							opacity: a.opacity,
							cursor: 'pointer',
						},
						n = {
							'stroke-width': a.hover_border * aD * aH,
							stroke: a.border_color,
							fill: a.hover_color,
							opacity: a.hover_opacity,
							cursor: 'pointer',
						};
				else {
					m = a.image_position;
					var k = { cursor: 'pointer' },
						n = { cursor: 'pointer' };
				}
				a.inactive && (k.cursor = 'default');
				var g = ba[i].type,
					h = a.size * aH;
				if (a.x && a.y) {
					var j = {};
					(j.x = a.x), (j.y = a.y);
				} else var j = b0(a.lat, a.lng);
				var u = e.rotate([j.x, j.y], aR),
					d = { x: u[0], y: u[1] };
				if ('auto' == a.size) {
					var f = { sm: {} };
					(f.sm.display = a.display),
						(f.sm.auto_size = !0),
						(f.sm.type = 'location'),
						(f.sm.hide_label = !1),
						(f.sm.labels = []),
						(f.sm.point0 = j),
						(f.sm.x = d.x),
						(f.sm.y = d.y),
						(f.sm.shape_type = g),
						(f.sm.id = i),
						(bx[i] = f);
					return;
				}
				if ('circle' == g)
					var c = aK.circle(d.x, d.y, 0.5 * h),
						l = {
							x: d.x - 0.5 * h * aI,
							y: d.y - 0.5 * h * aI,
							x2: d.x + 0.5 * h * aI,
							y2: d.y + 0.5 * h * aI,
						};
				else if (e.x_in_array(g, b)) {
					var v = h,
						z = 'S' + v + ',' + v + ',0,0 T' + d.x + ',' + d.y,
						w = Raphael.transformPath(cq[g], z).toString() + 'Z';
					'marker' == g && (m = 'bottom-center');
					var l = Raphael.pathBBox(w),
						c = aK.path(w);
				} else if ('image' == g) {
					var o = a.image_url ? a.image_url : q + a.image_source,
						c = aK.image(o, 0, 0);
					(k.src = o), (c.sm = {});
					var l = !1;
					if (
						(Raphael._preload(o, function () {
							var g = this.width / this.height,
								a = h,
								b = a * g,
								e = d.x - b / 2,
								f = 'bottom-center' == m ? d.y - a : d.y - a / 2;
							c.attr({ height: a, width: b, x: e, y: f }),
								(c.sm.bbox = { x: e, y: f, x2: e + b, y2: f + a });
						}),
						a.image_hover_url || a.image_hover_source)
					) {
						var A = a.image_hover_url
							? a.image_hover_url
							: q + a.image_hover_source;
						n.src = A;
					}
				} else
					var p = h,
						r = p,
						s = d.x - r / 2,
						t = d.y - p / 2,
						c = aK.rect(s, t, r, p),
						l = { x: s, y: t, x2: s + r, y2: t + aC };
				(c.sm = {}),
					(c.sm.image = 'image' == g),
					(c.sm.attributes = k),
					c.attr(k),
					(c.sm.original_transform = aR),
					(c.sm.over_attributes = n),
					(c.sm.id = i),
					(c.sm.name = a.name),
					(c.sm.scale = a.scale),
					(c.sm.scale_limit = a.scale_limit),
					(c.sm.position = m),
					(c.sm.url = a.url),
					(c.sm.type = 'location'),
					(c.sm.shape_type = g),
					(c.sm.description = a.description),
					(c.sm.description_mobile = a.description_mobile),
					(c.sm.inactive = a.inactive),
					(c.sm.on_click = bP(a.popup)),
					(c.sm.popup_off = 'off' == (y = a.popup)),
					(c.sm.pulse = a.pulse);
				var x = 'bottom' == a.position;
				(c.sm.underlay = x),
					(c.sm.pulse_speed = a.pulse_speed),
					(c.sm.pulse_size = a.pulse_size),
					(c.sm.pulse_color = a.pulse_color ? a.pulse_color : a.color),
					(c.sm.x = d.x),
					(c.sm.y = d.y),
					(c.sm.point0 = j),
					(c.sm.bbox = l),
					(c.sm.labels = []),
					(c.sm.size = h),
					(c.sm.hide = a.hide),
					(c.sm.hide_name = a.hide_name),
					(c.sm.display = a.display),
					(c.sm.display_ids = !!a.display_ids && a.display_ids),
					c.transform(cp(c, aI * aD)),
					('region' == c.sm.display || 'state' == c.sm.display || a.hide) &&
						c.hide(),
					(c.sm.content = ce(c)),
					x ? a_.push(c) : a$.push(c),
					aZ.push(c),
					(bx[i] = c),
					am || c.node.setAttribute('class', 'sm_location sm_location_' + i);
			}),
			bf))
				by(a);
		}
		function cs(c) {
			var d = a.zoom_level,
				e = a.zoom_level_id,
				b = !!c.sm.region && bq[c.sm.region];
			return b
				? 'out' == d
					? b
					: 'region' == d
					? e == b.sm.id
						? c
						: b
					: 'state' == d
					? bp[e].sm.region === b.sm.id
						? c
						: b
					: 'manual' == d
					? aI > b.sm.zooming_dimensions.r || !b.sm.zoomable
						? b
						: c
					: void 0
				: c;
		}
		function ct(b) {
			var c = a.zoom_level,
				d = a.zoom_level_id;
			if ('state' == c) return d != b.sm.id;
			if ('region' != c) return !1;
			var e = !!b.sm.region && bq[b.sm.region];
			return !e || (d != e.sm.id && void 0);
		}
		var cu = function (a, d, c, b) {
				void 0 == c && (c = !1),
					void 0 == b && (b = !1),
					b ||
						(b =
							'over' == d
								? a.sm.over_attributes
								: 'adjacent' == d
								? a.sm.adjacent_attributes
								: a.sm.attributes),
					!c || a.sm.image ? a.attr(b) : a.animate(b, U);
			},
			cv = function (b, c, d) {
				if ((void 0 == d && (d = !1), 'state' == d))
					var f,
						a = b.sm.parent;
				else if ('region' == d) var a = bq[b.sm.parent.sm.region];
				else var a = cs(b.sm.parent);
				if (
					((f =
						'over' == c
							? e.clone(a.sm.over_attributes)
							: 'adjacent' == c
							? e.clone(a.sm.adjacent_attributes)
							: e.clone(a.sm.attributes)),
					a.sm.image && 'state' == a.sm.type)
				) {
					var g = a9[a.sm.id];
					'over' == c ? (f.fill = g.hover_color) : (f.fill = g.color);
				}
				cu(b, c, !1, f);
			};
		function cw(a, b, c, d) {
			a.sm.labels &&
				a.sm.labels.forEach(function (a) {
					if (a.sm) {
						var e = a.sm.pill;
						'over' == b
							? (a.stop(), cu(a, 'over'), e && cv(e, 'over'))
							: ('reset' == b || 'out' == b) &&
							  (cu(a, 'out'),
							  e && (cv(e, 'out', d), c && cv(e, 'adjacent', d)));
					}
				});
		}
		var cx = !1,
			cy = function (a, b) {
				if (!a) {
					b();
					return;
				}
				var c = !!a.sm.image || (!!aq && !!y);
				if ((bK.hide(), ct(a)))
					a.sm.ignore_hover || a.animate(a.sm.attributes, U, d),
						a.animate(a.sm.adjacent_attributes, U, d),
						cw(a, 'out', !0);
				else {
					if (
						(am && 'location' == a.sm.type && 'image' == a.sm.shape_type) ||
						!a ||
						!a.sm
					)
						return;
					a.sm.ignore_hover ||
						(c
							? (a.attr(a.sm.attributes), d())
							: a.animate(a.sm.attributes, U, d)),
						cw(a, 'out');
				}
				function d() {
					e.isFunction(b) && b();
				}
			},
			cz = !1,
			cA = !1;
		function cB(a) {
			if (a.touches) {
				var b = a.changedTouches ? a.changedTouches[0] : a.touches[0];
				return { x: b.clientX, y: b.clientY };
			}
			var c = an ? a.clientY + document.documentElement.scrollTop : a.pageY,
				d = an ? a.clientX + document.documentElement.scrollLeft : a.pageX;
			return { x: d, y: c };
		}
		var cC = function () {
			cb();
		};
		function cD() {
			aX.toBack(),
				a_.toBack(),
				aT.toBack(),
				aP && aP.toFront(),
				a0.toFront(),
				a$.toFront(),
				aO.toFront();
		}
		function cE(a) {
			a ||
				(ao
					? (aX.mouseup(bC), aT.mouseup(cC), a2.mouseup(bI), aT.mouseup(cW))
					: (aX.hover(bD, bE),
					  aX.click(bC),
					  aT.click(cC),
					  a2.click(bI),
					  aT.hover(cW, cW)),
				z && cF(),
				y &&
					(aX.touchstart(bC),
					aX.touchend(bC),
					a2.touchend(bH),
					(function () {
						function d(e) {
							var a = cB(e),
								i = a.x,
								j = a.y,
								b = (g - i) * f.r,
								c = (h - j) * f.r,
								d = 5 * f.r;
							return (
								(Math.abs(b) > d || Math.abs(c) > d) && (b$ = !0),
								{ x: f.x + b, y: f.y + c, w: f.w, h: f.h, r: f.r }
							);
						}
						var f,
							g,
							h,
							i = !1;
						function b(a) {
							if (E) return !1;
							a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
								(f = { x: bm.x, y: bm.y, w: bm.w, h: bm.h, r: bm.w / aE / aD }),
								(i = !0);
							var b = cB(a);
							(g = b.x), (h = b.y), bK.hide(), bK.pos(a, { l: g, u: h });
						}
						function c(b) {
							if (i && (!b.touches || !(b.touches.length > 1))) {
								var a = d(b);
								aK.setViewBox(a.x, a.y, a.w, a.h);
							}
						}
						function a(b) {
							if (!i || !b$) {
								(b$ = !1), (i = !1);
								return;
							}
							var a = d(b);
							aK.setViewBox(a.x, a.y, a.w, a.h),
								(bm = a),
								((br = { sm: {} }).sm.zooming_dimensions = bm),
								(br.sm.type = 'manual'),
								(i = !1),
								setTimeout(function () {
									b$ = !1;
								}, 1),
								bX();
						}
						e.addEvent(au, 'mousedown', b),
							e.addEvent(au, 'mousemove', c),
							e.addEvent(au, 'mouseup', a),
							e.addEvent(au, 'mouseleave', a),
							e.addEvent(au, 'touchstart', b),
							e.addEvent(au, 'touchmove', c),
							e.addEvent(au, 'touchend', a);
					})(),
					(function () {
						var b = !1;
						function a(a) {
							if (!bZ && a.touches && a.touches.length > 1) {
								b_ = !0;
								var c =
									((g = { x: (f = a).touches[0].pageX, y: f.touches[0].pageY }),
									(h = { x: f.touches[1].pageX, y: f.touches[1].pageY }),
									e.distance(g, h));
								if (b) {
									var f,
										g,
										h,
										d = c - b;
									Math.abs(d) > 10 && (d > 0 ? a6() : a7(), (b = c));
								} else b = c;
							}
						}
						e.addEvent(aw, 'touchstart', a),
							e.addEvent(aw, 'touchmove', a),
							e.addEvent(aw, 'touchend', function (a) {
								(b = !1),
									setTimeout(function () {
										b_ = !1;
									}, 100);
							});
					})()),
				(av.mouseIsOver = !1),
				(av.onmouseover = function () {
					this.mouseIsOver = !0;
				}),
				(av.onmouseout = function () {
					this.mouseIsOver = !1;
				}),
				(av.onwheel = function (a) {
					av.mouseIsOver &&
						y &&
						G &&
						(a.preventDefault(), a.deltaY < 0 ? a6() : a7());
				}),
				e.addEvent(document, 'keyup', function (a) {
					'auto' == u &&
						(aw.contains(document.activeElement)
							? (ay.style.display = 'block')
							: (ay.style.display = 'none'));
				})),
				aZ.hover(bD, bE),
				aZ.click(bC),
				a0.hover(bF, bG),
				a0.click(bB),
				y && (aZ.touchend(bC), aZ.touchstart(bC), a0.touchend(bB));
		}
		function cF() {
			var a;
			function b() {
				cG();
			}
			(bJ = function () {
				clearTimeout(a), (a = setTimeout(b, 200));
			}),
				window.addEventListener
					? (window.addEventListener('resize', bJ, !1),
					  window.addEventListener('orientationchange', bJ, !1))
					: (window.attachEvent('resize', bJ, !1),
					  window.attachEvent('orientationchange', bJ, !1)),
				am &&
					(document.body.onresize = function () {
						b();
					});
		}
		function cG() {
			if (!(av.offsetWidth < 1)) {
				bR(!0), aK.setSize(aB, aC);
				var a = ae * (aB / aE) * aH * 1.25;
				aX &&
					aZ &&
					(aX.forEach(function (b) {
						b.attr({ 'stroke-width': a }),
							(b.sm.attributes['stroke-width'] = a),
							(b.sm.over_attributes['stroke-width'] =
								b.sm.border_hover_size * (aB / aE) * aH * 1.25);
					}),
					aZ.forEach(function (a) {
						'image' != ba[a.sm.id].type &&
							((a.sm.attributes['stroke-width'] =
								ba[a.sm.id].border * (aB / aE) * aH * 1.25),
							(a.sm.over_attributes['stroke-width'] =
								ba[a.sm.id].hover_border * (aB / aE) * aH * 1.25),
							a.attr({ 'stroke-width': a.sm.attributes['stroke-width'] }));
					}),
					aM.forEach(function (a) {
						var b = a.sm.size * (aB / aE) * aH * 1.25;
						a.attr({ 'stroke-width': b });
					}),
					aP.forEach(function (a) {
						var b = a.sm.size * (aB / aE) * aH * 1.25;
						a.attr({ 'stroke-width': b });
					})),
					bV(),
					(bj = ag || (aB / 2 > 250 ? aB / 2 : 250));
			}
		}
		function cH(c) {
			var g = w ? bq[-2] : bq[A],
				d = bq[A];
			if ((R || bW(), !c)) {
				if (ck) var e = ck;
				else if (bs) var e = bs;
				else var e = g;
				cc(e, (!ck && !bs) || !w);
			}
			if (B && -1 != A) {
				aT.show(), R || bW();
				for (var a = 0; a < d.sm.states.length; a++) {
					var f = bp[d.sm.states[a]];
					f.sm.hide || f.show();
				}
				for (var a in bt) {
					var b = bt[a],
						h = bu[a];
					b.sm.parent &&
						('state' != b.sm.parent.sm.type ||
							(b.sm.parent.sm.region == d.sm.id && b.sm.parent.sm.region) ||
							((b.sm.hide = !0), h.hide()));
				}
				aP.forEach(function (a) {
					Raphael.isPointInsideBBox(d.sm.bbox, a.sm.bbox.x, a.sm.bbox.y) &&
						a.show();
				}),
					!c && w && cc(bq[A]);
				return;
			}
			aT.show(),
				aN.show(),
				aQ.show(),
				aP.show(),
				c || !w || ck || bs || cc(bq[A]);
		}
		function cI(a) {
			bO(),
				bY(),
				ci(!0),
				cl(!0),
				cr(!0),
				cn(),
				cj(),
				b8(br, !0),
				cD(),
				cE(!0),
				cG(),
				cH(!0),
				b9(br),
				c6(),
				cM(!0),
				bN('refresh_complete', []),
				e.isFunction(a) && a();
		}
		function g(bb) {
			var g,
				l,
				J,
				bc,
				bd,
				be,
				bf,
				bg,
				M,
				V,
				X,
				Y,
				$,
				aa,
				bh,
				bk,
				P,
				Q,
				ac,
				ad,
				S,
				ae,
				K,
				U,
				f,
				aA,
				aJ,
				a9,
				ba;
			if (
				((c = a.mapdata),
				(d = a.mapinfo),
				au && delete window.paper,
				j(),
				(r = c.state_specific),
				(s = c.main_settings),
				(g = document.getElementsByTagName('script')),
				(l = g[g.length - 1].src),
				(J = 'no' != s.back_image && s.back_image),
				(o = 'no' != s.back_image_url && s.back_image_url),
				(p = 'default' != s.images_directory && s.images_directory),
				(q =
					p || l.substring(0, l.lastIndexOf('/usmap.js') + 1) + 'map_images/'),
				!o && J && (o = q + J),
				(am = 'VML' == Raphael.type),
				(an = !!window.document.documentMode),
				(ao = !!e.isMobile.iOS()),
				(aq = !!e.isMobile.any()),
				(ar = s.pop_ups ? s.pop_ups : s.popups),
				(as =
					void 0 === s.mobile_scaling && 'no' != s.mobile_scaling
						? 1
						: s.mobile_scaling),
				(ap = !1),
				(bQ = 'off' == (aa = ar)),
				(b = void 0 === s.div ? 'map' : s.div),
				(A = void 0 === s.initial_zoom ? -1 : s.initial_zoom),
				(B = 'yes' == s.initial_zoom_solo && -1 != A),
				(w =
					void 0 !== s.fly_in_from && 'no' != s.fly_in_from && s.fly_in_from),
				(z = 'responsive' == s.width),
				(x = !!s.rotate && s.rotate),
				'0' == x && (x = !1),
				(T = 'no' != s.zoom),
				(y = 'yes' == s.manual_zoom),
				(u = void 0 === s.keyboard_navigation ? 'auto' : s.keyboard_navigation),
				(v = void 0 === s.legend_position ? 'inside' : s.legend_position),
				(G = 'no' != s.allow_scrolling),
				(F = !!d.default_regions && !!T && d.default_regions),
				c.regions && (F = c.regions),
				c.labels && (W = c.labels),
				(C = !1),
				(D = !1),
				(E = !1),
				(t = !1),
				(function () {
					if ('continent' != k) return !1;
					var a = 0;
					for (var b in d.paths) a++;
					return a > 8;
				})())
			) {
				alert("The continent map can't be used with other data.");
				return;
			}
			bO(),
				(function () {
					if (
						((av = document.getElementById(b)),
						(aw =
							!!document.getElementById(b + '_holder') &&
							document.getElementById(b + '_holder')))
					) {
						av.removeChild(aw);
						var a = document.getElementById('tt_sm_' + b);
						a && a.parentNode.removeChild(a);
					}
					(aw = document.createElement('div')),
						(at = document.createElement('div')),
						(ay = document.createElement('div')),
						(ax = document.createElement('div')),
						(au = document.createElement('div')),
						(az = document.createElement('div')),
						(at.id = b + '_outer'),
						(ax.id = b + '_zoom'),
						(ay.id = b + '_access'),
						(az.id = b + '_legend'),
						(au.id = b + '_inner'),
						(aw.id = b + '_holder'),
						(aw.style.position = 'relative'),
						aw.setAttribute('tabIndex', 0),
						(aw.style.outline = 'none'),
						(au.style.position = 'relative'),
						(at.style.position = 'absolute'),
						(ax.style.position = 'absolute'),
						(ay.style.position = 'absolute'),
						(ay.style.maxWidth = '75%'),
						(az.style.position = 'inside' == v ? 'absolute' : 'relative'),
						(ax.style.zIndex = '1'),
						(at.style.zIndex = '1'),
						(ay.style.zIndex = '1'),
						(ay.style.display = 'yes' == u ? 'block' : 'none'),
						(az.style.zIndex = '1'),
						av.appendChild(aw),
						aw.appendChild(ax),
						aw.appendChild(at),
						aw.appendChild(ay),
						aw.appendChild(au),
						aw.appendChild(az);
				})(),
				bR(),
				(function () {
					if (
						((aT = (aK = Raphael(au, aB, aC)).set()),
						(aU = aK.rect(aG.x - 2 * aE, aG.y - 2 * aF, 5 * aE, 5 * aF)),
						H)
					) {
						H.indexOf('/osm/noattr/') > -1 && (m = !0);
						var a = I || aG;
						(aV = aK.image(H, a.x, a.y, a.x2 - a.x, a.y2 - a.y)), aT.push(aV);
					}
					aT.push(aU),
						aT.transform(aS),
						aT.hide(),
						(aX = aK.set()),
						(aN = aK.set()),
						(aY = aK.set()),
						(aZ = aK.set()),
						(a$ = aK.set()),
						(a_ = aK.set()),
						(a0 = aK.set()),
						(aO = aK.set()),
						(aQ = aK.set()),
						(aP = aK.set()),
						(aW = aK.set()),
						(aM = aK.set()),
						(aL = aK.set()),
						aL.push(aX, aZ, aT, a0, aP);
				})(),
				bV(),
				(function () {
					((bU = document.createElement('div')).style.cssText =
						'overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom: 5px !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;'),
						au.appendChild(bU);
					var b =
						'font: 12px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; float: right !important; color: #000000 !important; text-decoration: none !important;';
					if (m) {
						var a = document.createElement('a');
						(a.href = 'https://www.openstreetmap.org/copyright'),
							(a.title = 'Background \xa9 OpenStreetMap contributors'),
							(a.innerHTML = '&copy; OSM'),
							(a.style.cssText = b),
							(a.style.marginLeft = '.5em'),
							bU.appendChild(a);
					}
				})(),
				ak ||
					(function () {
						if (!b1) {
							var c = i([
									'borderRadius',
									'MozBorderRadius',
									'WebkitBorderRadius',
								]),
								g = aq ? 2 * aj : aj,
								h = c ? c + ': ' + g + 'px;' : '';
							bj = ag || (aB / 2 > 250 ? aB / 2 : 250);
							var d = i(['boxShadow', 'MozBoxShadow', 'WebkitBoxShadow']),
								f = d
									? d +
									  ': ' +
									  3 * ai +
									  'px ' +
									  3 * ai +
									  'px ' +
									  4 * ai +
									  'px rgba(0,0,0,.5);'
									: '';
							if ((ai < 0.01 && (f = ''), aq)) {
								var a = /(\d+)(px|em)(.*)/g.exec(al);
								al = parseFloat(a[1]) * as + a[2] + a[3];
							}
							var b =
								'.tt_mobile_sm{margin-top: .4em;} .tt_sm{' +
								h +
								f +
								'z-index: 1000000; background-color: ' +
								af +
								'; padding: .6em; opacity:' +
								ah +
								'; font: ' +
								al +
								'; color: black;} .tt_name_sm{float: left; font-weight: bold} .tt_custom_sm{overflow: hidden;}';
							(b +=
								'.btn_simplemaps{color: black;text-decoration: none;background: #ffffff;display: inline-block;padding: .5em .5em;margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; line-height: 1.43;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid;border-radius: .3em;}    .btn_simplemaps:hover{  text-decoration: underline;}'),
								(b +=
									'.xmark_sm{float: ' +
									(am ? 'left' : 'right') +
									'; margin-left: .5em; cursor: pointer; line-height: 0px; width: 1.3em !important;}'),
								e.new_style(b),
								(b1 = !0);
						}
						function i(c) {
							for (var d = document.documentElement, b = 0; b < c.length; b++)
								if (c[b] in d.style) {
									var a = c[b];
									return (a = (a = (a = (a = (a = a.replace(
										'borderRadius',
										'border-radius',
									)).replace('MozBorderRadius', '-moz-border-radius')).replace(
										'WebkitBorderRadius',
										'-webkit-border-radius',
									)).replace('boxShadow', 'box-shadow')).replace(
										'MozBoxShadow',
										'-moz-box-shadow',
									)).replace('WebkitBoxShadow', '-webkit-box-shadow');
								}
						}
					})(),
				(bK =
					((V = (M = e.findPos(au))[0]),
					(X = M[1]),
					(Y = 0),
					($ = 0),
					{
						create: function () {
							(bg = document.createElement('div')).setAttribute(
								'id',
								'tt_sm_' + b,
							),
								(bg.style.position = 'absolute'),
								(bg.style.display = 'none'),
								au.appendChild(bg),
								(au.onmousemove = this.pos),
								(bg.onmousemove = this.pos);
						},
						show: function (a) {
							bQ ||
								((t = !1),
								null == bg && bK.create(),
								(bg.style.display = 'block'),
								(bg.style.zIndex = 2),
								(bg.style.maxWidth = bj + 'px'),
								(bg.innerHTML = a.sm.content),
								bK.update_pos(a));
						},
						reset_pos: function (a, b, c) {
							void 0 == bg && bK.create(), bK.set_pos(0 + b, 0 + a, c);
						},
						update_pos: function (a) {
							bK.set_pos(bc, bd, a);
						},
						pos: function (b, a) {
							a
								? ((bc = a.u), (bd = a.l))
								: ((bc = an
										? event.clientY + document.documentElement.scrollTop
										: b.pageY),
								  (bd = an
										? event.clientX + document.documentElement.scrollLeft
										: b.pageX)),
								(bc -= X),
								(bd -= V),
								bQ || C || t || (E && ap) || bK.set_pos(bc, bd);
						},
						set_pos: function (b, c, d) {
							if (bg) {
								if (
									!(
										d &&
										d.sm.on_click &&
										('yes' == N || ('auto' == N && aB < 401))
									) &&
									b &&
									c
								) {
									if (
										((be = 0 + 0.5 * aB), (bf = 0 + 0.5 * aC), c > be && b > bf)
									)
										a = 4;
									else if (c < be && b > bf) a = 3;
									else if (c > be && b < bf) a = 2;
									else var a = 1;
									'below' == O
										? (3 == a && (a = 1), 4 == a && (a = 2))
										: 'above' == O && (1 == a && (a = 3), 2 == a && (a = 4)),
										1 == a
											? ((bg.style.bottom = 'auto'),
											  (bg.style.top = b + 5 + 'px'),
											  (bg.style.left = c + 5 + 5 + 'px'),
											  (bg.style.right = 'auto'))
											: 2 == a
											? ((bg.style.bottom = 'auto'),
											  (bg.style.top = b + 5 + 'px'),
											  (bg.style.right = aB - c + 5 + 'px'),
											  (bg.style.left = 'auto'))
											: 3 == a
											? ((bg.style.bottom = aC - b + 5 + 'px'),
											  (bg.style.top = 'auto'),
											  (bg.style.left = c + 5 + 3 + 'px'),
											  (bg.style.right = 'auto'))
											: ((bg.style.bottom = aC - b + 5 + 'px'),
											  (bg.style.top = 'auto'),
											  (bg.style.right = aB - c + 5 + 'px'),
											  (bg.style.left = 'auto'));
								} else {
									(bg.style.top = '-100px'),
										(bg.style.left = '-100px'),
										(bg.style.bottom = 'auto'),
										(bg.style.right = 'auto'),
										(Y = parseInt(bg.offsetHeight, 10));
									var e =
											aB - ($ = parseInt(bg.offsetWidth, 10)) > 0
												? 0.5 * (aB - $)
												: 0,
										f = aC - Y > 0 ? 0.5 * (aC - Y) : 0;
									(bg.style.top = f + 'px'),
										(bg.style.left = e + 'px'),
										(bg.style.right = 'auto'),
										(bg.style.bottom = 'auto');
								}
							}
						},
						hide: function () {
							void 0 != bg && (bg.style.display = 'none'),
								(M = e.findPos(au)) && ((V = M[0]), (X = M[1]));
						},
					})),
				(P = s.navigation_color ? s.navigation_color : '#f7f7f7'),
				(Q = s.navigation_border_color ? s.navigation_border_color : '#636363'),
				(ac = s.navigation_opacity ? s.navigation_opacity : 0.8),
				(ad = s.arrow_color ? s.arrow_color : P),
				(S = s.arrow_color_border ? s.arrow_color_border : Q),
				(ae = s.arrow_border_color ? s.arrow_border_color : S),
				(K = void 0 === s.navigation_size ? 40 : s.navigation_size),
				(U =
					void 0 === s.navigation_size_mobile
						? as * K
						: s.navigation_size_mobile),
				(f = aq ? U : K),
				(aA = 'yes' == s.arrow_box ? 1 : 0),
				(f *= 1),
				(aJ = f),
				(a9 = 0.1 * f),
				(ba = f / 10),
				(function () {
					a2 = aK.set();
					var c = f,
						d = f;
					if (o) {
						var b = new Image();
						(b.onload = function () {
							(bh = b.width), (bk = b.height), e();
						}),
							(b.src = o);
					} else e();
					function e() {
						if (o) {
							var b = (a1 = Raphael(at, bh, bk)).image(o, 0, 0, bh, bk);
							(aJ = bk),
								b.attr({ cursor: 'pointer' }),
								a2.push(b),
								a2.click(bI);
						} else {
							a1 = Raphael(at, c, d);
							var e = 1,
								g = a1.path(n.rounded_box).attr({
									fill: ad,
									'stroke-width': 1,
									stroke: ae,
									'stroke-opacity': aA,
									'fill-opacity': 0,
									cursor: 'pointer',
								}),
								h = {
									stroke: ae,
									'stroke-width': 1.5,
									'stroke-opacity': 1,
									fill: ad,
									'fill-opacity': e,
									cursor: 'pointer',
								},
								i = a1.path(n.arrow).attr(h);
							(a2 = aK.set()).push(g, i);
							var j = 'S' + ba + ',' + ba + ',0,0 T0,0';
							a2.transform(j);
						}
						R || bW(),
							(at.style.left = a9 + 'px'),
							(at.style.top = a9 + 'px'),
							y &&
								(function k() {
									a5 = Raphael(ax, f, 2 * f + a9);
									var g = n.plus,
										h = n.minus,
										c = n.rounded_box,
										i = a5.path(c).attr({
											fill: P,
											'stroke-width': 1,
											stroke: Q,
											'stroke-opacity': 1,
											'fill-opacity': ac,
											cursor: 'pointer',
										}),
										j = a5.path(g).attr({
											'stroke-width': 0,
											'stroke-opacity': 0,
											fill: Q,
											'fill-opacity': 1,
											opacity: 1,
											cursor: 'pointer',
										});
									(a3 = aK.set()).push(i, j);
									var b = 'S' + ba + ',' + ba + ',0,0 T0,0';
									a3.transform(b);
									var d = a5.path(c).attr({
											fill: P,
											'stroke-width': 1,
											stroke: Q,
											'stroke-opacity': 1,
											'fill-opacity': ac,
											cursor: 'pointer',
										}),
										e = a5.path(h).attr({
											'stroke-width': 0,
											'stroke-opacity': 0,
											fill: Q,
											'fill-opacity': 1,
											opacity: 1,
											cursor: 'pointer',
										});
									(a4 = aK.set()).push(d, e);
									var b = 'S' + ba + ',' + ba + ',0,0 T0,' + (f + a9);
									function l(b, a) {
										if ((void 0 === a && (a = 'z'), D && 'region' != D.sm.type))
											bE.call(D, !0, function () {
												(D = !1), l(b);
											});
										else {
											if (
												'z' == a &&
												!(function (a) {
													var b = br.sm.zooming_dimensions.w / a,
														c = a < 1;
													if (-1 != A && ('manual' == br.sm.type || B)) {
														var d = b > bq[A].sm.zooming_dimensions.w - 1;
														if (c && d && (cf(br, bq[A]) || B))
															return cc(bq[A]), !1;
													}
													return (
														!c ||
														!(b > bq[-1].sm.zooming_dimensions.w - 1) ||
														(B || cc(bq[-1]), !1)
													);
												})(b)
											)
												return;
											var c = { sm: { type: 'manual', zp: 1 } };
											bl &&
												(((br = {
													sm: { type: 'manual', zp: 1 },
												}).sm.zooming_dimensions = bm),
												(br.sm.bbox = {
													x: bm.x / aD,
													y: bm.y / aD,
													width: bm.w / aD,
													height: bm.h / aD,
												}));
											var d = (function (a, f) {
												var b = br.sm.zooming_dimensions.w,
													c = br.sm.zooming_dimensions.h,
													d = br.sm.zooming_dimensions.x,
													e = br.sm.zooming_dimensions.y;
												if ('x' == f)
													var d =
														br.sm.zooming_dimensions.x +
														br.sm.zooming_dimensions.w * a;
												else if ('y' == f)
													var e =
														br.sm.zooming_dimensions.y +
														br.sm.zooming_dimensions.h * a;
												else
													var b = br.sm.zooming_dimensions.w / a,
														c = br.sm.zooming_dimensions.h / a,
														d =
															br.sm.zooming_dimensions.x +
															(br.sm.zooming_dimensions.w - b) / 2,
														e =
															br.sm.zooming_dimensions.y +
															(br.sm.zooming_dimensions.h - c) / 2;
												return { x: d, y: e, w: b, h: c, r: b / (aE * aD) };
											})(b, a);
											if (!d) return;
											(c.sm.zooming_dimensions = d), cc(c);
										}
									}
									a4.transform(b),
										(ax.style.top = aJ + 2 * a9 + 'px'),
										(ax.style.left = a9 + 'px'),
										(a4 = aK.set()).push(d, e),
										(a6 = function () {
											l(L);
										}),
										(a8 = function (a, b) {
											l(a, b);
										}),
										(a7 = function () {
											l(1 / L);
										}),
										(a.zoom_in = a6),
										(a.zoom_out = a7),
										a3.click(a6),
										a4.click(a7),
										a3.touchend(a6),
										a4.touchend(a7);
								})();
					}
				})(),
				bY(),
				cj(),
				ci(),
				cl(),
				setTimeout(function () {
					var d;
					cr(),
						cn(),
						(function () {
							var h = c.lines ? c.lines : c.borders;
							if (h) {
								for (var i in h) {
									var k = h[i],
										a = bi[i],
										l = a.size * (aB / aE) * aH * 1.25,
										e = !1;
									if (a.origin_location && a.destination_location) {
										var b = bx[a.origin_location].sm.point0,
											f = bx[a.destination_location].sm.point0;
										if (
											((e =
												'M ' + b.x + ',' + b.y + ' ' + f.x + ',' + f.y + ' Z'),
											a.angle)
										) {
											var g = parseFloat(a.angle);
											if (g > -61 && g < 61) {
												b.x <= f.x && (g *= -1);
												var m = Raphael.transformPath(
														e,
														'R' + g + ',' + b.x + ',' + b.y + 'S2',
													).toString(),
													n = Raphael.transformPath(e, 'R-90S2').toString(),
													j = Raphael.pathIntersection(m, n)[0];
												e =
													'M ' +
													b.x +
													',' +
													b.y +
													' C' +
													b.x +
													',' +
													b.y +
													',' +
													j.x +
													',' +
													j.y +
													',' +
													f.x +
													',' +
													f.y;
											}
										}
									}
									var o = e || k.path,
										d = aK.path(o);
									d.transform(aR),
										d.attr({
											stroke: a.color,
											fill: 'none',
											cursor: 'pointer',
											'stroke-dasharray': [a.dash],
											'stroke-width': l,
											'stroke-linejoin': 'round',
											'stroke-miterlimit': 4,
										}),
										(d.sm = {}),
										(d.sm.size = a.size),
										(d.sm.bbox = d.getBBox(!0)),
										am || d.node.setAttribute('class', 'sm_line sm_line_' + i),
										aP.push(d);
								}
								aP.hide();
							}
						})(),
						(function () {
							(ay.style.right = '0em'), (ay.style.top = '0em');
							var m =
									void 0 === s.navigate_title ? 'Navigate' : s.navigate_title,
								h = void 0 === s.keyboard_omit ? '' : s.keyboard_omit,
								n = h.indexOf('navigat') > -1;
							if (!n) {
								var a = document.createElement('select');
								a.options.add(new Option(m, '-1')),
									a.options.add(new Option('Back', 'back')),
									y &&
										(a.options.add(new Option('Zoom in', 'in')),
										a.options.add(new Option('Zoom out', 'out')),
										a.options.add(new Option('Left', 'left')),
										a.options.add(new Option('Right', 'right')),
										a.options.add(new Option('Up', 'up')),
										a.options.add(new Option('Down', 'down'))),
									(a.style.marginRight = '.5em'),
									(a.style.marginTop = '.5em'),
									(a.style.float = 'left'),
									ay.appendChild(a),
									(a.onchange = function (b) {
										if ('-1' == this.value) return !1;
										'back' == this.value && bH(),
											'out' == this.value && a7(),
											'in' == this.value && a6(),
											'left' == this.value && a8('-.25', 'x'),
											'right' == this.value && a8('.25', 'x'),
											'up' == this.value && a8('-.25', 'y'),
											'down' == this.value && a8('.25', 'y'),
											setTimeout(function () {
												a.value = '-1';
											}, 1e3);
									});
							}
							var o = void 0 === s.states_title ? 'States' : s.states_title,
								p = void 0 === s.regions_title ? 'Regions' : s.regions_title,
								q =
									void 0 === s.locations_title
										? 'Locations'
										: s.locations_title,
								i = {
									state: { title: o, array: bp },
									location: { title: q, array: bx },
									region: { title: p, array: bq },
								};
							for (var g in i) {
								var c = i[g],
									r = h.indexOf(g) > -1,
									j = Object.size(c.array);
								if (!(j < 1) && (!(j < 2) || 'region' != g) && !r) {
									var b = document.createElement('select');
									b.options.add(new Option(c.title, '-1')),
										(b.style.marginRight = '.5em'),
										(b.style.marginTop = '.5em'),
										(b.style.float = 'left');
									var k = [];
									for (var d in c.array) k.push(c.array[d]);
									for (
										var l = k.sort(function (a, b) {
												return a.sm.name > b.sm.name ? 1 : -1;
											}),
											d = 0;
										d < l.length;
										d++
									) {
										var f = l[d];
										'out' == f.sm.type ||
											f.sm.inactive ||
											f.sm.hide ||
											b.options.add(new Option(f.sm.name, f.sm.id));
									}
									(b.onchange = e.callback_closure(
										{ entry: c, dropdown: b },
										function (a) {
											var b = a.dropdown,
												d = a.entry;
											if ('-1' == b.value) return !1;
											var c = d.array[b.value],
												e = c.sm.type,
												f = c.sm.id;
											bS(e, f);
										},
									)),
										ay.appendChild(b);
								}
							}
						})(),
						(function () {
							if (
								c.legend &&
								c.legend.entries &&
								!(c.legend.entries.length < 1) &&
								(!an || !am)
							) {
								var i = {};
								(az.style.left = '0em'),
									(az.style.bottom = '0em'),
									(az.style.padding = '.8em'),
									(az.style.lineHeight = '1em'),
									(az.style['background-color'] = an
										? '#ffffff'
										: 'rgba(186, 186, 186, 0.2)');
								var d = document.createElement('ul');
								(d.style.display = 'inline-block'),
									(d.style['list-style-type'] = 'none'),
									(d.style.margin = '0'),
									(d.style.padding = '0'),
									az.appendChild(d),
									e.new_style(
										'#' +
											b +
											'_holder .sm_legend_item{float: left; cursor: pointer; margin-right: .75em; margin-bottom: .4em; margin-top: .4em;} #' +
											b +
											'_holder{font: ' +
											al +
											';}',
									);
								for (var h = c.legend.entries, a = 0; a < h.length; a++)
									k(a, h[a]);
								var f = c.legend.html;
								f && 'no' != f
									? (az.innerHTML = f)
									: (function () {
											for (var f = 0; f < h.length; f++) {
												var b = h[f];
												(b.shape = b.shape ? b.shape : 'circle'),
													(b.color = b.color ? b.color : '#cecece'),
													(b.type = b.type ? b.type : 'location');
												var e = document.createElement('li');
												e.setAttribute('class', 'sm_legend_item'),
													e.setAttribute('data-id', f);
												var a = document.createElementNS(
													'http://www.w3.org/2000/svg',
													'svg',
												);
												if (
													(a.setAttributeNS(
														'http://www.w3.org/2000/xmlns/',
														'xmlns:xlink',
														'http://www.w3.org/1999/xlink',
													),
													(a.style.display = 'inline-block'),
													(a.style['margin-right'] = '.2em'),
													(a.style.width = '1em'),
													(a.style.height = '1em'),
													(a.style.stoke = '#ffffff'),
													(a.style['stoke-width'] = '3'),
													(a.style.fill = '#ff0067'),
													(a.style['vertical-align'] = '-0.15em'),
													'circle' == b.shape)
												) {
													var c = document.createElementNS(
														'http://www.w3.org/2000/svg',
														'circle',
													);
													c.setAttribute('cx', '50'),
														c.setAttribute('cy', '50'),
														c.setAttribute('r', '40');
												} else if ('square' == b.shape) {
													var c = document.createElementNS(
														'http://www.w3.org/2000/svg',
														'rect',
													);
													c.setAttribute('x', '10'),
														c.setAttribute('y', '10'),
														c.setAttribute('width', '80'),
														c.setAttribute('height', '80');
												} else {
													var g = cq[b.shape],
														c = document.createElementNS(
															'http://www.w3.org/2000/svg',
															'path',
														);
													c.setAttribute('d', g),
														a.setAttribute('width', '1.5'),
														a.setAttribute('height', '1.5'),
														c.setAttribute('stroke-width', '.1');
												}
												['square', 'circle'].indexOf(b.shape) > -1
													? (c.setAttribute('stroke-width', '10'),
													  a.setAttribute('viewBox', '0 0 100 100'),
													  a.setAttribute('width', '100'),
													  a.setAttribute('height', '100'))
													: ['diamond', 'star'].indexOf(b.shape) > -1
													? (a.setAttribute('viewBox', '-.5 -.6 1 1.2'),
													  a.setAttribute('height', '1.8'))
													: ['triangle'].indexOf(b.shape) > -1
													? (a.setAttribute('viewBox', '-.6 -.7 1.2 1.1'),
													  a.setAttribute('width', '1.8'),
													  a.setAttribute('height', '1.8'))
													: ['heart'].indexOf(b.shape) > -1
													? (a.setAttribute('viewBox', '-.7 -.5 1.3 1'),
													  a.setAttribute('width', '2'))
													: ['marker'].indexOf(b.shape) > -1 &&
													  (a.setAttribute('viewBox', '-.6 -.9 1.1 .8'),
													  a.setAttribute('width', '1.7'),
													  a.setAttribute('height', '1.7')),
													c.setAttribute('fill', b.color),
													c.setAttribute('stroke', 'white'),
													a.appendChild(c),
													e.appendChild(a);
												var i = document.createTextNode(b.name);
												e.appendChild(i), d.appendChild(e);
											}
									  })();
								for (
									var g = aw.getElementsByClassName('sm_legend_item'), a = 0;
									a < g.length;
									a++
								)
									e.addEvent(g[a], 'mouseover', j),
										e.addEvent(g[a], 'mousedown', j);
							}
							function j() {
								for (var b = i[this.dataset.id], a = 0; a < b.length; a++) {
									var c = b[a].sm;
									('state' == c.type ? bA : cY)(c.id);
								}
							}
							function k(c, b) {
								i[c] = [];
								var d = 'state' == b.type ? bp : bx;
								for (var e in d) {
									var a = d[e];
									b.ids
										? b.ids.split(',').indexOf(a.sm.id) > -1 && i[c].push(a)
										: a.sm.attributes.fill != b.color ||
										  a.sm.hide ||
										  i[c].push(a);
								}
							}
						})(),
						b5(),
						cD(),
						bK.create(),
						(bF = function () {
							this.sm.parent && bD.call(this.sm.parent);
						}),
						(bG = function () {
							this.sm.parent && bE.call(this.sm.parent);
						}),
						(bB = function (a) {
							this.sm.parent && bC.call(this.sm.parent, a);
						}),
						(bz = function (a, f) {
							if (a.sm.pulse || f) {
								var g = a.sm.shape_type;
								if ('location' == a.sm.type && 'image' != g && !(aI < 0.05)) {
									var d = a.clone();
									a$.toFront(), aO.toFront();
									var b = 1 * a.sm.pulse_size,
										e = {
											'stroke-width': 4 * a.attrs['stroke-width'],
											'stroke-opacity': 0,
										};
									d.attr({ 'fill-opacity': 0, stroke: a.sm.pulse_color });
									var c = a.sm.scale ? aI : 1,
										h = (b - 1) * 0.5 * a.sm.size * c * aD,
										i =
											'bottom-center' == a.sm.position
												? cp(a, c * aD * b, '0,' + h)
												: cp(a, c * aD * b);
									(e.transform = i),
										d.animate(
											e,
											1e3 * a.sm.pulse_speed,
											'ease-out',
											function () {
												d.remove();
											},
										);
								}
							}
						}),
						(bA = function (c) {
							if (!am || !an)
								for (
									var e = Array.isArray(c) ? c : [c], d = 0;
									d < e.length;
									d++
								) {
									var a = bp[e[d]];
									if (!a || !a.sm || aI < 0.05) return;
									a.sm.shape_type;
									var f = a.clone(),
										h = 1 * a.sm.pulse_size,
										i = a.attrs['stroke-width'] ? a.attrs['stroke-width'] : 1,
										g = {
											'stroke-width': 4 * i,
											'stroke-opacity': 0,
											'fill-opacity': 0,
										};
									f.attr({ 'fill-opacity': 0, stroke: a.sm.pulse_color });
									var j = function () {
											f.remove();
										},
										b = a.sm.bbox;
									(a.sm.x = (b.x2 + b.x) / 2),
										(a.sm.y = (b.y2 + b.y) / 2),
										(a.sm.rotate = 0);
									var k = '0,0',
										l = cp(a, h, k);
									(g.transform = aR + l),
										a.sm.bbox,
										f.animate(g, 1e3 * a.sm.pulse_speed, 'ease-out', j);
								}
						}),
						(bD = function () {
							if (
								(bV(),
								cM(),
								cW(),
								(this.id || 'set' != !this.type) && !cx && !h)
							) {
								var c,
									b,
									a = cs(this);
								if (a.sm.on_click) var d = !0;
								if (((bQ = a.sm.popup_off), !b$ && !b_ && !bZ && (!E || !ap))) {
									if (cz && !C) return !1;
									if (((cz = this), a)) {
										if (
											((c = a).sm.labels &&
												c.sm.labels.forEach(function (a) {
													c.sm.inactive
														? a.attr({ cursor: 'default' })
														: a.attr({ cursor: 'pointer' });
												}),
											!a.sm.inactive)
										) {
											if (
												('state' == (b = a).sm.type &&
													b.sm.emphasizable &&
													((cx = !0),
													b.insertBefore(aN),
													setTimeout(function () {
														cx = !1;
													}, 1)),
												cN(a),
												d)
											) {
												if (!E) {
													if (
														(a.stop(),
														am &&
															'location' == a.sm.type &&
															'image' == a.sm.shape_type)
													)
														return;
													a.sm.ignore_hover || (cu(a, 'over'), bz(a)),
														cw(a, 'over');
												}
											} else {
												if (
													(bK.show(a),
													a.stop(),
													am &&
														'location' == a.sm.type &&
														'image' == a.sm.shape_type)
												)
													return;
												a.sm.ignore_hover ||
													(cu(a, 'over'), cw(a, 'over'), bz(a), bA(a));
											}
										}
									}
								}
							}
						}),
						(bE = function (c, b) {
							if (
								((b && 'function' == typeof b) || (b = !1),
								!bZ && !h && ((cz = !1), this.id || 'set' != !this.type))
							) {
								var a = cs(this);
								if (a && !a.sm.inactive) {
									if ((cO(a), ap)) (E && !0 !== c) || (cy(a, b), (cA = a));
									else {
										if ((bK.hide(), ct(a))) {
											if (bZ) return !1;
											a.sm.ignore_hover || cu(a, 'out', !0),
												cu(a, 'adjacent', !0),
												cw(a, 'out', !0);
										} else {
											if (
												am &&
												'location' == a.sm.type &&
												'image' == a.sm.shape_type
											)
												return;
											a.sm.ignore_hover || cu(a, 'out', !0), cw(a, 'out');
										}
										cy(a, b);
									}
								}
							}
						}),
						(d = !1),
						(bC = function (e) {
							if (!bZ && !b$ && !b_) {
								bV(),
									aq &&
										((d = !0),
										setTimeout(function () {
											d = !1;
										}, 500)),
									d || cb();
								var c = cs(this);
								if (
									!c.sm.inactive &&
									(cQ(c, e), !a.ignore_clicks) &&
									((ap = c.sm.on_click),
									!e ||
										((!E || 'touchend' != e.type) &&
											(E || 'touchstart' != e.type)))
								) {
									if (
										(ap && bK.update_pos(),
										(bQ = c.sm.popup_off),
										c.sm.zoomable &&
											('region' == c.sm.type || br != c || 'out' == c.sm.type))
									)
										cR(c, e),
											cW(),
											D && D.sm
												? bE.call(D, !0, function () {
														cc(c), (D = c);
												  })
												: (cc(c), (D = c));
									else if (ap) {
										if (
											(D != c &&
												D &&
												((k = c),
												(l = D),
												'state' != k.sm.type ||
													'region' != l.sm.type ||
													l.sm.id != k.sm.region) &&
												!('region' != c.sm.type && 'region' == a.zoom_level) &&
												cy(D),
											cP(c, e),
											e)
										) {
											var k,
												l,
												g = cB(e);
											bK.pos(e, { l: g.x, u: g.y });
										}
										bK.show(c),
											(E = !0),
											cw(c, 'over'),
											bz(c),
											(am &&
												'location' == c.sm.type &&
												'image' == c.sm.shape_type) ||
												c.sm.ignore_hover ||
												c.attr(c.sm.over_attributes),
											(D = c);
										var h = document.getElementById('xpic_sm_' + b);
										h &&
											(h.onclick = function () {
												return (
													bK.hide(),
													(E = !1),
													D.sm && bE.call(D),
													(ap = !1),
													bN('close_popup', []),
													!1
												);
											});
									} else {
										cP(c, e);
										var f = c.sm.url;
										if ('' != f && !i) {
											var j = 'javascript' == f.substring(0, 10);
											if (!ab || j) {
												j
													? (window.location.href = f)
													: (window.top.location.href = f);
												return;
											}
											window.open(f, '_blank'), bK.hide();
											return;
										}
									}
								}
							}
						}),
						(bH = function (a) {
							if (
								(void 0 === a && (a = !1),
								bN('back', []),
								('out' == br.sm.type || ('region' == br.sm.type && B)) && R)
							)
								window.location.href = 'javascript:' + R;
							else if (Z && 'state' == br.sm.type && br.sm.region)
								D
									? bE.call(D, !0, function () {
											cc(bq[br.sm.region]);
									  })
									: cc(bq[br.sm.region], !1, a);
							else {
								var b = cf(br, bq[A]),
									c = 'manual' == br.sm.type && b ? bq[A] : bq[-1];
								D && D.sm && 'region' != D.sm.type
									? bE.call(D, !0, function () {
											cc(c);
									  })
									: cc(c, !1, a);
							}
						}),
						(bI = function () {
							bH();
						}),
						cE(),
						cH(),
						c6(),
						bN('complete', []),
						e.isFunction(bb) && bb(),
						cM();
				}, 1);
		}
		var cJ = !1,
			cK = function (c, a) {
				if (!cJ || c || a) {
					cJ = !0;
					var b = function (f) {
						var h = an
								? event.clientX + document.documentElement.scrollLeft
								: f.pageX,
							i = an
								? event.clientY + document.documentElement.scrollTop
								: f.pageY,
							g = e.findPos(au),
							j = g[0],
							k = g[1],
							a = br.sm.zooming_dimensions,
							l = (a.r * aB) / aD,
							m = (a.r * aC) / aD,
							b = a.x / aD + (l * (h - j)) / aB,
							d = a.y / aD + (m * (i - k)) / aC;
						(b = Math.round(1e5 * b) / 1e5),
							(d = Math.round(1e5 * d) / 1e5),
							c && console.log('You clicked on\nx: ' + b + ',\ny: ' + d + ','),
							bN('click_xy', [{ x: b, y: d }]);
					};
					a || aX.click(b), a0.click(b);
				}
			},
			cL = function () {
				cK(!0);
			},
			cM = function (a) {
				(bL.click_xy || bM.click_xy.length > 0) && cK(!1, a);
			},
			cN = function (a) {
				var b = a.sm.type;
				'state' == b && bN('over_state', [a.sm.id]),
					'location' == b && bN('over_location', [a.sm.id]),
					'region' == b && bN('over_region', [a.sm.id]);
			},
			cO = function (a) {
				var b = a.sm.type;
				'state' == b && bN('out_state', [a.sm.id]),
					'location' == b && bN('out_location', [a.sm.id]),
					'region' == b && bN('out_region', [a.sm.id]);
			},
			cP = function (a, b) {
				var c = a.sm.type;
				'state' == c && bN('click_state', [a.sm.id, b]),
					'region' == c && bN('click_region', [a.sm.id, b]),
					'location' == c && bN('click_location', [a.sm.id, b]);
			},
			cQ = function (a, b) {
				var c = a.sm.type;
				'state' == c && bN('preclick_state', [a.sm.id, b]),
					'region' == c && bN('preclick_region', [a.sm.id, b]),
					'location' == c && bN('preclick_location', [a.sm.id, b]);
			},
			cR = function (a, b) {
				var c = a.sm.type;
				'state' == c && bN('zoomable_click_state', [a.sm.id, b]),
					'region' == c && bN('zoomable_click_region', [a.sm.id, b]);
			};
		function cS(a, b) {
			cc(bq[a], !1, b);
		}
		function cT(a, b) {
			cc(bp[a], !1, b);
		}
		function cU(c, a, b) {
			void 0 === a && (a = 4),
				void 0 === b && (b = function () {}),
				cc({ sm: { type: 'manual', zp: a, bbox: c } }, !1, function () {
					b(), bX();
				});
		}
		function cV(g, a, d) {
			void 0 === a && (a = 4), void 0 === d && (d = function () {});
			var e = { sm: { type: 'manual', zp: a } },
				c = bx[g],
				b = c.sm.size * aD * a,
				f = (b * aF) / aE,
				h = c.sm.x - 0.5 * b,
				i = c.sm.y - 0.5 * f;
			(e.sm.zooming_dimensions = { x: h, y: i, w: b, h: f, r: b / (aE * aD) }),
				cc(e, !1, function () {
					d(), bX();
				});
		}
		function cW() {
			cz && bE.call(cz), C && ((C = !1), ap || (bK.hide(), (E = !1)));
		}
		function cX(d, e, f) {
			if ((void 0 === f && (f = function () {}), 'state' == d)) var b = bp[e];
			else if ('region' == d) var b = bq[e];
			else var b = bx[e];
			var l = b.sm.on_click,
				i = br.sm.zooming_dimensions;
			if ('location' != d) {
				var c = b.sm.bbox,
					g = (c.x + c.x2) * 0.5,
					h = (c.y + c.y2) * 0.5;
				(g *= aD), (h *= aD);
			} else
				var g = b.sm.x,
					h = b.sm.y;
			var j = (g - i.x) / aI,
				k = (h - i.y) / aI,
				m = !b.sm.region && 'region' == a.zoom_level;
			return j > 1.1 * aB || k > 1.1 * aC || m
				? cS('-1', function () {
						cX(d, e, f);
				  })
				: b.sm.region && 'out' == a.zoom_level
				? cS(b.sm.region, function () {
						cX(d, e, f);
				  })
				: ((C = !0),
				  l ? bC.call(b) : bD.call(b),
				  bK.reset_pos(j, k, b),
				  (t = !0),
				  (C = !1),
				  f(),
				  !0);
		}
		function cY(b) {
			var a = bx[b];
			a && bz(a, !0);
		}
		function cZ() {
			bK.hide(), (E = !1), ap ? bE.call(D) : cz && bE.call(cz);
		}
		function c$(a, c) {
			bg(a);
			var d = bp[a].sm.labels;
			bn(a);
			for (var b = 0; b < d.length; b++) {
				var f = d[b].sm.id;
				bh(f), bv(f);
			}
			e.isFunction(c) && c();
		}
		var h = !1;
		function c_() {
			(h = !0), bK.hide();
		}
		var h = !1;
		function c0() {
			h = !1;
		}
		var i = !1;
		function c1() {
			i = !0;
		}
		var i = !1;
		function c2() {
			i = !1;
		}
		function c3(a) {
			bH(a);
		}
		function c4(a) {
			bA(a);
		}
		function j() {
			(a.calibrate = cd),
				(a.get_xy = cL),
				(a.proj = b0),
				(a.load = g),
				(a.region_zoom = cS),
				(a.state_zoom = cT),
				(a.zoom_in = !1),
				(a.zoom_out = !1),
				(a.location_zoom = cV),
				(a.zoom_to_popup = bS),
				(a.back = c3),
				(a.popup = cX),
				(a.pulse = cY),
				(a.pulse_state = c4),
				(a.popup_hide = cZ),
				(a.zoom_level = 'out'),
				(a.ignore_clicks = !1),
				(a.zoom_level_id = !1),
				(a.disable_urls = c1),
				(a.enable_urls = c2),
				(a.disable_popups = c_),
				(a.enable_popups = c0),
				(a.refresh = cI),
				(a.refresh_state = c$),
				(a.loaded = !0),
				(a.resize = cG),
				(a.trial = l),
				(a.zoom_ratio = 1);
		}
		function c5() {
			(a.zoom_level = br.sm.type),
				(a.zoom_level_id = !!br.sm.id && br.sm.id),
				(a.zoom_ratio = aI);
		}
		function c6() {
			(a.states = bp),
				(a.regions = bq),
				(a.locations = bx),
				(a.labels = bt),
				(a.tooltip = bK);
		}
		j(), g();
	}
	(window[a] = g),
		f.docReady(function () {
			if (
				((function (c, d) {
					var a = g.hooks[c];
					a && a.apply(null, d);
					for (var e = g.plugin_hooks[c], b = 0; b < e.length; b++) {
						var a = e[b];
						a && a.apply(null, d);
					}
				})('ready'),
				!window[a].loaded)
			)
				for (var c = 0; c < j.length; c++) {
					var b = j[c];
					b &&
						b.mapdata &&
						'no' != b.mapdata.main_settings.auto_load &&
						(function (a) {
							setTimeout(function () {
								a.load();
							}, 1);
						})(b);
				}
		}),
		j.push(g);
})('simplemaps_worldmap');
