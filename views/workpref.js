document
  .getElementById("preferencesForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get all the selected checkboxes
    var checkboxes = document.querySelectorAll('input[name="options"]:checked');

    // Process the selected checkboxes
    var selectedOptions = [];
    checkboxes.forEach(function (checkbox) {
      selectedOptions.push(checkbox.value);
    });

    // Display the selected options
    console.log(selectedOptions);
  });

const button = document.querySelector(".button");
const submit = document.querySelector(".submit");

function toggleClass() {
  this.classList.toggle("active");
}

function addClass() {
  this.classList.add("finished");
}

button.addEventListener("click", toggleClass);
button.addEventListener("transitionend", toggleClass);
button.addEventListener("transitionend", addClass);
