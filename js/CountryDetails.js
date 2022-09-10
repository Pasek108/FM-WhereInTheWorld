"use strict";

class CountryDetails {
  constructor() {
    this.container = document.querySelector(".country-details");
    this.back = this.container.querySelector(".back");
    this.back.addEventListener("click", backToCountries);

    this.flag = this.container.querySelector(".flag");
    this.name = this.container.querySelector(".name");
    this.native_name = this.container.querySelector(".native-name .value");
    this.population = this.container.querySelector(".population .value");
    this.region = this.container.querySelector(".region .value");
    this.sub_region = this.container.querySelector(".sub-region .value");
    this.capital = this.container.querySelector(".capital .value");
    this.top_level_domain = this.container.querySelector(".top-level-domain .value");
    this.currencies = this.container.querySelector(".currencies .value");
    this.languages = this.container.querySelector(".languages .value");
    this.border_countries = this.container.querySelector(".border-countries .value");
  }

  hide() {
    this.container.classList.add("hidden");
  }

  show() {
    this.container.classList.remove("hidden");
    countries_overview.hide();
  }

  openDetails(country) {
    this.fillDetails(country);
    this.show();
  }

  fillDetails(country) {
    this.flag.style.backgroundImage = this.getFlagSVG(country);

    this.name.innerText = this.getName(country);
    this.native_name.innerText = this.getNativeName(country);
    this.population.innerText = this.getPopulation(country);
    this.region.innerText = this.getRegion(country);
    this.sub_region.innerText = this.getSubRegion(country);
    this.capital.innerText = this.getCapital(country);
    this.top_level_domain.innerText = this.getTopLevelDomain(country);
    this.currencies.innerText = this.getCurrencies(country);
    this.languages.innerText = this.getLanguages(country);

    this.addBorderCountries(country);
  }

  getFlagSVG(country) {
    return `url(${country.flags.svg})`;
  }

  getName(country) {
    return country.name.common;
  }

  getNativeName(country) {
    const first_key = Object.keys(country.name.nativeName)[0];
    return country.name.nativeName[first_key].official;
  }

  getPopulation(country) {
    const comma_formated_number = new Intl.NumberFormat("en-US").format(country.population);
    return comma_formated_number;
  }

  getRegion(country) {
    return country.region;
  }

  getSubRegion(country) {
    return country.subregion;
  }

  getCapital(country) {
    if (country.capital == null) return "None";

    return country.capital[0];
  }

  getTopLevelDomain(country) {
    let top_level_domains = "";
    for (let tld of country.tld) top_level_domains += ` ${tld},`;
    top_level_domains = top_level_domains.slice(0, -1);

    return top_level_domains;
  }

  getCurrencies(country) {
    let currencies = "";
    for (let key in country.currencies) currencies += ` ${country.currencies[key].name},`;
    currencies = currencies.slice(0, -1);

    return currencies;
  }

  getLanguages(country) {
    let languages = "";
    for (let key in country.languages) languages += ` ${country.languages[key]},`;
    languages = languages.slice(0, -1);

    return languages;
  }

  addBorderCountries(country) {
    this.border_countries.innerHTML = "";

    if (country.borders == null) {
      this.border_countries.innerText = "None";
      return;
    }

    for (let border_country of country.borders) {
      const abbrs = countries_api.abbreviations;

      for (let i = 0; i < abbrs.length; i++) {
        if (border_country === abbrs[i]) {
          const country = document.createElement("div");
          country.addEventListener("click", () => this.openDetails(countries_api.countries[i]));
          country.innerText = country_details.getName(countries_api.countries[i]);

          this.border_countries.appendChild(country);
          break;
        }
      }
    }
  }
}
