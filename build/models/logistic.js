"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logisticSchema = new mongoose_1.Schema({
    pn: {
        type: String,
        required: true,
    },
    supplier: {
        type: String,
        required: true,
    },
    deliveryDate: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    tracking: {
        type: String,
    },
    trackingStatus: {
        type: String,
    },
    markDelivered: {
        type: String,
        required: true,
        default: "pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
const LogisticModel = (0, mongoose_1.model)("Logistic", logisticSchema);
exports.default = LogisticModel;
