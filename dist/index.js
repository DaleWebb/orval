'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _chunkSXNEOYGGjs = require('./chunk-SXNEOYGG.js');
_chunkSXNEOYGGjs.b.call(void 0);
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
_chunkSXNEOYGGjs.b.call(void 0);
var c = async (r, o = process.cwd(), e) => {
  if (!r || _chunkSXNEOYGGjs.c.call(void 0, r))
    return _chunkSXNEOYGGjs.M.call(void 0, r, e);
  let n = await _chunkSXNEOYGGjs.H.call(void 0, r, o, e);
  if (e != null && e.watch)
    _chunkSXNEOYGGjs.K.call(
      void 0,
      e == null ? void 0 : e.watch,
      async () => {
        try {
          await _chunkSXNEOYGGjs.L.call(void 0, o, n);
        } catch (a) {
          _chunkSXNEOYGGjs.d.call(
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
      return await _chunkSXNEOYGGjs.L.call(void 0, o, n);
    } catch (a) {
      _chunkSXNEOYGGjs.d.call(
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
exports.URL_REGEX = _chunkSXNEOYGGjs.s;
exports.VERBS_WITH_BODY = _chunkSXNEOYGGjs.r;
exports.addDependency = _chunkSXNEOYGGjs.v;
exports.camel = _chunkSXNEOYGGjs.g;
exports.default = re;
exports.defineConfig = _chunkSXNEOYGGjs.G;
exports.escape = _chunkSXNEOYGGjs.o;
exports.generalJSTypes = _chunkSXNEOYGGjs.p;
exports.generalJSTypesWithArray = _chunkSXNEOYGGjs.q;
exports.generate = c;
exports.generateAxiosOptions = _chunkSXNEOYGGjs.z;
exports.generateBodyMutatorConfig = _chunkSXNEOYGGjs.B;
exports.generateBodyOptions = _chunkSXNEOYGGjs.y;
exports.generateDependencyImports = _chunkSXNEOYGGjs.w;
exports.generateFormDataAndUrlEncodedFunction = _chunkSXNEOYGGjs.F;
exports.generateImports = _chunkSXNEOYGGjs.t;
exports.generateMutatorConfig = _chunkSXNEOYGGjs.D;
exports.generateMutatorImports = _chunkSXNEOYGGjs.u;
exports.generateMutatorRequestOptions = _chunkSXNEOYGGjs.E;
exports.generateOptions = _chunkSXNEOYGGjs.A;
exports.generateQueryParamsAxiosConfig = _chunkSXNEOYGGjs.C;
exports.generateVerbImports = _chunkSXNEOYGGjs.x;
exports.getNumberWord = _chunkSXNEOYGGjs.n;
exports.isSyntheticDefaultImportsAllow = _chunkSXNEOYGGjs.J;
exports.kebab = _chunkSXNEOYGGjs.i;
exports.loadTsconfig = _chunkSXNEOYGGjs.I;
exports.pascal = _chunkSXNEOYGGjs.f;
exports.sanitize = _chunkSXNEOYGGjs.l;
exports.snake = _chunkSXNEOYGGjs.h;
exports.stringify = _chunkSXNEOYGGjs.k;
exports.toObjectString = _chunkSXNEOYGGjs.m;
exports.upper = _chunkSXNEOYGGjs.j;
