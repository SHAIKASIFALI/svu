const express = require("express");
const {
  upload,
  httpUploadHandler,
} = require("../../controllers/uploadControllers");
const { isLoggedIn } = require("../../middlewares/authMiddlewares");
const uploadRouter = express.Router();

uploadRouter.post("/", isLoggedIn, httpUploadHandler);

module.exports = uploadRouter;
