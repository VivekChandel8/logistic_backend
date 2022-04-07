"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const routes_1 = require("./routes/routes");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 4800;
// parsing raw json
app.use(body_parser_1.default.json());
// parsing x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
// enable cors
app.use((0, cors_1.default)({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
}));
app.use("/logistic", routes_1.router);
app.get("/test", (req, res) => {
    res.json({ data: "test Page" });
});
(0, db_1.default)();
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
