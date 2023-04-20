const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  xCertificateLink: {
    type: String,
    required: true,
  },
  requestLetterLink: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    enum: ["MD", "MT", "PCD", "PC", "TS", "OD", "TC", "CMM"],
    required: true,
  },
  metadata: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
