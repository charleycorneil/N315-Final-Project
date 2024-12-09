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

import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    alert("Successfully Signed In");
    window.location.href = "index.html"; // Redirect to the homepage
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});

const logoutButton = document.getElementById("logout-button");

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Successfully Logged Out");
      window.location.href = "login.html"; // Redirect to the login page
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let cart = []; // To store cart items
  const cartCountElement = document.querySelector(".cart-count"); // Cart count display

  // Add event listeners to all "Buy Now" buttons
  const buyNowButtons = document.querySelectorAll(".buy-now");
  buyNowButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = {
        id: index, // Unique identifier for the product
        name: button.closest(".product").querySelector("h3").innerText,
        price: button.closest(".product").querySelector(".current-price")
          .innerText,
      };

      // Add the product to the cart
      cart.push(product);

      // Update the cart count
      updateCartCount();

      // Display a success message
      alert(`Added "${product.name}" to the cart!`);
    });
  });

  // Function to update the cart count
  function updateCartCount() {
    if (cartCountElement) {
      cartCountElement.innerText = cart.length;
    }
  }
});
