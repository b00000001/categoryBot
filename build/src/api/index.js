"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app_1 = require("firebase/app");
var cors_1 = __importDefault(require("cors"));
var index_js_1 = __importDefault(require("../index.js"));
var body_parser_1 = __importDefault(require("body-parser"));
var database_1 = require("firebase/database");
var app = (0, express_1.default)();
var port = 3002;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
var firebaseConfig = {
    apiKey: 'AIzaSyAoRDFohvxmFv77pjrnDxLORc7U-b2vqGs',
    authDomain: 'cosmosexpress-1183f.firebaseapp.com',
    databaseURL: 'https://cosmosexpress-1183f-default-rtdb.firebaseio.com',
    projectId: 'cosmosexpress-1183f',
    storageBucket: 'cosmosexpress-1183f.appspot.com',
    messagingSenderId: '373631050981',
    appId: '1:373631050981:web:2fc5f8125a38ce05b2600c',
};
var firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
var database = (0, database_1.getDatabase)(firebaseApp);
app.post('/', function (req, res) {
    var data = req.body;
    console.log(data);
    // res.status(200).send(JSON.stringify(data));
    (0, index_js_1.default)(JSON.stringify(data));
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
