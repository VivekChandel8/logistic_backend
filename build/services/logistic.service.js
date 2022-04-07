"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.findAndUpdateData = exports.findData = exports.createData = void 0;
const logistic_1 = __importDefault(require("../models/logistic"));
function createData(input) {
    return logistic_1.default.create(input);
}
exports.createData = createData;
function findData(query, options = { lean: true }) {
    return logistic_1.default.find(query, {}, options);
}
exports.findData = findData;
function findAndUpdateData(query, update, options = { lean: true }) {
    return logistic_1.default.findOneAndUpdate(query, update, options);
}
exports.findAndUpdateData = findAndUpdateData;
function deleteData(query) {
    return logistic_1.default.deleteOne(query);
}
exports.deleteData = deleteData;
