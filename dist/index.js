'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _chunkLDOEGN5Xjs = require('./chunk-LDOEGN5X.js');
_chunkLDOEGN5Xjs.b.call(void 0);
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
_chunkLDOEGN5Xjs.b.call(void 0);
var c = async (r, o = process.cwd(), e) => {
  if (!r || _chunkLDOEGN5Xjs.c.call(void 0, r))
    return _chunkLDOEGN5Xjs.M.call(void 0, r, e);
  let n = await _chunkLDOEGN5Xjs.H.call(void 0, r, o, e);
  if (e != null && e.watch)
    _chunkLDOEGN5Xjs.K.call(
      void 0,
      e == null ? void 0 : e.watch,
      async () => {
        try {
          await _chunkLDOEGN5Xjs.L.call(void 0, o, n);
        } catch (a) {
          _chunkLDOEGN5Xjs.d.call(
            void 0,
            _chalk2.default.red(
              `\u{1F6D1}  ${
                e != null && e.projectName
                  ? `${e == null ? void 0 : e.projectName} - `
                  : ''
              }${a}`,
            ),
          );
        }
      },
      n.input.target,
    );
  else
    try {
      return await _chunkLDOEGN5Xjs.L.call(void 0, o, n);
    } catch (a) {
      _chunkLDOEGN5Xjs.d.call(
        void 0,
        _chalk2.default.red(
          `\u{1F6D1}  ${
            e != null && e.projectName
              ? `${e == null ? void 0 : e.projectName} - `
              : ''
          }${a}`,
        ),
      );
    }
};
var re = c;
exports.URL_REGEX = _chunkLDOEGN5Xjs.s;
exports.VERBS_WITH_BODY = _chunkLDOEGN5Xjs.r;
exports.addDependency = _chunkLDOEGN5Xjs.v;
exports.camel = _chunkLDOEGN5Xjs.g;
exports.default = re;
exports.defineConfig = _chunkLDOEGN5Xjs.G;
exports.escape = _chunkLDOEGN5Xjs.o;
exports.generalJSTypes = _chunkLDOEGN5Xjs.p;
exports.generalJSTypesWithArray = _chunkLDOEGN5Xjs.q;
exports.generate = c;
exports.generateAxiosOptions = _chunkLDOEGN5Xjs.z;
exports.generateBodyMutatorConfig = _chunkLDOEGN5Xjs.B;
exports.generateBodyOptions = _chunkLDOEGN5Xjs.y;
exports.generateDependencyImports = _chunkLDOEGN5Xjs.w;
exports.generateFormDataAndUrlEncodedFunction = _chunkLDOEGN5Xjs.F;
exports.generateImports = _chunkLDOEGN5Xjs.t;
exports.generateMutatorConfig = _chunkLDOEGN5Xjs.D;
exports.generateMutatorImports = _chunkLDOEGN5Xjs.u;
exports.generateMutatorRequestOptions = _chunkLDOEGN5Xjs.E;
exports.generateOptions = _chunkLDOEGN5Xjs.A;
exports.generateQueryParamsAxiosConfig = _chunkLDOEGN5Xjs.C;
exports.generateVerbImports = _chunkLDOEGN5Xjs.x;
exports.getNumberWord = _chunkLDOEGN5Xjs.n;
exports.isSyntheticDefaultImportsAllow = _chunkLDOEGN5Xjs.J;
exports.kebab = _chunkLDOEGN5Xjs.i;
exports.loadTsconfig = _chunkLDOEGN5Xjs.I;
exports.pascal = _chunkLDOEGN5Xjs.f;
exports.sanitize = _chunkLDOEGN5Xjs.l;
exports.snake = _chunkLDOEGN5Xjs.h;
exports.stringify = _chunkLDOEGN5Xjs.k;
exports.toObjectString = _chunkLDOEGN5Xjs.m;
exports.upper = _chunkLDOEGN5Xjs.j;
