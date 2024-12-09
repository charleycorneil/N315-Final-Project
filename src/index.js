import * as $ from "jquery";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/pageID/pageID.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  } else {
    $.get(`pages/home/home.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  }
}

// function initURLListener() {
//   $(window).on("hashchange", changeRoute);
//   changeRoute();
// }

// $(document).ready(function () {
//   initURLListener();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.getElementById("login-form");
//   const signupForm = document.getElementById("signup-form");
//   const showSignupLink = document.getElementById("show-signup");
//   const showLoginLink = document.getElementById("show-login");
//   const formWrappers = document.querySelectorAll(".form-wrapper");

//   showSignupLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     formWrappers[0].classList.add("hidden");
//     formWrappers[1].classList.remove("hidden");
//   });

//   showLoginLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     formWrappers[1].classList.add("hidden");
//     formWrappers[0].classList.remove("hidden");
//   });

//   // Handle form submissions (example)
//   loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Logging in with", {
//       email: document.getElementById("login-email").value,
//       password: document.getElementById("login-password").value,
//     });
//     alert("Login successful! Redirecting to the homepage...");
//     window.location.href = "index.html"; // Redirect to homepage
//   });

//   signupForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Signing up with", {
//       email: document.getElementById("signup-email").value,
//       password: document.getElementById("signup-password").value,
//       confirmPassword: document.getElementById("confirm-password").value,
//     });
//     alert("Signup successful! Redirecting to login...");
//     formWrappers[1].classList.add("hidden");
//     formWrappers[0].classList.remove("hidden");
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.querySelector("#login-form");
//   const logoutBtn = document.querySelector("#logout-btn");
//   const accountButton = document.querySelector("#account-button"); // Update selector if needed

//   // Simulated user session
//   let isLoggedIn = false;

//   // Login form submission
//   if (loginForm) {
//     loginForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       isLoggedIn = true;
//       updateUI();
//     });
//   }

//   // Logout button functionality
//   if (logoutBtn) {
//     logoutBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       isLoggedIn = false;
//       updateUI();
//     });
//   }

//   // Update UI based on login state
//   function updateUI() {
//     if (isLoggedIn) {
//       logoutBtn.style.display = "inline"; // Show logout button
//       accountButton.style.display = "none"; // Hide account button
//     } else {
//       logoutBtn.style.display = "none"; // Hide logout button
//       accountButton.style.display = "inline"; // Show account button
//     }
//   }

//   // Initialize UI
//   updateUI();
// });

import "../css/styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const continueButton = document.getElementById("continue-button");
  const additionalInputContainer = document.getElementById(
    "additional-input-container"
  );
  const signInButton = document.getElementById("sign-in-button");
  const logoutButton = document.getElementById("logout-btn");
  const accountButton = document.getElementById("account-button");

  // First Continue Button Click
  continueButton.addEventListener("click", () => {
    const emailInput = document.getElementById("email-input").value.trim();

    if (emailInput === "") {
      alert("Please enter your email address.");
      return;
    }

    additionalInputContainer.style.display = "block"; // Show the password input area
    continueButton.style.display = "none"; // Hide the first continue button
  });

  // Second Continue Button Click
  signInButton.addEventListener("click", () => {
    const passwordInput = document
      .getElementById("password-input")
      .value.trim();

    if (passwordInput === "") {
      alert("Please enter your password.");
      return;
    }

    alert("Successfully Signed In!");

    // Update navigation to show Logout
    accountButton.style.display = "none";
    logoutButton.style.display = "block";
  });

  // Logout Button Click
  logoutButton.addEventListener("click", () => {
    alert("Successfully Logged Out!");

    // Reset to default state
    accountButton.style.display = "block";
    logoutButton.style.display = "none";
    continueButton.style.display = "block";
    additionalInputContainer.style.display = "none";
  });
});
