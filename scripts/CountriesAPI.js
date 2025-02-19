"use strict";

class CountriesAPI {
  constructor() {
    this.countries = {};
    this.abbreviations = [];

    this.no_sort = [];
    this.sort_a_to_z = [];
    this.sort_z_to_a = [];
    this.sort_ascending = [];
    this.sort_descending = [];

    this.regions = {
      all: [],
      africa: [],
      americas: [],
      antarctic: [],
      asia: [],
      europe: [],
      oceania: [],
    };

    this.current_sort = this.no_sort;
    this.current_filter = this.regions.all;

    this.search_name = [];
    this.getCountries();
  }

  getCountries() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        this.countries = data;
        
        this.fillAbbreviations();
        this.fillSortArrays();
        this.fillRegionsArrays();

        this.searchByName("");
        countries_overview.addCountries(this.search_name, this.current_sort, this.current_filter);
      })
      .catch((error) => this.getCountriesFromFile());
  }

  getCountriesFromFile() {
    fetch("countries_v3.1.json")
      .then((response) => response.json())
      .then((data) => {
        this.countries = data;
        
        this.fillAbbreviations();
        this.fillSortArrays();
        this.fillRegionsArrays();

        this.searchByName("");
        countries_overview.addCountries(this.search_name, this.current_sort, this.current_filter);
      })
  }

  fillAbbreviations() {
    for (let i = 0; i < this.countries.length; i++) {
      this.abbreviations.push(this.countries[i].cca3);
    }
  }

  fillSortArrays() {
    for (let i = 0; i < this.countries.length; i++) {
      this.no_sort.push([this.countries[i].name.common, i]);
      this.sort_a_to_z.push([this.countries[i].name.common, i]);
      this.sort_z_to_a.push([this.countries[i].name.common, i]);
      this.sort_ascending.push([this.countries[i].population, i]);
      this.sort_descending.push([this.countries[i].population, i]);
    }

    for (let i = 0; i < this.countries.length; i++) {
      for (let j = 0; j < this.countries.length - 1; j++) {
        // sort a - z
        if (this.sort_a_to_z[j][0].localeCompare(this.sort_a_to_z[j + 1][0]) > 0) {
          const temp = this.sort_a_to_z[j];
          this.sort_a_to_z[j] = this.sort_a_to_z[j + 1];
          this.sort_a_to_z[j + 1] = temp;
        }

        // sort z - a
        if (this.sort_z_to_a[j][0].localeCompare(this.sort_z_to_a[j + 1][0]) < 0) {
          const temp = this.sort_z_to_a[j];
          this.sort_z_to_a[j] = this.sort_z_to_a[j + 1];
          this.sort_z_to_a[j + 1] = temp;
        }

        // sort ascending
        if (this.sort_ascending[j][0] > this.sort_ascending[j + 1][0]) {
          const temp = this.sort_ascending[j];
          this.sort_ascending[j] = this.sort_ascending[j + 1];
          this.sort_ascending[j + 1] = temp;
        }

        // sort descending
        if (this.sort_descending[j][0] < this.sort_descending[j + 1][0]) {
          const temp = this.sort_descending[j];
          this.sort_descending[j] = this.sort_descending[j + 1];
          this.sort_descending[j + 1] = temp;
        }
      }
    }
  }

  fillRegionsArrays() {
    for (let i = 0; i < this.countries.length; i++) {
      this.regions.all.push(i);

      const region = this.countries[i].region.toLowerCase();
      this.regions[region].push(i);
    }
  }

  searchByName(text) {
    this.search_name = [];

    for (let i = 0; i < this.current_sort.length; i++) {
      const name = this.countries[this.current_sort[i][1]].name.common.toLowerCase();
      const search = text.toLowerCase();

      if (name.includes(search)) this.search_name.push(i);
    }

    countries_overview.addCountries(this.search_name, this.current_sort, this.current_filter);
  }
}

const countries_api = new CountriesAPI();