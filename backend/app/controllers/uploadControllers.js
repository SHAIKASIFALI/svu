const File = require("../models/fileModel");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

const httpUploadHandler = async (req, res) => {
  try {
    // console.log(req.headers.userId);
    const user = req.headers.userId;
    // const files = req.file;
    const file = await File.create({
      xCertificateLink: req.body.xCertificateLink,
      requestLetterLink: req.body.requestLetterLink,
      purpose: req.body.purpose,
      metadata: {
        userId: user,
      },
    });
    res.status(200).send({
      data: `${user} uploaded file links successfully`,
      success: true,
      msg: `files uploaded successfully`,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: `something worng occurred while uploading a file in db`,
    });
  }
};

module.exports = {
  upload,
  httpUploadHandler,
};
