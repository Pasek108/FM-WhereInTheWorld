"use strict";
class Filter {
  constructor() {
    this.container = document.querySelector(".filter");
    this.select = this.container.querySelector(".select");
    this.select_text = this.select.querySelector("span");
    this.options = this.container.querySelectorAll(".option");

    this.select.addEventListener("click", () => this.container.classList.toggle("active"));

    for (let i = 0; i < this.options.length; i++) {
      this.options[i].addEventListener("click", () => this.optionOnClick(i));
    }

    document.body.addEventListener("click", (evt) => {
      if (this.select.contains(evt.target)) {
        sort.hide();
        return;
      }

      this.hide();
    });
  }

  hide() {
    this.container.classList.remove("active");
  }

  show() {
    this.container.classList.add("active");
  }

  optionOnClick(id) {
    const option = this.options[id].innerText;

    let select_new_text = `Filter ${this.options[id].innerText}`;
    if (option === "None") select_new_text = `Filter by Region`;

    this.select_text.innerText = select_new_text;

    /* prettier-ignore */
    switch (id) {
        case 0: countries_api.current_filter = countries_api.regions.all; break;
        case 1: countries_api.current_filter = countries_api.regions.africa; break;
        case 2: countries_api.current_filter = countries_api.regions.americas; break;
        case 3: countries_api.current_filter = countries_api.regions.antarctic; break;
        case 4: countries_api.current_filter = countries_api.regions.asia; break;
        case 5: countries_api.current_filter = countries_api.regions.europe; break;
        case 6: countries_api.current_filter = countries_api.regions.oceania; break;
      }

    countries_overview.addCountries(countries_api.search_name, countries_api.current_sort, countries_api.current_filter);
  }
}
