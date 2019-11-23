var form = document.querySelector("form");
var success = document.querySelector(".popup-success");
var fail = document.querySelector(".popup-fail");
var closeSuccess = document.querySelector(".popup-success__button");
var closeFail = document.querySelector(".popup-fail__button");

var userName = document.querySelector(".user-initials__input--name");
var surname = document.querySelector(".user-initials__input--surname");
var phone = document.querySelector(".contacts__input--tel");
var email = document.querySelector(".contacts__input--email");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (userName.value == "") {
      userName.classList.add("user-initials__input--invalid");
      fail.classList.remove("popup-fail--hidden");
  } else if (surname.value == "") {
      userName.classList.remove("user-initials__input--invalid");
      surname.classList.add("user-initials__input--invalid");
      fail.classList.remove("popup-fail--hidden");
  } else if (phone.value == "") {
      surname.classList.remove("user-initials__input--invalid");
      phone.classList.add("contacts__input--invalid");
      fail.classList.remove("popup-fail--hidden");
  } else if (email.value == "") {
      phone.classList.remove("contacts__input--invalid");
      email.classList.add("contacts__input--invalid");
      fail.classList.remove("popup-fail--hidden");
  } else {
      success.classList.remove("popup-success--hidden");
  }
});

closeFail.addEventListener("click", function(evt) {
  evt.preventDefault();
  fail.classList.add("popup-fail--hidden");
});

closeSuccess.addEventListener("click", function(evt) {
  evt.preventDefault();
  success.classList.add("popup-success--hidden");
  form.submit();
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (!fail.classList.contains("popup-fail--hidden")) {
      evt.preventDefault();
      fail.classList.add("popup-fail--hidden");
    }
    if (!success.classList.contains("popup-success--hidden")) {
      evt.preventDefault();
      success.classList.add("popup-success--hidden");
      form.submit();
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 13) {
    if (!fail.classList.contains("popup-fail--hidden")) {
      evt.preventDefault();
      fail.classList.add("popup-fail--hidden");
    }
    if (!success.classList.contains("popup-success--hidden")) {
      evt.preventDefault();
      success.classList.add("popup-success--hidden");
      form.submit();
    }
  }
});
