// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// hamburger icon di pencet
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click anywhere to exit hamburger bar

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Form Start
function validasiEm(emailAd) {
  var at = emailAd.indexOf("@");
  var dot = emailAd.indexOf(".");
  var space = emailAd.indexOf(" ");

  if (
    at != -1 &&
    at != 0 &&
    dot != -1 &&
    dot != 0 &&
    dot > at + 1 &&
    emailAd.length > dot + 1 &&
    space == -1
  ) {
    return true;
  } else {
    return false;
  }
}

function validForm() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let region1 = document.getElementById("region");
  let message = document.getElementById("message");
  let conditions = document.getElementById("check");

  if (name.value.length == 0) {
    alert("Please insert your name!");
  } else if (email.value.length == 0) {
    alert("Please insert the e-mail!");
  } else if (!validasiEm(email.value)) {
    alert("Please insert e-mail addres correctly!");
  } else if (isNaN(phone.value)) {
    alert("Please insert phone number correctly!");
  } else if (
    phone.value.length != 11 &&
    phone.value.length != 12 &&
    phone.value.length != 13
  ) {
    alert("Phone numbers must contain 11-13 digits of numbers!");
  } else if (region1.value == "") {
    alert("Please insert your region!");
  } else if (message.value == "") {
    alert("Please do not leave the message box empty!");
  } else if (conditions.checked == false) {
    alert("Agree to make a copy of your message!");
  }
}
