const express = require("express");
var cors = require("cors");
var multer = require("multer");
var forms = multer();

const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");

const app = express();
//configuring the necessary midllewares
app.use(cors()); // to allow the cross origin requests
app.use(bodyParser.json());
app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: true }));

//configuring the routes
app.use("/api", apiRouter);

module.exports = app;
