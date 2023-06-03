const { data } = require("./script.js");

var calorie_result = 0;
calorie_result = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;

calorieArea.style.display = "block";
document.querySelector(
  ".comment2"
).innerHTML = `You are <span id="comment2">${result}</span>`;
document.querySelector("#calorie_result").innerHTML = bmi.toFixed(2);
