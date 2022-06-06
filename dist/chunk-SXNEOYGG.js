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
var E = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
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
var ur = E((GO, Ho) => {
  u();
  var oc = Object.prototype;
  function sc(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || oc;
    return e === r;
  }
  Ho.exports = sc;
});
var Jo = E((CO, Yo) => {
  u();
  function ic(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  Yo.exports = ic;
});
var Zo = E((DO, Xo) => {
  u();
  var ac = Jo(),
    pc = ac(Object.keys, Object);
  Xo.exports = pc;
});
var ts = E((kO, es) => {
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
var lr = E((qO, rs) => {
  u();
  var gc =
    typeof global == 'object' && global && global.Object === Object && global;
  rs.exports = gc;
});
var de = E((FO, ns) => {
  u();
  var dc = lr(),
    yc = typeof self == 'object' && self && self.Object === Object && self,
    bc = dc || yc || Function('return this')();
  ns.exports = bc;
});
var fr = E((VO, os) => {
  u();
  var Oc = de(),
    hc = Oc.Symbol;
  os.exports = hc;
});
var ps = E((NO, as) => {
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
var ms = E((UO, cs) => {
  u();
  var wc = Object.prototype,
    Tc = wc.toString;
  function Rc(e) {
    return Tc.call(e);
  }
  cs.exports = Rc;
});
var tt = E((WO, fs) => {
  u();
  var us = fr(),
    jc = ps(),
    Pc = ms(),
    Ec = '[object Null]',
    Ic = '[object Undefined]',
    ls = us ? us.toStringTag : void 0;
  function vc(e) {
    return e == null
      ? e === void 0
        ? Ic
        : Ec
      : ls && ls in Object(e)
      ? jc(e)
      : Pc(e);
  }
  fs.exports = vc;
});
var gr = E((BO, gs) => {
  u();
  function Mc(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  gs.exports = Mc;
});
var dr = E((_O, ds) => {
  u();
  var Ac = tt(),
    Gc = gr(),
    Cc = '[object AsyncFunction]',
    Dc = '[object Function]',
    kc = '[object GeneratorFunction]',
    qc = '[object Proxy]';
  function Fc(e) {
    if (!Gc(e)) return !1;
    var t = Ac(e);
    return t == Dc || t == kc || t == Cc || t == qc;
  }
  ds.exports = Fc;
});
var bs = E((QO, ys) => {
  u();
  var Vc = de(),
    Nc = Vc['__core-js_shared__'];
  ys.exports = Nc;
});
var $s = E((zO, hs) => {
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
var br = E((KO, xs) => {
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
var ws = E((LO, Ss) => {
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
var Rs = E((HO, Ts) => {
  u();
  function nm(e, t) {
    return e == null ? void 0 : e[t];
  }
  Ts.exports = nm;
});
var Ve = E((YO, js) => {
  u();
  var om = ws(),
    sm = Rs();
  function im(e, t) {
    var r = sm(e, t);
    return om(r) ? r : void 0;
  }
  js.exports = im;
});
var Es = E((JO, Ps) => {
  u();
  var am = Ve(),
    pm = de(),
    cm = am(pm, 'DataView');
  Ps.exports = cm;
});
var vs = E((XO, Is) => {
  u();
  var mm = Ve(),
    um = de(),
    lm = mm(um, 'Map');
  Is.exports = lm;
});
var As = E((ZO, Ms) => {
  u();
  var fm = Ve(),
    gm = de(),
    dm = fm(gm, 'Promise');
  Ms.exports = dm;
});
var Cs = E((eh, Gs) => {
  u();
  var ym = Ve(),
    bm = de(),
    Om = ym(bm, 'Set');
  Gs.exports = Om;
});
var ks = E((th, Ds) => {
  u();
  var hm = Ve(),
    $m = de(),
    xm = hm($m, 'WeakMap');
  Ds.exports = xm;
});
var _s = E((rh, Bs) => {
  u();
  var Or = Es(),
    hr = vs(),
    $r = As(),
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
var kt = E((nh, Qs) => {
  u();
  function Em(e) {
    return e != null && typeof e == 'object';
  }
  Qs.exports = Em;
});
var Ks = E((oh, zs) => {
  u();
  var Im = tt(),
    vm = kt(),
    Mm = '[object Arguments]';
  function Am(e) {
    return vm(e) && Im(e) == Mm;
  }
  zs.exports = Am;
});
var Js = E((sh, Ys) => {
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
var Zs = E((ih, Xs) => {
  u();
  var qm = Array.isArray;
  Xs.exports = qm;
});
var wr = E((ah, ei) => {
  u();
  var Fm = 9007199254740991;
  function Vm(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Fm;
  }
  ei.exports = Vm;
});
var ri = E((ph, ti) => {
  u();
  var Nm = dr(),
    Um = wr();
  function Wm(e) {
    return e != null && Um(e.length) && !Nm(e);
  }
  ti.exports = Wm;
});
var oi = E((ch, ni) => {
  u();
  function Bm() {
    return !1;
  }
  ni.exports = Bm;
});
var pi = E((rt, Ue) => {
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
var mi = E((mh, ci) => {
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
    G = {};
  G[fu] = G[gu] = G[du] = G[yu] = G[bu] = G[Ou] = G[hu] = G[$u] = G[xu] = !0;
  G[Xm] =
    G[Zm] =
    G[uu] =
    G[eu] =
    G[lu] =
    G[tu] =
    G[ru] =
    G[nu] =
    G[ou] =
    G[su] =
    G[iu] =
    G[au] =
    G[pu] =
    G[cu] =
    G[mu] =
      !1;
  function Su(e) {
    return Jm(e) && Ym(e.length) && !!G[Hm(e)];
  }
  ci.exports = Su;
});
var li = E((uh, ui) => {
  u();
  function wu(e) {
    return function (t) {
      return e(t);
    };
  }
  ui.exports = wu;
});
var gi = E((nt, We) => {
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
var Oi = E((lh, bi) => {
  u();
  var Pu = mi(),
    Eu = li(),
    di = gi(),
    yi = di && di.isTypedArray,
    Iu = yi ? Eu(yi) : Pu;
  bi.exports = Iu;
});
var Rr = E((fh, hi) => {
  u();
  var vu = ts(),
    Mu = _s(),
    Au = Js(),
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
        Au(e))
    )
      return !e.length;
    var t = Mu(e);
    if (t == Fu || t == Vu) return !e.size;
    if (ku(e)) return !vu(e).length;
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
      'node ./dist/bin/orval.js --config ./samples/react-query/basic/orval.config.ts --watch',
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
var C = (e) => Boolean(e.$ref),
  yn = (e) => !_upath.extname.call(void 0, e);
function k(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function q(e) {
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
  function a(m, c, l = {}) {
    if (o >= Wt[m]) {
      let g = m === 'info' ? 'log' : m,
        d = () => {
          if (l.timestamp) {
            let f =
              m === 'info'
                ? _chalk2.default.cyan.bold(r)
                : m === 'warn'
                ? _chalk2.default.yellow.bold(r)
                : _chalk2.default.red.bold(r);
            return `${_chalk2.default.dim(
              new Date().toLocaleTimeString(),
            )} ${f} ${c}`;
          } else return c;
        };
      m === xn && c === Sn
        ? (Bt++, s(), console[g](d(), _chalk2.default.yellow(`(x${Bt + 1})`)))
        : ((Bt = 0), (Sn = c), (xn = m), l.clear && s(), console[g](d()));
    }
  }
  let i = new Set(),
    p = {
      hasWarned: !1,
      info(m, c) {
        a('info', m, c);
      },
      warn(m, c) {
        (p.hasWarned = !0), a('warn', m, c);
      },
      warnOnce(m, c) {
        i.has(m) || ((p.hasWarned = !0), a('warn', m, c), i.add(m));
      },
      error(m, c) {
        (p.hasWarned = !0), a('error', m, c);
      },
      clearScreen(m) {
        o >= Wt[m] && s();
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
  P = (exports.g = (e) => ga(x(e))),
  El = (exports.h = (e) => En(e, '_', !0)),
  Te = (exports.i = (e) => En(e, '-', !0)),
  Il = (exports.j = (e, t, r) => ft(Pn.call(zt(e, !!t, !1, !0)), t, r));
u();
var _esutils = require('esutils');
var _lodashget = require('lodash.get');
var _lodashget2 = _interopRequireDefault(_lodashget);
var ne = (e) => {
    if (!(mt(e) || On(e)))
      return q(e)
        ? `'${e}'`
        : bn(e) || J(e) || L(e)
        ? `${e}`
        : Array.isArray(e)
        ? `[${e.map(ne).join(', ')}]`
        : Object.entries(e).reduce((t, [r, n], o, s) => {
            let a = ne(n);
            return s.length === 1
              ? `{ ${r}: ${a}, }`
              : o
              ? s.length - 1 === o
                ? t + `${r}: ${a}, }`
                : t + `${r}: ${a}, `
              : `{ ${r}: ${a}, `;
          }, '');
  },
  U = (exports.l = (e, t) => {
    let {
        whitespace: r = '',
        underscore: n = '',
        dot: o = '',
        dash: s = '',
        es5keyword: a = !1,
      } = t != null ? t : {},
      i = e.replace(/[^\w\s.-]/g, '');
    return (
      r !== !0 && (i = i.replace(/[\s]/g, r)),
      n !== !0 && (i = i.replace(/['_']/g, n)),
      o !== !0 && (i = i.replace(/[.]/g, o)),
      s !== !0 && (i = i.replace(/[-]/g, s)),
      a && (i = _esutils.keyword.isKeywordES5(i, !0) ? `_${i}` : i),
      i
    );
  }),
  F = (exports.m = (e, t) =>
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
  ve = (exports.q = ha.reduce(
    (e, t) => (e.push(t, `Array<${t}>`, `${t}[]`), e),
    [],
  )),
  se = (exports.r = [K.POST, K.PUT, K.PATCH, K.DELETE]),
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
var In = process.env.ORVAL_DEBUG_FILTER,
  Kt = process.env.DEBUG;
function vn(e, t = {}) {
  let r = _debug2.default.call(void 0, e),
    { onlyWhenFocused: n } = t,
    o = typeof n == 'string' ? n : e;
  return (s, ...a) => {
    (In && !s.includes(In)) ||
      (n && !(Kt != null && Kt.includes(o))) ||
      r(s, ...a);
  };
}
var A = (
    e = '',
    { backupFilename: t = 'filename', extension: r = '.ts' } = {},
  ) => {
    let n = yn(e),
      o = n ? _upath.join.call(void 0, e, t + r) : e,
      s = o.replace(/\.[^/.]+$/, ''),
      a = _upath.dirname.call(void 0, o),
      i = _upath.basename.call(void 0, o, r[0] !== '.' ? `.${r}` : r);
    return {
      path: o,
      pathWithoutExtension: s,
      extension: r,
      isDirectory: n,
      dirname: a,
      filename: i,
    };
  },
  Cn = vn('orval:file-load'),
  Ht = new Map();
async function yt(e, t) {
  let {
      root: r = process.cwd(),
      isDefault: n = !0,
      defaultFileName: o,
      logLevel: s,
      alias: a,
      tsconfig: i,
      load: p = !0,
    } = t != null ? t : {},
    m = Date.now(),
    c,
    l = !1,
    g = !1;
  if (e) (c = _path2.default.resolve(e)), (l = e.endsWith('.ts'));
  else if (o) {
    let b = _path2.default.resolve(r, `${o}.js`);
    if ((_fs2.default.existsSync(b) && (c = b), !c)) {
      let y = _path2.default.resolve(r, `${o}.mjs`);
      _fs2.default.existsSync(y) && ((c = y), (g = !0));
    }
    if (!c) {
      let y = _path2.default.resolve(r, `${o}.ts`);
      _fs2.default.existsSync(y) && ((c = y), (l = !0));
    }
  }
  c ||
    (e
      ? X(s).error(_chalk2.default.red(`File not found => ${e}`))
      : o
      ? X(s).error(_chalk2.default.red(`File not found => ${o}.{js,mjs,ts}`))
      : X(s).error(_chalk2.default.red('File not found')),
    process.exit(1));
  let d = _upath.normalizeSafe.call(void 0, c),
    f = Ht.get(c);
  if (f) return T($({ path: d }, f), { cached: !0 });
  try {
    let b;
    if (!b && !l && !g)
      try {
        delete W.cache[W.resolve(c)],
          (b = W(c)),
          Cn(`cjs loaded in ${Date.now() - m}ms`);
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
        c,
        g,
        r || _upath.dirname.call(void 0, d),
        a,
        i == null ? void 0 : i.compilerOptions,
      );
      p ? (b = await Pa(c, y, n)) : (b = y),
        Cn(`bundled file loaded in ${Date.now() - m}ms`);
    }
    return Ht.set(c, { file: b }), { path: d, file: b };
  } catch (b) {
    return Ht.set(c, { error: b }), { path: d, error: b };
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
                setup(i) {
                  i.onResolve({ filter: /^[\w@][^:]/ }, async ({ path: p }) => {
                    if (n) {
                      let m = Object.keys(n),
                        c = m.find(
                          (l) =>
                            p.startsWith(l) ||
                            _micromatch2.default.isMatch(p, m),
                        );
                      if (c) {
                        let l = _micromatch2.default.scan(c),
                          g = _micromatch2.default.scan(n[c]),
                          d = _upath.resolve.call(void 0, r, g.base),
                          f = l.base
                            ? p.replace(l.base, d)
                            : _upath.joinSafe.call(void 0, d, p),
                          y = _upath.extname.call(void 0, f) ? f : `${f}.ts`;
                        return _fs2.default.existsSync(y)
                          ? { path: y }
                          : void 0;
                      }
                    }
                    if (o != null && o.paths) {
                      let m = Object.keys(o == null ? void 0 : o.paths),
                        c = m.find(
                          (l) =>
                            p.startsWith(l) ||
                            _micromatch2.default.isMatch(p, m),
                        );
                      if (c) {
                        let l = _micromatch2.default.scan(c),
                          g = _micromatch2.default.scan(
                            o == null ? void 0 : o.paths[c][0],
                          ),
                          d = _upath.resolve.call(void 0, r, g.base),
                          f = l.base
                            ? p.replace(l.base, d)
                            : _upath.joinSafe.call(void 0, d, p),
                          y = _upath.extname.call(void 0, f) ? f : `${f}.ts`;
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
          setup(i) {
            i.onResolve({ filter: /.*/ }, (p) => {
              let m = p.path;
              if (m[0] !== '.' && !_path2.default.isAbsolute(m))
                return { external: !0 };
            });
          },
        },
        {
          name: 'replace-import-meta',
          setup(i) {
            i.onLoad({ filter: /\.[jt]s$/ }, async (p) => {
              let m = await _fs2.default.promises.readFile(p.path, 'utf8');
              return {
                loader: p.path.endsWith('.ts') ? 'ts' : 'js',
                contents: m
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
    { text: a } = s.outputFiles[0];
  return {
    code: a,
    dependencies: s.metafile ? Object.keys(s.metafile.inputs) : [],
  };
}
async function Pa(e, t, r) {
  let n = _path2.default.extname(e),
    o = W.extensions[n];
  (W.extensions[n] = (i, p) => {
    p === e ? i._compile(t, p) : o(i, p);
  }),
    delete W.cache[W.resolve(e)];
  let s = W(e),
    a = r && s.__esModule ? s.default : s;
  return (W.extensions[n] = o), a;
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
var Ia = /^https?:\/\/\w+(\.\w+)*(:[0-9]+)?(\/.*)?$/,
  Oe = (e) => _isURL2.default.call(void 0, e) || Ia.test(e);
var oe = (e, t) => {
    let r = _upath.relative.call(void 0, e, t);
    return _upath.normalizeSafe.call(void 0, `.${_upath.sep}${r}`);
  },
  bt = (e, t) => {
    if (Oe(e)) {
      let r = new URL(t);
      return e
        .replace(r.origin, '')
        .replace(A(r.pathname).dirname, '')
        .replace(`.${Jt(e)}`, '');
    }
    return (
      '/' +
      _upath.normalize
        .call(void 0, _upath.relative.call(void 0, A(t).dirname, e))
        .split('../')
        .join('')
        .replace(`.${Jt(e)}`, '')
    );
  };
var Ae = 'BodyType',
  Fn = (e, t) => {
    let r = A(e),
      n = A(t.path),
      { pathWithoutExtension: o } = A(oe(r.dirname, n.path));
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
      a = t.name ? t.name : `${r}Mutator`,
      i = t.path,
      p = await _fsextra.readFile.call(void 0, i, 'utf8'),
      m =
        p.includes('export type ErrorType') ||
        p.includes('export interface ErrorType'),
      c =
        p.includes(`export type ${Ae}`) || p.includes(`export interface ${Ae}`),
      l = t.default ? `${x(r)}ErrorType` : 'ErrorType',
      g = t.default ? `${x(r)}${Ae}` : Ae,
      { file: d, cached: f } = await yt(i, {
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
          name: a,
          path: S,
          default: s,
          hasErrorType: m,
          errorTypeName: l,
          hasSecondArg: h.numberOfParams > 1,
          hasThirdArg: h.numberOfParams > 2,
          isHook:
            !!(
              (b = t == null ? void 0 : t.name) != null && b.startsWith('use')
            ) && !h.numberOfParams,
        },
        c ? { bodyTypeName: g } : {},
      );
    } else {
      let y = Fn(e, t);
      return (
        f ||
          X().warn(
            _chalk2.default.yellow('Failed to parse provided mutator function'),
          ),
        $(
          {
            name: a,
            path: y,
            default: s,
            hasSecondArg: !1,
            hasThirdArg: !1,
            isHook: !1,
            hasErrorType: m,
            errorTypeName: l,
          },
          c ? { bodyTypeName: g } : {},
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
            : r.find((i) => {
                var p, m, c, l, g, d, f;
                if (i.type === 'ExpressionStatement')
                  return ((c =
                    (m =
                      (p = i.expression.arguments) == null ? void 0 : p[1]) ==
                    null
                      ? void 0
                      : m.properties) != null &&
                    c.some((b) => {
                      var y;
                      return ((y = b.key) == null ? void 0 : y.name) === t;
                    })) ||
                    ((g =
                      (l = i.expression.left) == null ? void 0 : l.property) ==
                    null
                      ? void 0
                      : g.name) === t
                    ? !0
                    : (f =
                        (d = i.expression.right) == null
                          ? void 0
                          : d.properties) == null
                    ? void 0
                    : f.some((b) => b.key.name === t);
              });
      if (!s) return;
      if (s.expression.type === 'AssignmentExpression') {
        if (
          s.expression.right.type === 'FunctionExpression' ||
          s.expression.right.type === 'ArrowFunctionExpression'
        )
          return { numberOfParams: s.expression.right.params.length };
        if (s.expression.right.name) return Ot(o, s.expression.right.name);
        let i =
          (n = s.expression.right) == null
            ? void 0
            : n.properties.find((p) => p.key.name === t);
        return i.value.name
          ? Ot(o, i.value.name)
          : i.value.type === 'FunctionExpression' ||
            i.value.type === 'ArrowFunctionExpression'
          ? { numberOfParams: i.value.params.length }
          : void 0;
      }
      let a = s.expression.arguments[1].properties.find((i) => {
        var p;
        return ((p = i.key) == null ? void 0 : p.name) === t;
      });
      return Ot(o, a.value.body.name);
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
              return s.declarations.find((a) => a.id.name === t);
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
          .map(({ specKey: o, name: s, values: a, alias: i }) => {
            if (o) {
              let p = o !== t ? n[o] : '';
              return !r && o
                ? `import ${a ? '' : 'type '}{ ${s}${
                    i ? ` as ${i}` : ''
                  } } from '../${_upath.join.call(void 0, p, P(s))}';`
                : `import ${a ? '' : 'type '}{ ${s}${
                    i ? ` as ${i}` : ''
                  } } from './${_upath.join.call(void 0, p, P(s))}';`;
            }
            return `import ${a ? '' : 'type '}{ ${s}${
              i ? ` as ${i}` : ''
            } } from './${P(s)}';`;
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
                        n.bodyTypeName ? `${Ae} as ${n.bodyTypeName}` : ''
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
    let a = t.filter((p) => e.includes(p.alias || p.name));
    if (!a.length) return;
    let i = a.reduce((p, m) => {
      var l, g, d;
      let c = o && m.specKey ? m.specKey : 'default';
      return (
        (p[c] = {
          values:
            ((l = p[c]) == null ? void 0 : l.values) ||
            (m.values && (s || !m.syntheticDefaultImport)) ||
            !1,
          deps: [
            ...((d = (g = p[c]) == null ? void 0 : g.deps) != null ? d : []),
            m,
          ],
        }),
        p
      );
    }, {});
    return Object.entries(i).map(([p, { values: m, deps: c }]) => {
      let l = c.find((y) => y.default && (s || !y.syntheticDefaultImport)),
        g = s ? void 0 : c.find((y) => y.syntheticDefaultImport),
        d = _lodashuniq2.default.call(
          void 0,
          c
            .filter((y) => !y.default && !y.syntheticDefaultImport)
            .map(({ name: y, alias: h }) => (h ? `${y} as ${h}` : y)),
        ).join(`,
  `),
        f = '',
        b = g ? `import * as ${g.name} from '${r}';` : '';
      if (b) {
        if (c.length === 1) return b;
        f += `${b}
`;
      }
      return (
        (f += `import ${m ? '' : 'type '}${
          l ? `${l.name}${d ? ',' : ''}` : ''
        }${
          d
            ? `{
  ${d}
}`
            : ''
        } from '${r}${p !== 'default' && n[p] ? `/${n[p]}` : ''}'`),
        f
      );
    }).join(`
`);
  }),
  $t = (exports.w = (e, t, r, n, o) => {
    let s = t
      .map((a) =>
        qa(
          T($({}, a), {
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
        (!k(r) || !r.hasOwnProperty('responseType')) &&
        (o += `
        responseType: 'blob',`),
      k(r) &&
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
    isFormData: a,
    isFormUrlEncoded: i,
    isAngular: p,
  }) => {
    let m = se.includes(o),
      c = m ? Fa(t, a, i) : '',
      l = Va(n, r == null ? void 0 : r.schema, s);
    return o === K.DELETE
      ? c
        ? `
      \`${e}\`,{${p ? 'body' : 'data'}:${c} ${l === 'options' ? `...${l}` : l}}
    `
        : `
      \`${e}\`,${l === 'options' ? l : `{${l}}`}
    `
      : `
      \`${e}\`,${m ? c || 'undefined,' : ''}${l === 'options' ? l : `{${l}}`}
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
    isFormUrlEncoded: a,
    isBodyVerb: i,
    hasSignal: p,
  }) => {
    let m = i ? Na(t, s, a) : '',
      c = Ua(n, r == null ? void 0 : r.schema),
      l = t.contentType
        ? `,
      headers: {'Content-Type': '${t.contentType}'}`
        : '';
    return `{url: \`${e}\`, method: '${o}'${
      !i && p ? ', signal' : ''
    }${l}${m}${c}
    }`;
  }),
  me = (exports.E = (e, t) => {
    var r, n;
    return t
      ? k(e)
        ? `{${(n = ne(e)) == null ? void 0 : n.slice(1, -1)} ...options}`
        : 'options'
      : k(e)
      ? (r = ne(e)) == null
        ? void 0
        : r.slice(1, -1)
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
      a = o[o.length - 1];
    if (!r) return { name: x(a) + s, originalName: a, refPaths: o };
    let i = Oe(t.specKey)
      ? _url2.default.resolve(t.specKey, r)
      : _upath.resolve.call(void 0, A(t.specKey).dirname, r);
    return { name: x(a) + s, originalName: a, specKey: i, refPaths: o };
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
      let a = '';
      s.on('data', (i) => (a += i.toString())),
        s.on('error', n),
        s.on('end', () => {
          let i = {
            status: s.statusCode,
            headers: s.headers,
            body: JSON.parse(a),
          };
          s.statusCode && s.statusCode >= 200 && s.statusCode <= 299
            ? r(i)
            : n(i);
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
    var m, c, l, g;
    let t = _upath.join.call(void 0, __dirname, '.githubToken'),
      r = await Xa(t),
      [n] = e.split('github.com/').slice(-1),
      [o, s, , a, ...i] = n.split('/'),
      p = i.join('/');
    try {
      let { body: d } = await Wn(
        ...Ja({ accessToken: r, repo: s, owner: o, branch: a, path: p }),
      );
      return (
        (m = d.errors) != null &&
          m.length &&
          ((c = d.errors) == null
            ? void 0
            : c.some((b) => (b == null ? void 0 : b.type) === 'NOT_FOUND')) &&
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
        (g = (l = d.data) == null ? void 0 : l.repository) == null
          ? void 0
          : g.object.text
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
    if (q(e)) {
      let o = le(e, t);
      if (_fsextra.existsSync.call(void 0, o)) {
        let s = await _tsconfck.parse.call(void 0, o);
        return (
          ((n =
            (r = s.referenced) == null
              ? void 0
              : r.find(({ tsconfigFile: i }) => i === o)) == null
            ? void 0
            : n.tsconfig) || s.tsconfig
        );
      }
      return;
    }
    if (k(e)) return e;
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
      R,
      j,
      M,
      I,
      V,
      Z,
      ee,
      te,
      Ie,
      it,
      Be,
      _e,
      Qe,
      ze,
      at,
      pt,
      Ar,
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
    let o = q(n.input) ? { target: n.input } : n.input,
      s = q(n.output) ? { target: n.output } : n.output;
    typeof ((h = (y = s.override) == null ? void 0 : y.angular) == null
      ? void 0
      : h.provideInRoot) < 'u' &&
      console.warn('provideInRoot is deprecated, use provideIn instead');
    let a = le(s.workspace || '', t),
      { clean: i, prettier: p, client: m, mode: c, mock: l, tslint: g } = r,
      d = await Ln(s.tsconfig || r.tsconfig, t),
      f = await zn(s.packageJson || r.packageJson, t),
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
          parserOptions: Pe(op, (R = o.parserOptions) != null ? R : {}),
        },
        output: {
          target: le(s.target, a),
          schemas: le(s.schemas, a),
          workspace: s.workspace ? a : void 0,
          client:
            (M = (j = s.client) != null ? j : m) != null
              ? M
              : B.AXIOS_FUNCTIONS,
          mode: ip((I = s.mode) != null ? I : c),
          mock: (Z = (V = s.mock) != null ? V : l) != null ? Z : !1,
          clean: (te = (ee = s.clean) != null ? ee : i) != null ? te : !1,
          prettier: (it = (Ie = s.prettier) != null ? Ie : p) != null ? it : !1,
          tslint: (_e = (Be = s.tslint) != null ? Be : g) != null ? _e : !1,
          tsconfig: d,
          packageJson: f,
          override: T($({}, s.override), {
            operations: Hn(
              (ze = (Qe = s.override) == null ? void 0 : Qe.operations) != null
                ? ze
                : {},
              a,
            ),
            tags: Hn(
              (pt = (at = s.override) == null ? void 0 : at.tags) != null
                ? pt
                : {},
              a,
            ),
            mutator: De(a, (Ar = s.override) == null ? void 0 : Ar.mutator),
            formData:
              (kr = J((Gr = s.override) == null ? void 0 : Gr.formData)
                ? (Dr = s.override) == null
                  ? void 0
                  : Dr.formData
                : De(a, (Cr = s.override) == null ? void 0 : Cr.formData)) !=
              null
                ? kr
                : !0,
            formUrlEncoded:
              (Nr = J((qr = s.override) == null ? void 0 : qr.formUrlEncoded)
                ? (Vr = s.override) == null
                  ? void 0
                  : Vr.formUrlEncoded
                : De(
                    a,
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
    return k(t)
      ? (t.path ||
          (X().error(_chalk2.default.red('Mutator need a path')),
          process.exit(1)),
        T($({}, t), {
          path: _upath.resolve.call(void 0, e, t.path),
          default: (r = t.default || !t.name) != null ? r : !1,
        }))
      : q(t)
      ? { path: _upath.resolve.call(void 0, e, t), default: !0 }
      : t;
  },
  sp = (e, t) => (q(e) && !Oe(e) ? le(e, t) : e),
  le = (e, t) => (q(e) ? _upath.resolve.call(void 0, t, e) : e),
  Hn = (e, t) =>
    Object.fromEntries(
      Object.entries(e).map((m) => {
        var [r, c] = m,
          l = c,
          {
            transformer: n,
            mutator: o,
            formData: s,
            formUrlEncoded: a,
            requestOptions: i,
          } = l,
          p = we(l, [
            'transformer',
            'mutator',
            'formData',
            'formUrlEncoded',
            'requestOptions',
          ]);
        var g, d;
        return [
          r,
          T(
            $(
              $($({}, p), n ? { transformer: le(n, t) } : {}),
              o ? { mutator: De(t, o) } : {},
            ),
            {
              formData: (g = J(s) ? s : De(t, s)) != null ? g : !0,
              formUrlEncoded: (d = J(a) ? a : De(t, a)) != null ? d : !0,
              requestOptions: i != null ? i : !0,
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
        ? e.filter((i) => typeof i == 'string')
        : e;
  N(
    `Watching for changes in ${
      Array.isArray(s) ? s.map((i) => '"' + i + '"').join(' | ') : '"' + s + '"'
    }`,
  ),
    n(s, { ignorePermissionErrors: !0, ignored: o }).on('all', async (i, p) => {
      N(`Change detected: ${i} ${p}`);
      try {
        await t();
      } catch (m) {
        N(_chalk2.default.red(m));
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
var v = (e, t, r) =>
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
    if (q(e)) {
      let n = _upath.resolve.call(void 0, t, e),
        o = await Promise.resolve().then(() => ye(W(n)));
      return r && k(o) && o.default ? o.default : o;
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
      n = U(P(t[2]), { es5keyword: !0, underscore: !0, dash: !0, dot: !0 }),
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
var D = (e, t, r = []) => {
  var p;
  if ((p = e == null ? void 0 : e.schema) != null && p.$ref) {
    let m = D(e == null ? void 0 : e.schema, t, r);
    return { schema: T($({}, e), { schema: m.schema }), imports: r };
  }
  if (!C(e)) return { schema: e, imports: r };
  let { name: n, originalName: o, specKey: s, refPaths: a } = Ge(e.$ref, t),
    i = _lodashget2.default.call(void 0, t.specs[s || t.specKey], a);
  if (!i) throw `Oups... \u{1F37B}. Ref not found: ${e.$ref}`;
  return D(i, T($({}, t), { specKey: s || t.specKey }), [
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
      verb: a,
      override: i,
      formData: p,
      formUrlEncoded: m,
    },
    { route: c },
  ) => {
    let l = (i == null ? void 0 : i.requestOptions) !== !1,
      g = (i == null ? void 0 : i.formData) !== !1,
      d = (i == null ? void 0 : i.formUrlEncoded) !== !1,
      f = se.includes(a),
      b = ue({
        formData: p,
        formUrlEncoded: m,
        body: o,
        isFormData: g,
        isFormUrlEncoded: d,
      }),
      y = r.definition.success || 'unknown';
    if ((ro.push(`export type ${x(t)}ClientResult = NonNullable<${y}>`), n)) {
      let S = ce({
          route: c,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: g,
          isFormUrlEncoded: d,
          hasSignal: !1,
          isBodyVerb: f,
        }),
        w = l ? me(i == null ? void 0 : i.requestOptions, n.hasThirdArg) : '';
      return ` ${t}<TData = ${y}>(
    ${F(s, 'implementation')}
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
      route: c,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: i == null ? void 0 : i.requestOptions,
      isFormData: g,
      isFormUrlEncoded: d,
      isAngular: !0,
    });
    return ` ${t}<TData = ${y}>(
    ${F(s, 'implementation')} ${
      l
        ? `options?: HttpClientOptions
`
        : ''
    }  ): Observable<TData>  {${b}
    return this.http.${a}<TData>(${h});
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
      verb: a,
      override: i,
      formData: p,
      formUrlEncoded: m,
    },
    { route: c, context: l },
  ) => {
    let g = (i == null ? void 0 : i.requestOptions) !== !1,
      d = (i == null ? void 0 : i.formData) !== !1,
      f = (i == null ? void 0 : i.formUrlEncoded) !== !1,
      b = Q(l.tsconfig),
      y = ue({
        formData: p,
        formUrlEncoded: m,
        body: o,
        isFormData: d,
        isFormUrlEncoded: f,
      }),
      h = se.includes(a);
    if (n) {
      let w = ce({
          route: c,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: f,
          isBodyVerb: h,
          hasSignal: !0,
        }),
        R = g ? me(i == null ? void 0 : i.requestOptions, n.hasSecondArg) : '';
      return (
        wt.set(
          t,
          (j) =>
            `export type ${x(t)}Result = NonNullable<Awaited<ReturnType<${
              j ? `ReturnType<typeof ${j}>['${t}']` : `typeof ${t}`
            }>>>`,
        ),
        `const ${t} = (
    ${F(s, 'implementation')}
 ${g && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
          h
            ? `
`
            : `signal?: AbortSignal
`
        }) => {${y}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${w},
      ${R});
    }
  `
      );
    }
    let S = pe({
      route: c,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: i == null ? void 0 : i.requestOptions,
      isFormData: d,
      isFormUrlEncoded: f,
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
    ${F(s, 'implementation')} ${
        g
          ? `options?: AxiosRequestConfig
`
          : ''
      } ): Promise<TData> => {${y}
    return axios${b ? '' : '.default'}.${a}(${S});
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
      a = e
        .map((p) => {
          var m;
          return wt.has(p)
            ? (m = wt.get(p)) == null
              ? void 0
              : m(r || !t ? void 0 : t)
            : '';
        })
        .filter(Boolean),
      i =
        n && !o
          ? `
type AwaitedInput<T> = PromiseLike<T> | T;

    type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
          : '';
    return (
      a.length &&
        (i += a.join(`
`)),
      r ? i : s + i
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
  var a, i, p, m;
  let n = Object.entries(
      (i = (a = t.specs[r].components) == null ? void 0 : a.schemas) != null
        ? i
        : [],
    ).reduce((c, [l, g]) => ((c[l] = g), c), {}),
    o = Object.entries(
      (m = (p = t.specs[r].components) == null ? void 0 : p.responses) != null
        ? m
        : [],
    ).reduce((c, [l, g]) => {
      var d, f;
      return (
        (c[l] = C(g)
          ? g
          : (f = (d = g.content) == null ? void 0 : d['application/json']) ==
            null
          ? void 0
          : f.schema),
        c
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
    imports: a,
  }) => {
    if (C(e)) {
      let { name: p, specKey: m } = Ge(
          e.$ref,
          T($({}, s), { specKey: e.specKey || s.specKey }),
        ),
        c = T($({}, co(p, s, m || e.specKey || s.specKey)), {
          name: p,
          path: e.path,
          isRef: !0,
          specKey: m || e.specKey,
        }),
        l = await He({
          item: c,
          mockOptions: t,
          operationId: r,
          tags: n,
          combine: o,
          context: s,
          imports: a,
        });
      return T($({}, l), { type: c.type });
    }
    let i = await He({
      item: e,
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: a,
    });
    return T($({}, i), { type: e.type });
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
  combine: a,
  context: i,
  imports: p,
}) => {
  var g;
  let m = [],
    c = [...((g = a == null ? void 0 : a.properties) != null ? g : [])];
  return {
    value: await v(
      t,
      async (d, f, b, y) => {
        var S;
        let h = await he({
          schema: T($({}, f), {
            name: e.name,
            path: e.path ? e.path : '#',
            specKey: e.specKey,
          }),
          combine: r ? void 0 : { properties: c },
          mockOptions: n,
          operationId: o,
          tags: s,
          context: i,
          imports: p,
        });
        return (
          (m = [...m, ...h.imports]),
          (c = [...c, ...((S = h.properties) != null ? S : [])]),
          !b && !a
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
              ? d + h.value + (a ? '' : '])')
              : d + h.value + (a ? '' : '}')
            : h.value
            ? d + h.value + ','
            : d
        );
      },
      '',
    ),
    imports: m,
    name: e.name,
    properties: c,
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
  imports: a,
}) => {
  if (C(e))
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
      imports: a,
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
      imports: a,
    });
  if (e.properties) {
    let i = o ? '' : '{',
      p = [],
      m = [];
    return (
      (i += (
        await Promise.all(
          Object.entries(e.properties).map(async ([c, l]) => {
            if (o != null && o.properties.includes(c)) return;
            let g =
              (t == null ? void 0 : t.required) ||
              (Array.isArray(e.required) ? e.required : []).includes(c);
            if (mo(e.path, `\\.${c}\\.`) >= 1) return;
            let d = await he({
              schema: T($({}, l), {
                name: c,
                path: e.path ? `${e.path}.${c}` : `#.${c}`,
                specKey: e.specKey,
              }),
              mockOptions: t,
              operationId: r,
              tags: n,
              context: s,
              imports: p,
            });
            (p = [...p, ...d.imports]), (m = [...m, c]);
            let f = ke(c);
            return !g && !d.overrided
              ? `${f}: faker.random.arrayElement([${d.value}, undefined])`
              : `${f}: ${d.value}`;
          }),
        )
      )
        .filter(Boolean)
        .join(', ')),
      (i += o ? '' : '}'),
      { value: i, imports: p, name: e.name, properties: m }
    );
  }
  if (e.additionalProperties) {
    if (J(e.additionalProperties))
      return { value: '{}', imports: [], name: e.name };
    let i = await he({
      schema: T($({}, e.additionalProperties), {
        name: e.name,
        path: e.path ? `${e.path}.#` : '#',
        specKey: e.specKey,
      }),
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: a,
    });
    return T($({}, i), {
      value: `{
        '${_cuid2.default.call(void 0)}': ${i.value}
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
  context: a,
}) => {
  var g, d, f, b;
  let i = Tt(
    (d = (g = r == null ? void 0 : r.operations) == null ? void 0 : g[n]) ==
      null
      ? void 0
      : d.properties,
    e,
  );
  if (i) return i;
  let p = Object.entries(
      (f = r == null ? void 0 : r.tags) != null ? f : {},
    ).reduce((y, [h, S]) => (o.includes(h) ? Pe(y, S) : y), {}),
    m = Tt(p == null ? void 0 : p.properties, e);
  if (m) return m;
  let c = Tt(r == null ? void 0 : r.properties, e);
  if (c) return c;
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
        context: a,
        imports: t,
      });
      if (h) {
        if (!C(e.items)) return { value: y, imports: S, name: e.name };
        let R = t.find((M) => w.replace('[]', '') === M.name);
        return {
          value: `faker.random.arrayElements(Object.values(${
            (R == null ? void 0 : R.name) || w
          }))`,
          imports: R ? [...S, T($({}, R), { values: !0 })] : S,
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
        context: a,
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
              operations: Object.entries(t.operations).reduce((s, [a, i]) => {
                var p;
                return (
                  (p = i.mock) != null &&
                    p.properties &&
                    (s[a] = { properties: Rt(i.mock.properties, e) }),
                  s
                );
              }, {}),
            }
          : {},
      ),
      t != null && t.tags
        ? {
            tags: Object.entries(t.tags).reduce((s, [a, i]) => {
              var p;
              return (
                (p = i.mock) != null &&
                  p.properties &&
                  (s[a] = { properties: Rt(i.mock.properties, e) }),
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
    v(
      r.types.success,
      async (a, { value: i, originalSchema: p, imports: m }) => {
        if (!i || ve.includes(i)) {
          let g = $p(i);
          return a.definitions.push(o ? o(g, r.definition.success) : g), a;
        }
        if (!p) return a;
        let c = await D(p, s),
          l = await He({
            item: $(
              $({ name: i }, c.schema),
              r.imports.length ? { specKey: r.imports[0].specKey } : {},
            ),
            imports: m,
            mockOptions: n,
            operationId: e,
            tags: t,
            context: s,
          });
        return (
          a.imports.push(...l.imports),
          a.definitions.push(
            o ? o(l.value, r.definition.success) : l.value.toString(),
          ),
          a
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
    let a = hp(s.specs[s.specKey], n),
      { definitions: i, imports: p } = await xp({
        operationId: e,
        tags: t,
        response: r,
        mockOptionsWithoutFunc: a,
        transformer: o,
        context: s,
      });
    return { definition: '[' + i.join(', ') + ']', definitions: i, imports: p };
  },
  go = (e, t) => {
    var o, s, a;
    let r =
        (a =
          (s =
            (o = t == null ? void 0 : t.operations) == null ? void 0 : o[e]) ==
          null
            ? void 0
            : s.mock) == null
          ? void 0
          : a.data,
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
    { pathRoute: o, override: s, context: a },
  ) => {
    var f;
    let {
        definitions: i,
        definition: p,
        imports: m,
      } = await fo({
        operationId: e,
        tags: n,
        response: t,
        override: s,
        context: a,
      }),
      c = wp(o, (f = s == null ? void 0 : s.mock) == null ? void 0 : f.baseUrl),
      l = go(e, s),
      g = '';
    l
      ? (g = l)
      : i.length > 1
      ? (g = `faker.random.arrayElement(${p})`)
      : i[0] && (g = i[0]);
    let d = t.contentTypes.includes('text/plain') ? 'text' : 'json';
    return {
      implementation: {
        function:
          g && g !== 'undefined'
            ? `export const get${x(e)}Mock = () => (${g})

`
            : '',
        handler: `rest.${r}('${c}', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),${
            g && g !== 'undefined'
              ? `
ctx.${d}(get${x(e)}Mock()),`
              : ''
          }
        )
      }),`,
      },
      imports: m,
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
  Ip = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: a,
      formData: i,
      formUrlEncoded: p,
      override: m,
    },
    { route: c, context: l },
  ) => {
    let g = (m == null ? void 0 : m.requestOptions) !== !1,
      d = (m == null ? void 0 : m.formData) !== !1,
      f = (m == null ? void 0 : m.formUrlEncoded) !== !1,
      b = Q(l.tsconfig),
      y = se.includes(a),
      h = ue({
        formData: i,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: f,
      });
    if (n) {
      let w = ce({
          route: c,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: f,
          isBodyVerb: y,
          hasSignal: !0,
        }),
        R =
          (n == null ? void 0 : n.bodyTypeName) && o.definition
            ? F(s, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${o.definition}`),
                `$1: ${n.bodyTypeName}<${o.definition}>`,
              )
            : F(s, 'implementation'),
        j = g ? me(m == null ? void 0 : m.requestOptions, n.hasSecondArg) : '';
      return n.isHook
        ? `export const use${x(t)}Hook = () => {
        const ${t} = ${n.name}<${r.definition.success || 'unknown'}>();

        return (
    ${R}
${
  y
    ? ''
    : `signal?: AbortSignal,
`
} ${
            g && n.hasSecondArg
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
    ${R}
 ${g && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
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
      route: c,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: m == null ? void 0 : m.requestOptions,
      isFormData: d,
      isFormUrlEncoded: f,
    });
    return `export const ${t} = (
    ${F(s, 'implementation')} ${
      g
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${h}
    return axios${b ? '' : '.default'}.${a}(${S});
  }
`;
  },
  sr = { INFINITE: 'infiniteQuery', QUERY: 'query' },
  vp = ['getNextPageParam', 'getPreviousPageParam'],
  Mp = ({ params: e, options: t, type: r }) => {
    var o;
    if (t === !1) return '';
    let n = k(t)
      ? ` ${
          (o = ne(
            _lodashomitby2.default.call(
              void 0,
              t,
              (s, a) => !!(r !== sr.INFINITE && vp.includes(a)),
            ),
          )) == null
            ? void 0
            : o.slice(1, -1)
        }`
      : '';
    return e.length
      ? `{${
          !k(t) || !t.hasOwnProperty('enabled')
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
      a = o
        ? `Use${x(o)}Options<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${x(e)}Hook>` : `typeof ${e}`
          }>>, TError, TData>`
        : `UseMutationOptions<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${x(e)}Hook>` : `typeof ${e}`
          }>>, TError,${t ? `{${t}}` : 'TVariables'}, TContext>`;
    return n
      ? `options?: { ${o ? 'query' : 'mutation'}?:${a}, ${
          r
            ? r != null && r.hasSecondArg
              ? `request?: SecondParameter<typeof ${r.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        }}
`
      : `${o ? 'queryOptions' : 'mutationOptions'}?: ${a}`;
  },
  Ap = ({ outputClient: e, type: t, isMutatorHook: r, operationName: n }) => {
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
    queryKeyFnName: a,
    properties: i,
    params: p,
    props: m,
    mutator: c,
    isRequestOptions: l,
    response: g,
    outputClient: d,
  }) => {
    let f = t
        ? m
            .map(({ name: S }) =>
              S === 'params' ? `{ ${t}: pageParam, ...params }` : S,
            )
            .join(',')
        : i,
      b = Ap({
        outputClient: d,
        type: n,
        isMutatorHook: c == null ? void 0 : c.isHook,
        operationName: o,
      }),
      y = `AxiosError<${g.definition.errors || 'unknown'}>`;
    c &&
      (y = c.hasErrorType
        ? `${c.default ? x(o) : ''}ErrorType<${
            g.definition.errors || 'unknown'
          }>`
        : g.definition.errors || 'unknown');
    let h =
      c != null && c.isHook
        ? `ReturnType<typeof use${x(o)}Hook>`
        : `typeof ${o}`;
    return `
export type ${x(e)}QueryResult = NonNullable<Awaited<ReturnType<${h}>>>
export type ${x(e)}QueryError = ${y}

export const ${P(
      `use-${e}`,
    )} = <TData = Awaited<ReturnType<${h}>>, TError = ${y}>(
 ${s} ${$o({
      operationName: o,
      definitions: '',
      mutator: c,
      isRequestOptions: l,
      type: n,
    })}
  ): ${b} & { queryKey: QueryKey } => {

  ${
    l
      ? `const {query: queryOptions${
          c
            ? c.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  const queryKey = queryOptions?.queryKey ?? ${a}(${i});

  ${c != null && c.isHook ? `const ${o} =  use${x(o)}Hook()` : ''}

  const queryFn: QueryFunction<Awaited<ReturnType<${
    c != null && c.isHook ? `ReturnType<typeof use${x(o)}Hook>` : `typeof ${o}`
  }>>> = (${
      t && m.some(({ type: S }) => S === 'queryParam')
        ? '{ signal, pageParam }'
        : '{ signal }'
    }) => ${o}(${f}${f ? ', ' : ''}${
      l
        ? c
          ? c.hasSecondArg
            ? 'requestOptions, signal'
            : 'signal'
          : '{ signal, ...axiosOptions }'
        : ''
    });

  const query = ${P(`use-${n}`)}<Awaited<ReturnType<${
      c != null && c.isHook
        ? `ReturnType<typeof use${x(o)}Hook>`
        : `typeof ${o}`
    }>>, TError, TData>(queryKey, queryFn, ${Mp({
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
      override: a,
      mutator: i,
      response: p,
      operationId: m,
    },
    { route: c, override: { operations: l = {} }, context: g },
    d,
  ) => {
    var j;
    let f = a == null ? void 0 : a.query,
      b = (a == null ? void 0 : a.requestOptions) !== !1,
      y = (j = l[m]) == null ? void 0 : j.query;
    if (
      o === K.GET ||
      (y == null ? void 0 : y.useInfinite) ||
      (y == null ? void 0 : y.useQuery)
    ) {
      let M = n
          .map(({ name: ee, type: te }) =>
            te === H.BODY ? r.implementation : ee,
          )
          .join(','),
        I = [
          ...(f != null && f.useInfinite
            ? [
                {
                  name: P(`${t}-infinite`),
                  options: f == null ? void 0 : f.options,
                  type: sr.INFINITE,
                  queryParam: f == null ? void 0 : f.useInfiniteQueryParam,
                },
              ]
            : []),
          ...((!(f != null && f.useQuery) && !(f != null && f.useInfinite)) ||
          (f == null ? void 0 : f.useQuery)
            ? [
                {
                  name: t,
                  options: f == null ? void 0 : f.options,
                  type: sr.QUERY,
                },
              ]
            : []),
        ],
        V = P(`get-${t}-queryKey`),
        Z = F(n, 'implementation');
      return `export const ${V} = (${Z}) => [\`${c}\`${
        e ? ', ...(params ? [params]: [])' : ''
      }${r.implementation ? `, ${r.implementation}` : ''}];

    ${I.reduce(
      (ee, te) =>
        ee +
        Gp({
          queryOption: te,
          operationName: t,
          queryProps: Z,
          queryKeyFnName: V,
          properties: M,
          params: s,
          props: n,
          mutator: i,
          isRequestOptions: b,
          response: p,
          outputClient: d,
        }),
      '',
    )}
`;
    }
    let h = n
        .map(({ definition: M, type: I }) =>
          I === H.BODY
            ? i != null && i.bodyTypeName
              ? `data: ${i.bodyTypeName}<${r.definition}>`
              : `data: ${r.definition}`
            : M,
        )
        .join(';'),
      S = n
        .map(({ name: M, type: I }) => (I === H.BODY ? 'data' : M))
        .join(','),
      w = `AxiosError<${p.definition.errors || 'unknown'}>`;
    i &&
      (w = i.hasErrorType
        ? `${i.default ? x(t) : ''}ErrorType<${
            p.definition.errors || 'unknown'
          }>`
        : p.definition.errors || 'unknown');
    let R =
      i != null && i.isHook
        ? `ReturnType<typeof use${x(t)}Hook>`
        : `typeof ${t}`;
    return `
    export type ${x(t)}MutationResult = NonNullable<Awaited<ReturnType<${R}>>>
    ${
      r.definition
        ? `export type ${x(t)}MutationBody = ${
            i != null && i.bodyTypeName
              ? `${i.bodyTypeName}<${r.definition}>`
              : r.definition
          }`
        : ''
    }
    export type ${x(t)}MutationError = ${w}

    export const ${P(`use-${t}`)} = <TError = ${w},
    ${h ? '' : 'TVariables = void,'}
    TContext = unknown>(${$o({
      operationName: t,
      definitions: h,
      mutator: i,
      isRequestOptions: b,
    })}) => {
      ${
        b
          ? `const {mutation: mutationOptions${
              i
                ? i != null && i.hasSecondArg
                  ? ', request: requestOptions'
                  : ''
                : ', axios: axiosOptions'
            }} = options ?? {}`
          : ''
      }

      ${i != null && i.isHook ? `const ${t} =  use${x(t)}Hook()` : ''}


      const mutationFn: MutationFunction<Awaited<ReturnType<${R}>>, ${
      h ? `{${h}}` : 'TVariables'
    }> = (${S ? 'props' : ''}) => {
          ${S ? `const {${S}} = props ?? {}` : ''};

          return  ${t}(${S}${S ? ',' : ''}${
      b
        ? i
          ? i != null && i.hasSecondArg
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
  It = (e, t, r) => {
    let n = ae(e),
      o = Ip(e, t),
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
      verb: a,
      formData: i,
      formUrlEncoded: p,
      override: m,
    },
    { route: c, context: l },
  ) => {
    let g = (m == null ? void 0 : m.requestOptions) !== !1,
      d = (m == null ? void 0 : m.formData) !== !1,
      f = (m == null ? void 0 : m.formUrlEncoded) !== !1,
      b = se.includes(a),
      y = Q(l.tsconfig),
      h = ue({
        formData: i,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: f,
      });
    if (n) {
      let w = ce({
          route: c,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: f,
          hasSignal: !1,
          isBodyVerb: b,
        }),
        R = g ? me(m == null ? void 0 : m.requestOptions, n.hasSecondArg) : '';
      return `export const ${t} = (
    ${F(s, 'implementation')}
 ${
   g && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>` : ''
 }) => {${h}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${w},
      ${R});
    }
  `;
    }
    let S = pe({
      route: c,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: m == null ? void 0 : m.requestOptions,
      isFormData: d,
      isFormUrlEncoded: f,
    });
    return `export const ${t} = (
    ${F(s, 'implementation')} ${
      g
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${h}
    return axios${y ? '' : '.default'}.${a}(${S});
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
    isRequestOptions: a,
    response: i,
  }) => {
    let p = n,
      m = o.length
        ? `const isEnable = !!(${o.map(({ name: l }) => l).join(' && ')})
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? ${r}(${n}) : null);`
        : `const swrKey = swrOptions?.swrKey ?? (() => ${r}(${n}))`,
      c = `AxiosError<${i.definition.errors || 'unknown'}>`;
    return (
      s &&
        (c = s.hasErrorType
          ? `ErrorType<${i.definition.errors || 'unknown'}>`
          : i.definition.errors || 'unknown'),
      `
export type ${x(e)}QueryResult = NonNullable<Awaited<ReturnType<typeof ${e}>>>
export type ${x(e)}QueryError = ${c}

export const ${P(`use-${e}`)} = <TError = ${c}>(
 ${t} ${Fp({ operationName: e, mutator: s, isRequestOptions: a })}
  ) => {

  ${
    a
      ? `const {swr: swrOptions${
          s
            ? s != null && s.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  ${m}
  const swrFn = () => ${e}(${p}${p ? ', ' : ''}${
        a
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
      override: a,
      mutator: i,
      response: p,
    },
    { route: m },
  ) => {
    let c = (a == null ? void 0 : a.requestOptions) !== !1;
    if (o !== K.GET) return '';
    let l = n
        .map(({ name: f, type: b }) => (b === H.BODY ? r.implementation : f))
        .join(','),
      g = P(`get-${t}-key`),
      d = F(n, 'implementation');
    return `export const ${g} = (${d}) => [\`${m}\`${
      e ? ', ...(params ? [params]: [])' : ''
    }${r.implementation ? `, ${r.implementation}` : ''}];

    ${Vp({
      operationName: t,
      swrProps: d,
      swrKeyFnName: g,
      properties: l,
      params: s,
      props: n,
      mutator: i,
      isRequestOptions: c,
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
var vt = null,
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
      verb: a,
      formData: i,
      formUrlEncoded: p,
      override: m,
    },
    { route: c, context: l },
  ) => {
    let g = (m == null ? void 0 : m.requestOptions) !== !1,
      d = (m == null ? void 0 : m.formData) !== !1,
      f = (m == null ? void 0 : m.formUrlEncoded) !== !1,
      b = Q(l.tsconfig),
      y = se.includes(a),
      h = ue({
        formData: i,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: f,
      });
    if (n) {
      let w = ce({
          route: c,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: f,
          isBodyVerb: y,
          hasSignal: !0,
        }),
        R =
          (n == null ? void 0 : n.bodyTypeName) && o.definition
            ? F(s, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${o.definition}`),
                `$1: ${n.bodyTypeName}<${o.definition}>`,
              )
            : F(s, 'implementation'),
        j = g ? me(m == null ? void 0 : m.requestOptions, n.hasSecondArg) : '';
      return `export const ${t} = (
    ${R}
 ${g && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
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
      route: c,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: m == null ? void 0 : m.requestOptions,
      isFormData: d,
      isFormUrlEncoded: f,
    });
    return `export const ${t} = (
    ${F(s, 'implementation')} ${
      g
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${h}
    return axios${b ? '' : '.default'}.${a}(${S});
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
    var p, m, c, l, g, d, f, b, y;
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
          (c =
            (m = e == null ? void 0 : e.minimum) != null
              ? m
              : e == null
              ? void 0
              : e.exclusiveMinimum) != null
            ? c
            : e == null
            ? void 0
            : e.minLength) != null
          ? l
          : void 0,
      a =
        (f =
          (d =
            (g = e == null ? void 0 : e.maximum) != null
              ? g
              : e == null
              ? void 0
              : e.exclusiveMaximum) != null
            ? d
            : e == null
            ? void 0
            : e.maxLength) != null
          ? f
          : void 0,
      i = (b = e == null ? void 0 : e.pattern) != null ? b : void 0;
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
      a !== void 0 && r.push(['max', a]),
      i && r.push(['matches', i]),
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
  zp = (e, { pathRoute: t, context: r }) => {
    var y, h, S;
    let { operationName: n, body: o, props: s, verb: a } = e;
    vt = Qp(r.specKey);
    let i = r.specs[r.specKey].paths[t],
      p = (y = i == null ? void 0 : i[a]) == null ? void 0 : y.parameters,
      m = (h = i == null ? void 0 : i[a]) == null ? void 0 : h.requestBody,
      c = m && '$ref' in m ? D(m, r).schema : m,
      l =
        c != null && c.content['application/json'].schema
          ? D(c == null ? void 0 : c.content['application/json'].schema, r)
              .schema
          : c == null
          ? void 0
          : c.content['application/json'].schema,
      g =
        (S = p != null ? p : []) == null
          ? void 0
          : S.map((w) => ({ [w.name]: ar(w.schema, w.required) }))
              .concat(
                o.implementation && l
                  ? {
                      [o.implementation]: ar(
                        l,
                        c == null ? void 0 : c.required,
                      ),
                    }
                  : {},
              )
              .reduce((w, R) => $($({}, w), R), {}),
      d = s
        .map(({ name: w, type: R }) => (R === H.BODY ? o.implementation : w))
        .join(', '),
      f = s
        .sort((w, { type: R }) => (R === H.QUERY_PARAM ? -1 : 1))
        .map(({ name: w, type: R }) => {
          switch (R) {
            case H.BODY:
              return o.implementation;
            case H.QUERY_PARAM:
              return `...${w}`;
            default:
              return w;
          }
        })
        .join(', '),
      b = Po(g);
    return `
export const ${n}Route = trpc.router().${
      a === K.GET ? 'query' : 'mutation'
    }('${n}', {
  ${b ? `input: ${b},` : ''}
  resolve: (${b ? `{input: {${f}}}` : ''}) => ${n}(${d})
});`;
  },
  Eo = () => '',
  Io = () => '',
  vo = ({ operationNames: e, title: t, customTitleFunc: r }) => `
const router = trpc.router()
${e.length ? '.' : ''}${e
    .map(
      (n) => `merge(${n}Route)
`,
    )
    .join('.')};

${
  vt
    ? `export const ${P(vt)}Router = trpc.router().merge('${P(vt)}.', router);`
    : ''
}
    `,
  Mo = (e, t, r) => {
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
  Ao = {
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
      client: It,
      header: Pt,
      dependencies: Oo,
      footer: Et,
      title: jt,
    },
    'svelte-query': {
      client: It,
      header: Pt,
      dependencies: bo,
      footer: Et,
      title: jt,
    },
    'vue-query': {
      client: It,
      header: Pt,
      dependencies: ho,
      footer: Et,
      title: jt,
    },
    swr: { client: Ro, header: wo, dependencies: xo, footer: To, title: So },
    trpc: { client: Mo, header: Io, dependencies: jo, footer: vo, title: Eo },
  },
  Xe = (e) => {
    let t = L(e) ? e(Ao) : Ao[e];
    if (!t) throw `Oups... \u{1F37B}. Client not found: ${e}`;
    return t;
  },
  xe = (e = Je, t, r, n, o, s, a) => {
    let { dependencies: i } = Xe(e);
    return $t(t, [...i(a), ...r], n, o, s);
  },
  Mt = ({
    outputClient: e = Je,
    isRequestOptions: t,
    title: r,
    customTitleFunc: n,
    isGlobalMutator: o,
    isMutator: s,
    provideInRoot: a,
    provideIn: i,
    hasAwaitedType: p,
  }) => {
    let m = Go(e, r, n),
      { header: c } = Xe(e);
    return {
      implementation: c({
        title: m.implementation,
        isRequestOptions: t,
        isGlobalMutator: o,
        isMutator: s,
        provideInRoot: a,
        provideIn: i,
        hasAwaitedType: p,
      }),
      implementationMSW: `export const ${m.implementationMSW} = () => [
`,
    };
  },
  At = ({
    outputClient: e = Je,
    operationNames: t,
    title: r,
    customTitleFunc: n,
    hasMutator: o,
    hasAwaitedType: s,
  }) => {
    let a = Go(e, r, n),
      { footer: i } = Xe(e),
      p;
    try {
      L(e)
        ? ((p = i(t)),
          console.warn(
            '[WARN] Passing an array of strings for operations names to the footer function is deprecated and will be removed in a future major release. Please pass them in an object instead: { operationNames: string[] }.',
          ))
        : (p = i({
            operationNames: t,
            title: a.implementation,
            hasMutator: o,
            hasAwaitedType: s,
          }));
    } catch (e7) {
      p = i({
        operationNames: t,
        title: a.implementation,
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
    v(
      t,
      async (n, o) => {
        let { client: s } = Xe(e),
          a = s(o, r, e),
          i = await Kp(o, r);
        return (
          (n[o.operationId] = {
            implementation: o.doc + a.implementation,
            imports: a.imports,
            implementationMSW: i.implementation,
            importsMSW: i.imports,
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
  var m;
  let o = (
      Array.isArray(e)
        ? e.filter((c) => !c.includes('eslint-disable'))
        : [e || '']
    ).map((c) => c.replace(cr, pr)),
    s = [e, t, r].reduce((c, l) => (l ? c + 1 : c), 0);
  if (!s) return '';
  let a = s === 1 && n,
    i = Array.isArray(e)
      ? (m = e.find((c) => c.includes('eslint-disable'))) == null
        ? void 0
        : m.replace(cr, pr)
      : void 0,
    p = `${
      i
        ? `/* ${i} */
`
        : ''
    }/**`;
  return (
    e &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` ${o.join(`
 * `)}`)),
    t &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ' @deprecated')),
    r &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` @summary ${r.replace(cr, pr)}`)),
    (p += a
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
  let { schema: o, imports: s } = await D(t, r),
    a = C(t) ? s[0].name : e,
    i = n ? 'formUrlEncoded' : 'formData',
    p = n
      ? `const ${i} = new URLSearchParams();
`
      : `const ${i} = new FormData();
`;
  if (o.type === 'object' && o.properties) {
    let m = await v(
      Object.entries(o.properties),
      async (c, [l, g]) => {
        var b;
        let { schema: d } = await D(g, r),
          f = '';
        return (
          d.type === 'object' || d.type === 'array'
            ? (f = `${i}.append('${l}', JSON.stringify(${P(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }))
`)
            : d.type === 'number' ||
              d.type === 'integer' ||
              d.type === 'boolean'
            ? (f = `${i}.append('${l}', ${P(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }.toString())
`)
            : (f = `${i}.append('${l}', ${P(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              })
`),
          (b = o.required) != null && b.includes(l)
            ? c + f
            : c +
              `if(${P(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              } !== undefined) {
 ${f} }
`
        );
      },
      '',
    );
    return `${p}${m}`;
  }
  return o.type === 'array'
    ? `${p}${i}.append('data', JSON.stringify(${P(a)}))
`
    : o.type === 'number' || o.type === 'boolean'
    ? `${p}${i}.append('data', ${P(a)}.toString())
`
    : `${p}${i}.append('data', ${P(a)})
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
        a =
          !Number.isNaN(Number(n.slice(1, -1))) || o
            ? Yp(o ? n.toString() : n.slice(1, -1))
            : U(n, { underscore: '_', whitespace: '_', dash: '-' });
      return (
        r +
        `  ${_esutils.keyword.isIdentifierNameES5(a) ? a : `'${a}'`}: ${n},
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
    let s = await v(
        t,
        async (p, m) => {
          let c = e ? e + x(r) : void 0;
          c && p.schemas.length && (c = c + x(gt(p.schemas.length + 1)));
          let l = await fe({
            schema: m,
            propName: c,
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
      a = s.isEnum.every((p) => p),
      i = s.values.join(` ${a ? '|' : Jp[r]} `);
    if (a && e && t.length > 1) {
      let p = `

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ${x(e)} = ${Xp(s, e)}`;
      return {
        value: `typeof ${x(e)}[keyof typeof ${x(e)}] ${o};` + p,
        imports: s.imports.map((m) => T($({}, m), { values: !0 })),
        schemas: s.schemas,
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    }
    return {
      value: i + o,
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
          .map((s, a) => (t[a] ? `...${s},` : Gt(s, r[a])))
          .join('')}} as const`;
var ko = async ({ item: e, name: t, context: r, nullable: n }) => {
  var o, s;
  if (C(e)) {
    let { name: a, specKey: i } = Ge(e.$ref, r);
    return {
      value: a + n,
      imports: [{ name: a, specKey: i }],
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
    return v(
      Object.entries(e.properties),
      async (a, [i, p], m, c) => {
        var h, S, w;
        let l = (Array.isArray(e.required) ? e.required : []).includes(i),
          g = t ? x(t) + x(i) : void 0;
        !!(
          (w =
            (S = (h = r.specs[r.target]) == null ? void 0 : h.components) ==
            null
              ? void 0
              : S.schemas) != null && w[g || '']
        ) && (g = g + 'Property');
        let f = await fe({ schema: p, propName: g, context: r }),
          b = e.readOnly || p.readOnly;
        m || (a.value += '{');
        let y = z(p, !0);
        if (
          (a.imports.push(...f.imports),
          (a.value += `
  ${y ? `${y}  ` : ''}${b ? 'readonly ' : ''}${ke(i)}${l ? '' : '?'}: ${
            f.value
          };`),
          a.schemas.push(...f.schemas),
          c.length - 1 === m)
        ) {
          if (e.additionalProperties)
            if (J(e.additionalProperties))
              a.value += `
  [key: string]: any;
 }`;
            else {
              let R = await ie({
                schema: e.additionalProperties,
                name: t,
                context: r,
              });
              a.value += `
  [key: string]: ${R.value};
}`;
            }
          else
            a.value += `
}`;
          a.value += n;
        }
        return a;
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
    let a = await ie({ schema: e.additionalProperties, name: t, context: r });
    return {
      value: `{[key: string]: ${a.value}}` + n,
      imports: (o = a.imports) != null ? o : [],
      schemas: (s = a.schemas) != null ? s : [],
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
      let a = 'number',
        i = !1;
      return (
        e.enum && ((a = e.enum.join(' | ')), (i = !0)),
        {
          value: a + n,
          isEnum: i,
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
        { value: a } = o,
        i = we(o, ['value']);
      return $({ value: a + n }, i);
    }
    case 'string': {
      let a = 'string',
        i = !1;
      return (
        e.enum &&
          ((a = `'${e.enum
            .map((p) => (q(p) ? dt(p) : p))
            .filter(Boolean)
            .join("' | '")}'`),
          (i = !0)),
        e.format === 'binary' && (a = 'Blob'),
        r.override.useDates &&
          (e.format === 'date' || e.format === 'date-time') &&
          (a = 'Date'),
        {
          value: a + n,
          isEnum: i,
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
        { value: a } = s,
        i = we(s, ['value']);
      return $({ value: a }, i);
    }
  }
};
var ie = async ({ schema: e, name: t, context: r }) => {
  if (C(e)) {
    let { schema: o, imports: s } = await D(e, r),
      { name: a, specKey: i, schemaName: p } = s[0],
      m = i || (r.specKey !== r.target ? r.specKey : void 0);
    return {
      value: a,
      imports: [{ name: a, specKey: m, schemaName: p }],
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
  var a;
  let o = await ie({ schema: e, name: t, context: n }),
    s = z((a = o.originalSchema) != null ? a : {});
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
    let i = qe(o.value, o.type, t);
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [...o.schemas, { name: t, model: s + i, imports: o.imports }],
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
        .filter(([s, a]) => Boolean(a))
        .map(async ([s, a]) => {
          var i, p;
          if (C(a)) {
            let {
                schema: m,
                imports: [{ name: c, specKey: l, schemaName: g }],
              } = await D(a, r),
              [d, f] =
                (p = Object.entries((i = m.content) != null ? i : {})[0]) !=
                null
                  ? p
                  : [],
              b = qo.includes(d),
              y = Fo.includes(d);
            if ((!b && !y) || !(f != null && f.schema))
              return [
                {
                  value: c,
                  imports: [{ name: c, specKey: l, schemaName: g }],
                  schemas: [],
                  type: 'unknown',
                  isEnum: !1,
                  isRef: !0,
                  originalSchema: f == null ? void 0 : f.schema,
                  key: s,
                  contentType: d,
                },
              ];
            let h = b
                ? await Ze(
                    c,
                    f == null ? void 0 : f.schema,
                    T($({}, r), { specKey: l || r.specKey }),
                  )
                : void 0,
              S = y
                ? await Ze(
                    c,
                    f == null ? void 0 : f.schema,
                    T($({}, r), { specKey: l || r.specKey }),
                    !0,
                  )
                : void 0;
            return [
              {
                value: c,
                imports: [{ name: c, specKey: l, schemaName: g }],
                schemas: [],
                type: 'unknown',
                isEnum: !1,
                formData: h,
                formUrlEncoded: S,
                isRef: !0,
                originalSchema: f == null ? void 0 : f.schema,
                key: s,
                contentType: d,
              },
            ];
          }
          return a.content
            ? (
                await Promise.all(
                  Object.entries(a.content).map(async ([c, l], g, d) => {
                    let f = s ? x(t) + x(s) : void 0;
                    f && d.length > 1 && (f = f + x(gt(g + 1)));
                    let b = await ec({ mediaType: l, propName: f, context: r });
                    if (!b) return;
                    let y = qo.includes(c),
                      h = Fo.includes(c);
                    if ((!y && !h) || !f)
                      return T($({}, b), { contentType: c });
                    let S = y ? await Ze(f, l.schema, r) : void 0,
                      w = h ? await Ze(f, l.schema, r, !0) : void 0;
                    return T($({}, b), {
                      formData: S,
                      formUrlEncoded: w,
                      contentType: c,
                    });
                  }),
                )
              )
                .filter((c) => c)
                .map((c) => T($({}, c), { key: s }))
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
    a = n.map(({ value: l }) => l).join(' | '),
    i =
      ve.includes(a.toLowerCase()) || n.length > 1
        ? P(t) + r.override.components.requestBodies.suffix
        : P(a),
    p = n.length === 1 ? n[0].formData : void 0,
    m = n.length === 1 ? n[0].formUrlEncoded : void 0,
    c = n.length === 1 ? n[0].contentType : void 0;
  return {
    definition: a,
    implementation: i,
    imports: o,
    schemas: s,
    formData: p || '',
    formUrlEncoded: m || '',
    contentType: c || '',
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
  v(
    e,
    async (r, n) => {
      if (C(n)) {
        let { schema: o, imports: s } = await D(n, t);
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
        let a = t.find(
          ({ parameter: f }) =>
            U(P(f.name), { es5keyword: !0, underscore: !0, dash: !0 }) === s,
        );
        if (!a)
          throw new Error(
            `The path params ${s} can't be found in parameters (${r})`,
          );
        let { name: i, required: p = !1, schema: m } = a.parameter,
          c = U(P(i), { es5keyword: !0 });
        if (!m)
          return {
            name: c,
            definition: `${c}${p ? '' : '?'}: unknown`,
            implementation: `${c}${p ? '' : '?'}: unknown`,
            default: !1,
            required: p,
            imports: [],
          };
        let l = await ie({
            schema: m,
            context: $(
              $({}, n),
              a.imports.length ? { specKey: a.imports[0].specKey } : {},
            ),
          }),
          g = `${c}${!p || l.originalSchema.default ? '?' : ''}: ${l.value}`,
          d = `${c}${!p && !l.originalSchema.default ? '?' : ''}${
            l.originalSchema.default
              ? `= ${ne(l.originalSchema.default)}`
              : `: ${l.value}`
          }`;
        return {
          name: c,
          definition: g,
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
      ...r.map((i) => T($({}, i), { type: H.PARAM })),
      ...(e.definition ? [n] : []),
      ...(t ? [o] : []),
    ];
  return Bo(s);
};
u();
var rc = (e, t, r) =>
    Promise.all(
      e.map(async ({ parameter: n, imports: o }) => {
        let { name: s, required: a, schema: i, content: p } = n,
          {
            value: m,
            imports: c,
            isEnum: l,
            type: g,
            schemas: d,
            isRef: f,
          } = await ie({
            schema: i || p['application/json'].schema,
            context: r,
            name: x(t) + x(s),
          }),
          b = ke(s);
        if (o.length)
          return {
            definition: `${b}${!a || i.default ? '?' : ''}: ${o[0].name}`,
            imports: o,
            schemas: [],
          };
        if (l && !f) {
          let h = x(t) + x(s),
            S = qe(m, g, h);
          return {
            definition: `${b}${!a || i.default ? '?' : ''}: ${h}`,
            imports: [{ name: h }],
            schemas: [...d, { name: h, model: S, imports: c }],
          };
        }
        return {
          definition: `${b}${!a || i.default ? '?' : ''}: ${m}`,
          imports: c,
          schemas: d,
        };
      }),
    ),
  Qo = async ({ queryParams: e = [], operationName: t, context: r }) => {
    if (!e.length) return;
    let n = await rc(e, t, r),
      o = n.flatMap(({ imports: m }) => m),
      s = n.flatMap(({ schemas: m }) => m),
      a = `${x(t)}Params`,
      i = n.map(({ definition: m }) => m).join('; ');
    return {
      schema: {
        name: a,
        model: `export type ${a} = { ${i} };
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
      (c, l) => (
        l.key.startsWith('2') ? c.success.push(l) : c.errors.push(l), c
      ),
      { success: [], errors: [] },
    ),
    s = n.flatMap(({ imports: c }) => c),
    a = n.flatMap(({ schemas: c }) => c),
    i = [...new Set(n.map(({ contentType: c }) => c))],
    p = o.success
      .map(({ value: c, formData: l }) => (l ? 'Blob' : c))
      .join(' | '),
    m = o.errors.map(({ value: c }) => c).join(' | ');
  return {
    imports: s,
    definition: { success: p || 'unknown', errors: m || 'unknown' },
    isBlob: p === 'Blob',
    types: o,
    contentTypes: i,
    schemas: a,
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
        responses: a,
        requestBody: i,
        parameters: p,
        tags: m = [],
        deprecated: c,
        description: l,
        summary: g,
      } = r,
      d = No(r, n, e),
      f = t.override.operations[r.operationId],
      b = Object.entries(t.override.tags).reduce(
        (ze, [at, pt]) => (m.includes(at) ? Pe(ze, pt) : ze),
        {},
      ),
      y = $($($({}, t.override), b), f),
      h =
        (f == null ? void 0 : f.operationName) ||
        ((Qe = t.override) == null ? void 0 : Qe.operationName),
      S = h ? h(r, n, e) : P(d),
      w = U(S, { es5keyword: !0 }),
      R = await zo(a, w, s),
      j = await Vo(i, w, s),
      M = await Uo({ parameters: [...o, ...(p != null ? p : [])], context: s }),
      I = await Qo({ queryParams: M.query, operationName: w, context: s }),
      V = await Wo({
        route: n,
        pathParams: M.path,
        operationId: d,
        context: s,
      }),
      Z = _o({
        body: j,
        queryParams: I == null ? void 0 : I.schema,
        params: V,
      }),
      ee = await ht({
        output: t.target,
        name: w,
        mutator: y == null ? void 0 : y.mutator,
        workspace: s.workspace,
        tsconfig: s.tsconfig,
      }),
      te =
        q(y == null ? void 0 : y.formData) || k(y == null ? void 0 : y.formData)
          ? await ht({
              output: t.target,
              name: w,
              mutator: y.formData,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      Ie =
        q(y == null ? void 0 : y.formUrlEncoded) ||
        k(y == null ? void 0 : y.formUrlEncoded)
          ? await ht({
              output: t.target,
              name: w,
              mutator: y.formUrlEncoded,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      it = z({ description: l, deprecated: c, summary: g }),
      Be = {
        verb: e,
        tags: m,
        summary: r.summary,
        operationId: d,
        operationName: w,
        response: R,
        body: j,
        queryParams: I,
        params: V,
        props: Z,
        mutator: ee,
        formData: te,
        formUrlEncoded: Ie,
        override: y,
        doc: it,
      },
      _e = await St(y == null ? void 0 : y.transformer, s.workspace);
    return _e ? _e(Be) : Be;
  },
  Ko = ({ verbs: e, output: t, route: r, context: n }) =>
    v(
      Object.entries(e),
      async (o, [s, a]) => {
        if (hn(s)) {
          let i = await nc({
            verb: s,
            output: t,
            verbParameters: e.parameters,
            route: r,
            operation: a,
            context: n,
          });
          o.push(i);
        }
        return o;
      },
      [],
    );
var Lo = async ({ output: e, context: t }) =>
  v(
    Object.entries(t.specs[t.specKey].paths),
    async (r, [n, o]) => {
      let s = to(n),
        a = o,
        i = t;
      if (C(o)) {
        let { schema: l, imports: g } = await D(o, t);
        (a = l), (i = $($({}, t), g.length ? { specKey: g[0].specKey } : {}));
      }
      let p = await Ko({ verbs: a, output: e, route: s, context: i }),
        m = p.reduce(
          (l, { queryParams: g, body: d, response: f }) => (
            g && l.push(g.schema, ...g.deps),
            l.push(...d.schemas),
            l.push(...f.schemas),
            l
          ),
          [],
        ),
        c = await Co(e.client, p, {
          route: s,
          pathRoute: n,
          override: e.override,
          context: i,
          mock: !!e.mock,
        });
      return (
        r.schemas.push(...m), (r.operations = $($({}, r.operations), c)), r
      );
    },
    { operations: {}, schemas: [] },
  );
u();
var $i = ye(Rr());
var jr = (e = {}, t, r) =>
  (0, $i.default)(e)
    ? Promise.resolve([])
    : v(
        Object.entries(e),
        async (n, [o, s]) => {
          let a = await Fe([[r, s]], o, t, 'void'),
            i = a.flatMap(({ imports: d }) => d),
            p = a.flatMap(({ schemas: d }) => d),
            m = a.map(({ value: d }) => d).join(' | '),
            c = `${x(o)}${r}`,
            g = `${z(s)}export type ${c} = ${m || 'unknown'};
`;
          return (
            n.push(...p),
            c !== m && n.push({ name: c, model: g, imports: i }),
            n
          );
        },
        [],
      );
u();
var xi = (e = {}, t, r) =>
  v(
    Object.entries(e),
    async (n, [o, s]) => {
      let a = `${x(o)}${r}`,
        { schema: i, imports: p } = await D(s, t);
      if (i.in !== 'query') return n;
      if (!i.schema || p.length)
        return (
          n.push({
            name: a,
            imports: p.length
              ? [
                  {
                    name: p[0].name,
                    specKey: p[0].specKey,
                    schemaName: p[0].schemaName,
                  },
                ]
              : [],
            model: `export type ${a} = ${p.length ? p[0].name : 'unknown'};
`,
          }),
          n
        );
      let m = await fe({ schema: i.schema, propName: a, context: t }),
        l = `${z(s)}export type ${a} = ${m.value || 'unknown'};
`;
      return (
        n.push(...m.schemas),
        a !== m.value && n.push({ name: a, model: l, imports: m.imports }),
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
    a = '';
  (a += z(t)),
    s &&
      (r.tslint
        ? (a += `// tslint:disable-next-line:no-empty-interface
`)
        : (a += `// eslint-disable-next-line @typescript-eslint/no-empty-interface
`)),
    !ve.includes(o.value) &&
    !((p = r == null ? void 0 : r.override) != null && p.useTypeOverInterfaces)
      ? (a += `export interface ${e} ${o.value}
`)
      : (a += `export type ${e} = ${o.value};
`);
  let i = o.imports.filter((m) => m.name !== e);
  return [...o.schemas, { name: e, model: a, imports: i }];
};
var Ti = async (e = {}, t, r) =>
  (0, wi.default)(e)
    ? []
    : v(
        Object.entries(e),
        async (o, [s, a]) => {
          let i = x(s) + r;
          if (
            (!a.type || a.type === 'object') &&
            !a.allOf &&
            !a.oneOf &&
            !a.anyOf &&
            !C(a) &&
            !a.nullable
          )
            return (
              o.push(
                ...(await Si({ name: i, schema: a, context: t, suffix: r })),
              ),
              o
            );
          {
            let p = await ie({ schema: a, name: i, context: t }),
              m = '',
              c = p.imports;
            if (((m += z(a)), p.isEnum && !p.isRef))
              m += qe(p.value, p.type, i);
            else if (i === p.value && p.isRef) {
              let l = p.imports.find((g) => g.name === i);
              if (!l)
                m += `export type ${i} = ${p.value};
`;
              else {
                let g =
                  l != null && l.specKey
                    ? `${x(bt(l.specKey, t.specKey))}${p.value}`
                    : `${p.value}Bis`;
                (m += `export type ${i} = ${g};
`),
                  (c = c.map((d) =>
                    d.name === i ? T($({}, d), { alias: g }) : d,
                  ));
              }
            } else
              m += `export type ${i} = ${p.value};
`;
            return o.push(...p.schemas, { name: i, model: m, imports: c }), o;
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
    return v(
      Object.entries(e),
      async (s, [a, i]) => {
        let p = await Xn(i, t.converterOptions, a),
          m = n ? n(p) : p;
        return t.validation && (await Ri(m)), (s[a] = m), s;
      },
      {},
    );
  },
  Pr = async ({ data: e, input: t, output: r, target: n, workspace: o }) => {
    var p;
    let s = await Qu({ specs: e, input: t, workspace: o }),
      a = await v(
        Object.entries(s),
        async (m, [c, l]) => {
          var S, w, R, j, M, I;
          let g = {
              specKey: c,
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
                ? (R = l.components) == null
                  ? void 0
                  : R.schemas
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
              g,
              r.override.components.schemas.suffix,
            ),
            f = await jr(
              (j = l.components) == null ? void 0 : j.responses,
              g,
              r.override.components.responses.suffix,
            ),
            b = await jr(
              (M = l.components) == null ? void 0 : M.requestBodies,
              g,
              r.override.components.requestBodies.suffix,
            ),
            y = await xi(
              (I = l.components) == null ? void 0 : I.parameters,
              g,
              r.override.components.parameters.suffix,
            ),
            h = [...d, ...f, ...b, ...y];
          return h.length && (m[c] = h), m;
        },
        {},
      ),
      i = await Lo({
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
    return T($({}, i), {
      schemas: T($({}, a), {
        [n]: [...((p = a[n]) != null ? p : []), ...i.schemas],
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
      } catch (i) {
        if ((i == null ? void 0 : i.name) === 'ParserError') throw i;
        _console.log.call(void 0, `\u26A0\uFE0F  ${_chalk2.default.yellow(i)}`);
      }
    let a = (await _swaggerparser2.default.resolve(e, r)).values();
    return n
      ? a
      : Object.fromEntries(
          Object.entries(a).map(([i, p]) => [
            _upath.resolve.call(void 0, i),
            p,
          ]),
        );
  },
  Pi = async (e, t) => {
    let { input: r, output: n } = t;
    if (k(r.target))
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
    let a = s;
    return (
      (a += Un({ imports: e, target: r, isRootKey: n, specsName: o })),
      (a += e.length
        ? `

`
        : `
`),
      (a += t),
      a
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
    let a = P(t.name);
    try {
      await _fsextra.outputFile.call(
        void 0,
        Er(e, a),
        el({ schema: t, target: r, isRootKey: n, specsName: o, header: s }),
      );
      let i = Er(e, 'index'),
        m = (await _fsextra.readFile.call(void 0, i)).toString();
      !m.includes(`export * from './${a}'`) &&
        !m.includes(`export * from "./${a}"`) &&
        (await _fsextra.appendFile.call(
          void 0,
          Er(e, 'index'),
          `export * from './${a}';
`,
        ));
    } catch (i) {
      throw `Oups... \u{1F37B}. An Error occurred while writing schema ${a} => ${i}`;
    }
  },
  Ii = async ({
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
      t.map((a) =>
        tl({
          path: e,
          schema: a,
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
  let n = Object.values(e).map(({ operationName: a }) => a),
    o = (r == null ? void 0 : r.client) === B.ANGULAR,
    s = Object.values(e).reduce(
      (a, i, p, m) => {
        var c, l, g;
        if (
          (a.imports.push(...i.imports),
          a.importsMSW.push(...i.importsMSW),
          (a.implementation +=
            i.implementation +
            `
`),
          (a.implementationMSW.function += i.implementationMSW.function),
          (a.implementationMSW.handler += i.implementationMSW.handler),
          i.mutator && a.mutators.push(i.mutator),
          i.formData && a.formData.push(i.formData),
          i.formUrlEncoded && a.formUrlEncoded.push(i.formUrlEncoded),
          p === m.length - 1)
        ) {
          let d = a.mutators.some((S) => (o ? S.hasThirdArg : S.hasSecondArg)),
            f =
              (g =
                (l = (c = r.packageJson) == null ? void 0 : c.dependencies) ==
                null
                  ? void 0
                  : l.typescript) != null
                ? g
                : '4.4.0',
            b = _compareversions.compare.call(void 0, f, '4.5.0', '>='),
            y = Mt({
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
          (a.implementation = y.implementation + a.implementation),
            (a.implementationMSW.handler =
              y.implementationMSW + a.implementationMSW.handler);
          let h = At({
            outputClient: r == null ? void 0 : r.client,
            operationNames: n,
            title: x(t.title),
            customTitleFunc: r.override.title,
            hasMutator: !!a.mutators.length,
            hasAwaitedType: b,
          });
          (a.implementation += h.implementation),
            (a.implementationMSW.handler += h.implementationMSW);
        }
        return a;
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
var vi = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let { path: a, dirname: i } = A(n.target, { backupFilename: P(r.title) }),
      {
        imports: p,
        importsMSW: m,
        implementation: c,
        implementationMSW: l,
        mutators: g,
        formData: d,
        formUrlEncoded: f,
      } = qt(e, r, n),
      b = s,
      y = n.schemas ? oe(i, A(n.schemas).dirname) : void 0,
      h = Q(n.tsconfig);
    return (
      (b += xe(
        n.client,
        c,
        y
          ? [
              {
                exports: p.filter((S) => !m.some((w) => S.name === w.name)),
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
          y ? [{ exports: m, dependency: y }] : [],
          o,
          !!n.schemas,
          h,
        )),
      g && (b += _(g)),
      d && (b += _(d)),
      f && (b += _(f)),
      n.schemas || (b += Se(t)),
      (b += `

${c}`),
      n.mock &&
        ((b += `

`),
        (b += l)),
      await _fsextra.outputFile.call(void 0, a, b),
      [a]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while writing file => ${a}`;
  }
};
u();
var Mi = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let {
        filename: a,
        dirname: i,
        extension: p,
      } = A(n.target, { backupFilename: P(r.title) }),
      {
        imports: m,
        implementation: c,
        implementationMSW: l,
        importsMSW: g,
        mutators: d,
        formData: f,
        formUrlEncoded: b,
      } = qt(e, r, n),
      y = s,
      h = s,
      S = n.schemas ? oe(i, A(n.schemas).dirname) : './' + a + '.schemas',
      w = Q(n.tsconfig);
    (y += xe(
      n.client,
      c,
      [{ exports: m, dependency: S }],
      o,
      !!n.schemas,
      w,
      !!n.override.mutator,
    )),
      (h += $e(l, [{ exports: g, dependency: S }], o, !!n.schemas, w));
    let R = n.schemas
      ? void 0
      : _upath.join.call(void 0, i, a + '.schemas' + p);
    if (R) {
      let V = s + Se(t);
      await _fsextra.outputFile.call(
        void 0,
        _upath.join.call(void 0, i, a + '.schemas' + p),
        V,
      );
    }
    d && (y += _(d)),
      f && (y += _(f)),
      b && (y += _(b)),
      (y += `
${c}`),
      (h += `
${l}`);
    let j = a + (B.ANGULAR === n.client ? '.service' : '') + p,
      M = _upath.join.call(void 0, i, j);
    await _fsextra.outputFile.call(void 0, _upath.join.call(void 0, i, j), y);
    let I = n.mock ? _upath.join.call(void 0, i, a + '.msw' + p) : void 0;
    return (
      I && (await _fsextra.outputFile.call(void 0, I, h)),
      [M, ...(R ? [R] : []), ...(I ? [I] : [])]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while splitting => ${a}`;
  }
};
u();
u();
var il = (e) => T($({}, e), { tags: e.tags.length ? e.tags : ['default'] }),
  al = (e, t) =>
    t.tags.reduce((r, n) => {
      var s, a, i;
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
                ? [...((a = o.formData) != null ? a : []), t.formData]
                : o.formData,
              formUrlEncoded: t.formUrlEncoded
                ? [
                    ...((i = o.formUrlEncoded) != null ? i : []),
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
        .reduce((o, s, a, i) => {
          let p = al(o, s);
          return a === i.length - 1
            ? Object.entries(p).reduce((m, [c, l]) => {
                var S, w, R, j, M;
                let g = !!(
                    (S = l.mutators) != null &&
                    S.some((I) => (r ? I.hasThirdArg : I.hasSecondArg))
                  ),
                  d = Object.values(e)
                    .filter(({ tags: I }) => I.includes(c))
                    .map(({ operationName: I }) => I),
                  f =
                    (j =
                      (R =
                        (w = t.packageJson) == null
                          ? void 0
                          : w.dependencies) == null
                        ? void 0
                        : R.typescript) != null
                      ? j
                      : '4.4.0',
                  b = _compareversions.compare.call(void 0, f, '4.5.0', '>='),
                  y = At({
                    outputClient: t == null ? void 0 : t.client,
                    operationNames: d,
                    title: x(c),
                    customTitleFunc: t.override.title,
                    hasMutator: !!((M = l.mutators) != null && M.length),
                    hasAwaitedType: b,
                  }),
                  h = Mt({
                    outputClient: t.client,
                    isRequestOptions: t.override.requestOptions !== !1,
                    isMutator: g,
                    isGlobalMutator: !!t.override.mutator,
                    title: x(c),
                    customTitleFunc: t.override.title,
                    provideInRoot: !!t.override.angular.provideIn,
                    provideIn: t.override.angular.provideIn,
                    hasAwaitedType: b,
                  });
                return (
                  (m[c] = {
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
                  m
                );
              }, {})
            : p;
        }, {});
    return Object.entries(n).reduce(
      (o, [s, a]) => (
        (o[s] = T($({}, a), {
          implementationMSW:
            a.implementationMSW.function + a.implementationMSW.handler,
        })),
        o
      ),
      {},
    );
  };
var Ai = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: a,
      dirname: i,
      extension: p,
    } = A(n.target, { backupFilename: P(r.title) }),
    m = Ft(e, n),
    c = Q(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(m).map(async ([g, d]) => {
        try {
          let {
              imports: f,
              implementation: b,
              implementationMSW: y,
              importsMSW: h,
              mutators: S,
              formData: w,
              formUrlEncoded: R,
            } = d,
            j = s,
            M = s,
            I = n.schemas
              ? '../' + oe(i, A(n.schemas).dirname)
              : '../' + a + '.schemas';
          (j += xe(
            n.client,
            b,
            [{ exports: f, dependency: I }],
            o,
            !!n.schemas,
            c,
            !!n.override.mutator,
          )),
            (M += $e(y, [{ exports: h, dependency: I }], o, !!n.schemas, c));
          let V = n.schemas
            ? void 0
            : _upath.join.call(void 0, i, a + '.schemas' + p);
          if (V) {
            let Ie = s + Se(t);
            await _fsextra.outputFile.call(void 0, V, Ie);
          }
          S && (j += _(S, !0)),
            w && (j += _(w, !0)),
            R && (j += _(R)),
            (j += `
${b}`),
            (M += `
${y}`);
          let Z = Te(g) + (B.ANGULAR === n.client ? '.service' : '') + p,
            ee = _upath.join.call(void 0, i, Te(g), Z);
          await _fsextra.outputFile.call(void 0, ee, j);
          let te = n.mock
            ? _upath.join.call(void 0, i, Te(g), Te(g) + '.msw' + p)
            : void 0;
          return (
            te && (await _fsextra.outputFile.call(void 0, te, M)),
            [ee, ...(V ? [V] : []), ...(te ? [te] : [])]
          );
        } catch (f) {
          throw `Oups... \u{1F37B}. An Error occurred while splitting tag ${g} => ${f}`;
        }
      }),
    )
  ).flatMap((g) => g);
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
      filename: a,
      dirname: i,
      extension: p,
    } = A(n.target, { backupFilename: P(r.title) }),
    m = Ft(e, n),
    c = Q(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(m).map(async ([g, d]) => {
        try {
          let {
              imports: f,
              implementation: b,
              implementationMSW: y,
              importsMSW: h,
              mutators: S,
              formData: w,
              formUrlEncoded: R,
            } = d,
            j = s,
            M = n.schemas ? oe(i, A(n.schemas).dirname) : './' + a + '.schemas';
          (j += xe(
            n.client,
            b,
            [
              {
                exports: f.filter((Z) => !h.some((ee) => Z.name === ee.name)),
                dependency: M,
              },
            ],
            o,
            !!n.schemas,
            c,
            !!n.override.mutator,
          )),
            n.mock &&
              (j += $e(y, [{ exports: h, dependency: M }], o, !!n.schemas, c));
          let I = n.schemas
            ? void 0
            : _upath.join.call(void 0, i, a + '.schemas' + p);
          if (I) {
            let Z = s + Se(t);
            await _fsextra.outputFile.call(void 0, I, Z);
          }
          S && (j += _(S)),
            w && (j += _(w)),
            R && (j += _(R)),
            (j += `

`),
            (j += b),
            n.mock &&
              ((j += `

`),
              (j += y));
          let V = _upath.join.call(void 0, i, `${Te(g)}${p}`);
          return (
            await _fsextra.outputFile.call(void 0, V, j), [V, ...(I ? [I] : [])]
          );
        } catch (f) {
          throw `Oups... \u{1F37B}. An Error occurred while writing tag ${g} => ${f}`;
        }
      }),
    )
  ).flatMap((g) => g);
};
var dl = (e, t) => {
    if (!e) return '';
    let r = e(t);
    return Array.isArray(r) ? z({ description: r }) : r;
  },
  Fi = async ({ operations: e, schemas: t, target: r, info: n }, o, s, a) => {
    let { output: i } = s,
      p = a || n.title,
      m = Object.keys(t).reduce((g, d) => {
        let b = bt(d, r).slice(1).split('/').join('-');
        return (g[d] = b), g;
      }, {}),
      c = dl(i.override.header, n);
    if (i.schemas) {
      let g = i.schemas;
      await Promise.all(
        Object.entries(t).map(([d, f]) => {
          let b = r === d,
            y = b ? g : _upath.join.call(void 0, g, m[d]);
          return Ii({
            schemaPath: y,
            schemas: f,
            target: r,
            specsName: m,
            isRootKey: b,
            header: c,
          });
        }),
      );
    }
    let l = [];
    if (i.target)
      switch (i.mode) {
        case ge.SPLIT:
          l = await Mi({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: m,
            header: c,
          });
          break;
        case ge.TAGS:
          l = await Di({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: m,
            header: c,
          });
          break;
        case ge.TAGS_SPLIT:
          l = await Ai({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: m,
            header: c,
          });
          break;
        case ge.SINGLE:
        default:
          l = await vi({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: m,
            header: c,
          });
          break;
      }
    if (i.workspace) {
      let g = i.workspace,
        d = l
          .filter((b) => !b.endsWith('.msw.ts'))
          .map((b) => oe(g, A(b).pathWithoutExtension));
      i.schemas && d.push(oe(g, A(i.schemas).dirname));
      let f = _upath.join.call(void 0, g, '/index.ts');
      if (await _fsextra.pathExists.call(void 0, f)) {
        let b = await _fsextra.readFile.call(void 0, f, 'utf8'),
          y = d.filter((h) => !b.includes(h));
        await _fsextra.appendFile.call(
          void 0,
          f,
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
          f,
          _lodashuniq2.default
            .call(void 0, d)
            .map((b) => `export * from '${b}';`).join(`
`) +
            `
`,
        );
      l = [f, ...l];
    }
    if (i.prettier)
      try {
        await _execa2.default.call(void 0, 'prettier', [
          '--write',
          ...(i.schemas ? [A(i.schemas).dirname] : []),
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
        (await Yt(['**/*', '!**/*.d.ts', ...o], A(t.output.target).dirname)),
        t.output.schemas &&
          (await Yt(['**/*', '!**/*.d.ts', ...o], A(t.output.schemas).dirname)),
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
    return v(
      Object.entries(e),
      async (n, [o, s]) => {
        try {
          n.push(await Ui(t, s, o));
        } catch (a) {
          N(_chalk2.default.red(`\u{1F6D1}  ${o ? `${o} - ` : ''}${a}`));
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
      a = await (L(n) ? n() : n),
      i = await v(
        Object.entries(a),
        async (m, [c, l]) => ((m[c] = await Yn(l, s, t)), m),
        {},
      ),
      p = Object.entries(i)
        .filter(
          ([m]) =>
            (t == null ? void 0 : t.projectName) === void 0 ||
            m === (t == null ? void 0 : t.projectName),
        )
        .map(([, { input: m }]) => m.target)
        .filter((m) => q(m));
    (t == null ? void 0 : t.watch) && p.length
      ? Jn(
          t == null ? void 0 : t.watch,
          () => Wi(i, s, t == null ? void 0 : t.projectName),
          p,
        )
      : await Wi(i, s, t == null ? void 0 : t.projectName);
  });
exports.a = Ut;
exports.b = u;
exports.c = q;
exports.d = N;
exports.e = jl;
exports.f = x;
exports.g = P;
exports.h = El;
exports.i = Te;
exports.j = Il;
exports.k = ne;
exports.l = U;
exports.m = F;
exports.n = gt;
exports.o = dt;
exports.p = ha;
exports.q = ve;
exports.r = se;
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
