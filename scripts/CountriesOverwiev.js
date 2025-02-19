"use strict";

class CountriesOverview {
  constructor() {
    this.container = document.querySelector(".countries");
    this.all_countries = this.container.querySelector("section");
    this.card_template = document.querySelector(".country-card-template");
  }

  hide() {
    this.container.classList.add("hidden");
  }

  show() {
    this.container.classList.remove("hidden");
    country_details.hide();
  }

  addCountries(search, sort, filter) {
    this.all_countries.innerHTML = "";

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < sort.length; i++) {
      let is_searched = false;

      for (let j = 0; j < search.length; j++) {
        if (i != search[j]) continue;

        is_searched = true;
        break;
      }

      if (!is_searched) continue;

      for (let j = 0; j < filter.length; j++) {
        if (sort[i][1] === filter[j]) {
          fragment.appendChild(this.createCountyCard(countries_api.countries[sort[i][1]]));
          break;
        }
      }
    }

    if (!fragment.hasChildNodes()) this.all_countries.innerHTML = "<span>Nothing found<span>";
    else this.all_countries.appendChild(fragment);
  }

  createCountyCard(country) {
    const new_card = this.card_template.content.cloneNode(true);

    const flag = new_card.querySelector(".flag");
    flag.style.backgroundImage = `url(${country.flags.svg})`;

    const name = new_card.querySelector(".name");
    name.innerText = country_details.getName(country);

    name.addEventListener("click", () => country_details.openDetails(country));

    const population = new_card.querySelector(".population .value");
    population.innerText = country_details.getPopulation(country);

    const region = new_card.querySelector(".region .value");
    region.innerText = country_details.getRegion(country);

    const capital = new_card.querySelector(".capital .value");
    capital.innerText = country_details.getCapital(country);

    return new_card;
  }
}

const countries_overview = new CountriesOverview();