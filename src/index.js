"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Parser_instances, _Parser_shp, _Parser_dbf, _Parser_configuration, _Parser_features, _Parser_propertiesArray, _Parser_parseShp, _Parser_parseDbf, _Parser_geoJSON;
exports.__esModule = true;
exports.parseFiles = exports.parseFolder = void 0;
var fs_1 = require("fs");
var path = require("path");
var iconv = require("iconv-lite");
/**
 * Parses a folder path containing a `shp` & `dbf` file pair into a GeoJSON object.
 * @param folder The path to the folder containing the `shp` & `dbf` file.
 * @param configuration The configuration settings to use.
 * @returns A promise containing the GeoJSON object.
 */
var parseFolder = function (folder, configuration) { return __awaiter(void 0, void 0, void 0, function () {
    var files, shpFiles, dbfFiles;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.promises.readdir(folder)];
            case 1:
                files = _a.sent();
                shpFiles = files.filter(function (file) { return file.endsWith(".shp"); });
                dbfFiles = files.filter(function (file) { return file.endsWith(".dbf"); });
                if (shpFiles.length > 1) {
                    throw new Error("Multiple shapefiles found.");
                }
                if (dbfFiles.length > 1) {
                    throw new Error("Multiple dbf files found.");
                }
                if (shpFiles.length === 0) {
                    throw new Error("No shapefiles found.");
                }
                if (dbfFiles.length === 0) {
                    throw new Error("No dbf files found.");
                }
                return [2 /*return*/, (0, exports.parseFiles)(path.join(folder, shpFiles[0]), path.join(folder, dbfFiles[0]), configuration)];
        }
    });
}); };
exports.parseFolder = parseFolder;
var Parser = /** @class */ (function () {
    function Parser(shp, dbf, configuration) {
        _Parser_instances.add(this);
        _Parser_shp.set(this, void 0);
        _Parser_dbf.set(this, void 0);
        _Parser_configuration.set(this, void 0);
        _Parser_features.set(this, []);
        _Parser_propertiesArray.set(this, []);
        __classPrivateFieldSet(this, _Parser_shp, shp, "f");
        __classPrivateFieldSet(this, _Parser_dbf, dbf, "f");
        __classPrivateFieldSet(this, _Parser_configuration, configuration, "f");
    }
    Parser.prototype.parse = function () {
        __classPrivateFieldGet(this, _Parser_instances, "m", _Parser_parseShp).call(this);
        __classPrivateFieldGet(this, _Parser_instances, "m", _Parser_parseDbf).call(this);
        return __classPrivateFieldGet(this, _Parser_instances, "m", _Parser_geoJSON).call(this);
    };
    return Parser;
}());
_Parser_shp = new WeakMap(), _Parser_dbf = new WeakMap(), _Parser_configuration = new WeakMap(), _Parser_features = new WeakMap(), _Parser_propertiesArray = new WeakMap(), _Parser_instances = new WeakSet(), _Parser_parseShp = function _Parser_parseShp() {
    var dataView = new DataView(new Uint8Array(__classPrivateFieldGet(this, _Parser_shp, "f")).buffer);
    var idx = 0;
    var fileCode = dataView.getInt32(idx, false);
    var wordLength = dataView.getInt32(idx += 6 * 4, false);
    var byteLength = wordLength * 2;
    var version = dataView.getInt32(idx += 4, true);
    var shapeType = dataView.getInt32(idx += 4, true);
    var minX = dataView.getFloat64(idx += 4, true);
    var minY = dataView.getFloat64(idx + 8, true);
    var maxX = dataView.getFloat64(idx + 16, true);
    var maxY = dataView.getFloat64(idx + 24, true);
    var minZ = dataView.getFloat64(idx + 32, true);
    var maxZ = dataView.getFloat64(idx + 40, true);
    var minM = dataView.getFloat64(idx + 48, true);
    var maxM = dataView.getFloat64(idx + 56, true);
    idx += 8 * 8;
    var features = [];
    var _loop_1 = function () {
        var feature = {};
        var number = dataView.getInt32(idx, false);
        var length_1 = dataView.getInt32(idx += 4, false);
        try {
            var type = dataView.getInt32(idx += 4, true);
            var idxFeature_1 = idx + 4;
            var byteLen = length_1 * 2;
            switch (type) {
                case 1:
                case 11:
                case 21:
                    feature.type = "Point";
                    feature.coordinates = [
                        dataView.getFloat64(idxFeature_1, true),
                        dataView.getFloat64(idxFeature_1 + 8, true)
                    ];
                    break;
                case 3:
                case 13:
                case 23:
                case 5:
                case 15:
                case 25:
                    if (type === 3 || type === 13 || type === 23) {
                        feature.type = "MultiLineString";
                    }
                    else if (type === 5 || type === 15 || type === 25) {
                        feature.type = "Polygon";
                    }
                    var numberOfParts_1 = dataView.getInt32(idxFeature_1 + 32, true);
                    var nbpoints_1 = dataView.getInt32(idxFeature_1 + 36, true);
                    idxFeature_1 += 40;
                    var nbpartsPoint_1 = new Array(numberOfParts_1).fill(0).map(function () {
                        var result = dataView.getInt32(idxFeature_1, true);
                        idxFeature_1 += 4;
                        return result;
                    });
                    feature.coordinates = new Array(numberOfParts_1).fill(0).map(function (_, i) {
                        var idstart = nbpartsPoint_1[i];
                        var idend = (i < numberOfParts_1 - 1 ? nbpartsPoint_1[i + 1] : nbpoints_1) - 1;
                        var part = [];
                        for (var j = idstart; j <= idend; j++) {
                            part.push([
                                dataView.getFloat64(idxFeature_1, true),
                                dataView.getFloat64(idxFeature_1 + 8, true)
                            ]);
                            idxFeature_1 += 16;
                        }
                        return part;
                    });
                    break;
                case 8:
                case 18:
                case 28:
                    feature.type = "MultiPoint";
                    var numberOfPoints = dataView.getInt32(idxFeature_1 + 32, true);
                    idxFeature_1 += 36;
                    feature.coordinates = new Array(numberOfPoints).fill(0).map(function () {
                        var result = [
                            dataView.getFloat64(idxFeature_1, true),
                            dataView.getFloat64(idxFeature_1 + 8, true)
                        ];
                        idxFeature_1 += 16;
                        return result;
                    });
                    break;
            }
        }
        catch (e) { }
        idx += length_1 * 2;
        features.push(feature);
    };
    while (idx < byteLength) {
        _loop_1();
    }
    __classPrivateFieldSet(this, _Parser_features, features, "f");
}, _Parser_parseDbf = function _Parser_parseDbf() {
    var _a;
    var dataView = new DataView(new Uint8Array(__classPrivateFieldGet(this, _Parser_dbf, "f")).buffer);
    var idx = 4;
    var numberOfRecords = dataView.getInt32(idx, true);
    idx += 28;
    var end = false;
    var fields = [];
    try {
        while (true) {
            var field = {};
            var nameArray = [];
            for (var i = 0; i < 10; i++) {
                var letter = dataView.getUint8(idx);
                if (letter != 0) {
                    nameArray.push(String.fromCharCode(letter));
                }
                idx += 1;
            }
            field.name = nameArray.join("");
            idx += 1;
            field.type = String.fromCharCode(dataView.getUint8(idx));
            idx += 5;
            field.fieldLength = dataView.getUint8(idx);
            idx += 16;
            fields.push(field);
            if (dataView.getUint8(idx) == 0x0D) {
                break;
            }
        }
    }
    catch (err) {
        end = true;
    }
    idx += 1;
    var propertiesArray = [];
    for (var i = 0; i < numberOfRecords; i++) {
        var properties = {};
        if (!end) {
            try {
                idx += 1;
                for (var j = 0; j < fields.length; j++) {
                    var str = "";
                    // Изменим способ декодирования кириллицы
                    var buffer = __classPrivateFieldGet(this, _Parser_dbf, "f").slice(idx, idx + fields[j].fieldLength);
                    str = iconv.decode(buffer, "cp1251");
                    if (((_a = __classPrivateFieldGet(this, _Parser_configuration, "f")) === null || _a === void 0 ? void 0 : _a.trim) !== false) {
                        str = str.trim();
                    }
                    var number = parseFloat(str);
                    if (isNaN(number)) {
                        properties[fields[j].name] = str;
                    }
                    else {
                        properties[fields[j].name] = number;
                    }
                    idx += fields[j].fieldLength;
                }
            }
            catch (err) {
                end = true;
            }
        }
        propertiesArray.push(properties);
    }
    __classPrivateFieldSet(this, _Parser_propertiesArray, propertiesArray, "f");
}, _Parser_geoJSON = function _Parser_geoJSON() {
    var geojson = {
        "type": "FeatureCollection",
        "features": []
    };
    for (var i = 0; i < Math.min(__classPrivateFieldGet(this, _Parser_features, "f").length, __classPrivateFieldGet(this, _Parser_propertiesArray, "f").length); i++) {
        geojson.features.push({
            "type": "Feature",
            "geometry": __classPrivateFieldGet(this, _Parser_features, "f")[i],
            "properties": __classPrivateFieldGet(this, _Parser_propertiesArray, "f")[i]
        });
    }
    return geojson;
};
/**
 * Parses `shp` & `dbf` files into a GeoJSON object.
 * @param shpFile The path to the `shp` file.
 * @param dbfFile The path to the `dbf` file.
 * @param configuration The configuration settings to use.
 * @returns A promise containing the GeoJSON object.
 */
var parseFiles = function (shpFile, dbfFile, configuration) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(typeof shpFile === "string")) return [3 /*break*/, 2];
                return [4 /*yield*/, fs_1.promises.readFile(shpFile)];
            case 1:
                shpFile = _a.sent();
                _a.label = 2;
            case 2:
                if (!(typeof dbfFile === "string")) return [3 /*break*/, 4];
                return [4 /*yield*/, fs_1.promises.readFile(dbfFile)];
            case 3:
                dbfFile = _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, new Parser(shpFile, dbfFile, configuration).parse()];
        }
    });
}); };
exports.parseFiles = parseFiles;
