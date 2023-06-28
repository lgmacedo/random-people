"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.get("/health", function (Request, Response) { return Response.status(200).send("I'm Ok!"); });
app.get("/today", function (Request, Response) {
    Response.send({
        today: new Date().toLocaleDateString("pt-br")
    });
});
var port = process.env.PORT || 5001;
app.listen(port, function () { return console.log("Server is up and running on port ".concat(port)); });
