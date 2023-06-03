const signinAlert = document.querySelector(".alerts-signin");
const loginDOM = document.querySelector(".login-form");
const emailInput = document.querySelector(".email-address");
const passwordInput = document.querySelector(".password-address");

loginDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = emailInput.value;
  const password = passwordInput.value;

  try {
    const user = await axios.post("/api/v1/login", { username, password });
    console.log(user);
    const { data } = user;
    if (data == null) {
      console.log("User is not found ");
      signinAlert.innerHTML = `<h3>username not found. Try again or register</h3>`;
    } else {
      location.href = `/${data._id}`;
    }
  } catch (error) {
    console.log(error);
  }
});
