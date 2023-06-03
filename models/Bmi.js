const mongoose = require("mongoose");
// this is the setup of the users database entries
const Bmi = new mongoose.Schema({
  // userid: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  bmi: {
    type: Number,
    required: true,
  },
  calorieintake: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Bmi data", Bmi);
