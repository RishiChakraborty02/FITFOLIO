const mongoose = require("mongoose");
// this is the setup of the users database entries
const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateofbirth: {
      type: Date,
      default: new Date(),
    },
    age: {
      type: Number,
      required: true,
    },
    userbmi: {
      type: Number,
      required: false,
    },
    sports: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Users", User);
