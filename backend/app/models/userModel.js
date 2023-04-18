const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const emailRegex = /^\S+@\S+\.\S+$/; // Email regular expression

const collegeEnum = [
  "SVU College of Engineering",
  "SVU College of Physical Education",
  "SVU College of Distance Education",
  "SVU College of Science",
]; // enum for college name field

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  rollNumber: {
    unique: true,
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    enum: collegeEnum,
    required: true,
  },
  branchName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: emailRegex,
  },
  password: {
    type: String,
    required: true,
  },
});
// Hash password before saving to database
userSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);
  user.password = hash;
  next();
});

// Verify password
userSchema.methods.verifyPassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};
// Create User model
const User = mongoose.model("User", userSchema);

module.exports = User;
