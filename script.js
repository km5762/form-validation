const email = document.querySelector("input[type=email]");
const emailError = document.querySelector(".email .error-message");
const form = document.querySelector("form");
const country = document.querySelector(".country input");
const countryError = document.querySelector(".country .error-message");
const zip = document.querySelector(".zip input");
const zipError = document.querySelector(".zip .error-message");
const password = document.querySelector(".password input");
const passwordError = document.querySelector(".password .error-message");
const confirmPassword = document.querySelector(".confirm-password input");
const confirmPasswordError = document.querySelector(
  ".confirm-password .error-message"
);

showEmailError();
showCountryError();
showZipError();
showPasswordError();
showConfirmPasswordError();

email.addEventListener("input", (event) => {
  if (!email.validity.valid) {
    showEmailError();
  } else {
    emailError.textContent = "";
  }
});

country.addEventListener("input", (event) => {
  if (!country.validity.valid) {
    showCountryError();
  } else {
    countryError.textContent = "";
  }
});

zip.addEventListener("input", (event) => {
  if (!zip.validity.valid) {
    showZipError();
  } else {
    zipError.textContent = "";
  }
});

password.addEventListener("input", (event) => {
  if (!password.validity.valid) {
    showPasswordError();
  } else {
    passwordError.textContent = "";
  }
});

confirmPassword.addEventListener("input", (event) => {
  showConfirmPasswordError();
});

function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

function showCountryError() {
  if (country.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    countryError.textContent = "You need to enter a country.";
  }
}

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = "You need to enter a ZIP";
  } else if (zip.validity.patternMismatch) {
    zipError.textContent = "Entered ZIP invalid";
  }
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password";
  }
}

function showConfirmPasswordError() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "You must re-enter your password";
    return;
  }
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Password fields must match");
    confirmPasswordError.textContent = "Password fields must match";
  } else {
    confirmPassword.setCustomValidity("");
    confirmPasswordError.textContent = "";
  }
}

form.addEventListener("submit", function (event) {
  // if the form contains valid data, we let it submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showEmailError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if (!country.validity.valid) {
    // If it isn't, we display an appropriate error message
    showCountryError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if (!zip.validity.valid) {
    // If it isn't, we display an appropriate error message
    showZipError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if (!password.validity.valid) {
    // If it isn't, we display an appropriate error message
    showPasswordError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if (!confirmPassword.validity.valid) {
    // If it isn't, we display an appropriate error message
    showConfirmPasswordError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});
