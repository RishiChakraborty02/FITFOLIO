const router = require("express").Router();
const mongoose = require("mongoose");

const Bmi = require("../models/bmi");

router.post("/bmi", async (req, res) => {
  try {
    const newuser = new Bmi({
      // userid: req.params.id,
      bmi: req.body.bmi,
      calorieintake: req.body.calorieintake,
    });
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
