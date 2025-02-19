"use strict";

class Searchbar {
  constructor() {
    this.container = document.querySelector(".searchbar");
    this.input = this.container.querySelector("input");

    this.input.addEventListener("click", this.onClick.bind(this));
    this.input.addEventListener("input", this.onInput.bind(this));
    this.input.addEventListener("focusout", this.onFocusout.bind(this));
  }

  onClick() {
    if (this.input.value === "Search for a country...") {
      this.input.value = "";
    }
  }

  onInput() {
    countries_api.searchByName(this.input.value);
  }

  onFocusout() {
    if (this.input.value === "") {
      this.input.value = "Search for a country...";
    }
  }
}

const searchbar = new Searchbar();
