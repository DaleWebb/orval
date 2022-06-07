'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Bi = Object.create;
var Vt = Object.defineProperty,
  _i = Object.defineProperties,
  Qi = Object.getOwnPropertyDescriptor,
  zi = Object.getOwnPropertyDescriptors,
  Ki = Object.getOwnPropertyNames,
  ct = Object.getOwnPropertySymbols,
  Li = Object.getPrototypeOf,
  Nt = Object.prototype.hasOwnProperty,
  dn = Object.prototype.propertyIsEnumerable;
var gn = (e, t, r) =>
    t in e
      ? Vt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  $ = (e, t) => {
    for (var r in t || (t = {})) Nt.call(t, r) && gn(e, r, t[r]);
    if (ct) for (var r of ct(t)) dn.call(t, r) && gn(e, r, t[r]);
    return e;
  },
  T = (e, t) => _i(e, zi(t));
var W = ((e) =>
  typeof require != 'undefined'
    ? require
    : typeof Proxy != 'undefined'
    ? new Proxy(e, {
        get: (t, r) => (typeof require != 'undefined' ? require : t)[r],
      })
    : e)(function (e) {
  if (typeof require != 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var we = (e, t) => {
  var r = {};
  for (var n in e) Nt.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && ct)
    for (var n of ct(e)) t.indexOf(n) < 0 && dn.call(e, n) && (r[n] = e[n]);
  return r;
};
var Hi = (e, t) => () => (e && (t = e((e = 0))), t);
var M = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Yi = (e, t, r, n) => {
  if ((t && typeof t == 'object') || typeof t == 'function')
    for (let o of Ki(t))
      !Nt.call(e, o) &&
        o !== r &&
        Vt(e, o, {
          get: () => t[o],
          enumerable: !(n = Qi(t, o)) || n.enumerable,
        });
  return e;
};
var ye = (e, t, r) => (
  (r = e != null ? Bi(Li(e)) : {}),
  Yi(
    t || !e || !e.__esModule
      ? Vt(r, 'default', { value: e, enumerable: !0 })
      : r,
    e,
  )
);
var u = Hi(() => {});
var ur = M((GO, Ho) => {
  u();
  var oc = Object.prototype;
  function sc(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || oc;
    return e === r;
  }
  Ho.exports = sc;
});
var Jo = M((CO, Yo) => {
  u();
  function ic(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  Yo.exports = ic;
});
var Zo = M((DO, Xo) => {
  u();
  var ac = Jo(),
    pc = ac(Object.keys, Object);
  Xo.exports = pc;
});
var ts = M((kO, es) => {
  u();
  var cc = ur(),
    mc = Zo(),
    uc = Object.prototype,
    lc = uc.hasOwnProperty;
  function fc(e) {
    if (!cc(e)) return mc(e);
    var t = [];
    for (var r in Object(e)) lc.call(e, r) && r != 'constructor' && t.push(r);
    return t;
  }
  es.exports = fc;
});
var lr = M((qO, rs) => {
  u();
  var gc =
    typeof global == 'object' && global && global.Object === Object && global;
  rs.exports = gc;
});
var de = M((FO, ns) => {
  u();
  var dc = lr(),
    yc = typeof self == 'object' && self && self.Object === Object && self,
    bc = dc || yc || Function('return this')();
  ns.exports = bc;
});
var fr = M((VO, os) => {
  u();
  var Oc = de(),
    hc = Oc.Symbol;
  os.exports = hc;
});
var ps = M((NO, as) => {
  u();
  var ss = fr(),
    is = Object.prototype,
    $c = is.hasOwnProperty,
    xc = is.toString,
    et = ss ? ss.toStringTag : void 0;
  function Sc(e) {
    var t = $c.call(e, et),
      r = e[et];
    try {
      e[et] = void 0;
      var n = !0;
    } catch (e2) {}
    var o = xc.call(e);
    return n && (t ? (e[et] = r) : delete e[et]), o;
  }
  as.exports = Sc;
});
var ms = M((UO, cs) => {
  u();
  var wc = Object.prototype,
    Tc = wc.toString;
  function Rc(e) {
    return Tc.call(e);
  }
  cs.exports = Rc;
});
var tt = M((WO, fs) => {
  u();
  var us = fr(),
    jc = ps(),
    Pc = ms(),
    Ec = '[object Null]',
    Mc = '[object Undefined]',
    ls = us ? us.toStringTag : void 0;
  function Ic(e) {
    return e == null
      ? e === void 0
        ? Mc
        : Ec
      : ls && ls in Object(e)
      ? jc(e)
      : Pc(e);
  }
  fs.exports = Ic;
});
var gr = M((BO, gs) => {
  u();
  function Ac(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  gs.exports = Ac;
});
var dr = M((_O, ds) => {
  u();
  var vc = tt(),
    Gc = gr(),
    Cc = '[object AsyncFunction]',
    Dc = '[object Function]',
    kc = '[object GeneratorFunction]',
    qc = '[object Proxy]';
  function Fc(e) {
    if (!Gc(e)) return !1;
    var t = vc(e);
    return t == Dc || t == kc || t == Cc || t == qc;
  }
  ds.exports = Fc;
});
var bs = M((QO, ys) => {
  u();
  var Vc = de(),
    Nc = Vc['__core-js_shared__'];
  ys.exports = Nc;
});
var $s = M((zO, hs) => {
  u();
  var yr = bs(),
    Os = (function () {
      var e = /[^.]+$/.exec((yr && yr.keys && yr.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function Uc(e) {
    return !!Os && Os in e;
  }
  hs.exports = Uc;
});
var br = M((KO, xs) => {
  u();
  var Wc = Function.prototype,
    Bc = Wc.toString;
  function _c(e) {
    if (e != null) {
      try {
        return Bc.call(e);
      } catch (e3) {}
      try {
        return e + '';
      } catch (e4) {}
    }
    return '';
  }
  xs.exports = _c;
});
var ws = M((LO, Ss) => {
  u();
  var Qc = dr(),
    zc = $s(),
    Kc = gr(),
    Lc = br(),
    Hc = /[\\^$.*+?()[\]{}|]/g,
    Yc = /^\[object .+?Constructor\]$/,
    Jc = Function.prototype,
    Xc = Object.prototype,
    Zc = Jc.toString,
    em = Xc.hasOwnProperty,
    tm = RegExp(
      '^' +
        Zc.call(em)
          .replace(Hc, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function rm(e) {
    if (!Kc(e) || zc(e)) return !1;
    var t = Qc(e) ? tm : Yc;
    return t.test(Lc(e));
  }
  Ss.exports = rm;
});
var Rs = M((HO, Ts) => {
  u();
  function nm(e, t) {
    return e == null ? void 0 : e[t];
  }
  Ts.exports = nm;
});
var Ve = M((YO, js) => {
  u();
  var om = ws(),
    sm = Rs();
  function im(e, t) {
    var r = sm(e, t);
    return om(r) ? r : void 0;
  }
  js.exports = im;
});
var Es = M((JO, Ps) => {
  u();
  var am = Ve(),
    pm = de(),
    cm = am(pm, 'DataView');
  Ps.exports = cm;
});
var Is = M((XO, Ms) => {
  u();
  var mm = Ve(),
    um = de(),
    lm = mm(um, 'Map');
  Ms.exports = lm;
});
var vs = M((ZO, As) => {
  u();
  var fm = Ve(),
    gm = de(),
    dm = fm(gm, 'Promise');
  As.exports = dm;
});
var Cs = M((eh, Gs) => {
  u();
  var ym = Ve(),
    bm = de(),
    Om = ym(bm, 'Set');
  Gs.exports = Om;
});
var ks = M((th, Ds) => {
  u();
  var hm = Ve(),
    $m = de(),
    xm = hm($m, 'WeakMap');
  Ds.exports = xm;
});
var _s = M((rh, Bs) => {
  u();
  var Or = Es(),
    hr = Is(),
    $r = vs(),
    xr = Cs(),
    Sr = ks(),
    Ws = tt(),
    Ne = br(),
    qs = '[object Map]',
    Sm = '[object Object]',
    Fs = '[object Promise]',
    Vs = '[object Set]',
    Ns = '[object WeakMap]',
    Us = '[object DataView]',
    wm = Ne(Or),
    Tm = Ne(hr),
    Rm = Ne($r),
    jm = Ne(xr),
    Pm = Ne(Sr),
    Ee = Ws;
  ((Or && Ee(new Or(new ArrayBuffer(1))) != Us) ||
    (hr && Ee(new hr()) != qs) ||
    ($r && Ee($r.resolve()) != Fs) ||
    (xr && Ee(new xr()) != Vs) ||
    (Sr && Ee(new Sr()) != Ns)) &&
    (Ee = function (e) {
      var t = Ws(e),
        r = t == Sm ? e.constructor : void 0,
        n = r ? Ne(r) : '';
      if (n)
        switch (n) {
          case wm:
            return Us;
          case Tm:
            return qs;
          case Rm:
            return Fs;
          case jm:
            return Vs;
          case Pm:
            return Ns;
        }
      return t;
    });
  Bs.exports = Ee;
});
var kt = M((nh, Qs) => {
  u();
  function Em(e) {
    return e != null && typeof e == 'object';
  }
  Qs.exports = Em;
});
var Ks = M((oh, zs) => {
  u();
  var Mm = tt(),
    Im = kt(),
    Am = '[object Arguments]';
  function vm(e) {
    return Im(e) && Mm(e) == Am;
  }
  zs.exports = vm;
});
var Js = M((sh, Ys) => {
  u();
  var Ls = Ks(),
    Gm = kt(),
    Hs = Object.prototype,
    Cm = Hs.hasOwnProperty,
    Dm = Hs.propertyIsEnumerable,
    km = Ls(
      (function () {
        return arguments;
      })(),
    )
      ? Ls
      : function (e) {
          return Gm(e) && Cm.call(e, 'callee') && !Dm.call(e, 'callee');
        };
  Ys.exports = km;
});
var Zs = M((ih, Xs) => {
  u();
  var qm = Array.isArray;
  Xs.exports = qm;
});
var wr = M((ah, ei) => {
  u();
  var Fm = 9007199254740991;
  function Vm(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Fm;
  }
  ei.exports = Vm;
});
var ri = M((ph, ti) => {
  u();
  var Nm = dr(),
    Um = wr();
  function Wm(e) {
    return e != null && Um(e.length) && !Nm(e);
  }
  ti.exports = Wm;
});
var oi = M((ch, ni) => {
  u();
  function Bm() {
    return !1;
  }
  ni.exports = Bm;
});
var pi = M((rt, Ue) => {
  u();
  var _m = de(),
    Qm = oi(),
    ai = typeof rt == 'object' && rt && !rt.nodeType && rt,
    si = ai && typeof Ue == 'object' && Ue && !Ue.nodeType && Ue,
    zm = si && si.exports === ai,
    ii = zm ? _m.Buffer : void 0,
    Km = ii ? ii.isBuffer : void 0,
    Lm = Km || Qm;
  Ue.exports = Lm;
});
var mi = M((mh, ci) => {
  u();
  var Hm = tt(),
    Ym = wr(),
    Jm = kt(),
    Xm = '[object Arguments]',
    Zm = '[object Array]',
    eu = '[object Boolean]',
    tu = '[object Date]',
    ru = '[object Error]',
    nu = '[object Function]',
    ou = '[object Map]',
    su = '[object Number]',
    iu = '[object Object]',
    au = '[object RegExp]',
    pu = '[object Set]',
    cu = '[object String]',
    mu = '[object WeakMap]',
    uu = '[object ArrayBuffer]',
    lu = '[object DataView]',
    fu = '[object Float32Array]',
    gu = '[object Float64Array]',
    du = '[object Int8Array]',
    yu = '[object Int16Array]',
    bu = '[object Int32Array]',
    Ou = '[object Uint8Array]',
    hu = '[object Uint8ClampedArray]',
    $u = '[object Uint16Array]',
    xu = '[object Uint32Array]',
    C = {};
  C[fu] = C[gu] = C[du] = C[yu] = C[bu] = C[Ou] = C[hu] = C[$u] = C[xu] = !0;
  C[Xm] =
    C[Zm] =
    C[uu] =
    C[eu] =
    C[lu] =
    C[tu] =
    C[ru] =
    C[nu] =
    C[ou] =
    C[su] =
    C[iu] =
    C[au] =
    C[pu] =
    C[cu] =
    C[mu] =
      !1;
  function Su(e) {
    return Jm(e) && Ym(e.length) && !!C[Hm(e)];
  }
  ci.exports = Su;
});
var li = M((uh, ui) => {
  u();
  function wu(e) {
    return function (t) {
      return e(t);
    };
  }
  ui.exports = wu;
});
var gi = M((nt, We) => {
  u();
  var Tu = lr(),
    fi = typeof nt == 'object' && nt && !nt.nodeType && nt,
    ot = fi && typeof We == 'object' && We && !We.nodeType && We,
    Ru = ot && ot.exports === fi,
    Tr = Ru && Tu.process,
    ju = (function () {
      try {
        var e = ot && ot.require && ot.require('util').types;
        return e || (Tr && Tr.binding && Tr.binding('util'));
      } catch (e5) {}
    })();
  We.exports = ju;
});
var Oi = M((lh, bi) => {
  u();
  var Pu = mi(),
    Eu = li(),
    di = gi(),
    yi = di && di.isTypedArray,
    Mu = yi ? Eu(yi) : Pu;
  bi.exports = Mu;
});
var Rr = M((fh, hi) => {
  u();
  var Iu = ts(),
    Au = _s(),
    vu = Js(),
    Gu = Zs(),
    Cu = ri(),
    Du = pi(),
    ku = ur(),
    qu = Oi(),
    Fu = '[object Map]',
    Vu = '[object Set]',
    Nu = Object.prototype,
    Uu = Nu.hasOwnProperty;
  function Wu(e) {
    if (e == null) return !0;
    if (
      Cu(e) &&
      (Gu(e) ||
        typeof e == 'string' ||
        typeof e.splice == 'function' ||
        Du(e) ||
        qu(e) ||
        vu(e))
    )
      return !e.length;
    var t = Au(e);
    if (t == Fu || t == Vu) return !e.size;
    if (ku(e)) return !Iu(e).length;
    for (var r in e) if (Uu.call(e, r)) return !1;
    return !0;
  }
  hi.exports = Wu;
});
var Ji = 'orval',
  Xi = 'A swagger client generator for typescript',
  Zi = '6.8.1',
  ea = 'MIT',
  ta = ['dist'],
  ra = { orval: 'dist/bin/orval.js' },
  na = 'dist/index.js',
  oa = [
    'rest',
    'client',
    'swagger',
    'open-api',
    'fetch',
    'data fetching',
    'code-generation',
    'angular',
    'react',
    'react-query',
    'svelte',
    'svelte-query',
    'vue',
    'vue-query',
    'msw',
    'mock',
    'axios',
    'vue-query',
    'vue',
    'swr',
    'trpc',
  ],
  sa = { name: 'Victor Bury', email: 'bury.victor@gmail.com' },
  ia = { type: 'git', url: 'https://github.com/anymaniax/orval' },
  aa = {
    build:
      'tsup ./src/bin/orval.ts ./src/index.ts --minify --clean --dts --splitting',
    dev: "tsup ./src/bin/orval.ts ./src/index.ts --clean --watch src --onSuccess 'yarn generate-api'",
    lint: 'eslint src/**/*.ts',
    test: 'vitest --global test.ts',
    format: 'prettier --write .',
    'format:staged': 'pretty-quick --staged',
    prerelease: 'yarn build && cd ./tests && yarn generate && yarn build',
    release: 'dotenv release-it',
    postrelease: 'yarn build && yarn update-samples',
    'generate-api':
      'node ./dist/bin/orval.js --config ./samples/trpc/orval.config.ts',
    prepare: 'husky install && cd ./samples/react-query/basic && yarn',
    commitlint: 'commitlint',
    'update-samples': 'zx ./scripts/update-samples.mjs',
  },
  pa = {
    '@commitlint/cli': '^16.2.1',
    '@commitlint/config-conventional': '^16.2.1',
    '@faker-js/faker': '^6.1.1',
    '@release-it/conventional-changelog': '^4.2.0',
    '@types/chalk': '^2.2.0',
    '@types/commander': '^2.12.2',
    '@types/fs-extra': '^9.0.12',
    '@types/inquirer': '^8.2.0',
    '@types/lodash.get': '^4.4.6',
    '@types/lodash.omit': '^4.5.6',
    '@types/lodash.omitby': '^4.6.6',
    '@types/lodash.uniq': '^4.5.6',
    '@types/lodash.uniqby': '^4.7.6',
    '@types/lodash.uniqwith': '^4.5.6',
    '@types/micromatch': '^4.0.2',
    '@types/node': '^17.0.21',
    '@types/prettier': '^2.4.4',
    '@types/request': '^2.48.8',
    '@types/validator': '^13.7.1',
    '@typescript-eslint/eslint-plugin': '^5.14.0',
    '@typescript-eslint/parser': '^5.14.0',
    'dotenv-cli': '^4.0.0',
    eslint: '^8.10.0',
    'eslint-config-prettier': '^8.5.0',
    'eslint-plugin-prettier': '^4.0.0',
    husky: '^7.0.2',
    'lint-staged': '^12.3.5',
    'npm-run-all': '^4.1.5',
    prettier: '2.6.2',
    'pretty-quick': '^3.1.3',
    'release-it': '^14.12.5',
    rimraf: '^3.0.2',
    tsup: '^5.12.0',
    typescript: '^4.6.2',
    vitest: '^0.6.0',
    zx: '^5.2.0',
  },
  ca = {
    '@apidevtools/swagger-parser': '^10.0.3',
    acorn: '^8.7.0',
    cac: '^6.7.12',
    chalk: '^4.1.2',
    chokidar: '^3.5.3',
    'compare-versions': '^4.1.3',
    cuid: '^2.1.8',
    debug: '^4.3.3',
    esbuild: '^0.14.25',
    esutils: '2.0.3',
    execa: '^5.1.1',
    'find-up': '5.0.0',
    'fs-extra': '^10.0.1',
    globby: '11.0.4',
    'ibm-openapi-validator': '^0.57.4',
    inquirer: '^8.2.0',
    'lodash.get': '^4.4.2',
    'lodash.omit': '^4.5.0',
    'lodash.omitby': '^4.6.0',
    'lodash.uniq': '^4.5.0',
    'lodash.uniqby': '^4.7.0',
    'lodash.uniqwith': '^4.5.0',
    micromatch: '^4.0.4',
    'openapi3-ts': '^2.0.2',
    swagger2openapi: '^7.0.8',
    tsconfck: '^1.2.0',
    upath: '^2.0.1',
    url: '^0.11.0',
    validator: '^13.7.0',
  },
  Ut = (exports.a = {
    name: Ji,
    description: Xi,
    version: Zi,
    license: ea,
    files: ta,
    bin: ra,
    main: na,
    keywords: oa,
    author: sa,
    repository: ia,
    scripts: aa,
    devDependencies: pa,
    dependencies: ca,
  });
u();
var B = {
    ANGULAR: 'angular',
    AXIOS: 'axios',
    AXIOS_FUNCTIONS: 'axios-functions',
    REACT_QUERY: 'react-query',
    SVELTE_QUERY: 'svelte-query',
    TRPC: 'trpc',
    VUE_QUERY: 'vue-query',
  },
  ge = {
    SINGLE: 'single',
    SPLIT: 'split',
    TAGS: 'tags',
    TAGS_SPLIT: 'tags-split',
  },
  K = {
    POST: 'post',
    PUT: 'put',
    GET: 'get',
    PATCH: 'patch',
    DELETE: 'delete',
    HEAD: 'head',
  };
u();
var _upath = require('upath');
var D = (e) => Boolean(e.$ref),
  yn = (e) => !_upath.extname.call(void 0, e);
function q(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function F(e) {
  return typeof e == 'string';
}
function bn(e) {
  return typeof e == 'number';
}
function J(e) {
  return typeof e == 'boolean';
}
function L(e) {
  return typeof e == 'function';
}
function mt(e) {
  return typeof e > 'u';
}
function On(e) {
  return typeof e === null;
}
var hn = (e) => Object.values(K).includes(e);
u();
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
var _readline = require('readline');
var _readline2 = _interopRequireDefault(_readline);
var N = console.log,
  jl = (exports.e = ({ name: e, version: t, description: r }) =>
    N(
      `\u{1F37B} Start ${_chalk2.default.cyan.bold(e)} ${_chalk2.default.green(
        `v${t}`,
      )}${r ? ` - ${r}` : ''}`,
    )),
  wn = (e) => N(_chalk2.default.red(e));
var Tn = (e) =>
    N(
      `\u{1F389} ${
        e ? `${_chalk2.default.green(e)} - ` : ''
      }Your OpenAPI spec has been converted into ready to use orval!`,
    ),
  Rn = (e) => {
    N(_chalk2.default.yellow('(!) Warnings')),
      e.forEach((t) =>
        N(
          _chalk2.default.yellow(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  jn = (e) => {
    N(_chalk2.default.red('(!) Errors')),
      e.forEach((t) =>
        N(
          _chalk2.default.red(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  Wt = { silent: 0, error: 1, warn: 2, info: 3 },
  xn,
  Sn,
  Bt = 0;
function ua() {
  let e = process.stdout.rows - 2,
    t =
      e > 0
        ? `
`.repeat(e)
        : '';
  console.log(t),
    _readline2.default.cursorTo(process.stdout, 0, 0),
    _readline2.default.clearScreenDown(process.stdout);
}
function X(e = 'info', t = {}) {
  let { prefix: r = '[vite]', allowClearScreen: n = !0 } = t,
    o = Wt[e],
    s = n && process.stdout.isTTY && !process.env.CI ? ua : () => {};
  function i(c, m, l = {}) {
    if (o >= Wt[c]) {
      let f = c === 'info' ? 'log' : c,
        d = () => {
          if (l.timestamp) {
            let g =
              c === 'info'
                ? _chalk2.default.cyan.bold(r)
                : c === 'warn'
                ? _chalk2.default.yellow.bold(r)
                : _chalk2.default.red.bold(r);
            return `${_chalk2.default.dim(
              new Date().toLocaleTimeString(),
            )} ${g} ${m}`;
          } else return m;
        };
      c === xn && m === Sn
        ? (Bt++, s(), console[f](d(), _chalk2.default.yellow(`(x${Bt + 1})`)))
        : ((Bt = 0), (Sn = m), (xn = c), l.clear && s(), console[f](d()));
    }
  }
  let a = new Set(),
    p = {
      hasWarned: !1,
      info(c, m) {
        i('info', c, m);
      },
      warn(c, m) {
        (p.hasWarned = !0), i('warn', c, m);
      },
      warnOnce(c, m) {
        a.has(c) || ((p.hasWarned = !0), i('warn', c, m), a.add(c));
      },
      error(c, m) {
        (p.hasWarned = !0), i('error', c, m);
      },
      clearScreen(c) {
        o >= Wt[c] && s();
      },
    };
  return p;
}
u();
var _t = function (e, t) {
    return (
      (t = t || ''), e.replace(/(^|-)/g, '$1\\u' + t).replace(/,/g, '\\u' + t)
    );
  },
  ut = _t('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
  lt = 'a-z' + _t('DF-F6,F8-FF', '00'),
  Ke = 'A-Z' + _t('C0-D6,D8-DE', '00'),
  la = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
  be = {
    capitalize: new RegExp('(^|[' + ut + '])([' + lt + '])', 'g'),
    pascal: new RegExp('(^|[' + ut + '])+([' + lt + Ke + '])', 'g'),
    fill: new RegExp('[' + ut + ']+(.|$)', 'g'),
    sentence: new RegExp(
      '(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + lt + '])',
      'g',
    ),
    improper: new RegExp('\\b(' + la + ')\\b', 'g'),
    relax: new RegExp(
      '([^' + Ke + '])([' + Ke + ']*)([' + Ke + '])(?=[^' + Ke + ']|$)',
      'g',
    ),
    upper: new RegExp('^[^' + lt + ']+$'),
    hole: /[^\s]\s[^\s]/,
    apostrophe: /'/g,
    room: new RegExp('[' + ut + ']'),
  },
  fa = (e) => e.replace(be.apostrophe, ''),
  Pn = String.prototype.toUpperCase,
  Qt = String.prototype.toLowerCase,
  ft = (e, t, r = !1) => (
    t != null &&
      (e = e.replace(be.fill, function (n, o) {
        return o ? t + o : '';
      })),
    r && (e = fa(e)),
    e
  ),
  ga = (e) => Qt.call(e.charAt(0)) + e.slice(1),
  da = (e, t, r, n) => t + ' ' + (r ? r + ' ' : '') + n,
  zt = (e, t = !1, r = !1, n = !1) => {
    if (
      ((e = e == null ? '' : e + ''),
      !n && be.upper.test(e) && (e = Qt.call(e)),
      !t && !be.hole.test(e))
    ) {
      var o = ft(e, ' ');
      be.hole.test(o) && (e = o);
    }
    return !r && !be.room.test(e) && (e = e.replace(be.relax, da)), e;
  },
  En = (e, t, r) => ft(Qt.call(zt(e, !!t)), t, r),
  x = (exports.f = (e) =>
    ft(
      zt(e, !1, !0).replace(be.pascal, (t, r, n) => Pn.call(n)),
      '',
      !0,
    )),
  E = (exports.g = (e) => ga(x(e))),
  El = (exports.h = (e) => En(e, '_', !0)),
  Te = (exports.i = (e) => En(e, '-', !0)),
  Ml = (exports.j = (e, t, r) => ft(Pn.call(zt(e, !!t, !1, !0)), t, r));
u();
var _esutils = require('esutils');
var _lodashget = require('lodash.get');
var _lodashget2 = _interopRequireDefault(_lodashget);
var ne = (e) => {
    if (!(mt(e) || On(e)))
      return F(e)
        ? `'${e}'`
        : bn(e) || J(e) || L(e)
        ? `${e}`
        : Array.isArray(e)
        ? `[${e.map(ne).join(', ')}]`
        : Object.entries(e).reduce((t, [r, n], o, s) => {
            let i = ne(n);
            return s.length === 1
              ? `{ ${r}: ${i}, }`
              : o
              ? s.length - 1 === o
                ? t + `${r}: ${i}, }`
                : t + `${r}: ${i}, `
              : `{ ${r}: ${i}, `;
          }, '');
  },
  U = (exports.l = (e, t) => {
    let {
        whitespace: r = '',
        underscore: n = '',
        dot: o = '',
        dash: s = '',
        es5keyword: i = !1,
      } = t != null ? t : {},
      a = e.replace(/[^\w\s.-]/g, '');
    return (
      r !== !0 && (a = a.replace(/[\s]/g, r)),
      n !== !0 && (a = a.replace(/['_']/g, n)),
      o !== !0 && (a = a.replace(/[.]/g, o)),
      s !== !0 && (a = a.replace(/[-]/g, s)),
      i && (a = _esutils.keyword.isKeywordES5(a, !0) ? `_${a}` : a),
      a
    );
  }),
  V = (exports.m = (e, t) =>
    e.length
      ? (t ? e.map((n) => _lodashget2.default.call(void 0, n, t)) : e).join(`,
    `) + ','
      : ''),
  Oa = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  },
  gt = (exports.n = (e) =>
    e
      .toString()
      .split('')
      .reduce((r, n) => r + Oa[n], '')),
  dt = (exports.o = (e, t = "'") => e.replace(t, `\\${t}`));
u();
var ha = ['number', 'string', 'null', 'unknown', 'undefined', 'object', 'blob'],
  Ie = (exports.q = ha.reduce(
    (e, t) => (e.push(t, `Array<${t}>`, `${t}[]`), e),
    [],
  )),
  oe = (exports.r = [K.POST, K.PUT, K.PATCH, K.DELETE]),
  kl = (exports.s =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
u();
var _lodashuniq = require('lodash.uniq');
var _lodashuniq2 = _interopRequireDefault(_lodashuniq);
var _lodashuniqwith = require('lodash.uniqwith');
var _lodashuniqwith2 = _interopRequireDefault(_lodashuniqwith);
u();
var _acorn = require('acorn');
var _fsextra = require('fs-extra');
u();
var _esbuild = require('esbuild');
var _fs = require('fs');
var _fs2 = _interopRequireDefault(_fs);
var _globby = require('globby');
var _globby2 = _interopRequireDefault(_globby);
var _micromatch = require('micromatch');
var _micromatch2 = _interopRequireDefault(_micromatch);
var _path = require('path');
var _path2 = _interopRequireDefault(_path);
u();
var _debug = require('debug');
var _debug2 = _interopRequireDefault(_debug);
var Mn = process.env.ORVAL_DEBUG_FILTER,
  Kt = process.env.DEBUG;
function In(e, t = {}) {
  let r = _debug2.default.call(void 0, e),
    { onlyWhenFocused: n } = t,
    o = typeof n == 'string' ? n : e;
  return (s, ...i) => {
    (Mn && !s.includes(Mn)) ||
      (n && !(Kt != null && Kt.includes(o))) ||
      r(s, ...i);
  };
}
var v = (
    e = '',
    { backupFilename: t = 'filename', extension: r = '.ts' } = {},
  ) => {
    let n = yn(e),
      o = n ? _upath.join.call(void 0, e, t + r) : e,
      s = o.replace(/\.[^/.]+$/, ''),
      i = _upath.dirname.call(void 0, o),
      a = _upath.basename.call(void 0, o, r[0] !== '.' ? `.${r}` : r);
    return {
      path: o,
      pathWithoutExtension: s,
      extension: r,
      isDirectory: n,
      dirname: i,
      filename: a,
    };
  },
  Cn = In('orval:file-load'),
  Ht = new Map();
async function yt(e, t) {
  let {
      root: r = process.cwd(),
      isDefault: n = !0,
      defaultFileName: o,
      logLevel: s,
      alias: i,
      tsconfig: a,
      load: p = !0,
    } = t != null ? t : {},
    c = Date.now(),
    m,
    l = !1,
    f = !1;
  if (e) (m = _path2.default.resolve(e)), (l = e.endsWith('.ts'));
  else if (o) {
    let b = _path2.default.resolve(r, `${o}.js`);
    if ((_fs2.default.existsSync(b) && (m = b), !m)) {
      let y = _path2.default.resolve(r, `${o}.mjs`);
      _fs2.default.existsSync(y) && ((m = y), (f = !0));
    }
    if (!m) {
      let y = _path2.default.resolve(r, `${o}.ts`);
      _fs2.default.existsSync(y) && ((m = y), (l = !0));
    }
  }
  m ||
    (e
      ? X(s).error(_chalk2.default.red(`File not found => ${e}`))
      : o
      ? X(s).error(_chalk2.default.red(`File not found => ${o}.{js,mjs,ts}`))
      : X(s).error(_chalk2.default.red('File not found')),
    process.exit(1));
  let d = _upath.normalizeSafe.call(void 0, m),
    g = Ht.get(m);
  if (g) return T($({ path: d }, g), { cached: !0 });
  try {
    let b;
    if (!b && !l && !f)
      try {
        delete W.cache[W.resolve(m)],
          (b = W(m)),
          Cn(`cjs loaded in ${Date.now() - c}ms`);
      } catch (y) {
        if (
          !new RegExp(
            [
              'Cannot use import statement',
              'Must use import to load ES Module',
              'Unexpected token',
              'Unexpected identifier',
            ].join('|'),
          ).test(y.message)
        )
          throw y;
      }
    if (!b) {
      let { code: y } = await ja(
        m,
        f,
        r || _upath.dirname.call(void 0, d),
        i,
        a == null ? void 0 : a.compilerOptions,
      );
      p ? (b = await Pa(m, y, n)) : (b = y),
        Cn(`bundled file loaded in ${Date.now() - c}ms`);
    }
    return Ht.set(m, { file: b }), { path: d, file: b };
  } catch (b) {
    return Ht.set(m, { error: b }), { path: d, error: b };
  }
}
async function ja(e, t = !1, r, n, o) {
  let s = await _esbuild.build.call(void 0, {
      absWorkingDir: process.cwd(),
      entryPoints: [e],
      outfile: 'out.js',
      write: !1,
      platform: 'node',
      bundle: !0,
      format: t ? 'esm' : 'cjs',
      sourcemap: 'inline',
      metafile: !0,
      target: 'es6',
      minifyWhitespace: !0,
      plugins: [
        ...(n || (o == null ? void 0 : o.paths)
          ? [
              {
                name: 'aliasing',
                setup(a) {
                  a.onResolve({ filter: /^[\w@][^:]/ }, async ({ path: p }) => {
                    if (n) {
                      let c = Object.keys(n),
                        m = c.find(
                          (l) =>
                            p.startsWith(l) ||
                            _micromatch2.default.isMatch(p, c),
                        );
                      if (m) {
                        let l = _micromatch2.default.scan(m),
                          f = _micromatch2.default.scan(n[m]),
                          d = _upath.resolve.call(void 0, r, f.base),
                          g = l.base
                            ? p.replace(l.base, d)
                            : _upath.joinSafe.call(void 0, d, p),
                          y = _upath.extname.call(void 0, g) ? g : `${g}.ts`;
                        return _fs2.default.existsSync(y)
                          ? { path: y }
                          : void 0;
                      }
                    }
                    if (o != null && o.paths) {
                      let c = Object.keys(o == null ? void 0 : o.paths),
                        m = c.find(
                          (l) =>
                            p.startsWith(l) ||
                            _micromatch2.default.isMatch(p, c),
                        );
                      if (m) {
                        let l = _micromatch2.default.scan(m),
                          f = _micromatch2.default.scan(
                            o == null ? void 0 : o.paths[m][0],
                          ),
                          d = _upath.resolve.call(void 0, r, f.base),
                          g = l.base
                            ? p.replace(l.base, d)
                            : _upath.joinSafe.call(void 0, d, p),
                          y = _upath.extname.call(void 0, g) ? g : `${g}.ts`;
                        return _fs2.default.existsSync(y)
                          ? { path: y }
                          : void 0;
                      }
                    }
                  });
                },
              },
            ]
          : []),
        {
          name: 'externalize-deps',
          setup(a) {
            a.onResolve({ filter: /.*/ }, (p) => {
              let c = p.path;
              if (c[0] !== '.' && !_path2.default.isAbsolute(c))
                return { external: !0 };
            });
          },
        },
        {
          name: 'replace-import-meta',
          setup(a) {
            a.onLoad({ filter: /\.[jt]s$/ }, async (p) => {
              let c = await _fs2.default.promises.readFile(p.path, 'utf8');
              return {
                loader: p.path.endsWith('.ts') ? 'ts' : 'js',
                contents: c
                  .replace(
                    /\bimport\.meta\.url\b/g,
                    JSON.stringify(`file://${p.path}`),
                  )
                  .replace(
                    /\b__dirname\b/g,
                    JSON.stringify(_path2.default.dirname(p.path)),
                  )
                  .replace(/\b__filename\b/g, JSON.stringify(p.path)),
              };
            });
          },
        },
      ],
    }),
    { text: i } = s.outputFiles[0];
  return {
    code: i,
    dependencies: s.metafile ? Object.keys(s.metafile.inputs) : [],
  };
}
async function Pa(e, t, r) {
  let n = _path2.default.extname(e),
    o = W.extensions[n];
  (W.extensions[n] = (a, p) => {
    p === e ? a._compile(t, p) : o(a, p);
  }),
    delete W.cache[W.resolve(e)];
  let s = W(e),
    i = r && s.__esModule ? s.default : s;
  return (W.extensions[n] = o), i;
}
async function Yt(e, t) {
  let r = await _globby2.default.call(void 0, e, { cwd: t, absolute: !0 });
  await Promise.all(r.map((n) => _fs2.default.promises.unlink(n)));
}
u();
u();
var Jt = (e) =>
  e.toLowerCase().includes('.yaml') || e.toLowerCase().includes('.yml')
    ? 'yaml'
    : 'json';
u();
var _isURL = require('validator/lib/isURL');
var _isURL2 = _interopRequireDefault(_isURL);
var Ma = /^https?:\/\/\w+(\.\w+)*(:[0-9]+)?(\/.*)?$/,
  Oe = (e) => _isURL2.default.call(void 0, e) || Ma.test(e);
var se = (e, t) => {
    let r = _upath.relative.call(void 0, e, t);
    return _upath.normalizeSafe.call(void 0, `.${_upath.sep}${r}`);
  },
  bt = (e, t) => {
    if (Oe(e)) {
      let r = new URL(t);
      return e
        .replace(r.origin, '')
        .replace(v(r.pathname).dirname, '')
        .replace(`.${Jt(e)}`, '');
    }
    return (
      '/' +
      _upath.normalize
        .call(void 0, _upath.relative.call(void 0, v(t).dirname, e))
        .split('../')
        .join('')
        .replace(`.${Jt(e)}`, '')
    );
  };
var ve = 'BodyType',
  Fn = (e, t) => {
    let r = v(e),
      n = v(t.path),
      { pathWithoutExtension: o } = v(se(r.dirname, n.path));
    return o;
  },
  ht = async ({
    output: e,
    mutator: t,
    name: r,
    workspace: n,
    tsconfig: o,
  }) => {
    var b;
    if (!t || !e) return;
    let s = t.default,
      i = t.name ? t.name : `${r}Mutator`,
      a = t.path,
      p = await _fsextra.readFile.call(void 0, a, 'utf8'),
      c =
        p.includes('export type ErrorType') ||
        p.includes('export interface ErrorType'),
      m =
        p.includes(`export type ${ve}`) || p.includes(`export interface ${ve}`),
      l = t.default ? `${x(r)}ErrorType` : 'ErrorType',
      f = t.default ? `${x(r)}${ve}` : ve,
      { file: d, cached: g } = await yt(a, {
        isDefault: !1,
        root: n,
        alias: t.alias,
        tsconfig: o,
        load: !1,
      });
    if (d) {
      let y = s ? 'default' : t.name,
        h = Da(d, y);
      h ||
        (X().error(
          _chalk2.default.red(
            `Your mutator file doesn't have the ${y} exported function`,
          ),
        ),
        process.exit(1));
      let S = Fn(e, t);
      return $(
        {
          name: i,
          path: S,
          default: s,
          hasErrorType: c,
          errorTypeName: l,
          hasSecondArg: h.numberOfParams > 1,
          hasThirdArg: h.numberOfParams > 2,
          isHook:
            !!(
              (b = t == null ? void 0 : t.name) != null && b.startsWith('use')
            ) && !h.numberOfParams,
        },
        m ? { bodyTypeName: f } : {},
      );
    } else {
      let y = Fn(e, t);
      return (
        g ||
          X().warn(
            _chalk2.default.yellow('Failed to parse provided mutator function'),
          ),
        $(
          {
            name: i,
            path: y,
            default: s,
            hasSecondArg: !1,
            hasThirdArg: !1,
            isHook: !1,
            hasErrorType: c,
            errorTypeName: l,
          },
          m ? { bodyTypeName: f } : {},
        )
      );
    }
  },
  Da = (e, t) => {
    var r, n;
    try {
      let o = _acorn.Parser.parse(e, { ecmaVersion: 6 }),
        s =
          (r = o == null ? void 0 : o.body) == null
            ? void 0
            : r.find((a) => {
                var p, c, m, l, f, d, g;
                if (a.type === 'ExpressionStatement')
                  return ((m =
                    (c =
                      (p = a.expression.arguments) == null ? void 0 : p[1]) ==
                    null
                      ? void 0
                      : c.properties) != null &&
                    m.some((b) => {
                      var y;
                      return ((y = b.key) == null ? void 0 : y.name) === t;
                    })) ||
                    ((f =
                      (l = a.expression.left) == null ? void 0 : l.property) ==
                    null
                      ? void 0
                      : f.name) === t
                    ? !0
                    : (g =
                        (d = a.expression.right) == null
                          ? void 0
                          : d.properties) == null
                    ? void 0
                    : g.some((b) => b.key.name === t);
              });
      if (!s) return;
      if (s.expression.type === 'AssignmentExpression') {
        if (
          s.expression.right.type === 'FunctionExpression' ||
          s.expression.right.type === 'ArrowFunctionExpression'
        )
          return { numberOfParams: s.expression.right.params.length };
        if (s.expression.right.name) return Ot(o, s.expression.right.name);
        let a =
          (n = s.expression.right) == null
            ? void 0
            : n.properties.find((p) => p.key.name === t);
        return a.value.name
          ? Ot(o, a.value.name)
          : a.value.type === 'FunctionExpression' ||
            a.value.type === 'ArrowFunctionExpression'
          ? { numberOfParams: a.value.params.length }
          : void 0;
      }
      let i = s.expression.arguments[1].properties.find((a) => {
        var p;
        return ((p = a.key) == null ? void 0 : p.name) === t;
      });
      return Ot(o, i.value.body.name);
    } catch (e6) {
      return;
    }
  },
  Ot = (e, t) => {
    var o;
    let r =
      (o = e == null ? void 0 : e.body) == null
        ? void 0
        : o.find((s) => {
            if (s.type === 'VariableDeclaration')
              return s.declarations.find((i) => i.id.name === t);
            if (s.type === 'FunctionDeclaration' && s.id.name === t) return s;
          });
    if (!r) return;
    if (r.type === 'FunctionDeclaration')
      return { numberOfParams: r.params.length };
    let n = r.declarations.find((s) => s.id.name === t);
    return n.init.name
      ? Ot(e, n.init.name)
      : { numberOfParams: n.init.params.length };
  };
var Un = ({ imports: e = [], target: t, isRootKey: r, specsName: n }) =>
    e.length
      ? _lodashuniqwith2.default
          .call(
            void 0,
            e,
            (o, s) =>
              o.name === s.name &&
              o.default === s.default &&
              o.specKey === s.specKey,
          )
          .sort()
          .map(({ specKey: o, name: s, values: i, alias: a }) => {
            if (o) {
              let p = o !== t ? n[o] : '';
              return !r && o
                ? `import ${i ? '' : 'type '}{ ${s}${
                    a ? ` as ${a}` : ''
                  } } from '../${_upath.join.call(void 0, p, E(s))}';`
                : `import ${i ? '' : 'type '}{ ${s}${
                    a ? ` as ${a}` : ''
                  } } from './${_upath.join.call(void 0, p, E(s))}';`;
            }
            return `import ${i ? '' : 'type '}{ ${s}${
              a ? ` as ${a}` : ''
            } } from './${E(s)}';`;
          }).join(`
`)
      : '',
  _ = (exports.u = (e, t) => {
    let r = _lodashuniqwith2.default
      .call(void 0, e, (n, o) => n.name === o.name && n.default === o.default)
      .map(
        (n) =>
          `import ${
            n.default
              ? `${n.name}${
                  n.hasErrorType || n.bodyTypeName
                    ? `, { ${
                        n.hasErrorType ? `ErrorType as ${n.errorTypeName}` : ''
                      }${n.hasErrorType && n.bodyTypeName ? ',' : ''} ${
                        n.bodyTypeName ? `${ve} as ${n.bodyTypeName}` : ''
                      } }`
                    : ''
                }`
              : `{ ${n.name}${n.hasErrorType ? `, ${n.errorTypeName}` : ''}${
                  n.bodyTypeName ? `, ${n.bodyTypeName}` : ''
                } }`
          } from '${t ? '../' : ''}${n.path}'`,
      ).join(`
`);
    return r
      ? r +
          `
`
      : '';
  }),
  qa = (exports.v = ({
    implementation: e,
    exports: t,
    dependency: r,
    specsName: n,
    hasSchemaDir: o,
    isAllowSyntheticDefaultImports: s,
  }) => {
    let i = t.filter((p) => e.includes(p.alias || p.name));
    if (!i.length) return;
    let a = i.reduce((p, c) => {
      var l, f, d;
      let m = o && c.specKey ? c.specKey : 'default';
      return (
        (p[m] = {
          values:
            ((l = p[m]) == null ? void 0 : l.values) ||
            (c.values && (s || !c.syntheticDefaultImport)) ||
            !1,
          deps: [
            ...((d = (f = p[m]) == null ? void 0 : f.deps) != null ? d : []),
            c,
          ],
        }),
        p
      );
    }, {});
    return Object.entries(a).map(([p, { values: c, deps: m }]) => {
      let l = m.find((y) => y.default && (s || !y.syntheticDefaultImport)),
        f = s ? void 0 : m.find((y) => y.syntheticDefaultImport),
        d = _lodashuniq2.default.call(
          void 0,
          m
            .filter((y) => !y.default && !y.syntheticDefaultImport)
            .map(({ name: y, alias: h }) => (h ? `${y} as ${h}` : y)),
        ).join(`,
  `),
        g = '',
        b = f ? `import * as ${f.name} from '${r}';` : '';
      if (b) {
        if (m.length === 1) return b;
        g += `${b}
`;
      }
      return (
        (g += `import ${c ? '' : 'type '}${
          l ? `${l.name}${d ? ',' : ''}` : ''
        }${
          d
            ? `{
  ${d}
}`
            : ''
        } from '${r}${p !== 'default' && n[p] ? `/${n[p]}` : ''}'`),
        g
      );
    }).join(`
`);
  }),
  $t = (exports.w = (e, t, r, n, o) => {
    let s = t
      .map((i) =>
        qa(
          T($({}, i), {
            implementation: e,
            specsName: r,
            hasSchemaDir: n,
            isAllowSyntheticDefaultImports: o,
          }),
        ),
      )
      .filter(Boolean).join(`
`);
    return s
      ? s +
          `
`
      : '';
  }),
  ae = (exports.x = ({ response: e, body: t, queryParams: r, params: n }) => [
    ...e.imports,
    ...t.imports,
    ...(r ? [{ name: r.schema.name }] : []),
    ...n.flatMap(({ imports: o }) => o),
  ]);
u();
var Fa = (e, t, r) =>
    t && e.formData
      ? `
      formData,`
      : r && e.formUrlEncoded
      ? `
      formUrlEncoded,`
      : e.implementation
      ? `
      ${e.implementation},`
      : '',
  Va = (exports.z = (e, t, r) => {
    var s;
    let n = r !== !1;
    if (!t && !e.isBlob) return n ? 'options' : '';
    let o = '';
    return (
      t &&
        (o += `
        params,`),
      e.isBlob &&
        (!q(r) || !r.hasOwnProperty('responseType')) &&
        (o += `
        responseType: 'blob',`),
      q(r) &&
        (o += `
 ${(s = ne(r)) == null ? void 0 : s.slice(1, -1)}`),
      n &&
        (o += `
    ...options`),
      o
    );
  }),
  pe = (exports.A = ({
    route: e,
    body: t,
    queryParams: r,
    response: n,
    verb: o,
    requestOptions: s,
    isFormData: i,
    isFormUrlEncoded: a,
    isAngular: p,
  }) => {
    let c = oe.includes(o),
      m = c ? Fa(t, i, a) : '',
      l = Va(n, r == null ? void 0 : r.schema, s);
    return o === K.DELETE
      ? m
        ? `
      \`${e}\`,{${p ? 'body' : 'data'}:${m} ${l === 'options' ? `...${l}` : l}}
    `
        : `
      \`${e}\`,${l === 'options' ? l : `{${l}}`}
    `
      : `
      \`${e}\`,${c ? m || 'undefined,' : ''}${l === 'options' ? l : `{${l}}`}
    `;
  }),
  Na = (exports.B = (e, t, r) =>
    t && e.formData
      ? `,
       data: formData`
      : r && e.formUrlEncoded
      ? `,
       data: formUrlEncoded`
      : e.implementation
      ? `,
      data: ${e.implementation}`
      : ''),
  Ua = (exports.C = (e, t) => {
    if (!t && !e.isBlob) return '';
    let r = ',';
    return (
      t &&
        (r += `
        params,`),
      e.isBlob &&
        (r += `
        responseType: 'blob',`),
      r
    );
  }),
  ce = (exports.D = ({
    route: e,
    body: t,
    queryParams: r,
    response: n,
    verb: o,
    isFormData: s,
    isFormUrlEncoded: i,
    isBodyVerb: a,
    hasSignal: p,
  }) => {
    let c = a ? Na(t, s, i) : '',
      m = Ua(n, r == null ? void 0 : r.schema),
      l = t.contentType
        ? `,
      headers: {'Content-Type': '${t.contentType}'}`
        : '';
    return `{url: \`${e}\`, method: '${o}'${
      !a && p ? ', signal' : ''
    }${l}${c}${m}
    }`;
  }),
  me = (exports.E = (e, t) => {
    var r, n;
    return t
      ? q(e)
        ? `{${(n = ne(e)) == null ? void 0 : n.slice(1, -1)} ...options}`
        : 'options'
      : q(e)
      ? `{${(r = ne(e)) == null ? void 0 : r.slice(1, -1)}}`
      : '';
  }),
  ue = (exports.F = ({
    body: e,
    formData: t,
    formUrlEncoded: r,
    isFormData: n,
    isFormUrlEncoded: o,
  }) =>
    n && e.formData
      ? t
        ? `const formData = ${t.name}(${e.implementation})`
        : e.formData
      : o && e.formUrlEncoded
      ? r
        ? `const formUrlEncoded = ${r.name}(${e.implementation})`
        : e.formUrlEncoded
      : '');
u();
u();
var _url = require('url');
var _url2 = _interopRequireDefault(_url);
var Le = {
    schemas: '',
    responses: 'Response',
    parameters: 'Parameter',
    requestBodies: 'Body',
  },
  Qa = new RegExp('~1', 'g'),
  Ge = (e, t) => {
    let [r, n] = e.split('#'),
      o = n
        .slice(1)
        .split('/')
        .map((p) => p.replace(Qa, '/')),
      s = _lodashget2.default.call(
        void 0,
        t.override,
        [...o.slice(0, 2), 'suffix'],
        '',
      ),
      i = o[o.length - 1];
    if (!r) return { name: x(i) + s, originalName: i, refPaths: o };
    let a = Oe(t.specKey)
      ? _url2.default.resolve(t.specKey, r)
      : _upath.resolve.call(void 0, v(t.specKey).dirname, r);
    return { name: x(i) + s, originalName: i, specKey: a, refPaths: o };
  };
u();
var _inquirer = require('inquirer');
var _inquirer2 = _interopRequireDefault(_inquirer);
u();
var _https = require('https');
var _https2 = _interopRequireDefault(_https);
var Wn = (e, t) =>
  new Promise((r, n) => {
    let o = _https2.default.request(e, (s) => {
      let i = '';
      s.on('data', (a) => (i += a.toString())),
        s.on('error', n),
        s.on('end', () => {
          let a = {
            status: s.statusCode,
            headers: s.headers,
            body: JSON.parse(i),
          };
          s.statusCode && s.statusCode >= 200 && s.statusCode <= 299
            ? r(a)
            : n(a);
        });
    });
    o.on('error', n), t && o.write(t, 'binary'), o.end();
  });
var Ja = ({ accessToken: e, repo: t, owner: r, branch: n, path: o }) => {
    let s = JSON.stringify({
      query: `query {
      repository(name: "${t}", owner: "${r}") {
        object(expression: "${n}:${o}") {
          ... on Blob {
            text
          }
        }
      }
    }`,
    });
    return [
      {
        method: 'POST',
        hostname: 'api.github.com',
        path: '/graphql',
        headers: {
          'content-type': 'application/json',
          'user-agent': 'orval-importer',
          authorization: `bearer ${e}`,
          'Content-Length': s.length,
        },
      },
      s,
    ];
  },
  Xa = async (e) => {
    if (await _fsextra.pathExists.call(void 0, e))
      return _fsextra.readFile.call(void 0, e, 'utf-8');
    {
      let t = await _inquirer2.default.prompt([
        {
          type: 'input',
          name: 'githubToken',
          message:
            'Please provide a GitHub token with `repo` rules checked (https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)',
        },
        {
          type: 'confirm',
          name: 'saveToken',
          message:
            'Would you like to store your token for the next time? (stored in your node_modules)',
        },
      ]);
      return (
        t.saveToken &&
          (await _fsextra.outputFile.call(void 0, e, t.githubToken)),
        t.githubToken
      );
    }
  },
  Za = async (e) => {
    var c, m, l, f;
    let t = _upath.join.call(void 0, __dirname, '.githubToken'),
      r = await Xa(t),
      [n] = e.split('github.com/').slice(-1),
      [o, s, , i, ...a] = n.split('/'),
      p = a.join('/');
    try {
      let { body: d } = await Wn(
        ...Ja({ accessToken: r, repo: s, owner: o, branch: i, path: p }),
      );
      return (
        (c = d.errors) != null &&
          c.length &&
          ((m = d.errors) == null
            ? void 0
            : m.some((b) => (b == null ? void 0 : b.type) === 'NOT_FOUND')) &&
          (
            await _inquirer2.default.prompt([
              {
                type: 'confirm',
                name: 'removeToken',
                message:
                  "Your token doesn't have the correct permissions, should we remove it?",
              },
            ])
          ).removeToken &&
          (await _fsextra.unlink.call(void 0, t)),
        (f = (l = d.data) == null ? void 0 : l.repository) == null
          ? void 0
          : f.object.text
      );
    } catch (d) {
      throw d.body
        ? (d.body.message === 'Bad credentials' &&
            (
              await _inquirer2.default.prompt([
                {
                  type: 'confirm',
                  name: 'removeToken',
                  message:
                    "Your token doesn't have the correct permissions, should we remove it?",
                },
              ])
            ).removeToken &&
            (await _fsextra.unlink.call(void 0, t)),
          d.body.message || `Oups... \u{1F37B}. ${d}`)
        : `Oups... \u{1F37B}. ${d}`;
    }
  },
  _n = {
    order: 199,
    canRead(e) {
      return e.url.includes('github.com');
    },
    read(e) {
      return Za(e.url);
    },
  };
u();
var xt = (e) => e && typeof e == 'object';
function Pe(e, t) {
  return !xt(t) || !xt(e)
    ? e
    : Object.entries(t).reduce((r, [n, o]) => {
        let s = r[n];
        return (
          Array.isArray(s) && Array.isArray(o)
            ? (r[n] = [...s, ...o])
            : xt(s) && xt(o)
            ? (r[n] = Pe(s, o))
            : (r[n] = o),
          r
        );
      }, e);
}
u();
var Qn = ({ title: e, description: t, version: r }) => [
  `Generated by ${Ut.name} v${Ut.version} \u{1F37A}`,
  'Do not edit manually.',
  ...(e ? [e] : []),
  ...(t ? [t] : []),
  ...(r ? [`OpenAPI spec version: ${r}`] : []),
];
u();
var _findup = require('find-up');
var _findup2 = _interopRequireDefault(_findup);
var zn = async (e, t = process.cwd()) => {
  if (!e) {
    let n = await _findup2.default.call(void 0, ['package.json'], { cwd: t });
    return n ? await Promise.resolve().then(() => ye(W(n))) : void 0;
  }
  let r = le(e, t);
  if (_fsextra.existsSync.call(void 0, r))
    return await Promise.resolve().then(() => ye(W(r)));
};
u();
var _tsconfck = require('tsconfck');
var Ln = async (e, t = process.cwd()) => {
    var r, n;
    if (mt(e)) {
      let o = await _findup2.default.call(
        void 0,
        ['tsconfig.json', 'jsconfig.json'],
        { cwd: t },
      );
      return o ? (await _tsconfck.parse.call(void 0, o)).tsconfig : void 0;
    }
    if (F(e)) {
      let o = le(e, t);
      if (_fsextra.existsSync.call(void 0, o)) {
        let s = await _tsconfck.parse.call(void 0, o);
        return (
          ((n =
            (r = s.referenced) == null
              ? void 0
              : r.find(({ tsconfigFile: a }) => a === o)) == null
            ? void 0
            : n.tsconfig) || s.tsconfig
        );
      }
      return;
    }
    if (q(e)) return e;
  },
  Q = (exports.J = (e) => {
    var t, r, n;
    return e
      ? !!((n =
          (t = e == null ? void 0 : e.compilerOptions) == null
            ? void 0
            : t.allowSyntheticDefaultImports) != null
          ? n
          : (r = e == null ? void 0 : e.compilerOptions) == null
          ? void 0
          : r.esModuleInterop)
      : !0;
  });
function xg(e) {
  return e;
}
var Yn = async (e, t = process.cwd(), r = {}) => {
    var y,
      h,
      S,
      w,
      P,
      j,
      I,
      R,
      G,
      Z,
      ee,
      te,
      Me,
      it,
      Be,
      _e,
      Qe,
      ze,
      at,
      pt,
      vr,
      Gr,
      Cr,
      Dr,
      kr,
      qr,
      Fr,
      Vr,
      Nr,
      Ur,
      Wr,
      Br,
      _r,
      Qr,
      zr,
      Kr,
      Lr,
      Hr,
      Yr,
      Jr,
      Xr,
      Zr,
      en,
      tn,
      rn,
      nn,
      on,
      sn,
      an,
      pn,
      cn,
      mn,
      un,
      ln,
      fn;
    let n = await (L(e) ? e() : e);
    n.input ||
      (X().error(_chalk2.default.red('Config require an input')),
      process.exit(1)),
      n.output ||
        (X().error(_chalk2.default.red('Config require an output')),
        process.exit(1));
    let o = F(n.input) ? { target: n.input } : n.input,
      s = F(n.output) ? { target: n.output } : n.output;
    typeof ((h = (y = s.override) == null ? void 0 : y.angular) == null
      ? void 0
      : h.provideInRoot) < 'u' &&
      console.warn('provideInRoot is deprecated, use provideIn instead');
    let i = le(s.workspace || '', t),
      { clean: a, prettier: p, client: c, mode: m, mock: l, tslint: f } = r,
      d = await Ln(s.tsconfig || r.tsconfig, t),
      g = await zn(s.packageJson || r.packageJson, t),
      b = {
        input: {
          target: sp(o.target, t),
          validation: o.validation || !1,
          override: {
            transformer: le(
              (S = o.override) == null ? void 0 : S.transformer,
              t,
            ),
          },
          converterOptions: (w = o.converterOptions) != null ? w : {},
          parserOptions: Pe(op, (P = o.parserOptions) != null ? P : {}),
        },
        output: {
          target: le(s.target, i),
          schemas: le(s.schemas, i),
          workspace: s.workspace ? i : void 0,
          client:
            (I = (j = s.client) != null ? j : c) != null
              ? I
              : B.AXIOS_FUNCTIONS,
          mode: ip((R = s.mode) != null ? R : m),
          mock: (Z = (G = s.mock) != null ? G : l) != null ? Z : !1,
          clean: (te = (ee = s.clean) != null ? ee : a) != null ? te : !1,
          prettier: (it = (Me = s.prettier) != null ? Me : p) != null ? it : !1,
          tslint: (_e = (Be = s.tslint) != null ? Be : f) != null ? _e : !1,
          tsconfig: d,
          packageJson: g,
          override: T($({}, s.override), {
            operations: Hn(
              (ze = (Qe = s.override) == null ? void 0 : Qe.operations) != null
                ? ze
                : {},
              i,
            ),
            tags: Hn(
              (pt = (at = s.override) == null ? void 0 : at.tags) != null
                ? pt
                : {},
              i,
            ),
            mutator: De(i, (vr = s.override) == null ? void 0 : vr.mutator),
            formData:
              (kr = J((Gr = s.override) == null ? void 0 : Gr.formData)
                ? (Dr = s.override) == null
                  ? void 0
                  : Dr.formData
                : De(i, (Cr = s.override) == null ? void 0 : Cr.formData)) !=
              null
                ? kr
                : !0,
            formUrlEncoded:
              (Nr = J((qr = s.override) == null ? void 0 : qr.formUrlEncoded)
                ? (Vr = s.override) == null
                  ? void 0
                  : Vr.formUrlEncoded
                : De(
                    i,
                    (Fr = s.override) == null ? void 0 : Fr.formUrlEncoded,
                  )) != null
                ? Nr
                : !0,
            header:
              ((Ur = s.override) == null ? void 0 : Ur.header) === !1
                ? !1
                : L((Wr = s.override) == null ? void 0 : Wr.header)
                ? (Br = s.override) == null
                  ? void 0
                  : Br.header
                : Qn,
            requestOptions:
              (Qr = (_r = s.override) == null ? void 0 : _r.requestOptions) !=
              null
                ? Qr
                : !0,
            components: {
              schemas: $(
                { suffix: Le.schemas },
                (Lr =
                  (Kr = (zr = s.override) == null ? void 0 : zr.components) ==
                  null
                    ? void 0
                    : Kr.schemas) != null
                  ? Lr
                  : {},
              ),
              responses: $(
                { suffix: Le.responses },
                (Jr =
                  (Yr = (Hr = s.override) == null ? void 0 : Hr.components) ==
                  null
                    ? void 0
                    : Yr.responses) != null
                  ? Jr
                  : {},
              ),
              parameters: $(
                { suffix: Le.parameters },
                (en =
                  (Zr = (Xr = s.override) == null ? void 0 : Xr.components) ==
                  null
                    ? void 0
                    : Zr.parameters) != null
                  ? en
                  : {},
              ),
              requestBodies: $(
                { suffix: Le.requestBodies },
                (nn =
                  (rn = (tn = s.override) == null ? void 0 : tn.components) ==
                  null
                    ? void 0
                    : rn.requestBodies) != null
                  ? nn
                  : {},
              ),
            },
            query: $(
              { useQuery: !0 },
              (sn = (on = s.override) == null ? void 0 : on.query) != null
                ? sn
                : {},
            ),
            angular: {
              provideIn:
                (ln =
                  (un =
                    (pn = (an = s.override) == null ? void 0 : an.angular) ==
                    null
                      ? void 0
                      : pn.provideIn) != null
                    ? un
                    : (mn = (cn = s.override) == null ? void 0 : cn.angular) ==
                      null
                    ? void 0
                    : mn.provideInRoot) != null
                  ? ln
                  : 'root',
            },
            useDates: ((fn = s.override) == null ? void 0 : fn.useDates) || !1,
          }),
        },
      };
    return (
      b.input.target ||
        (X().error(_chalk2.default.red('Config require an input target')),
        process.exit(1)),
      !b.output.target &&
        !b.output.schemas &&
        (X().error(
          _chalk2.default.red('Config require an output target or schemas'),
        ),
        process.exit(1)),
      b
    );
  },
  op = { validate: !0, resolve: { github: _n } },
  De = (e, t) => {
    var r;
    return q(t)
      ? (t.path ||
          (X().error(_chalk2.default.red('Mutator need a path')),
          process.exit(1)),
        T($({}, t), {
          path: _upath.resolve.call(void 0, e, t.path),
          default: (r = t.default || !t.name) != null ? r : !1,
        }))
      : F(t)
      ? { path: _upath.resolve.call(void 0, e, t), default: !0 }
      : t;
  },
  sp = (e, t) => (F(e) && !Oe(e) ? le(e, t) : e),
  le = (e, t) => (F(e) ? _upath.resolve.call(void 0, t, e) : e),
  Hn = (e, t) =>
    Object.fromEntries(
      Object.entries(e).map((c) => {
        var [r, m] = c,
          l = m,
          {
            transformer: n,
            mutator: o,
            formData: s,
            formUrlEncoded: i,
            requestOptions: a,
          } = l,
          p = we(l, [
            'transformer',
            'mutator',
            'formData',
            'formUrlEncoded',
            'requestOptions',
          ]);
        var f, d;
        return [
          r,
          T(
            $(
              $($({}, p), n ? { transformer: le(n, t) } : {}),
              o ? { mutator: De(t, o) } : {},
            ),
            {
              formData: (f = J(s) ? s : De(t, s)) != null ? f : !0,
              formUrlEncoded: (d = J(i) ? i : De(t, i)) != null ? d : !0,
              requestOptions: a != null ? a : !0,
            },
          ),
        ];
      }),
    ),
  ip = (e) =>
    e
      ? Object.values(ge).includes(e)
        ? e
        : (X().warn(
            _chalk2.default.yellow(`Unknown the provided mode => ${e}`),
          ),
          ge.SINGLE)
      : ge.SINGLE;
u();
var Jn = async (e, t, r = '.') => {
  if (!e) return;
  let { watch: n } = await Promise.resolve().then(() => ye(W('chokidar'))),
    o = ['**/{.git,node_modules}/**'],
    s =
      typeof e == 'boolean'
        ? r
        : Array.isArray(e)
        ? e.filter((a) => typeof a == 'string')
        : e;
  N(
    `Watching for changes in ${
      Array.isArray(s) ? s.map((a) => '"' + a + '"').join(' | ') : '"' + s + '"'
    }`,
  ),
    n(s, { ignorePermissionErrors: !0, ignored: o }).on('all', async (a, p) => {
      N(`Change detected: ${a} ${p}`);
      try {
        await t();
      } catch (c) {
        N(_chalk2.default.red(c));
      }
    });
};
u();
u();
var _swaggerparser = require('@apidevtools/swagger-parser');
var _swaggerparser2 = _interopRequireDefault(_swaggerparser);
var _console = require('console');
u();
var _lodashomit = require('lodash.omit');
var _lodashomit2 = _interopRequireDefault(_lodashomit);
u();
var A = (e, t, r) =>
  e.reduce(async (n, ...o) => t(await n, ...o), Promise.resolve(r));
u();
var _swagger2openapi = require('swagger2openapi');
var _swagger2openapi2 = _interopRequireDefault(_swagger2openapi);
var Xn = async (e, t = {}, r) => {
  try {
    return new Promise((n) => {
      !e.openapi && e.swagger === '2.0'
        ? _swagger2openapi2.default.convertObj(e, t, (o, s) => {
            o
              ? (N(
                  _chalk2.default.yellow(`${r}
=> ${o}`),
                ),
                n(e))
              : n(s.openapi);
          })
        : n(e);
    });
  } catch (n) {
    throw `Oups... \u{1F37B}.
Path: ${r}
Parsing Error: ${n}`;
  }
};
u();
var St = async (e, t = process.cwd(), r = !0) => {
  if (!e) return e;
  try {
    if (F(e)) {
      let n = _upath.resolve.call(void 0, t, e),
        o = await Promise.resolve().then(() => ye(W(n)));
      return r && q(o) && o.default ? o.default : o;
    }
    return Promise.resolve(e);
  } catch (n) {
    throw `Oups... \u{1F37B}. Path: ${e} => ${n}`;
  }
};
u();
u();
var Zn = (e) => /[^{]*{[\w_-]*}.*/.test(e),
  eo = (e) => {
    let t = e.match(/([^{]*){?([\w_-]*)}?(.*)/);
    if (!(t != null && t.length)) return e;
    let r = t[1],
      n = U(E(t[2]), { es5keyword: !0, underscore: !0, dash: !0, dot: !0 }),
      o = Zn(t[3]) ? eo(t[3]) : t[3];
    return Zn(e) ? `${r}\${${n}}${o}` : `${r}${n}${o}`;
  },
  to = (e) =>
    e
      .split('/')
      .reduce(
        (r, n, o) =>
          !n && !o ? r : n.includes('{') ? `${r}/${eo(n)}` : `${r}/${n}`,
        '',
      );
u();
var k = (e, t, r = []) => {
  var p;
  if ((p = e == null ? void 0 : e.schema) != null && p.$ref) {
    let c = k(e == null ? void 0 : e.schema, t, r);
    return { schema: T($({}, e), { schema: c.schema }), imports: r };
  }
  if (!D(e)) return { schema: e, imports: r };
  let { name: n, originalName: o, specKey: s, refPaths: i } = Ge(e.$ref, t),
    a = _lodashget2.default.call(void 0, t.specs[s || t.specKey], i);
  if (!a) throw `Oups... \u{1F37B}. Ref not found: ${e.$ref}`;
  return k(a, T($({}, t), { specKey: s || t.specKey }), [
    ...r,
    { name: n, specKey: s, schemaName: o },
  ]);
};
u();
u();
var lp = [
    {
      exports: [
        { name: 'HttpClient', values: !0 },
        { name: 'HttpHeaders' },
        { name: 'HttpParams' },
        { name: 'HttpContext' },
      ],
      dependency: '@angular/common/http',
    },
    {
      exports: [{ name: 'Injectable', values: !0 }],
      dependency: '@angular/core',
    },
    { exports: [{ name: 'Observable', values: !0 }], dependency: 'rxjs' },
  ],
  ro = [],
  no = () => lp,
  oo = (e) => {
    let t = U(e);
    return `${x(t)}Service`;
  },
  so = ({
    title: e,
    isRequestOptions: t,
    isMutator: r,
    isGlobalMutator: n,
    provideInRoot: o,
    provideIn: s,
  }) => `
${
  t && !n
    ? `type HttpClientOptions = {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
};`
    : ''
}

${
  t && r
    ? `// eslint-disable-next-line
    type ThirdParameter<T extends (...args: any) => any> = T extends (
  config: any,
  httpClient: any,
  args: infer P,
) => any
  ? P
  : never;`
    : ''
}

@Injectable(${s ? `{ providedIn: '${J(s) ? 'root' : s}' }` : ''})
export class ${e} {
  constructor(
    private http: HttpClient,
  ) {}`,
  io = () => `};

${ro.join(`
`)}`,
  fp = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: i,
      override: a,
      formData: p,
      formUrlEncoded: c,
    },
    { route: m },
  ) => {
    let l = (a == null ? void 0 : a.requestOptions) !== !1,
      f = (a == null ? void 0 : a.formData) !== !1,
      d = (a == null ? void 0 : a.formUrlEncoded) !== !1,
      g = oe.includes(i),
      b = ue({
        formData: p,
        formUrlEncoded: c,
        body: o,
        isFormData: f,
        isFormUrlEncoded: d,
      }),
      y = r.definition.success || 'unknown';
    if ((ro.push(`export type ${x(t)}ClientResult = NonNullable<${y}>`), n)) {
      let S = ce({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: i,
          isFormData: f,
          isFormUrlEncoded: d,
          hasSignal: !1,
          isBodyVerb: g,
        }),
        w = l ? me(a == null ? void 0 : a.requestOptions, n.hasThirdArg) : '';
      return ` ${t}<TData = ${y}>(
    ${V(s, 'implementation')}
 ${
   l && n.hasThirdArg ? `options?: ThirdParameter<typeof ${n.name}>` : ''
 }) {${b}
      return ${n.name}<TData>(
      ${S},
      this.http,
      ${w});
    }
  `;
    }
    let h = pe({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: i,
      requestOptions: a == null ? void 0 : a.requestOptions,
      isFormData: f,
      isFormUrlEncoded: d,
      isAngular: !0,
    });
    return ` ${t}<TData = ${y}>(
    ${V(s, 'implementation')} ${
      l
        ? `options?: HttpClientOptions
`
        : ''
    }  ): Observable<TData>  {${b}
    return this.http.${i}<TData>(${h});
  }
`;
  },
  ao = (e, t) => {
    let r = ae(e);
    return { implementation: fp(e, t), imports: r };
  };
u();
var gp = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
      ],
      dependency: 'axios',
    },
  ],
  wt = new Map(),
  er = (e) => [...(e ? [] : gp)],
  dp = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: i,
      override: a,
      formData: p,
      formUrlEncoded: c,
    },
    { route: m, context: l },
  ) => {
    let f = (a == null ? void 0 : a.requestOptions) !== !1,
      d = (a == null ? void 0 : a.formData) !== !1,
      g = (a == null ? void 0 : a.formUrlEncoded) !== !1,
      b = Q(l.tsconfig),
      y = ue({
        formData: p,
        formUrlEncoded: c,
        body: o,
        isFormData: d,
        isFormUrlEncoded: g,
      }),
      h = oe.includes(i);
    if (n) {
      let w = ce({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: i,
          isFormData: d,
          isFormUrlEncoded: g,
          isBodyVerb: h,
          hasSignal: !0,
        }),
        P = f ? me(a == null ? void 0 : a.requestOptions, n.hasSecondArg) : '';
      return (
        wt.set(
          t,
          (j) =>
            `export type ${x(t)}Result = NonNullable<Awaited<ReturnType<${
              j ? `ReturnType<typeof ${j}>['${t}']` : `typeof ${t}`
            }>>>`,
        ),
        `const ${t} = (
    ${V(s, 'implementation')}
 ${f && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
          h
            ? `
`
            : `signal?: AbortSignal
`
        }) => {${y}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${w},
      ${P});
    }
  `
      );
    }
    let S = pe({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: i,
      requestOptions: a == null ? void 0 : a.requestOptions,
      isFormData: d,
      isFormUrlEncoded: g,
    });
    return (
      wt.set(
        t,
        () =>
          `export type ${x(t)}Result = AxiosResponse<${
            r.definition.success || 'unknown'
          }>`,
      ),
      `const ${t} = <TData = AxiosResponse<${
        r.definition.success || 'unknown'
      }>>(
    ${V(s, 'implementation')} ${
        f
          ? `options?: AxiosRequestConfig
`
          : ''
      } ): Promise<TData> => {${y}
    return axios${b ? '' : '.default'}.${i}(${S});
  }
`
    );
  },
  tr = (e) => {
    let t = U(e);
    return `get${x(t)}`;
  },
  rr = ({ title: e, isRequestOptions: t, isMutator: r, noFunction: n }) => `
${
  t && r
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}
  ${
    n
      ? ''
      : `export const ${e} = () => {
`
  }`,
  nr = ({
    operationNames: e,
    title: t,
    noFunction: r,
    hasMutator: n,
    hasAwaitedType: o,
  }) => {
    let s = `return {${e.join(',')}}};
`,
      i = e
        .map((p) => {
          var c;
          return wt.has(p)
            ? (c = wt.get(p)) == null
              ? void 0
              : c(r || !t ? void 0 : t)
            : '';
        })
        .filter(Boolean),
      a =
        n && !o
          ? `
type AwaitedInput<T> = PromiseLike<T> | T;

    type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
          : '';
    return (
      i.length &&
        (a += i.join(`
`)),
      r ? a : s + a
    );
  },
  or = (e, t) => {
    let r = ae(e);
    return { implementation: dp(e, t), imports: r };
  };
u();
u();
u();
u();
var po = {
  email: 'faker.internet.email()',
  zipCode: 'faker.address.zipCode()',
  city: 'faker.address.city()',
  streetName: 'faker.address.streetName()',
  country: 'faker.address.country()',
  date: 'faker.date.recent()',
  iban: 'faker.finance.iban()',
  userName: 'faker.internet.userName()',
  firstName: 'faker.name.firstName()',
  lastName: 'faker.name.lastName()',
  jobTitle: 'faker.name.jobTitle()',
  gender: 'faker.name.gender()',
  phoneNumber: 'faker.phone.phoneNumber()',
  url: 'faker.internet.url()',
};
u();
u();
var co = (e, t, r) => {
  var i, a, p, c;
  let n = Object.entries(
      (a = (i = t.specs[r].components) == null ? void 0 : i.schemas) != null
        ? a
        : [],
    ).reduce((m, [l, f]) => ((m[l] = f), m), {}),
    o = Object.entries(
      (c = (p = t.specs[r].components) == null ? void 0 : p.responses) != null
        ? c
        : [],
    ).reduce((m, [l, f]) => {
      var d, g;
      return (
        (m[l] = D(f)
          ? f
          : (g = (d = f.content) == null ? void 0 : d['application/json']) ==
            null
          ? void 0
          : g.schema),
        m
      );
    }, {}),
    s = $($({}, n), o);
  return T($({}, s[e]), { specKey: r });
};
var yp = (e) => e[0] === '/' && e[e.length - 1] === '/',
  Tt = (e = {}, t) => {
    let r = Object.entries(e).find(
      ([n]) =>
        !!(
          (yp(n) && new RegExp(n.slice(1, n.length - 1)).test(t.name)) ||
          `#.${n}` === (t.path ? t.path : `#.${t.name}`)
        ),
    );
    if (!!r)
      return {
        value: Ye(r[1], t.nullable),
        imports: [],
        name: t.name,
        overrided: !0,
      };
  },
  Ye = (e, t) => (t ? `faker.random.arrayElement([${e}, null])` : e),
  he = async ({
    schema: e,
    mockOptions: t,
    operationId: r,
    tags: n,
    combine: o,
    context: s,
    imports: i,
  }) => {
    if (D(e)) {
      let { name: p, specKey: c } = Ge(
          e.$ref,
          T($({}, s), { specKey: e.specKey || s.specKey }),
        ),
        m = T($({}, co(p, s, c || e.specKey || s.specKey)), {
          name: p,
          path: e.path,
          isRef: !0,
          specKey: c || e.specKey,
        }),
        l = await He({
          item: m,
          mockOptions: t,
          operationId: r,
          tags: n,
          combine: o,
          context: s,
          imports: i,
        });
      return T($({}, l), { type: m.type });
    }
    let a = await He({
      item: e,
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: i,
    });
    return T($({}, a), { type: e.type });
  };
u();
var _cuid = require('cuid');
var _cuid2 = _interopRequireDefault(_cuid);
u();
var mo = (e = '', t) => {
  var r;
  return e ? ((r = e.match(new RegExp(t, 'g'))) != null ? r : []).length : 0;
};
u();
var uo = async ({
  item: e,
  items: t,
  isOneOf: r,
  mockOptions: n,
  operationId: o,
  tags: s,
  combine: i,
  context: a,
  imports: p,
}) => {
  var f;
  let c = [],
    m = [...((f = i == null ? void 0 : i.properties) != null ? f : [])];
  return {
    value: await A(
      t,
      async (d, g, b, y) => {
        var S;
        let h = await he({
          schema: T($({}, g), {
            name: e.name,
            path: e.path ? e.path : '#',
            specKey: e.specKey,
          }),
          combine: r ? void 0 : { properties: m },
          mockOptions: n,
          operationId: o,
          tags: s,
          context: a,
          imports: p,
        });
        return (
          (c = [...c, ...h.imports]),
          (m = [...m, ...((S = h.properties) != null ? S : [])]),
          !b && !i
            ? h.enums || r
              ? y.length === 1
                ? `faker.random.arrayElement([${h.value}])`
                : `faker.random.arrayElement([${h.value},`
              : y.length === 1
              ? h.type !== 'object'
                ? `${h.value}`
                : `{${h.value}}`
              : `{${h.value},`
            : y.length - 1 === b
            ? h.enums || r
              ? d + h.value + (i ? '' : '])')
              : d + h.value + (i ? '' : '}')
            : h.value
            ? d + h.value + ','
            : d
        );
      },
      '',
    ),
    imports: c,
    name: e.name,
    properties: m,
  };
};
u();
var ke = (e) => (_esutils.keyword.isIdentifierNameES5(e) ? e : `'${e}'`);
var lo = async ({
  item: e,
  mockOptions: t,
  operationId: r,
  tags: n,
  combine: o,
  context: s,
  imports: i,
}) => {
  if (D(e))
    return he({
      schema: T($({}, e), {
        name: e.name,
        path: e.path ? `${e.path}.${e.name}` : e.name,
        specKey: e.specKey,
      }),
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: i,
    });
  if (e.allOf || e.oneOf || e.anyOf)
    return uo({
      item: e,
      items: e.allOf || e.oneOf || e.anyOf,
      isOneOf: !!(e.oneOf || e.anyOf),
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: i,
    });
  if (e.properties) {
    let a = o ? '' : '{',
      p = [],
      c = [];
    return (
      (a += (
        await Promise.all(
          Object.entries(e.properties).map(async ([m, l]) => {
            if (o != null && o.properties.includes(m)) return;
            let f =
              (t == null ? void 0 : t.required) ||
              (Array.isArray(e.required) ? e.required : []).includes(m);
            if (mo(e.path, `\\.${m}\\.`) >= 1) return;
            let d = await he({
              schema: T($({}, l), {
                name: m,
                path: e.path ? `${e.path}.${m}` : `#.${m}`,
                specKey: e.specKey,
              }),
              mockOptions: t,
              operationId: r,
              tags: n,
              context: s,
              imports: p,
            });
            (p = [...p, ...d.imports]), (c = [...c, m]);
            let g = ke(m);
            return !f && !d.overrided
              ? `${g}: faker.random.arrayElement([${d.value}, undefined])`
              : `${g}: ${d.value}`;
          }),
        )
      )
        .filter(Boolean)
        .join(', ')),
      (a += o ? '' : '}'),
      { value: a, imports: p, name: e.name, properties: c }
    );
  }
  if (e.additionalProperties) {
    if (J(e.additionalProperties))
      return { value: '{}', imports: [], name: e.name };
    let a = await he({
      schema: T($({}, e.additionalProperties), {
        name: e.name,
        path: e.path ? `${e.path}.#` : '#',
        specKey: e.specKey,
      }),
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: i,
    });
    return T($({}, a), {
      value: `{
        '${_cuid2.default.call(void 0)}': ${a.value}
      }`,
    });
  }
  return { value: '{}', imports: [], name: e.name };
};
var He = async ({
  item: e,
  imports: t,
  mockOptions: r,
  operationId: n,
  tags: o,
  combine: s,
  context: i,
}) => {
  var f, d, g, b;
  let a = Tt(
    (d = (f = r == null ? void 0 : r.operations) == null ? void 0 : f[n]) ==
      null
      ? void 0
      : d.properties,
    e,
  );
  if (a) return a;
  let p = Object.entries(
      (g = r == null ? void 0 : r.tags) != null ? g : {},
    ).reduce((y, [h, S]) => (o.includes(h) ? Pe(y, S) : y), {}),
    c = Tt(p == null ? void 0 : p.properties, e);
  if (c) return c;
  let m = Tt(r == null ? void 0 : r.properties, e);
  if (m) return m;
  let l = $($({}, po), (b = r == null ? void 0 : r.format) != null ? b : {});
  if (e.format && l[e.format])
    return {
      value: Ye(l[e.format], e.nullable),
      imports: [],
      name: e.name,
      overrided: !1,
    };
  switch (e.type) {
    case 'number':
    case 'integer':
      return {
        value: Ye('faker.datatype.number()', e.nullable),
        imports: [],
        name: e.name,
      };
    case 'boolean':
      return { value: 'faker.datatype.boolean()', imports: [], name: e.name };
    case 'array': {
      if (!e.items) return { value: [], imports: [], name: e.name };
      let {
        value: y,
        enums: h,
        imports: S,
        name: w,
      } = await he({
        schema: T($({}, e.items), {
          name: e.name,
          path: e.path ? `${e.path}.[]` : '#.[]',
          specKey: e.specKey,
        }),
        combine: s,
        mockOptions: r,
        operationId: n,
        tags: o,
        context: i,
        imports: t,
      });
      if (h) {
        if (!D(e.items)) return { value: y, imports: S, name: e.name };
        let P = t.find((I) => w.replace('[]', '') === I.name);
        return {
          value: `faker.random.arrayElements(Object.values(${
            (P == null ? void 0 : P.name) || w
          }))`,
          imports: P ? [...S, T($({}, P), { values: !0 })] : S,
          name: e.name,
        };
      }
      return {
        value: `[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (${y}))`,
        imports: S,
        name: e.name,
      };
    }
    case 'string': {
      let y = 'faker.random.word()',
        h = [];
      if (e.enum) {
        let S = "['" + e.enum.map((w) => dt(w)).join("','") + "']";
        e.isRef &&
          ((S = `Object.values(${e.name})`),
          (h = [{ name: e.name, values: !0 }])),
          (y = `faker.random.arrayElement(${S})`);
      }
      return {
        value: Ye(y, e.nullable),
        enums: e.enum,
        name: e.name,
        imports: h,
      };
    }
    case 'object':
    default:
      return lo({
        item: e,
        mockOptions: r,
        operationId: n,
        tags: o,
        combine: s,
        context: i,
        imports: t,
      });
  }
};
var Rt = (e, t) =>
    Object.entries(L(e) ? e(t) : e).reduce((r, [n, o]) => {
      let s = L(o) ? `(${o})()` : ne(o);
      return (
        (r[n] =
          s == null
            ? void 0
            : s.replace(/import_faker.defaults|import_faker.faker/g, 'faker')),
        r
      );
    }, {}),
  hp = (e, t) => {
    var r, n, o;
    return $(
      $(
        $(
          $(
            {
              required:
                (r = t == null ? void 0 : t.mock) == null ? void 0 : r.required,
            },
            (n = t == null ? void 0 : t.mock) != null && n.properties
              ? { properties: Rt(t.mock.properties, e) }
              : {},
          ),
          (o = t == null ? void 0 : t.mock) != null && o.format
            ? { format: Rt(t.mock.format, e) }
            : {},
        ),
        t != null && t.operations
          ? {
              operations: Object.entries(t.operations).reduce((s, [i, a]) => {
                var p;
                return (
                  (p = a.mock) != null &&
                    p.properties &&
                    (s[i] = { properties: Rt(a.mock.properties, e) }),
                  s
                );
              }, {}),
            }
          : {},
      ),
      t != null && t.tags
        ? {
            tags: Object.entries(t.tags).reduce((s, [i, a]) => {
              var p;
              return (
                (p = a.mock) != null &&
                  p.properties &&
                  (s[i] = { properties: Rt(a.mock.properties, e) }),
                s
              );
            }, {}),
          }
        : {},
    );
  },
  $p = (e) => {
    let t = e.endsWith('[]');
    switch (t ? e.slice(0, -2) : e) {
      case 'number':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.datatype.number())'
          : 'faker.datatype.number().toString()';
      case 'string':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.random.word())'
          : 'faker.random.word()';
      default:
        return 'undefined';
    }
  },
  xp = ({
    operationId: e,
    tags: t,
    response: r,
    mockOptionsWithoutFunc: n,
    transformer: o,
    context: s,
  }) =>
    A(
      r.types.success,
      async (i, { value: a, originalSchema: p, imports: c }) => {
        if (!a || Ie.includes(a)) {
          let f = $p(a);
          return i.definitions.push(o ? o(f, r.definition.success) : f), i;
        }
        if (!p) return i;
        let m = await k(p, s),
          l = await He({
            item: $(
              $({ name: a }, m.schema),
              r.imports.length ? { specKey: r.imports[0].specKey } : {},
            ),
            imports: c,
            mockOptions: n,
            operationId: e,
            tags: t,
            context: s,
          });
        return (
          i.imports.push(...l.imports),
          i.definitions.push(
            o ? o(l.value, r.definition.success) : l.value.toString(),
          ),
          i
        );
      },
      { definitions: [], imports: [] },
    ),
  fo = async ({
    operationId: e,
    tags: t,
    response: r,
    override: n,
    transformer: o,
    context: s,
  }) => {
    let i = hp(s.specs[s.specKey], n),
      { definitions: a, imports: p } = await xp({
        operationId: e,
        tags: t,
        response: r,
        mockOptionsWithoutFunc: i,
        transformer: o,
        context: s,
      });
    return { definition: '[' + a.join(', ') + ']', definitions: a, imports: p };
  },
  go = (e, t) => {
    var o, s, i;
    let r =
        (i =
          (s =
            (o = t == null ? void 0 : t.operations) == null ? void 0 : o[e]) ==
          null
            ? void 0
            : s.mock) == null
          ? void 0
          : i.data,
      n = L(r) ? `(${r})()` : ne(r);
    return n == null
      ? void 0
      : n.replace(/import_faker.defaults|import_faker.faker/g, 'faker');
  };
var Sp = (e) =>
    e
      .split('')
      .reduce(
        (t, r) => (r === '{' ? t + ':' : r === '}' ? t + '' : t + U(r)),
        '',
      ),
  wp = (e, t = '*') =>
    e
      .split('/')
      .reduce(
        (n, o) => (o ? (o.includes('{') ? `${n}/${Sp(o)}` : `${n}/${o}`) : n),
        t,
      ),
  Tp = [
    { exports: [{ name: 'rest', values: !0 }], dependency: 'msw' },
    { exports: [{ name: 'faker', values: !0 }], dependency: '@faker-js/faker' },
  ],
  $e = (e, t, r, n, o) => $t(e, [...Tp, ...t], r, n, o),
  yo = async (
    { operationId: e, response: t, verb: r, tags: n },
    { pathRoute: o, override: s, context: i },
  ) => {
    var g;
    let {
        definitions: a,
        definition: p,
        imports: c,
      } = await fo({
        operationId: e,
        tags: n,
        response: t,
        override: s,
        context: i,
      }),
      m = wp(o, (g = s == null ? void 0 : s.mock) == null ? void 0 : g.baseUrl),
      l = go(e, s),
      f = '';
    l
      ? (f = l)
      : a.length > 1
      ? (f = `faker.random.arrayElement(${p})`)
      : a[0] && (f = a[0]);
    let d = t.contentTypes.includes('text/plain') ? 'text' : 'json';
    return {
      implementation: {
        function:
          f && f !== 'undefined'
            ? `export const get${x(e)}Mock = () => (${f})

`
            : '',
        handler: `rest.${r}('${m}', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),${
            f && f !== 'undefined'
              ? `
ctx.${d}(get${x(e)}Mock()),`
              : ''
          }
        )
      }),`,
      },
      imports: c,
    };
  };
u();
var _lodashomitby = require('lodash.omitby');
var _lodashomitby2 = _interopRequireDefault(_lodashomitby);
u();
var H = { PARAM: 'param', BODY: 'body', QUERY_PARAM: 'queryParam' };
var ir = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  jp = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryStoreResult' },
        { name: 'UseInfiniteQueryStoreResult' },
        { name: 'QueryKey' },
      ],
      dependency: '@sveltestack/svelte-query',
    },
  ],
  bo = (e) => [...(e ? [] : ir), ...jp],
  Pp = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'react-query',
    },
  ],
  Oo = (e) => [...(e ? [] : ir), ...Pp],
  Ep = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
      ],
      dependency: 'vue-query',
    },
    {
      exports: [
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'vue-query/types',
    },
    {
      exports: [{ name: 'UseQueryReturnType' }],
      dependency: 'vue-query/lib/vue/useBaseQuery',
    },
  ],
  ho = (e) => [...(e ? [] : ir), ...Ep],
  Mp = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: i,
      formData: a,
      formUrlEncoded: p,
      override: c,
    },
    { route: m, context: l },
  ) => {
    let f = (c == null ? void 0 : c.requestOptions) !== !1,
      d = (c == null ? void 0 : c.formData) !== !1,
      g = (c == null ? void 0 : c.formUrlEncoded) !== !1,
      b = Q(l.tsconfig),
      y = oe.includes(i),
      h = ue({
        formData: a,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: g,
      });
    if (n) {
      let w = ce({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: i,
          isFormData: d,
          isFormUrlEncoded: g,
          isBodyVerb: y,
          hasSignal: !0,
        }),
        P =
          (n == null ? void 0 : n.bodyTypeName) && o.definition
            ? V(s, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${o.definition}`),
                `$1: ${n.bodyTypeName}<${o.definition}>`,
              )
            : V(s, 'implementation'),
        j = f ? me(c == null ? void 0 : c.requestOptions, n.hasSecondArg) : '';
      return n.isHook
        ? `export const use${x(t)}Hook = () => {
        const ${t} = ${n.name}<${r.definition.success || 'unknown'}>();

        return (
    ${P}
${
  y
    ? ''
    : `signal?: AbortSignal,
`
} ${
            f && n.hasSecondArg
              ? `options?: SecondParameter<typeof ${n.name}>`
              : ''
          }) => {${h}
        return ${t}(
          ${w},
          ${j});
        }
      }
    `
        : `export const ${t} = (
    ${P}
 ${f && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
            y
              ? `
`
              : `signal?: AbortSignal
`
          }) => {${h}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${w},
      ${j});
    }
  `;
    }
    let S = pe({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: i,
      requestOptions: c == null ? void 0 : c.requestOptions,
      isFormData: d,
      isFormUrlEncoded: g,
    });
    return `export const ${t} = (
    ${V(s, 'implementation')} ${
      f
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${h}
    return axios${b ? '' : '.default'}.${i}(${S});
  }
`;
  },
  sr = { INFINITE: 'infiniteQuery', QUERY: 'query' },
  Ip = ['getNextPageParam', 'getPreviousPageParam'],
  Ap = ({ params: e, options: t, type: r }) => {
    var o;
    if (t === !1) return '';
    let n = q(t)
      ? ` ${
          (o = ne(
            _lodashomitby2.default.call(
              void 0,
              t,
              (s, i) => !!(r !== sr.INFINITE && Ip.includes(i)),
            ),
          )) == null
            ? void 0
            : o.slice(1, -1)
        }`
      : '';
    return e.length
      ? `{${
          !q(t) || !t.hasOwnProperty('enabled')
            ? `enabled: !!(${e.map(({ name: s }) => s).join(' && ')}),`
            : ''
        }${n} ...queryOptions}`
      : t
      ? `{${n} ...queryOptions}`
      : 'queryOptions';
  },
  $o = ({
    operationName: e,
    definitions: t,
    mutator: r,
    isRequestOptions: n,
    type: o,
  }) => {
    let s = r == null ? void 0 : r.isHook,
      i = o
        ? `Use${x(o)}Options<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${x(e)}Hook>` : `typeof ${e}`
          }>>, TError, TData>`
        : `UseMutationOptions<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${x(e)}Hook>` : `typeof ${e}`
          }>>, TError,${t ? `{${t}}` : 'TVariables'}, TContext>`;
    return n
      ? `options?: { ${o ? 'query' : 'mutation'}?:${i}, ${
          r
            ? r != null && r.hasSecondArg
              ? `request?: SecondParameter<typeof ${r.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        }}
`
      : `${o ? 'queryOptions' : 'mutationOptions'}?: ${i}`;
  },
  vp = ({ outputClient: e, type: t, isMutatorHook: r, operationName: n }) => {
    switch (e) {
      case B.SVELTE_QUERY:
        return `Use${x(t)}StoreResult<Awaited<ReturnType<${
          r ? `ReturnType<typeof use${x(n)}Hook>` : `typeof ${n}`
        }>>, TError, TData, QueryKey>`;
      case B.VUE_QUERY:
        return ` UseQueryReturnType<TData, TError, Use${x(
          t,
        )}Result<TData, TError>>`;
      case B.REACT_QUERY:
      default:
        return ` Use${x(t)}Result<TData, TError>`;
    }
  },
  Gp = ({
    queryOption: { name: e, queryParam: t, options: r, type: n },
    operationName: o,
    queryProps: s,
    queryKeyFnName: i,
    properties: a,
    params: p,
    props: c,
    mutator: m,
    isRequestOptions: l,
    response: f,
    outputClient: d,
  }) => {
    let g = t
        ? c
            .map(({ name: S }) =>
              S === 'params' ? `{ ${t}: pageParam, ...params }` : S,
            )
            .join(',')
        : a,
      b = vp({
        outputClient: d,
        type: n,
        isMutatorHook: m == null ? void 0 : m.isHook,
        operationName: o,
      }),
      y = `AxiosError<${f.definition.errors || 'unknown'}>`;
    m &&
      (y = m.hasErrorType
        ? `${m.default ? x(o) : ''}ErrorType<${
            f.definition.errors || 'unknown'
          }>`
        : f.definition.errors || 'unknown');
    let h =
      m != null && m.isHook
        ? `ReturnType<typeof use${x(o)}Hook>`
        : `typeof ${o}`;
    return `
export type ${x(e)}QueryResult = NonNullable<Awaited<ReturnType<${h}>>>
export type ${x(e)}QueryError = ${y}

export const ${E(
      `use-${e}`,
    )} = <TData = Awaited<ReturnType<${h}>>, TError = ${y}>(
 ${s} ${$o({
      operationName: o,
      definitions: '',
      mutator: m,
      isRequestOptions: l,
      type: n,
    })}
  ): ${b} & { queryKey: QueryKey } => {

  ${
    l
      ? `const {query: queryOptions${
          m
            ? m.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  const queryKey = queryOptions?.queryKey ?? ${i}(${a});

  ${m != null && m.isHook ? `const ${o} =  use${x(o)}Hook()` : ''}

  const queryFn: QueryFunction<Awaited<ReturnType<${
    m != null && m.isHook ? `ReturnType<typeof use${x(o)}Hook>` : `typeof ${o}`
  }>>> = (${
      t && c.some(({ type: S }) => S === 'queryParam')
        ? '{ signal, pageParam }'
        : '{ signal }'
    }) => ${o}(${g}${g ? ', ' : ''}${
      l
        ? m
          ? m.hasSecondArg
            ? 'requestOptions, signal'
            : 'signal'
          : '{ signal, ...axiosOptions }'
        : ''
    });

  const query = ${E(`use-${n}`)}<Awaited<ReturnType<${
      m != null && m.isHook
        ? `ReturnType<typeof use${x(o)}Hook>`
        : `typeof ${o}`
    }>>, TError, TData>(queryKey, queryFn, ${Ap({
      params: p,
      options: r,
      type: n,
    })})

  return {
    queryKey,
    ...query
  }
}
`;
  },
  Cp = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: i,
      mutator: a,
      response: p,
      operationId: c,
    },
    { route: m, override: { operations: l = {} }, context: f },
    d,
  ) => {
    var j;
    let g = i == null ? void 0 : i.query,
      b = (i == null ? void 0 : i.requestOptions) !== !1,
      y = (j = l[c]) == null ? void 0 : j.query;
    if (
      o === K.GET ||
      (y == null ? void 0 : y.useInfinite) ||
      (y == null ? void 0 : y.useQuery)
    ) {
      let I = n
          .map(({ name: ee, type: te }) =>
            te === H.BODY ? r.implementation : ee,
          )
          .join(','),
        R = [
          ...(g != null && g.useInfinite
            ? [
                {
                  name: E(`${t}-infinite`),
                  options: g == null ? void 0 : g.options,
                  type: sr.INFINITE,
                  queryParam: g == null ? void 0 : g.useInfiniteQueryParam,
                },
              ]
            : []),
          ...((!(g != null && g.useQuery) && !(g != null && g.useInfinite)) ||
          (g == null ? void 0 : g.useQuery)
            ? [
                {
                  name: t,
                  options: g == null ? void 0 : g.options,
                  type: sr.QUERY,
                },
              ]
            : []),
        ],
        G = E(`get-${t}-queryKey`),
        Z = V(n, 'implementation');
      return `export const ${G} = (${Z}) => [\`${m}\`${
        e ? ', ...(params ? [params]: [])' : ''
      }${r.implementation ? `, ${r.implementation}` : ''}];

    ${R.reduce(
      (ee, te) =>
        ee +
        Gp({
          queryOption: te,
          operationName: t,
          queryProps: Z,
          queryKeyFnName: G,
          properties: I,
          params: s,
          props: n,
          mutator: a,
          isRequestOptions: b,
          response: p,
          outputClient: d,
        }),
      '',
    )}
`;
    }
    let h = n
        .map(({ definition: I, type: R }) =>
          R === H.BODY
            ? a != null && a.bodyTypeName
              ? `data: ${a.bodyTypeName}<${r.definition}>`
              : `data: ${r.definition}`
            : I,
        )
        .join(';'),
      S = n
        .map(({ name: I, type: R }) => (R === H.BODY ? 'data' : I))
        .join(','),
      w = `AxiosError<${p.definition.errors || 'unknown'}>`;
    a &&
      (w = a.hasErrorType
        ? `${a.default ? x(t) : ''}ErrorType<${
            p.definition.errors || 'unknown'
          }>`
        : p.definition.errors || 'unknown');
    let P =
      a != null && a.isHook
        ? `ReturnType<typeof use${x(t)}Hook>`
        : `typeof ${t}`;
    return `
    export type ${x(t)}MutationResult = NonNullable<Awaited<ReturnType<${P}>>>
    ${
      r.definition
        ? `export type ${x(t)}MutationBody = ${
            a != null && a.bodyTypeName
              ? `${a.bodyTypeName}<${r.definition}>`
              : r.definition
          }`
        : ''
    }
    export type ${x(t)}MutationError = ${w}

    export const ${E(`use-${t}`)} = <TError = ${w},
    ${h ? '' : 'TVariables = void,'}
    TContext = unknown>(${$o({
      operationName: t,
      definitions: h,
      mutator: a,
      isRequestOptions: b,
    })}) => {
      ${
        b
          ? `const {mutation: mutationOptions${
              a
                ? a != null && a.hasSecondArg
                  ? ', request: requestOptions'
                  : ''
                : ', axios: axiosOptions'
            }} = options ?? {}`
          : ''
      }

      ${a != null && a.isHook ? `const ${t} =  use${x(t)}Hook()` : ''}


      const mutationFn: MutationFunction<Awaited<ReturnType<${P}>>, ${
      h ? `{${h}}` : 'TVariables'
    }> = (${S ? 'props' : ''}) => {
          ${S ? `const {${S}} = props ?? {}` : ''};

          return  ${t}(${S}${S ? ',' : ''}${
      b
        ? a
          ? a != null && a.hasSecondArg
            ? 'requestOptions'
            : ''
          : 'axiosOptions'
        : ''
    })
        }

      return useMutation<Awaited<ReturnType<typeof ${t}>>, TError, ${
      h ? `{${h}}` : 'TVariables'
    }, TContext>(mutationFn, mutationOptions)
    }
    `;
  },
  jt = () => '',
  Pt = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
${
  e && t
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}`,
  Et = () => '',
  Mt = (e, t, r) => {
    let n = ae(e),
      o = Mp(e, t),
      s = Cp(e, t, r);
    return {
      implementation: `${o}

${s}`,
      imports: n,
    };
  };
u();
var Dp = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  kp = [
    {
      exports: [
        { name: 'useSwr', values: !0, default: !0 },
        { name: 'SWRConfiguration' },
        { name: 'Key' },
      ],
      dependency: 'swr',
    },
  ],
  xo = (e) => [...(e ? [] : Dp), ...kp],
  qp = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: i,
      formData: a,
      formUrlEncoded: p,
      override: c,
    },
    { route: m, context: l },
  ) => {
    let f = (c == null ? void 0 : c.requestOptions) !== !1,
      d = (c == null ? void 0 : c.formData) !== !1,
      g = (c == null ? void 0 : c.formUrlEncoded) !== !1,
      b = oe.includes(i),
      y = Q(l.tsconfig),
      h = ue({
        formData: a,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: g,
      });
    if (n) {
      let w = ce({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: i,
          isFormData: d,
          isFormUrlEncoded: g,
          hasSignal: !1,
          isBodyVerb: b,
        }),
        P = f ? me(c == null ? void 0 : c.requestOptions, n.hasSecondArg) : '';
      return `export const ${t} = (
    ${V(s, 'implementation')}
 ${
   f && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>` : ''
 }) => {${h}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${w},
      ${P});
    }
  `;
    }
    let S = pe({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: i,
      requestOptions: c == null ? void 0 : c.requestOptions,
      isFormData: d,
      isFormUrlEncoded: g,
    });
    return `export const ${t} = (
    ${V(s, 'implementation')} ${
      f
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${h}
    return axios${y ? '' : '.default'}.${i}(${S});
  }
`;
  },
  Fp = ({ operationName: e, mutator: t, isRequestOptions: r }) => {
    let n = `SWRConfiguration<Awaited<ReturnType<typeof ${e}>>, TError> & {swrKey: Key}`;
    return r
      ? `options?: { swr?:${n}, ${
          t
            ? t != null && t.hasSecondArg
              ? `request?: SecondParameter<typeof ${t.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        } }
`
      : `swrOptions?: ${n}`;
  },
  Vp = ({
    operationName: e,
    swrProps: t,
    swrKeyFnName: r,
    properties: n,
    params: o,
    mutator: s,
    isRequestOptions: i,
    response: a,
  }) => {
    let p = n,
      c = o.length
        ? `const isEnable = !!(${o.map(({ name: l }) => l).join(' && ')})
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? ${r}(${n}) : null);`
        : `const swrKey = swrOptions?.swrKey ?? (() => ${r}(${n}))`,
      m = `AxiosError<${a.definition.errors || 'unknown'}>`;
    return (
      s &&
        (m = s.hasErrorType
          ? `ErrorType<${a.definition.errors || 'unknown'}>`
          : a.definition.errors || 'unknown'),
      `
export type ${x(e)}QueryResult = NonNullable<Awaited<ReturnType<typeof ${e}>>>
export type ${x(e)}QueryError = ${m}

export const ${E(`use-${e}`)} = <TError = ${m}>(
 ${t} ${Fp({ operationName: e, mutator: s, isRequestOptions: i })}
  ) => {

  ${
    i
      ? `const {swr: swrOptions${
          s
            ? s != null && s.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  ${c}
  const swrFn = () => ${e}(${p}${p ? ', ' : ''}${
        i
          ? s
            ? s != null && s.hasSecondArg
              ? 'requestOptions'
              : ''
            : 'axiosOptions'
          : ''
      });

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
`
    );
  },
  Np = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: i,
      mutator: a,
      response: p,
    },
    { route: c },
  ) => {
    let m = (i == null ? void 0 : i.requestOptions) !== !1;
    if (o !== K.GET) return '';
    let l = n
        .map(({ name: g, type: b }) => (b === H.BODY ? r.implementation : g))
        .join(','),
      f = E(`get-${t}-key`),
      d = V(n, 'implementation');
    return `export const ${f} = (${d}) => [\`${c}\`${
      e ? ', ...(params ? [params]: [])' : ''
    }${r.implementation ? `, ${r.implementation}` : ''}];

    ${Vp({
      operationName: t,
      swrProps: d,
      swrKeyFnName: f,
      properties: l,
      params: s,
      props: n,
      mutator: a,
      isRequestOptions: m,
      response: p,
    })}
`;
  },
  So = () => '',
  wo = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `
  ${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
  ${
    e && t
      ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
      : ''
  }`,
  To = () => '',
  Ro = (e, t) => {
    let r = ae(e),
      n = qp(e, t),
      o = Np(e, t);
    return {
      implementation: `${n}

${o}`,
      imports: r,
    };
  };
u();
var It = null,
  Up = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  Wp = [
    {
      exports: [
        {
          name: '* as trpc',
          alias: 'trpc',
          default: !0,
          values: !0,
          syntheticDefaultImport: !0,
        },
      ],
      dependency: '@trpc/server',
    },
    {
      exports: [
        {
          name: '* as yup',
          alias: 'yup',
          default: !0,
          values: !0,
          syntheticDefaultImport: !0,
        },
      ],
      dependency: 'yup',
    },
  ],
  jo = (e) => [...(e ? [] : Up), ...Wp],
  Bp = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: i,
      formData: a,
      formUrlEncoded: p,
      override: c,
    },
    { route: m, context: l },
  ) => {
    var P;
    let f = (c == null ? void 0 : c.requestOptions) !== !1,
      d = (c == null ? void 0 : c.formData) !== !1,
      g = (c == null ? void 0 : c.formUrlEncoded) !== !1,
      b =
        ((P = c == null ? void 0 : c.trpc) == null
          ? void 0
          : P.passRequestContextToCustomMutator) !== !1,
      y = Q(l.tsconfig),
      h = oe.includes(i),
      S = ue({
        formData: a,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: g,
      });
    if (n) {
      let j = ce({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: i,
          isFormData: d,
          isFormUrlEncoded: g,
          isBodyVerb: h,
          hasSignal: !1,
        }),
        I =
          (n == null ? void 0 : n.bodyTypeName) && o.definition
            ? V(s, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${o.definition}`),
                `$1: ${n.bodyTypeName}<${o.definition}>`,
              )
            : V(s, 'implementation'),
        R = f ? me(c == null ? void 0 : c.requestOptions, n.hasSecondArg) : '';
      return `export const ${t} = (
    ${I}
 ${f && n.hasSecondArg ? `options?: Parameters<typeof ${n.name}>[1],` : ''}${
        h
          ? `
`
          : `signal?: AbortSignal,
`
      }${
        b
          ? `ctx?: any
`
          : `
`
      }) => {${S}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${j},
      ${R},
      ${b ? 'ctx' : ''}
      );
    }
  `;
    }
    let w = pe({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: i,
      requestOptions: c == null ? void 0 : c.requestOptions,
      isFormData: d,
      isFormUrlEncoded: g,
    });
    return `export const ${t} = (
    ${V(s, 'implementation')} ${
      f
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${S}
    return axios${y ? '' : '.default'}.${i}(${w});
  }
`;
  },
  _p = (e) => {
    switch (e) {
      case 'integer':
        return 'number';
      case 'null':
        return 'mixed';
      default:
        return e != null ? e : 'mixed';
    }
  },
  ar = (e, t) => {
    var p, c, m, l, f, d, g, b, y;
    if (!e) return [];
    let r = [],
      n = _p(e == null ? void 0 : e.type),
      o =
        (e == null ? void 0 : e.default) !== void 0
          ? !1
          : (p = t != null ? t : !(e != null && e.nullable)) != null
          ? p
          : !1,
      s =
        (l =
          (m =
            (c = e == null ? void 0 : e.minimum) != null
              ? c
              : e == null
              ? void 0
              : e.exclusiveMinimum) != null
            ? m
            : e == null
            ? void 0
            : e.minLength) != null
          ? l
          : void 0,
      i =
        (g =
          (d =
            (f = e == null ? void 0 : e.maximum) != null
              ? f
              : e == null
              ? void 0
              : e.exclusiveMaximum) != null
            ? d
            : e == null
            ? void 0
            : e.maxLength) != null
          ? g
          : void 0,
      a = (b = e == null ? void 0 : e.pattern) != null ? b : void 0;
    return (
      r.push(
        n === 'object'
          ? [
              'object',
              Object.keys(
                (y = e == null ? void 0 : e.properties) != null ? y : {},
              )
                .map((h) => {
                  var S, w;
                  return {
                    [h]: ar(
                      (S = e == null ? void 0 : e.properties) == null
                        ? void 0
                        : S[h],
                      (w = e == null ? void 0 : e.required) == null
                        ? void 0
                        : w.includes(h),
                    ),
                  };
                })
                .reduce((h, S) => $($({}, h), S), {}),
            ]
          : [
              e != null && e.enum
                ? `mixed<${
                    e == null ? void 0 : e.enum.map((h) => `'${h}'`).join(' | ')
                  }>`
                : n,
              void 0,
            ],
      ),
      r.push([o ? 'required' : 'notRequired', void 0]),
      s !== void 0 && r.push(['min', s]),
      i !== void 0 && r.push(['max', i]),
      a && r.push(['matches', a]),
      e != null &&
        e.enum &&
        r.push([
          'oneOf',
          [`[${e == null ? void 0 : e.enum.map((h) => `'${h}'`).join(', ')}]`],
        ]),
      r
    );
  },
  Po = (e) =>
    Object.keys(e).length
      ? `yup.object({
  ${Object.entries(e)
    .map(
      ([t, r]) => `
    ${t}: ${r[0][0] !== 'object' ? 'yup' : ''}
      ${r
        .map(([n, o = '']) => (n === 'object' ? ` ${Po(o)}` : `.${n}(${o})`))
        .join('')}`,
    )
    .join(',')}
})`
      : '',
  Qp = (e) => {
    var t, r;
    return (r = (t = e.split('/').pop()) == null ? void 0 : t.split('.')[0]) !=
      null
      ? r
      : '';
  },
  zp = (
    { operationName: e, body: t, props: r, verb: n, mutator: o },
    { pathRoute: s, context: i, override: a },
  ) => {
    var w, P, j, I;
    let p =
      ((w = a == null ? void 0 : a.trpc) == null
        ? void 0
        : w.passRequestContextToCustomMutator) !== !1;
    It = Qp(i.specKey);
    let c = i.specs[i.specKey].paths[s],
      m = (P = c == null ? void 0 : c[n]) == null ? void 0 : P.parameters,
      l = (j = c == null ? void 0 : c[n]) == null ? void 0 : j.requestBody,
      f = l && '$ref' in l ? k(l, i).schema : l,
      d =
        f != null && f.content['application/json'].schema
          ? k(f == null ? void 0 : f.content['application/json'].schema, i)
              .schema
          : f == null
          ? void 0
          : f.content['application/json'].schema,
      g =
        (I = m != null ? m : []) == null
          ? void 0
          : I.map((R) => ({ [R.name]: ar(R.schema, R.required) }))
              .concat(
                t.implementation && d
                  ? {
                      [t.implementation]: ar(
                        d,
                        f == null ? void 0 : f.required,
                      ),
                    }
                  : {},
              )
              .reduce((R, G) => $($({}, R), G), {}),
      b = r
        .map(({ name: R, type: G }) => (G === H.BODY ? t.implementation : R))
        .join(', '),
      y = r
        .sort((R, { type: G }) => (G === H.QUERY_PARAM ? -1 : 1))
        .map(({ name: R, type: G }) => {
          switch (G) {
            case H.BODY:
              return t.implementation;
            case H.QUERY_PARAM:
              return `...${R}`;
            default:
              return R;
          }
        })
        .join(', '),
      h = Po(g),
      S = oe.includes(n);
    return `
export const ${e}Route = trpc.router().${
      n === K.GET ? 'query' : 'mutation'
    }('${e}', {
  ${h ? `input: ${h},` : ''}
  resolve: (
    {${h ? `input: {${y}}` : ''}${p ? `${h ? ', ' : ''}ctx` : ''}}
  ) => ${e}(${b}${
      p && o ? `${b ? ', ' : ''}${S ? '' : 'undefined, '}undefined, ctx` : ''
    })
});`;
  },
  Eo = () => '',
  Mo = () => '',
  Io = ({ operationNames: e, title: t, customTitleFunc: r }) => `
const router = trpc.router()
${e.length ? '.' : ''}${e
    .map(
      (n) => `merge(${n}Route)
`,
    )
    .join('.')};

${
  It
    ? `export const ${E(It)}Router = trpc.router().merge('${E(It)}.', router);`
    : ''
}
    `,
  Ao = (e, t, r) => {
    let n = ae(e),
      o = Bp(e, t),
      s = zp(e, t);
    return {
      implementation: `${o}

${s}`,
      imports: n,
    };
  };
var Je = B.AXIOS,
  vo = {
    axios: { client: or, header: rr, dependencies: er, footer: nr, title: tr },
    'axios-functions': {
      client: (e, t) => {
        let { implementation: r, imports: n } = or(e, t);
        return { implementation: 'export ' + r, imports: n };
      },
      header: (e) => rr(T($({}, e), { noFunction: !0 })),
      dependencies: er,
      footer: (e) => nr(T($({}, e), { noFunction: !0 })),
      title: tr,
    },
    angular: {
      client: ao,
      header: so,
      dependencies: no,
      footer: io,
      title: oo,
    },
    'react-query': {
      client: Mt,
      header: Pt,
      dependencies: Oo,
      footer: Et,
      title: jt,
    },
    'svelte-query': {
      client: Mt,
      header: Pt,
      dependencies: bo,
      footer: Et,
      title: jt,
    },
    'vue-query': {
      client: Mt,
      header: Pt,
      dependencies: ho,
      footer: Et,
      title: jt,
    },
    swr: { client: Ro, header: wo, dependencies: xo, footer: To, title: So },
    trpc: { client: Ao, header: Mo, dependencies: jo, footer: Io, title: Eo },
  },
  Xe = (e) => {
    let t = L(e) ? e(vo) : vo[e];
    if (!t) throw `Oups... \u{1F37B}. Client not found: ${e}`;
    return t;
  },
  xe = (e = Je, t, r, n, o, s, i) => {
    let { dependencies: a } = Xe(e);
    return $t(t, [...a(i), ...r], n, o, s);
  },
  At = ({
    outputClient: e = Je,
    isRequestOptions: t,
    title: r,
    customTitleFunc: n,
    isGlobalMutator: o,
    isMutator: s,
    provideInRoot: i,
    provideIn: a,
    hasAwaitedType: p,
  }) => {
    let c = Go(e, r, n),
      { header: m } = Xe(e);
    return {
      implementation: m({
        title: c.implementation,
        isRequestOptions: t,
        isGlobalMutator: o,
        isMutator: s,
        provideInRoot: i,
        provideIn: a,
        hasAwaitedType: p,
      }),
      implementationMSW: `export const ${c.implementationMSW} = () => [
`,
    };
  },
  vt = ({
    outputClient: e = Je,
    operationNames: t,
    title: r,
    customTitleFunc: n,
    hasMutator: o,
    hasAwaitedType: s,
  }) => {
    let i = Go(e, r, n),
      { footer: a } = Xe(e),
      p;
    try {
      L(e)
        ? ((p = a(t)),
          console.warn(
            '[WARN] Passing an array of strings for operations names to the footer function is deprecated and will be removed in a future major release. Please pass them in an object instead: { operationNames: string[] }.',
          ))
        : (p = a({
            operationNames: t,
            title: i.implementation,
            hasMutator: o,
            hasAwaitedType: s,
          }));
    } catch (e7) {
      p = a({
        operationNames: t,
        title: i.implementation,
        hasMutator: o,
        hasAwaitedType: s,
      });
    }
    return {
      implementation: p,
      implementationMSW: `]
`,
    };
  },
  Go = (e = Je, t, r) => {
    let { title: n } = Xe(e);
    if (r) {
      let o = r(t);
      return { implementation: n(o), implementationMSW: `get${x(o)}MSW` };
    }
    return { implementation: n(t), implementationMSW: `get${x(t)}MSW` };
  },
  Kp = async (e, t) =>
    t.mock
      ? L(t.mock)
        ? t.mock(e, t)
        : yo(e, t)
      : { implementation: { function: '', handler: '' }, imports: [] },
  Co = (e = Je, t, r) =>
    A(
      t,
      async (n, o) => {
        let { client: s } = Xe(e),
          i = s(o, r, e),
          a = await Kp(o, r);
        return (
          (n[o.operationId] = {
            implementation: o.doc + i.implementation,
            imports: i.imports,
            implementationMSW: a.implementation,
            importsMSW: a.imports,
            tags: o.tags,
            mutator: o.mutator,
            formData: o.formData,
            formUrlEncoded: o.formUrlEncoded,
            operationName: o.operationName,
          }),
          n
        );
      },
      {},
    );
u();
u();
var Lp = '\\*/',
  pr = '*\\/',
  cr = new RegExp(Lp, 'g');
function z({ description: e, deprecated: t, summary: r }, n = !1) {
  var c;
  let o = (
      Array.isArray(e)
        ? e.filter((m) => !m.includes('eslint-disable'))
        : [e || '']
    ).map((m) => m.replace(cr, pr)),
    s = [e, t, r].reduce((m, l) => (l ? m + 1 : m), 0);
  if (!s) return '';
  let i = s === 1 && n,
    a = Array.isArray(e)
      ? (c = e.find((m) => m.includes('eslint-disable'))) == null
        ? void 0
        : c.replace(cr, pr)
      : void 0,
    p = `${
      a
        ? `/* ${a} */
`
        : ''
    }/**`;
  return (
    e &&
      (i ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` ${o.join(`
 * `)}`)),
    t &&
      (i ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ' @deprecated')),
    r &&
      (i ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` @summary ${r.replace(cr, pr)}`)),
    (p += i
      ? ' '
      : `
 ${n ? '  ' : ''}`),
    (p += `*/
`),
    p
  );
}
u();
u();
var _lodashuniqby = require('lodash.uniqby');
var _lodashuniqby2 = _interopRequireDefault(_lodashuniqby);
u();
var Ze = async (e, t, r, n) => {
  let { schema: o, imports: s } = await k(t, r),
    i = D(t) ? s[0].name : e,
    a = n ? 'formUrlEncoded' : 'formData',
    p = n
      ? `const ${a} = new URLSearchParams();
`
      : `const ${a} = new FormData();
`;
  if (o.type === 'object' && o.properties) {
    let c = await A(
      Object.entries(o.properties),
      async (m, [l, f]) => {
        var b;
        let { schema: d } = await k(f, r),
          g = '';
        return (
          d.type === 'object' || d.type === 'array'
            ? (g = `${a}.append('${l}', JSON.stringify(${E(i)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }))
`)
            : d.type === 'number' ||
              d.type === 'integer' ||
              d.type === 'boolean'
            ? (g = `${a}.append('${l}', ${E(i)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }.toString())
`)
            : (g = `${a}.append('${l}', ${E(i)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              })
`),
          (b = o.required) != null && b.includes(l)
            ? m + g
            : m +
              `if(${E(i)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              } !== undefined) {
 ${g} }
`
        );
      },
      '',
    );
    return `${p}${c}`;
  }
  return o.type === 'array'
    ? `${p}${a}.append('data', JSON.stringify(${E(i)}))
`
    : o.type === 'number' || o.type === 'boolean'
    ? `${p}${a}.append('data', ${E(i)}.toString())
`
    : `${p}${a}.append('data', ${E(i)})
`;
};
u();
u();
var qe = (e, t, r) => {
    let n = `export type ${r} = typeof ${r}[keyof typeof ${r}];
`,
      o = Gt(e, t);
    return (
      (n += `

`),
      (n += `// eslint-disable-next-line @typescript-eslint/no-redeclare
`),
      (n += `export const ${r} = {
${o}} as const;
`),
      n
    );
  },
  Gt = (e, t) =>
    [...new Set(e.split(' | '))].reduce((r, n) => {
      if (n === 'null') return r;
      let o = t === 'number',
        i =
          !Number.isNaN(Number(n.slice(1, -1))) || o
            ? Yp(o ? n.toString() : n.slice(1, -1))
            : U(n, { underscore: '_', whitespace: '_', dash: '-' });
      return (
        r +
        `  ${_esutils.keyword.isIdentifierNameES5(i) ? i : `'${i}'`}: ${n},
`
      );
    }, ''),
  Yp = (e) =>
    e[0] === '-'
      ? `NUMBER_MINUS_${e.slice(1)}`
      : e[0] === '+'
      ? `NUMBER_PLUS_${e.slice(1)}`
      : `NUMBER_${e}`;
u();
u();
u();
var Do = async ({ schema: e, name: t, context: r }) => {
  if (e.items) {
    let n = await fe({ schema: e.items, propName: t + 'Item', context: r });
    return {
      value: `${n.value}[]`,
      imports: n.imports,
      schemas: n.schemas,
      isEnum: !1,
      type: 'array',
      isRef: !1,
    };
  } else throw new Error('All arrays must have an `items` key define');
};
u();
u();
var Jp = { allOf: '&', oneOf: '|', anyOf: '|' },
  Ct = async ({ name: e, items: t, separator: r, context: n, nullable: o }) => {
    let s = await A(
        t,
        async (p, c) => {
          let m = e ? e + x(r) : void 0;
          m && p.schemas.length && (m = m + x(gt(p.schemas.length + 1)));
          let l = await fe({
            schema: c,
            propName: m,
            combined: !0,
            context: n,
          });
          return (
            p.values.push(l.value),
            p.imports.push(...l.imports),
            p.schemas.push(...l.schemas),
            p.isEnum.push(l.isEnum),
            p.types.push(l.type),
            p.isRef.push(l.isRef),
            p
          );
        },
        {
          values: [],
          imports: [],
          schemas: [],
          isEnum: [],
          isRef: [],
          types: [],
        },
      ),
      i = s.isEnum.every((p) => p),
      a = s.values.join(` ${i ? '|' : Jp[r]} `);
    if (i && e && t.length > 1) {
      let p = `

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ${x(e)} = ${Xp(s, e)}`;
      return {
        value: `typeof ${x(e)}[keyof typeof ${x(e)}] ${o};` + p,
        imports: s.imports.map((c) => T($({}, c), { values: !0 })),
        schemas: s.schemas,
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    }
    return {
      value: a + o,
      imports: s.imports,
      schemas: s.schemas,
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  },
  Xp = ({ values: e, isRef: t, types: r }, n) =>
    e.length === 1
      ? t[0]
        ? e[0]
        : `{${Gt(e[0], r[0])}} as const`
      : `{${e
          .map((s, i) => (t[i] ? `...${s},` : Gt(s, r[i])))
          .join('')}} as const`;
var ko = async ({ item: e, name: t, context: r, nullable: n }) => {
  var o, s;
  if (D(e)) {
    let { name: i, specKey: a } = Ge(e.$ref, r);
    return {
      value: i + n,
      imports: [{ name: i, specKey: a }],
      schemas: [],
      isEnum: !1,
      type: 'object',
      isRef: !0,
    };
  }
  if (e.allOf)
    return Ct({
      items: e.properties
        ? [...e.allOf, _lodashomit2.default.call(void 0, e, 'allOf')]
        : e.allOf,
      name: t,
      separator: 'allOf',
      context: r,
      nullable: n,
    });
  if (e.oneOf)
    return Ct({
      items: e.properties
        ? [...e.oneOf, _lodashomit2.default.call(void 0, e, 'oneOf')]
        : e.oneOf,
      name: t,
      separator: 'oneOf',
      context: r,
      nullable: n,
    });
  if (e.anyOf)
    return Ct({
      items: e.properties
        ? [...e.anyOf, _lodashomit2.default.call(void 0, e, 'anyOf')]
        : e.anyOf,
      name: t,
      separator: 'anyOf',
      context: r,
      nullable: n,
    });
  if (e.properties && Object.entries(e.properties).length > 0)
    return A(
      Object.entries(e.properties),
      async (i, [a, p], c, m) => {
        var h, S, w;
        let l = (Array.isArray(e.required) ? e.required : []).includes(a),
          f = t ? x(t) + x(a) : void 0;
        !!(
          (w =
            (S = (h = r.specs[r.target]) == null ? void 0 : h.components) ==
            null
              ? void 0
              : S.schemas) != null && w[f || '']
        ) && (f = f + 'Property');
        let g = await fe({ schema: p, propName: f, context: r }),
          b = e.readOnly || p.readOnly;
        c || (i.value += '{');
        let y = z(p, !0);
        if (
          (i.imports.push(...g.imports),
          (i.value += `
  ${y ? `${y}  ` : ''}${b ? 'readonly ' : ''}${ke(a)}${l ? '' : '?'}: ${
            g.value
          };`),
          i.schemas.push(...g.schemas),
          m.length - 1 === c)
        ) {
          if (e.additionalProperties)
            if (J(e.additionalProperties))
              i.value += `
  [key: string]: any;
 }`;
            else {
              let P = await ie({
                schema: e.additionalProperties,
                name: t,
                context: r,
              });
              i.value += `
  [key: string]: ${P.value};
}`;
            }
          else
            i.value += `
}`;
          i.value += n;
        }
        return i;
      },
      {
        imports: [],
        schemas: [],
        value: '',
        isEnum: !1,
        type: 'object',
        isRef: !1,
        schema: {},
      },
    );
  if (e.additionalProperties) {
    if (J(e.additionalProperties))
      return {
        value: '{ [key: string]: any }' + n,
        imports: [],
        schemas: [],
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    let i = await ie({ schema: e.additionalProperties, name: t, context: r });
    return {
      value: `{[key: string]: ${i.value}}` + n,
      imports: (o = i.imports) != null ? o : [],
      schemas: (s = i.schemas) != null ? s : [],
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  }
  return {
    value: e.type === 'object' ? '{ [key: string]: any }' : 'unknown' + n,
    imports: [],
    schemas: [],
    isEnum: !1,
    type: 'object',
    isRef: !1,
  };
};
var Dt = async ({ item: e, name: t, context: r }) => {
  let n = e.nullable ? ' | null' : '';
  switch ((!e.type && e.items && (e.type = 'array'), e.type)) {
    case 'number':
    case 'integer': {
      let i = 'number',
        a = !1;
      return (
        e.enum && ((i = e.enum.join(' | ')), (a = !0)),
        {
          value: i + n,
          isEnum: a,
          type: 'number',
          schemas: [],
          imports: [],
          isRef: !1,
        }
      );
    }
    case 'boolean':
      return {
        value: 'boolean' + n,
        type: 'boolean',
        isEnum: !1,
        schemas: [],
        imports: [],
        isRef: !1,
      };
    case 'array': {
      let o = await Do({ schema: e, name: t, context: r }),
        { value: i } = o,
        a = we(o, ['value']);
      return $({ value: i + n }, a);
    }
    case 'string': {
      let i = 'string',
        a = !1;
      return (
        e.enum &&
          ((i = `'${e.enum
            .map((p) => (F(p) ? dt(p) : p))
            .filter(Boolean)
            .join("' | '")}'`),
          (a = !0)),
        e.format === 'binary' && (i = 'Blob'),
        r.override.useDates &&
          (e.format === 'date' || e.format === 'date-time') &&
          (i = 'Date'),
        {
          value: i + n,
          isEnum: a,
          type: 'string',
          imports: [],
          schemas: [],
          isRef: !1,
        }
      );
    }
    case 'object':
    default: {
      let s = await ko({ item: e, name: t, context: r, nullable: n }),
        { value: i } = s,
        a = we(s, ['value']);
      return $({ value: i }, a);
    }
  }
};
var ie = async ({ schema: e, name: t, context: r }) => {
  if (D(e)) {
    let { schema: o, imports: s } = await k(e, r),
      { name: i, specKey: a, schemaName: p } = s[0],
      c = a || (r.specKey !== r.target ? r.specKey : void 0);
    return {
      value: i,
      imports: [{ name: i, specKey: c, schemaName: p }],
      type: (o == null ? void 0 : o.type) || 'object',
      schemas: [],
      isEnum: !!(o != null && o.enum),
      originalSchema: o,
      isRef: !0,
    };
  }
  let n = await Dt({ item: e, name: t, context: r });
  return T($({}, n), { originalSchema: e, isRef: !1 });
};
var fe = async ({ schema: e, propName: t, combined: r = !1, context: n }) => {
  var i;
  let o = await ie({ schema: e, name: t, context: n }),
    s = z((i = o.originalSchema) != null ? i : {});
  if (
    t &&
    !o.isEnum &&
    (o == null ? void 0 : o.type) === 'object' &&
    new RegExp(/{|&|\|/).test(o.value)
  )
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [
        ...o.schemas,
        {
          name: t,
          model: `${s}export type ${t} = ${o.value};
`,
          imports: o.imports,
        },
      ],
      isEnum: !1,
      type: 'object',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  if (t && o.isEnum && !r && !o.isRef) {
    let a = qe(o.value, o.type, t);
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [...o.schemas, { name: t, model: s + a, imports: o.imports }],
      isEnum: !1,
      type: 'enum',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  }
  return o;
};
var qo = ['multipart/form-data'],
  Fo = ['application/x-www-form-urlencoded'],
  ec = async ({ mediaType: e, propName: t, context: r }) =>
    e.schema ? await fe({ schema: e.schema, propName: t, context: r }) : void 0,
  Fe = async (e, t, r, n = 'unknown') => {
    let o = await Promise.all(
      e
        .filter(([s, i]) => Boolean(i))
        .map(async ([s, i]) => {
          var a, p;
          if (D(i)) {
            let {
                schema: c,
                imports: [{ name: m, specKey: l, schemaName: f }],
              } = await k(i, r),
              [d, g] =
                (p = Object.entries((a = c.content) != null ? a : {})[0]) !=
                null
                  ? p
                  : [],
              b = qo.includes(d),
              y = Fo.includes(d);
            if ((!b && !y) || !(g != null && g.schema))
              return [
                {
                  value: m,
                  imports: [{ name: m, specKey: l, schemaName: f }],
                  schemas: [],
                  type: 'unknown',
                  isEnum: !1,
                  isRef: !0,
                  originalSchema: g == null ? void 0 : g.schema,
                  key: s,
                  contentType: d,
                },
              ];
            let h = b
                ? await Ze(
                    m,
                    g == null ? void 0 : g.schema,
                    T($({}, r), { specKey: l || r.specKey }),
                  )
                : void 0,
              S = y
                ? await Ze(
                    m,
                    g == null ? void 0 : g.schema,
                    T($({}, r), { specKey: l || r.specKey }),
                    !0,
                  )
                : void 0;
            return [
              {
                value: m,
                imports: [{ name: m, specKey: l, schemaName: f }],
                schemas: [],
                type: 'unknown',
                isEnum: !1,
                formData: h,
                formUrlEncoded: S,
                isRef: !0,
                originalSchema: g == null ? void 0 : g.schema,
                key: s,
                contentType: d,
              },
            ];
          }
          return i.content
            ? (
                await Promise.all(
                  Object.entries(i.content).map(async ([m, l], f, d) => {
                    let g = s ? x(t) + x(s) : void 0;
                    g && d.length > 1 && (g = g + x(gt(f + 1)));
                    let b = await ec({ mediaType: l, propName: g, context: r });
                    if (!b) return;
                    let y = qo.includes(m),
                      h = Fo.includes(m);
                    if ((!y && !h) || !g)
                      return T($({}, b), { contentType: m });
                    let S = y ? await Ze(g, l.schema, r) : void 0,
                      w = h ? await Ze(g, l.schema, r, !0) : void 0;
                    return T($({}, b), {
                      formData: S,
                      formUrlEncoded: w,
                      contentType: m,
                    });
                  }),
                )
              )
                .filter((m) => m)
                .map((m) => T($({}, m), { key: s }))
            : [
                {
                  value: n,
                  imports: [],
                  schemas: [],
                  type: n,
                  isEnum: !1,
                  key: s,
                  isRef: !1,
                  contentType: 'application/json',
                },
              ];
        }),
    );
    return _lodashuniqby2.default.call(
      void 0,
      o.flatMap((s) => s),
      'value',
    );
  };
var Vo = async (e, t, r) => {
  let n = await Fe([[r.override.components.requestBodies.suffix, e]], t, r),
    o = n.flatMap(({ imports: l }) => l),
    s = n.flatMap(({ schemas: l }) => l),
    i = n.map(({ value: l }) => l).join(' | '),
    a =
      Ie.includes(i.toLowerCase()) || n.length > 1
        ? E(t) + r.override.components.requestBodies.suffix
        : E(i),
    p = n.length === 1 ? n[0].formData : void 0,
    c = n.length === 1 ? n[0].formUrlEncoded : void 0,
    m = n.length === 1 ? n[0].contentType : void 0;
  return {
    definition: i,
    implementation: a,
    imports: o,
    schemas: s,
    formData: p || '',
    formUrlEncoded: c || '',
    contentType: m || '',
  };
};
u();
var No = (e, t, r) =>
  e.operationId
    ? e.operationId
    : x(
        [
          r,
          ...t
            .split('/')
            .map((n) =>
              U(n, { dash: !0, underscore: '-', dot: '-', whitespace: '-' }),
            ),
        ].join('-'),
      );
u();
var Uo = async ({ parameters: e = [], context: t }) =>
  A(
    e,
    async (r, n) => {
      if (D(n)) {
        let { schema: o, imports: s } = await k(n, t);
        (o.in === 'path' || o.in === 'query') &&
          r[o.in].push({ parameter: o, imports: s });
      } else
        (n.in === 'query' || n.in === 'path') &&
          r[n.in].push({ parameter: n, imports: [] });
      return r;
    },
    { path: [], query: [] },
  );
u();
var tc = (e) => {
    let t,
      r = [],
      n = /\{(.*?)\}/g;
    for (; (t = n.exec(e)) !== null; ) r.push(t[1]);
    return r;
  },
  Wo = ({ route: e, pathParams: t = [], operationId: r, context: n }) => {
    let o = tc(e);
    return Promise.all(
      o.map(async (s) => {
        let i = t.find(
          ({ parameter: g }) =>
            U(E(g.name), { es5keyword: !0, underscore: !0, dash: !0 }) === s,
        );
        if (!i)
          throw new Error(
            `The path params ${s} can't be found in parameters (${r})`,
          );
        let { name: a, required: p = !1, schema: c } = i.parameter,
          m = U(E(a), { es5keyword: !0 });
        if (!c)
          return {
            name: m,
            definition: `${m}${p ? '' : '?'}: unknown`,
            implementation: `${m}${p ? '' : '?'}: unknown`,
            default: !1,
            required: p,
            imports: [],
          };
        let l = await ie({
            schema: c,
            context: $(
              $({}, n),
              i.imports.length ? { specKey: i.imports[0].specKey } : {},
            ),
          }),
          f = `${m}${!p || l.originalSchema.default ? '?' : ''}: ${l.value}`,
          d = `${m}${!p && !l.originalSchema.default ? '?' : ''}${
            l.originalSchema.default
              ? `= ${ne(l.originalSchema.default)}`
              : `: ${l.value}`
          }`;
        return {
          name: m,
          definition: f,
          implementation: d,
          default: l.originalSchema.default,
          required: p,
          imports: l.imports,
        };
      }),
    );
  };
u();
u();
var Bo = (e) =>
  e.sort((t, r) =>
    t.default
      ? 1
      : r.default
      ? -1
      : t.required && r.required
      ? 0
      : t.required
      ? -1
      : r.required
      ? 1
      : 0,
  );
var _o = ({ body: e, queryParams: t, params: r }) => {
  let n = {
      name: e.implementation,
      definition: `${e.implementation}: ${e.definition}`,
      implementation: `${e.implementation}: ${e.definition}`,
      default: !1,
      required: !0,
      type: H.BODY,
    },
    o = {
      name: 'params',
      definition: `params?: ${t == null ? void 0 : t.name}`,
      implementation: `params?: ${t == null ? void 0 : t.name}`,
      default: !1,
      required: !1,
      type: H.QUERY_PARAM,
    },
    s = [
      ...r.map((a) => T($({}, a), { type: H.PARAM })),
      ...(e.definition ? [n] : []),
      ...(t ? [o] : []),
    ];
  return Bo(s);
};
u();
var rc = (e, t, r) =>
    Promise.all(
      e.map(async ({ parameter: n, imports: o }) => {
        let { name: s, required: i, schema: a, content: p } = n,
          {
            value: c,
            imports: m,
            isEnum: l,
            type: f,
            schemas: d,
            isRef: g,
          } = await ie({
            schema: a || p['application/json'].schema,
            context: r,
            name: x(t) + x(s),
          }),
          b = ke(s);
        if (o.length)
          return {
            definition: `${b}${!i || a.default ? '?' : ''}: ${o[0].name}`,
            imports: o,
            schemas: [],
          };
        if (l && !g) {
          let h = x(t) + x(s),
            S = qe(c, f, h);
          return {
            definition: `${b}${!i || a.default ? '?' : ''}: ${h}`,
            imports: [{ name: h }],
            schemas: [...d, { name: h, model: S, imports: m }],
          };
        }
        return {
          definition: `${b}${!i || a.default ? '?' : ''}: ${c}`,
          imports: m,
          schemas: d,
        };
      }),
    ),
  Qo = async ({ queryParams: e = [], operationName: t, context: r }) => {
    if (!e.length) return;
    let n = await rc(e, t, r),
      o = n.flatMap(({ imports: c }) => c),
      s = n.flatMap(({ schemas: c }) => c),
      i = `${x(t)}Params`,
      a = n.map(({ definition: c }) => c).join('; ');
    return {
      schema: {
        name: i,
        model: `export type ${i} = { ${a} };
`,
        imports: o,
      },
      deps: s,
    };
  };
u();
var zo = async (e, t, r) => {
  if (!e)
    return {
      imports: [],
      definition: { success: '', errors: '' },
      isBlob: !1,
      types: { success: [], errors: [] },
      schemas: [],
      contentTypes: [],
    };
  let n = await Fe(Object.entries(e), t, r, 'void'),
    o = n.reduce(
      (m, l) => (
        l.key.startsWith('2') ? m.success.push(l) : m.errors.push(l), m
      ),
      { success: [], errors: [] },
    ),
    s = n.flatMap(({ imports: m }) => m),
    i = n.flatMap(({ schemas: m }) => m),
    a = [...new Set(n.map(({ contentType: m }) => m))],
    p = o.success
      .map(({ value: m, formData: l }) => (l ? 'Blob' : m))
      .join(' | '),
    c = o.errors.map(({ value: m }) => m).join(' | ');
  return {
    imports: s,
    definition: { success: p || 'unknown', errors: c || 'unknown' },
    isBlob: p === 'Blob',
    types: o,
    contentTypes: a,
    schemas: i,
  };
};
var nc = async ({
    verb: e,
    output: t,
    operation: r,
    route: n,
    verbParameters: o = [],
    context: s,
  }) => {
    var Qe;
    let {
        responses: i,
        requestBody: a,
        parameters: p,
        tags: c = [],
        deprecated: m,
        description: l,
        summary: f,
      } = r,
      d = No(r, n, e),
      g = t.override.operations[r.operationId],
      b = Object.entries(t.override.tags).reduce(
        (ze, [at, pt]) => (c.includes(at) ? Pe(ze, pt) : ze),
        {},
      ),
      y = $($($({}, t.override), b), g),
      h =
        (g == null ? void 0 : g.operationName) ||
        ((Qe = t.override) == null ? void 0 : Qe.operationName),
      S = h ? h(r, n, e) : E(d),
      w = U(S, { es5keyword: !0 }),
      P = await zo(i, w, s),
      j = await Vo(a, w, s),
      I = await Uo({ parameters: [...o, ...(p != null ? p : [])], context: s }),
      R = await Qo({ queryParams: I.query, operationName: w, context: s }),
      G = await Wo({
        route: n,
        pathParams: I.path,
        operationId: d,
        context: s,
      }),
      Z = _o({
        body: j,
        queryParams: R == null ? void 0 : R.schema,
        params: G,
      }),
      ee = await ht({
        output: t.target,
        name: w,
        mutator: y == null ? void 0 : y.mutator,
        workspace: s.workspace,
        tsconfig: s.tsconfig,
      }),
      te =
        F(y == null ? void 0 : y.formData) || q(y == null ? void 0 : y.formData)
          ? await ht({
              output: t.target,
              name: w,
              mutator: y.formData,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      Me =
        F(y == null ? void 0 : y.formUrlEncoded) ||
        q(y == null ? void 0 : y.formUrlEncoded)
          ? await ht({
              output: t.target,
              name: w,
              mutator: y.formUrlEncoded,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      it = z({ description: l, deprecated: m, summary: f }),
      Be = {
        verb: e,
        tags: c,
        summary: r.summary,
        operationId: d,
        operationName: w,
        response: P,
        body: j,
        queryParams: R,
        params: G,
        props: Z,
        mutator: ee,
        formData: te,
        formUrlEncoded: Me,
        override: y,
        doc: it,
      },
      _e = await St(y == null ? void 0 : y.transformer, s.workspace);
    return _e ? _e(Be) : Be;
  },
  Ko = ({ verbs: e, output: t, route: r, context: n }) =>
    A(
      Object.entries(e),
      async (o, [s, i]) => {
        if (hn(s)) {
          let a = await nc({
            verb: s,
            output: t,
            verbParameters: e.parameters,
            route: r,
            operation: i,
            context: n,
          });
          o.push(a);
        }
        return o;
      },
      [],
    );
var Lo = async ({ output: e, context: t }) =>
  A(
    Object.entries(t.specs[t.specKey].paths),
    async (r, [n, o]) => {
      let s = to(n),
        i = o,
        a = t;
      if (D(o)) {
        let { schema: l, imports: f } = await k(o, t);
        (i = l), (a = $($({}, t), f.length ? { specKey: f[0].specKey } : {}));
      }
      let p = await Ko({ verbs: i, output: e, route: s, context: a }),
        c = p.reduce(
          (l, { queryParams: f, body: d, response: g }) => (
            f && l.push(f.schema, ...f.deps),
            l.push(...d.schemas),
            l.push(...g.schemas),
            l
          ),
          [],
        ),
        m = await Co(e.client, p, {
          route: s,
          pathRoute: n,
          override: e.override,
          context: a,
          mock: !!e.mock,
        });
      return (
        r.schemas.push(...c), (r.operations = $($({}, r.operations), m)), r
      );
    },
    { operations: {}, schemas: [] },
  );
u();
var $i = ye(Rr());
var jr = (e = {}, t, r) =>
  (0, $i.default)(e)
    ? Promise.resolve([])
    : A(
        Object.entries(e),
        async (n, [o, s]) => {
          let i = await Fe([[r, s]], o, t, 'void'),
            a = i.flatMap(({ imports: d }) => d),
            p = i.flatMap(({ schemas: d }) => d),
            c = i.map(({ value: d }) => d).join(' | '),
            m = `${x(o)}${r}`,
            f = `${z(s)}export type ${m} = ${c || 'unknown'};
`;
          return (
            n.push(...p),
            m !== c && n.push({ name: m, model: f, imports: a }),
            n
          );
        },
        [],
      );
u();
var xi = (e = {}, t, r) =>
  A(
    Object.entries(e),
    async (n, [o, s]) => {
      let i = `${x(o)}${r}`,
        { schema: a, imports: p } = await k(s, t);
      if (a.in !== 'query') return n;
      if (!a.schema || p.length)
        return (
          n.push({
            name: i,
            imports: p.length
              ? [
                  {
                    name: p[0].name,
                    specKey: p[0].specKey,
                    schemaName: p[0].schemaName,
                  },
                ]
              : [],
            model: `export type ${i} = ${p.length ? p[0].name : 'unknown'};
`,
          }),
          n
        );
      let c = await fe({ schema: a.schema, propName: i, context: t }),
        l = `${z(s)}export type ${i} = ${c.value || 'unknown'};
`;
      return (
        n.push(...c.schemas),
        i !== c.value && n.push({ name: i, model: l, imports: c.imports }),
        n
      );
    },
    [],
  );
u();
var wi = ye(Rr());
u();
var Si = async ({ name: e, schema: t, context: r, suffix: n }) => {
  var p;
  let o = await Dt({ item: t, name: e, context: r }),
    s = o.value === '{}',
    i = '';
  (i += z(t)),
    s &&
      (r.tslint
        ? (i += `// tslint:disable-next-line:no-empty-interface
`)
        : (i += `// eslint-disable-next-line @typescript-eslint/no-empty-interface
`)),
    !Ie.includes(o.value) &&
    !((p = r == null ? void 0 : r.override) != null && p.useTypeOverInterfaces)
      ? (i += `export interface ${e} ${o.value}
`)
      : (i += `export type ${e} = ${o.value};
`);
  let a = o.imports.filter((c) => c.name !== e);
  return [...o.schemas, { name: e, model: i, imports: a }];
};
var Ti = async (e = {}, t, r) =>
  (0, wi.default)(e)
    ? []
    : A(
        Object.entries(e),
        async (o, [s, i]) => {
          let a = x(s) + r;
          if (
            (!i.type || i.type === 'object') &&
            !i.allOf &&
            !i.oneOf &&
            !i.anyOf &&
            !D(i) &&
            !i.nullable
          )
            return (
              o.push(
                ...(await Si({ name: a, schema: i, context: t, suffix: r })),
              ),
              o
            );
          {
            let p = await ie({ schema: i, name: a, context: t }),
              c = '',
              m = p.imports;
            if (((c += z(i)), p.isEnum && !p.isRef))
              c += qe(p.value, p.type, a);
            else if (a === p.value && p.isRef) {
              let l = p.imports.find((f) => f.name === a);
              if (!l)
                c += `export type ${a} = ${p.value};
`;
              else {
                let f =
                  l != null && l.specKey
                    ? `${x(bt(l.specKey, t.specKey))}${p.value}`
                    : `${p.value}Bis`;
                (c += `export type ${a} = ${f};
`),
                  (m = m.map((d) =>
                    d.name === a ? T($({}, d), { alias: f }) : d,
                  ));
              }
            } else
              c += `export type ${a} = ${p.value};
`;
            return o.push(...p.schemas, { name: a, model: c, imports: m }), o;
          }
        },
        [],
      );
u();
var _ibmopenapivalidator = require('ibm-openapi-validator');
var _ibmopenapivalidator2 = _interopRequireDefault(_ibmopenapivalidator);
var Ri = async (e) => {
  let { errors: t, warnings: r } = await _ibmopenapivalidator2.default.call(
    void 0,
    e,
  );
  r.length && Rn(r), t.length && jn(t);
};
var Qu = async ({ specs: e, input: t, workspace: r }) => {
    var o;
    let n =
      (o = t.override) != null && o.transformer
        ? await St(t.override.transformer, r)
        : void 0;
    return A(
      Object.entries(e),
      async (s, [i, a]) => {
        let p = await Xn(a, t.converterOptions, i),
          c = n ? n(p) : p;
        return t.validation && (await Ri(c)), (s[i] = c), s;
      },
      {},
    );
  },
  Pr = async ({ data: e, input: t, output: r, target: n, workspace: o }) => {
    var p;
    let s = await Qu({ specs: e, input: t, workspace: o }),
      i = await A(
        Object.entries(s),
        async (c, [m, l]) => {
          var S, w, P, j, I, R;
          let f = {
              specKey: m,
              target: n,
              workspace: o,
              specs: s,
              override: r.override,
              tslint: r.tslint,
              tsconfig: r.tsconfig,
              packageJson: r.packageJson,
            },
            d = await Ti(
              l.openapi
                ? (P = l.components) == null
                  ? void 0
                  : P.schemas
                : $(
                    $(
                      {},
                      _lodashomit2.default.call(void 0, l, [
                        'openapi',
                        'info',
                        'servers',
                        'paths',
                        'components',
                        'security',
                        'tags',
                        'externalDocs',
                      ]),
                    ),
                    (w = (S = l.components) == null ? void 0 : S.schemas) !=
                      null
                      ? w
                      : {},
                  ),
              f,
              r.override.components.schemas.suffix,
            ),
            g = await jr(
              (j = l.components) == null ? void 0 : j.responses,
              f,
              r.override.components.responses.suffix,
            ),
            b = await jr(
              (I = l.components) == null ? void 0 : I.requestBodies,
              f,
              r.override.components.requestBodies.suffix,
            ),
            y = await xi(
              (R = l.components) == null ? void 0 : R.parameters,
              f,
              r.override.components.parameters.suffix,
            ),
            h = [...d, ...g, ...b, ...y];
          return h.length && (c[m] = h), c;
        },
        {},
      ),
      a = await Lo({
        output: r,
        context: {
          specKey: n,
          target: n,
          workspace: o,
          specs: s,
          override: r.override,
          tslint: r.tslint,
          tsconfig: r.tsconfig,
          packageJson: r.packageJson,
        },
      });
    return T($({}, a), {
      schemas: T($({}, i), {
        [n]: [...((p = i[n]) != null ? p : []), ...a.schemas],
      }),
      target: n,
      info: s[n].info,
    });
  };
var Hu = async (e, o, n) => {
    var s = o,
      { validate: t } = s,
      r = we(s, ['validate']);
    if (t)
      try {
        await _swaggerparser2.default.validate(e);
      } catch (a) {
        if ((a == null ? void 0 : a.name) === 'ParserError') throw a;
        _console.log.call(void 0, `\u26A0\uFE0F  ${_chalk2.default.yellow(a)}`);
      }
    let i = (await _swaggerparser2.default.resolve(e, r)).values();
    return n
      ? i
      : Object.fromEntries(
          Object.entries(i).map(([a, p]) => [
            _upath.resolve.call(void 0, a),
            p,
          ]),
        );
  },
  Pi = async (e, t) => {
    let { input: r, output: n } = t;
    if (q(r.target))
      return Pr({
        data: { [e]: r.target },
        input: r,
        output: n,
        target: e,
        workspace: e,
      });
    let o = Oe(r.target),
      s = await Hu(r.target, r.parserOptions, o);
    return Pr({ data: s, input: r, output: n, target: r.target, workspace: e });
  };
u();
var _execa = require('execa');
var _execa2 = _interopRequireDefault(_execa);
u();
var el = ({
    schema: { imports: e, model: t },
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let i = s;
    return (
      (i += Un({ imports: e, target: r, isRootKey: n, specsName: o })),
      (i += e.length
        ? `

`
        : `
`),
      (i += t),
      i
    );
  },
  Er = (e, t) => _upath.join.call(void 0, e, `/${t}.ts`);
var tl = async ({
    path: e,
    schema: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let i = E(t.name);
    try {
      await _fsextra.outputFile.call(
        void 0,
        Er(e, i),
        el({ schema: t, target: r, isRootKey: n, specsName: o, header: s }),
      );
      let a = Er(e, 'index'),
        c = (await _fsextra.readFile.call(void 0, a)).toString();
      !c.includes(`export * from './${i}'`) &&
        !c.includes(`export * from "./${i}"`) &&
        (await _fsextra.appendFile.call(
          void 0,
          Er(e, 'index'),
          `export * from './${i}';
`,
        ));
    } catch (a) {
      throw `Oups... \u{1F37B}. An Error occurred while writing schema ${i} => ${a}`;
    }
  },
  Mi = async ({
    schemaPath: e,
    schemas: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => (
    await _fsextra.ensureFile.call(
      void 0,
      _upath.join.call(void 0, e, '/index.ts'),
    ),
    Promise.all(
      t.map((i) =>
        tl({
          path: e,
          schema: i,
          target: r,
          isRootKey: n,
          specsName: o,
          header: s,
        }),
      ),
    )
  );
u();
u();
var rl = (e, t) =>
    e +
    `${t}
`,
  Se = (e) =>
    Object.values(e)
      .flatMap((r) => r)
      .sort((r, n) => (r.imports.some((o) => o.name === n.name) ? 1 : -1))
      .reduce((r, { model: n }) => rl(r, n), '');
u();
var _compareversions = require('compare-versions');
var qt = (e, t, r) => {
  let n = Object.values(e).map(({ operationName: i }) => i),
    o = (r == null ? void 0 : r.client) === B.ANGULAR,
    s = Object.values(e).reduce(
      (i, a, p, c) => {
        var m, l, f;
        if (
          (i.imports.push(...a.imports),
          i.importsMSW.push(...a.importsMSW),
          (i.implementation +=
            a.implementation +
            `
`),
          (i.implementationMSW.function += a.implementationMSW.function),
          (i.implementationMSW.handler += a.implementationMSW.handler),
          a.mutator && i.mutators.push(a.mutator),
          a.formData && i.formData.push(a.formData),
          a.formUrlEncoded && i.formUrlEncoded.push(a.formUrlEncoded),
          p === c.length - 1)
        ) {
          let d = i.mutators.some((S) => (o ? S.hasThirdArg : S.hasSecondArg)),
            g =
              (f =
                (l = (m = r.packageJson) == null ? void 0 : m.dependencies) ==
                null
                  ? void 0
                  : l.typescript) != null
                ? f
                : '4.4.0',
            b = _compareversions.compare.call(void 0, g, '4.5.0', '>='),
            y = At({
              outputClient: r.client,
              isRequestOptions: r.override.requestOptions !== !1,
              isMutator: d,
              isGlobalMutator: !!r.override.mutator,
              title: x(t.title),
              customTitleFunc: r.override.title,
              provideInRoot: !!r.override.angular.provideIn,
              provideIn: r.override.angular.provideIn,
              hasAwaitedType: b,
            });
          (i.implementation = y.implementation + i.implementation),
            (i.implementationMSW.handler =
              y.implementationMSW + i.implementationMSW.handler);
          let h = vt({
            outputClient: r == null ? void 0 : r.client,
            operationNames: n,
            title: x(t.title),
            customTitleFunc: r.override.title,
            hasMutator: !!i.mutators.length,
            hasAwaitedType: b,
          });
          (i.implementation += h.implementation),
            (i.implementationMSW.handler += h.implementationMSW);
        }
        return i;
      },
      {
        imports: [],
        implementation: '',
        implementationMSW: { function: '', handler: '' },
        importsMSW: [],
        mutators: [],
        formData: [],
        formUrlEncoded: [],
      },
    );
  return T($({}, s), {
    implementationMSW:
      s.implementationMSW.function + s.implementationMSW.handler,
  });
};
var Ii = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let { path: i, dirname: a } = v(n.target, { backupFilename: E(r.title) }),
      {
        imports: p,
        importsMSW: c,
        implementation: m,
        implementationMSW: l,
        mutators: f,
        formData: d,
        formUrlEncoded: g,
      } = qt(e, r, n),
      b = s,
      y = n.schemas ? se(a, v(n.schemas).dirname) : void 0,
      h = Q(n.tsconfig);
    return (
      (b += xe(
        n.client,
        m,
        y
          ? [
              {
                exports: p.filter((S) => !c.some((w) => S.name === w.name)),
                dependency: y,
              },
            ]
          : [],
        o,
        !!n.schemas,
        h,
        !!n.override.mutator,
      )),
      n.mock &&
        (b += $e(
          l,
          y ? [{ exports: c, dependency: y }] : [],
          o,
          !!n.schemas,
          h,
        )),
      f && (b += _(f)),
      d && (b += _(d)),
      g && (b += _(g)),
      n.schemas || (b += Se(t)),
      (b += `

${m}`),
      n.mock &&
        ((b += `

`),
        (b += l)),
      await _fsextra.outputFile.call(void 0, i, b),
      [i]
    );
  } catch (i) {
    throw `Oups... \u{1F37B}. An Error occurred while writing file => ${i}`;
  }
};
u();
var Ai = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let {
        filename: i,
        dirname: a,
        extension: p,
      } = v(n.target, { backupFilename: E(r.title) }),
      {
        imports: c,
        implementation: m,
        implementationMSW: l,
        importsMSW: f,
        mutators: d,
        formData: g,
        formUrlEncoded: b,
      } = qt(e, r, n),
      y = s,
      h = s,
      S = n.schemas ? se(a, v(n.schemas).dirname) : './' + i + '.schemas',
      w = Q(n.tsconfig);
    (y += xe(
      n.client,
      m,
      [{ exports: c, dependency: S }],
      o,
      !!n.schemas,
      w,
      !!n.override.mutator,
    )),
      (h += $e(l, [{ exports: f, dependency: S }], o, !!n.schemas, w));
    let P = n.schemas
      ? void 0
      : _upath.join.call(void 0, a, i + '.schemas' + p);
    if (P) {
      let G = s + Se(t);
      await _fsextra.outputFile.call(
        void 0,
        _upath.join.call(void 0, a, i + '.schemas' + p),
        G,
      );
    }
    d && (y += _(d)),
      g && (y += _(g)),
      b && (y += _(b)),
      (y += `
${m}`),
      (h += `
${l}`);
    let j = i + (B.ANGULAR === n.client ? '.service' : '') + p,
      I = _upath.join.call(void 0, a, j);
    await _fsextra.outputFile.call(void 0, _upath.join.call(void 0, a, j), y);
    let R = n.mock ? _upath.join.call(void 0, a, i + '.msw' + p) : void 0;
    return (
      R && (await _fsextra.outputFile.call(void 0, R, h)),
      [I, ...(P ? [P] : []), ...(R ? [R] : [])]
    );
  } catch (i) {
    throw `Oups... \u{1F37B}. An Error occurred while splitting => ${i}`;
  }
};
u();
u();
var il = (e) => T($({}, e), { tags: e.tags.length ? e.tags : ['default'] }),
  al = (e, t) =>
    t.tags.reduce((r, n) => {
      var s, i, a;
      let o = r[n];
      return (
        (r[n] = o
          ? {
              implementation: o.implementation + t.implementation,
              imports: [...o.imports, ...t.imports],
              importsMSW: [...o.importsMSW, ...t.importsMSW],
              implementationMSW: {
                function:
                  o.implementationMSW.function + t.implementationMSW.function,
                handler:
                  o.implementationMSW.handler + t.implementationMSW.handler,
              },
              mutators: t.mutator
                ? [...((s = o.mutators) != null ? s : []), t.mutator]
                : o.mutators,
              formData: t.formData
                ? [...((i = o.formData) != null ? i : []), t.formData]
                : o.formData,
              formUrlEncoded: t.formUrlEncoded
                ? [
                    ...((a = o.formUrlEncoded) != null ? a : []),
                    t.formUrlEncoded,
                  ]
                : o.formUrlEncoded,
            }
          : {
              imports: t.imports,
              importsMSW: t.importsMSW,
              mutators: t.mutator ? [t.mutator] : [],
              formData: t.formData ? [t.formData] : [],
              formUrlEncoded: t.formUrlEncoded ? [t.formUrlEncoded] : [],
              implementation: t.implementation,
              implementationMSW: {
                function: t.implementationMSW.function,
                handler: t.implementationMSW.handler,
              },
            }),
        r
      );
    }, e),
  Ft = (e, t) => {
    let r = t.client === B.ANGULAR,
      n = Object.values(e)
        .map(il)
        .reduce((o, s, i, a) => {
          let p = al(o, s);
          return i === a.length - 1
            ? Object.entries(p).reduce((c, [m, l]) => {
                var S, w, P, j, I;
                let f = !!(
                    (S = l.mutators) != null &&
                    S.some((R) => (r ? R.hasThirdArg : R.hasSecondArg))
                  ),
                  d = Object.values(e)
                    .filter(({ tags: R }) => R.includes(m))
                    .map(({ operationName: R }) => R),
                  g =
                    (j =
                      (P =
                        (w = t.packageJson) == null
                          ? void 0
                          : w.dependencies) == null
                        ? void 0
                        : P.typescript) != null
                      ? j
                      : '4.4.0',
                  b = _compareversions.compare.call(void 0, g, '4.5.0', '>='),
                  y = vt({
                    outputClient: t == null ? void 0 : t.client,
                    operationNames: d,
                    title: x(m),
                    customTitleFunc: t.override.title,
                    hasMutator: !!((I = l.mutators) != null && I.length),
                    hasAwaitedType: b,
                  }),
                  h = At({
                    outputClient: t.client,
                    isRequestOptions: t.override.requestOptions !== !1,
                    isMutator: f,
                    isGlobalMutator: !!t.override.mutator,
                    title: x(m),
                    customTitleFunc: t.override.title,
                    provideInRoot: !!t.override.angular.provideIn,
                    provideIn: t.override.angular.provideIn,
                    hasAwaitedType: b,
                  });
                return (
                  (c[m] = {
                    implementation:
                      h.implementation + l.implementation + y.implementation,
                    implementationMSW: {
                      function: l.implementationMSW.function,
                      handler:
                        h.implementationMSW +
                        l.implementationMSW.handler +
                        y.implementationMSW,
                    },
                    imports: l.imports,
                    importsMSW: l.importsMSW,
                    mutators: l.mutators,
                    formData: l.formData,
                    formUrlEncoded: l.formUrlEncoded,
                  }),
                  c
                );
              }, {})
            : p;
        }, {});
    return Object.entries(n).reduce(
      (o, [s, i]) => (
        (o[s] = T($({}, i), {
          implementationMSW:
            i.implementationMSW.function + i.implementationMSW.handler,
        })),
        o
      ),
      {},
    );
  };
var vi = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: i,
      dirname: a,
      extension: p,
    } = v(n.target, { backupFilename: E(r.title) }),
    c = Ft(e, n),
    m = Q(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(c).map(async ([f, d]) => {
        try {
          let {
              imports: g,
              implementation: b,
              implementationMSW: y,
              importsMSW: h,
              mutators: S,
              formData: w,
              formUrlEncoded: P,
            } = d,
            j = s,
            I = s,
            R = n.schemas
              ? '../' + se(a, v(n.schemas).dirname)
              : '../' + i + '.schemas';
          (j += xe(
            n.client,
            b,
            [{ exports: g, dependency: R }],
            o,
            !!n.schemas,
            m,
            !!n.override.mutator,
          )),
            (I += $e(y, [{ exports: h, dependency: R }], o, !!n.schemas, m));
          let G = n.schemas
            ? void 0
            : _upath.join.call(void 0, a, i + '.schemas' + p);
          if (G) {
            let Me = s + Se(t);
            await _fsextra.outputFile.call(void 0, G, Me);
          }
          S && (j += _(S, !0)),
            w && (j += _(w, !0)),
            P && (j += _(P)),
            (j += `
${b}`),
            (I += `
${y}`);
          let Z = Te(f) + (B.ANGULAR === n.client ? '.service' : '') + p,
            ee = _upath.join.call(void 0, a, Te(f), Z);
          await _fsextra.outputFile.call(void 0, ee, j);
          let te = n.mock
            ? _upath.join.call(void 0, a, Te(f), Te(f) + '.msw' + p)
            : void 0;
          return (
            te && (await _fsextra.outputFile.call(void 0, te, I)),
            [ee, ...(G ? [G] : []), ...(te ? [te] : [])]
          );
        } catch (g) {
          throw `Oups... \u{1F37B}. An Error occurred while splitting tag ${f} => ${g}`;
        }
      }),
    )
  ).flatMap((f) => f);
};
u();
var Di = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: i,
      dirname: a,
      extension: p,
    } = v(n.target, { backupFilename: E(r.title) }),
    c = Ft(e, n),
    m = Q(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(c).map(async ([f, d]) => {
        try {
          let {
              imports: g,
              implementation: b,
              implementationMSW: y,
              importsMSW: h,
              mutators: S,
              formData: w,
              formUrlEncoded: P,
            } = d,
            j = s,
            I = n.schemas ? se(a, v(n.schemas).dirname) : './' + i + '.schemas';
          (j += xe(
            n.client,
            b,
            [
              {
                exports: g.filter((Z) => !h.some((ee) => Z.name === ee.name)),
                dependency: I,
              },
            ],
            o,
            !!n.schemas,
            m,
            !!n.override.mutator,
          )),
            n.mock &&
              (j += $e(y, [{ exports: h, dependency: I }], o, !!n.schemas, m));
          let R = n.schemas
            ? void 0
            : _upath.join.call(void 0, a, i + '.schemas' + p);
          if (R) {
            let Z = s + Se(t);
            await _fsextra.outputFile.call(void 0, R, Z);
          }
          S && (j += _(S)),
            w && (j += _(w)),
            P && (j += _(P)),
            (j += `

`),
            (j += b),
            n.mock &&
              ((j += `

`),
              (j += y));
          let G = _upath.join.call(void 0, a, `${Te(f)}${p}`);
          return (
            await _fsextra.outputFile.call(void 0, G, j), [G, ...(R ? [R] : [])]
          );
        } catch (g) {
          throw `Oups... \u{1F37B}. An Error occurred while writing tag ${f} => ${g}`;
        }
      }),
    )
  ).flatMap((f) => f);
};
var dl = (e, t) => {
    if (!e) return '';
    let r = e(t);
    return Array.isArray(r) ? z({ description: r }) : r;
  },
  Fi = async ({ operations: e, schemas: t, target: r, info: n }, o, s, i) => {
    let { output: a } = s,
      p = i || n.title,
      c = Object.keys(t).reduce((f, d) => {
        let b = bt(d, r).slice(1).split('/').join('-');
        return (f[d] = b), f;
      }, {}),
      m = dl(a.override.header, n);
    if (a.schemas) {
      let f = a.schemas;
      await Promise.all(
        Object.entries(t).map(([d, g]) => {
          let b = r === d,
            y = b ? f : _upath.join.call(void 0, f, c[d]);
          return Mi({
            schemaPath: y,
            schemas: g,
            target: r,
            specsName: c,
            isRootKey: b,
            header: m,
          });
        }),
      );
    }
    let l = [];
    if (a.target)
      switch (a.mode) {
        case ge.SPLIT:
          l = await Ai({
            workspace: o,
            operations: e,
            output: a,
            info: n,
            schemas: t,
            specsName: c,
            header: m,
          });
          break;
        case ge.TAGS:
          l = await Di({
            workspace: o,
            operations: e,
            output: a,
            info: n,
            schemas: t,
            specsName: c,
            header: m,
          });
          break;
        case ge.TAGS_SPLIT:
          l = await vi({
            workspace: o,
            operations: e,
            output: a,
            info: n,
            schemas: t,
            specsName: c,
            header: m,
          });
          break;
        case ge.SINGLE:
        default:
          l = await Ii({
            workspace: o,
            operations: e,
            output: a,
            info: n,
            schemas: t,
            specsName: c,
            header: m,
          });
          break;
      }
    if (a.workspace) {
      let f = a.workspace,
        d = l
          .filter((b) => !b.endsWith('.msw.ts'))
          .map((b) => se(f, v(b).pathWithoutExtension));
      a.schemas && d.push(se(f, v(a.schemas).dirname));
      let g = _upath.join.call(void 0, f, '/index.ts');
      if (await _fsextra.pathExists.call(void 0, g)) {
        let b = await _fsextra.readFile.call(void 0, g, 'utf8'),
          y = d.filter((h) => !b.includes(h));
        await _fsextra.appendFile.call(
          void 0,
          g,
          _lodashuniq2.default
            .call(void 0, y)
            .map((h) => `export * from '${h}';`).join(`
`) +
            `
`,
        );
      } else
        await _fsextra.outputFile.call(
          void 0,
          g,
          _lodashuniq2.default
            .call(void 0, d)
            .map((b) => `export * from '${b}';`).join(`
`) +
            `
`,
        );
      l = [g, ...l];
    }
    if (a.prettier)
      try {
        await _execa2.default.call(void 0, 'prettier', [
          '--write',
          ...(a.schemas ? [v(a.schemas).dirname] : []),
          ...l,
        ]);
      } catch (e8) {
        _console.log.call(
          void 0,
          _chalk2.default.yellow(
            `\u26A0\uFE0F  ${p ? `${p} - ` : ''}Prettier not found`,
          ),
        );
      }
    Tn(p);
  };
