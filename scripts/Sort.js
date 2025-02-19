"use strict";

class Sort {
  constructor() {
    this.container = document.querySelector(".sort");
    this.select = this.container.querySelector(".select");
    this.select_text = this.select.querySelector("span");
    this.options = this.container.querySelectorAll(".option");

    this.select.addEventListener("click", () => this.container.classList.toggle("active"));

    for (let i = 0; i < this.options.length; i++) {
      this.options[i].addEventListener("click", () => this.optionOnClick(i));
    }

    document.body.addEventListener("click", (evt) => {
      if (this.select.contains(evt.target)) {
        filter.hide();
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

    let select_new_text = `${this.options[id].innerText}`;
    if (option === "None") select_new_text = `Sort <span>alphabetically</span>`;

    this.select_text.innerHTML = select_new_text;

    /* prettier-ignore */
    switch (id) {
          case 0: countries_api.current_sort = countries_api.no_sort; break;
          case 1: countries_api.current_sort = countries_api.sort_a_to_z; break;
          case 2: countries_api.current_sort = countries_api.sort_z_to_a; break;
          case 3: countries_api.current_sort = countries_api.sort_ascending; break;
          case 4: countries_api.current_sort = countries_api.sort_descending; break;
        }

    if (searchbar.input.value === "Search for a country...") countries_api.searchByName("");
    else countries_api.searchByName(searchbar.input.value);
    countries_overview.addCountries(countries_api.search_name, countries_api.current_sort, countries_api.current_filter);
  }
}

const sort = new Sort();