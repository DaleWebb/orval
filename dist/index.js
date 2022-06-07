'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _chunkPIDYFM3Rjs = require('./chunk-PIDYFM3R.js');
_chunkPIDYFM3Rjs.b.call(void 0);
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
_chunkPIDYFM3Rjs.b.call(void 0);
var c = async (r, o = process.cwd(), e) => {
  if (!r || _chunkPIDYFM3Rjs.c.call(void 0, r))
    return _chunkPIDYFM3Rjs.M.call(void 0, r, e);
  let n = await _chunkPIDYFM3Rjs.H.call(void 0, r, o, e);
  if (e != null && e.watch)
    _chunkPIDYFM3Rjs.K.call(
      void 0,
      e == null ? void 0 : e.watch,
      async () => {
        try {
          await _chunkPIDYFM3Rjs.L.call(void 0, o, n);
        } catch (a) {
          _chunkPIDYFM3Rjs.d.call(
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
      return await _chunkPIDYFM3Rjs.L.call(void 0, o, n);
    } catch (a) {
      _chunkPIDYFM3Rjs.d.call(
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
exports.URL_REGEX = _chunkPIDYFM3Rjs.s;
exports.VERBS_WITH_BODY = _chunkPIDYFM3Rjs.r;
exports.addDependency = _chunkPIDYFM3Rjs.v;
exports.camel = _chunkPIDYFM3Rjs.g;
exports.default = re;
exports.defineConfig = _chunkPIDYFM3Rjs.G;
exports.escape = _chunkPIDYFM3Rjs.o;
exports.generalJSTypes = _chunkPIDYFM3Rjs.p;
exports.generalJSTypesWithArray = _chunkPIDYFM3Rjs.q;
exports.generate = c;
exports.generateAxiosOptions = _chunkPIDYFM3Rjs.z;
exports.generateBodyMutatorConfig = _chunkPIDYFM3Rjs.B;
exports.generateBodyOptions = _chunkPIDYFM3Rjs.y;
exports.generateDependencyImports = _chunkPIDYFM3Rjs.w;
exports.generateFormDataAndUrlEncodedFunction = _chunkPIDYFM3Rjs.F;
exports.generateImports = _chunkPIDYFM3Rjs.t;
exports.generateMutatorConfig = _chunkPIDYFM3Rjs.D;
exports.generateMutatorImports = _chunkPIDYFM3Rjs.u;
exports.generateMutatorRequestOptions = _chunkPIDYFM3Rjs.E;
exports.generateOptions = _chunkPIDYFM3Rjs.A;
exports.generateQueryParamsAxiosConfig = _chunkPIDYFM3Rjs.C;
exports.generateVerbImports = _chunkPIDYFM3Rjs.x;
exports.getNumberWord = _chunkPIDYFM3Rjs.n;
exports.isSyntheticDefaultImportsAllow = _chunkPIDYFM3Rjs.J;
exports.kebab = _chunkPIDYFM3Rjs.i;
exports.loadTsconfig = _chunkPIDYFM3Rjs.I;
exports.pascal = _chunkPIDYFM3Rjs.f;
exports.sanitize = _chunkPIDYFM3Rjs.l;
exports.snake = _chunkPIDYFM3Rjs.h;
exports.stringify = _chunkPIDYFM3Rjs.k;
exports.toObjectString = _chunkPIDYFM3Rjs.m;
exports.upper = _chunkPIDYFM3Rjs.j;
