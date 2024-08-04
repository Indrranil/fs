// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Contact form submission handler
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  });

  // Profile picture click event listener
  const profilePicture = document.getElementById("profilePicture");
  const profileInfo = document.getElementById("profileInfo");

  profilePicture.addEventListener("click", function () {
    profileInfo.style.display = "block";
    profilePicture.src = "new-image.jpg"; // Ensure "new-image.jpg" is in the correct directory
  });
});
