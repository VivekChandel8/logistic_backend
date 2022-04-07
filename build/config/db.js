"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connects = () => {
    return (0, mongoose_1.connect)("mongodb://localhost:27017/logistic")
        .then(() => {
        console.log("Database Connected!");
    })
        .catch((error) => {
        console.log(error);
    });
};
exports.default = connects;
