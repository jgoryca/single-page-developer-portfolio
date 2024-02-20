"use strict";

const projectsBtnBox = document.querySelectorAll(".projects-btn-box");

projectsBtnBox.forEach(function (box) {
  box.addEventListener("mouseenter", function (e) {
    box.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    box.querySelector(".btn-project").classList.remove("hidden");
    box.querySelector(".btn-code").classList.remove("hidden");

    box.addEventListener("mouseleave", function (e) {
      box.style.backgroundColor = "transparent";
      box.querySelector(".btn-project").classList.add("hidden");
      box.querySelector(".btn-code").classList.add("hidden");
    });
  });
});
/////////////////////////////////////////////////////
const btnForm = document.querySelector(".btn--form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const notValid = function (element) {
  element.style.borderBottom = "1px solid #FF6F5B";
  element.nextElementSibling.classList.remove("hidden");
  const first = element.nextElementSibling;
  first.nextElementSibling.classList.remove("hidden");
  element.addEventListener("click", function () {
    element.style.borderBottom = "1px solid #d9d9d9";
    element.nextElementSibling.classList.add("hidden");
    first.nextElementSibling.classList.add("hidden");
  });
};

const valid = function (element) {
  element.style.borderBottom = "1px solid #4ee1a0";
};

const checkText = function (element) {
  if (!element.value) {
    notValid(element);
  } else valid(element);
};

const checkEmail = function (element) {
  if (!element.value.match(/\w+@\w+/)) {
    notValid(element);
  } else valid(element);
};

btnForm.addEventListener("click", function () {
  checkText(nameInput);
  checkEmail(emailInput);
  checkText(messageInput);
});
