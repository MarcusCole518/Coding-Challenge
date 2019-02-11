const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

appConfig.init();
routeConfig.init(app);

module.exports = app;