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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLogistic = exports.updateLogistic = exports.createLogistic = void 0;
const logistic_service_1 = require("../services/logistic.service");
const createLogistic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 204;
    let statusMessage = "No content";
    try {
        let payload = req.body;
        let data = yield (0, logistic_service_1.createData)(payload);
        if (data) {
            statusCode = 200;
            statusMessage = "New Data created";
            res.locals.statusCode = statusCode;
            res.locals.statusMessage = statusMessage;
            res.locals.data = data;
        }
        res.json(res.locals);
    }
    catch (err) {
        next(err);
    }
});
exports.createLogistic = createLogistic;
const updateLogistic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 204;
    let statusMessage = "No content";
    try {
        let payload = req.body;
        let data = yield (0, logistic_service_1.findAndUpdateData)({ _id: payload.id }, payload, {
            new: true,
        });
        if (data) {
            statusCode = 200;
            statusMessage = "Data updated";
            res.locals.statusCode = statusCode;
            res.locals.statusMessage = statusMessage;
            res.locals.data = data;
        }
        res.json(res.locals);
    }
    catch (err) {
        next(err);
    }
});
exports.updateLogistic = updateLogistic;
const deleteLogistic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 204;
    let statusMessage = "No content";
    try {
        let id = req.query.id;
        let data = yield (0, logistic_service_1.deleteData)({ _id: id });
        if (data) {
            statusCode = 200;
            statusMessage = "Data Deleted";
            res.locals.statusCode = statusCode;
            res.locals.statusMessage = statusMessage;
            res.locals.data = data;
        }
        res.json(res.locals);
    }
    catch (err) {
        next(err);
    }
});
exports.deleteLogistic = deleteLogistic;
