(()=>{
    var al = Object.create;
    var Jt = Object.defineProperty;
    var ol = Object.getOwnPropertyDescriptor;
    var ll = Object.getOwnPropertyNames
      , vn = Object.getOwnPropertySymbols
      , cl = Object.getPrototypeOf
      , bn = Object.prototype.hasOwnProperty
      , dl = Object.prototype.propertyIsEnumerable;
    var ke = Math.pow
      , yn = (s,e,t)=>e in s ? Jt(s, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : s[e] = t
      , _n = (s,e)=>{
        for (var t in e || (e = {}))
            bn.call(e, t) && yn(s, t, e[t]);
        if (vn)
            for (var t of vn(e))
                dl.call(e, t) && yn(s, t, e[t]);
        return s
    }
    ;
    var ul = (s,e)=>()=>(s && (e = s(s = 0)),
    e);
    var ir = (s,e)=>()=>(e || s((e = {
        exports: {}
    }).exports, e),
    e.exports)
      , Sn = (s,e)=>{
        for (var t in e)
            Jt(s, t, {
                get: e[t],
                enumerable: !0
            })
    }
      , fl = (s,e,t,i)=>{
        if (e && typeof e == "object" || typeof e == "function")
            for (let r of ll(e))
                !bn.call(s, r) && r !== t && Jt(s, r, {
                    get: ()=>e[r],
                    enumerable: !(i = ol(e, r)) || i.enumerable
                });
        return s
    }
    ;
    var rr = (s,e,t)=>(t = s != null ? al(cl(s)) : {},
    fl(e || !s || !s.__esModule ? Jt(t, "default", {
        value: s,
        enumerable: !0
    }) : t, s));
    var Fe = (s,e,t)=>new Promise((i,r)=>{
        var n = l=>{
            try {
                o(t.next(l))
            } catch (c) {
                r(c)
            }
        }
          , a = l=>{
            try {
                o(t.throw(l))
            } catch (c) {
                r(c)
            }
        }
          , o = l=>l.done ? i(l.value) : Promise.resolve(l.value).then(n, a);
        o((t = t.apply(s, e)).next())
    }
    );
    var Ro = ir((un,fn)=>{
        (function(s, e) {
            typeof un == "object" && typeof fn != "undefined" ? fn.exports = e() : typeof define == "function" && define.amd ? define(e) : s.Splitting = e()
        }
        )(un, function() {
            "use strict";
            var s = document
              , e = s.createTextNode.bind(s);
            function t(I, A, k) {
                I.style.setProperty(A, k)
            }
            function i(I, A) {
                return I.appendChild(A)
            }
            function r(I, A, k, z) {
                var R = s.createElement("span");
                return A && (R.className = A),
                k && (!z && R.setAttribute("data-" + A, k),
                R.textContent = k),
                I && i(I, R) || R
            }
            function n(I, A) {
                return I.getAttribute("data-" + A)
            }
            function a(I, A) {
                return !I || I.length == 0 ? [] : I.nodeName ? [I] : [].slice.call(I[0].nodeName ? I : (A || s).querySelectorAll(I))
            }
            function o(I) {
                for (var A = []; I--; )
                    A[I] = [];
                return A
            }
            function l(I, A) {
                I && I.some(A)
            }
            function c(I) {
                return function(A) {
                    return I[A]
                }
            }
            function d(I, A, k) {
                var z = "--" + A
                  , R = z + "-index";
                l(k, function(Y, U) {
                    Array.isArray(Y) ? l(Y, function(se) {
                        t(se, R, U)
                    }) : t(Y, R, U)
                }),
                t(I, z + "-total", k.length)
            }
            var u = {};
            function m(I, A, k) {
                var z = k.indexOf(I);
                if (z == -1)
                    k.unshift(I),
                    l(u[I].depends, function(Y) {
                        m(Y, I, k)
                    });
                else {
                    var R = k.indexOf(A);
                    k.splice(z, 1),
                    k.splice(R, 0, I)
                }
                return k
            }
            function h(I, A, k, z) {
                return {
                    by: I,
                    depends: A,
                    key: k,
                    split: z
                }
            }
            function p(I) {
                return m(I, 0, []).map(c(u))
            }
            function f(I) {
                u[I.by] = I
            }
            function g(I, A, k, z, R) {
                I.normalize();
                var Y = []
                  , U = document.createDocumentFragment();
                z && Y.push(I.previousSibling);
                var se = [];
                return a(I.childNodes).some(function(de) {
                    if (de.tagName && !de.hasChildNodes()) {
                        se.push(de);
                        return
                    }
                    if (de.childNodes && de.childNodes.length) {
                        se.push(de),
                        Y.push.apply(Y, g(de, A, k, z, R));
                        return
                    }
                    var tt = de.wholeText || ""
                      , pn = tt.trim();
                    pn.length && (tt[0] === " " && se.push(e(" ")),
                    l(pn.split(k), function(sl, nl) {
                        nl && R && se.push(r(U, "whitespace", " ", R));
                        var gn = r(U, A, sl);
                        Y.push(gn),
                        se.push(gn)
                    }),
                    tt[tt.length - 1] === " " && se.push(e(" ")))
                }),
                l(se, function(de) {
                    i(U, de)
                }),
                I.innerHTML = "",
                i(I, U),
                Y
            }
            var y = 0;
            function x(I, A) {
                for (var k in A)
                    I[k] = A[k];
                return I
            }
            var E = "words"
              , T = h(E, y, "word", function(I) {
                return g(I, "word", /\s+/, 0, 1)
            })
              , M = "chars"
              , C = h(M, [E], "char", function(I, A, k) {
                var z = [];
                return l(k[E], function(R, Y) {
                    z.push.apply(z, g(R, "char", "", A.whitespace && Y))
                }),
                z
            });
            function b(I) {
                I = I || {};
                var A = I.key;
                return a(I.target || "[data-splitting]").map(function(k) {
                    var z = k["\u{1F34C}"];
                    if (!I.force && z)
                        return z;
                    z = k["\u{1F34C}"] = {
                        el: k
                    };
                    var R = p(I.by || n(k, "splitting") || M)
                      , Y = x({}, I);
                    return l(R, function(U) {
                        if (U.split) {
                            var se = U.by
                              , de = (A ? "-" + A : "") + U.key
                              , tt = U.split(k, Y, z);
                            de && d(k, de, tt),
                            z[se] = tt,
                            k.classList.add(se)
                        }
                    }),
                    k.classList.add("splitting"),
                    z
                })
            }
            function S(I) {
                I = I || {};
                var A = I.target = r();
                return A.innerHTML = I.content,
                b(I),
                A.outerHTML
            }
            b.html = S,
            b.add = f;
            function _(I, A, k) {
                var z = a(A.matching || I.children, I)
                  , R = {};
                return l(z, function(Y) {
                    var U = Math.round(Y[k]);
                    (R[U] || (R[U] = [])).push(Y)
                }),
                Object.keys(R).map(Number).sort(L).map(c(R))
            }
            function L(I, A) {
                return I - A
            }
            var P = h("lines", [E], "line", function(I, A, k) {
                return _(I, {
                    matching: k[E]
                }, "offsetTop")
            })
              , w = h("items", y, "item", function(I, A) {
                return a(A.matching || I.children, I)
            })
              , O = h("rows", y, "row", function(I, A) {
                return _(I, A, "offsetTop")
            })
              , D = h("cols", y, "col", function(I, A) {
                return _(I, A, "offsetLeft")
            })
              , N = h("grid", ["rows", "cols"])
              , $ = "layout"
              , V = h($, y, y, function(I, A) {
                var k = A.rows = +(A.rows || n(I, "rows") || 1)
                  , z = A.columns = +(A.columns || n(I, "columns") || 1);
                if (A.image = A.image || n(I, "image") || I.currentSrc || I.src,
                A.image) {
                    var R = a("img", I)[0];
                    A.image = R && (R.currentSrc || R.src)
                }
                A.image && t(I, "background-image", "url(" + A.image + ")");
                for (var Y = k * z, U = [], se = r(y, "cell-grid"); Y--; ) {
                    var de = r(se, "cell");
                    r(de, "cell-inner"),
                    U.push(de)
                }
                return i(I, se),
                U
            })
              , Z = h("cellRows", [$], "row", function(I, A, k) {
                var z = A.rows
                  , R = o(z);
                return l(k[$], function(Y, U, se) {
                    R[Math.floor(U / (se.length / z))].push(Y)
                }),
                R
            })
              , le = h("cellColumns", [$], "col", function(I, A, k) {
                var z = A.columns
                  , R = o(z);
                return l(k[$], function(Y, U) {
                    R[U % z].push(Y)
                }),
                R
            })
              , ce = h("cells", ["cellRows", "cellColumns"], "cell", function(I, A, k) {
                return k[$]
            });
            return f(T),
            f(C),
            f(P),
            f(w),
            f(O),
            f(D),
            f(N),
            f(V),
            f(Z),
            f(le),
            f(ce),
            b
        })
    }
    );
    var Uo = ir((I0,qo)=>{
        var au = 4
          , ou = .001
          , lu = 1e-7
          , cu = 10
          , Qt = 11
          , Ki = 1 / (Qt - 1)
          , du = typeof Float32Array == "function";
        function Vo(s, e) {
            return 1 - 3 * e + 3 * s
        }
        function Wo(s, e) {
            return 3 * e - 6 * s
        }
        function Yo(s) {
            return 3 * s
        }
        function Zi(s, e, t) {
            return ((Vo(e, t) * s + Wo(e, t)) * s + Yo(e)) * s
        }
        function Xo(s, e, t) {
            return 3 * Vo(e, t) * s * s + 2 * Wo(e, t) * s + Yo(e)
        }
        function uu(s, e, t, i, r) {
            var n, a, o = 0;
            do
                a = e + (t - e) / 2,
                n = Zi(a, i, r) - s,
                n > 0 ? t = a : e = a;
            while (Math.abs(n) > lu && ++o < cu);
            return a
        }
        function fu(s, e, t, i) {
            for (var r = 0; r < au; ++r) {
                var n = Xo(e, t, i);
                if (n === 0)
                    return e;
                var a = Zi(e, t, i) - s;
                e -= a / n
            }
            return e
        }
        function hu(s) {
            return s
        }
        qo.exports = function(e, t, i, r) {
            if (!(0 <= e && e <= 1 && 0 <= i && i <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            if (e === t && i === r)
                return hu;
            for (var n = du ? new Float32Array(Qt) : new Array(Qt), a = 0; a < Qt; ++a)
                n[a] = Zi(a * Ki, e, i);
            function o(l) {
                for (var c = 0, d = 1, u = Qt - 1; d !== u && n[d] <= l; ++d)
                    c += Ki;
                --d;
                var m = (l - n[d]) / (n[d + 1] - n[d])
                  , h = c + m * Ki
                  , p = Xo(h, e, i);
                return p >= ou ? fu(l, h, e, i) : p === 0 ? h : uu(l, c, c + Ki, e, i)
            }
            return function(c) {
                return c === 0 ? 0 : c === 1 ? 1 : Zi(o(c), t, r)
            }
        }
    }
    );
    var Ko = ir((jo,er)=>{
        (function(s, e) {
            typeof define == "function" && define.amd ? define([], function() {
                return s.svg4everybody = e()
            }) : typeof er == "object" && er.exports ? er.exports = e() : s.svg4everybody = e()
        }
        )(jo, function() {
            function s(r, n, a) {
                if (a) {
                    var o = document.createDocumentFragment()
                      , l = !n.hasAttribute("viewBox") && a.getAttribute("viewBox");
                    l && n.setAttribute("viewBox", l);
                    for (var c = a.cloneNode(!0); c.childNodes.length; )
                        o.appendChild(c.firstChild);
                    r.appendChild(o)
                }
            }
            function e(r) {
                r.onreadystatechange = function() {
                    if (r.readyState === 4) {
                        var n = r._cachedDocument;
                        n || (n = r._cachedDocument = document.implementation.createHTMLDocument(""),
                        n.body.innerHTML = r.responseText,
                        r._cachedTarget = {}),
                        r._embeds.splice(0).map(function(a) {
                            var o = r._cachedTarget[a.id];
                            o || (o = r._cachedTarget[a.id] = n.getElementById(a.id)),
                            s(a.parent, a.svg, o)
                        })
                    }
                }
                ,
                r.onreadystatechange()
            }
            function t(r) {
                function n() {
                    for (var y = 0; y < f.length; ) {
                        var x = f[y]
                          , E = x.parentNode
                          , T = i(E)
                          , M = x.getAttribute("xlink:href") || x.getAttribute("href");
                        if (!M && o.attributeName && (M = x.getAttribute(o.attributeName)),
                        T && M) {
                            if (a)
                                if (!o.validate || o.validate(M, T, x)) {
                                    E.removeChild(x);
                                    var C = M.split("#")
                                      , b = C.shift()
                                      , S = C.join("#");
                                    if (b.length) {
                                        var _ = h[b];
                                        _ || (_ = h[b] = new XMLHttpRequest,
                                        _.open("GET", b),
                                        _.send(),
                                        _._embeds = []),
                                        _._embeds.push({
                                            parent: E,
                                            svg: T,
                                            id: S
                                        }),
                                        e(_)
                                    } else
                                        s(E, T, document.getElementById(S))
                                } else
                                    ++y,
                                    ++g
                        } else
                            ++y
                    }
                    (!f.length || f.length - g > 0) && p(n, 67)
                }
                var a, o = Object(r), l = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, c = /\bAppleWebKit\/(\d+)\b/, d = /\bEdge\/12\.(\d+)\b/, u = /\bEdge\/.(\d+)\b/, m = window.top !== window.self;
                a = "polyfill"in o ? o.polyfill : l.test(navigator.userAgent) || (navigator.userAgent.match(d) || [])[1] < 10547 || (navigator.userAgent.match(c) || [])[1] < 537 || u.test(navigator.userAgent) && m;
                var h = {}
                  , p = window.requestAnimationFrame || setTimeout
                  , f = document.getElementsByTagName("use")
                  , g = 0;
                a && n()
            }
            function i(r) {
                for (var n = r; n.nodeName.toLowerCase() !== "svg" && (n = n.parentNode); )
                    ;
                return n
            }
            return t
        })
    }
    );
    var Qo = {};
    Sn(Qo, {
        gridHelper: ()=>vu
    });
    function vu({gutterCssVar: s=mu, marginCssVar: e=pu, rgbaColor: t=gu}={}) {
        let i = document.createElement("div");
        document.body.append(i),
        Zo(i, t),
        yu(i, s, e),
        bu(i, t)
    }
    function yu(s, e, t) {
        let i = s.style;
        i.zIndex = "10000",
        i.position = "fixed",
        i.top = "0",
        i.left = "0",
        i.display = "flex",
        i.width = "100%",
        i.height = "100%",
        i.columnGap = `var(${e}, 0)`,
        i.paddingLeft = `var(${t}, 0)`,
        i.paddingRight = `var(${t}, 0)`,
        i.pointerEvents = "none",
        i.visibility = "hidden"
    }
    function Zo(s, e) {
        s.innerHTML = "";
        let t = Number(window.getComputedStyle(s).getPropertyValue("--grid-columns")), i;
        for (var r = 0; r < t; r++)
            i = document.createElement("div"),
            i.style.flex = "1 1 0",
            i.style.backgroundColor = e,
            s.appendChild(i)
    }
    function bu(s, e) {
        window.addEventListener("resize", Zo(s, e));
        let t = !1
          , i = !1;
        document.addEventListener("keydown", r=>{
            r.key == "Control" ? t = !0 : t && r.key == "g" && (i ? s.style.visibility = "hidden" : s.style.visibility = "visible",
            i = !i)
        }
        ),
        document.addEventListener("keyup", r=>{
            r.key == "Control" && (t = !1)
        }
        )
    }
    var mu, pu, gu, Jo = ul(()=>{
        mu = "--grid-gutter",
        pu = "--grid-margin",
        gu = "rgba(255, 0, 0, .1)"
    }
    );
    function ti(s) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ti = function(e) {
            return typeof e
        }
        : ti = function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        ti(s)
    }
    function Tn(s, e) {
        if (!(s instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function En(s, e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(s, i.key, i)
        }
    }
    function Cn(s, e, t) {
        return e && En(s.prototype, e),
        t && En(s, t),
        s
    }
    function xn(s, e, t) {
        return e in s ? Object.defineProperty(s, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[e] = t,
        s
    }
    function ei(s, e) {
        return pl(s) || vl(s, e) || Mn(s, e) || bl()
    }
    function hl(s) {
        return ml(s) || gl(s) || Mn(s) || yl()
    }
    function ml(s) {
        if (Array.isArray(s))
            return sr(s)
    }
    function pl(s) {
        if (Array.isArray(s))
            return s
    }
    function gl(s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(s))
            return Array.from(s)
    }
    function vl(s, e) {
        if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(s)))) {
            var t = []
              , i = !0
              , r = !1
              , n = void 0;
            try {
                for (var a = s[Symbol.iterator](), o; !(i = (o = a.next()).done) && (t.push(o.value),
                !(e && t.length === e)); i = !0)
                    ;
            } catch (l) {
                r = !0,
                n = l
            } finally {
                try {
                    !i && a.return != null && a.return()
                } finally {
                    if (r)
                        throw n
                }
            }
            return t
        }
    }
    function Mn(s, e) {
        if (s) {
            if (typeof s == "string")
                return sr(s, e);
            var t = Object.prototype.toString.call(s).slice(8, -1);
            if (t === "Object" && s.constructor && (t = s.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(s);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return sr(s, e)
        }
    }
    function sr(s, e) {
        (e == null || e > s.length) && (e = s.length);
        for (var t = 0, i = new Array(e); t < e; t++)
            i[t] = s[t];
        return i
    }
    function yl() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function bl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var B = function() {
        function s(e) {
            Tn(this, s),
            this.mAttr = "data-" + e.dataName,
            this.mCaptureEvents = ["mouseenter", "mouseleave"],
            this.el = e.el
        }
        return Cn(s, [{
            key: "mInit",
            value: function(t) {
                var i = this;
                this.modules = t,
                this.mCheckEventTarget = this.mCheckEventTarget.bind(this),
                this.events && Object.keys(this.events).forEach(function(r) {
                    return i.mAddEvent(r)
                })
            }
        }, {
            key: "mUpdate",
            value: function(t) {
                this.modules = t
            }
        }, {
            key: "mDestroy",
            value: function() {
                var t = this;
                this.events && Object.keys(this.events).forEach(function(i) {
                    return t.mRemoveEvent(i)
                })
            }
        }, {
            key: "mAddEvent",
            value: function(t) {
                var i = !!this.mCaptureEvents.includes(t);
                this.el.addEventListener(t, this.mCheckEventTarget, i)
            }
        }, {
            key: "mRemoveEvent",
            value: function(t) {
                var i = !!this.mCaptureEvents.includes(t);
                this.el.removeEventListener(t, this.mCheckEventTarget, i)
            }
        }, {
            key: "mCheckEventTarget",
            value: function(t) {
                var i = this.events[t.type];
                if (typeof i == "string")
                    this[i](t);
                else {
                    var r = "[" + this.mAttr + "]"
                      , n = t.target;
                    if (this.mCaptureEvents.includes(t.type))
                        n.matches(r) && this.mCallEventMethod(t, i, n);
                    else
                        for (; n && n !== document && !(n.matches(r) && this.mCallEventMethod(t, i, n) != "undefined"); )
                            n = n.parentNode
                }
            }
        }, {
            key: "mCallEventMethod",
            value: function(t, i, r) {
                var n = r.getAttribute(this.mAttr);
                if (i.hasOwnProperty(n)) {
                    var a = i[n];
                    t.hasOwnProperty("currentTarget") || Object.defineProperty(t, "currentTarget", {
                        value: r
                    }),
                    t.hasOwnProperty("curTarget") || Object.defineProperty(t, "curTarget", {
                        value: r
                    }),
                    this[a](t)
                }
            }
        }, {
            key: "$",
            value: function(t, i) {
                var r = t.indexOf(".")
                  , n = t.indexOf("#")
                  , a = t.indexOf("[")
                  , o = [r, n, a].filter(function(m) {
                    return m != -1
                })
                  , l = !1
                  , c = t
                  , d = ""
                  , u = this.el;
                return o.length && (l = Math.min.apply(Math, hl(o)),
                c = t.slice(0, l),
                d = t.slice(l)),
                ti(i) == "object" && (u = i),
                u.querySelectorAll("[" + this.mAttr + "=" + c + "]" + d)
            }
        }, {
            key: "parent",
            value: function(t, i) {
                for (var r = "[" + this.mAttr + "=" + t + "]", n = i.parentNode; n && n !== document; ) {
                    if (n.matches(r))
                        return n;
                    n = n.parentNode
                }
            }
        }, {
            key: "getData",
            value: function(t, i) {
                var r = i || this.el;
                return r.getAttribute(this.mAttr + "-" + t)
            }
        }, {
            key: "setData",
            value: function(t, i, r) {
                var n = r || this.el;
                return n.setAttribute(this.mAttr + "-" + t, i)
            }
        }, {
            key: "call",
            value: function(t, i, r, n) {
                var a = this;
                i && !r && (r = i,
                i = !1),
                this.modules[r] && (n ? this.modules[r][n] && this.modules[r][n][t](i) : Object.keys(this.modules[r]).forEach(function(o) {
                    a.modules[r][o][t](i)
                }))
            }
        }, {
            key: "on",
            value: function(t, i, r, n) {
                var a = this;
                this.modules[i] && (n ? this.modules[i][n].el.addEventListener(t, function(o) {
                    return r(o)
                }) : Object.keys(this.modules[i]).forEach(function(o) {
                    a.modules[i][o].el.addEventListener(t, function(l) {
                        return r(l)
                    })
                }))
            }
        }, {
            key: "init",
            value: function() {}
        }, {
            key: "destroy",
            value: function() {}
        }]),
        s
    }()
      , _l = function() {
        function s(e) {
            Tn(this, s),
            this.app,
            this.modules = e.modules,
            this.currentModules = {},
            this.activeModules = {},
            this.newModules = {},
            this.moduleId = 0
        }
        return Cn(s, [{
            key: "init",
            value: function(t, i) {
                var r = this
                  , n = i || document
                  , a = n.querySelectorAll("*");
                t && !this.app && (this.app = t),
                this.activeModules.app = {
                    app: this.app
                },
                a.forEach(function(o) {
                    Array.from(o.attributes).forEach(function(l) {
                        if (l.name.startsWith("data-module")) {
                            var c = !1
                              , d = l.name.split("-").splice(2)
                              , u = r.toCamel(d);
                            if (r.modules[u] ? c = !0 : r.modules[r.toUpper(u)] && (u = r.toUpper(u),
                            c = !0),
                            c) {
                                var m = {
                                    el: o,
                                    name: u,
                                    dataName: d.join("-")
                                }
                                  , h = new r.modules[u](m)
                                  , p = l.value;
                                p || (r.moduleId++,
                                p = "m" + r.moduleId,
                                o.setAttribute(l.name, p)),
                                r.addActiveModule(u, p, h);
                                var f = u + "-" + p;
                                i ? r.newModules[f] = h : r.currentModules[f] = h
                            }
                        }
                    })
                }),
                Object.entries(this.currentModules).forEach(function(o) {
                    var l = ei(o, 2)
                      , c = l[0]
                      , d = l[1];
                    if (i) {
                        var u = c.split("-")
                          , m = u.shift()
                          , h = u.pop();
                        r.addActiveModule(m, h, d)
                    } else
                        r.initModule(d)
                })
            }
        }, {
            key: "initModule",
            value: function(t) {
                t.mInit(this.activeModules),
                t.init()
            }
        }, {
            key: "addActiveModule",
            value: function(t, i, r) {
                this.activeModules[t] ? Object.assign(this.activeModules[t], xn({}, i, r)) : this.activeModules[t] = xn({}, i, r)
            }
        }, {
            key: "update",
            value: function(t) {
                var i = this;
                this.init(this.app, t),
                Object.entries(this.currentModules).forEach(function(r) {
                    var n = ei(r, 2)
                      , a = n[0]
                      , o = n[1];
                    o.mUpdate(i.activeModules)
                }),
                Object.entries(this.newModules).forEach(function(r) {
                    var n = ei(r, 2)
                      , a = n[0]
                      , o = n[1];
                    i.initModule(o)
                }),
                Object.assign(this.currentModules, this.newModules)
            }
        }, {
            key: "destroy",
            value: function(t) {
                t ? this.destroyScope(t) : this.destroyModules()
            }
        }, {
            key: "destroyScope",
            value: function(t) {
                var i = this
                  , r = t.querySelectorAll("*");
                r.forEach(function(n) {
                    Array.from(n.attributes).forEach(function(a) {
                        if (a.name.startsWith("data-module")) {
                            var o = a.value
                              , l = a.name.split("-").splice(2)
                              , c = i.toCamel(l) + "-" + o
                              , d = !1;
                            i.currentModules[c] ? d = !0 : i.currentModules[i.toUpper(c)] && (c = i.toUpper(c),
                            d = !0),
                            d && (i.destroyModule(i.currentModules[c]),
                            delete i.currentModules[c])
                        }
                    })
                }),
                this.activeModules = {},
                this.newModules = {}
            }
        }, {
            key: "destroyModules",
            value: function() {
                var t = this;
                Object.entries(this.currentModules).forEach(function(i) {
                    var r = ei(i, 2)
                      , n = r[0]
                      , a = r[1];
                    t.destroyModule(a)
                }),
                this.currentModules = []
            }
        }, {
            key: "destroyModule",
            value: function(t) {
                t.mDestroy(),
                t.destroy()
            }
        }, {
            key: "toCamel",
            value: function(t) {
                var i = this;
                return t.reduce(function(r, n) {
                    return r + i.toUpper(n)
                })
            }
        }, {
            key: "toUpper",
            value: function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
        }]),
        s
    }()
      , Pn = _l;
    var mn = {};
    Sn(mn, {
        Carousel: ()=>li,
        Cursor: ()=>ci,
        Filters: ()=>di,
        FormLite: ()=>ui,
        Header: ()=>fi,
        HorizontalPanel: ()=>Li,
        Load: ()=>Di,
        Menu: ()=>Bi,
        Scroll: ()=>Yi,
        Sidebar: ()=>ji,
        SkipLink: ()=>Xi,
        SmoothProgress: ()=>Qi,
        SplitText: ()=>Ui,
        VideoInview: ()=>Ji
    });
    function In(s) {
        return s !== null && typeof s == "object" && "constructor"in s && s.constructor === Object
    }
    function nr(s={}, e={}) {
        Object.keys(e).forEach(t=>{
            typeof s[t] == "undefined" ? s[t] = e[t] : In(e[t]) && In(s[t]) && Object.keys(e[t]).length > 0 && nr(s[t], e[t])
        }
        )
    }
    var wn = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector() {
            return null
        },
        querySelectorAll() {
            return []
        },
        getElementById() {
            return null
        },
        createEvent() {
            return {
                initEvent() {}
            }
        },
        createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                    return []
                }
            }
        },
        createElementNS() {
            return {}
        },
        importNode() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function ie() {
        let s = typeof document != "undefined" ? document : {};
        return nr(s, wn),
        s
    }
    var Sl = {
        document: wn,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
            return {
                getPropertyValue() {
                    return ""
                }
            }
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
            return {}
        },
        requestAnimationFrame(s) {
            return typeof setTimeout == "undefined" ? (s(),
            null) : setTimeout(s, 0)
        },
        cancelAnimationFrame(s) {
            typeof setTimeout != "undefined" && clearTimeout(s)
        }
    };
    function W() {
        let s = typeof window != "undefined" ? window : {};
        return nr(s, Sl),
        s
    }
    function An(s) {
        let e = s;
        Object.keys(e).forEach(t=>{
            try {
                e[t] = null
            } catch (i) {}
            try {
                delete e[t]
            } catch (i) {}
        }
        )
    }
    function Xe(s, e=0) {
        return setTimeout(s, e)
    }
    function Ne() {
        return Date.now()
    }
    function El(s) {
        let e = W(), t;
        return e.getComputedStyle && (t = e.getComputedStyle(s, null)),
        !t && s.currentStyle && (t = s.currentStyle),
        t || (t = s.style),
        t
    }
    function ar(s, e="x") {
        let t = W(), i, r, n, a = El(s, null);
        return t.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform,
        r.split(",").length > 6 && (r = r.split(", ").map(o=>o.replace(",", ".")).join(", ")),
        n = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        i = n.toString().split(",")),
        e === "x" && (t.WebKitCSSMatrix ? r = n.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])),
        e === "y" && (t.WebKitCSSMatrix ? r = n.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])),
        r || 0
    }
    function It(s) {
        return typeof s == "object" && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === "Object"
    }
    function xl(s) {
        return typeof window != "undefined" && typeof window.HTMLElement != "undefined" ? s instanceof HTMLElement : s && (s.nodeType === 1 || s.nodeType === 11)
    }
    function ue(...s) {
        let e = Object(s[0])
          , t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < s.length; i += 1) {
            let r = s[i];
            if (r != null && !xl(r)) {
                let n = Object.keys(Object(r)).filter(a=>t.indexOf(a) < 0);
                for (let a = 0, o = n.length; a < o; a += 1) {
                    let l = n[a]
                      , c = Object.getOwnPropertyDescriptor(r, l);
                    c !== void 0 && c.enumerable && (It(e[l]) && It(r[l]) ? r[l].__swiper__ ? e[l] = r[l] : ue(e[l], r[l]) : !It(e[l]) && It(r[l]) ? (e[l] = {},
                    r[l].__swiper__ ? e[l] = r[l] : ue(e[l], r[l])) : e[l] = r[l])
                }
            }
        }
        return e
    }
    function ht(s, e, t) {
        s.style.setProperty(e, t)
    }
    function ii({swiper: s, targetPosition: e, side: t}) {
        let i = W(), r = -s.translate, n = null, a, o = s.params.speed;
        s.wrapperEl.style.scrollSnapType = "none",
        i.cancelAnimationFrame(s.cssModeFrameID);
        let l = e > r ? "next" : "prev"
          , c = (u,m)=>l === "next" && u >= m || l === "prev" && u <= m
          , d = ()=>{
            a = new Date().getTime(),
            n === null && (n = a);
            let u = Math.max(Math.min((a - n) / o, 1), 0)
              , m = .5 - Math.cos(u * Math.PI) / 2
              , h = r + m * (e - r);
            if (c(h, e) && (h = e),
            s.wrapperEl.scrollTo({
                [t]: h
            }),
            c(h, e)) {
                s.wrapperEl.style.overflow = "hidden",
                s.wrapperEl.style.scrollSnapType = "",
                setTimeout(()=>{
                    s.wrapperEl.style.overflow = "",
                    s.wrapperEl.scrollTo({
                        [t]: h
                    })
                }
                ),
                i.cancelAnimationFrame(s.cssModeFrameID);
                return
            }
            s.cssModeFrameID = i.requestAnimationFrame(d)
        }
        ;
        d()
    }
    function Q(s, e="") {
        return [...s.children].filter(t=>t.matches(e))
    }
    function Be(s, e=[]) {
        let t = document.createElement(s);
        return t.classList.add(...Array.isArray(e) ? e : [e]),
        t
    }
    function On(s, e) {
        let t = [];
        for (; s.previousElementSibling; ) {
            let i = s.previousElementSibling;
            e ? i.matches(e) && t.push(i) : t.push(i),
            s = i
        }
        return t
    }
    function Ln(s, e) {
        let t = [];
        for (; s.nextElementSibling; ) {
            let i = s.nextElementSibling;
            e ? i.matches(e) && t.push(i) : t.push(i),
            s = i
        }
        return t
    }
    function Oe(s, e) {
        return W().getComputedStyle(s, null).getPropertyValue(e)
    }
    function wt(s) {
        let e = s, t;
        if (e) {
            for (t = 0; (e = e.previousSibling) !== null; )
                e.nodeType === 1 && (t += 1);
            return t
        }
    }
    function At(s, e) {
        let t = []
          , i = s.parentElement;
        for (; i; )
            e ? i.matches(e) && t.push(i) : t.push(i),
            i = i.parentElement;
        return t
    }
    function ri(s, e, t) {
        let i = W();
        return t ? s[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : s.offsetWidth
    }
    var or;
    function Tl() {
        let s = W()
          , e = ie();
        return {
            smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
            touch: !!("ontouchstart"in s || s.DocumentTouch && e instanceof s.DocumentTouch)
        }
    }
    function si() {
        return or || (or = Tl()),
        or
    }
    var lr;
    function Cl({userAgent: s}={}) {
        let e = si()
          , t = W()
          , i = t.navigator.platform
          , r = s || t.navigator.userAgent
          , n = {
            ios: !1,
            android: !1
        }
          , a = t.screen.width
          , o = t.screen.height
          , l = r.match(/(Android);?[\s\/]+([\d.]+)?/)
          , c = r.match(/(iPad).*OS\s([\d_]+)/)
          , d = r.match(/(iPod)(.*OS\s([\d_]+))?/)
          , u = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
          , m = i === "Win32"
          , h = i === "MacIntel"
          , p = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
        return !c && h && e.touch && p.indexOf(`${a}x${o}`) >= 0 && (c = r.match(/(Version)\/([\d.]+)/),
        c || (c = [0, 1, "13_0_0"]),
        h = !1),
        l && !m && (n.os = "android",
        n.android = !0),
        (c || u || d) && (n.os = "ios",
        n.ios = !0),
        n
    }
    function kn(s={}) {
        return lr || (lr = Cl(s)),
        lr
    }
    var cr;
    function Ml() {
        let s = W()
          , e = !1;
        function t() {
            let i = s.navigator.userAgent.toLowerCase();
            return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
        }
        if (t()) {
            let i = String(s.navigator.userAgent);
            if (i.includes("Version/")) {
                let[r,n] = i.split("Version/")[1].split(" ")[0].split(".").map(a=>Number(a));
                e = r < 16 || r === 16 && n < 2
            }
        }
        return {
            isSafari: e || t(),
            needPerspectiveFix: e,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
        }
    }
    function Dn() {
        return cr || (cr = Ml()),
        cr
    }
    function dr({swiper: s, on: e, emit: t}) {
        let i = W()
          , r = null
          , n = null
          , a = ()=>{
            !s || s.destroyed || !s.initialized || (t("beforeResize"),
            t("resize"))
        }
          , o = ()=>{
            !s || s.destroyed || !s.initialized || (r = new ResizeObserver(d=>{
                n = i.requestAnimationFrame(()=>{
                    let {width: u, height: m} = s
                      , h = u
                      , p = m;
                    d.forEach(({contentBoxSize: f, contentRect: g, target: y})=>{
                        y && y !== s.el || (h = g ? g.width : (f[0] || f).inlineSize,
                        p = g ? g.height : (f[0] || f).blockSize)
                    }
                    ),
                    (h !== u || p !== m) && a()
                }
                )
            }
            ),
            r.observe(s.el))
        }
          , l = ()=>{
            n && i.cancelAnimationFrame(n),
            r && r.unobserve && s.el && (r.unobserve(s.el),
            r = null)
        }
          , c = ()=>{
            !s || s.destroyed || !s.initialized || t("orientationchange")
        }
        ;
        e("init", ()=>{
            if (s.params.resizeObserver && typeof i.ResizeObserver != "undefined") {
                o();
                return
            }
            i.addEventListener("resize", a),
            i.addEventListener("orientationchange", c)
        }
        ),
        e("destroy", ()=>{
            l(),
            i.removeEventListener("resize", a),
            i.removeEventListener("orientationchange", c)
        }
        )
    }
    function ur({swiper: s, extendParams: e, on: t, emit: i}) {
        let r = []
          , n = W()
          , a = (c,d={})=>{
            let u = n.MutationObserver || n.WebkitMutationObserver
              , m = new u(h=>{
                if (s.__preventObserver__)
                    return;
                if (h.length === 1) {
                    i("observerUpdate", h[0]);
                    return
                }
                let p = function() {
                    i("observerUpdate", h[0])
                };
                n.requestAnimationFrame ? n.requestAnimationFrame(p) : n.setTimeout(p, 0)
            }
            );
            m.observe(c, {
                attributes: typeof d.attributes == "undefined" ? !0 : d.attributes,
                childList: typeof d.childList == "undefined" ? !0 : d.childList,
                characterData: typeof d.characterData == "undefined" ? !0 : d.characterData
            }),
            r.push(m)
        }
          , o = ()=>{
            if (s.params.observer) {
                if (s.params.observeParents) {
                    let c = At(s.el);
                    for (let d = 0; d < c.length; d += 1)
                        a(c[d])
                }
                a(s.el, {
                    childList: s.params.observeSlideChildren
                }),
                a(s.wrapperEl, {
                    attributes: !1
                })
            }
        }
          , l = ()=>{
            r.forEach(c=>{
                c.disconnect()
            }
            ),
            r.splice(0, r.length)
        }
        ;
        e({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        t("init", o),
        t("destroy", l)
    }
    var zn = {
        on(s, e, t) {
            let i = this;
            if (!i.eventsListeners || i.destroyed || typeof e != "function")
                return i;
            let r = t ? "unshift" : "push";
            return s.split(" ").forEach(n=>{
                i.eventsListeners[n] || (i.eventsListeners[n] = []),
                i.eventsListeners[n][r](e)
            }
            ),
            i
        },
        once(s, e, t) {
            let i = this;
            if (!i.eventsListeners || i.destroyed || typeof e != "function")
                return i;
            function r(...n) {
                i.off(s, r),
                r.__emitterProxy && delete r.__emitterProxy,
                e.apply(i, n)
            }
            return r.__emitterProxy = e,
            i.on(s, r, t)
        },
        onAny(s, e) {
            let t = this;
            if (!t.eventsListeners || t.destroyed || typeof s != "function")
                return t;
            let i = e ? "unshift" : "push";
            return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s),
            t
        },
        offAny(s) {
            let e = this;
            if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
                return e;
            let t = e.eventsAnyListeners.indexOf(s);
            return t >= 0 && e.eventsAnyListeners.splice(t, 1),
            e
        },
        off(s, e) {
            let t = this;
            return !t.eventsListeners || t.destroyed || !t.eventsListeners || s.split(" ").forEach(i=>{
                typeof e == "undefined" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((r,n)=>{
                    (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[i].splice(n, 1)
                }
                )
            }
            ),
            t
        },
        emit(...s) {
            let e = this;
            if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
                return e;
            let t, i, r;
            return typeof s[0] == "string" || Array.isArray(s[0]) ? (t = s[0],
            i = s.slice(1, s.length),
            r = e) : (t = s[0].events,
            i = s[0].data,
            r = s[0].context || e),
            i.unshift(r),
            (Array.isArray(t) ? t : t.split(" ")).forEach(a=>{
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(o=>{
                    o.apply(r, [a, ...i])
                }
                ),
                e.eventsListeners && e.eventsListeners[a] && e.eventsListeners[a].forEach(o=>{
                    o.apply(r, i)
                }
                )
            }
            ),
            e
        }
    };
    function fr() {
        let s = this, e, t, i = s.el;
        typeof s.params.width != "undefined" && s.params.width !== null ? e = s.params.width : e = i.clientWidth,
        typeof s.params.height != "undefined" && s.params.height !== null ? t = s.params.height : t = i.clientHeight,
        !(e === 0 && s.isHorizontal() || t === 0 && s.isVertical()) && (e = e - parseInt(Oe(i, "padding-left") || 0, 10) - parseInt(Oe(i, "padding-right") || 0, 10),
        t = t - parseInt(Oe(i, "padding-top") || 0, 10) - parseInt(Oe(i, "padding-bottom") || 0, 10),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(s, {
            width: e,
            height: t,
            size: s.isHorizontal() ? e : t
        }))
    }
    function hr() {
        let s = this;
        function e(P) {
            return s.isHorizontal() ? P : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[P]
        }
        function t(P, w) {
            return parseFloat(P.getPropertyValue(e(w)) || 0)
        }
        let i = s.params
          , {wrapperEl: r, slidesEl: n, size: a, rtlTranslate: o, wrongRTL: l} = s
          , c = s.virtual && i.virtual.enabled
          , d = c ? s.virtual.slides.length : s.slides.length
          , u = Q(n, `.${s.params.slideClass}, swiper-slide`)
          , m = c ? s.virtual.slides.length : u.length
          , h = []
          , p = []
          , f = []
          , g = i.slidesOffsetBefore;
        typeof g == "function" && (g = i.slidesOffsetBefore.call(s));
        let y = i.slidesOffsetAfter;
        typeof y == "function" && (y = i.slidesOffsetAfter.call(s));
        let x = s.snapGrid.length
          , E = s.slidesGrid.length
          , T = i.spaceBetween
          , M = -g
          , C = 0
          , b = 0;
        if (typeof a == "undefined")
            return;
        typeof T == "string" && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * a : typeof T == "string" && (T = parseFloat(T)),
        s.virtualSize = -T,
        u.forEach(P=>{
            o ? P.style.marginLeft = "" : P.style.marginRight = "",
            P.style.marginBottom = "",
            P.style.marginTop = ""
        }
        ),
        i.centeredSlides && i.cssMode && (ht(r, "--swiper-centered-offset-before", ""),
        ht(r, "--swiper-centered-offset-after", ""));
        let S = i.grid && i.grid.rows > 1 && s.grid;
        S && s.grid.initSlides(m);
        let _, L = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(P=>typeof i.breakpoints[P].slidesPerView != "undefined").length > 0;
        for (let P = 0; P < m; P += 1) {
            _ = 0;
            let w;
            if (u[P] && (w = u[P]),
            S && s.grid.updateSlide(P, w, m, e),
            !(u[P] && Oe(w, "display") === "none")) {
                if (i.slidesPerView === "auto") {
                    L && (u[P].style[e("width")] = "");
                    let O = getComputedStyle(w)
                      , D = w.style.transform
                      , N = w.style.webkitTransform;
                    if (D && (w.style.transform = "none"),
                    N && (w.style.webkitTransform = "none"),
                    i.roundLengths)
                        _ = s.isHorizontal() ? ri(w, "width", !0) : ri(w, "height", !0);
                    else {
                        let $ = t(O, "width")
                          , V = t(O, "padding-left")
                          , Z = t(O, "padding-right")
                          , le = t(O, "margin-left")
                          , ce = t(O, "margin-right")
                          , I = O.getPropertyValue("box-sizing");
                        if (I && I === "border-box")
                            _ = $ + le + ce;
                        else {
                            let {clientWidth: A, offsetWidth: k} = w;
                            _ = $ + V + Z + le + ce + (k - A)
                        }
                    }
                    D && (w.style.transform = D),
                    N && (w.style.webkitTransform = N),
                    i.roundLengths && (_ = Math.floor(_))
                } else
                    _ = (a - (i.slidesPerView - 1) * T) / i.slidesPerView,
                    i.roundLengths && (_ = Math.floor(_)),
                    u[P] && (u[P].style[e("width")] = `${_}px`);
                u[P] && (u[P].swiperSlideSize = _),
                f.push(_),
                i.centeredSlides ? (M = M + _ / 2 + C / 2 + T,
                C === 0 && P !== 0 && (M = M - a / 2 - T),
                P === 0 && (M = M - a / 2 - T),
                Math.abs(M) < 1 / 1e3 && (M = 0),
                i.roundLengths && (M = Math.floor(M)),
                b % i.slidesPerGroup === 0 && h.push(M),
                p.push(M)) : (i.roundLengths && (M = Math.floor(M)),
                (b - Math.min(s.params.slidesPerGroupSkip, b)) % s.params.slidesPerGroup === 0 && h.push(M),
                p.push(M),
                M = M + _ + T),
                s.virtualSize += _ + T,
                C = _,
                b += 1
            }
        }
        if (s.virtualSize = Math.max(s.virtualSize, a) + y,
        o && l && (i.effect === "slide" || i.effect === "coverflow") && (r.style.width = `${s.virtualSize + T}px`),
        i.setWrapperSize && (r.style[e("width")] = `${s.virtualSize + T}px`),
        S && s.grid.updateWrapperSize(_, h, e),
        !i.centeredSlides) {
            let P = [];
            for (let w = 0; w < h.length; w += 1) {
                let O = h[w];
                i.roundLengths && (O = Math.floor(O)),
                h[w] <= s.virtualSize - a && P.push(O)
            }
            h = P,
            Math.floor(s.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(s.virtualSize - a)
        }
        if (c && i.loop) {
            let P = f[0] + T;
            if (i.slidesPerGroup > 1) {
                let w = Math.ceil((s.virtual.slidesBefore + s.virtual.slidesAfter) / i.slidesPerGroup)
                  , O = P * i.slidesPerGroup;
                for (let D = 0; D < w; D += 1)
                    h.push(h[h.length - 1] + O)
            }
            for (let w = 0; w < s.virtual.slidesBefore + s.virtual.slidesAfter; w += 1)
                i.slidesPerGroup === 1 && h.push(h[h.length - 1] + P),
                p.push(p[p.length - 1] + P),
                s.virtualSize += P
        }
        if (h.length === 0 && (h = [0]),
        T !== 0) {
            let P = s.isHorizontal() && o ? "marginLeft" : e("marginRight");
            u.filter((w,O)=>!i.cssMode || i.loop ? !0 : O !== u.length - 1).forEach(w=>{
                w.style[P] = `${T}px`
            }
            )
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
            let P = 0;
            f.forEach(O=>{
                P += O + (T || 0)
            }
            ),
            P -= T;
            let w = P - a;
            h = h.map(O=>O < 0 ? -g : O > w ? w + y : O)
        }
        if (i.centerInsufficientSlides) {
            let P = 0;
            if (f.forEach(w=>{
                P += w + (T || 0)
            }
            ),
            P -= T,
            P < a) {
                let w = (a - P) / 2;
                h.forEach((O,D)=>{
                    h[D] = O - w
                }
                ),
                p.forEach((O,D)=>{
                    p[D] = O + w
                }
                )
            }
        }
        if (Object.assign(s, {
            slides: u,
            snapGrid: h,
            slidesGrid: p,
            slidesSizesGrid: f
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
            ht(r, "--swiper-centered-offset-before", `${-h[0]}px`),
            ht(r, "--swiper-centered-offset-after", `${s.size / 2 - f[f.length - 1] / 2}px`);
            let P = -s.snapGrid[0]
              , w = -s.slidesGrid[0];
            s.snapGrid = s.snapGrid.map(O=>O + P),
            s.slidesGrid = s.slidesGrid.map(O=>O + w)
        }
        if (m !== d && s.emit("slidesLengthChange"),
        h.length !== x && (s.params.watchOverflow && s.checkOverflow(),
        s.emit("snapGridLengthChange")),
        p.length !== E && s.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && s.updateSlidesOffset(),
        !c && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
            let P = `${i.containerModifierClass}backface-hidden`
              , w = s.el.classList.contains(P);
            m <= i.maxBackfaceHiddenSlides ? w || s.el.classList.add(P) : w && s.el.classList.remove(P)
        }
    }
    function mr(s) {
        let e = this, t = [], i = e.virtual && e.params.virtual.enabled, r = 0, n;
        typeof s == "number" ? e.setTransition(s) : s === !0 && e.setTransition(e.params.speed);
        let a = o=>i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
        if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
            if (e.params.centeredSlides)
                (e.visibleSlides || []).forEach(o=>{
                    t.push(o)
                }
                );
            else
                for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                    let o = e.activeIndex + n;
                    if (o > e.slides.length && !i)
                        break;
                    t.push(a(o))
                }
        else
            t.push(a(e.activeIndex));
        for (n = 0; n < t.length; n += 1)
            if (typeof t[n] != "undefined") {
                let o = t[n].offsetHeight;
                r = o > r ? o : r
            }
        (r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
    }
    function pr() {
        let s = this
          , e = s.slides
          , t = s.isElement ? s.isHorizontal() ? s.wrapperEl.offsetLeft : s.wrapperEl.offsetTop : 0;
        for (let i = 0; i < e.length; i += 1)
            e[i].swiperSlideOffset = (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - s.cssOverflowAdjustment()
    }
    function gr(s=this && this.translate || 0) {
        let e = this
          , t = e.params
          , {slides: i, rtlTranslate: r, snapGrid: n} = e;
        if (i.length === 0)
            return;
        typeof i[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
        let a = -s;
        r && (a = s),
        i.forEach(l=>{
            l.classList.remove(t.slideVisibleClass)
        }
        ),
        e.visibleSlidesIndexes = [],
        e.visibleSlides = [];
        let o = t.spaceBetween;
        typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
        for (let l = 0; l < i.length; l += 1) {
            let c = i[l]
              , d = c.swiperSlideOffset;
            t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
            let u = (a + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + o)
              , m = (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + o)
              , h = -(a - d)
              , p = h + e.slidesSizesGrid[l];
            (h >= 0 && h < e.size - 1 || p > 1 && p <= e.size || h <= 0 && p >= e.size) && (e.visibleSlides.push(c),
            e.visibleSlidesIndexes.push(l),
            i[l].classList.add(t.slideVisibleClass)),
            c.progress = r ? -u : u,
            c.originalProgress = r ? -m : m
        }
    }
    function vr(s) {
        let e = this;
        if (typeof s == "undefined") {
            let d = e.rtlTranslate ? -1 : 1;
            s = e && e.translate && e.translate * d || 0
        }
        let t = e.params
          , i = e.maxTranslate() - e.minTranslate()
          , {progress: r, isBeginning: n, isEnd: a, progressLoop: o} = e
          , l = n
          , c = a;
        if (i === 0)
            r = 0,
            n = !0,
            a = !0;
        else {
            r = (s - e.minTranslate()) / i;
            let d = Math.abs(s - e.minTranslate()) < 1
              , u = Math.abs(s - e.maxTranslate()) < 1;
            n = d || r <= 0,
            a = u || r >= 1,
            d && (r = 0),
            u && (r = 1)
        }
        if (t.loop) {
            let d = e.getSlideIndexByData(0)
              , u = e.getSlideIndexByData(e.slides.length - 1)
              , m = e.slidesGrid[d]
              , h = e.slidesGrid[u]
              , p = e.slidesGrid[e.slidesGrid.length - 1]
              , f = Math.abs(s);
            f >= m ? o = (f - m) / p : o = (f + p - h) / p,
            o > 1 && (o -= 1)
        }
        Object.assign(e, {
            progress: r,
            progressLoop: o,
            isBeginning: n,
            isEnd: a
        }),
        (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(s),
        n && !l && e.emit("reachBeginning toEdge"),
        a && !c && e.emit("reachEnd toEdge"),
        (l && !n || c && !a) && e.emit("fromEdge"),
        e.emit("progress", r)
    }
    function yr() {
        let s = this
          , {slides: e, params: t, slidesEl: i, activeIndex: r} = s
          , n = s.virtual && t.virtual.enabled
          , a = l=>Q(i, `.${t.slideClass}${l}, swiper-slide${l}`)[0];
        e.forEach(l=>{
            l.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
        }
        );
        let o;
        if (n)
            if (t.loop) {
                let l = r - s.virtual.slidesBefore;
                l < 0 && (l = s.virtual.slides.length + l),
                l >= s.virtual.slides.length && (l -= s.virtual.slides.length),
                o = a(`[data-swiper-slide-index="${l}"]`)
            } else
                o = a(`[data-swiper-slide-index="${r}"]`);
        else
            o = e[r];
        if (o) {
            o.classList.add(t.slideActiveClass);
            let l = Ln(o, `.${t.slideClass}, swiper-slide`)[0];
            t.loop && !l && (l = e[0]),
            l && l.classList.add(t.slideNextClass);
            let c = On(o, `.${t.slideClass}, swiper-slide`)[0];
            t.loop && !c === 0 && (c = e[e.length - 1]),
            c && c.classList.add(t.slidePrevClass)
        }
        s.emitSlidesClasses()
    }
    var mt = (s,e)=>{
        if (!s || s.destroyed || !s.params)
            return;
        let t = ()=>s.isElement ? "swiper-slide" : `.${s.params.slideClass}`
          , i = e.closest(t());
        if (i) {
            let r = i.querySelector(`.${s.params.lazyPreloaderClass}`);
            r && r.remove()
        }
    }
      , Rn = (s,e)=>{
        if (!s.slides[e])
            return;
        let t = s.slides[e].querySelector('[loading="lazy"]');
        t && t.removeAttribute("loading")
    }
      , Ot = s=>{
        if (!s || s.destroyed || !s.params)
            return;
        let e = s.params.lazyPreloadPrevNext
          , t = s.slides.length;
        if (!t || !e || e < 0)
            return;
        e = Math.min(e, t);
        let i = s.params.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(s.params.slidesPerView)
          , r = s.activeIndex
          , n = r + i - 1;
        if (s.params.rewind)
            for (let a = r - e; a <= n + e; a += 1) {
                let o = (a % t + t) % t;
                o !== r && o > n && Rn(s, o)
            }
        else
            for (let a = Math.max(n - e, 0); a <= Math.min(n + e, t - 1); a += 1)
                a !== r && a > n && Rn(s, a)
    }
    ;
    function Pl(s) {
        let {slidesGrid: e, params: t} = s, i = s.rtlTranslate ? s.translate : -s.translate, r;
        for (let n = 0; n < e.length; n += 1)
            typeof e[n + 1] != "undefined" ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : i >= e[n] && i < e[n + 1] && (r = n + 1) : i >= e[n] && (r = n);
        return t.normalizeSlideIndex && (r < 0 || typeof r == "undefined") && (r = 0),
        r
    }
    function br(s) {
        let e = this, t = e.rtlTranslate ? e.translate : -e.translate, {snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: o} = e, l = s, c, d = m=>{
            let h = m - e.virtual.slidesBefore;
            return h < 0 && (h = e.virtual.slides.length + h),
            h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
            h
        }
        ;
        if (typeof l == "undefined" && (l = Pl(e)),
        i.indexOf(t) >= 0)
            c = i.indexOf(t);
        else {
            let m = Math.min(r.slidesPerGroupSkip, l);
            c = m + Math.floor((l - m) / r.slidesPerGroup)
        }
        if (c >= i.length && (c = i.length - 1),
        l === n) {
            c !== o && (e.snapIndex = c,
            e.emit("snapIndexChange")),
            e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = d(l));
            return
        }
        let u;
        e.virtual && r.virtual.enabled && r.loop ? u = d(l) : e.slides[l] ? u = parseInt(e.slides[l].getAttribute("data-swiper-slide-index") || l, 10) : u = l,
        Object.assign(e, {
            previousSnapIndex: o,
            snapIndex: c,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: n,
            activeIndex: l
        }),
        e.initialized && Ot(e),
        e.emit("activeIndexChange"),
        e.emit("snapIndexChange"),
        a !== u && e.emit("realIndexChange"),
        (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
    }
    function _r(s) {
        let e = this, t = e.params, i = s.closest(`.${t.slideClass}, swiper-slide`), r = !1, n;
        if (i) {
            for (let a = 0; a < e.slides.length; a += 1)
                if (e.slides[a] === i) {
                    r = !0,
                    n = a;
                    break
                }
        }
        if (i && r)
            e.clickedSlide = i,
            e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : e.clickedIndex = n;
        else {
            e.clickedSlide = void 0,
            e.clickedIndex = void 0;
            return
        }
        t.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
    }
    var $n = {
        updateSize: fr,
        updateSlides: hr,
        updateAutoHeight: mr,
        updateSlidesOffset: pr,
        updateSlidesProgress: gr,
        updateProgress: vr,
        updateSlidesClasses: yr,
        updateActiveIndex: br,
        updateClickedSlide: _r
    };
    function Sr(s=this.isHorizontal() ? "x" : "y") {
        let e = this
          , {params: t, rtlTranslate: i, translate: r, wrapperEl: n} = e;
        if (t.virtualTranslate)
            return i ? -r : r;
        if (t.cssMode)
            return r;
        let a = ar(n, s);
        return a += e.cssOverflowAdjustment(),
        i && (a = -a),
        a || 0
    }
    function Er(s, e) {
        let t = this
          , {rtlTranslate: i, params: r, wrapperEl: n, progress: a} = t
          , o = 0
          , l = 0
          , c = 0;
        t.isHorizontal() ? o = i ? -s : s : l = s,
        r.roundLengths && (o = Math.floor(o),
        l = Math.floor(l)),
        t.previousTranslate = t.translate,
        t.translate = t.isHorizontal() ? o : l,
        r.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -o : -l : r.virtualTranslate || (t.isHorizontal() ? o -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(),
        n.style.transform = `translate3d(${o}px, ${l}px, ${c}px)`);
        let d, u = t.maxTranslate() - t.minTranslate();
        u === 0 ? d = 0 : d = (s - t.minTranslate()) / u,
        d !== a && t.updateProgress(s),
        t.emit("setTranslate", t.translate, e)
    }
    function xr() {
        return -this.snapGrid[0]
    }
    function Tr() {
        return -this.snapGrid[this.snapGrid.length - 1]
    }
    function Cr(s=0, e=this.params.speed, t=!0, i=!0, r) {
        let n = this
          , {params: a, wrapperEl: o} = n;
        if (n.animating && a.preventInteractionOnTransition)
            return !1;
        let l = n.minTranslate(), c = n.maxTranslate(), d;
        if (i && s > l ? d = l : i && s < c ? d = c : d = s,
        n.updateProgress(d),
        a.cssMode) {
            let u = n.isHorizontal();
            if (e === 0)
                o[u ? "scrollLeft" : "scrollTop"] = -d;
            else {
                if (!n.support.smoothScroll)
                    return ii({
                        swiper: n,
                        targetPosition: -d,
                        side: u ? "left" : "top"
                    }),
                    !0;
                o.scrollTo({
                    [u ? "left" : "top"]: -d,
                    behavior: "smooth"
                })
            }
            return !0
        }
        return e === 0 ? (n.setTransition(0),
        n.setTranslate(d),
        t && (n.emit("beforeTransitionStart", e, r),
        n.emit("transitionEnd"))) : (n.setTransition(e),
        n.setTranslate(d),
        t && (n.emit("beforeTransitionStart", e, r),
        n.emit("transitionStart")),
        n.animating || (n.animating = !0,
        n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(m) {
            !n || n.destroyed || m.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
            n.onTranslateToWrapperTransitionEnd = null,
            delete n.onTranslateToWrapperTransitionEnd,
            t && n.emit("transitionEnd"))
        }
        ),
        n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
        !0
    }
    var Fn = {
        getTranslate: Sr,
        setTranslate: Er,
        minTranslate: xr,
        maxTranslate: Tr,
        translateTo: Cr
    };
    function Mr(s, e) {
        let t = this;
        t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${s}ms`),
        t.emit("setTransition", s, e)
    }
    function Lt({swiper: s, runCallbacks: e, direction: t, step: i}) {
        let {activeIndex: r, previousIndex: n} = s
          , a = t;
        if (a || (r > n ? a = "next" : r < n ? a = "prev" : a = "reset"),
        s.emit(`transition${i}`),
        e && r !== n) {
            if (a === "reset") {
                s.emit(`slideResetTransition${i}`);
                return
            }
            s.emit(`slideChangeTransition${i}`),
            a === "next" ? s.emit(`slideNextTransition${i}`) : s.emit(`slidePrevTransition${i}`)
        }
    }
    function Pr(s=!0, e) {
        let t = this
          , {params: i} = t;
        i.cssMode || (i.autoHeight && t.updateAutoHeight(),
        Lt({
            swiper: t,
            runCallbacks: s,
            direction: e,
            step: "Start"
        }))
    }
    function Ir(s=!0, e) {
        let t = this
          , {params: i} = t;
        t.animating = !1,
        !i.cssMode && (t.setTransition(0),
        Lt({
            swiper: t,
            runCallbacks: s,
            direction: e,
            step: "End"
        }))
    }
    var Nn = {
        setTransition: Mr,
        transitionStart: Pr,
        transitionEnd: Ir
    };
    function wr(s=0, e=this.params.speed, t=!0, i, r) {
        typeof s == "string" && (s = parseInt(s, 10));
        let n = this
          , a = s;
        a < 0 && (a = 0);
        let {params: o, snapGrid: l, slidesGrid: c, previousIndex: d, activeIndex: u, rtlTranslate: m, wrapperEl: h, enabled: p} = n;
        if (n.animating && o.preventInteractionOnTransition || !p && !i && !r)
            return !1;
        let f = Math.min(n.params.slidesPerGroupSkip, a)
          , g = f + Math.floor((a - f) / n.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        let y = -l[g];
        if (o.normalizeSlideIndex)
            for (let E = 0; E < c.length; E += 1) {
                let T = -Math.floor(y * 100)
                  , M = Math.floor(c[E] * 100)
                  , C = Math.floor(c[E + 1] * 100);
                typeof c[E + 1] != "undefined" ? T >= M && T < C - (C - M) / 2 ? a = E : T >= M && T < C && (a = E + 1) : T >= M && (a = E)
            }
        if (n.initialized && a !== u && (!n.allowSlideNext && y < n.translate && y < n.minTranslate() || !n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (u || 0) !== a))
            return !1;
        a !== (d || 0) && t && n.emit("beforeSlideChangeStart"),
        n.updateProgress(y);
        let x;
        if (a > u ? x = "next" : a < u ? x = "prev" : x = "reset",
        m && -y === n.translate || !m && y === n.translate)
            return n.updateActiveIndex(a),
            o.autoHeight && n.updateAutoHeight(),
            n.updateSlidesClasses(),
            o.effect !== "slide" && n.setTranslate(y),
            x !== "reset" && (n.transitionStart(t, x),
            n.transitionEnd(t, x)),
            !1;
        if (o.cssMode) {
            let E = n.isHorizontal()
              , T = m ? y : -y;
            if (e === 0) {
                let M = n.virtual && n.params.virtual.enabled;
                M && (n.wrapperEl.style.scrollSnapType = "none",
                n._immediateVirtual = !0),
                M && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0,
                requestAnimationFrame(()=>{
                    h[E ? "scrollLeft" : "scrollTop"] = T
                }
                )) : h[E ? "scrollLeft" : "scrollTop"] = T,
                M && requestAnimationFrame(()=>{
                    n.wrapperEl.style.scrollSnapType = "",
                    n._immediateVirtual = !1
                }
                )
            } else {
                if (!n.support.smoothScroll)
                    return ii({
                        swiper: n,
                        targetPosition: T,
                        side: E ? "left" : "top"
                    }),
                    !0;
                h.scrollTo({
                    [E ? "left" : "top"]: T,
                    behavior: "smooth"
                })
            }
            return !0
        }
        return n.setTransition(e),
        n.setTranslate(y),
        n.updateActiveIndex(a),
        n.updateSlidesClasses(),
        n.emit("beforeTransitionStart", e, i),
        n.transitionStart(t, x),
        e === 0 ? n.transitionEnd(t, x) : n.animating || (n.animating = !0,
        n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(T) {
            !n || n.destroyed || T.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
            n.onSlideToWrapperTransitionEnd = null,
            delete n.onSlideToWrapperTransitionEnd,
            n.transitionEnd(t, x))
        }
        ),
        n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
        !0
    }
    function Ar(s=0, e=this.params.speed, t=!0, i) {
        typeof s == "string" && (s = parseInt(s, 10));
        let r = this
          , n = s;
        return r.params.loop && (r.virtual && r.params.virtual.enabled ? n = n + r.virtual.slidesBefore : n = r.getSlideIndexByData(n)),
        r.slideTo(n, e, t, i)
    }
    function Or(s=this.params.speed, e=!0, t) {
        let i = this
          , {enabled: r, params: n, animating: a} = i;
        if (!r)
            return i;
        let o = n.slidesPerGroup;
        n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        let l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o
          , c = i.virtual && n.virtual.enabled;
        if (n.loop) {
            if (a && !c && n.loopPreventsSliding)
                return !1;
            i.loopFix({
                direction: "next"
            }),
            i._clientLeft = i.wrapperEl.clientLeft
        }
        return n.rewind && i.isEnd ? i.slideTo(0, s, e, t) : i.slideTo(i.activeIndex + l, s, e, t)
    }
    function Lr(s=this.params.speed, e=!0, t) {
        let i = this
          , {params: r, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: c} = i;
        if (!l)
            return i;
        let d = i.virtual && r.virtual.enabled;
        if (r.loop) {
            if (c && !d && r.loopPreventsSliding)
                return !1;
            i.loopFix({
                direction: "prev"
            }),
            i._clientLeft = i.wrapperEl.clientLeft
        }
        let u = o ? i.translate : -i.translate;
        function m(y) {
            return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y)
        }
        let h = m(u)
          , p = n.map(y=>m(y))
          , f = n[p.indexOf(h) - 1];
        if (typeof f == "undefined" && r.cssMode) {
            let y;
            n.forEach((x,E)=>{
                h >= x && (y = E)
            }
            ),
            typeof y != "undefined" && (f = n[y > 0 ? y - 1 : y])
        }
        let g = 0;
        if (typeof f != "undefined" && (g = a.indexOf(f),
        g < 0 && (g = i.activeIndex - 1),
        r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (g = g - i.slidesPerViewDynamic("previous", !0) + 1,
        g = Math.max(g, 0))),
        r.rewind && i.isBeginning) {
            let y = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
            return i.slideTo(y, s, e, t)
        }
        return i.slideTo(g, s, e, t)
    }
    function kr(s=this.params.speed, e=!0, t) {
        let i = this;
        return i.slideTo(i.activeIndex, s, e, t)
    }
    function Dr(s=this.params.speed, e=!0, t, i=.5) {
        let r = this
          , n = r.activeIndex
          , a = Math.min(r.params.slidesPerGroupSkip, n)
          , o = a + Math.floor((n - a) / r.params.slidesPerGroup)
          , l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[o]) {
            let c = r.snapGrid[o]
              , d = r.snapGrid[o + 1];
            l - c > (d - c) * i && (n += r.params.slidesPerGroup)
        } else {
            let c = r.snapGrid[o - 1]
              , d = r.snapGrid[o];
            l - c <= (d - c) * i && (n -= r.params.slidesPerGroup)
        }
        return n = Math.max(n, 0),
        n = Math.min(n, r.slidesGrid.length - 1),
        r.slideTo(n, s, e, t)
    }
    function zr() {
        let s = this, {params: e, slidesEl: t} = s, i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView, r = s.clickedIndex, n, a = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
        if (e.loop) {
            if (s.animating)
                return;
            n = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
            e.centeredSlides ? r < s.loopedSlides - i / 2 || r > s.slides.length - s.loopedSlides + i / 2 ? (s.loopFix(),
            r = s.getSlideIndex(Q(t, `${a}[data-swiper-slide-index="${n}"]`)[0]),
            Xe(()=>{
                s.slideTo(r)
            }
            )) : s.slideTo(r) : r > s.slides.length - i ? (s.loopFix(),
            r = s.getSlideIndex(Q(t, `${a}[data-swiper-slide-index="${n}"]`)[0]),
            Xe(()=>{
                s.slideTo(r)
            }
            )) : s.slideTo(r)
        } else
            s.slideTo(r)
    }
    var Bn = {
        slideTo: wr,
        slideToLoop: Ar,
        slideNext: Or,
        slidePrev: Lr,
        slideReset: kr,
        slideToClosest: Dr,
        slideToClickedSlide: zr
    };
    function Rr(s) {
        let e = this
          , {params: t, slidesEl: i} = e;
        if (!t.loop || e.virtual && e.params.virtual.enabled)
            return;
        Q(i, `.${t.slideClass}, swiper-slide`).forEach((n,a)=>{
            n.setAttribute("data-swiper-slide-index", a)
        }
        ),
        e.loopFix({
            slideRealIndex: s,
            direction: t.centeredSlides ? void 0 : "next"
        })
    }
    function $r({slideRealIndex: s, slideTo: e=!0, direction: t, setTranslate: i, activeSlideIndex: r, byController: n, byMousewheel: a}={}) {
        let o = this;
        if (!o.params.loop)
            return;
        o.emit("beforeLoopFix");
        let {slides: l, allowSlidePrev: c, allowSlideNext: d, slidesEl: u, params: m} = o;
        if (o.allowSlidePrev = !0,
        o.allowSlideNext = !0,
        o.virtual && m.virtual.enabled) {
            e && (!m.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
            o.allowSlidePrev = c,
            o.allowSlideNext = d,
            o.emit("loopFix");
            return
        }
        let h = m.slidesPerView === "auto" ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10))
          , p = m.loopedSlides || h;
        p % m.slidesPerGroup !== 0 && (p += m.slidesPerGroup - p % m.slidesPerGroup),
        o.loopedSlides = p;
        let f = []
          , g = []
          , y = o.activeIndex;
        typeof r == "undefined" ? r = o.getSlideIndex(o.slides.filter(C=>C.classList.contains(m.slideActiveClass))[0]) : y = r;
        let x = t === "next" || !t
          , E = t === "prev" || !t
          , T = 0
          , M = 0;
        if (r < p) {
            T = Math.max(p - r, m.slidesPerGroup);
            for (let C = 0; C < p - r; C += 1) {
                let b = C - Math.floor(C / l.length) * l.length;
                f.push(l.length - b - 1)
            }
        } else if (r > o.slides.length - p * 2) {
            M = Math.max(r - (o.slides.length - p * 2), m.slidesPerGroup);
            for (let C = 0; C < M; C += 1) {
                let b = C - Math.floor(C / l.length) * l.length;
                g.push(b)
            }
        }
        if (E && f.forEach(C=>{
            o.slides[C].swiperLoopMoveDOM = !0,
            u.prepend(o.slides[C]),
            o.slides[C].swiperLoopMoveDOM = !1
        }
        ),
        x && g.forEach(C=>{
            o.slides[C].swiperLoopMoveDOM = !0,
            u.append(o.slides[C]),
            o.slides[C].swiperLoopMoveDOM = !1
        }
        ),
        o.recalcSlides(),
        m.slidesPerView === "auto" && o.updateSlides(),
        m.watchSlidesProgress && o.updateSlidesOffset(),
        e) {
            if (f.length > 0 && E)
                if (typeof s == "undefined") {
                    let C = o.slidesGrid[y]
                      , S = o.slidesGrid[y + T] - C;
                    a ? o.setTranslate(o.translate - S) : (o.slideTo(y + T, 0, !1, !0),
                    i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += S))
                } else
                    i && o.slideToLoop(s, 0, !1, !0);
            else if (g.length > 0 && x)
                if (typeof s == "undefined") {
                    let C = o.slidesGrid[y]
                      , S = o.slidesGrid[y - M] - C;
                    a ? o.setTranslate(o.translate - S) : (o.slideTo(y - M, 0, !1, !0),
                    i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += S))
                } else
                    o.slideToLoop(s, 0, !1, !0)
        }
        if (o.allowSlidePrev = c,
        o.allowSlideNext = d,
        o.controller && o.controller.control && !n) {
            let C = {
                slideRealIndex: s,
                slideTo: !1,
                direction: t,
                setTranslate: i,
                activeSlideIndex: r,
                byController: !0
            };
            Array.isArray(o.controller.control) ? o.controller.control.forEach(b=>{
                !b.destroyed && b.params.loop && b.loopFix(C)
            }
            ) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(C)
        }
        o.emit("loopFix")
    }
    function Fr() {
        let s = this
          , {params: e, slidesEl: t} = s;
        if (!e.loop || s.virtual && s.params.virtual.enabled)
            return;
        s.recalcSlides();
        let i = [];
        s.slides.forEach(r=>{
            let n = typeof r.swiperSlideIndex == "undefined" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
            i[n] = r
        }
        ),
        s.slides.forEach(r=>{
            r.removeAttribute("data-swiper-slide-index")
        }
        ),
        i.forEach(r=>{
            t.append(r)
        }
        ),
        s.recalcSlides(),
        s.slideTo(s.realIndex, 0)
    }
    var Hn = {
        loopCreate: Rr,
        loopFix: $r,
        loopDestroy: Fr
    };
    function Nr(s) {
        let e = this;
        if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
            return;
        let t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
        e.isElement && (e.__preventObserver__ = !0),
        t.style.cursor = "move",
        t.style.cursor = s ? "grabbing" : "grab",
        e.isElement && requestAnimationFrame(()=>{
            e.__preventObserver__ = !1
        }
        )
    }
    function Br() {
        let s = this;
        s.params.watchOverflow && s.isLocked || s.params.cssMode || (s.isElement && (s.__preventObserver__ = !0),
        s[s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
        s.isElement && requestAnimationFrame(()=>{
            s.__preventObserver__ = !1
        }
        ))
    }
    var Gn = {
        setGrabCursor: Nr,
        unsetGrabCursor: Br
    };
    function Il(s, e=this) {
        function t(i) {
            if (!i || i === ie() || i === W())
                return null;
            i.assignedSlot && (i = i.assignedSlot);
            let r = i.closest(s);
            return !r && !i.getRootNode ? null : r || t(i.getRootNode().host)
        }
        return t(e)
    }
    function Hr(s) {
        let e = this
          , t = ie()
          , i = W()
          , r = e.touchEventsData;
        r.evCache.push(s);
        let {params: n, touches: a, enabled: o} = e;
        if (!o || !n.simulateTouch && s.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
            return;
        !e.animating && n.cssMode && n.loop && e.loopFix();
        let l = s;
        l.originalEvent && (l = l.originalEvent);
        let c = l.target;
        if (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(c) || "which"in l && l.which === 3 || "button"in l && l.button > 0 || r.isTouched && r.isMoved)
            return;
        let d = !!n.noSwipingClass && n.noSwipingClass !== ""
          , u = s.composedPath ? s.composedPath() : s.path;
        d && l.target && l.target.shadowRoot && u && (c = u[0]);
        let m = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
          , h = !!(l.target && l.target.shadowRoot);
        if (n.noSwiping && (h ? Il(m, c) : c.closest(m))) {
            e.allowClick = !0;
            return
        }
        if (n.swipeHandler && !c.closest(n.swipeHandler))
            return;
        a.currentX = l.pageX,
        a.currentY = l.pageY;
        let p = a.currentX
          , f = a.currentY
          , g = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection
          , y = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (g && (p <= y || p >= i.innerWidth - y))
            if (g === "prevent")
                s.preventDefault();
            else
                return;
        Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        a.startX = p,
        a.startY = f,
        r.touchStartTime = Ne(),
        e.allowClick = !0,
        e.updateSize(),
        e.swipeDirection = void 0,
        n.threshold > 0 && (r.allowThresholdMove = !1);
        let x = !0;
        c.matches(r.focusableElements) && (x = !1,
        c.nodeName === "SELECT" && (r.isTouched = !1)),
        t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== c && t.activeElement.blur();
        let E = x && e.allowTouchMove && n.touchStartPreventDefault;
        (n.touchStartForcePreventDefault || E) && !c.isContentEditable && l.preventDefault(),
        e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
        e.emit("touchStart", l)
    }
    function Gr(s) {
        let e = ie()
          , t = this
          , i = t.touchEventsData
          , {params: r, touches: n, rtlTranslate: a, enabled: o} = t;
        if (!o || !r.simulateTouch && s.pointerType === "mouse")
            return;
        let l = s;
        if (l.originalEvent && (l = l.originalEvent),
        !i.isTouched) {
            i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
            return
        }
        let c = i.evCache.findIndex(C=>C.pointerId === l.pointerId);
        c >= 0 && (i.evCache[c] = l);
        let d = i.evCache.length > 1 ? i.evCache[0] : l
          , u = d.pageX
          , m = d.pageY;
        if (l.preventedByNestedSwiper) {
            n.startX = u,
            n.startY = m;
            return
        }
        if (!t.allowTouchMove) {
            l.target.matches(i.focusableElements) || (t.allowClick = !1),
            i.isTouched && (Object.assign(n, {
                startX: u,
                startY: m,
                prevX: t.touches.currentX,
                prevY: t.touches.currentY,
                currentX: u,
                currentY: m
            }),
            i.touchStartTime = Ne());
            return
        }
        if (r.touchReleaseOnEdges && !r.loop) {
            if (t.isVertical()) {
                if (m < n.startY && t.translate <= t.maxTranslate() || m > n.startY && t.translate >= t.minTranslate()) {
                    i.isTouched = !1,
                    i.isMoved = !1;
                    return
                }
            } else if (u < n.startX && t.translate <= t.maxTranslate() || u > n.startX && t.translate >= t.minTranslate())
                return
        }
        if (e.activeElement && l.target === e.activeElement && l.target.matches(i.focusableElements)) {
            i.isMoved = !0,
            t.allowClick = !1;
            return
        }
        if (i.allowTouchCallbacks && t.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
            return;
        n.currentX = u,
        n.currentY = m;
        let h = n.currentX - n.startX
          , p = n.currentY - n.startY;
        if (t.params.threshold && Math.sqrt(ke(h, 2) + ke(p, 2)) < t.params.threshold)
            return;
        if (typeof i.isScrolling == "undefined") {
            let C;
            t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + p * p >= 25 && (C = Math.atan2(Math.abs(p), Math.abs(h)) * 180 / Math.PI,
            i.isScrolling = t.isHorizontal() ? C > r.touchAngle : 90 - C > r.touchAngle)
        }
        if (i.isScrolling && t.emit("touchMoveOpposite", l),
        typeof i.startMoving == "undefined" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0),
        i.isScrolling || t.zoom && t.params.zoom && t.params.zoom.enabled && i.evCache.length > 1) {
            i.isTouched = !1;
            return
        }
        if (!i.startMoving)
            return;
        t.allowClick = !1,
        !r.cssMode && l.cancelable && l.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
        let f = t.isHorizontal() ? h : p
          , g = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        r.oneWayMovement && (f = Math.abs(f) * (a ? 1 : -1),
        g = Math.abs(g) * (a ? 1 : -1)),
        n.diff = f,
        f *= r.touchRatio,
        a && (f = -f,
        g = -g);
        let y = t.touchesDirection;
        t.swipeDirection = f > 0 ? "prev" : "next",
        t.touchesDirection = g > 0 ? "prev" : "next";
        let x = t.params.loop && !r.cssMode;
        if (!i.isMoved) {
            if (x && t.loopFix({
                direction: t.swipeDirection
            }),
            i.startTranslate = t.getTranslate(),
            t.setTransition(0),
            t.animating) {
                let C = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                t.wrapperEl.dispatchEvent(C)
            }
            i.allowMomentumBounce = !1,
            r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
            t.emit("sliderFirstMove", l)
        }
        let E;
        i.isMoved && y !== t.touchesDirection && x && Math.abs(f) >= 1 && (t.loopFix({
            direction: t.swipeDirection,
            setTranslate: !0
        }),
        E = !0),
        t.emit("sliderMove", l),
        i.isMoved = !0,
        i.currentTranslate = f + i.startTranslate;
        let T = !0
          , M = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (M = 0),
        f > 0 ? (x && !E && i.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.size / 2 : t.minTranslate()) && t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }),
        i.currentTranslate > t.minTranslate() && (T = !1,
        r.resistance && (i.currentTranslate = t.minTranslate() - 1 + ke(-t.minTranslate() + i.startTranslate + f, M)))) : f < 0 && (x && !E && i.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.size / 2 : t.maxTranslate()) && t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
        }),
        i.currentTranslate < t.maxTranslate() && (T = !1,
        r.resistance && (i.currentTranslate = t.maxTranslate() + 1 - ke(t.maxTranslate() - i.startTranslate - f, M)))),
        T && (l.preventedByNestedSwiper = !0),
        !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
            if (Math.abs(f) > r.threshold || i.allowThresholdMove) {
                if (!i.allowThresholdMove) {
                    i.allowThresholdMove = !0,
                    n.startX = n.currentX,
                    n.startY = n.currentY,
                    i.currentTranslate = i.startTranslate,
                    n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                    return
                }
            } else {
                i.currentTranslate = i.startTranslate;
                return
            }
        !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(),
        t.updateSlidesClasses()),
        t.params.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
        t.updateProgress(i.currentTranslate),
        t.setTranslate(i.currentTranslate))
    }
    function Vr(s) {
        let e = this
          , t = e.touchEventsData
          , i = t.evCache.findIndex(E=>E.pointerId === s.pointerId);
        if (i >= 0 && t.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(s.type) && !(s.type === "pointercancel" && (e.browser.isSafari || e.browser.isWebView)))
            return;
        let {params: r, touches: n, rtlTranslate: a, slidesGrid: o, enabled: l} = e;
        if (!l || !r.simulateTouch && s.pointerType === "mouse")
            return;
        let c = s;
        if (c.originalEvent && (c = c.originalEvent),
        t.allowTouchCallbacks && e.emit("touchEnd", c),
        t.allowTouchCallbacks = !1,
        !t.isTouched) {
            t.isMoved && r.grabCursor && e.setGrabCursor(!1),
            t.isMoved = !1,
            t.startMoving = !1;
            return
        }
        r.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
        let d = Ne()
          , u = d - t.touchStartTime;
        if (e.allowClick) {
            let E = c.path || c.composedPath && c.composedPath();
            e.updateClickedSlide(E && E[0] || c.target),
            e.emit("tap click", c),
            u < 300 && d - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", c)
        }
        if (t.lastClickTime = Ne(),
        Xe(()=>{
            e.destroyed || (e.allowClick = !0)
        }
        ),
        !t.isTouched || !t.isMoved || !e.swipeDirection || n.diff === 0 || t.currentTranslate === t.startTranslate) {
            t.isTouched = !1,
            t.isMoved = !1,
            t.startMoving = !1;
            return
        }
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        let m;
        if (r.followFinger ? m = a ? e.translate : -e.translate : m = -t.currentTranslate,
        r.cssMode)
            return;
        if (e.params.freeMode && r.freeMode.enabled) {
            e.freeMode.onTouchEnd({
                currentPos: m
            });
            return
        }
        let h = 0
          , p = e.slidesSizesGrid[0];
        for (let E = 0; E < o.length; E += E < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            let T = E < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            typeof o[E + T] != "undefined" ? m >= o[E] && m < o[E + T] && (h = E,
            p = o[E + T] - o[E]) : m >= o[E] && (h = E,
            p = o[o.length - 1] - o[o.length - 2])
        }
        let f = null
          , g = null;
        r.rewind && (e.isBeginning ? g = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (f = 0));
        let y = (m - o[h]) / p
          , x = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (u > r.longSwipesMs) {
            if (!r.longSwipes) {
                e.slideTo(e.activeIndex);
                return
            }
            e.swipeDirection === "next" && (y >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? f : h + x) : e.slideTo(h)),
            e.swipeDirection === "prev" && (y > 1 - r.longSwipesRatio ? e.slideTo(h + x) : g !== null && y < 0 && Math.abs(y) > r.longSwipesRatio ? e.slideTo(g) : e.slideTo(h))
        } else {
            if (!r.shortSwipes) {
                e.slideTo(e.activeIndex);
                return
            }
            e.navigation && (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl) ? c.target === e.navigation.nextEl ? e.slideTo(h + x) : e.slideTo(h) : (e.swipeDirection === "next" && e.slideTo(f !== null ? f : h + x),
            e.swipeDirection === "prev" && e.slideTo(g !== null ? g : h))
        }
    }
    function ni() {
        let s = this
          , {params: e, el: t} = s;
        if (t && t.offsetWidth === 0)
            return;
        e.breakpoints && s.setBreakpoint();
        let {allowSlideNext: i, allowSlidePrev: r, snapGrid: n} = s
          , a = s.virtual && s.params.virtual.enabled;
        s.allowSlideNext = !0,
        s.allowSlidePrev = !0,
        s.updateSize(),
        s.updateSlides(),
        s.updateSlidesClasses();
        let o = a && e.loop;
        (e.slidesPerView === "auto" || e.slidesPerView > 1) && s.isEnd && !s.isBeginning && !s.params.centeredSlides && !o ? s.slideTo(s.slides.length - 1, 0, !1, !0) : s.params.loop && !a ? s.slideToLoop(s.realIndex, 0, !1, !0) : s.slideTo(s.activeIndex, 0, !1, !0),
        s.autoplay && s.autoplay.running && s.autoplay.paused && (clearTimeout(s.autoplay.resizeTimeout),
        s.autoplay.resizeTimeout = setTimeout(()=>{
            s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume()
        }
        , 500)),
        s.allowSlidePrev = r,
        s.allowSlideNext = i,
        s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow()
    }
    function Wr(s) {
        let e = this;
        e.enabled && (e.allowClick || (e.params.preventClicks && s.preventDefault(),
        e.params.preventClicksPropagation && e.animating && (s.stopPropagation(),
        s.stopImmediatePropagation())))
    }
    function Yr() {
        let s = this
          , {wrapperEl: e, rtlTranslate: t, enabled: i} = s;
        if (!i)
            return;
        s.previousTranslate = s.translate,
        s.isHorizontal() ? s.translate = -e.scrollLeft : s.translate = -e.scrollTop,
        s.translate === 0 && (s.translate = 0),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
        let r, n = s.maxTranslate() - s.minTranslate();
        n === 0 ? r = 0 : r = (s.translate - s.minTranslate()) / n,
        r !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
        s.emit("setTranslate", s.translate, !1)
    }
    function Xr(s) {
        let e = this;
        mt(e, s.target),
        !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
    }
    var Vn = !1;
    function wl() {}
    var Wn = (s,e)=>{
        let t = ie()
          , {params: i, el: r, wrapperEl: n, device: a} = s
          , o = !!i.nested
          , l = e === "on" ? "addEventListener" : "removeEventListener"
          , c = e;
        r[l]("pointerdown", s.onTouchStart, {
            passive: !1
        }),
        t[l]("pointermove", s.onTouchMove, {
            passive: !1,
            capture: o
        }),
        t[l]("pointerup", s.onTouchEnd, {
            passive: !0
        }),
        t[l]("pointercancel", s.onTouchEnd, {
            passive: !0
        }),
        t[l]("pointerout", s.onTouchEnd, {
            passive: !0
        }),
        t[l]("pointerleave", s.onTouchEnd, {
            passive: !0
        }),
        (i.preventClicks || i.preventClicksPropagation) && r[l]("click", s.onClick, !0),
        i.cssMode && n[l]("scroll", s.onScroll),
        i.updateOnWindowResize ? s[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ni, !0) : s[c]("observerUpdate", ni, !0),
        r[l]("load", s.onLoad, {
            capture: !0
        })
    }
    ;
    function Al() {
        let s = this
          , e = ie()
          , {params: t} = s;
        s.onTouchStart = Hr.bind(s),
        s.onTouchMove = Gr.bind(s),
        s.onTouchEnd = Vr.bind(s),
        t.cssMode && (s.onScroll = Yr.bind(s)),
        s.onClick = Wr.bind(s),
        s.onLoad = Xr.bind(s),
        Vn || (e.addEventListener("touchstart", wl),
        Vn = !0),
        Wn(s, "on")
    }
    function Ol() {
        Wn(this, "off")
    }
    var Yn = {
        attachEvents: Al,
        detachEvents: Ol
    };
    var Xn = (s,e)=>s.grid && e.grid && e.grid.rows > 1;
    function qr() {
        let s = this
          , {realIndex: e, initialized: t, params: i, el: r} = s
          , n = i.breakpoints;
        if (!n || n && Object.keys(n).length === 0)
            return;
        let a = s.getBreakpoint(n, s.params.breakpointsBase, s.el);
        if (!a || s.currentBreakpoint === a)
            return;
        let l = (a in n ? n[a] : void 0) || s.originalParams
          , c = Xn(s, i)
          , d = Xn(s, l)
          , u = i.enabled;
        c && !d ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
        s.emitContainerClasses()) : !c && d && (r.classList.add(`${i.containerModifierClass}grid`),
        (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`),
        s.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach(f=>{
            let g = i[f] && i[f].enabled
              , y = l[f] && l[f].enabled;
            g && !y && s[f].disable(),
            !g && y && s[f].enable()
        }
        );
        let m = l.direction && l.direction !== i.direction
          , h = i.loop && (l.slidesPerView !== i.slidesPerView || m);
        m && t && s.changeDirection(),
        ue(s.params, l);
        let p = s.params.enabled;
        Object.assign(s, {
            allowTouchMove: s.params.allowTouchMove,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev
        }),
        u && !p ? s.disable() : !u && p && s.enable(),
        s.currentBreakpoint = a,
        s.emit("_beforeBreakpoint", l),
        h && t && (s.loopDestroy(),
        s.loopCreate(e),
        s.updateSlides()),
        s.emit("breakpoint", l)
    }
    function Ur(s, e="window", t) {
        if (!s || e === "container" && !t)
            return;
        let i = !1
          , r = W()
          , n = e === "window" ? r.innerHeight : t.clientHeight
          , a = Object.keys(s).map(o=>{
            if (typeof o == "string" && o.indexOf("@") === 0) {
                let l = parseFloat(o.substr(1));
                return {
                    value: n * l,
                    point: o
                }
            }
            return {
                value: o,
                point: o
            }
        }
        );
        a.sort((o,l)=>parseInt(o.value, 10) - parseInt(l.value, 10));
        for (let o = 0; o < a.length; o += 1) {
            let {point: l, value: c} = a[o];
            e === "window" ? r.matchMedia(`(min-width: ${c}px)`).matches && (i = l) : c <= t.clientWidth && (i = l)
        }
        return i || "max"
    }
    var qn = {
        setBreakpoint: qr,
        getBreakpoint: Ur
    };
    function Ll(s, e) {
        let t = [];
        return s.forEach(i=>{
            typeof i == "object" ? Object.keys(i).forEach(r=>{
                i[r] && t.push(e + r)
            }
            ) : typeof i == "string" && t.push(e + i)
        }
        ),
        t
    }
    function jr() {
        let s = this
          , {classNames: e, params: t, rtl: i, el: r, device: n} = s
          , a = Ll(["initialized", t.direction, {
            "free-mode": s.params.freeMode && t.freeMode.enabled
        }, {
            autoheight: t.autoHeight
        }, {
            rtl: i
        }, {
            grid: t.grid && t.grid.rows > 1
        }, {
            "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
        }, {
            android: n.android
        }, {
            ios: n.ios
        }, {
            "css-mode": t.cssMode
        }, {
            centered: t.cssMode && t.centeredSlides
        }, {
            "watch-progress": t.watchSlidesProgress
        }], t.containerModifierClass);
        e.push(...a),
        r.classList.add(...e),
        s.emitContainerClasses()
    }
    function Kr() {
        let s = this
          , {el: e, classNames: t} = s;
        e.classList.remove(...t),
        s.emitContainerClasses()
    }
    var Un = {
        addClasses: jr,
        removeClasses: Kr
    };
    function kl() {
        let s = this
          , {isLocked: e, params: t} = s
          , {slidesOffsetBefore: i} = t;
        if (i) {
            let r = s.slides.length - 1
              , n = s.slidesGrid[r] + s.slidesSizesGrid[r] + i * 2;
            s.isLocked = s.size > n
        } else
            s.isLocked = s.snapGrid.length === 1;
        t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
        t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
        e && e !== s.isLocked && (s.isEnd = !1),
        e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock")
    }
    var jn = {
        checkOverflow: kl
    };
    var Zr = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function Qr(s, e) {
        return function(i={}) {
            let r = Object.keys(i)[0]
              , n = i[r];
            if (typeof n != "object" || n === null) {
                ue(e, i);
                return
            }
            if (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && s[r] === !0 && (s[r] = {
                auto: !0
            }),
            !(r in s && "enabled"in n)) {
                ue(e, i);
                return
            }
            s[r] === !0 && (s[r] = {
                enabled: !0
            }),
            typeof s[r] == "object" && !("enabled"in s[r]) && (s[r].enabled = !0),
            s[r] || (s[r] = {
                enabled: !1
            }),
            ue(e, i)
        }
    }
    var Jr = {
        eventsEmitter: zn,
        update: $n,
        translate: Fn,
        transition: Nn,
        slide: Bn,
        loop: Hn,
        grabCursor: Gn,
        events: Yn,
        breakpoints: qn,
        checkOverflow: jn,
        classes: Un
    }
      , es = {}
      , ye = class {
        constructor(...e) {
            let t, i;
            e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? i = e[0] : [t,i] = e,
            i || (i = {}),
            i = ue({}, i),
            t && !i.el && (i.el = t);
            let r = ie();
            if (i.el && typeof i.el == "string" && r.querySelectorAll(i.el).length > 1) {
                let l = [];
                return r.querySelectorAll(i.el).forEach(c=>{
                    let d = ue({}, i, {
                        el: c
                    });
                    l.push(new ye(d))
                }
                ),
                l
            }
            let n = this;
            n.__swiper__ = !0,
            n.support = si(),
            n.device = kn({
                userAgent: i.userAgent
            }),
            n.browser = Dn(),
            n.eventsListeners = {},
            n.eventsAnyListeners = [],
            n.modules = [...n.__modules__],
            i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
            let a = {};
            n.modules.forEach(l=>{
                l({
                    params: i,
                    swiper: n,
                    extendParams: Qr(i, a),
                    on: n.on.bind(n),
                    once: n.once.bind(n),
                    off: n.off.bind(n),
                    emit: n.emit.bind(n)
                })
            }
            );
            let o = ue({}, Zr, a);
            return n.params = ue({}, o, es, i),
            n.originalParams = ue({}, n.params),
            n.passedParams = ue({}, i),
            n.params && n.params.on && Object.keys(n.params.on).forEach(l=>{
                n.on(l, n.params.on[l])
            }
            ),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            Object.assign(n, {
                enabled: n.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return n.params.direction === "horizontal"
                },
                isVertical() {
                    return n.params.direction === "vertical"
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / ke(2, 23)) * ke(2, 23)
                },
                allowSlideNext: n.params.allowSlideNext,
                allowSlidePrev: n.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: n.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    evCache: []
                },
                allowClick: !0,
                allowTouchMove: n.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            n.emit("_swiper"),
            n.params.init && n.init(),
            n
        }
        getSlideIndex(e) {
            let {slidesEl: t, params: i} = this
              , r = Q(t, `.${i.slideClass}, swiper-slide`)
              , n = wt(r[0]);
            return wt(e) - n
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
        }
        recalcSlides() {
            let e = this
              , {slidesEl: t, params: i} = e;
            e.slides = Q(t, `.${i.slideClass}, swiper-slide`)
        }
        enable() {
            let e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            let e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, t) {
            let i = this;
            e = Math.min(Math.max(e, 0), 1);
            let r = i.minTranslate()
              , a = (i.maxTranslate() - r) * e + r;
            i.translateTo(a, typeof t == "undefined" ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses()
        }
        emitContainerClasses() {
            let e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            let t = e.el.className.split(" ").filter(i=>i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            let t = this;
            return t.destroyed ? "" : e.className.split(" ").filter(i=>i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
        }
        emitSlidesClasses() {
            let e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            let t = [];
            e.slides.forEach(i=>{
                let r = e.getSlideClasses(i);
                t.push({
                    slideEl: i,
                    classNames: r
                }),
                e.emit("_slideClass", i, r)
            }
            ),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e="current", t=!1) {
            let i = this
              , {params: r, slides: n, slidesGrid: a, slidesSizesGrid: o, size: l, activeIndex: c} = i
              , d = 1;
            if (r.centeredSlides) {
                let u = n[c].swiperSlideSize, m;
                for (let h = c + 1; h < n.length; h += 1)
                    n[h] && !m && (u += n[h].swiperSlideSize,
                    d += 1,
                    u > l && (m = !0));
                for (let h = c - 1; h >= 0; h -= 1)
                    n[h] && !m && (u += n[h].swiperSlideSize,
                    d += 1,
                    u > l && (m = !0))
            } else if (e === "current")
                for (let u = c + 1; u < n.length; u += 1)
                    (t ? a[u] + o[u] - a[c] < l : a[u] - a[c] < l) && (d += 1);
            else
                for (let u = c - 1; u >= 0; u -= 1)
                    a[c] - a[u] < l && (d += 1);
            return d
        }
        update() {
            let e = this;
            if (!e || e.destroyed)
                return;
            let {snapGrid: t, params: i} = e;
            i.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{
                a.complete && mt(e, a)
            }
            ),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses();
            function r() {
                let a = e.rtlTranslate ? e.translate * -1 : e.translate
                  , o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
                e.setTranslate(o),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let n;
            if (e.params.freeMode && e.params.freeMode.enabled)
                r(),
                e.params.autoHeight && e.updateAutoHeight();
            else {
                if ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides) {
                    let a = e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
                    n = e.slideTo(a.length - 1, 0, !1, !0)
                } else
                    n = e.slideTo(e.activeIndex, 0, !1, !0);
                n || r()
            }
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t=!0) {
            let i = this
              , r = i.params.direction;
            return e || (e = r === "horizontal" ? "vertical" : "horizontal"),
            e === r || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
            i.el.classList.add(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            i.params.direction = e,
            i.slides.forEach(n=>{
                e === "vertical" ? n.style.width = "" : n.style.height = ""
            }
            ),
            i.emit("changeDirection"),
            t && i.update()),
            i
        }
        changeLanguageDirection(e) {
            let t = this;
            t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
            t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
            t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "ltr"),
            t.update())
        }
        mount(e) {
            let t = this;
            if (t.mounted)
                return !0;
            let i = e || t.params.el;
            if (typeof i == "string" && (i = document.querySelector(i)),
            !i)
                return !1;
            i.swiper = t,
            i.shadowEl && (t.isElement = !0);
            let r = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`
              , a = (()=>i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : Q(i, r())[0])();
            return !a && t.params.createElements && (a = Be("div", t.params.wrapperClass),
            i.append(a),
            Q(i, `.${t.params.slideClass}`).forEach(o=>{
                a.append(o)
            }
            )),
            Object.assign(t, {
                el: i,
                wrapperEl: a,
                slidesEl: t.isElement ? i : a,
                mounted: !0,
                rtl: i.dir.toLowerCase() === "rtl" || Oe(i, "direction") === "rtl",
                rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || Oe(i, "direction") === "rtl"),
                wrongRTL: Oe(a, "display") === "-webkit-box"
            }),
            !0
        }
        init(e) {
            let t = this;
            return t.initialized || t.mount(e) === !1 || (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{
                r.complete ? mt(t, r) : r.addEventListener("load", n=>{
                    mt(t, n.target)
                }
                )
            }
            ),
            Ot(t),
            t.initialized = !0,
            Ot(t),
            t.emit("init"),
            t.emit("afterInit")),
            t
        }
        destroy(e=!0, t=!0) {
            let i = this
              , {params: r, el: n, wrapperEl: a, slides: o} = i;
            return typeof i.params == "undefined" || i.destroyed || (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            r.loop && i.loopDestroy(),
            t && (i.removeClasses(),
            n.removeAttribute("style"),
            a.removeAttribute("style"),
            o && o.length && o.forEach(l=>{
                l.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index")
            }
            )),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(l=>{
                i.off(l)
            }
            ),
            e !== !1 && (i.el.swiper = null,
            An(i)),
            i.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            ue(es, e)
        }
        static get extendedDefaults() {
            return es
        }
        static get defaults() {
            return Zr
        }
        static installModule(e) {
            ye.prototype.__modules__ || (ye.prototype.__modules__ = []);
            let t = ye.prototype.__modules__;
            typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach(t=>ye.installModule(t)),
            ye) : (ye.installModule(e),
            ye)
        }
    }
    ;
    Object.keys(Jr).forEach(s=>{
        Object.keys(Jr[s]).forEach(e=>{
            ye.prototype[e] = Jr[s][e]
        }
        )
    }
    );
    ye.use([dr, ur]);
    var kt = ye;
    function Dt(s, e, t, i) {
        return s.params.createElements && Object.keys(i).forEach(r=>{
            if (!t[r] && t.auto === !0) {
                let n = Q(s.el, `.${i[r]}`)[0];
                n || (n = Be("div", i[r]),
                n.className = i[r],
                s.el.append(n)),
                t[r] = n,
                e[r] = n
            }
        }
        ),
        t
    }
    function ai({swiper: s, extendParams: e, on: t, emit: i}) {
        e({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }),
        s.navigation = {
            nextEl: null,
            prevEl: null
        };
        let r = p=>(Array.isArray(p) || (p = [p].filter(f=>!!f)),
        p);
        function n(p) {
            let f;
            return p && typeof p == "string" && s.isElement && (f = s.el.shadowRoot.querySelector(p),
            f) ? f : (p && (typeof p == "string" && (f = [...document.querySelectorAll(p)]),
            s.params.uniqueNavElements && typeof p == "string" && f.length > 1 && s.el.querySelectorAll(p).length === 1 && (f = s.el.querySelector(p))),
            p && !f ? p : f)
        }
        function a(p, f) {
            let g = s.params.navigation;
            p = r(p),
            p.forEach(y=>{
                y && (y.classList[f ? "add" : "remove"](...g.disabledClass.split(" ")),
                y.tagName === "BUTTON" && (y.disabled = f),
                s.params.watchOverflow && s.enabled && y.classList[s.isLocked ? "add" : "remove"](g.lockClass))
            }
            )
        }
        function o() {
            let {nextEl: p, prevEl: f} = s.navigation;
            if (s.params.loop) {
                a(f, !1),
                a(p, !1);
                return
            }
            a(f, s.isBeginning && !s.params.rewind),
            a(p, s.isEnd && !s.params.rewind)
        }
        function l(p) {
            p.preventDefault(),
            !(s.isBeginning && !s.params.loop && !s.params.rewind) && (s.slidePrev(),
            i("navigationPrev"))
        }
        function c(p) {
            p.preventDefault(),
            !(s.isEnd && !s.params.loop && !s.params.rewind) && (s.slideNext(),
            i("navigationNext"))
        }
        function d() {
            let p = s.params.navigation;
            if (s.params.navigation = Dt(s, s.originalParams.navigation, s.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !(p.nextEl || p.prevEl))
                return;
            let f = n(p.nextEl)
              , g = n(p.prevEl);
            Object.assign(s.navigation, {
                nextEl: f,
                prevEl: g
            }),
            f = r(f),
            g = r(g);
            let y = (x,E)=>{
                x && x.addEventListener("click", E === "next" ? c : l),
                !s.enabled && x && x.classList.add(...p.lockClass.split(" "))
            }
            ;
            f.forEach(x=>y(x, "next")),
            g.forEach(x=>y(x, "prev"))
        }
        function u() {
            let {nextEl: p, prevEl: f} = s.navigation;
            p = r(p),
            f = r(f);
            let g = (y,x)=>{
                y.removeEventListener("click", x === "next" ? c : l),
                y.classList.remove(...s.params.navigation.disabledClass.split(" "))
            }
            ;
            p.forEach(y=>g(y, "next")),
            f.forEach(y=>g(y, "prev"))
        }
        t("init", ()=>{
            s.params.navigation.enabled === !1 ? h() : (d(),
            o())
        }
        ),
        t("toEdge fromEdge lock unlock", ()=>{
            o()
        }
        ),
        t("destroy", ()=>{
            u()
        }
        ),
        t("enable disable", ()=>{
            let {nextEl: p, prevEl: f} = s.navigation;
            p = r(p),
            f = r(f),
            [...p, ...f].filter(g=>!!g).forEach(g=>g.classList[s.enabled ? "remove" : "add"](s.params.navigation.lockClass))
        }
        ),
        t("click", (p,f)=>{
            let {nextEl: g, prevEl: y} = s.navigation;
            g = r(g),
            y = r(y);
            let x = f.target;
            if (s.params.navigation.hideOnClick && !y.includes(x) && !g.includes(x)) {
                if (s.pagination && s.params.pagination && s.params.pagination.clickable && (s.pagination.el === x || s.pagination.el.contains(x)))
                    return;
                let E;
                g.length ? E = g[0].classList.contains(s.params.navigation.hiddenClass) : y.length && (E = y[0].classList.contains(s.params.navigation.hiddenClass)),
                i(E === !0 ? "navigationShow" : "navigationHide"),
                [...g, ...y].filter(T=>!!T).forEach(T=>T.classList.toggle(s.params.navigation.hiddenClass))
            }
        }
        );
        let m = ()=>{
            s.el.classList.remove(...s.params.navigation.navigationDisabledClass.split(" ")),
            d(),
            o()
        }
          , h = ()=>{
            s.el.classList.add(...s.params.navigation.navigationDisabledClass.split(" ")),
            u()
        }
        ;
        Object.assign(s.navigation, {
            enable: m,
            disable: h,
            update: o,
            init: d,
            destroy: u
        })
    }
    var zl = 999
      , li = class extends B {
        constructor(s) {
            super(s),
            this.paginationType = this.getData("pagination-type"),
            this.breakpoint = window.matchMedia(`(min-width: ${zl}px)`)
        }
        init() {
            kt.use([ai]),
            this.length = this.$("item").length,
            this.container = this.$("container")[0],
            this.navigationPrev = this.$("prev")[0],
            this.navigationNext = this.$("next")[0];
            let s = {
                speed: 700,
                loop: !0,
                spaceBetween: 20,
                grabCursor: !0,
                autoHeight: !0,
                slidesPerView: 1.5,
                threshold: 3,
                resistance: !1,
                navigation: {
                    prevEl: this.navigationPrev,
                    nextEl: this.navigationNext
                },
                breakpoints: {
                    1e3: {
                        slidesPerView: 3
                    }
                }
            };
            this.carousel = new kt(this.container,s)
        }
        destroy() {
            var s;
            super.destroy(),
            (s = this.carousel) == null || s.destroy(!0, !0)
        }
    }
    ;
    var rs = (s,e,t)=>s * (1 - t) + e * t;
    var Qn = (s,e,t,i,r)=>{
        let n = e - s
          , a = i - t;
        return t + ((r - s) / n * a || 0)
    }
    ;
    var Jn = (s,e)=>{
        s.style.webkitTransform = e,
        s.style.msTransform = e,
        s.style.transform = e
    }
    ;
    var J = document.documentElement
      , lv = document.body
      , cv = J.hasAttribute("data-debug");
    var ci = class extends B {
        constructor(s) {
            super(s)
        }
        init() {
            window.isMobile || (this.hasMoved = !1,
            this.mouse = {
                x: 0,
                y: 0,
                lerpedX: 0,
                lerpedY: 0
            },
            this.animate(),
            this.bindMousemove = this.mousemove.bind(this),
            window.addEventListener("mousemove", this.bindMousemove),
            this.bindEnter = this.hover.bind(this),
            this.bindLeave = this.leave.bind(this),
            this.hoverElements = document.querySelectorAll("a, button, .js-hover, .js-cursor-button"),
            this.hoverElements.forEach(s=>{
                s.addEventListener("mouseenter", this.bindEnter),
                s.addEventListener("mouseleave", this.bindLeave)
            }
            ))
        }
        animate() {
            this.raf = requestAnimationFrame(()=>this.animate()),
            this.mouse.lerpedX = rs(this.mouse.lerpedX, this.mouse.x, .1),
            this.mouse.lerpedY = rs(this.mouse.lerpedY, this.mouse.y, .1),
            Jn(this.el, `translate3d(${this.mouse.lerpedX}px,${this.mouse.lerpedY}px,0)`)
        }
        mousemove(s) {
            this.hasMoved || (this.hasMoved = !0,
            this.el.classList.add("has-moved")),
            this.mouse.x = s.clientX,
            this.mouse.y = s.clientY
        }
        hover(s) {
            this.el.classList.add("has-hover"),
            s.currentTarget.classList.contains("js-cursor-button") && (J.classList.add("has-cursor-button"),
            this.el.classList.add("has-hover-button"))
        }
        leave(s) {
            this.el.classList.remove("has-hover"),
            s.currentTarget.classList.contains("js-cursor-button") && (J.classList.remove("has-cursor-button"),
            this.el.classList.remove("has-hover-button"))
        }
        destroy() {
            window.isMobile || (window.removeEventListener("mousemove", this.bindmousemove),
            this.hoverElements.forEach(s=>{
                s.removeEventListener("mouseenter", this.bindEnter),
                s.removeEventListener("mouseleave", this.bindLeave)
            }
            ),
            cancelAnimationFrame(this.raf))
        }
    }
    ;
    var di = class extends B {
        constructor(s) {
            super(s),
            this.events = {
                change: {
                    radio: "onChange",
                    select: "onChange"
                }
            }
        }
        init() {
            this.$form = this.el,
            this.$radios = this.$("radio"),
            this.$selects = this.$("select"),
            this.baseUrl = this.getData("base-url")
        }
        onChange(s) {
            let e = this.baseUrl
              , t = new FormData(this.$form);
            for (let n of Array.from(t.entries()))
                (!n[1] || n[0] == "type") && t.delete(n[0]);
            let i = new URLSearchParams(t).toString()
              , r = i.length > 0 ? `${e}?${i}` : e;
            this.call("goTo", {
                url: r,
                transition: "listing"
            }, "Load")
        }
    }
    ;
    var ui = class extends B {
        constructor(s) {
            super(s),
            this.events = {
                submit: "onSubmit"
            }
        }
        init() {
            this.endpoint = this.el.action,
            this.$form = this.el,
            this.currentState = null,
            this.states = {
                loading: "is-loading",
                error: "is-error",
                success: "is-success"
            }
        }
        onSubmit(s) {
            s.preventDefault(),
            this.clearState(),
            this.setState("loading");
            let e = s.target.action
              , t = new FormData(s.target);
            fetch(e, {
                method: "POST",
                body: t
            }).then(i=>i.json()).then(i=>{
                i.success ? this.setState("success") : this.setState("error")
            }
            ).catch(i=>{
                console.error(i),
                this.setState("error")
            }
            )
        }
        clearState() {
            this.$form.classList.remove("is-error", "is-success", "is-loading"),
            this.currentState = null
        }
        setState(s) {
            switch (this.clearState(),
            s) {
            case "error":
                this.$form.classList.add("is-error");
                break;
            case "success":
                this.$form.classList.add("is-success"),
                this.$form.reset();
                break;
            case "loading":
                this.$form.classList.add("is-loading");
                break;
            default:
                break
            }
            this.currentState = s
        }
    }
    ;
    var fi = class extends B {
        constructor(s) {
            super(s),
            this.events = {
                click: {
                    "menu-toggler": "toggle"
                }
            }
        }
        toggle() {
            this.call("toggle", null, "Menu")
        }
    }
    ;
    function He(s) {
        if (s === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s
    }
    function oa(s, e) {
        s.prototype = Object.create(e.prototype),
        s.prototype.constructor = s,
        s.__proto__ = e
    }
    var Ee = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, vt = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, Es, he, te, Pe = 1e8, G = 1 / Pe, us = Math.PI * 2, Rl = us / 4, $l = 0, la = Math.sqrt, Fl = Math.cos, Nl = Math.sin, re = function(e) {
        return typeof e == "string"
    }, j = function(e) {
        return typeof e == "function"
    }, Ve = function(e) {
        return typeof e == "number"
    }, xi = function(e) {
        return typeof e == "undefined"
    }, ze = function(e) {
        return typeof e == "object"
    }, Se = function(e) {
        return e !== !1
    }, xs = function() {
        return typeof window != "undefined"
    }, hi = function(e) {
        return j(e) || re(e)
    }, ca = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
    , me = Array.isArray, fs = /(?:-?\.?\d|\.)+/gi, Ts = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ss = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Cs = /[+-]=-?[.\d]+/, da = /[^,'"\[\]\s]+/gi, Bl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, X, Me, hs, Ms, Te = {}, vi = {}, ua, fa = function(e) {
        return (vi = st(e, Te)) && pe
    }, Ti = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }, yi = function(e, t) {
        return !t && console.warn(e)
    }, ha = function(e, t) {
        return e && (Te[e] = t) && vi && (vi[e] = t) || Te
    }, Ht = function() {
        return 0
    }, Hl = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, mi = {
        suppressEvents: !0,
        kill: !1
    }, Gl = {
        suppressEvents: !0
    }, Ps = {}, Ue = [], ms = {}, ma, be = {}, ns = {}, ea = 30, pi = [], Is = "", ws = function(e) {
        var t = e[0], i, r;
        if (ze(t) || j(t) || (e = [e]),
        !(i = (t._gsap || {}).harness)) {
            for (r = pi.length; r-- && !pi[r].targetTest(t); )
                ;
            i = pi[r]
        }
        for (r = e.length; r--; )
            e[r] && (e[r]._gsap || (e[r]._gsap = new Ls(e[r],i))) || e.splice(r, 1);
        return e
    }, je = function(e) {
        return e._gsap || ws(Ie(e))[0]._gsap
    }, As = function(e, t, i) {
        return (i = e[t]) && j(i) ? e[t]() : xi(i) && e.getAttribute && e.getAttribute(t) || i
    }, ge = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    }, K = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, ne = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    }, at = function(e, t) {
        var i = t.charAt(0)
          , r = parseFloat(t.substr(2));
        return e = parseFloat(e),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    }, Vl = function(e, t) {
        for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; )
            ;
        return r < i
    }, bi = function() {
        var e = Ue.length, t = Ue.slice(0), i, r;
        for (ms = {},
        Ue.length = 0,
        i = 0; i < e; i++)
            r = t[i],
            r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    }, pa = function(e, t, i, r) {
        Ue.length && !he && bi(),
        e.render(t, i, r || he && t < 0 && (e._initted || e._startAt)),
        Ue.length && !he && bi()
    }, ga = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(da).length < 2 ? t : re(e) ? e.trim() : e
    }, va = function(e) {
        return e
    }, Ae = function(e, t) {
        for (var i in t)
            i in e || (e[i] = t[i]);
        return e
    }, Wl = function(e) {
        return function(t, i) {
            for (var r in i)
                r in t || r === "duration" && e || r === "ease" || (t[r] = i[r])
        }
    }, st = function(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }, ta = function s(e, t) {
        for (var i in t)
            i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = ze(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
        return e
    }, _i = function(e, t) {
        var i = {}, r;
        for (r in e)
            r in t || (i[r] = e[r]);
        return i
    }, Ft = function(e) {
        var t = e.parent || X
          , i = e.keyframes ? Wl(me(e.keyframes)) : Ae;
        if (Se(e.inherit))
            for (; t; )
                i(e, t.vars.defaults),
                t = t.parent || t._dp;
        return e
    }, Yl = function(e, t) {
        for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; )
            ;
        return i < 0
    }, ya = function(e, t, i, r, n) {
        i === void 0 && (i = "_first"),
        r === void 0 && (r = "_last");
        var a = e[r], o;
        if (n)
            for (o = t[n]; a && a[n] > o; )
                a = a._prev;
        return a ? (t._next = a._next,
        a._next = t) : (t._next = e[i],
        e[i] = t),
        t._next ? t._next._prev = t : e[r] = t,
        t._prev = a,
        t.parent = t._dp = e,
        t
    }, Ci = function(e, t, i, r) {
        i === void 0 && (i = "_first"),
        r === void 0 && (r = "_last");
        var n = t._prev
          , a = t._next;
        n ? n._next = a : e[i] === t && (e[i] = a),
        a ? a._prev = n : e[r] === t && (e[r] = n),
        t._next = t._prev = t.parent = null
    }, Ke = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
        e._act = 0
    }, it = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var i = e; i; )
                i._dirty = 1,
                i = i.parent;
        return e
    }, Xl = function(e) {
        for (var t = e.parent; t && t.parent; )
            t._dirty = 1,
            t.totalDuration(),
            t = t.parent;
        return e
    }, ps = function(e, t, i, r) {
        return e._startAt && (he ? e._startAt.revert(mi) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
    }, ql = function s(e) {
        return !e || e._ts && s(e.parent)
    }, ia = function(e) {
        return e._repeat ? yt(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, yt = function(e, t) {
        var i = Math.floor(e /= t);
        return e && i === e ? i - 1 : i
    }, Si = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }, Mi = function(e) {
        return e._end = ne(e._start + (e._tDur / Math.abs(e._ts || e._rts || G) || 0))
    }, Pi = function(e, t) {
        var i = e._dp;
        return i && i.smoothChildTiming && e._ts && (e._start = ne(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
        Mi(e),
        i._dirty || it(i, e)),
        e
    }, ba = function(e, t) {
        var i;
        if ((t._time || t._initted && !t._dur) && (i = Si(e.rawTime(), t),
        (!t._dur || Vt(0, t.totalDuration(), i) - t._tTime > G) && t.render(i, !0)),
        it(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (i = e; i._dp; )
                    i.rawTime() >= 0 && i.totalTime(i._tTime),
                    i = i._dp;
            e._zTime = -G
        }
    }, De = function(e, t, i, r) {
        return t.parent && Ke(t),
        t._start = ne((Ve(i) ? i : i || e !== X ? Ce(e, i, t) : e._time) + t._delay),
        t._end = ne(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
        ya(e, t, "_first", "_last", e._sort ? "_start" : 0),
        gs(t) || (e._recent = t),
        r || ba(e, t),
        e._ts < 0 && Pi(e, e._tTime),
        e
    }, _a = function(e, t) {
        return (Te.ScrollTrigger || Ti("scrollTrigger", t)) && Te.ScrollTrigger.create(t, e)
    }, Sa = function(e, t, i, r, n) {
        if (zs(e, t, n),
        !e._initted)
            return 1;
        if (!i && e._pt && !he && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && ma !== _e.frame)
            return Ue.push(e),
            e._lazy = [n, r],
            1
    }, Ul = function s(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t))
    }, gs = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    }, jl = function(e, t, i, r) {
        var n = e.ratio, a = t < 0 || !t && (!e._start && Ul(e) && !(!e._initted && gs(e)) || (e._ts < 0 || e._dp._ts < 0) && !gs(e)) ? 0 : 1, o = e._rDelay, l = 0, c, d, u;
        if (o && e._repeat && (l = Vt(0, e._tDur, t),
        d = yt(l, o),
        e._yoyo && d & 1 && (a = 1 - a),
        d !== yt(e._tTime, o) && (n = 1 - a,
        e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== n || he || r || e._zTime === G || !t && e._zTime) {
            if (!e._initted && Sa(e, t, r, i, l))
                return;
            for (u = e._zTime,
            e._zTime = t || (i ? G : 0),
            i || (i = t && !u),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            c = e._pt; c; )
                c.r(a, c.d),
                c = c._next;
            t < 0 && ps(e, t, i, !0),
            e._onUpdate && !i && we(e, "onUpdate"),
            l && e._repeat && !i && e.parent && we(e, "onRepeat"),
            (t >= e._tDur || t < 0) && e.ratio === a && (a && Ke(e, 1),
            !i && !he && (we(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()))
        } else
            e._zTime || (e._zTime = t)
    }, Kl = function(e, t, i) {
        var r;
        if (i > t)
            for (r = e._first; r && r._start <= i; ) {
                if (r.data === "isPause" && r._start > t)
                    return r;
                r = r._next
            }
        else
            for (r = e._last; r && r._start >= i; ) {
                if (r.data === "isPause" && r._start < t)
                    return r;
                r = r._prev
            }
    }, bt = function(e, t, i, r) {
        var n = e._repeat
          , a = ne(t) || 0
          , o = e._tTime / e._tDur;
        return o && !r && (e._time *= a / e._dur),
        e._dur = a,
        e._tDur = n ? n < 0 ? 1e10 : ne(a * (n + 1) + e._rDelay * n) : a,
        o > 0 && !r && Pi(e, e._tTime = e._tDur * o),
        e.parent && Mi(e),
        i || it(e.parent, e),
        e
    }, ra = function(e) {
        return e instanceof fe ? it(e) : bt(e, e._dur)
    }, Zl = {
        _start: 0,
        endTime: Ht,
        totalDuration: Ht
    }, Ce = function s(e, t, i) {
        var r = e.labels, n = e._recent || Zl, a = e.duration() >= Pe ? n.endTime(!1) : e._dur, o, l, c;
        return re(t) && (isNaN(t) || t in r) ? (l = t.charAt(0),
        c = t.substr(-1) === "%",
        o = t.indexOf("="),
        l === "<" || l === ">" ? (o >= 0 && (t = t.replace(/=/, "")),
        (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (t in r || (r[t] = a),
        r[t]) : (l = parseFloat(t.charAt(o - 1) + t.substr(o + 1)),
        c && i && (l = l / 100 * (me(i) ? i[0] : i).totalDuration()),
        o > 1 ? s(e, t.substr(0, o - 1), i) + l : a + l)) : t == null ? a : +t
    }, Nt = function(e, t, i) {
        var r = Ve(t[1]), n = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[n], o, l;
        if (r && (a.duration = t[1]),
        a.parent = i,
        e) {
            for (o = a,
            l = i; l && !("immediateRender"in o); )
                o = l.vars.defaults || {},
                l = Se(l.vars.inherit) && l.parent;
            a.immediateRender = Se(o.immediateRender),
            e < 2 ? a.runBackwards = 1 : a.startAt = t[n - 1]
        }
        return new ee(t[0],a,t[n + 1])
    }, Ze = function(e, t) {
        return e || e === 0 ? t(e) : t
    }, Vt = function(e, t, i) {
        return i < e ? e : i > t ? t : i
    }, ae = function(e, t) {
        return !re(e) || !(t = Bl.exec(e)) ? "" : t[1]
    }, Ql = function(e, t, i) {
        return Ze(i, function(r) {
            return Vt(e, t, r)
        })
    }, vs = [].slice, Ea = function(e, t) {
        return e && ze(e) && "length"in e && (!t && !e.length || e.length - 1 in e && ze(e[0])) && !e.nodeType && e !== Me
    }, Jl = function(e, t, i) {
        return i === void 0 && (i = []),
        e.forEach(function(r) {
            var n;
            return re(r) && !t || Ea(r, 1) ? (n = i).push.apply(n, Ie(r)) : i.push(r)
        }) || i
    }, Ie = function(e, t, i) {
        return te && !t && te.selector ? te.selector(e) : re(e) && !i && (hs || !_t()) ? vs.call((t || Ms).querySelectorAll(e), 0) : me(e) ? Jl(e, i) : Ea(e) ? vs.call(e, 0) : e ? [e] : []
    }, ys = function(e) {
        return e = Ie(e)[0] || yi("Invalid scope") || {},
        function(t) {
            var i = e.current || e.nativeElement || e;
            return Ie(t, i.querySelectorAll ? i : i === e ? yi("Invalid scope") || Ms.createElement("div") : e)
        }
    }, xa = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    }, Ta = function(e) {
        if (j(e))
            return e;
        var t = ze(e) ? e : {
            each: e
        }
          , i = rt(t.ease)
          , r = t.from || 0
          , n = parseFloat(t.base) || 0
          , a = {}
          , o = r > 0 && r < 1
          , l = isNaN(r) || o
          , c = t.axis
          , d = r
          , u = r;
        return re(r) ? d = u = {
            center: .5,
            edges: .5,
            end: 1
        }[r] || 0 : !o && l && (d = r[0],
        u = r[1]),
        function(m, h, p) {
            var f = (p || t).length, g = a[f], y, x, E, T, M, C, b, S, _;
            if (!g) {
                if (_ = t.grid === "auto" ? 0 : (t.grid || [1, Pe])[1],
                !_) {
                    for (b = -Pe; b < (b = p[_++].getBoundingClientRect().left) && _ < f; )
                        ;
                    _--
                }
                for (g = a[f] = [],
                y = l ? Math.min(_, f) * d - .5 : r % _,
                x = _ === Pe ? 0 : l ? f * u / _ - .5 : r / _ | 0,
                b = 0,
                S = Pe,
                C = 0; C < f; C++)
                    E = C % _ - y,
                    T = x - (C / _ | 0),
                    g[C] = M = c ? Math.abs(c === "y" ? T : E) : la(E * E + T * T),
                    M > b && (b = M),
                    M < S && (S = M);
                r === "random" && xa(g),
                g.max = b - S,
                g.min = S,
                g.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (_ > f ? f - 1 : c ? c === "y" ? f / _ : _ : Math.max(_, f / _)) || 0) * (r === "edges" ? -1 : 1),
                g.b = f < 0 ? n - f : n,
                g.u = ae(t.amount || t.each) || 0,
                i = i && f < 0 ? ka(i) : i
            }
            return f = (g[m] - g.min) / g.max || 0,
            ne(g.b + (i ? i(f) : f) * g.v) + g.u
        }
    }, bs = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(i) {
            var r = ne(Math.round(parseFloat(i) / e) * e * t);
            return (r - r % 1) / t + (Ve(i) ? 0 : ae(i))
        }
    }, Ca = function(e, t) {
        var i = me(e), r, n;
        return !i && ze(e) && (r = i = e.radius || Pe,
        e.values ? (e = Ie(e.values),
        (n = !Ve(e[0])) && (r *= r)) : e = bs(e.increment)),
        Ze(t, i ? j(e) ? function(a) {
            return n = e(a),
            Math.abs(n - a) <= r ? n : a
        }
        : function(a) {
            for (var o = parseFloat(n ? a.x : a), l = parseFloat(n ? a.y : 0), c = Pe, d = 0, u = e.length, m, h; u--; )
                n ? (m = e[u].x - o,
                h = e[u].y - l,
                m = m * m + h * h) : m = Math.abs(e[u] - o),
                m < c && (c = m,
                d = u);
            return d = !r || c <= r ? e[d] : a,
            n || d === a || Ve(a) ? d : d + ae(a)
        }
        : bs(e))
    }, Ma = function(e, t, i, r) {
        return Ze(me(e) ? !t : i === !0 ? !!(i = 0) : !r, function() {
            return me(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * r) / r
        })
    }, ec = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        return function(r) {
            return t.reduce(function(n, a) {
                return a(n)
            }, r)
        }
    }, tc = function(e, t) {
        return function(i) {
            return e(parseFloat(i)) + (t || ae(i))
        }
    }, ic = function(e, t, i) {
        return Ia(e, t, 0, 1, i)
    }, Pa = function(e, t, i) {
        return Ze(i, function(r) {
            return e[~~t(r)]
        })
    }, rc = function s(e, t, i) {
        var r = t - e;
        return me(e) ? Pa(e, s(0, e.length), t) : Ze(i, function(n) {
            return (r + (n - e) % r) % r + e
        })
    }, sc = function s(e, t, i) {
        var r = t - e
          , n = r * 2;
        return me(e) ? Pa(e, s(0, e.length - 1), t) : Ze(i, function(a) {
            return a = (n + (a - e) % n) % n || 0,
            e + (a > r ? n - a : a)
        })
    }, xt = function(e) {
        for (var t = 0, i = "", r, n, a, o; ~(r = e.indexOf("random(", t)); )
            a = e.indexOf(")", r),
            o = e.charAt(r + 7) === "[",
            n = e.substr(r + 7, a - r - 7).match(o ? da : fs),
            i += e.substr(t, r - t) + Ma(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5),
            t = a + 1;
        return i + e.substr(t, e.length - t)
    }, Ia = function(e, t, i, r, n) {
        var a = t - e
          , o = r - i;
        return Ze(n, function(l) {
            return i + ((l - e) / a * o || 0)
        })
    }, nc = function s(e, t, i, r) {
        var n = isNaN(e + t) ? 0 : function(h) {
            return (1 - h) * e + h * t
        }
        ;
        if (!n) {
            var a = re(e), o = {}, l, c, d, u, m;
            if (i === !0 && (r = 1) && (i = null),
            a)
                e = {
                    p: e
                },
                t = {
                    p: t
                };
            else if (me(e) && !me(t)) {
                for (d = [],
                u = e.length,
                m = u - 2,
                c = 1; c < u; c++)
                    d.push(s(e[c - 1], e[c]));
                u--,
                n = function(p) {
                    p *= u;
                    var f = Math.min(m, ~~p);
                    return d[f](p - f)
                }
                ,
                i = t
            } else
                r || (e = st(me(e) ? [] : {}, e));
            if (!d) {
                for (l in t)
                    ks.call(o, e, l, "get", t[l]);
                n = function(p) {
                    return Fs(p, o) || (a ? e.p : e)
                }
            }
        }
        return Ze(i, n)
    }, sa = function(e, t, i) {
        var r = e.labels, n = Pe, a, o, l;
        for (a in r)
            o = r[a] - t,
            o < 0 == !!i && o && n > (o = Math.abs(o)) && (l = a,
            n = o);
        return l
    }, we = function(e, t, i) {
        var r = e.vars, n = r[t], a = te, o = e._ctx, l, c, d;
        if (n)
            return l = r[t + "Params"],
            c = r.callbackScope || e,
            i && Ue.length && bi(),
            o && (te = o),
            d = l ? n.apply(c, l) : n.call(c),
            te = a,
            d
    }, Rt = function(e) {
        return Ke(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!he),
        e.progress() < 1 && we(e, "onInterrupt"),
        e
    }, gt, wa = [], Aa = function(e) {
        if (!xs()) {
            wa.push(e);
            return
        }
        e = !e.name && e.default || e;
        var t = e.name
          , i = j(e)
          , r = t && !i && e.init ? function() {
            this._props = []
        }
        : e
          , n = {
            init: Ht,
            render: Fs,
            add: ks,
            kill: Sc,
            modifier: _c,
            rawVars: 0
        }
          , a = {
            targetTest: 0,
            get: 0,
            getSetter: Ii,
            aliases: {},
            register: 0
        };
        if (_t(),
        e !== r) {
            if (be[t])
                return;
            Ae(r, Ae(_i(e, n), a)),
            st(r.prototype, st(n, _i(e, a))),
            be[r.prop = t] = r,
            e.targetTest && (pi.push(r),
            Ps[t] = 1),
            t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
        }
        ha(t, r),
        e.register && e.register(pe, r, ve)
    }, H = 255, $t = {
        aqua: [0, H, H],
        lime: [0, H, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, H],
        navy: [0, 0, 128],
        white: [H, H, H],
        olive: [128, 128, 0],
        yellow: [H, H, 0],
        orange: [H, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [H, 0, 0],
        pink: [H, 192, 203],
        cyan: [0, H, H],
        transparent: [H, H, H, 0]
    }, as = function(e, t, i) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0,
        (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * H + .5 | 0
    }, Oa = function(e, t, i) {
        var r = e ? Ve(e) ? [e >> 16, e >> 8 & H, e & H] : 0 : $t.black, n, a, o, l, c, d, u, m, h, p;
        if (!r) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
            $t[e])
                r = $t[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1),
                a = e.charAt(2),
                o = e.charAt(3),
                e = "#" + n + n + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
                e.length === 9)
                    return r = parseInt(e.substr(1, 6), 16),
                    [r >> 16, r >> 8 & H, r & H, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16),
                r = [e >> 16, e >> 8 & H, e & H]
            } else if (e.substr(0, 3) === "hsl") {
                if (r = p = e.match(fs),
                !t)
                    l = +r[0] % 360 / 360,
                    c = +r[1] / 100,
                    d = +r[2] / 100,
                    a = d <= .5 ? d * (c + 1) : d + c - d * c,
                    n = d * 2 - a,
                    r.length > 3 && (r[3] *= 1),
                    r[0] = as(l + 1 / 3, n, a),
                    r[1] = as(l, n, a),
                    r[2] = as(l - 1 / 3, n, a);
                else if (~e.indexOf("="))
                    return r = e.match(Ts),
                    i && r.length < 4 && (r[3] = 1),
                    r
            } else
                r = e.match(fs) || $t.transparent;
            r = r.map(Number)
        }
        return t && !p && (n = r[0] / H,
        a = r[1] / H,
        o = r[2] / H,
        u = Math.max(n, a, o),
        m = Math.min(n, a, o),
        d = (u + m) / 2,
        u === m ? l = c = 0 : (h = u - m,
        c = d > .5 ? h / (2 - u - m) : h / (u + m),
        l = u === n ? (a - o) / h + (a < o ? 6 : 0) : u === a ? (o - n) / h + 2 : (n - a) / h + 4,
        l *= 60),
        r[0] = ~~(l + .5),
        r[1] = ~~(c * 100 + .5),
        r[2] = ~~(d * 100 + .5)),
        i && r.length < 4 && (r[3] = 1),
        r
    }, La = function(e) {
        var t = []
          , i = []
          , r = -1;
        return e.split(Ge).forEach(function(n) {
            var a = n.match(nt) || [];
            t.push.apply(t, a),
            i.push(r += a.length + 1)
        }),
        t.c = i,
        t
    }, na = function(e, t, i) {
        var r = "", n = (e + r).match(Ge), a = t ? "hsla(" : "rgba(", o = 0, l, c, d, u;
        if (!n)
            return e;
        if (n = n.map(function(m) {
            return (m = Oa(m, t, 1)) && a + (t ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3] : m.join(",")) + ")"
        }),
        i && (d = La(e),
        l = i.c,
        l.join(r) !== d.c.join(r)))
            for (c = e.replace(Ge, "1").split(nt),
            u = c.length - 1; o < u; o++)
                r += c[o] + (~l.indexOf(o) ? n.shift() || a + "0,0,0,0)" : (d.length ? d : n.length ? n : i).shift());
        if (!c)
            for (c = e.split(Ge),
            u = c.length - 1; o < u; o++)
                r += c[o] + n[o];
        return r + c[u]
    }, Ge = function() {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in $t)
            s += "|" + e + "\\b";
        return new RegExp(s + ")","gi")
    }(), ac = /hsl[a]?\(/, Os = function(e) {
        var t = e.join(" "), i;
        if (Ge.lastIndex = 0,
        Ge.test(t))
            return i = ac.test(t),
            e[1] = na(e[1], i),
            e[0] = na(e[0], i, La(e[1])),
            !0
    }, Gt, _e = function() {
        var s = Date.now, e = 500, t = 33, i = s(), r = i, n = 1e3 / 240, a = n, o = [], l, c, d, u, m, h, p = function f(g) {
            var y = s() - r, x = g === !0, E, T, M, C;
            if (y > e && (i += y - t),
            r += y,
            M = r - i,
            E = M - a,
            (E > 0 || x) && (C = ++u.frame,
            m = M - u.time * 1e3,
            u.time = M = M / 1e3,
            a += E + (E >= n ? 4 : n - E),
            T = 1),
            x || (l = c(f)),
            T)
                for (h = 0; h < o.length; h++)
                    o[h](M, m, C, g)
        };
        return u = {
            time: 0,
            frame: 0,
            tick: function() {
                p(!0)
            },
            deltaRatio: function(g) {
                return m / (1e3 / (g || 60))
            },
            wake: function() {
                ua && (!hs && xs() && (Me = hs = window,
                Ms = Me.document || {},
                Te.gsap = pe,
                (Me.gsapVersions || (Me.gsapVersions = [])).push(pe.version),
                fa(vi || Me.GreenSockGlobals || !Me.gsap && Me || {}),
                d = Me.requestAnimationFrame,
                wa.forEach(Aa)),
                l && u.sleep(),
                c = d || function(g) {
                    return setTimeout(g, a - u.time * 1e3 + 1 | 0)
                }
                ,
                Gt = 1,
                p(2))
            },
            sleep: function() {
                (d ? Me.cancelAnimationFrame : clearTimeout)(l),
                Gt = 0,
                c = Ht
            },
            lagSmoothing: function(g, y) {
                e = g || 1 / 0,
                t = Math.min(y || 33, e)
            },
            fps: function(g) {
                n = 1e3 / (g || 240),
                a = u.time * 1e3 + n
            },
            add: function(g, y, x) {
                var E = y ? function(T, M, C, b) {
                    g(T, M, C, b),
                    u.remove(E)
                }
                : g;
                return u.remove(g),
                o[x ? "unshift" : "push"](E),
                _t(),
                E
            },
            remove: function(g, y) {
                ~(y = o.indexOf(g)) && o.splice(y, 1) && h >= y && h--
            },
            _listeners: o
        },
        u
    }(), _t = function() {
        return !Gt && _e.wake()
    }, F = {}, oc = /^[\d.\-M][\d.\-,\s]/, lc = /["']/g, cc = function(e) {
        for (var t = {}, i = e.substr(1, e.length - 3).split(":"), r = i[0], n = 1, a = i.length, o, l, c; n < a; n++)
            l = i[n],
            o = n !== a - 1 ? l.lastIndexOf(",") : l.length,
            c = l.substr(0, o),
            t[r] = isNaN(c) ? c.replace(lc, "").trim() : +c,
            r = l.substr(o + 1).trim();
        return t
    }, dc = function(e) {
        var t = e.indexOf("(") + 1
          , i = e.indexOf(")")
          , r = e.indexOf("(", t);
        return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i)
    }, uc = function(e) {
        var t = (e + "").split("(")
          , i = F[t[0]];
        return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [cc(t[1])] : dc(e).split(",").map(ga)) : F._CE && oc.test(e) ? F._CE("", e) : i
    }, ka = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Da = function s(e, t) {
        for (var i = e._first, r; i; )
            i instanceof fe ? s(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? s(i.timeline, t) : (r = i._ease,
            i._ease = i._yEase,
            i._yEase = r,
            i._yoyo = t)),
            i = i._next
    }, rt = function(e, t) {
        return e && (j(e) ? e : F[e] || uc(e)) || t
    }, ot = function(e, t, i, r) {
        i === void 0 && (i = function(l) {
            return 1 - t(1 - l)
        }
        ),
        r === void 0 && (r = function(l) {
            return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
        }
        );
        var n = {
            easeIn: t,
            easeOut: i,
            easeInOut: r
        }, a;
        return ge(e, function(o) {
            F[o] = Te[o] = n,
            F[a = o.toLowerCase()] = i;
            for (var l in n)
                F[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = F[o + "." + l] = n[l]
        }),
        n
    }, za = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    }, os = function s(e, t, i) {
        var r = t >= 1 ? t : 1
          , n = (i || (e ? .3 : .45)) / (t < 1 ? t : 1)
          , a = n / us * (Math.asin(1 / r) || 0)
          , o = function(d) {
            return d === 1 ? 1 : r * Math.pow(2, -10 * d) * Nl((d - a) * n) + 1
        }
          , l = e === "out" ? o : e === "in" ? function(c) {
            return 1 - o(1 - c)
        }
        : za(o);
        return n = us / n,
        l.config = function(c, d) {
            return s(e, c, d)
        }
        ,
        l
    }, ls = function s(e, t) {
        t === void 0 && (t = 1.70158);
        var i = function(a) {
            return a ? --a * a * ((t + 1) * a + t) + 1 : 0
        }
          , r = e === "out" ? i : e === "in" ? function(n) {
            return 1 - i(1 - n)
        }
        : za(i);
        return r.config = function(n) {
            return s(e, n)
        }
        ,
        r
    };
    ge("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
        var t = e < 5 ? e + 1 : e;
        ot(s + ",Power" + (t - 1), e ? function(i) {
            return Math.pow(i, t)
        }
        : function(i) {
            return i
        }
        , function(i) {
            return 1 - Math.pow(1 - i, t)
        }, function(i) {
            return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
        })
    });
    F.Linear.easeNone = F.none = F.Linear.easeIn;
    ot("Elastic", os("in"), os("out"), os());
    (function(s, e) {
        var t = 1 / e
          , i = 2 * t
          , r = 2.5 * t
          , n = function(o) {
            return o < t ? s * o * o : o < i ? s * Math.pow(o - 1.5 / e, 2) + .75 : o < r ? s * (o -= 2.25 / e) * o + .9375 : s * Math.pow(o - 2.625 / e, 2) + .984375
        };
        ot("Bounce", function(a) {
            return 1 - n(1 - a)
        }, n)
    }
    )(7.5625, 2.75);
    ot("Expo", function(s) {
        return s ? Math.pow(2, 10 * (s - 1)) : 0
    });
    ot("Circ", function(s) {
        return -(la(1 - s * s) - 1)
    });
    ot("Sine", function(s) {
        return s === 1 ? 1 : -Fl(s * Rl) + 1
    });
    ot("Back", ls("in"), ls("out"), ls());
    F.SteppedEase = F.steps = Te.SteppedEase = {
        config: function(e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e
              , r = e + (t ? 0 : 1)
              , n = t ? 1 : 0
              , a = 1 - G;
            return function(o) {
                return ((r * Vt(0, a, o) | 0) + n) * i
            }
        }
    };
    vt.ease = F["quad.out"];
    ge("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
        return Is += s + "," + s + "Params,"
    });
    var Ls = function(e, t) {
        this.id = $l++,
        e._gsap = this,
        this.target = e,
        this.harness = t,
        this.get = t ? t.get : As,
        this.set = t ? t.getSetter : Ii
    }
      , St = function() {
        function s(t) {
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            bt(this, +t.duration, 1, 1),
            this.data = t.data,
            te && (this._ctx = te,
            te.data.push(this)),
            Gt || _e.wake()
        }
        var e = s.prototype;
        return e.delay = function(i) {
            return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
            this._delay = i,
            this) : this._delay
        }
        ,
        e.duration = function(i) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(i) {
            return arguments.length ? (this._dirty = 0,
            bt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(i, r) {
            if (_t(),
            !arguments.length)
                return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Pi(this, i),
                !n._dp || n.parent || ba(n, this); n && n.parent; )
                    n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                    n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && De(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === G || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
            pa(this, i, r)),
            this
        }
        ,
        e.time = function(i, r) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + ia(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
        }
        ,
        e.totalProgress = function(i, r) {
            return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        e.progress = function(i, r) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + ia(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        e.iteration = function(i, r) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? yt(this._tTime, n) + 1 : 1
        }
        ,
        e.timeScale = function(i) {
            if (!arguments.length)
                return this._rts === -G ? 0 : this._rts;
            if (this._rts === i)
                return this;
            var r = this.parent && this._ts ? Si(this.parent._time, this) : this._tTime;
            return this._rts = +i || 0,
            this._ts = this._ps || i === -G ? 0 : this._rts,
            this.totalTime(Vt(-Math.abs(this._delay), this._tDur, r), !0),
            Mi(this),
            Xl(this)
        }
        ,
        e.paused = function(i) {
            return arguments.length ? (this._ps !== i && (this._ps = i,
            i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (_t(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== G && (this._tTime -= G)))),
            this) : this._ps
        }
        ,
        e.startTime = function(i) {
            if (arguments.length) {
                this._start = i;
                var r = this.parent || this._dp;
                return r && (r._sort || !this.parent) && De(r, this, i - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(i) {
            return this._start + (Se(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        e.rawTime = function(i) {
            var r = this.parent || this._dp;
            return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Si(r.rawTime(i), this) : this._tTime : this._tTime
        }
        ,
        e.revert = function(i) {
            i === void 0 && (i = Gl);
            var r = he;
            return he = i,
            (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
            this.totalTime(-.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            he = r,
            this
        }
        ,
        e.globalTime = function(i) {
            for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
                n = r._start + n / (r._ts || 1),
                r = r._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(i) : n
        }
        ,
        e.repeat = function(i) {
            return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
            ra(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }
        ,
        e.repeatDelay = function(i) {
            if (arguments.length) {
                var r = this._time;
                return this._rDelay = i,
                ra(this),
                r ? this.time(r) : this
            }
            return this._rDelay
        }
        ,
        e.yoyo = function(i) {
            return arguments.length ? (this._yoyo = i,
            this) : this._yoyo
        }
        ,
        e.seek = function(i, r) {
            return this.totalTime(Ce(this, i), Se(r))
        }
        ,
        e.restart = function(i, r) {
            return this.play().totalTime(i ? -this._delay : 0, Se(r))
        }
        ,
        e.play = function(i, r) {
            return i != null && this.seek(i, r),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(i, r) {
            return i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(i, r) {
            return i != null && this.seek(i, r),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(i) {
            return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -G : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -G,
            this
        }
        ,
        e.isActive = function() {
            var i = this.parent || this._dp, r = this._start, n;
            return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - G)
        }
        ,
        e.eventCallback = function(i, r, n) {
            var a = this.vars;
            return arguments.length > 1 ? (r ? (a[i] = r,
            n && (a[i + "Params"] = n),
            i === "onUpdate" && (this._onUpdate = r)) : delete a[i],
            this) : a[i]
        }
        ,
        e.then = function(i) {
            var r = this;
            return new Promise(function(n) {
                var a = j(i) ? i : va
                  , o = function() {
                    var c = r.then;
                    r.then = null,
                    j(a) && (a = a(r)) && (a.then || a === r) && (r.then = c),
                    n(a),
                    r.then = c
                };
                r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? o() : r._prom = o
            }
            )
        }
        ,
        e.kill = function() {
            Rt(this)
        }
        ,
        s
    }();
    Ae(St.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -G,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var fe = function(s) {
        oa(e, s);
        function e(i, r) {
            var n;
            return i === void 0 && (i = {}),
            n = s.call(this, i) || this,
            n.labels = {},
            n.smoothChildTiming = !!i.smoothChildTiming,
            n.autoRemoveChildren = !!i.autoRemoveChildren,
            n._sort = Se(i.sortChildren),
            X && De(i.parent || X, He(n), r),
            i.reversed && n.reverse(),
            i.paused && n.paused(!0),
            i.scrollTrigger && _a(He(n), i.scrollTrigger),
            n
        }
        var t = e.prototype;
        return t.to = function(r, n, a) {
            return Nt(0, arguments, this),
            this
        }
        ,
        t.from = function(r, n, a) {
            return Nt(1, arguments, this),
            this
        }
        ,
        t.fromTo = function(r, n, a, o) {
            return Nt(2, arguments, this),
            this
        }
        ,
        t.set = function(r, n, a) {
            return n.duration = 0,
            n.parent = this,
            Ft(n).repeatDelay || (n.repeat = 0),
            n.immediateRender = !!n.immediateRender,
            new ee(r,n,Ce(this, a),1),
            this
        }
        ,
        t.call = function(r, n, a) {
            return De(this, ee.delayedCall(0, r, n), a)
        }
        ,
        t.staggerTo = function(r, n, a, o, l, c, d) {
            return a.duration = n,
            a.stagger = a.stagger || o,
            a.onComplete = c,
            a.onCompleteParams = d,
            a.parent = this,
            new ee(r,a,Ce(this, l)),
            this
        }
        ,
        t.staggerFrom = function(r, n, a, o, l, c, d) {
            return a.runBackwards = 1,
            Ft(a).immediateRender = Se(a.immediateRender),
            this.staggerTo(r, n, a, o, l, c, d)
        }
        ,
        t.staggerFromTo = function(r, n, a, o, l, c, d, u) {
            return o.startAt = a,
            Ft(o).immediateRender = Se(o.immediateRender),
            this.staggerTo(r, n, o, l, c, d, u)
        }
        ,
        t.render = function(r, n, a) {
            var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, d = r <= 0 ? 0 : ne(r), u = this._zTime < 0 != r < 0 && (this._initted || !c), m, h, p, f, g, y, x, E, T, M, C, b;
            if (this !== X && d > l && r >= 0 && (d = l),
            d !== this._tTime || a || u) {
                if (o !== this._time && c && (d += this._time - o,
                r += this._time - o),
                m = d,
                T = this._start,
                E = this._ts,
                y = !E,
                u && (c || (o = this._zTime),
                (r || !n) && (this._zTime = r)),
                this._repeat) {
                    if (C = this._yoyo,
                    g = c + this._rDelay,
                    this._repeat < -1 && r < 0)
                        return this.totalTime(g * 100 + r, n, a);
                    if (m = ne(d % g),
                    d === l ? (f = this._repeat,
                    m = c) : (f = ~~(d / g),
                    f && f === d / g && (m = c,
                    f--),
                    m > c && (m = c)),
                    M = yt(this._tTime, g),
                    !o && this._tTime && M !== f && this._tTime - M * g - this._dur <= 0 && (M = f),
                    C && f & 1 && (m = c - m,
                    b = 1),
                    f !== M && !this._lock) {
                        var S = C && M & 1
                          , _ = S === (C && f & 1);
                        if (f < M && (S = !S),
                        o = S ? 0 : c,
                        this._lock = 1,
                        this.render(o || (b ? 0 : ne(f * g)), n, !c)._lock = 0,
                        this._tTime = d,
                        !n && this.parent && we(this, "onRepeat"),
                        this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
                        o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (c = this._dur,
                        l = this._tDur,
                        _ && (this._lock = 2,
                        o = S ? c : -1e-4,
                        this.render(o, !0),
                        this.vars.repeatRefresh && !b && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !y)
                            return this;
                        Da(this, b)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (x = Kl(this, ne(o), ne(m)),
                x && (d -= m - (m = x._start))),
                this._tTime = d,
                this._time = m,
                this._act = !E,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = r,
                o = 0),
                !o && m && !n && !f && (we(this, "onStart"),
                this._tTime !== d))
                    return this;
                if (m >= o && r >= 0)
                    for (h = this._first; h; ) {
                        if (p = h._next,
                        (h._act || m >= h._start) && h._ts && x !== h) {
                            if (h.parent !== this)
                                return this.render(r, n, a);
                            if (h.render(h._ts > 0 ? (m - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (m - h._start) * h._ts, n, a),
                            m !== this._time || !this._ts && !y) {
                                x = 0,
                                p && (d += this._zTime = -G);
                                break
                            }
                        }
                        h = p
                    }
                else {
                    h = this._last;
                    for (var L = r < 0 ? r : m; h; ) {
                        if (p = h._prev,
                        (h._act || L <= h._end) && h._ts && x !== h) {
                            if (h.parent !== this)
                                return this.render(r, n, a);
                            if (h.render(h._ts > 0 ? (L - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (L - h._start) * h._ts, n, a || he && (h._initted || h._startAt)),
                            m !== this._time || !this._ts && !y) {
                                x = 0,
                                p && (d += this._zTime = L ? -G : G);
                                break
                            }
                        }
                        h = p
                    }
                }
                if (x && !n && (this.pause(),
                x.render(m >= o ? 0 : -G)._zTime = m >= o ? 1 : -1,
                this._ts))
                    return this._start = T,
                    Mi(this),
                    this.render(r, n, a);
                this._onUpdate && !n && we(this, "onUpdate", !0),
                (d === l && this._tTime >= this.totalDuration() || !d && o) && (T === this._start || Math.abs(E) !== Math.abs(this._ts)) && (this._lock || ((r || !c) && (d === l && this._ts > 0 || !d && this._ts < 0) && Ke(this, 1),
                !n && !(r < 0 && !o) && (d || o || !l) && (we(this, d === l && r >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(d < l && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        t.add = function(r, n) {
            var a = this;
            if (Ve(n) || (n = Ce(this, n, r)),
            !(r instanceof St)) {
                if (me(r))
                    return r.forEach(function(o) {
                        return a.add(o, n)
                    }),
                    this;
                if (re(r))
                    return this.addLabel(r, n);
                if (j(r))
                    r = ee.delayedCall(0, r);
                else
                    return this
            }
            return this !== r ? De(this, r, n) : this
        }
        ,
        t.getChildren = function(r, n, a, o) {
            r === void 0 && (r = !0),
            n === void 0 && (n = !0),
            a === void 0 && (a = !0),
            o === void 0 && (o = -Pe);
            for (var l = [], c = this._first; c; )
                c._start >= o && (c instanceof ee ? n && l.push(c) : (a && l.push(c),
                r && l.push.apply(l, c.getChildren(!0, n, a)))),
                c = c._next;
            return l
        }
        ,
        t.getById = function(r) {
            for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
                if (n[a].vars.id === r)
                    return n[a]
        }
        ,
        t.remove = function(r) {
            return re(r) ? this.removeLabel(r) : j(r) ? this.killTweensOf(r) : (Ci(this, r),
            r === this._recent && (this._recent = this._last),
            it(this))
        }
        ,
        t.totalTime = function(r, n) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = ne(_e.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
            s.prototype.totalTime.call(this, r, n),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        t.addLabel = function(r, n) {
            return this.labels[r] = Ce(this, n),
            this
        }
        ,
        t.removeLabel = function(r) {
            return delete this.labels[r],
            this
        }
        ,
        t.addPause = function(r, n, a) {
            var o = ee.delayedCall(0, n || Ht, a);
            return o.data = "isPause",
            this._hasPause = 1,
            De(this, o, Ce(this, r))
        }
        ,
        t.removePause = function(r) {
            var n = this._first;
            for (r = Ce(this, r); n; )
                n._start === r && n.data === "isPause" && Ke(n),
                n = n._next
        }
        ,
        t.killTweensOf = function(r, n, a) {
            for (var o = this.getTweensOf(r, a), l = o.length; l--; )
                qe !== o[l] && o[l].kill(r, n);
            return this
        }
        ,
        t.getTweensOf = function(r, n) {
            for (var a = [], o = Ie(r), l = this._first, c = Ve(n), d; l; )
                l instanceof ee ? Vl(l._targets, o) && (c ? (!qe || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && a.push(l) : (d = l.getTweensOf(o, n)).length && a.push.apply(a, d),
                l = l._next;
            return a
        }
        ,
        t.tweenTo = function(r, n) {
            n = n || {};
            var a = this, o = Ce(a, r), l = n, c = l.startAt, d = l.onStart, u = l.onStartParams, m = l.immediateRender, h, p = ee.to(a, Ae({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: n.duration || Math.abs((o - (c && "time"in c ? c.time : a._time)) / a.timeScale()) || G,
                onStart: function() {
                    if (a.pause(),
                    !h) {
                        var g = n.duration || Math.abs((o - (c && "time"in c ? c.time : a._time)) / a.timeScale());
                        p._dur !== g && bt(p, g, 0, 1).render(p._time, !0, !0),
                        h = 1
                    }
                    d && d.apply(p, u || [])
                }
            }, n));
            return m ? p.render(0) : p
        }
        ,
        t.tweenFromTo = function(r, n, a) {
            return this.tweenTo(n, Ae({
                startAt: {
                    time: Ce(this, r)
                }
            }, a))
        }
        ,
        t.recent = function() {
            return this._recent
        }
        ,
        t.nextLabel = function(r) {
            return r === void 0 && (r = this._time),
            sa(this, Ce(this, r))
        }
        ,
        t.previousLabel = function(r) {
            return r === void 0 && (r = this._time),
            sa(this, Ce(this, r), 1)
        }
        ,
        t.currentLabel = function(r) {
            return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + G)
        }
        ,
        t.shiftChildren = function(r, n, a) {
            a === void 0 && (a = 0);
            for (var o = this._first, l = this.labels, c; o; )
                o._start >= a && (o._start += r,
                o._end += r),
                o = o._next;
            if (n)
                for (c in l)
                    l[c] >= a && (l[c] += r);
            return it(this)
        }
        ,
        t.invalidate = function(r) {
            var n = this._first;
            for (this._lock = 0; n; )
                n.invalidate(r),
                n = n._next;
            return s.prototype.invalidate.call(this, r)
        }
        ,
        t.clear = function(r) {
            r === void 0 && (r = !0);
            for (var n = this._first, a; n; )
                a = n._next,
                this.remove(n),
                n = a;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            r && (this.labels = {}),
            it(this)
        }
        ,
        t.totalDuration = function(r) {
            var n = 0, a = this, o = a._last, l = Pe, c, d, u;
            if (arguments.length)
                return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -r : r));
            if (a._dirty) {
                for (u = a.parent; o; )
                    c = o._prev,
                    o._dirty && o.totalDuration(),
                    d = o._start,
                    d > l && a._sort && o._ts && !a._lock ? (a._lock = 1,
                    De(a, o, d - o._delay, 1)._lock = 0) : l = d,
                    d < 0 && o._ts && (n -= d,
                    (!u && !a._dp || u && u.smoothChildTiming) && (a._start += d / a._ts,
                    a._time -= d,
                    a._tTime -= d),
                    a.shiftChildren(-d, !1, -1 / 0),
                    l = 0),
                    o._end > n && o._ts && (n = o._end),
                    o = c;
                bt(a, a === X && a._time > n ? a._time : n, 1, 1),
                a._dirty = 0
            }
            return a._tDur
        }
        ,
        e.updateRoot = function(r) {
            if (X._ts && (pa(X, Si(r, X)),
            ma = _e.frame),
            _e.frame >= ea) {
                ea += Ee.autoSleep || 120;
                var n = X._first;
                if ((!n || !n._ts) && Ee.autoSleep && _e._listeners.length < 2) {
                    for (; n && !n._ts; )
                        n = n._next;
                    n || _e.sleep()
                }
            }
        }
        ,
        e
    }(St);
    Ae(fe.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var fc = function(e, t, i, r, n, a, o) {
        var l = new ve(this._pt,e,t,0,1,$s,null,n), c = 0, d = 0, u, m, h, p, f, g, y, x;
        for (l.b = i,
        l.e = r,
        i += "",
        r += "",
        (y = ~r.indexOf("random(")) && (r = xt(r)),
        a && (x = [i, r],
        a(x, e, t),
        i = x[0],
        r = x[1]),
        m = i.match(ss) || []; u = ss.exec(r); )
            p = u[0],
            f = r.substring(c, u.index),
            h ? h = (h + 1) % 5 : f.substr(-5) === "rgba(" && (h = 1),
            p !== m[d++] && (g = parseFloat(m[d - 1]) || 0,
            l._pt = {
                _next: l._pt,
                p: f || d === 1 ? f : ",",
                s: g,
                c: p.charAt(1) === "=" ? at(g, p) - g : parseFloat(p) - g,
                m: h && h < 4 ? Math.round : 0
            },
            c = ss.lastIndex);
        return l.c = c < r.length ? r.substring(c, r.length) : "",
        l.fp = o,
        (Cs.test(r) || y) && (l.e = 0),
        this._pt = l,
        l
    }, ks = function(e, t, i, r, n, a, o, l, c, d) {
        j(r) && (r = r(n || 0, e, a));
        var u = e[t], m = i !== "get" ? i : j(u) ? c ? e[t.indexOf("set") || !j(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u, h = j(u) ? c ? vc : Fa : Rs, p;
        if (re(r) && (~r.indexOf("random(") && (r = xt(r)),
        r.charAt(1) === "=" && (p = at(m, r) + (ae(m) || 0),
        (p || p === 0) && (r = p))),
        !d || m !== r || _s)
            return !isNaN(m * r) && r !== "" ? (p = new ve(this._pt,e,t,+m || 0,r - (m || 0),typeof u == "boolean" ? bc : Na,0,h),
            c && (p.fp = c),
            o && p.modifier(o, this, e),
            this._pt = p) : (!u && !(t in e) && Ti(t, r),
            fc.call(this, e, t, m, r, h, l || Ee.stringFilter, c))
    }, hc = function(e, t, i, r, n) {
        if (j(e) && (e = Bt(e, n, t, i, r)),
        !ze(e) || e.style && e.nodeType || me(e) || ca(e))
            return re(e) ? Bt(e, n, t, i, r) : e;
        var a = {}, o;
        for (o in e)
            a[o] = Bt(e[o], n, t, i, r);
        return a
    }, Ds = function(e, t, i, r, n, a) {
        var o, l, c, d;
        if (be[e] && (o = new be[e]).init(n, o.rawVars ? t[e] : hc(t[e], r, n, a, i), i, r, a) !== !1 && (i._pt = l = new ve(i._pt,n,e,0,1,o.render,o,0,o.priority),
        i !== gt))
            for (c = i._ptLookup[i._targets.indexOf(n)],
            d = o._props.length; d--; )
                c[o._props[d]] = l;
        return o
    }, qe, _s, zs = function s(e, t, i) {
        var r = e.vars, n = r.ease, a = r.startAt, o = r.immediateRender, l = r.lazy, c = r.onUpdate, d = r.onUpdateParams, u = r.callbackScope, m = r.runBackwards, h = r.yoyoEase, p = r.keyframes, f = r.autoRevert, g = e._dur, y = e._startAt, x = e._targets, E = e.parent, T = E && E.data === "nested" ? E.vars.targets : x, M = e._overwrite === "auto" && !Es, C = e.timeline, b, S, _, L, P, w, O, D, N, $, V, Z, le;
        if (C && (!p || !n) && (n = "none"),
        e._ease = rt(n, vt.ease),
        e._yEase = h ? ka(rt(h === !0 ? n : h, vt.ease)) : 0,
        h && e._yoyo && !e._repeat && (h = e._yEase,
        e._yEase = e._ease,
        e._ease = h),
        e._from = !C && !!r.runBackwards,
        !C || p && !r.stagger) {
            if (D = x[0] ? je(x[0]).harness : 0,
            Z = D && r[D.prop],
            b = _i(r, Ps),
            y && (y._zTime < 0 && y.progress(1),
            t < 0 && m && o && !f ? y.render(-1, !0) : y.revert(m && g ? mi : Hl),
            y._lazy = 0),
            a) {
                if (Ke(e._startAt = ee.set(x, Ae({
                    data: "isStart",
                    overwrite: !1,
                    parent: E,
                    immediateRender: !0,
                    lazy: !y && Se(l),
                    startAt: null,
                    delay: 0,
                    onUpdate: c,
                    onUpdateParams: d,
                    callbackScope: u,
                    stagger: 0
                }, a))),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                t < 0 && (he || !o && !f) && e._startAt.revert(mi),
                o && g && t <= 0 && i <= 0) {
                    t && (e._zTime = t);
                    return
                }
            } else if (m && g && !y) {
                if (t && (o = !1),
                _ = Ae({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: o && !y && Se(l),
                    immediateRender: o,
                    stagger: 0,
                    parent: E
                }, b),
                Z && (_[D.prop] = Z),
                Ke(e._startAt = ee.set(x, _)),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                t < 0 && (he ? e._startAt.revert(mi) : e._startAt.render(-1, !0)),
                e._zTime = t,
                !o)
                    s(e._startAt, G, G);
                else if (!t)
                    return
            }
            for (e._pt = e._ptCache = 0,
            l = g && Se(l) || l && !g,
            S = 0; S < x.length; S++) {
                if (P = x[S],
                O = P._gsap || ws(x)[S]._gsap,
                e._ptLookup[S] = $ = {},
                ms[O.id] && Ue.length && bi(),
                V = T === x ? S : T.indexOf(P),
                D && (N = new D).init(P, Z || b, e, V, T) !== !1 && (e._pt = L = new ve(e._pt,P,N.name,0,1,N.render,N,0,N.priority),
                N._props.forEach(function(ce) {
                    $[ce] = L
                }),
                N.priority && (w = 1)),
                !D || Z)
                    for (_ in b)
                        be[_] && (N = Ds(_, b, e, V, P, T)) ? N.priority && (w = 1) : $[_] = L = ks.call(e, P, _, "get", b[_], V, T, 0, r.stringFilter);
                e._op && e._op[S] && e.kill(P, e._op[S]),
                M && e._pt && (qe = e,
                X.killTweensOf(P, $, e.globalTime(t)),
                le = !e.parent,
                qe = 0),
                e._pt && l && (ms[O.id] = 1)
            }
            w && Ns(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = c,
        e._initted = (!e._op || e._pt) && !le,
        p && t <= 0 && C.render(Pe, !0, !0)
    }, mc = function(e, t, i, r, n, a, o) {
        var l = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, d, u, m;
        if (!l)
            for (l = e._ptCache[t] = [],
            u = e._ptLookup,
            m = e._targets.length; m--; ) {
                if (c = u[m][t],
                c && c.d && c.d._pt)
                    for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
                        c = c._next;
                if (!c)
                    return _s = 1,
                    e.vars[t] = "+=0",
                    zs(e, o),
                    _s = 0,
                    1;
                l.push(c)
            }
        for (m = l.length; m--; )
            d = l[m],
            c = d._pt || d,
            c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + a * c.c,
            c.c = i - c.s,
            d.e && (d.e = K(i) + ae(d.e)),
            d.b && (d.b = c.s + ae(d.b))
    }, pc = function(e, t) {
        var i = e[0] ? je(e[0]).harness : 0, r = i && i.aliases, n, a, o, l;
        if (!r)
            return t;
        n = st({}, t);
        for (a in r)
            if (a in n)
                for (l = r[a].split(","),
                o = l.length; o--; )
                    n[l[o]] = n[a];
        return n
    }, gc = function(e, t, i, r) {
        var n = t.ease || r || "power1.inOut", a, o;
        if (me(t))
            o = i[e] || (i[e] = []),
            t.forEach(function(l, c) {
                return o.push({
                    t: c / (t.length - 1) * 100,
                    v: l,
                    e: n
                })
            });
        else
            for (a in t)
                o = i[a] || (i[a] = []),
                a === "ease" || o.push({
                    t: parseFloat(e),
                    v: t[a],
                    e: n
                })
    }, Bt = function(e, t, i, r, n) {
        return j(e) ? e.call(t, i, r, n) : re(e) && ~e.indexOf("random(") ? xt(e) : e
    }, Ra = Is + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", $a = {};
    ge(Ra + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
        return $a[s] = 1
    });
    var ee = function(s) {
        oa(e, s);
        function e(i, r, n, a) {
            var o;
            typeof r == "number" && (n.duration = r,
            r = n,
            n = null),
            o = s.call(this, a ? r : Ft(r)) || this;
            var l = o.vars, c = l.duration, d = l.delay, u = l.immediateRender, m = l.stagger, h = l.overwrite, p = l.keyframes, f = l.defaults, g = l.scrollTrigger, y = l.yoyoEase, x = r.parent || X, E = (me(i) || ca(i) ? Ve(i[0]) : "length"in r) ? [i] : Ie(i), T, M, C, b, S, _, L, P;
            if (o._targets = E.length ? ws(E) : yi("GSAP target " + i + " not found. https://greensock.com", !Ee.nullTargetWarn) || [],
            o._ptLookup = [],
            o._overwrite = h,
            p || m || hi(c) || hi(d)) {
                if (r = o.vars,
                T = o.timeline = new fe({
                    data: "nested",
                    defaults: f || {},
                    targets: x && x.data === "nested" ? x.vars.targets : E
                }),
                T.kill(),
                T.parent = T._dp = He(o),
                T._start = 0,
                m || hi(c) || hi(d)) {
                    if (b = E.length,
                    L = m && Ta(m),
                    ze(m))
                        for (S in m)
                            ~Ra.indexOf(S) && (P || (P = {}),
                            P[S] = m[S]);
                    for (M = 0; M < b; M++)
                        C = _i(r, $a),
                        C.stagger = 0,
                        y && (C.yoyoEase = y),
                        P && st(C, P),
                        _ = E[M],
                        C.duration = +Bt(c, He(o), M, _, E),
                        C.delay = (+Bt(d, He(o), M, _, E) || 0) - o._delay,
                        !m && b === 1 && C.delay && (o._delay = d = C.delay,
                        o._start += d,
                        C.delay = 0),
                        T.to(_, C, L ? L(M, _, E) : 0),
                        T._ease = F.none;
                    T.duration() ? c = d = 0 : o.timeline = 0
                } else if (p) {
                    Ft(Ae(T.vars.defaults, {
                        ease: "none"
                    })),
                    T._ease = rt(p.ease || r.ease || "none");
                    var w = 0, O, D, N;
                    if (me(p))
                        p.forEach(function($) {
                            return T.to(E, $, ">")
                        }),
                        T.duration();
                    else {
                        C = {};
                        for (S in p)
                            S === "ease" || S === "easeEach" || gc(S, p[S], C, p.easeEach);
                        for (S in C)
                            for (O = C[S].sort(function($, V) {
                                return $.t - V.t
                            }),
                            w = 0,
                            M = 0; M < O.length; M++)
                                D = O[M],
                                N = {
                                    ease: D.e,
                                    duration: (D.t - (M ? O[M - 1].t : 0)) / 100 * c
                                },
                                N[S] = D.v,
                                T.to(E, N, w),
                                w += N.duration;
                        T.duration() < c && T.to({}, {
                            duration: c - T.duration()
                        })
                    }
                }
                c || o.duration(c = T.duration())
            } else
                o.timeline = 0;
            return h === !0 && !Es && (qe = He(o),
            X.killTweensOf(E),
            qe = 0),
            De(x, He(o), n),
            r.reversed && o.reverse(),
            r.paused && o.paused(!0),
            (u || !c && !p && o._start === ne(x._time) && Se(u) && ql(He(o)) && x.data !== "nested") && (o._tTime = -G,
            o.render(Math.max(0, -d) || 0)),
            g && _a(He(o), g),
            o
        }
        var t = e.prototype;
        return t.render = function(r, n, a) {
            var o = this._time, l = this._tDur, c = this._dur, d = r < 0, u = r > l - G && !d ? l : r < G ? 0 : r, m, h, p, f, g, y, x, E, T;
            if (!c)
                jl(this, r, n, a);
            else if (u !== this._tTime || !r || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d) {
                if (m = u,
                E = this.timeline,
                this._repeat) {
                    if (f = c + this._rDelay,
                    this._repeat < -1 && d)
                        return this.totalTime(f * 100 + r, n, a);
                    if (m = ne(u % f),
                    u === l ? (p = this._repeat,
                    m = c) : (p = ~~(u / f),
                    p && p === u / f && (m = c,
                    p--),
                    m > c && (m = c)),
                    y = this._yoyo && p & 1,
                    y && (T = this._yEase,
                    m = c - m),
                    g = yt(this._tTime, f),
                    m === o && !a && this._initted)
                        return this._tTime = u,
                        this;
                    p !== g && (E && this._yEase && Da(E, y),
                    this.vars.repeatRefresh && !y && !this._lock && (this._lock = a = 1,
                    this.render(ne(f * p), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (Sa(this, d ? r : m, a, n, u))
                        return this._tTime = 0,
                        this;
                    if (o !== this._time)
                        return this;
                    if (c !== this._dur)
                        return this.render(r, n, a)
                }
                if (this._tTime = u,
                this._time = m,
                !this._act && this._ts && (this._act = 1,
                this._lazy = 0),
                this.ratio = x = (T || this._ease)(m / c),
                this._from && (this.ratio = x = 1 - x),
                m && !o && !n && !p && (we(this, "onStart"),
                this._tTime !== u))
                    return this;
                for (h = this._pt; h; )
                    h.r(x, h.d),
                    h = h._next;
                E && E.render(r < 0 ? r : !m && y ? -G : E._dur * E._ease(m / this._dur), n, a) || this._startAt && (this._zTime = r),
                this._onUpdate && !n && (d && ps(this, r, n, a),
                we(this, "onUpdate")),
                this._repeat && p !== g && this.vars.onRepeat && !n && this.parent && we(this, "onRepeat"),
                (u === this._tDur || !u) && this._tTime === u && (d && !this._onUpdate && ps(this, r, !0, !0),
                (r || !c) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && Ke(this, 1),
                !n && !(d && !o) && (u || o || y) && (we(this, u === l ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(u < l && this.timeScale() > 0) && this._prom()))
            }
            return this
        }
        ,
        t.targets = function() {
            return this._targets
        }
        ,
        t.invalidate = function(r) {
            return (!r || !this.vars.runBackwards) && (this._startAt = 0),
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(r),
            s.prototype.invalidate.call(this, r)
        }
        ,
        t.resetTo = function(r, n, a, o) {
            Gt || _e.wake(),
            this._ts || this.play();
            var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
            return this._initted || zs(this, l),
            c = this._ease(l / this._dur),
            mc(this, r, n, a, o, c, l) ? this.resetTo(r, n, a, o) : (Pi(this, 0),
            this.parent || ya(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
        }
        ,
        t.kill = function(r, n) {
            if (n === void 0 && (n = "all"),
            !r && (!n || n === "all"))
                return this._lazy = this._pt = 0,
                this.parent ? Rt(this) : this;
            if (this.timeline) {
                var a = this.timeline.totalDuration();
                return this.timeline.killTweensOf(r, n, qe && qe.vars.overwrite !== !0)._first || Rt(this),
                this.parent && a !== this.timeline.totalDuration() && bt(this, this._dur * this.timeline._tDur / a, 0, 1),
                this
            }
            var o = this._targets, l = r ? Ie(r) : o, c = this._ptLookup, d = this._pt, u, m, h, p, f, g, y;
            if ((!n || n === "all") && Yl(o, l))
                return n === "all" && (this._pt = 0),
                Rt(this);
            for (u = this._op = this._op || [],
            n !== "all" && (re(n) && (f = {},
            ge(n, function(x) {
                return f[x] = 1
            }),
            n = f),
            n = pc(o, n)),
            y = o.length; y--; )
                if (~l.indexOf(o[y])) {
                    m = c[y],
                    n === "all" ? (u[y] = n,
                    p = m,
                    h = {}) : (h = u[y] = u[y] || {},
                    p = n);
                    for (f in p)
                        g = m && m[f],
                        g && ((!("kill"in g.d) || g.d.kill(f) === !0) && Ci(this, g, "_pt"),
                        delete m[f]),
                        h !== "all" && (h[f] = 1)
                }
            return this._initted && !this._pt && d && Rt(this),
            this
        }
        ,
        e.to = function(r, n) {
            return new e(r,n,arguments[2])
        }
        ,
        e.from = function(r, n) {
            return Nt(1, arguments)
        }
        ,
        e.delayedCall = function(r, n, a, o) {
            return new e(n,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: r,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: a,
                onReverseCompleteParams: a,
                callbackScope: o
            })
        }
        ,
        e.fromTo = function(r, n, a) {
            return Nt(2, arguments)
        }
        ,
        e.set = function(r, n) {
            return n.duration = 0,
            n.repeatDelay || (n.repeat = 0),
            new e(r,n)
        }
        ,
        e.killTweensOf = function(r, n, a) {
            return X.killTweensOf(r, n, a)
        }
        ,
        e
    }(St);
    Ae(ee.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    });
    ge("staggerTo,staggerFrom,staggerFromTo", function(s) {
        ee[s] = function() {
            var e = new fe
              , t = vs.call(arguments, 0);
            return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0),
            e[s].apply(e, t)
        }
    });
    var Rs = function(e, t, i) {
        return e[t] = i
    }
      , Fa = function(e, t, i) {
        return e[t](i)
    }
      , vc = function(e, t, i, r) {
        return e[t](r.fp, i)
    }
      , yc = function(e, t, i) {
        return e.setAttribute(t, i)
    }
      , Ii = function(e, t) {
        return j(e[t]) ? Fa : xi(e[t]) && e.setAttribute ? yc : Rs
    }
      , Na = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    }
      , bc = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }
      , $s = function(e, t) {
        var i = t._pt
          , r = "";
        if (!e && t.b)
            r = t.b;
        else if (e === 1 && t.e)
            r = t.e;
        else {
            for (; i; )
                r = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + r,
                i = i._next;
            r += t.c
        }
        t.set(t.t, t.p, r, t)
    }
      , Fs = function(e, t) {
        for (var i = t._pt; i; )
            i.r(e, i.d),
            i = i._next
    }
      , _c = function(e, t, i, r) {
        for (var n = this._pt, a; n; )
            a = n._next,
            n.p === r && n.modifier(e, t, i),
            n = a
    }
      , Sc = function(e) {
        for (var t = this._pt, i, r; t; )
            r = t._next,
            t.p === e && !t.op || t.op === e ? Ci(this, t, "_pt") : t.dep || (i = 1),
            t = r;
        return !i
    }
      , Ec = function(e, t, i, r) {
        r.mSet(e, t, r.m.call(r.tween, i, r.mt), r)
    }
      , Ns = function(e) {
        for (var t = e._pt, i, r, n, a; t; ) {
            for (i = t._next,
            r = n; r && r.pr > t.pr; )
                r = r._next;
            (t._prev = r ? r._prev : a) ? t._prev._next = t : n = t,
            (t._next = r) ? r._prev = t : a = t,
            t = i
        }
        e._pt = n
    }
      , ve = function() {
        function s(t, i, r, n, a, o, l, c, d) {
            this.t = i,
            this.s = n,
            this.c = a,
            this.p = r,
            this.r = o || Na,
            this.d = l || this,
            this.set = c || Rs,
            this.pr = d || 0,
            this._next = t,
            t && (t._prev = this)
        }
        var e = s.prototype;
        return e.modifier = function(i, r, n) {
            this.mSet = this.mSet || this.set,
            this.set = Ec,
            this.m = i,
            this.mt = n,
            this.tween = r
        }
        ,
        s
    }();
    ge(Is + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
        return Ps[s] = 1
    });
    Te.TweenMax = Te.TweenLite = ee;
    Te.TimelineLite = Te.TimelineMax = fe;
    X = new fe({
        sortChildren: !1,
        defaults: vt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    });
    Ee.stringFilter = Os;
    var Et = []
      , gi = {}
      , xc = []
      , aa = 0
      , cs = function(e) {
        return (gi[e] || xc).map(function(t) {
            return t()
        })
    }
      , Ss = function() {
        var e = Date.now()
          , t = [];
        e - aa > 2 && (cs("matchMediaInit"),
        Et.forEach(function(i) {
            var r = i.queries, n = i.conditions, a, o, l, c;
            for (o in r)
                a = Me.matchMedia(r[o]).matches,
                a && (l = 1),
                a !== n[o] && (n[o] = a,
                c = 1);
            c && (i.revert(),
            l && t.push(i))
        }),
        cs("matchMediaRevert"),
        t.forEach(function(i) {
            return i.onMatch(i)
        }),
        aa = e,
        cs("matchMedia"))
    }
      , Ba = function() {
        function s(t, i) {
            this.selector = i && ys(i),
            this.data = [],
            this._r = [],
            this.isReverted = !1,
            t && this.add(t)
        }
        var e = s.prototype;
        return e.add = function(i, r, n) {
            j(i) && (n = r,
            r = i,
            i = j);
            var a = this
              , o = function() {
                var c = te, d = a.selector, u;
                return c && c !== a && c.data.push(a),
                n && (a.selector = ys(n)),
                te = a,
                u = r.apply(a, arguments),
                j(u) && a._r.push(u),
                te = c,
                a.selector = d,
                a.isReverted = !1,
                u
            };
            return a.last = o,
            i === j ? o(a) : i ? a[i] = o : o
        }
        ,
        e.ignore = function(i) {
            var r = te;
            te = null,
            i(this),
            te = r
        }
        ,
        e.getTweens = function() {
            var i = [];
            return this.data.forEach(function(r) {
                return r instanceof s ? i.push.apply(i, r.getTweens()) : r instanceof ee && !(r.parent && r.parent.data === "nested") && i.push(r)
            }),
            i
        }
        ,
        e.clear = function() {
            this._r.length = this.data.length = 0
        }
        ,
        e.kill = function(i, r) {
            var n = this;
            if (i) {
                var a = this.getTweens();
                this.data.forEach(function(l) {
                    l.data === "isFlip" && (l.revert(),
                    l.getChildren(!0, !0, !1).forEach(function(c) {
                        return a.splice(a.indexOf(c), 1)
                    }))
                }),
                a.map(function(l) {
                    return {
                        g: l.globalTime(0),
                        t: l
                    }
                }).sort(function(l, c) {
                    return c.g - l.g || -1
                }).forEach(function(l) {
                    return l.t.revert(i)
                }),
                this.data.forEach(function(l) {
                    return !(l instanceof St) && l.revert && l.revert(i)
                }),
                this._r.forEach(function(l) {
                    return l(i, n)
                }),
                this.isReverted = !0
            } else
                this.data.forEach(function(l) {
                    return l.kill && l.kill()
                });
            if (this.clear(),
            r) {
                var o = Et.indexOf(this);
                ~o && Et.splice(o, 1)
            }
        }
        ,
        e.revert = function(i) {
            this.kill(i || {})
        }
        ,
        s
    }()
      , Tc = function() {
        function s(t) {
            this.contexts = [],
            this.scope = t
        }
        var e = s.prototype;
        return e.add = function(i, r, n) {
            ze(i) || (i = {
                matches: i
            });
            var a = new Ba(0,n || this.scope), o = a.conditions = {}, l, c, d;
            this.contexts.push(a),
            r = a.add("onMatch", r),
            a.queries = i;
            for (c in i)
                c === "all" ? d = 1 : (l = Me.matchMedia(i[c]),
                l && (Et.indexOf(a) < 0 && Et.push(a),
                (o[c] = l.matches) && (d = 1),
                l.addListener ? l.addListener(Ss) : l.addEventListener("change", Ss)));
            return d && r(a),
            this
        }
        ,
        e.revert = function(i) {
            this.kill(i || {})
        }
        ,
        e.kill = function(i) {
            this.contexts.forEach(function(r) {
                return r.kill(i, !0)
            })
        }
        ,
        s
    }()
      , Ei = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            t.forEach(function(r) {
                return Aa(r)
            })
        },
        timeline: function(e) {
            return new fe(e)
        },
        getTweensOf: function(e, t) {
            return X.getTweensOf(e, t)
        },
        getProperty: function(e, t, i, r) {
            re(e) && (e = Ie(e)[0]);
            var n = je(e || {}).get
              , a = i ? va : ga;
            return i === "native" && (i = ""),
            e && (t ? a((be[t] && be[t].get || n)(e, t, i, r)) : function(o, l, c) {
                return a((be[o] && be[o].get || n)(e, o, l, c))
            }
            )
        },
        quickSetter: function(e, t, i) {
            if (e = Ie(e),
            e.length > 1) {
                var r = e.map(function(d) {
                    return pe.quickSetter(d, t, i)
                })
                  , n = r.length;
                return function(d) {
                    for (var u = n; u--; )
                        r[u](d)
                }
            }
            e = e[0] || {};
            var a = be[t]
              , o = je(e)
              , l = o.harness && (o.harness.aliases || {})[t] || t
              , c = a ? function(d) {
                var u = new a;
                gt._pt = 0,
                u.init(e, i ? d + i : d, gt, 0, [e]),
                u.render(1, u),
                gt._pt && Fs(1, gt)
            }
            : o.set(e, l);
            return a ? c : function(d) {
                return c(e, l, i ? d + i : d, o, 1)
            }
        },
        quickTo: function(e, t, i) {
            var r, n = pe.to(e, st((r = {},
            r[t] = "+=0.1",
            r.paused = !0,
            r), i || {})), a = function(l, c, d) {
                return n.resetTo(t, l, c, d)
            };
            return a.tween = n,
            a
        },
        isTweening: function(e) {
            return X.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = rt(e.ease, vt.ease)),
            ta(vt, e || {})
        },
        config: function(e) {
            return ta(Ee, e || {})
        },
        registerEffect: function(e) {
            var t = e.name
              , i = e.effect
              , r = e.plugins
              , n = e.defaults
              , a = e.extendTimeline;
            (r || "").split(",").forEach(function(o) {
                return o && !be[o] && !Te[o] && yi(t + " effect requires " + o + " plugin.")
            }),
            ns[t] = function(o, l, c) {
                return i(Ie(o), Ae(l || {}, n), c)
            }
            ,
            a && (fe.prototype[t] = function(o, l, c) {
                return this.add(ns[t](o, ze(l) ? l : (c = l) && {}, this), c)
            }
            )
        },
        registerEase: function(e, t) {
            F[e] = rt(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? rt(e, t) : F
        },
        getById: function(e) {
            return X.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var i = new fe(e), r, n;
            for (i.smoothChildTiming = Se(e.smoothChildTiming),
            X.remove(i),
            i._dp = 0,
            i._time = i._tTime = X._time,
            r = X._first; r; )
                n = r._next,
                (t || !(!r._dur && r instanceof ee && r.vars.onComplete === r._targets[0])) && De(i, r, r._start - r._delay),
                r = n;
            return De(X, i, 0),
            i
        },
        context: function(e, t) {
            return e ? new Ba(e,t) : te
        },
        matchMedia: function(e) {
            return new Tc(e)
        },
        matchMediaRefresh: function() {
            return Et.forEach(function(e) {
                var t = e.conditions, i, r;
                for (r in t)
                    t[r] && (t[r] = !1,
                    i = 1);
                i && e.revert()
            }) || Ss()
        },
        addEventListener: function(e, t) {
            var i = gi[e] || (gi[e] = []);
            ~i.indexOf(t) || i.push(t)
        },
        removeEventListener: function(e, t) {
            var i = gi[e]
              , r = i && i.indexOf(t);
            r >= 0 && i.splice(r, 1)
        },
        utils: {
            wrap: rc,
            wrapYoyo: sc,
            distribute: Ta,
            random: Ma,
            snap: Ca,
            normalize: ic,
            getUnit: ae,
            clamp: Ql,
            splitColor: Oa,
            toArray: Ie,
            selector: ys,
            mapRange: Ia,
            pipe: ec,
            unitize: tc,
            interpolate: nc,
            shuffle: xa
        },
        install: fa,
        effects: ns,
        ticker: _e,
        updateRoot: fe.updateRoot,
        plugins: be,
        globalTimeline: X,
        core: {
            PropTween: ve,
            globals: ha,
            Tween: ee,
            Timeline: fe,
            Animation: St,
            getCache: je,
            _removeLinkedListItem: Ci,
            reverting: function() {
                return he
            },
            context: function(e) {
                return e && te && (te.data.push(e),
                e._ctx = te),
                te
            },
            suppressOverwrites: function(e) {
                return Es = e
            }
        }
    };
    ge("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
        return Ei[s] = ee[s]
    });
    _e.add(fe.updateRoot);
    gt = Ei.to({}, {
        duration: 0
    });
    var Cc = function(e, t) {
        for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
            i = i._next;
        return i
    }
      , Mc = function(e, t) {
        var i = e._targets, r, n, a;
        for (r in t)
            for (n = i.length; n--; )
                a = e._ptLookup[n][r],
                a && (a = a.d) && (a._pt && (a = Cc(a, r)),
                a && a.modifier && a.modifier(t[r], e, i[n], r))
    }
      , ds = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(r, n, a) {
                a._onInit = function(o) {
                    var l, c;
                    if (re(n) && (l = {},
                    ge(n, function(d) {
                        return l[d] = 1
                    }),
                    n = l),
                    t) {
                        l = {};
                        for (c in n)
                            l[c] = t(n[c]);
                        n = l
                    }
                    Mc(o, n)
                }
            }
        }
    }
      , pe = Ei.registerPlugin({
        name: "attr",
        init: function(e, t, i, r, n) {
            var a, o, l;
            this.tween = i;
            for (a in t)
                l = e.getAttribute(a) || "",
                o = this.add(e, "setAttribute", (l || 0) + "", t[a], r, n, 0, 0, a),
                o.op = a,
                o.b = l,
                this._props.push(a)
        },
        render: function(e, t) {
            for (var i = t._pt; i; )
                he ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d),
                i = i._next
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var i = t.length; i--; )
                this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
        }
    }, ds("roundProps", bs), ds("modifiers"), ds("snap", Ca)) || Ei;
    ee.version = fe.version = pe.version = "3.11.5";
    ua = 1;
    xs() && _t();
    var Pc = F.Power0
      , Ic = F.Power1
      , wc = F.Power2
      , Ac = F.Power3
      , Oc = F.Power4
      , Lc = F.Linear
      , kc = F.Quad
      , Dc = F.Cubic
      , zc = F.Quart
      , Rc = F.Quint
      , $c = F.Strong
      , Fc = F.Elastic
      , Nc = F.Back
      , Bc = F.SteppedEase
      , Hc = F.Bounce
      , Gc = F.Sine
      , Vc = F.Expo
      , Wc = F.Circ;
    var Ha, Qe, Ct, Xs, ut, Yc, Ga, qs, Xc = function() {
        return typeof window != "undefined"
    }, Ye = {}, dt = 180 / Math.PI, Mt = Math.PI / 180, Tt = Math.atan2, Va = 1e8, Us = /([A-Z])/g, qc = /(left|right|width|margin|padding|x)/i, Uc = /[\s,\(]\S/, Re = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Gs = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, jc = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, Kc = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    }, Zc = function(e, t) {
        var i = t.s + t.c * e;
        t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
    }, Ka = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }, Za = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    }, Qc = function(e, t, i) {
        return e.style[t] = i
    }, Jc = function(e, t, i) {
        return e.style.setProperty(t, i)
    }, ed = function(e, t, i) {
        return e._gsap[t] = i
    }, td = function(e, t, i) {
        return e._gsap.scaleX = e._gsap.scaleY = i
    }, id = function(e, t, i, r, n) {
        var a = e._gsap;
        a.scaleX = a.scaleY = i,
        a.renderTransform(n, a)
    }, rd = function(e, t, i, r, n) {
        var a = e._gsap;
        a[t] = i,
        a.renderTransform(n, a)
    }, q = "transform", Le = q + "Origin", sd = function s(e, t) {
        var i = this
          , r = this.target
          , n = r.style;
        if (e in Ye) {
            if (this.tfm = this.tfm || {},
            e !== "transform")
                e = Re[e] || e,
                ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                    return i.tfm[a] = We(r, a)
                }) : this.tfm[e] = r._gsap.x ? r._gsap[e] : We(r, e);
            else
                return Re.transform.split(",").forEach(function(a) {
                    return s.call(i, a, t)
                });
            if (this.props.indexOf(q) >= 0)
                return;
            r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
            this.props.push(Le, t, "")),
            e = q
        }
        (n || t) && this.props.push(e, t, n[e])
    }, Qa = function(e) {
        e.translate && (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"))
    }, nd = function() {
        var e = this.props, t = this.target, i = t.style, r = t._gsap, n, a;
        for (n = 0; n < e.length; n += 3)
            e[n + 1] ? t[e[n]] = e[n + 2] : e[n + 2] ? i[e[n]] = e[n + 2] : i.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Us, "-$1").toLowerCase());
        if (this.tfm) {
            for (a in this.tfm)
                r[a] = this.tfm[a];
            r.svg && (r.renderTransform(),
            t.setAttribute("data-svg-origin", this.svgo || "")),
            n = qs(),
            (!n || !n.isStart) && !i[q] && (Qa(i),
            r.uncache = 1)
        }
    }, Ja = function(e, t) {
        var i = {
            target: e,
            props: [],
            revert: nd,
            save: sd
        };
        return e._gsap || pe.core.getCache(e),
        t && t.split(",").forEach(function(r) {
            return i.save(r)
        }),
        i
    }, eo, Vs = function(e, t) {
        var i = Qe.createElementNS ? Qe.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Qe.createElement(e);
        return i.style ? i : Qe.createElement(e)
    }, $e = function s(e, t, i) {
        var r = getComputedStyle(e);
        return r[t] || r.getPropertyValue(t.replace(Us, "-$1").toLowerCase()) || r.getPropertyValue(t) || !i && s(e, Pt(t) || t, 1) || ""
    }, Wa = "O,Moz,ms,Ms,Webkit".split(","), Pt = function(e, t, i) {
        var r = t || ut
          , n = r.style
          , a = 5;
        if (e in n && !i)
            return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(Wa[a] + e in n); )
            ;
        return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Wa[a] : "") + e
    }, Ws = function() {
        Xc() && window.document && (Ha = window,
        Qe = Ha.document,
        Ct = Qe.documentElement,
        ut = Vs("div") || {
            style: {}
        },
        Yc = Vs("div"),
        q = Pt(q),
        Le = q + "Origin",
        ut.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        eo = !!Pt("perspective"),
        qs = pe.core.reverting,
        Xs = 1)
    }, Bs = function s(e) {
        var t = Vs("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, a;
        if (Ct.appendChild(t),
        t.appendChild(this),
        this.style.display = "block",
        e)
            try {
                a = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = s
            } catch (o) {}
        else
            this._gsapBBox && (a = this._gsapBBox());
        return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        Ct.removeChild(t),
        this.style.cssText = n,
        a
    }, Ya = function(e, t) {
        for (var i = t.length; i--; )
            if (e.hasAttribute(t[i]))
                return e.getAttribute(t[i])
    }, to = function(e) {
        var t;
        try {
            t = e.getBBox()
        } catch (i) {
            t = Bs.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === Bs || (t = Bs.call(e, !0)),
        t && !t.width && !t.x && !t.y ? {
            x: +Ya(e, ["x", "cx", "x1"]) || 0,
            y: +Ya(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    }, io = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && to(e))
    }, Yt = function(e, t) {
        if (t) {
            var i = e.style;
            t in Ye && t !== Le && (t = q),
            i.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            i.removeProperty(t.replace(Us, "-$1").toLowerCase())) : i.removeAttribute(t)
        }
    }, Je = function(e, t, i, r, n, a) {
        var o = new ve(e._pt,t,i,0,1,a ? Za : Ka);
        return e._pt = o,
        o.b = r,
        o.e = n,
        e._props.push(i),
        o
    }, Xa = {
        deg: 1,
        rad: 1,
        turn: 1
    }, ad = {
        grid: 1,
        flex: 1
    }, et = function s(e, t, i, r) {
        var n = parseFloat(i) || 0, a = (i + "").trim().substr((n + "").length) || "px", o = ut.style, l = qc.test(t), c = e.tagName.toLowerCase() === "svg", d = (c ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, m = r === "px", h = r === "%", p, f, g, y;
        return r === a || !n || Xa[r] || Xa[a] ? n : (a !== "px" && !m && (n = s(e, t, i, "px")),
        y = e.getCTM && io(e),
        (h || a === "%") && (Ye[t] || ~t.indexOf("adius")) ? (p = y ? e.getBBox()[l ? "width" : "height"] : e[d],
        K(h ? n / p * u : n / 100 * p)) : (o[l ? "width" : "height"] = u + (m ? a : r),
        f = ~t.indexOf("adius") || r === "em" && e.appendChild && !c ? e : e.parentNode,
        y && (f = (e.ownerSVGElement || {}).parentNode),
        (!f || f === Qe || !f.appendChild) && (f = Qe.body),
        g = f._gsap,
        g && h && g.width && l && g.time === _e.time && !g.uncache ? K(n / g.width * u) : ((h || a === "%") && !ad[$e(f, "display")] && (o.position = $e(e, "position")),
        f === e && (o.position = "static"),
        f.appendChild(ut),
        p = ut[d],
        f.removeChild(ut),
        o.position = "absolute",
        l && h && (g = je(f),
        g.time = _e.time,
        g.width = f[d]),
        K(m ? p * n / u : p && n ? u / p * n : 0))))
    }, We = function(e, t, i, r) {
        var n;
        return Xs || Ws(),
        t in Re && t !== "transform" && (t = Re[t],
        ~t.indexOf(",") && (t = t.split(",")[0])),
        Ye[t] && t !== "transform" ? (n = qt(e, r),
        n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Ai($e(e, Le)) + " " + n.zOrigin + "px") : (n = e.style[t],
        (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = wi[t] && wi[t](e, t, i) || $e(e, t) || As(e, t) || (t === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? et(e, t, n, i) + i : n
    }, od = function(e, t, i, r) {
        if (!i || i === "none") {
            var n = Pt(t, e, 1)
              , a = n && $e(e, n, 1);
            a && a !== i ? (t = n,
            i = a) : t === "borderColor" && (i = $e(e, "borderTopColor"))
        }
        var o = new ve(this._pt,e.style,t,0,1,$s), l = 0, c = 0, d, u, m, h, p, f, g, y, x, E, T, M;
        if (o.b = i,
        o.e = r,
        i += "",
        r += "",
        r === "auto" && (e.style[t] = r,
        r = $e(e, t) || r,
        e.style[t] = i),
        d = [i, r],
        Os(d),
        i = d[0],
        r = d[1],
        m = i.match(nt) || [],
        M = r.match(nt) || [],
        M.length) {
            for (; u = nt.exec(r); )
                g = u[0],
                x = r.substring(l, u.index),
                p ? p = (p + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (p = 1),
                g !== (f = m[c++] || "") && (h = parseFloat(f) || 0,
                T = f.substr((h + "").length),
                g.charAt(1) === "=" && (g = at(h, g) + T),
                y = parseFloat(g),
                E = g.substr((y + "").length),
                l = nt.lastIndex - E.length,
                E || (E = E || Ee.units[t] || T,
                l === r.length && (r += E,
                o.e += E)),
                T !== E && (h = et(e, t, f, E) || 0),
                o._pt = {
                    _next: o._pt,
                    p: x || c === 1 ? x : ",",
                    s: h,
                    c: y - h,
                    m: p && p < 4 || t === "zIndex" ? Math.round : 0
                });
            o.c = l < r.length ? r.substring(l, r.length) : ""
        } else
            o.r = t === "display" && r === "none" ? Za : Ka;
        return Cs.test(r) && (o.e = 0),
        this._pt = o,
        o
    }, qa = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, ld = function(e) {
        var t = e.split(" ")
          , i = t[0]
          , r = t[1] || "50%";
        return (i === "top" || i === "bottom" || r === "left" || r === "right") && (e = i,
        i = r,
        r = e),
        t[0] = qa[i] || i,
        t[1] = qa[r] || r,
        t.join(" ")
    }, cd = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var i = t.t, r = i.style, n = t.u, a = i._gsap, o, l, c;
            if (n === "all" || n === !0)
                r.cssText = "",
                l = 1;
            else
                for (n = n.split(","),
                c = n.length; --c > -1; )
                    o = n[c],
                    Ye[o] && (l = 1,
                    o = o === "transformOrigin" ? Le : q),
                    Yt(i, o);
            l && (Yt(i, q),
            a && (a.svg && i.removeAttribute("transform"),
            qt(i, 1),
            a.uncache = 1,
            Qa(r)))
        }
    }, wi = {
        clearProps: function(e, t, i, r, n) {
            if (n.data !== "isFromStart") {
                var a = e._pt = new ve(e._pt,t,i,0,0,cd);
                return a.u = r,
                a.pr = -10,
                a.tween = n,
                e._props.push(i),
                1
            }
        }
    }, Xt = [1, 0, 0, 1, 0, 0], ro = {}, so = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    }, Ua = function(e) {
        var t = $e(e, q);
        return so(t) ? Xt : t.substr(7).match(Ts).map(K)
    }, js = function(e, t) {
        var i = e._gsap || je(e), r = e.style, n = Ua(e), a, o, l, c;
        return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
        n = [l.a, l.b, l.c, l.d, l.e, l.f],
        n.join(",") === "1,0,0,1,0,0" ? Xt : n) : (n === Xt && !e.offsetParent && e !== Ct && !i.svg && (l = r.display,
        r.display = "block",
        a = e.parentNode,
        (!a || !e.offsetParent) && (c = 1,
        o = e.nextElementSibling,
        Ct.appendChild(e)),
        n = Ua(e),
        l ? r.display = l : Yt(e, "display"),
        c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Ct.removeChild(e))),
        t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    }, Ys = function(e, t, i, r, n, a) {
        var o = e._gsap, l = n || js(e, !0), c = o.xOrigin || 0, d = o.yOrigin || 0, u = o.xOffset || 0, m = o.yOffset || 0, h = l[0], p = l[1], f = l[2], g = l[3], y = l[4], x = l[5], E = t.split(" "), T = parseFloat(E[0]) || 0, M = parseFloat(E[1]) || 0, C, b, S, _;
        i ? l !== Xt && (b = h * g - p * f) && (S = T * (g / b) + M * (-f / b) + (f * x - g * y) / b,
        _ = T * (-p / b) + M * (h / b) - (h * x - p * y) / b,
        T = S,
        M = _) : (C = to(e),
        T = C.x + (~E[0].indexOf("%") ? T / 100 * C.width : T),
        M = C.y + (~(E[1] || E[0]).indexOf("%") ? M / 100 * C.height : M)),
        r || r !== !1 && o.smooth ? (y = T - c,
        x = M - d,
        o.xOffset = u + (y * h + x * f) - y,
        o.yOffset = m + (y * p + x * g) - x) : o.xOffset = o.yOffset = 0,
        o.xOrigin = T,
        o.yOrigin = M,
        o.smooth = !!r,
        o.origin = t,
        o.originIsAbsolute = !!i,
        e.style[Le] = "0px 0px",
        a && (Je(a, o, "xOrigin", c, T),
        Je(a, o, "yOrigin", d, M),
        Je(a, o, "xOffset", u, o.xOffset),
        Je(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", T + " " + M)
    }, qt = function(e, t) {
        var i = e._gsap || new Ls(e);
        if ("x"in i && !t && !i.uncache)
            return i;
        var r = e.style, n = i.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(e), c = $e(e, Le) || "0", d, u, m, h, p, f, g, y, x, E, T, M, C, b, S, _, L, P, w, O, D, N, $, V, Z, le, ce, I, A, k, z, R;
        return d = u = m = f = g = y = x = E = T = 0,
        h = p = 1,
        i.svg = !!(e.getCTM && io(e)),
        l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[q] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[q] !== "none" ? l[q] : "")),
        r.scale = r.rotate = r.translate = "none"),
        b = js(e, i.svg),
        i.svg && (i.uncache ? (Z = e.getBBox(),
        c = i.xOrigin - Z.x + "px " + (i.yOrigin - Z.y) + "px",
        V = "") : V = !t && e.getAttribute("data-svg-origin"),
        Ys(e, V || c, !!V || i.originIsAbsolute, i.smooth !== !1, b)),
        M = i.xOrigin || 0,
        C = i.yOrigin || 0,
        b !== Xt && (P = b[0],
        w = b[1],
        O = b[2],
        D = b[3],
        d = N = b[4],
        u = $ = b[5],
        b.length === 6 ? (h = Math.sqrt(P * P + w * w),
        p = Math.sqrt(D * D + O * O),
        f = P || w ? Tt(w, P) * dt : 0,
        x = O || D ? Tt(O, D) * dt + f : 0,
        x && (p *= Math.abs(Math.cos(x * Mt))),
        i.svg && (d -= M - (M * P + C * O),
        u -= C - (M * w + C * D))) : (R = b[6],
        k = b[7],
        ce = b[8],
        I = b[9],
        A = b[10],
        z = b[11],
        d = b[12],
        u = b[13],
        m = b[14],
        S = Tt(R, A),
        g = S * dt,
        S && (_ = Math.cos(-S),
        L = Math.sin(-S),
        V = N * _ + ce * L,
        Z = $ * _ + I * L,
        le = R * _ + A * L,
        ce = N * -L + ce * _,
        I = $ * -L + I * _,
        A = R * -L + A * _,
        z = k * -L + z * _,
        N = V,
        $ = Z,
        R = le),
        S = Tt(-O, A),
        y = S * dt,
        S && (_ = Math.cos(-S),
        L = Math.sin(-S),
        V = P * _ - ce * L,
        Z = w * _ - I * L,
        le = O * _ - A * L,
        z = D * L + z * _,
        P = V,
        w = Z,
        O = le),
        S = Tt(w, P),
        f = S * dt,
        S && (_ = Math.cos(S),
        L = Math.sin(S),
        V = P * _ + w * L,
        Z = N * _ + $ * L,
        w = w * _ - P * L,
        $ = $ * _ - N * L,
        P = V,
        N = Z),
        g && Math.abs(g) + Math.abs(f) > 359.9 && (g = f = 0,
        y = 180 - y),
        h = K(Math.sqrt(P * P + w * w + O * O)),
        p = K(Math.sqrt($ * $ + R * R)),
        S = Tt(N, $),
        x = Math.abs(S) > 2e-4 ? S * dt : 0,
        T = z ? 1 / (z < 0 ? -z : z) : 0),
        i.svg && (V = e.getAttribute("transform"),
        i.forceCSS = e.setAttribute("transform", "") || !so($e(e, q)),
        V && e.setAttribute("transform", V))),
        Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (h *= -1,
        x += f <= 0 ? 180 : -180,
        f += f <= 0 ? 180 : -180) : (p *= -1,
        x += x <= 0 ? 180 : -180)),
        t = t || i.uncache,
        i.x = d - ((i.xPercent = d && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + a,
        i.y = u - ((i.yPercent = u && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + a,
        i.z = m + a,
        i.scaleX = K(h),
        i.scaleY = K(p),
        i.rotation = K(f) + o,
        i.rotationX = K(g) + o,
        i.rotationY = K(y) + o,
        i.skewX = x + o,
        i.skewY = E + o,
        i.transformPerspective = T + a,
        (i.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (r[Le] = Ai(c)),
        i.xOffset = i.yOffset = 0,
        i.force3D = Ee.force3D,
        i.renderTransform = i.svg ? ud : eo ? no : dd,
        i.uncache = 0,
        i
    }, Ai = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, Hs = function(e, t, i) {
        var r = ae(t);
        return K(parseFloat(t) + parseFloat(et(e, "x", i + "px", r))) + r
    }, dd = function(e, t) {
        t.z = "0px",
        t.rotationY = t.rotationX = "0deg",
        t.force3D = 0,
        no(e, t)
    }, lt = "0deg", Wt = "0px", ct = ") ", no = function(e, t) {
        var i = t || this
          , r = i.xPercent
          , n = i.yPercent
          , a = i.x
          , o = i.y
          , l = i.z
          , c = i.rotation
          , d = i.rotationY
          , u = i.rotationX
          , m = i.skewX
          , h = i.skewY
          , p = i.scaleX
          , f = i.scaleY
          , g = i.transformPerspective
          , y = i.force3D
          , x = i.target
          , E = i.zOrigin
          , T = ""
          , M = y === "auto" && e && e !== 1 || y === !0;
        if (E && (u !== lt || d !== lt)) {
            var C = parseFloat(d) * Mt, b = Math.sin(C), S = Math.cos(C), _;
            C = parseFloat(u) * Mt,
            _ = Math.cos(C),
            a = Hs(x, a, b * _ * -E),
            o = Hs(x, o, -Math.sin(C) * -E),
            l = Hs(x, l, S * _ * -E + E)
        }
        g !== Wt && (T += "perspective(" + g + ct),
        (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
        (M || a !== Wt || o !== Wt || l !== Wt) && (T += l !== Wt || M ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + ct),
        c !== lt && (T += "rotate(" + c + ct),
        d !== lt && (T += "rotateY(" + d + ct),
        u !== lt && (T += "rotateX(" + u + ct),
        (m !== lt || h !== lt) && (T += "skew(" + m + ", " + h + ct),
        (p !== 1 || f !== 1) && (T += "scale(" + p + ", " + f + ct),
        x.style[q] = T || "translate(0, 0)"
    }, ud = function(e, t) {
        var i = t || this, r = i.xPercent, n = i.yPercent, a = i.x, o = i.y, l = i.rotation, c = i.skewX, d = i.skewY, u = i.scaleX, m = i.scaleY, h = i.target, p = i.xOrigin, f = i.yOrigin, g = i.xOffset, y = i.yOffset, x = i.forceCSS, E = parseFloat(a), T = parseFloat(o), M, C, b, S, _;
        l = parseFloat(l),
        c = parseFloat(c),
        d = parseFloat(d),
        d && (d = parseFloat(d),
        c += d,
        l += d),
        l || c ? (l *= Mt,
        c *= Mt,
        M = Math.cos(l) * u,
        C = Math.sin(l) * u,
        b = Math.sin(l - c) * -m,
        S = Math.cos(l - c) * m,
        c && (d *= Mt,
        _ = Math.tan(c - d),
        _ = Math.sqrt(1 + _ * _),
        b *= _,
        S *= _,
        d && (_ = Math.tan(d),
        _ = Math.sqrt(1 + _ * _),
        M *= _,
        C *= _)),
        M = K(M),
        C = K(C),
        b = K(b),
        S = K(S)) : (M = u,
        S = m,
        C = b = 0),
        (E && !~(a + "").indexOf("px") || T && !~(o + "").indexOf("px")) && (E = et(h, "x", a, "px"),
        T = et(h, "y", o, "px")),
        (p || f || g || y) && (E = K(E + p - (p * M + f * b) + g),
        T = K(T + f - (p * C + f * S) + y)),
        (r || n) && (_ = h.getBBox(),
        E = K(E + r / 100 * _.width),
        T = K(T + n / 100 * _.height)),
        _ = "matrix(" + M + "," + C + "," + b + "," + S + "," + E + "," + T + ")",
        h.setAttribute("transform", _),
        x && (h.style[q] = _)
    }, fd = function(e, t, i, r, n) {
        var a = 360, o = re(n), l = parseFloat(n) * (o && ~n.indexOf("rad") ? dt : 1), c = l - r, d = r + c + "deg", u, m;
        return o && (u = n.split("_")[1],
        u === "short" && (c %= a,
        c !== c % (a / 2) && (c += c < 0 ? a : -a)),
        u === "cw" && c < 0 ? c = (c + a * Va) % a - ~~(c / a) * a : u === "ccw" && c > 0 && (c = (c - a * Va) % a - ~~(c / a) * a)),
        e._pt = m = new ve(e._pt,t,i,r,c,jc),
        m.e = d,
        m.u = "deg",
        e._props.push(i),
        m
    }, ja = function(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }, hd = function(e, t, i) {
        var r = ja({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", a = i.style, o, l, c, d, u, m, h, p;
        r.svg ? (c = i.getAttribute("transform"),
        i.setAttribute("transform", ""),
        a[q] = t,
        o = qt(i, 1),
        Yt(i, q),
        i.setAttribute("transform", c)) : (c = getComputedStyle(i)[q],
        a[q] = t,
        o = qt(i, 1),
        a[q] = c);
        for (l in Ye)
            c = r[l],
            d = o[l],
            c !== d && n.indexOf(l) < 0 && (h = ae(c),
            p = ae(d),
            u = h !== p ? et(i, l, c, p) : parseFloat(c),
            m = parseFloat(d),
            e._pt = new ve(e._pt,o,l,u,m - u,Gs),
            e._pt.u = p || 0,
            e._props.push(l));
        ja(o, r)
    };
    ge("padding,margin,Width,Radius", function(s, e) {
        var t = "Top"
          , i = "Right"
          , r = "Bottom"
          , n = "Left"
          , a = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function(o) {
            return e < 2 ? s + o : "border" + o + s
        });
        wi[e > 1 ? "border" + s : s] = function(o, l, c, d, u) {
            var m, h;
            if (arguments.length < 4)
                return m = a.map(function(p) {
                    return We(o, p, c)
                }),
                h = m.join(" "),
                h.split(m[0]).length === 5 ? m[0] : h;
            m = (d + "").split(" "),
            h = {},
            a.forEach(function(p, f) {
                return h[p] = m[f] = m[f] || m[(f - 1) / 2 | 0]
            }),
            o.init(l, h, u)
        }
    });
    var Ks = {
        name: "css",
        register: Ws,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, t, i, r, n) {
            var a = this._props, o = e.style, l = i.vars.startAt, c, d, u, m, h, p, f, g, y, x, E, T, M, C, b, S;
            Xs || Ws(),
            this.styles = this.styles || Ja(e),
            S = this.styles.props,
            this.tween = i;
            for (f in t)
                if (f !== "autoRound" && (d = t[f],
                !(be[f] && Ds(f, t, i, r, e, n)))) {
                    if (h = typeof d,
                    p = wi[f],
                    h === "function" && (d = d.call(i, r, e, n),
                    h = typeof d),
                    h === "string" && ~d.indexOf("random(") && (d = xt(d)),
                    p)
                        p(this, e, f, d, i) && (b = 1);
                    else if (f.substr(0, 2) === "--")
                        c = (getComputedStyle(e).getPropertyValue(f) + "").trim(),
                        d += "",
                        Ge.lastIndex = 0,
                        Ge.test(c) || (g = ae(c),
                        y = ae(d)),
                        y ? g !== y && (c = et(e, f, c, y) + y) : g && (d += g),
                        this.add(o, "setProperty", c, d, r, n, 0, 0, f),
                        a.push(f),
                        S.push(f, 0, o[f]);
                    else if (h !== "undefined") {
                        if (l && f in l ? (c = typeof l[f] == "function" ? l[f].call(i, r, e, n) : l[f],
                        re(c) && ~c.indexOf("random(") && (c = xt(c)),
                        ae(c + "") || (c += Ee.units[f] || ae(We(e, f)) || ""),
                        (c + "").charAt(1) === "=" && (c = We(e, f))) : c = We(e, f),
                        m = parseFloat(c),
                        x = h === "string" && d.charAt(1) === "=" && d.substr(0, 2),
                        x && (d = d.substr(2)),
                        u = parseFloat(d),
                        f in Re && (f === "autoAlpha" && (m === 1 && We(e, "visibility") === "hidden" && u && (m = 0),
                        S.push("visibility", 0, o.visibility),
                        Je(this, o, "visibility", m ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                        f !== "scale" && f !== "transform" && (f = Re[f],
                        ~f.indexOf(",") && (f = f.split(",")[0]))),
                        E = f in Ye,
                        E) {
                            if (this.styles.save(f),
                            T || (M = e._gsap,
                            M.renderTransform && !t.parseTransform || qt(e, t.parseTransform),
                            C = t.smoothOrigin !== !1 && M.smooth,
                            T = this._pt = new ve(this._pt,o,q,0,1,M.renderTransform,M,0,-1),
                            T.dep = 1),
                            f === "scale")
                                this._pt = new ve(this._pt,M,"scaleY",M.scaleY,(x ? at(M.scaleY, x + u) : u) - M.scaleY || 0,Gs),
                                this._pt.u = 0,
                                a.push("scaleY", f),
                                f += "X";
                            else if (f === "transformOrigin") {
                                S.push(Le, 0, o[Le]),
                                d = ld(d),
                                M.svg ? Ys(e, d, 0, C, 0, this) : (y = parseFloat(d.split(" ")[2]) || 0,
                                y !== M.zOrigin && Je(this, M, "zOrigin", M.zOrigin, y),
                                Je(this, o, f, Ai(c), Ai(d)));
                                continue
                            } else if (f === "svgOrigin") {
                                Ys(e, d, 1, C, 0, this);
                                continue
                            } else if (f in ro) {
                                fd(this, M, f, m, x ? at(m, x + d) : d);
                                continue
                            } else if (f === "smoothOrigin") {
                                Je(this, M, "smooth", M.smooth, d);
                                continue
                            } else if (f === "force3D") {
                                M[f] = d;
                                continue
                            } else if (f === "transform") {
                                hd(this, d, e);
                                continue
                            }
                        } else
                            f in o || (f = Pt(f) || f);
                        if (E || (u || u === 0) && (m || m === 0) && !Uc.test(d) && f in o)
                            g = (c + "").substr((m + "").length),
                            u || (u = 0),
                            y = ae(d) || (f in Ee.units ? Ee.units[f] : g),
                            g !== y && (m = et(e, f, c, y)),
                            this._pt = new ve(this._pt,E ? M : o,f,m,(x ? at(m, x + u) : u) - m,!E && (y === "px" || f === "zIndex") && t.autoRound !== !1 ? Zc : Gs),
                            this._pt.u = y || 0,
                            g !== y && y !== "%" && (this._pt.b = c,
                            this._pt.r = Kc);
                        else if (f in o)
                            od.call(this, e, f, c, x ? x + d : d);
                        else if (f in e)
                            this.add(e, f, c || e[f], x ? x + d : d, r, n);
                        else if (f !== "parseTransform") {
                            Ti(f, d);
                            continue
                        }
                        E || (f in o ? S.push(f, 0, o[f]) : S.push(f, 1, c || e[f])),
                        a.push(f)
                    }
                }
            b && Ns(this)
        },
        render: function(e, t) {
            if (t.tween._time || !qs())
                for (var i = t._pt; i; )
                    i.r(e, i.d),
                    i = i._next;
            else
                t.styles.revert()
        },
        get: We,
        aliases: Re,
        getSetter: function(e, t, i) {
            var r = Re[t];
            return r && r.indexOf(",") < 0 && (t = r),
            t in Ye && t !== Le && (e._gsap.x || We(e, "x")) ? i && Ga === i ? t === "scale" ? td : ed : (Ga = i || {}) && (t === "scale" ? id : rd) : e.style && !xi(e.style[t]) ? Qc : ~t.indexOf("-") ? Jc : Ii(e, t)
        },
        core: {
            _removeProperty: Yt,
            _getMatrix: js
        }
    };
    pe.utils.checkPrefix = Pt;
    pe.core.getStyleSaver = Ja;
    (function(s, e, t, i) {
        var r = ge(s + "," + e + "," + t, function(n) {
            Ye[n] = 1
        });
        ge(e, function(n) {
            Ee.units[n] = "deg",
            ro[n] = 1
        }),
        Re[r[13]] = s + "," + e,
        ge(i, function(n) {
            var a = n.split(":");
            Re[a[1]] = r[a[0]]
        })
    }
    )("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    ge("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
        Ee.units[s] = "px"
    });
    pe.registerPlugin(Ks);
    var Oi = pe.registerPlugin(Ks) || pe
      , kv = Oi.core.Tween;
    var Zs = 999
      , Li = class extends B {
        constructor(s) {
            super(s),
            this.onResizeBind = this.onResize.bind(this),
            this.onBreakPointChangeBind = this.onBreakPointChange.bind(this),
            this.onUpdateBind = this.onUpdate.bind(this),
            this.onScrollBind = this.onScroll.bind(this),
            this.$item = this.$("item"),
            this.$container = this.el,
            this.$grid = this.$("grid")[0],
            this.$sticky = this.$("sticky")[0],
            this.containerWidth = 0,
            this.containerHeight = 0,
            this.breakpoint = window.matchMedia(`(min-width: ${Zs}px)`),
            this.lerp = 1,
            this.progress = 0,
            this.smoothProgress = 0,
            this.isRafPlaying = !1,
            this.isInview = !1,
            this.enableSticky = !0,
            this.isFirstInit = !0
        }
        init() {
            this.bindEvents(),
            this.onBreakPointChange()
        }
        destroy() {
            this.unbindEvents()
        }
        bindEvents() {
            window.addEventListener("resize", this.onResizeBind),
            document.addEventListener("scroll", this.onScrollBind),
            "addEventListener"in this.breakpoint ? this.breakpoint.addEventListener("change", this.onBreakPointChangeBind) : "addListener"in this.breakpoint && this.breakpoint.addListener(this.onBreakPointChangeBind)
        }
        unbindEvents() {
            window.removeEventListener("resize", this.onResizeBind),
            document.removeEventListener("scroll", this.onScrollBind),
            "removeEventListener"in this.breakpoint ? this.breakpoint.addEventListener("change", this.onBreakPointChangeBind) : "removeListener"in this.breakpoint && this.breakpoint.addListener(this.onBreakPointChangeBind)
        }
        onResize() {
            window.innerWidth > Zs && (this.computeContainerHeight(),
            this.computeStickyTop())
        }
        onBreakPointChange(s) {
            this.breakpoint.matches === !0 ? this.isFirstInit && (this.computeContainerHeight(),
            this.enableSticky && this.computeStickyTop(),
            this.isFirstInit = !1) : this.breakpoint.matches === !1 && window.requestAnimationFrame(()=>{
                this.reset()
            }
            )
        }
        onInview(s) {
            this.isInview = s.way === "enter"
        }
        onScrollProgress(s) {
            window.innerWidth <= Zs || !this.enableSticky || (this.progress = s)
        }
        onScroll() {
            this.isInview && this.play()
        }
        onUpdate() {
            this.smoothProgress += (this.progress - this.smoothProgress) * this.lerp,
            this.translateHorizontalCars(this.smoothProgress),
            Math.round(this.smoothProgress) === Math.round(this.progress) && (this.rafIncrement++,
            this.rafIncrement >= 50 && this.pause())
        }
        translateHorizontalCars(s) {
            let e = Qn(0, 1, 0, -(this.containerWidth - window.innerWidth), s);
            this.$grid.style.transform = `translate3d(${e}px, 0, 0)`
        }
        computeStickyTop() {
            let s = window.innerHeight / 2 - this.$grid.offsetHeight / 2;
            this.$sticky.style.setProperty("--sticky-top", `${s}px`)
        }
        computeContainerHeight() {
            if (this.containerWidth = this.$grid.offsetWidth,
            this.containerWidth <= window.innerWidth)
                return this.enableSticky = !1,
                this.reset();
            this.enableSticky = !0,
            this.containerHeight = Math.max(window.innerHeight + this.containerWidth - window.innerWidth, this.containerWidth - window.innerWidth),
            this.$container.style.height = `${this.containerHeight}px`
        }
        reset() {
            this.$grid.style.transform = "",
            this.$container.style.height = "",
            this.$sticky.style.setProperty("--sticky-top", "0")
        }
        play() {
            this.isRafPlaying || (this.isRafPlaying = !0,
            this.rafIncrement = 0,
            Oi.ticker.add(this.onUpdateBind))
        }
        pause() {
            this.isRafPlaying && (this.isRafPlaying = !1,
            Oi.ticker.remove(this.onUpdateBind))
        }
    }
    ;
    function md(s, e) {
        if (!(s instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function ao(s, e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(s, i.key, i)
        }
    }
    function pd(s, e, t) {
        return e && ao(s.prototype, e),
        t && ao(s, t),
        s
    }
    function gd(s, e) {
        return vd(s) || yd(s, e) || bd(s, e) || _d()
    }
    function vd(s) {
        if (Array.isArray(s))
            return s
    }
    function yd(s, e) {
        var t = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
        if (t != null) {
            var i = [], r = !0, n = !1, a, o;
            try {
                for (t = t.call(s); !(r = (a = t.next()).done) && (i.push(a.value),
                !(e && i.length === e)); r = !0)
                    ;
            } catch (l) {
                n = !0,
                o = l
            } finally {
                try {
                    !r && t.return != null && t.return()
                } finally {
                    if (n)
                        throw o
                }
            }
            return i
        }
    }
    function bd(s, e) {
        if (s) {
            if (typeof s == "string")
                return oo(s, e);
            var t = Object.prototype.toString.call(s).slice(8, -1);
            if (t === "Object" && s.constructor && (t = s.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(s);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return oo(s, e)
        }
    }
    function oo(s, e) {
        (e == null || e > s.length) && (e = s.length);
        for (var t = 0, i = new Array(e); t < e; t++)
            i[t] = s[t];
        return i
    }
    function _d() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var Sd = function() {
        function s(e) {
            md(this, s),
            this.defaults = {
                name: "load",
                loadingClass: "is-loading",
                loadedClass: "is-loaded",
                readyClass: "is-ready",
                transitionsPrefix: "is-",
                transitionsHistory: !0,
                enterDelay: 0,
                exitDelay: 0,
                loadedDelay: 0,
                isLoaded: !1,
                isEntered: !1,
                isUrl: !1,
                transitionContainer: null,
                popstateIgnore: !1
            },
            Object.assign(this, this.defaults, e),
            this.options = e,
            this.namespace = "modular",
            this.html = document.documentElement,
            this.href = window.location.href,
            this.container = "data-" + this.name + "-container",
            this.subContainer = !1,
            this.prevTransition = null,
            this.loadAttributes = ["src", "srcset", "style", "href"],
            this.isInserted = !1,
            this.isLoading = !1,
            this.enterTimeout = !1,
            this.controller = new AbortController,
            this.classContainer = this.html,
            this.isChrome = navigator.userAgent.indexOf("Chrome") != -1,
            this.init()
        }
        return pd(s, [{
            key: "init",
            value: function() {
                var t = this;
                window.addEventListener("popstate", function(i) {
                    return t.checkState(i)
                }, !1),
                this.html.addEventListener("click", function(i) {
                    return t.checkClick(i)
                }, !1),
                this.loadEls(document)
            }
        }, {
            key: "checkClick",
            value: function(t) {
                if (!t.ctrlKey && !t.metaKey)
                    for (var i = t.target; i && i !== document; ) {
                        if (i.matches("a") && i.getAttribute("download") == null) {
                            var r = i.getAttribute("href");
                            !r.startsWith("#") && !r.startsWith("mailto:") && !r.startsWith("tel:") && (t.preventDefault(),
                            this.reset(),
                            this.getClickOptions(i));
                            break
                        }
                        i = i.parentNode
                    }
            }
        }, {
            key: "checkState",
            value: function() {
                typeof this.popstateIgnore == "string" && window.location.href.indexOf(this.popstateIgnore) > -1 || (this.reset(),
                this.getStateOptions())
            }
        }, {
            key: "reset",
            value: function() {
                this.isLoading && (this.controller.abort(),
                this.isLoading = !1,
                this.controller = new AbortController),
                window.clearTimeout(this.enterTimeout),
                this.isInserted && this.removeContainer(),
                this.classContainer = this.html,
                Object.assign(this, this.defaults, this.options)
            }
        }, {
            key: "getClickOptions",
            value: function(t) {
                this.transition = t.getAttribute("data-" + this.name),
                this.isUrl = t.getAttribute("data-" + this.name + "-url");
                var i = t.getAttribute("href")
                  , r = t.getAttribute("target");
                if (r == "_blank") {
                    window.open(i, "_blank");
                    return
                }
                if (this.transition == "false") {
                    window.location = i;
                    return
                }
                this.setOptions(i, !0)
            }
        }, {
            key: "getStateOptions",
            value: function() {
                this.transitionsHistory ? this.transition = history.state : this.transition = !1;
                var t = window.location.href;
                this.setOptions(t)
            }
        }, {
            key: "goTo",
            value: function(t, i, r) {
                this.reset(),
                this.transition = i,
                this.isUrl = r,
                this.setOptions(t, !0)
            }
        }, {
            key: "setOptions",
            value: function(t, i) {
                var r = "[" + this.container + "]", n;
                this.transition && this.transition != "true" && (this.transitionContainer = "[" + this.container + '="' + this.transition + '"]',
                this.loadingClass = this.transitions[this.transition].loadingClass || this.loadingClass,
                this.loadedClass = this.transitions[this.transition].loadedClass || this.loadedClass,
                this.readyClass = this.transitions[this.transition].readyClass || this.readyClass,
                this.transitionsPrefix = this.transitions[this.transition].transitionsPrefix || this.transitionsPrefix,
                this.enterDelay = this.transitions[this.transition].enterDelay || this.enterDelay,
                this.exitDelay = this.transitions[this.transition].exitDelay || this.exitDelay,
                this.loadedDelay = this.transitions[this.transition].loadedDelay || this.loadedDelay,
                n = document.querySelector(this.transitionContainer)),
                n ? (r = this.transitionContainer,
                this.oldContainer = n,
                this.classContainer = this.oldContainer.parentNode,
                this.subContainer || history.replaceState(this.transition, null, this.href),
                this.subContainer = !0) : (this.oldContainer = document.querySelector(r),
                this.subContainer && history.replaceState(this.prevTransition, null, this.href),
                this.subContainer = !1),
                this.href = t,
                this.parentContainer = this.oldContainer.parentNode,
                this.isUrl === "" || this.isUrl != null && this.isUrl != "false" && this.isUrl != !1 ? history.pushState(this.transition, null, t) : (this.oldContainer.classList.add("is-old"),
                this.setLoading(),
                this.startEnterDelay(),
                this.loadHref(t, r, i))
            }
        }, {
            key: "setLoading",
            value: function() {
                this.classContainer.classList.remove(this.loadedClass, this.readyClass),
                this.classContainer.classList.add(this.loadingClass),
                this.classContainer.classList.remove(this.transitionsPrefix + this.prevTransition),
                this.transition && this.classContainer.classList.add(this.transitionsPrefix + this.transition),
                this.subContainer || (this.prevTransition = this.transition);
                var t = new Event(this.namespace + "loading");
                window.dispatchEvent(t)
            }
        }, {
            key: "startEnterDelay",
            value: function() {
                var t = this;
                this.enterTimeout = window.setTimeout(function() {
                    t.isEntered = !0,
                    t.isLoaded && t.transitionContainers()
                }, this.enterDelay)
            }
        }, {
            key: "loadHref",
            value: function(t, i, r) {
                var n = this;
                this.isLoading = !0;
                var a = this.controller.signal;
                fetch(t, {
                    signal: a
                }).then(function(o) {
                    return o.text()
                }).then(function(o) {
                    r && history.pushState(n.transition, null, t);
                    var l = new DOMParser;
                    n.data = l.parseFromString(o, "text/html"),
                    n.newContainer = n.data.querySelector(i),
                    n.newContainer.classList.add("is-new"),
                    n.parentNewContainer = n.newContainer.parentNode,
                    n.hideContainer(),
                    n.parentContainer.insertBefore(n.newContainer, n.oldContainer),
                    n.isInserted = !0,
                    n.setSvgs(),
                    n.isLoaded = !0,
                    n.isEntered && n.transitionContainers(),
                    n.loadEls(n.newContainer),
                    n.isLoading = !1
                }).catch(function(o) {
                    window.location = t
                })
            }
        }, {
            key: "transitionContainers",
            value: function() {
                var t = this;
                this.setAttributes(),
                this.showContainer(),
                this.setLoaded(),
                setTimeout(function() {
                    t.removeContainer(),
                    t.setReady()
                }, this.exitDelay)
            }
        }, {
            key: "setSvgs",
            value: function() {
                if (this.isChrome) {
                    var t = this.newContainer.querySelectorAll("use");
                    t.length && t.forEach(function(i) {
                        var r = i.getAttribute("xlink:href");
                        if (r)
                            i.parentNode.innerHTML = '<use xlink:href="' + r + '"></use>';
                        else {
                            var n = i.getAttribute("href");
                            n && (i.parentNode.innerHTML = '<use href="' + n + '"></use>')
                        }
                    })
                }
            }
        }, {
            key: "setAttributes",
            value: function() {
                var t = this, i = this.data.getElementsByTagName("title")[0], r = this.data.head.querySelector('meta[name="description"]'), n = document.head.querySelector('meta[name="description"]'), a, o;
                this.subContainer ? (o = this.parentNewContainer,
                a = document.querySelector(this.transitionContainer).parentNode) : (o = this.data.querySelector("html"),
                a = document.querySelector("html"));
                var l = Object.assign({}, o.dataset);
                i && (document.title = i.innerText),
                n && r && n.setAttribute("content", r.getAttribute("content")),
                l && Object.entries(l).forEach(function(c) {
                    var d = gd(c, 2)
                      , u = d[0]
                      , m = d[1];
                    a.setAttribute("data-" + t.toDash(u), m)
                })
            }
        }, {
            key: "toDash",
            value: function(t) {
                return t.split(/(?=[A-Z])/).join("-").toLowerCase()
            }
        }, {
            key: "hideContainer",
            value: function() {
                this.newContainer.style.visibility = "hidden",
                this.newContainer.style.height = 0,
                this.newContainer.style.overflow = "hidden"
            }
        }, {
            key: "showContainer",
            value: function() {
                this.newContainer.style.visibility = "",
                this.newContainer.style.height = "",
                this.newContainer.style.overflow = ""
            }
        }, {
            key: "loadEls",
            value: function(t) {
                var i = this
                  , r = [];
                this.loadAttributes.forEach(function(n) {
                    var a = "data-" + i.name + "-" + n
                      , o = t.querySelectorAll("[" + a + "]");
                    o.length && o.forEach(function(l) {
                        var c = l.getAttribute(a);
                        if (l.setAttribute(n, c),
                        n == "src" || n == "srcset") {
                            var d = new Promise(function(u) {
                                l.onload = function() {
                                    return u(l)
                                }
                            }
                            );
                            r.push(d)
                        }
                    })
                }),
                Promise.all(r).then(function(n) {
                    var a = new Event(i.namespace + "images");
                    window.dispatchEvent(a)
                })
            }
        }, {
            key: "setLoaded",
            value: function() {
                var t = this;
                this.classContainer.classList.remove(this.loadingClass),
                setTimeout(function() {
                    t.classContainer.classList.add(t.loadedClass)
                }, this.loadedDelay);
                var i = new Event(this.namespace + "loaded");
                window.dispatchEvent(i)
            }
        }, {
            key: "removeContainer",
            value: function() {
                this.parentContainer.removeChild(this.oldContainer),
                this.newContainer.classList.remove("is-new"),
                this.isInserted = !1
            }
        }, {
            key: "setReady",
            value: function() {
                this.classContainer.classList.add(this.readyClass);
                var t = new Event(this.namespace + "ready");
                window.dispatchEvent(t)
            }
        }, {
            key: "on",
            value: function(t, i) {
                var r = this;
                window.addEventListener(this.namespace + t, function() {
                    switch (t) {
                    case "loading":
                        return i(r.transition, r.oldContainer);
                    case "loaded":
                        return i(r.transition, r.oldContainer, r.newContainer);
                    case "ready":
                        return i(r.transition, r.newContainer);
                    default:
                        return i()
                    }
                }, !1)
            }
        }]),
        s
    }()
      , lo = Sd;
    var Qs = "production"
      , oe = config = Object.freeze({
        ENV: Qs,
        IS_PROD: Qs === "production",
        IS_DEV: Qs === "development",
        CSS_CLASS: {
            LOADING: "is-loading",
            READY: "is-ready",
            LOADED: "is-loaded",
            IMAGE: "c-image",
            IMAGE_LAZYLOADED_MODIFIER: "-lazy-loaded",
            IMAGE_LAZYLOADING_MODIFIER: "-lazy-loading",
            IMAGE_LAZYERROR_MODIFIER: "-lazy-error"
        }
    });
    function co(s) {
        return s ? s.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)') : (console.warn("You need to pass a parent HTMLElement"),
        [])
    }
    var Ut = (s,e)=>{
        for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
            for (var i = (this.document || this.ownerDocument).querySelectorAll(t), r = i.length; --r >= 0 && i.item(r) !== this; )
                ;
            return r > -1
        }
        ); s && s !== document; s = s.parentNode)
            if (s.matches(e))
                return s;
        return null
    }
    ;
    var Ed = s=>({
        url: s.src,
        width: s.naturalWidth,
        height: s.naturalHeight,
        ratio: s.naturalWidth / s.naturalHeight
    })
      , xd = (s,e={})=>new Promise((t,i)=>{
        let r = new Image;
        e.crossOrigin && (r.crossOrigin = e.crossOrigin);
        let n = ()=>{
            t(_n({
                element: r
            }, Ed(r)))
        }
        ;
        r.decode ? (r.src = s,
        r.decode().then(n).catch(a=>{
            i(a)
        }
        )) : (r.onload = n,
        r.onerror = a=>{
            i(a)
        }
        ,
        r.src = s)
    }
    )
      , uo = []
      , fo = (s,e,t)=>Fe(void 0, null, function*() {
        let i = e || s.dataset.src
          , r = uo.find(n=>n.url === i);
        if (!r) {
            if (r = yield xd(i),
            !r.url)
                return;
            uo.push(r)
        }
        s.src !== i && (s.tagName === "IMG" ? s.src = r.url : s.style.backgroundImage = `url(${r.url})`,
        requestAnimationFrame(()=>{
            let n = s.closest(".c-lazy");
            n && (n.classList.add("-lazy-loaded"),
            n.style.backgroundImage = ""),
            s.classList.add("-lazy-loaded"),
            t == null || t()
        }
        ))
    })
      , ho = s=>{
        let e = s.currentTarget
          , t = Ut(e, `.${oe.CSS_CLASS.IMAGE}`);
        requestAnimationFrame(()=>{
            t.classList.remove(oe.CSS_CLASS.IMAGE_LAZYLOADING_MODIFIER),
            t.classList.add(oe.CSS_CLASS.IMAGE_LAZYLOADED_MODIFIER)
        }
        )
    }
      , mo = s=>{
        let e = s.currentTarget
          , t = Ut(e, `.${oe.CSS_CLASS.IMAGE}`);
        requestAnimationFrame(()=>{
            t.classList.remove(oe.CSS_CLASS.IMAGE_LAZYLOADING_MODIFIER),
            t.classList.add(oe.CSS_CLASS.IMAGE_LAZYERROR_MODIFIER)
        }
        )
    }
      , ki = s=>{
        let e = s || document.querySelectorAll('[loading="lazy"]');
        if ("loading"in HTMLImageElement.prototype)
            for (let t of e) {
                let i = Ut(t, `.${oe.CSS_CLASS.IMAGE}`);
                t.complete ? i != null && i.classList.add(oe.CSS_CLASS.IMAGE_LAZYLOADED_MODIFIER) : (i != null && i.classList.add(oe.CSS_CLASS.IMAGE_LAZYLOADING_MODIFIER),
                t.addEventListener("load", ho, {
                    once: !0
                }),
                t.addEventListener("error", mo, {
                    once: !0
                }))
            }
        else
            for (let t of e)
                Ut(t, `.${oe.CSS_CLASS.IMAGE}`).classList.add(oe.CSS_CLASS.IMAGE_LAZYLOADED_MODIFIER)
    }
      , po = ()=>{
        if ("loading"in HTMLImageElement.prototype) {
            let s = document.querySelectorAll('[loading="lazy"]');
            for (let e of s)
                e.removeEventListener("load", ho, {
                    once: !0
                }),
                e.removeEventListener("error", mo, {
                    once: !0
                })
        }
    }
    ;
    var Di = class extends B {
        constructor(s) {
            super(s)
        }
        init() {
            this.modularLoad = new lo({
                enterDelay: 650,
                transitions: {
                    listing: {}
                }
            }),
            this.modularLoad.on("ready", (s,e)=>{
                s != null && this.call("addScrollElements", e, "Scroll")
            }
            ),
            this.modularLoad.on("loading", (s,e)=>{
                po(),
                this.call("close", null, "Menu")
            }
            ),
            this.modularLoad.on("loaded", (s,e,t)=>{
                s != null ? this.call("removeScrollElements", e, "Scroll") : document.documentElement.scrollTop = 0,
                this.call("destroy", e, "app"),
                this.call("update", t, "app"),
                ki()
            }
            )
        }
        goTo(s) {
            var i;
            let {url: e, transition: t} = s;
            (i = this.modularLoad) == null || i.goTo(e, t)
        }
    }
    ;
    var vo = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"]
      , zi = vo.join(",")
      , yo = typeof Element == "undefined"
      , ft = yo ? function() {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
      , Ri = !yo && Element.prototype.getRootNode ? function(s) {
        var e;
        return s == null || (e = s.getRootNode) === null || e === void 0 ? void 0 : e.call(s)
    }
    : function(s) {
        return s == null ? void 0 : s.ownerDocument
    }
      , $i = function s(e, t) {
        var i;
        t === void 0 && (t = !0);
        var r = e == null || (i = e.getAttribute) === null || i === void 0 ? void 0 : i.call(e, "inert")
          , n = r === "" || r === "true"
          , a = n || t && e && s(e.parentNode);
        return a
    }
      , Td = function(e) {
        var t, i = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
        return i === "" || i === "true"
    }
      , bo = function(e, t, i) {
        if ($i(e))
            return [];
        var r = Array.prototype.slice.apply(e.querySelectorAll(zi));
        return t && ft.call(e, zi) && r.unshift(e),
        r = r.filter(i),
        r
    }
      , _o = function s(e, t, i) {
        for (var r = [], n = Array.from(e); n.length; ) {
            var a = n.shift();
            if (!$i(a, !1))
                if (a.tagName === "SLOT") {
                    var o = a.assignedElements()
                      , l = o.length ? o : a.children
                      , c = s(l, !0, i);
                    i.flatten ? r.push.apply(r, c) : r.push({
                        scopeParent: a,
                        candidates: c
                    })
                } else {
                    var d = ft.call(a, zi);
                    d && i.filter(a) && (t || !e.includes(a)) && r.push(a);
                    var u = a.shadowRoot || typeof i.getShadowRoot == "function" && i.getShadowRoot(a)
                      , m = !$i(u, !1) && (!i.shadowRootFilter || i.shadowRootFilter(a));
                    if (u && m) {
                        var h = s(u === !0 ? a.children : u.children, !0, i);
                        i.flatten ? r.push.apply(r, h) : r.push({
                            scopeParent: a,
                            candidates: h
                        })
                    } else
                        n.unshift.apply(n, a.children)
                }
        }
        return r
    }
      , So = function(e, t) {
        return e.tabIndex < 0 && (t || /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Td(e)) && isNaN(parseInt(e.getAttribute("tabindex"), 10)) ? 0 : e.tabIndex
    }
      , Cd = function(e, t) {
        return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
    }
      , Eo = function(e) {
        return e.tagName === "INPUT"
    }
      , Md = function(e) {
        return Eo(e) && e.type === "hidden"
    }
      , Pd = function(e) {
        var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(i) {
            return i.tagName === "SUMMARY"
        });
        return t
    }
      , Id = function(e, t) {
        for (var i = 0; i < e.length; i++)
            if (e[i].checked && e[i].form === t)
                return e[i]
    }
      , wd = function(e) {
        if (!e.name)
            return !0;
        var t = e.form || Ri(e), i = function(o) {
            return t.querySelectorAll('input[type="radio"][name="' + o + '"]')
        }, r;
        if (typeof window != "undefined" && typeof window.CSS != "undefined" && typeof window.CSS.escape == "function")
            r = i(window.CSS.escape(e.name));
        else
            try {
                r = i(e.name)
            } catch (a) {
                return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message),
                !1
            }
        var n = Id(r, e.form);
        return !n || n === e
    }
      , Ad = function(e) {
        return Eo(e) && e.type === "radio"
    }
      , Od = function(e) {
        return Ad(e) && !wd(e)
    }
      , Ld = function(e) {
        var t, i = e && Ri(e), r = (t = i) === null || t === void 0 ? void 0 : t.host, n = !1;
        if (i && i !== e) {
            var a, o, l;
            for (n = !!((a = r) !== null && a !== void 0 && (o = a.ownerDocument) !== null && o !== void 0 && o.contains(r) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !n && r; ) {
                var c, d, u;
                i = Ri(r),
                r = (c = i) === null || c === void 0 ? void 0 : c.host,
                n = !!((d = r) !== null && d !== void 0 && (u = d.ownerDocument) !== null && u !== void 0 && u.contains(r))
            }
        }
        return n
    }
      , go = function(e) {
        var t = e.getBoundingClientRect()
          , i = t.width
          , r = t.height;
        return i === 0 && r === 0
    }
      , kd = function(e, t) {
        var i = t.displayCheck
          , r = t.getShadowRoot;
        if (getComputedStyle(e).visibility === "hidden")
            return !0;
        var n = ft.call(e, "details>summary:first-of-type")
          , a = n ? e.parentElement : e;
        if (ft.call(a, "details:not([open]) *"))
            return !0;
        if (!i || i === "full" || i === "legacy-full") {
            if (typeof r == "function") {
                for (var o = e; e; ) {
                    var l = e.parentElement
                      , c = Ri(e);
                    if (l && !l.shadowRoot && r(l) === !0)
                        return go(e);
                    e.assignedSlot ? e = e.assignedSlot : !l && c !== e.ownerDocument ? e = c.host : e = l
                }
                e = o
            }
            if (Ld(e))
                return !e.getClientRects().length;
            if (i !== "legacy-full")
                return !0
        } else if (i === "non-zero-area")
            return go(e);
        return !1
    }
      , Dd = function(e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t; ) {
                if (t.tagName === "FIELDSET" && t.disabled) {
                    for (var i = 0; i < t.children.length; i++) {
                        var r = t.children.item(i);
                        if (r.tagName === "LEGEND")
                            return ft.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e)
                    }
                    return !0
                }
                t = t.parentElement
            }
        return !1
    }
      , Fi = function(e, t) {
        return !(t.disabled || $i(t) || Md(t) || kd(t, e) || Pd(t) || Dd(t))
    }
      , Js = function(e, t) {
        return !(Od(t) || So(t) < 0 || !Fi(e, t))
    }
      , zd = function(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return !!(isNaN(t) || t >= 0)
    }
      , Rd = function s(e) {
        var t = []
          , i = [];
        return e.forEach(function(r, n) {
            var a = !!r.scopeParent
              , o = a ? r.scopeParent : r
              , l = So(o, a)
              , c = a ? s(r.candidates) : o;
            l === 0 ? a ? t.push.apply(t, c) : t.push(o) : i.push({
                documentOrder: n,
                tabIndex: l,
                item: r,
                isScope: a,
                content: c
            })
        }),
        i.sort(Cd).reduce(function(r, n) {
            return n.isScope ? r.push.apply(r, n.content) : r.push(n.content),
            r
        }, []).concat(t)
    }
      , xo = function(e, t) {
        t = t || {};
        var i;
        return t.getShadowRoot ? i = _o([e], t.includeContainer, {
            filter: Js.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: zd
        }) : i = bo(e, t.includeContainer, Js.bind(null, t)),
        Rd(i)
    }
      , To = function(e, t) {
        t = t || {};
        var i;
        return t.getShadowRoot ? i = _o([e], t.includeContainer, {
            filter: Fi.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
        }) : i = bo(e, t.includeContainer, Fi.bind(null, t)),
        i
    }
      , jt = function(e, t) {
        if (t = t || {},
        !e)
            throw new Error("No node provided");
        return ft.call(e, zi) === !1 ? !1 : Js(t, e)
    }
      , $d = vo.concat("iframe").join(",")
      , en = function(e, t) {
        if (t = t || {},
        !e)
            throw new Error("No node provided");
        return ft.call(e, $d) === !1 ? !1 : Fi(t, e)
    };
    function Co(s, e) {
        var t = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(s);
            e && (i = i.filter(function(r) {
                return Object.getOwnPropertyDescriptor(s, r).enumerable
            })),
            t.push.apply(t, i)
        }
        return t
    }
    function Mo(s) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e] != null ? arguments[e] : {};
            e % 2 ? Co(Object(t), !0).forEach(function(i) {
                Fd(s, i, t[i])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)) : Co(Object(t)).forEach(function(i) {
                Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(t, i))
            })
        }
        return s
    }
    function Fd(s, e, t) {
        return e = Bd(e),
        e in s ? Object.defineProperty(s, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[e] = t,
        s
    }
    function Nd(s, e) {
        if (typeof s != "object" || s === null)
            return s;
        var t = s[Symbol.toPrimitive];
        if (t !== void 0) {
            var i = t.call(s, e || "default");
            if (typeof i != "object")
                return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (e === "string" ? String : Number)(s)
    }
    function Bd(s) {
        var e = Nd(s, "string");
        return typeof e == "symbol" ? e : String(e)
    }
    var Po = {
        activateTrap: function(e, t) {
            if (e.length > 0) {
                var i = e[e.length - 1];
                i !== t && i.pause()
            }
            var r = e.indexOf(t);
            r === -1 || e.splice(r, 1),
            e.push(t)
        },
        deactivateTrap: function(e, t) {
            var i = e.indexOf(t);
            i !== -1 && e.splice(i, 1),
            e.length > 0 && e[e.length - 1].unpause()
        }
    }
      , Hd = function(e) {
        return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function"
    }
      , Gd = function(e) {
        return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27
    }
      , Zt = function(e) {
        return e.key === "Tab" || e.keyCode === 9
    }
      , Vd = function(e) {
        return Zt(e) && !e.shiftKey
    }
      , Wd = function(e) {
        return Zt(e) && e.shiftKey
    }
      , Io = function(e) {
        return setTimeout(e, 0)
    }
      , wo = function(e, t) {
        var i = -1;
        return e.every(function(r, n) {
            return t(r) ? (i = n,
            !1) : !0
        }),
        i
    }
      , Kt = function(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            i[r - 1] = arguments[r];
        return typeof e == "function" ? e.apply(void 0, i) : e
    }
      , Ni = function(e) {
        return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target
    }
      , Yd = []
      , Ao = function(e, t) {
        var i = (t == null ? void 0 : t.document) || document, r = (t == null ? void 0 : t.trapStack) || Yd, n = Mo({
            returnFocusOnDeactivate: !0,
            escapeDeactivates: !0,
            delayInitialFocus: !0,
            isKeyForward: Vd,
            isKeyBackward: Wd
        }, t), a = {
            containers: [],
            containerGroups: [],
            tabbableGroups: [],
            nodeFocusedBeforeActivation: null,
            mostRecentlyFocusedNode: null,
            active: !1,
            paused: !1,
            delayInitialFocusTimer: void 0
        }, o, l = function(b, S, _) {
            return b && b[S] !== void 0 ? b[S] : n[_ || S]
        }, c = function(b) {
            return a.containerGroups.findIndex(function(S) {
                var _ = S.container
                  , L = S.tabbableNodes;
                return _.contains(b) || L.find(function(P) {
                    return P === b
                })
            })
        }, d = function(b) {
            var S = n[b];
            if (typeof S == "function") {
                for (var _ = arguments.length, L = new Array(_ > 1 ? _ - 1 : 0), P = 1; P < _; P++)
                    L[P - 1] = arguments[P];
                S = S.apply(void 0, L)
            }
            if (S === !0 && (S = void 0),
            !S) {
                if (S === void 0 || S === !1)
                    return S;
                throw new Error("`".concat(b, "` was specified but was not a node, or did not return a node"))
            }
            var w = S;
            if (typeof S == "string" && (w = i.querySelector(S),
            !w))
                throw new Error("`".concat(b, "` as selector refers to no known node"));
            return w
        }, u = function() {
            var b = d("initialFocus");
            if (b === !1)
                return !1;
            if (b === void 0)
                if (c(i.activeElement) >= 0)
                    b = i.activeElement;
                else {
                    var S = a.tabbableGroups[0]
                      , _ = S && S.firstTabbableNode;
                    b = _ || d("fallbackFocus")
                }
            if (!b)
                throw new Error("Your focus-trap needs to have at least one focusable element");
            return b
        }, m = function() {
            if (a.containerGroups = a.containers.map(function(b) {
                var S = xo(b, n.tabbableOptions)
                  , _ = To(b, n.tabbableOptions);
                return {
                    container: b,
                    tabbableNodes: S,
                    focusableNodes: _,
                    firstTabbableNode: S.length > 0 ? S[0] : null,
                    lastTabbableNode: S.length > 0 ? S[S.length - 1] : null,
                    nextTabbableNode: function(P) {
                        var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
                          , O = _.findIndex(function(D) {
                            return D === P
                        });
                        if (!(O < 0))
                            return w ? _.slice(O + 1).find(function(D) {
                                return jt(D, n.tabbableOptions)
                            }) : _.slice(0, O).reverse().find(function(D) {
                                return jt(D, n.tabbableOptions)
                            })
                    }
                }
            }),
            a.tabbableGroups = a.containerGroups.filter(function(b) {
                return b.tabbableNodes.length > 0
            }),
            a.tabbableGroups.length <= 0 && !d("fallbackFocus"))
                throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")
        }, h = function C(b) {
            if (b !== !1 && b !== i.activeElement) {
                if (!b || !b.focus) {
                    C(u());
                    return
                }
                b.focus({
                    preventScroll: !!n.preventScroll
                }),
                a.mostRecentlyFocusedNode = b,
                Hd(b) && b.select()
            }
        }, p = function(b) {
            var S = d("setReturnFocus", b);
            return S || (S === !1 ? !1 : b)
        }, f = function(b) {
            var S = Ni(b);
            if (!(c(S) >= 0)) {
                if (Kt(n.clickOutsideDeactivates, b)) {
                    o.deactivate({
                        returnFocus: n.returnFocusOnDeactivate
                    });
                    return
                }
                Kt(n.allowOutsideClick, b) || b.preventDefault()
            }
        }, g = function(b) {
            var S = Ni(b)
              , _ = c(S) >= 0;
            _ || S instanceof Document ? _ && (a.mostRecentlyFocusedNode = S) : (b.stopImmediatePropagation(),
            h(a.mostRecentlyFocusedNode || u()))
        }, y = function(b) {
            var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
              , _ = Ni(b);
            m();
            var L = null;
            if (a.tabbableGroups.length > 0) {
                var P = c(_)
                  , w = P >= 0 ? a.containerGroups[P] : void 0;
                if (P < 0)
                    S ? L = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : L = a.tabbableGroups[0].firstTabbableNode;
                else if (S) {
                    var O = wo(a.tabbableGroups, function(le) {
                        var ce = le.firstTabbableNode;
                        return _ === ce
                    });
                    if (O < 0 && (w.container === _ || en(_, n.tabbableOptions) && !jt(_, n.tabbableOptions) && !w.nextTabbableNode(_, !1)) && (O = P),
                    O >= 0) {
                        var D = O === 0 ? a.tabbableGroups.length - 1 : O - 1
                          , N = a.tabbableGroups[D];
                        L = N.lastTabbableNode
                    } else
                        Zt(b) || (L = w.nextTabbableNode(_, !1))
                } else {
                    var $ = wo(a.tabbableGroups, function(le) {
                        var ce = le.lastTabbableNode;
                        return _ === ce
                    });
                    if ($ < 0 && (w.container === _ || en(_, n.tabbableOptions) && !jt(_, n.tabbableOptions) && !w.nextTabbableNode(_)) && ($ = P),
                    $ >= 0) {
                        var V = $ === a.tabbableGroups.length - 1 ? 0 : $ + 1
                          , Z = a.tabbableGroups[V];
                        L = Z.firstTabbableNode
                    } else
                        Zt(b) || (L = w.nextTabbableNode(_))
                }
            } else
                L = d("fallbackFocus");
            L && (Zt(b) && b.preventDefault(),
            h(L))
        }, x = function(b) {
            if (Gd(b) && Kt(n.escapeDeactivates, b) !== !1) {
                b.preventDefault(),
                o.deactivate();
                return
            }
            (n.isKeyForward(b) || n.isKeyBackward(b)) && y(b, n.isKeyBackward(b))
        }, E = function(b) {
            var S = Ni(b);
            c(S) >= 0 || Kt(n.clickOutsideDeactivates, b) || Kt(n.allowOutsideClick, b) || (b.preventDefault(),
            b.stopImmediatePropagation())
        }, T = function() {
            if (a.active)
                return Po.activateTrap(r, o),
                a.delayInitialFocusTimer = n.delayInitialFocus ? Io(function() {
                    h(u())
                }) : h(u()),
                i.addEventListener("focusin", g, !0),
                i.addEventListener("mousedown", f, {
                    capture: !0,
                    passive: !1
                }),
                i.addEventListener("touchstart", f, {
                    capture: !0,
                    passive: !1
                }),
                i.addEventListener("click", E, {
                    capture: !0,
                    passive: !1
                }),
                i.addEventListener("keydown", x, {
                    capture: !0,
                    passive: !1
                }),
                o
        }, M = function() {
            if (a.active)
                return i.removeEventListener("focusin", g, !0),
                i.removeEventListener("mousedown", f, !0),
                i.removeEventListener("touchstart", f, !0),
                i.removeEventListener("click", E, !0),
                i.removeEventListener("keydown", x, !0),
                o
        };
        return o = {
            get active() {
                return a.active
            },
            get paused() {
                return a.paused
            },
            activate: function(b) {
                if (a.active)
                    return this;
                var S = l(b, "onActivate")
                  , _ = l(b, "onPostActivate")
                  , L = l(b, "checkCanFocusTrap");
                L || m(),
                a.active = !0,
                a.paused = !1,
                a.nodeFocusedBeforeActivation = i.activeElement,
                S == null || S();
                var P = function() {
                    L && m(),
                    T(),
                    _ == null || _()
                };
                return L ? (L(a.containers.concat()).then(P, P),
                this) : (P(),
                this)
            },
            deactivate: function(b) {
                if (!a.active)
                    return this;
                var S = Mo({
                    onDeactivate: n.onDeactivate,
                    onPostDeactivate: n.onPostDeactivate,
                    checkCanReturnFocus: n.checkCanReturnFocus
                }, b);
                clearTimeout(a.delayInitialFocusTimer),
                a.delayInitialFocusTimer = void 0,
                M(),
                a.active = !1,
                a.paused = !1,
                Po.deactivateTrap(r, o);
                var _ = l(S, "onDeactivate")
                  , L = l(S, "onPostDeactivate")
                  , P = l(S, "checkCanReturnFocus")
                  , w = l(S, "returnFocus", "returnFocusOnDeactivate");
                _ == null || _();
                var O = function() {
                    Io(function() {
                        w && h(p(a.nodeFocusedBeforeActivation)),
                        L == null || L()
                    })
                };
                return w && P ? (P(p(a.nodeFocusedBeforeActivation)).then(O, O),
                this) : (O(),
                this)
            },
            pause: function(b) {
                if (a.paused || !a.active)
                    return this;
                var S = l(b, "onPause")
                  , _ = l(b, "onPostPause");
                return a.paused = !0,
                S == null || S(),
                M(),
                _ == null || _(),
                this
            },
            unpause: function(b) {
                if (!a.paused || !a.active)
                    return this;
                var S = l(b, "onUnpause")
                  , _ = l(b, "onPostUnpause");
                return a.paused = !1,
                S == null || S(),
                m(),
                T(),
                _ == null || _(),
                this
            },
            updateContainerElements: function(b) {
                var S = [].concat(b).filter(Boolean);
                return a.containers = S.map(function(_) {
                    return typeof _ == "string" ? i.querySelector(_) : _
                }),
                a.active && m(),
                this
            }
        },
        o.updateContainerElements(e),
        o
    };
    var tn = {
        OPEN: "has-menu-opened"
    }
      , Bi = class extends B {
        constructor(s) {
            super(s),
            this.events = {
                click: {
                    close: "close"
                }
            }
        }
        init() {
            this.trap = Ao([this.el, ".c-header"]),
            this.closeBind = s=>{
                s.key === "Escape" && this.closeMenu()
            }
            ,
            document.addEventListener("keyup", this.closeBind)
        }
        toggle() {
            J.classList.contains(tn.OPEN) ? this.close() : this.open()
        }
        open() {
            var s;
            J.classList.add(tn.OPEN),
            this.call("stop", null, "Scroll"),
            (s = this.trap) == null || s.activate()
        }
        close() {
            var s;
            J.classList.remove(tn.OPEN),
            this.call("start", null, "Scroll"),
            (s = this.trap) == null || s.deactivate()
        }
        destroy() {
            super.destroy(),
            document.removeEventListener("keyup", this.closeBind)
        }
    }
    ;
    function rn() {
        return rn = Object.assign ? Object.assign.bind() : function(s) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i])
            }
            return s
        }
        ,
        rn.apply(this, arguments)
    }
    function Hi(s, e, t) {
        return Math.max(s, Math.min(e, t))
    }
    var sn = class {
        advance(e) {
            var t;
            if (!this.isRunning)
                return;
            let i = !1;
            if (this.lerp)
                this.value = (1 - (r = this.lerp)) * this.value + r * this.to,
                Math.round(this.value) === this.to && (this.value = this.to,
                i = !0);
            else {
                this.currentTime += e;
                let n = Hi(0, this.currentTime / this.duration, 1);
                i = n >= 1;
                let a = i ? 1 : this.easing(n);
                this.value = this.from + (this.to - this.from) * a
            }
            var r;
            (t = this.onUpdate) == null || t.call(this, this.value, {
                completed: i
            }),
            i && this.stop()
        }
        stop() {
            this.isRunning = !1
        }
        fromTo(e, t, {lerp: i=.1, duration: r=1, easing: n=o=>o, onUpdate: a}) {
            this.from = this.value = e,
            this.to = t,
            this.lerp = i,
            this.duration = r,
            this.easing = n,
            this.currentTime = 0,
            this.isRunning = !0,
            this.onUpdate = a
        }
    }
    ;
    function Oo(s, e) {
        let t;
        return function() {
            let i = arguments
              , r = this;
            clearTimeout(t),
            t = setTimeout(function() {
                s.apply(r, i)
            }, e)
        }
    }
    var nn = class {
        constructor(e, t) {
            this.onWindowResize = ()=>{
                this.width = window.innerWidth,
                this.height = window.innerHeight
            }
            ,
            this.onWrapperResize = ()=>{
                this.width = this.wrapper.clientWidth,
                this.height = this.wrapper.clientHeight
            }
            ,
            this.onContentResize = ()=>{
                let i = this.wrapper === window ? document.documentElement : this.wrapper;
                this.scrollHeight = i.scrollHeight,
                this.scrollWidth = i.scrollWidth
            }
            ,
            this.wrapper = e,
            this.content = t,
            this.wrapper === window ? (window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize()) : (this.wrapperResizeObserver = new ResizeObserver(Oo(this.onWrapperResize, 100)),
            this.wrapperResizeObserver.observe(this.wrapper),
            this.onWrapperResize()),
            this.contentResizeObserver = new ResizeObserver(Oo(this.onContentResize, 100)),
            this.contentResizeObserver.observe(this.content),
            this.onContentResize()
        }
        destroy() {
            var e, t;
            window.removeEventListener("resize", this.onWindowResize, !1),
            (e = this.wrapperResizeObserver) == null || e.disconnect(),
            (t = this.contentResizeObserver) == null || t.disconnect()
        }
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    }
      , Lo = ()=>({
        events: {},
        emit(s, ...e) {
            let t = this.events[s] || [];
            for (let i = 0, r = t.length; i < r; i++)
                t[i](...e)
        },
        on(s, e) {
            var t;
            return (t = this.events[s]) != null && t.push(e) || (this.events[s] = [e]),
            ()=>{
                var i;
                this.events[s] = (i = this.events[s]) == null ? void 0 : i.filter(r=>e !== r)
            }
        }
    })
      , an = class {
        constructor(e, {wheelMultiplier: t=1, touchMultiplier: i=2, normalizeWheel: r=!1}) {
            this.onTouchStart = n=>{
                let {clientX: a, clientY: o} = n.targetTouches ? n.targetTouches[0] : n;
                this.touchStart.x = a,
                this.touchStart.y = o,
                this.lastDelta = {
                    x: 0,
                    y: 0
                }
            }
            ,
            this.onTouchMove = n=>{
                let {clientX: a, clientY: o} = n.targetTouches ? n.targetTouches[0] : n
                  , l = -(a - this.touchStart.x) * this.touchMultiplier
                  , c = -(o - this.touchStart.y) * this.touchMultiplier;
                this.touchStart.x = a,
                this.touchStart.y = o,
                this.lastDelta = {
                    x: l,
                    y: c
                },
                this.emitter.emit("scroll", {
                    type: "touch",
                    deltaX: l,
                    deltaY: c,
                    event: n
                })
            }
            ,
            this.onTouchEnd = n=>{
                this.emitter.emit("scroll", {
                    type: "touch",
                    inertia: !0,
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: n
                })
            }
            ,
            this.onWheel = n=>{
                let {deltaX: a, deltaY: o} = n;
                this.normalizeWheel && (a = Hi(-100, a, 100),
                o = Hi(-100, o, 100)),
                a *= this.wheelMultiplier,
                o *= this.wheelMultiplier,
                this.emitter.emit("scroll", {
                    type: "wheel",
                    deltaX: a,
                    deltaY: o,
                    event: n
                })
            }
            ,
            this.element = e,
            this.wheelMultiplier = t,
            this.touchMultiplier = i,
            this.normalizeWheel = r,
            this.touchStart = {
                x: null,
                y: null
            },
            this.emitter = Lo(),
            this.element.addEventListener("wheel", this.onWheel, {
                passive: !1
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
        on(e, t) {
            return this.emitter.on(e, t)
        }
        destroy() {
            this.emitter.events = {},
            this.element.removeEventListener("wheel", this.onWheel, {
                passive: !1
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
    }
      , Gi = class {
        constructor({direction: e, gestureDirection: t, mouseMultiplier: i, smooth: r, wrapper: n=window, content: a=document.documentElement, wheelEventsTarget: o=n, smoothWheel: l=r == null || r, smoothTouch: c=!1, syncTouch: d=!1, syncTouchLerp: u=.1, touchInertiaMultiplier: m=35, duration: h, easing: p=C=>Math.min(1, 1.001 - Math.pow(2, -10 * C)), lerp: f=h ? null : .1, infinite: g=!1, orientation: y=e != null ? e : "vertical", gestureOrientation: x=t != null ? t : "vertical", touchMultiplier: E=1, wheelMultiplier: T=i != null ? i : 1, normalizeWheel: M=!1}={}) {
            this.onVirtualScroll = ({type: C, inertia: b, deltaX: S, deltaY: _, event: L})=>{
                if (L.ctrlKey)
                    return;
                let P = C === "touch"
                  , w = C === "wheel";
                if (this.options.gestureOrientation === "vertical" && _ === 0 || this.options.gestureOrientation === "horizontal" && S === 0 || P && this.options.gestureOrientation === "vertical" && this.scroll === 0 && !this.options.infinite && _ <= 0 || L.composedPath().find($=>$ == null || $.hasAttribute == null ? void 0 : $.hasAttribute("data-lenis-prevent")))
                    return;
                if (this.isStopped || this.isLocked)
                    return void L.preventDefault();
                if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && P || this.options.smoothWheel && w,
                !this.isSmooth)
                    return this.isScrolling = !1,
                    void this.animate.stop();
                L.preventDefault();
                let O = _;
                this.options.gestureOrientation === "both" ? O = Math.abs(_) > Math.abs(S) ? _ : S : this.options.gestureOrientation === "horizontal" && (O = S);
                let D = P && this.options.syncTouch
                  , N = P && b && Math.abs(O) > 1;
                N && (O = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(this.targetScroll + O, rn({
                    programmatic: !1
                }, D && {
                    lerp: N ? this.syncTouchLerp : .4
                }))
            }
            ,
            this.onScroll = ()=>{
                if (!this.isScrolling) {
                    let C = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll,
                    this.velocity = 0,
                    this.direction = Math.sign(this.animatedScroll - C),
                    this.emit()
                }
            }
            ,
            e && console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),
            t && console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),
            i && console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),
            r && console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),
            window.lenisVersion = "1.0.11",
            n !== document.documentElement && n !== document.body || (n = window),
            this.options = {
                wrapper: n,
                content: a,
                wheelEventsTarget: o,
                smoothWheel: l,
                smoothTouch: c,
                syncTouch: d,
                syncTouchLerp: u,
                touchInertiaMultiplier: m,
                duration: h,
                easing: p,
                lerp: f,
                infinite: g,
                gestureOrientation: x,
                orientation: y,
                touchMultiplier: E,
                wheelMultiplier: T,
                normalizeWheel: M
            },
            this.dimensions = new nn(n,a),
            this.rootElement.classList.add("lenis"),
            this.velocity = 0,
            this.isStopped = !1,
            this.isSmooth = l || c,
            this.isScrolling = !1,
            this.targetScroll = this.animatedScroll = this.actualScroll,
            this.animate = new sn,
            this.emitter = Lo(),
            this.options.wrapper.addEventListener("scroll", this.onScroll, {
                passive: !1
            }),
            this.virtualScroll = new an(o,{
                touchMultiplier: E,
                wheelMultiplier: T,
                normalizeWheel: M
            }),
            this.virtualScroll.on("scroll", this.onVirtualScroll)
        }
        destroy() {
            this.emitter.events = {},
            this.options.wrapper.removeEventListener("scroll", this.onScroll, {
                passive: !1
            }),
            this.virtualScroll.destroy()
        }
        on(e, t) {
            return this.emitter.on(e, t)
        }
        off(e, t) {
            var i;
            this.emitter.events[e] = (i = this.emitter.events[e]) == null ? void 0 : i.filter(r=>t !== r)
        }
        setScroll(e) {
            this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
        }
        emit() {
            this.emitter.emit("scroll", this)
        }
        reset() {
            this.isLocked = !1,
            this.isScrolling = !1,
            this.velocity = 0,
            this.animate.stop()
        }
        start() {
            this.isStopped = !1,
            this.reset()
        }
        stop() {
            this.isStopped = !0,
            this.animate.stop(),
            this.reset()
        }
        raf(e) {
            let t = e - (this.time || e);
            this.time = e,
            this.animate.advance(.001 * t)
        }
        scrollTo(e, {offset: t=0, immediate: i=!1, lock: r=!1, duration: n=this.options.duration, easing: a=this.options.easing, lerp: o=!n && this.options.lerp, onComplete: l=null, force: c=!1, programmatic: d=!0}={}) {
            if (!this.isStopped || c) {
                if (["top", "left", "start"].includes(e))
                    e = 0;
                else if (["bottom", "right", "end"].includes(e))
                    e = this.limit;
                else {
                    var u;
                    let m;
                    if (typeof e == "string" ? m = document.querySelector(e) : (u = e) != null && u.nodeType && (m = e),
                    m) {
                        if (this.options.wrapper !== window) {
                            let p = this.options.wrapper.getBoundingClientRect();
                            t -= this.isHorizontal ? p.left : p.top
                        }
                        let h = m.getBoundingClientRect();
                        e = (this.isHorizontal ? h.left : h.top) + this.animatedScroll
                    }
                }
                if (typeof e == "number") {
                    if (e += t,
                    e = Math.round(e),
                    this.options.infinite ? d && (this.targetScroll = this.animatedScroll = this.scroll) : e = Hi(0, e, this.limit),
                    i)
                        return this.animatedScroll = this.targetScroll = e,
                        this.setScroll(this.scroll),
                        this.reset(),
                        this.emit(),
                        void (l == null || l());
                    if (!d) {
                        if (e === this.targetScroll)
                            return;
                        this.targetScroll = e
                    }
                    this.animate.fromTo(this.animatedScroll, e, {
                        duration: n,
                        easing: a,
                        lerp: o,
                        onUpdate: (m,{completed: h})=>{
                            r && (this.isLocked = !0),
                            this.isScrolling = !0,
                            this.velocity = m - this.animatedScroll,
                            this.direction = Math.sign(this.velocity),
                            this.animatedScroll = m,
                            this.setScroll(this.scroll),
                            d && (this.targetScroll = m),
                            h && (r && (this.isLocked = !1),
                            requestAnimationFrame(()=>{
                                this.isScrolling = !1
                            }
                            ),
                            this.velocity = 0,
                            l == null || l()),
                            this.emit()
                        }
                    })
                }
            }
        }
        get rootElement() {
            return this.options.wrapper === window ? this.options.content : this.options.wrapper
        }
        get limit() {
            return this.isHorizontal ? this.dimensions.limit.x : this.dimensions.limit.y
        }
        get isHorizontal() {
            return this.options.orientation === "horizontal"
        }
        get actualScroll() {
            return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
        }
        get scroll() {
            return this.options.infinite ? function(e, t) {
                let i = e % t;
                return (t > 0 && i < 0 || t < 0 && i > 0) && (i += t),
                i
            }(this.animatedScroll, this.limit) : this.animatedScroll
        }
        get progress() {
            return this.limit === 0 ? 1 : this.scroll / this.limit
        }
        get isSmooth() {
            return this.__isSmooth
        }
        set isSmooth(e) {
            this.__isSmooth !== e && (this.rootElement.classList.toggle("lenis-smooth", e),
            this.__isSmooth = e)
        }
        get isScrolling() {
            return this.__isScrolling
        }
        set isScrolling(e) {
            this.__isScrolling !== e && (this.rootElement.classList.toggle("lenis-scrolling", e),
            this.__isScrolling = e)
        }
        get isStopped() {
            return this.__isStopped
        }
        set isStopped(e) {
            this.__isStopped !== e && (this.rootElement.classList.toggle("lenis-stopped", e),
            this.__isStopped = e)
        }
    }
    ;
    function on() {
        return on = Object.assign ? Object.assign.bind() : function(s) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i])
            }
            return s
        }
        ,
        on.apply(this, arguments)
    }
    var Vi = class {
        constructor({scrollElements: e, rootMargin: t="-1px -1px -1px -1px", IORaf: i}) {
            this.scrollElements = void 0,
            this.rootMargin = void 0,
            this.IORaf = void 0,
            this.observer = void 0,
            this.scrollElements = e,
            this.rootMargin = t,
            this.IORaf = i,
            this._init()
        }
        _init() {
            let e = {
                rootMargin: this.rootMargin
            }
              , t = i=>{
                i.forEach(r=>{
                    let n = this.scrollElements.find(a=>a.$el === r.target);
                    r.isIntersecting ? (n && (n.isAlreadyIntersected = !0),
                    this._setInview(r)) : n && n.isAlreadyIntersected && this._setOutOfView(r)
                }
                )
            }
            ;
            this.observer = new IntersectionObserver(t,e);
            for (let i of this.scrollElements) {
                let r = i.$el;
                this.observe(r)
            }
        }
        destroy() {
            this.observer.disconnect()
        }
        observe(e) {
            e && this.observer.observe(e)
        }
        unobserve(e) {
            e && this.observer.unobserve(e)
        }
        _setInview(e) {
            let t = this.scrollElements.find(i=>i.$el === e.target);
            this.IORaf && (t == null || t.setInteractivityOn()),
            !this.IORaf && (t == null || t.setInview())
        }
        _setOutOfView(e) {
            let t = this.scrollElements.find(i=>i.$el === e.target);
            this.IORaf && (t == null || t.setInteractivityOff()),
            !this.IORaf && (t == null || t.setOutOfView()),
            !(t != null && t.attributes.scrollRepeat) && !this.IORaf && this.unobserve(e.target)
        }
    }
    ;
    function qd(s, e, t) {
        return t < s ? s : t > e ? e : t
    }
    function zo(s, e, t, i, r) {
        let n = e - s
          , a = i - t;
        return t + ((r - s) / n * a || 0)
    }
    function Ud(s, e, t) {
        return zo(s, e, 0, 1, t)
    }
    function ko(s, e) {
        return s.reduce((t,i)=>Math.abs(i - e) < Math.abs(t - e) ? i : t)
    }
    var jd = "is-inview"
      , Kd = "--progress"
      , Zd = "onScrollProgress"
      , ln = class {
        constructor({$el: e, id: t, modularInstance: i, subscribeElementUpdateFn: r, unsubscribeElementUpdateFn: n, needRaf: a, scrollOrientation: o}) {
            var l, c, d, u, m;
            this.$el = void 0,
            this.id = void 0,
            this.needRaf = void 0,
            this.attributes = void 0,
            this.scrollOrientation = void 0,
            this.isAlreadyIntersected = void 0,
            this.intersection = void 0,
            this.metrics = void 0,
            this.currentScroll = void 0,
            this.translateValue = void 0,
            this.progress = void 0,
            this.lastProgress = void 0,
            this.modularInstance = void 0,
            this.progressModularModules = void 0,
            this.isInview = void 0,
            this.isInteractive = void 0,
            this.isInFold = void 0,
            this.isFirstResize = void 0,
            this.subscribeElementUpdateFn = void 0,
            this.unsubscribeElementUpdateFn = void 0,
            this.$el = e,
            this.id = t,
            this.needRaf = a,
            this.scrollOrientation = o,
            this.modularInstance = i,
            this.subscribeElementUpdateFn = r,
            this.unsubscribeElementUpdateFn = n,
            this.attributes = {
                scrollClass: (l = this.$el.dataset.scrollClass) != null ? l : jd,
                scrollOffset: (c = this.$el.dataset.scrollOffset) != null ? c : "0,0",
                scrollPosition: (d = this.$el.dataset.scrollPosition) != null ? d : "start,end",
                scrollModuleProgress: this.$el.dataset.scrollModuleProgress != null,
                scrollCssProgress: this.$el.dataset.scrollCssProgress != null,
                scrollEventProgress: (u = this.$el.dataset.scrollEventProgress) != null ? u : null,
                scrollSpeed: this.$el.dataset.scrollSpeed != null ? parseFloat(this.$el.dataset.scrollSpeed) : null,
                scrollRepeat: this.$el.dataset.scrollRepeat != null,
                scrollCall: (m = this.$el.dataset.scrollCall) != null ? m : null,
                scrollCallSelf: this.$el.dataset.scrollCallSelf != null,
                scrollIgnoreFold: this.$el.dataset.scrollIgnoreFold != null,
                scrollEnableTouchSpeed: this.$el.dataset.scrollEnableTouchSpeed != null
            },
            this.intersection = {
                start: 0,
                end: 0
            },
            this.metrics = {
                offsetStart: 0,
                offsetEnd: 0,
                bcr: {}
            },
            this.currentScroll = this.scrollOrientation === "vertical" ? window.scrollY : window.scrollX,
            this.translateValue = 0,
            this.progress = 0,
            this.lastProgress = null,
            this.progressModularModules = [],
            this.isInview = !1,
            this.isInteractive = !1,
            this.isAlreadyIntersected = !1,
            this.isInFold = !1,
            this.isFirstResize = !0,
            this._init()
        }
        _init() {
            this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(),
            this._resize())
        }
        onResize({currentScroll: e}) {
            this.currentScroll = e,
            this._resize()
        }
        onRender({currentScroll: e, smooth: t}) {
            let i = this.scrollOrientation === "vertical" ? window.innerHeight : window.innerWidth;
            if (this.currentScroll = e,
            this._computeProgress(),
            this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
                if (!this.attributes.scrollEnableTouchSpeed && !t)
                    this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"),
                    this.translateValue = 0;
                else {
                    if (this.isInFold) {
                        let r = Math.max(0, this.progress);
                        this.translateValue = r * i * this.attributes.scrollSpeed * -1
                    } else {
                        let r = zo(0, 1, -1, 1, this.progress);
                        this.translateValue = r * i * this.attributes.scrollSpeed * -1
                    }
                    this.$el.style.transform = this.scrollOrientation === "vertical" ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`
                }
        }
        setInview() {
            if (this.isInview)
                return;
            this.isInview = !0,
            this.$el.classList.add(this.attributes.scrollClass);
            let e = "enter"
              , t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall(e, t)
        }
        setOutOfView() {
            if (!(this.isInview && this.attributes.scrollRepeat))
                return;
            this.isInview = !1,
            this.$el.classList.remove(this.attributes.scrollClass);
            let e = "leave"
              , t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall(e, t)
        }
        setInteractivityOn() {
            this.isInteractive || (this.isInteractive = !0,
            this.subscribeElementUpdateFn(this))
        }
        setInteractivityOff() {
            this.isInteractive && (this.isInteractive = !1,
            this.unsubscribeElementUpdateFn(this),
            this.lastProgress != null && this._computeProgress(ko([0, 1], this.lastProgress)))
        }
        _resize() {
            this.metrics.bcr = this.$el.getBoundingClientRect(),
            this._computeMetrics(),
            this._computeIntersection(),
            this.isFirstResize && (this.isFirstResize = !1,
            this.isInFold && this.setInview())
        }
        _computeMetrics() {
            let {top: e, left: t, height: i, width: r} = this.metrics.bcr
              , n = this.scrollOrientation === "vertical" ? window.innerHeight : window.innerWidth
              , a = this.scrollOrientation === "vertical" ? e : t
              , o = this.scrollOrientation === "vertical" ? i : r;
            this.metrics.offsetStart = this.currentScroll + a - this.translateValue,
            this.metrics.offsetEnd = this.metrics.offsetStart + o,
            this.metrics.offsetStart < n && !this.attributes.scrollIgnoreFold ? this.isInFold = !0 : this.isInFold = !1
        }
        _computeIntersection() {
            let e = this.scrollOrientation === "vertical" ? window.innerHeight : window.innerWidth
              , t = this.scrollOrientation === "vertical" ? this.metrics.bcr.height : this.metrics.bcr.width
              , i = this.attributes.scrollOffset.split(",")
              , r = i[0] != null ? i[0].trim() : "0"
              , n = i[1] != null ? i[1].trim() : "0"
              , a = this.attributes.scrollPosition.split(",")
              , o = a[0] != null ? a[0].trim() : "start"
              , l = a[1] != null ? a[1].trim() : "end"
              , c = r.includes("%") ? e * parseInt(r.replace("%", "").trim()) * .01 : parseInt(r)
              , d = n.includes("%") ? e * parseInt(n.replace("%", "").trim()) * .01 : parseInt(n);
            switch (this.isInFold && (o = "fold"),
            o) {
            case "start":
                this.intersection.start = this.metrics.offsetStart - e + c;
                break;
            case "middle":
                this.intersection.start = this.metrics.offsetStart - e + c + t * .5;
                break;
            case "end":
                this.intersection.start = this.metrics.offsetStart - e + c + t;
                break;
            case "fold":
                this.intersection.start = 0;
                break;
            default:
                this.intersection.start = this.metrics.offsetStart - e + c;
                break
            }
            switch (l) {
            case "start":
                this.intersection.end = this.metrics.offsetStart - d;
                break;
            case "middle":
                this.intersection.end = this.metrics.offsetStart - d + t * .5;
                break;
            case "end":
                this.intersection.end = this.metrics.offsetStart - d + t;
                break;
            default:
                this.intersection.end = this.metrics.offsetStart - d + t;
                break
            }
            if (this.intersection.end <= this.intersection.start)
                switch (l) {
                case "start":
                    this.intersection.end = this.intersection.start + 1;
                    break;
                case "middle":
                    this.intersection.end = this.intersection.start + t * .5;
                    break;
                case "end":
                    this.intersection.end = this.intersection.start + t;
                    break;
                default:
                    this.intersection.end = this.intersection.start + 1;
                    break
                }
        }
        _computeProgress(e) {
            let t = e != null ? e : qd(0, 1, Ud(this.intersection.start, this.intersection.end, this.currentScroll));
            if (this.progress = t,
            t != this.lastProgress) {
                if (this.lastProgress = t,
                this.attributes.scrollCssProgress && this._setCssProgress(t),
                this.attributes.scrollEventProgress && this._setCustomEventProgress(t),
                this.attributes.scrollModuleProgress)
                    for (let i of this.progressModularModules)
                        this.modularInstance && this.modularInstance.call(Zd, t, i.moduleName, i.moduleId);
                t > 0 && t < 1 && this.setInview(),
                t === 0 && this.setOutOfView(),
                t === 1 && this.setOutOfView()
            }
        }
        _setCssProgress(e=0) {
            this.$el.style.setProperty(Kd, e.toString())
        }
        _setCustomEventProgress(e=0) {
            let t = this.attributes.scrollEventProgress;
            if (!t)
                return;
            let i = new CustomEvent(t,{
                detail: {
                    target: this.$el,
                    progress: e
                }
            });
            window.dispatchEvent(i)
        }
        _getProgressModularModules() {
            if (!this.modularInstance)
                return;
            let e = Object.keys(this.$el.dataset).filter(i=>i.includes("module"))
              , t = Object.entries(this.modularInstance.modules);
            if (e.length)
                for (let i of e) {
                    let r = this.$el.dataset[i];
                    if (!r)
                        return;
                    for (let n of t) {
                        let[a,o] = n;
                        r in o && this.progressModularModules.push({
                            moduleName: a,
                            moduleId: r
                        })
                    }
                }
        }
        _getScrollCallFrom() {
            let e = ko([this.intersection.start, this.intersection.end], this.currentScroll);
            return this.intersection.start === e ? "start" : "end"
        }
        _dispatchCall(e, t) {
            var i, r;
            let n = (i = this.attributes.scrollCall) == null ? void 0 : i.split(",")
              , a = (r = this.attributes) == null ? void 0 : r.scrollCallSelf;
            if (n && n.length > 1) {
                var o;
                let[l,c,d] = n, u;
                a ? u = this.$el.dataset[`module${c.trim()}`] : u = d,
                this.modularInstance && this.modularInstance.call(l.trim(), {
                    target: this.$el,
                    way: e,
                    from: t
                }, c.trim(), (o = u) == null ? void 0 : o.trim())
            } else if (n) {
                let[l] = n
                  , c = new CustomEvent(l,{
                    detail: {
                        target: this.$el,
                        way: e,
                        from: t
                    }
                });
                window.dispatchEvent(c)
            }
        }
    }
      , Qd = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"]
      , Jd = "-1px -1px -1px -1px"
      , eu = "100% 100% 100% 100%"
      , cn = class {
        constructor({$el: e, modularInstance: t, triggerRootMargin: i, rafRootMargin: r, scrollOrientation: n}) {
            if (this.$scrollContainer = void 0,
            this.modularInstance = void 0,
            this.triggerRootMargin = void 0,
            this.rafRootMargin = void 0,
            this.scrollElements = void 0,
            this.triggeredScrollElements = void 0,
            this.RAFScrollElements = void 0,
            this.scrollElementsToUpdate = void 0,
            this.IOTriggerInstance = void 0,
            this.IORafInstance = void 0,
            this.scrollOrientation = void 0,
            !e) {
                console.error("Please provide a DOM Element as scrollContainer");
                return
            }
            this.$scrollContainer = e,
            this.modularInstance = t,
            this.scrollOrientation = n,
            this.triggerRootMargin = i != null ? i : Jd,
            this.rafRootMargin = r != null ? r : eu,
            this.scrollElements = [],
            this.triggeredScrollElements = [],
            this.RAFScrollElements = [],
            this.scrollElementsToUpdate = [],
            this._init()
        }
        _init() {
            let e = this.$scrollContainer.querySelectorAll("[data-scroll]")
              , t = Array.from(e);
            this._subscribeScrollElements(t),
            this.IOTriggerInstance = new Vi({
                scrollElements: [...this.triggeredScrollElements],
                rootMargin: this.triggerRootMargin,
                IORaf: !1
            }),
            this.IORafInstance = new Vi({
                scrollElements: [...this.RAFScrollElements],
                rootMargin: this.rafRootMargin,
                IORaf: !0
            })
        }
        destroy() {
            this.IOTriggerInstance.destroy(),
            this.IORafInstance.destroy(),
            this._unsubscribeAllScrollElements()
        }
        onResize({currentScroll: e}) {
            for (let t of this.RAFScrollElements)
                t.onResize({
                    currentScroll: e
                })
        }
        onRender({currentScroll: e, smooth: t}) {
            for (let i of this.scrollElementsToUpdate)
                i.onRender({
                    currentScroll: e,
                    smooth: t
                })
        }
        removeScrollElements(e) {
            let t = e.querySelectorAll("[data-scroll]");
            if (t.length) {
                for (let i = 0; i < this.triggeredScrollElements.length; i++) {
                    let r = this.triggeredScrollElements[i];
                    Array.from(t).indexOf(r.$el) > -1 && (this.IOTriggerInstance.unobserve(r.$el),
                    this.triggeredScrollElements.splice(i, 1))
                }
                for (let i = 0; i < this.RAFScrollElements.length; i++) {
                    let r = this.RAFScrollElements[i];
                    Array.from(t).indexOf(r.$el) > -1 && (this.IORafInstance.unobserve(r.$el),
                    this.RAFScrollElements.splice(i, 1))
                }
                t.forEach(i=>{
                    let r = this.scrollElementsToUpdate.find(a=>a.$el === i)
                      , n = this.scrollElements.find(a=>a.$el === i);
                    r && this._unsubscribeElementUpdate(r),
                    n && (this.scrollElements = this.scrollElements.filter(a=>a.id != n.id))
                }
                )
            }
        }
        addScrollElements(e) {
            let t = e.querySelectorAll("[data-scroll]")
              , i = [];
            this.scrollElements.forEach(o=>{
                i.push(o.id)
            }
            );
            let n = Math.max(...i) + 1
              , a = Array.from(t);
            this._subscribeScrollElements(a, n, !0)
        }
        _subscribeScrollElements(e, t=0, i=!1) {
            for (let r = 0; r < e.length; r++) {
                let n = e[r]
                  , a = this._checkRafNeeded(n)
                  , o = new ln({
                    $el: n,
                    id: t + r,
                    scrollOrientation: this.scrollOrientation,
                    modularInstance: this.modularInstance,
                    subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
                    unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
                    needRaf: a
                });
                this.scrollElements.push(o),
                a ? (this.RAFScrollElements.push(o),
                i && (this.IORafInstance.scrollElements.push(o),
                this.IORafInstance.observe(o.$el))) : (this.triggeredScrollElements.push(o),
                i && (this.IOTriggerInstance.scrollElements.push(o),
                this.IOTriggerInstance.observe(o.$el)))
            }
        }
        _unsubscribeAllScrollElements() {
            this.scrollElements = [],
            this.RAFScrollElements = [],
            this.triggeredScrollElements = [],
            this.scrollElementsToUpdate = []
        }
        _subscribeElementUpdate(e) {
            this.scrollElementsToUpdate.push(e)
        }
        _unsubscribeElementUpdate(e) {
            this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(t=>t.id != e.id)
        }
        _checkRafNeeded(e) {
            let t = [...Qd]
              , i = r=>{
                t = t.filter(n=>n != r)
            }
            ;
            if (e.dataset.scrollOffset) {
                if (e.dataset.scrollOffset.split(",").map(n=>n.replace("%", "").trim()).join(",") != "0,0")
                    return !0;
                i("scrollOffset")
            } else
                i("scrollOffset");
            if (e.dataset.scrollPosition) {
                if (e.dataset.scrollPosition.trim() != "top,bottom")
                    return !0;
                i("scrollPosition")
            } else
                i("scrollPosition");
            if (e.dataset.scrollSpeed && !isNaN(parseFloat(e.dataset.scrollSpeed)))
                return !0;
            i("scrollSpeed");
            for (let r of t)
                if (r in e.dataset)
                    return !0;
            return !1
        }
    }
      , dn = class {
        constructor({resizeElements: e, resizeCallback: t=()=>{}
        }) {
            this.$resizeElements = void 0,
            this.isFirstObserve = void 0,
            this.observer = void 0,
            this.resizeCallback = void 0,
            this.$resizeElements = e,
            this.resizeCallback = t,
            this.isFirstObserve = !0,
            this._init()
        }
        _init() {
            let e = t=>{
                var i;
                !this.isFirstObserve && ((i = this.resizeCallback) == null || i.call(this)),
                this.isFirstObserve = !1
            }
            ;
            this.observer = new ResizeObserver(e);
            for (let t of this.$resizeElements)
                this.observer.observe(t)
        }
        destroy() {
            this.observer.disconnect()
        }
    }
      , Do = {
        wrapper: window,
        content: document.documentElement,
        lerp: .1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: !0,
        smoothTouch: !1,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: !0,
        easing: s=>Math.min(1, 1.001 - Math.pow(2, -10 * s))
    }
      , Wi = class {
        constructor({lenisOptions: e={}, modularInstance: t, triggerRootMargin: i, rafRootMargin: r, autoResize: n=!0, autoStart: a=!0, scrollCallback: o=()=>{}
        , initCustomTicker: l, destroyCustomTicker: c}={}) {
            this.rafPlaying = void 0,
            this.lenisInstance = void 0,
            this.coreInstance = void 0,
            this.lenisOptions = void 0,
            this.modularInstance = void 0,
            this.triggerRootMargin = void 0,
            this.rafRootMargin = void 0,
            this.rafInstance = void 0,
            this.autoResize = void 0,
            this.autoStart = void 0,
            this.ROInstance = void 0,
            this.initCustomTicker = void 0,
            this.destroyCustomTicker = void 0,
            this._onRenderBind = void 0,
            this._onResizeBind = void 0,
            this._onScrollToBind = void 0,
            this.lenisOptions = on({}, Do, e),
            Object.assign(this, {
                lenisOptions: e,
                modularInstance: t,
                triggerRootMargin: i,
                rafRootMargin: r,
                autoResize: n,
                autoStart: a,
                scrollCallback: o,
                initCustomTicker: l,
                destroyCustomTicker: c
            }),
            this._onRenderBind = this._onRender.bind(this),
            this._onScrollToBind = this._onScrollTo.bind(this),
            this._onResizeBind = this._onResize.bind(this),
            this.rafPlaying = !1,
            this._init()
        }
        _init() {
            var e;
            this.lenisInstance = new Gi({
                wrapper: this.lenisOptions.wrapper,
                content: this.lenisOptions.content,
                lerp: this.lenisOptions.lerp,
                duration: this.lenisOptions.duration,
                orientation: this.lenisOptions.orientation,
                gestureOrientation: this.lenisOptions.gestureOrientation,
                smoothWheel: this.lenisOptions.smoothWheel,
                smoothTouch: this.lenisOptions.smoothTouch,
                wheelMultiplier: this.lenisOptions.wheelMultiplier,
                touchMultiplier: this.lenisOptions.touchMultiplier,
                normalizeWheel: this.lenisOptions.normalizeWheel,
                easing: this.lenisOptions.easing
            }),
            (e = this.lenisInstance) == null || e.on("scroll", this.scrollCallback),
            document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation),
            requestAnimationFrame(()=>{
                this.coreInstance = new cn({
                    $el: this.lenisInstance.rootElement,
                    modularInstance: this.modularInstance,
                    triggerRootMargin: this.triggerRootMargin,
                    rafRootMargin: this.rafRootMargin,
                    scrollOrientation: this.lenisInstance.options.orientation
                }),
                this._bindEvents(),
                this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."),
                this.autoStart && this.start()
            }
            )
        }
        destroy() {
            this.stop(),
            this._unbindEvents(),
            this.lenisInstance.destroy(),
            this.coreInstance.destroy()
        }
        _bindEvents() {
            this._bindScrollToEvents(),
            this.autoResize && ("ResizeObserver"in window ? this.ROInstance = new dn({
                resizeElements: [document.body],
                resizeCallback: this._onResizeBind
            }) : window.addEventListener("resize", this._onResizeBind))
        }
        _unbindEvents() {
            this._unbindScrollToEvents(),
            this.autoResize && ("ResizeObserver"in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind))
        }
        _bindScrollToEvents(e) {
            let t = e || this.lenisInstance.rootElement
              , i = t == null ? void 0 : t.querySelectorAll("[data-scroll-to]");
            i != null && i.length && i.forEach(r=>{
                r.addEventListener("click", this._onScrollToBind, !1)
            }
            )
        }
        _unbindScrollToEvents(e) {
            let t = e || this.lenisInstance.rootElement
              , i = t == null ? void 0 : t.querySelectorAll("[data-scroll-to]");
            i != null && i.length && i.forEach(r=>{
                r.removeEventListener("click", this._onScrollToBind, !1)
            }
            )
        }
        _onResize() {
            requestAnimationFrame(()=>{
                var e;
                (e = this.coreInstance) == null || e.onResize({
                    currentScroll: this.lenisInstance.scroll
                })
            }
            )
        }
        _onRender() {
            var e, t;
            (e = this.lenisInstance) == null || e.raf(Date.now()),
            (t = this.coreInstance) == null || t.onRender({
                currentScroll: this.lenisInstance.scroll,
                smooth: this.lenisInstance.isSmooth
            })
        }
        _onScrollTo(e) {
            var t;
            e.preventDefault();
            let i = (t = e.currentTarget) != null ? t : null;
            if (!i)
                return;
            let r = i.getAttribute("data-scroll-to-href") || i.getAttribute("href")
              , n = i.getAttribute("data-scroll-to-offset") || 0
              , a = i.getAttribute("data-scroll-to-duration") || this.lenisOptions.duration || Do.duration;
            r && this.scrollTo(r, {
                offset: typeof n == "string" ? parseInt(n) : n,
                duration: typeof a == "string" ? parseInt(a) : a
            })
        }
        start() {
            this.rafPlaying || (this.rafPlaying = !0,
            this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf())
        }
        stop() {
            this.rafPlaying && (this.rafPlaying = !1,
            this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance))
        }
        removeScrollElements(e) {
            var t;
            if (!e) {
                console.error("Please provide a DOM Element as $oldContainer");
                return
            }
            this._unbindScrollToEvents(e),
            (t = this.coreInstance) == null || t.removeScrollElements(e)
        }
        addScrollElements(e) {
            var t;
            if (!e) {
                console.error("Please provide a DOM Element as $newContainer");
                return
            }
            (t = this.coreInstance) == null || t.addScrollElements(e),
            requestAnimationFrame(()=>{
                this._bindScrollToEvents(e)
            }
            )
        }
        resize() {
            this._onResizeBind()
        }
        scrollTo(e, t) {
            var i;
            (i = this.lenisInstance) == null || i.scrollTo(e, {
                offset: t == null ? void 0 : t.offset,
                lerp: t == null ? void 0 : t.lerp,
                duration: t == null ? void 0 : t.duration,
                immediate: t == null ? void 0 : t.immediate,
                lock: t == null ? void 0 : t.lock,
                force: t == null ? void 0 : t.force,
                easing: t == null ? void 0 : t.easing,
                onComplete: t == null ? void 0 : t.onComplete
            })
        }
        _raf() {
            this._onRenderBind(),
            this.rafInstance = requestAnimationFrame(()=>this._raf())
        }
    }
    ;
    var Yi = class extends B {
        constructor(s) {
            super(s),
            history.scrollRestoration && (history.scrollRestoration = "manual",
            window.scrollTo(0, 0)),
            this.onResizeBind = this.onResize.bind(this),
            this.onScrollBind = this.onScroll.bind(this),
            this.scrollDirection = 1,
            this.lastProgress = 0
        }
        init() {
            this.bindEvents(),
            this.scroll = new Wi({
                lenisOptions: {
                    duration: 1,
                    easing: s=>Math.min(1, 1.001 - Math.pow(2, -10 * s))
                },
                triggerRootMargin: "-1px -5% -1px -5%",
                scrollCallback: this.onScrollBind,
                modularInstance: this
            })
        }
        onScroll({scroll: s, progress: e}) {
            e > this.lastProgress ? this.scrollDirection != 1 && (this.scrollDirection = 1) : this.scrollDirection != -1 && (this.scrollDirection = -1),
            this.scrollDirection < 0 ? J.classList.add("is-scrolling-up") : J.classList.remove("is-scrolling-up"),
            s > 100 ? J.classList.add("has-scrolled") : J.classList.remove("has-scrolled"),
            this.lastProgress = e
        }
        onResize() {
            var s;
            (s = this.scroll) == null || s.resize()
        }
        scrollTo(s) {
            var i;
            let {target: e, options: t} = s;
            (i = this.scroll) == null || i.scrollTo(e, t)
        }
        lazyLoad(s) {
            fo(s.target)
        }
        stop() {
            var s;
            (s = this.scroll) == null || s.stop()
        }
        start() {
            var s;
            (s = this.scroll) == null || s.start()
        }
        addScrollElements(s) {
            var e;
            (e = this.scroll) == null || e.addScrollElements(s)
        }
        removeScrollElements(s) {
            var e;
            (e = this.scroll) == null || e.removeScrollElements(s)
        }
        bindEvents() {
            window.addEventListener("resize", this.onResizeBind)
        }
        unbindEvents() {
            window.removeEventListener("resize", this.onResizeBind)
        }
        destroy() {
            var s;
            super.destroy(),
            (s = this.scroll) == null || s.destroy(),
            this.unbindEvents()
        }
    }
    ;
    var Xi = class extends B {
        constructor(s) {
            super(s),
            this.events = {
                click: "onClick"
            }
        }
        init() {
            this.$content = document.querySelector("#content"),
            this.$focusableElements = co(this.$content)
        }
        onClick(s) {
            var e;
            s.preventDefault(),
            this.$content && (this.$content && ((e = this.$focusableElements) != null && e.length) ? this.call("scrollTo", {
                target: this.$content,
                options: {
                    duration: .3,
                    callback: ()=>{
                        var t;
                        (t = this.$focusableElements[0]) == null || t.focus()
                    }
                }
            }, "Scroll") : this.call("scrollTo", {
                target: this.$content,
                options: {
                    duration: .3
                }
            }, "Scroll"))
        }
    }
    ;
    var Go = rr(Ro(), 1);
    var Fo = "fonts"in document;
    function tu(s, e) {
        for (let[t,i] of Object.entries(e))
            switch (t) {
            case "family":
                {
                    if (qi(s[t]) !== i)
                        return !1;
                    break
                }
            case "weight":
                {
                    if (s[t] != i)
                        return !1;
                    break
                }
            default:
                {
                    if (s[t] !== i)
                        return !1;
                    break
                }
            }
        return !0
    }
    function iu(s, e) {
        let t = qi(s.family);
        return qi(t) === e || e.endsWith(qi(t)) && (e.match(s.weight) || e.match(s.style)),
        !0
    }
    function ru(s) {
        let e = [];
        for (let t of document.fonts)
            tu(t, s) && e.push(t);
        return e
    }
    function su(s) {
        let e = [];
        for (let t of document.fonts)
            iu(t, s) && e.push(t);
        return e
    }
    function No(s) {
        Array.isArray(s) || (s = [s]);
        let e = new Set;
        return s.forEach(t=>{
            if (t)
                switch (typeof t) {
                case "string":
                    e.add(...su(t));
                    return;
                case "object":
                    e.add(...ru(t));
                    return
                }
            throw new TypeError("Expected font query to be font shorthand or font reference")
        }
        ),
        [...e]
    }
    function Bo(s, e=!1) {
        return Fe(this, null, function*() {
            var t;
            if (((t = s.size) != null ? t : s.length) === 0)
                throw new TypeError("Expected at least one font");
            return yield nu([...s], e)
        })
    }
    function $o(s) {
        return Fe(this, null, function*() {
            return yield(s.status === "unloaded" ? s.load() : s.loaded).then(e=>e, e=>s)
        })
    }
    function nu(s, e=!1) {
        return Fe(this, null, function*() {
            e && console.group("[loadFonts:API]", s.length, "/", document.fonts.size);
            let t = [];
            for (let i of s)
                i instanceof FontFace ? (document.fonts.has(i) || document.fonts.add(i),
                t.push($o(i))) : t.push(...No(i).map(r=>$o(r)));
            return e && console.groupEnd(),
            yield Promise.all(t)
        })
    }
    function qi(s) {
        return s.replace(/['"]+/g, "")
    }
    function Ho(s) {
        return Fe(this, null, function*() {
            let e = No(s);
            return yield Promise.all(e.map(t=>t.loaded))
        })
    }
    var Ui = class extends B {
        constructor(s) {
            super(s),
            this.$el = this.el,
            this.splitType = this.getData("type") ? this.getData("type") : "chars"
        }
        init() {
            Ho(hn).then(s=>this.onFontsLoaded(s))
        }
        destroy() {
            super.destroy()
        }
        onFontsLoaded(s) {
            this.split();
            let e = "-random-"
              , t = Math.floor(Math.random() * 5) + 1
              , i = e + t;
            this.$el.classList.add(i)
        }
        split() {
            (0,
            Go.default)({
                target: this.$el,
                by: this.splitType
            })
        }
    }
    ;
    var ji = class extends B {
        constructor(s) {
            super(s),
            this.$el = this.el,
            this.$sections = Array.from(this.$("section"))
        }
        init() {}
        destroy() {
            super.destroy()
        }
        onSectionBoundary(s) {
            try {
                if (s.way == "enter") {
                    let t = s.target.id
                      , i = this.$sections.find(r=>r.getAttribute("href") == "#" + t);
                    this.$sections.forEach(r=>{
                        r.classList.remove("is-active")
                    }
                    ),
                    i.classList.add("is-active")
                }
            } catch (e) {
                console.error(e)
            }
        }
        onComponentBoundary(s) {
            s.way == "enter" ? this.$el.classList.add("is-active") : this.$el.classList.remove("is-active")
        }
    }
    ;
    var xe = rr(Uo(), 1)
      , Qi = class extends B {
        constructor(s) {
            super(s),
            this.easings = {
                power1In: (0,
                xe.default)(.55, .085, .68, .53),
                power1Out: (0,
                xe.default)(.25, .46, .45, .94),
                power1InOut: (0,
                xe.default)(.455, .03, .515, .955),
                power2In: (0,
                xe.default)(.55, .055, .675, .19),
                power2Out: (0,
                xe.default)(.215, .61, .355, 1),
                power2InOut: (0,
                xe.default)(.645, .045, .355, 1),
                power3In: (0,
                xe.default)(.895, .03, .685, .22),
                power3Out: (0,
                xe.default)(.165, .84, .44, 1),
                power3InOut: (0,
                xe.default)(.77, 0, .175, 1),
                power4In: (0,
                xe.default)(.755, .05, .855, .06),
                power4Out: (0,
                xe.default)(.23, 1, .32, 1),
                power4InOut: (0,
                xe.default)(.86, 0, .07, 1),
                linear: (0,
                xe.default)(.26, .25, .75, .72)
            },
            this.easingType = this.getData("type") ? this.getData("type") : "power2InOut"
        }
        init() {}
        destroy() {
            super.destroy()
        }
        onScrollProgress(s) {
            this.smoothProgress = this.easings[this.easingType](s),
            this.computeProgress()
        }
        computeProgress() {
            this.el.style.setProperty("--smooth-progress", this.smoothProgress)
        }
    }
    ;
    var Ji = class extends B {
        constructor(s) {
            super(s)
        }
        init() {
            this.$video = this.$("video")[0],
            this.initializeEvents()
        }
        initializeEvents() {
            this.canPlayBind = this.onCanPlay.bind(this),
            this.$video.addEventListener("canplay", this.canPlayBind)
        }
        onCanPlay() {
            this.$video.classList.add("is-canplay")
        }
        toggle(s) {
            let {target: e, way: t} = s
              , i = e.querySelector("video");
            t === "enter" ? i.paused && i.play() : i.paused || i.pause()
        }
        destroy() {
            super.destroy(),
            this.$video.removeEventListener("canplay", this.canPlayBind)
        }
    }
    ;
    var el = rr(Ko(), 1);
    var tr;
    Fe(void 0, null, function*() {
        if (oe.IS_DEV) {
            let s = yield Promise.resolve().then(()=>(Jo(),
            Qo));
            tr = s == null ? void 0 : s.gridHelper
        }
    });
    function tl() {
        (0,
        el.default)(),
        tr == null || tr();
        let s = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
        window.isMobile = s,
        window.isMobile && J.classList.add("is-mobile"),
        ki()
    }
    var il = new Pn({
        modules: mn
    });
    window.onload = s=>{
        let e = document.getElementById("theme-app-css");
        e ? e.isLoaded ? rl() : e.addEventListener("load", t=>{
            rl()
        }
        ) : console.warn('The "theme-app-css" stylesheet not found')
    }
    ;
    var hn = [{
        family: "The Neue Black",
        style: "normal",
        weight: "normal"
    }, {
        family: "Neue Montreal",
        style: "normal",
        weight: "normal"
    }, {
        family: "PP Supply Mono",
        style: "normal",
        weight: "normal"
    }];
    function rl() {
        tl(),
        il.init(il),
        setTimeout(()=>{
            J.classList.add("is-first-loaded")
        }
        , 50),
        setTimeout(()=>{
            J.classList.add("is-loaded", "is-ready"),
            J.classList.remove("is-loading")
        }
        , 900),
        Fo && Bo(hn, oe.IS_DEV).then(s=>{
            J.classList.add("fonts-loaded"),
            oe.IS_DEV && (console.group("Eager fonts loaded!", s.length, "/", document.fonts.size),
            console.group("State of eager fonts:"),
            s.forEach(e=>console.log(e.family, e.style, e.weight, e.status)),
            console.groupEnd(),
            console.group("State of all fonts:"),
            document.fonts.forEach(e=>console.log(e.family, e.style, e.weight, e.status)),
            console.groupEnd())
        }
        )
    }
}
)();
/