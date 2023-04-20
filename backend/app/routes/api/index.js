const express = require("express");
const authRouter = require("./auth");
const uploadRouter = require("./upload");

const apiRouter = express.Router();
apiRouter.use("/upload", uploadRouter);
apiRouter.use("/auth", authRouter);
module.exports = apiRouter;
