const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("createPassword");
const confirmPassword = document.getElementById("confirmPassword");
const createProfileBtn = document.getElementById("createProfile");
const userForm = document.getElementById("userForm");
const errorMessages = document.getElementById("errorMessages");

userForm.addEventListener("submit", function (e) {
  // Initialize an array to store error messages
  const errors = [];

  // Validate Full Name (not empty)
  if (fullName.value.trim() === "") {
    errors.push("Full Name is required.");
    fullName.classList.add("error");
  } else {
    fullName.classList.remove("error");
  }

  // Validate Email (matches @noroff.no or @noroff.stud.no)
  const emailRegex = /@noroff\.(no|stud\.no)$/;
  if (!emailRegex.test(email.value.toLowerCase())) {
    errors.push("Email must be @noroff.no or @noroff.stud.no.");
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  // Validate Password (at least 8 characters)
  if (password.value.length < 8) {
    errors.push("Password must be at least 8 characters.");
    password.classList.add("error");
  } else {
    password.classList.remove("error");
  }

  // Validate Confirm Password (matches Password)
  if (confirmPassword.value !== password.value) {
    errors.push("Passwords do not match.");
    confirmPassword.classList.add("error");
  } else {
    confirmPassword.classList.remove("error");
  }

  // Display error messages if there are any
  if (errors.length > 0) {
    e.preventDefault(); // Prevent form submission
    errorMessages.innerHTML = errors.join("<br>");
  } else {
    // Clear any previous error messages
    errorMessages.innerHTML = "";

    // Store user information in local storage
    const user = {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
    };
    localStorage.setItem("userData", JSON.stringify(user));

    // Redirect or perform other actions here
    // For example, you can redirect to another page after successful registration
    // window.location.href = "...";

    // Optionally, clear the form fields
    fullName.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  }
});
