const mongoose = require("mongoose");
// this is the setup of the users database entries
const Workout = new mongoose.Schema({
  workname: {
    type: String,
    required: true,
  },
  cpm: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("workouts", Workout);
