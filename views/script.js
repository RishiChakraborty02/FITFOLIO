var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

var bmi;
var calorie_result;

var data = { c_age: age, c_height: height, c_weight: weight };

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
  } else {
    countBmi();
    // calorie_counter();
  }
}

const countBmi = async () => {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }

  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
  var calorie_result = Number(
    1.55 * (66.5 + 13.75 * p[2] + 5.003 * p[1] - 6.75 * p[0])
  );
  console.log("button clicked");
  console.log(bmi, calorie_result);
  try {
    const newBmi = await axios.post("/api/v1/bmi", {
      // userid: req.params.id,
      bmi: bmi,
      calorieintake: calorie_result,
    });
    console.log(newBmi);
  } catch (error) {
    console.log(error);
  }

  var result = "";
  if (bmi < 18.5) {
    result = "Underweight";
    setTimeout(function () {
      location.href = "/underweight";
    }, 3000);
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Healthy";
    setTimeout(function () {
      location.href = "/healthy";
    }, 3000);
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Overweight";
    setTimeout(function () {
      location.href = "/overweight";
    }, 3000);
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
    setTimeout(function () {
      location.href = "/overweight";
    }, 3000);
  } else if (35 <= bmi) {
    result = "Extremely obese";
    setTimeout(function () {
      location.href = "/overweight";
    }, 3000);
  }
  if (bmi <= 25) {
    resultArea.style.display = "block";
    document.querySelector(
      ".comment"
    ).innerHTML = `You are <span id="comment">${result}</span> <br> Recommended calorie intake: ${Math.round(
      calorie_result
    )}`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
  } else {
    resultArea.style.display = "block";
    document.querySelector(
      ".comment"
    ).innerHTML = `You are <span id="comment">${result}</span> <br><a style="text-decoration :none; color: green; " href="./index.html">View your personalized diet and workout plan </a>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
  }
};

// function calorie_counter() {
//   calorie_result = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// const calculatebtn = document.querySelector(".calculate");

// calculatebtn.addEventListener("click", async (e) => {
//   e.preventDefault();

// });
