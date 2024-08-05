document.addEventListener("DOMContentLoaded", function () {
  // Contact form submission handler
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;
    const message = document.getElementById("message").value;

    // Validate phone number (should be exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    // Validate department (should not exceed 5 alphabetic characters)
    const departmentRegex = /^[A-Za-z]{1,5}$/;
    if (!departmentRegex.test(department)) {
      alert("Department must not exceed 5 alphabetic characters.");
      return;
    }

    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If all validations pass
    alert(
      `Thank you for your time, ${name}. We will get back to you on ${email}. Your phone number is ${phone} and you belong to the ${department} department.`,
    );
  });

  // Profile picture click event listener
  const profilePicture = document.getElementById("profilePicture");
  const profileInfo = document.getElementById("profileInfo");

  profilePicture.addEventListener("click", function () {
    profileInfo.style.display = "block";
    profilePicture.src = "new-image.jpg"; // Ensure "new-image.jpg" is in the correct directory
  });

  // Add a text node and attach it to a parent node
  const addTextButton = document.getElementById("addTextButton");
  const textParent = document.getElementById("textParent");

  addTextButton.addEventListener("click", function () {
    // Create a new text node
    const textNode = document.createTextNode(" This is a new text node.");
    // Append the text node to the parent element
    textParent.appendChild(textNode);
  });

  // Delete a node
  const deleteNodeButton = document.getElementById("deleteNodeButton");
  const nodeToDelete = document.getElementById("nodeToDelete");

  deleteNodeButton.addEventListener("click", function () {
    if (nodeToDelete.parentNode) {
      nodeToDelete.parentNode.removeChild(nodeToDelete);
    }
  });

  // Additional functionality to handle updates to the information table
  //
});
