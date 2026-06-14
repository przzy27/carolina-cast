/* =============================================
   Carolina Cast - JavaScript Form Validation
   Author: Patrick Rzepka
   ============================================= */

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const tripTypeInput = document.getElementById("tripType");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const tripTypeError = document.getElementById("tripTypeError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    tripTypeError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    tripTypeInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Please enter your full name.";
      nameInput.classList.add("input-error");
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      emailError.textContent = "Please enter your email address.";
      emailInput.classList.add("input-error");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.classList.add("input-error");
      isValid = false;
    }

    if (tripTypeInput.value === "") {
      tripTypeError.textContent = "Please select what you are interested in.";
      tripTypeInput.classList.add("input-error");
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Please enter a message.";
      messageInput.classList.add("input-error");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters long.";
      messageInput.classList.add("input-error");
      isValid = false;
    }

    if (isValid) {
      formSuccess.textContent = "Thank you! Your message has been validated successfully.";
      contactForm.reset();
    }
  });

  function isValidEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    return emailPattern.test(email);
  }
});
