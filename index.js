const express = require("express");
const app = express();
const connectDb = require("./db/mongodb");
const dbUrl =
  "mongodb+srv://admin:fitfolio123@fitfoliodb.amhyaal.mongodb.net/?retryWrites=true&w=majority";
const port = 3000;
const authRoute = require("./routes/auth");
const workRoute = require("./routes/workauth");
const bmiRoute = require("./routes/bmiauth");

app.use(express.json());
app.use("/api/v1", authRoute);
app.use("/api/works", workRoute);
app.use("/api/v1", bmiRoute);
app.set("view engine", "ejs");

// app.use(express.static("./public"));
app.use(express.static(__dirname + "/views"));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/workoutpref", (req, res) => {
  res.render("workoutpref");
});
app.get("/workcard", (req, res) => {
  res.render("workoutcard");
});
app.get("/bmicalc", (req, res) => {
  res.render("bmicalc");
});
app.get("/underweight", (req, res) => {
  res.render("underweight");
});
app.get("/overweight", (req, res) => {
  res.render("overweight");
});
app.get("/healthy", (req, res) => {
  res.render("healthy");
});
app.get("/:id", (req, res) => {
  res.render("landing");
});
const start = async () => {
  try {
    await connectDb(dbUrl);
    console.log("Data base is connected to App");
    app.listen(port, () => {
      console.log(`The server is running`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
