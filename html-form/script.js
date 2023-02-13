const form = document.querySelector("form");
const mail = document.querySelector('input[type="email"]');
const zip = document.querySelector("input#zip");
const country = document.getElementById("country");
const pass = document.querySelector("input#password");
const confirmPass = document.querySelector("input#confirm-password");

country.value = "";

mail.addEventListener("input", () => {
  if (mail.checkValidity()) {
    mail.parentElement.lastElementChild.textContent = "";
    mail.className = "";
  } else {
    mail.parentElement.lastElementChild.textContent =
      "You should enter email address";
    mail.className = "invalid";
  }
});

country.addEventListener("change", () => {
  country.className = "";
  country.parentElement.lastElementChild.textContent = "";
  switch (country.value) {
    case "ch":
      zip.pattern = "^(CH-)?\\d{4}$";
      zip.parentElement.lastElementChild.textContent =
        "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950";
      break;
    case "fr":
      zip.pattern = "^(F-)?\\d{5}$";
      zip.parentElement.lastElementChild.textContent =
        "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012";
      break;
    case "de":
      zip.pattern = "^(D-)?\\d{5}$";
      zip.parentElement.lastElementChild.textContent =
        "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345";
      break;
    case "nl":
      zip.pattern = "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$";
      zip.parentElement.lastElementChild.textContent =
        "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS";
      break;
  }
  zip.parentElement.lastElementChild.style.display = "none";
});

zip.addEventListener("input", () => {
  if (zip.checkValidity()) {
    zip.parentElement.lastElementChild.style.display = "none";
    zip.className = "";
  } else {
    zip.parentElement.lastElementChild.style.display = "";
    zip.className = "invalid";
  }
});

pass.addEventListener("input", () => {
  if (pass.checkValidity()) {
    pass.parentElement.lastElementChild.textContent = "";
    pass.className = "";
  } else {
    pass.parentElement.lastElementChild.textContent =
      "Your password must have at least 8 characters, at least one upper case letter, one lowercase letter, one number, and a symbol for it to be highly secure";
    pass.className = "invalid";
  }
});

confirmPass.addEventListener("input", () => {
  if (confirmPass.value === pass.value) {
    confirmPass.parentElement.lastElementChild.textContent = "";
    confirmPass.className = "";
  } else {
    confirmPass.parentElement.lastElementChild.textContent =
      "Password don't match.";
    confirmPass.className = "invalid";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (mail.reportValidity()) {
    mail.parentElement.lastElementChild.textContent = "";
  } else {
    mail.parentElement.lastElementChild.textContent = "I'm expecting an email.";
    mail.className = "invalid";
  }

  if (country.value === "") {
    country.parentElement.lastElementChild.textContent =
      "Please choose one country";
    country.className = "invalid";
  }

  if (pass.reportValidity()) {
    pass.parentElement.lastElementChild.textContent = "";
  } else {
    pass.parentElement.lastElementChild.textContent =
      "Your password must have at least 8 characters, at least one upper case letter, one lowercase letter, one number, and a symbol for it to be highly secure";
    pass.className = "invalid";
  }

  if (confirmPass.value !== pass.value || pass.value === "") {
    confirmPass.parentElement.lastElementChild.textContent =
      "Password don't match";
    confirmPass.className = "invalid";
  }

  if (zip.validity.patternMismatch || zip.value === "") {
    zip.parentElement.lastElementChild.style.display = "";
    zip.className = "invalid";
  } else {
    zip.parentElement.lastElementChild.style.display = "none";
    zip.className = "";
  }
});
