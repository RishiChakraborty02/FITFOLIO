const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User");

// this is the login system
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// this is the register system
router.post("/register", async (req, res) => {
  try {
    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      gender: req.body.gender,
      dateofbirth: req.body.dateofbirth,
      age: req.body.age,
    });
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/finduser/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.params.id,
    });
    console.log(user);
    res.json(user);
  } catch (err) {
    console.log(error);
  }
});

module.exports = router;
