const registerAlert = document.querySelector(".alerts-signup");
const signUpDOM = document.querySelector(".signup-form");
const usernameInput = document.querySelector(".username");
const emailInput = document.querySelector(".email-address1");
const passwordInput = document.querySelector(".password-address1");
const nameInput = document.querySelector(".name-address");
const ageInput = document.querySelector(".age-address");
const dobInput = document.querySelector(".dob-address");
const genderInput = document.querySelector(".gender-address");

signUpDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const name = nameInput.value;
  const gender = genderInput.value;
  const dob = dobInput.value;
  const age = ageInput.value;

  try {
    const user = await axios.post("/api/v1/register", {
      username,
      email,
      password,
      name,
      gender,
      dob,
      age,
    });
    // console.log(user);
    const { data } = user;
    // console.log(data);
    if (data.name) {
      registerAlert.innerHTML = `<h3>Registration Successful Mr ${data.name}</h3>`;
      const loginpageredirect = () => {
        let redirect = setTimeout(function () {
          window.location.href = "/";
          window.clearTimeout(redirect);
        }, 5000);
      };
      loginpageredirect();
    } else {
      registerAlert.innerHTML = `<h3>Registration Unsuccessful</h3>`;
    }
  } catch (error) {
    console.log(error);
  }
});
