"use strict";

const searchbar = new Searchbar();
const sort = new Sort();
const filter = new Filter();
const country_details = new CountryDetails();
const countries_overview = new CountriesOverview();
const countries_api = new CountriesAPI();
const game = new Game();

/* ---------------------- theme ---------------------- */
const theme_button = document.querySelector(".theme-button");

theme_button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

function getRandomInt(max) {
  return (Math.random() * max) | 0;
}

const logo = document.querySelector(".logo");
logo.addEventListener("click", backToCountries);

function backToCountries() {
  countries_overview.show();
  game.hide();
}