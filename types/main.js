"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var localforage_1 = __importDefault(require("localforage"));
var vlf = {
    install: function (vue, options) {
        vue.prototype.$vlf = localforage_1.default;
        Object.defineProperty(vue, '$vlf', {
            get: function () {
                return localforage_1.default;
            }
        });
    }
};
exports.default = vlf;
//# sourceMappingURL=main.js.map