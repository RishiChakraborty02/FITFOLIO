var selectedOptions = {};

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
    document.querySelector(
      ".register-addr"
    ).innerHTML = `<h3>Workouts you selected are ${selectedOptions}</h3>`;
    console.log(selectedOptions);

    const workoutpageredirect = () => {
      let redirect = setTimeout(function () {
        window.location.href = "/workcard";
        window.clearTimeout(redirect);
      }, 5000);
    };
    workoutpageredirect();
  });
