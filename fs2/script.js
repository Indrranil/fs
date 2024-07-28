// script.js

// Waits for the HTML to load first
document.addEventListener("DOMContentLoaded", function () {
  // Selects the form element with the ID 'contactForm' and assigns it to the variable 'contactForm'
  const contactForm = document.getElementById("contactForm");

  // Adds an event listener to the form to handle form submission
  contactForm.addEventListener("submit", function (event) {
    // Prevents the default form submission behavior (prevents it from reloading the page on click)
    event.preventDefault();

    // Retrieves the values of the form inputs with IDs 'name', 'email', and 'message'
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation to check if all fields are filled
    if (name && email && message) {
      // If all fields are filled, display an alert with a thank you message
      alert(
        `Thank you for your message, ${name}! We will get back to you at ${email}.`,
      );
      // Resets the form fields
      contactForm.reset();
    } else {
      // If any field is empty, display an alert to fill in all fields
      alert("Please fill in all fields.");
    }
  });

  // Selects the image element with the ID 'profilePicture' and assigns it to the variable 'profilePicture'
  const profilePicture = document.querySelector("#profilePicture");

  // Selects the div element with the ID 'profileInfo' and assigns it to the variable 'profileInfo'
  const profileInfo = document.querySelector("#profileInfo");

  // Initializes a variable to keep track of whether the profile info is visible or not
  let isInfoVisible = false;

  // Adds an event listener to the profile picture to handle click events
  profilePicture.addEventListener("click", function () {
    // Toggles the display of the profile info based on its current visibility
    if (isInfoVisible) {
      // If the info is currently visible, hide it
      profileInfo.style.display = "none";
    } else {
      // If the info is currently hidden, show it
      profileInfo.style.display = "block";
    }
    // Update the visibility status
    isInfoVisible = !isInfoVisible;
  });
});
