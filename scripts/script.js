"use strict";

/* ---------------------- theme ---------------------- */
const theme_button = document.querySelector(".theme-button");

theme_button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList[0])
});

if (localStorage.getItem("theme") != null) {
  const theme = localStorage.getItem("theme");
  if (theme == "light") theme_button.click();
}

function getRandomInt(max) {
  return (Math.random() * max) | 0;
}

const logo = document.querySelector(".logo");
logo.addEventListener("click", backToCountries);

function backToCountries() {
  countries_overview.show();
  game.hide();
}