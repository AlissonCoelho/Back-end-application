const express = require('express');
const consign = require('consign');
const cors = require('cors');
const cookieParser = require('cookie-parser');


function app () {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded())

    app.use(cors());
    app.use(cookieParser());

    consign()
        .include('./controllers/routes.js')
        .into(app)

    return app;
}


module.exports = app();