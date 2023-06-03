const router = require("express").Router();
const mongoose = require("mongoose");

const Workout = require("../models/work");
router.post("/", async (req, res) => {
  try {
    const newworkout = new Workout({
      workname: req.body.workname,
      cpm: req.body.cpm,
    });
    const workout = await newworkout.save();
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