u();
var Vi = (e) => {
  wn(e), process.exit(1);
};
var Ui = async (e, t, r) => {
    if (t.output.clean) {
      let o = Array.isArray(t.output.clean) ? t.output.clean : [];
      t.output.target &&
        (await Yt(['**/*', '!**/*.d.ts', ...o], v(t.output.target).dirname)),
        t.output.schemas &&
          (await Yt(['**/*', '!**/*.d.ts', ...o], v(t.output.schemas).dirname)),
        N(`${r ? `${r}: ` : ''}Cleaning output folder`);
    }
    let n = await Pi(e, t);
    await Fi(n, e, t, r);
  },
  Wi = async (e, t, r) => {
    if (r) {
      let n = e[r];
      if (n)
        try {
          await Ui(t, n, r);
        } catch (o) {
          N(_chalk2.default.red(`\u{1F6D1}  ${r ? `${r} - ` : ''}${o}`));
        }
      else Vi('Project not found');
      return;
    }
    return A(
      Object.entries(e),
      async (n, [o, s]) => {
        try {
          n.push(await Ui(t, s, o));
        } catch (i) {
          N(_chalk2.default.red(`\u{1F6D1}  ${o ? `${o} - ` : ''}${i}`));
        }
        return n;
      },
      [],
    );
  },
  Hx = (exports.M = async (e, t) => {
    let {
      path: r,
      file: n,
      error: o,
    } = await yt(e, { defaultFileName: 'orval.config' });
    if (!n) throw `failed to load from ${r} => ${o}`;
    let s = _upath.dirname.call(void 0, r),
      i = await (L(n) ? n() : n),
      a = await A(
        Object.entries(i),
        async (c, [m, l]) => ((c[m] = await Yn(l, s, t)), c),
        {},
      ),
      p = Object.entries(a)
        .filter(
          ([c]) =>
            (t == null ? void 0 : t.projectName) === void 0 ||
            c === (t == null ? void 0 : t.projectName),
        )
        .map(([, { input: c }]) => c.target)
        .filter((c) => F(c));
    (t == null ? void 0 : t.watch) && p.length
      ? Jn(
          t == null ? void 0 : t.watch,
          () => Wi(a, s, t == null ? void 0 : t.projectName),
          p,
        )
      : await Wi(a, s, t == null ? void 0 : t.projectName);
  });
exports.a = Ut;
exports.b = u;
exports.c = F;
exports.d = N;
exports.e = jl;
exports.f = x;
exports.g = E;
exports.h = El;
exports.i = Te;
exports.j = Ml;
exports.k = ne;
exports.l = U;
exports.m = V;
exports.n = gt;
exports.o = dt;
exports.p = ha;
exports.q = Ie;
exports.r = oe;
exports.s = kl;
exports.t = Un;
exports.u = _;
exports.v = qa;
exports.w = $t;
exports.x = ae;
exports.y = Fa;
exports.z = Va;
exports.A = pe;
exports.B = Na;
exports.C = Ua;
exports.D = ce;
exports.E = me;
exports.F = ue;
exports.G = xg;
exports.H = Yn;
exports.I = Ln;
exports.J = Q;
exports.K = Jn;
exports.L = Ui;
exports.M = Hx;
