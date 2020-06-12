import "core-js/modules/es.array.last-index-of";
import "core-js/modules/es.function.name";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "C:\\nodejs\\tongji\\ncm\\unlock-music-master\\node_modules\\@babel\\runtime/helpers/esm/asyncToGenerator";

var NcmDecrypt = require("./ncm");

var QmcDecrypt = require("./qmc");

var RawDecrypt = require("./raw");

var TmDecrypt = require("./tm");

export function CommonDecrypt(_x) {
    return _CommonDecrypt.apply(this, arguments);
}

function _CommonDecrypt() {
    _CommonDecrypt = _asyncToGenerator(/*#__PURE__*/
    regeneratorRuntime.mark(function _callee(file) {
        var raw_ext, raw_filename, rt_data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                case 0:
                    raw_ext = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length).toLowerCase();
                    raw_filename = file.name.substring(0, file.name.lastIndexOf("."));
                    _context.t0 = raw_ext;
                    _context.next = _context.t0 === "ncm" ? 5 : _context.t0 === "mp3" ? 9 : _context.t0 === "flac" ? 9 : _context.t0 === "m4a" ? 9 : _context.t0 === "ogg" ? 9 : _context.t0 === "tm0" ? 13 : _context.t0 === "tm3" ? 13 : _context.t0 === "qmc3" ? 17 : _context.t0 === "qmc0" ? 17 : _context.t0 === "qmcflac" ? 17 : _context.t0 === "qmcogg" ? 17 : _context.t0 === "tkm" ? 17 : _context.t0 === "bkcmp3" ? 17 : _context.t0 === "bkcflac" ? 17 : _context.t0 === "mflac" ? 17 : _context.t0 === "mgg" ? 17 : _context.t0 === "tm2" ? 21 : _context.t0 === "tm6" ? 21 : 25;
                    break;

                case 5:
                    _context.next = 7;
                    return NcmDecrypt.Decrypt(file.raw);

                case 7:
                    rt_data = _context.sent;
                    return _context.abrupt("break", 26);

                case 9:
                    _context.next = 11;
                    return RawDecrypt.Decrypt(file.raw, raw_filename, raw_ext);

                case 11:
                    rt_data = _context.sent;
                    return _context.abrupt("break", 26);

                case 13:
                    _context.next = 15;
                    return RawDecrypt.Decrypt(file.raw, raw_filename, "mp3");

                case 15:
                    rt_data = _context.sent;
                    return _context.abrupt("break", 26);

                case 17:
                    _context.next = 19;
                    return QmcDecrypt.Decrypt(file.raw, raw_filename, raw_ext);

                case 19:
                    rt_data = _context.sent;
                    return _context.abrupt("break", 26);

                case 21:
                    _context.next = 23;
                    return TmDecrypt.Decrypt(file.raw, raw_filename);

                case 23:
                    rt_data = _context.sent;
                    return _context.abrupt("break", 26);

                case 25:
                    rt_data = {
                        status: false,
                        message: "不支持此文件格式"
                    };

                case 26:
                    rt_data.rawExt = raw_ext;
                    rt_data.rawFilename = raw_filename;
                    return _context.abrupt("return", rt_data);

                case 29:
                case "end":
                    return _context.stop();
                }
            }
        }, _callee);
    }));
    return _CommonDecrypt.apply(this, arguments);
}
addEventListener('message', function(e) {
    var ref = e.data;
    var type = ref.type;
    var method = ref.method;
    var id = ref.id;
    var params = ref.params;
    var f, p;
    if (type === 'RPC' && method) {
        if (f = __webpack_exports__[method]) {
            p = Promise.resolve().then(function() {
                return f.apply(__webpack_exports__, params);
            });
        } else {
            p = Promise.reject('No such method');
        }
        p.then(function(result) {
            postMessage({
                type: 'RPC',
                id: id,
                result: result
            });
        }).catch(function(e) {
            var error = {
                message: e
            };
            if (e.stack) {
                error.message = e.message;
                error.stack = e.stack;
                error.name = e.name;
            }
            postMessage({
                type: 'RPC',
                id: id,
                error: error
            });
        });
    }
});
postMessage({
    type: 'RPC',
    method: 'ready'
});
