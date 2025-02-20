<h1 align="center">FM-WhereInTheWorld - Readme</h1>
<p align="center">
  <strong>
    My solution to the <a href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca" target="_blank">Frontend Mentor "REST Countries API with color theme switcher" challenge</a>
  </strong>
</p>
<div align="center">
  <a href="https://www.frontendmentor.io/home">
    <img src="_for_readme/banner.jpg?">
  </a>
</div>

<br>

> [!CAUTION]  
> <h4>Please, don't look at my solutions until you have completed it yourself.</h4>
> Challenges like these are an opportunity to improve by coming up with your own solutions. Take your time and think about your approach.  
> If you can't complete a challenge, skip it and come back to it later. Only look at someone else's solutions as a last resort, and treat it as a defeat.

<br>

# Table of Contents
* [FrontendMentor :thinking:](#frontendmentor-thinking)
  * [What is it](#what-is-it)
  * [Is it worth doing](#is-it-worth-doing)
* [Overview :sparkles:](#overview-sparkles)
  * [About](#about)
  * [Features](#features)
  * [Technologies](#technologies)
  * [Setup](#setup)
  * [Copyright](#copyright-copyright)
* [Details :scroll:](#details-scroll)
  * [User interface](#user-interface)
  * [Performance](#performance)

<br>

# FrontendMentor :thinking:

## What is it
[FrontendMentor](https://www.frontendmentor.io/home) is a platform that provides real-world front-end coding challenges to help developers improve their skills. It offers projects ranging from simple layouts to complex web applications, allowing users to practice HTML, CSS, and JavaScript by building solutions that closely resemble professional work.  

## Is it worth doing
Frontend Mentor is a great resource for developers looking to gain hands-on experience by working on practical projects. The challenges help reinforce best practices, improve design implementation skills, and build a portfolio. However, since there is no automated grading system, feedback depends on community reviews, making it essential to engage with others for constructive criticism.  

<br>

# Overview :sparkles:

## About
My solution to the [Frontend Mentor "REST Countries API with color theme switcher" challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). This project was built using pure JavaScript and LESS. The challenge required integrating the [REST Countries API](https://restcountries.com/v3.1/all) to retrieve country data. It was a great opportunity to practice JavaScript.

Check out the [live version](https://pasek108.github.io/FM-WhereInTheWorld/) of this project, as well as my [Frontend Mentor profile](https://www.frontendmentor.io/profile/Pasek108).

<br>

![preview](/_for_readme/preview.png)

## Technologies
Languages:
- JavaScript
- HTML
- CSS

Libraries and frameworks:
- [LESS](https://lesscss.org)
- [FontAwesome](https://fontawesome.com) 6.2.0
- [GoogleFonts](https://fonts.google.com)
  
Programs:
- [VSCode](https://code.visualstudio.com)
- [Prepros](https://prepros.io)
- [PowerToys](https://learn.microsoft.com/en-us/windows/powertoys/)
- [ShareX](https://getsharex.com)
- [GIMP](https://www.gimp.org)

## Features
### Challenge requirements
- ✅ See all countries from the API on the homepage
- ✅ Search for a country using an `input` field
- ✅ Filter countries by region
- ✅ Click on a country to see more detailed information on a separate page
- ✅ Click through to the border countries on the detail page
- ✅ Toggle the color scheme between light and dark mode 

### Additions
- Remember color scheme
- Sorting coutries by name 
- Sorting coutries population
- Countries guessing game: 
  - Name by flag
  - Name by capital
  - Flag by name
  - Flag by capital
  - Capital by name
  - Capital by flag

## Setup
- Use [live version](https://pasek108.github.io/FM-WhereInTheWorld/).

- Download this repository and:
  - Open project in VSCode
  - Run [VSCode live server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - Or open project in Prepros

## Copyright :copyright:
I do not own the rights to the content of the challenges. All challenge data was downloaded and included only to provide context for the solutions.

<br>

# Details :scroll:

## User interface
### Header  
![header](/_for_readme/UI/header.png)  
The header contains the logo on the left and buttons on the right.

The buttons are:  
- **Game** – Starts a country guessing game.  
- **Light/Dark mode** – Switches the page's color scheme.

---

### Countries Overview  
![filtering](/_for_readme/UI/filtering.png)  
At the top, there is a filtering section. Users can search for text within country data, sort countries by name or population, and filter them by region.

<br>

![countries](/_for_readme/UI/countries.png)  

![countries](/_for_readme/UI/countries-light-theme.png)  
Below, a list of all countries that meet the selected filter criteria is displayed.

Countries are shown as cards containing:  
- Flag  
- Name  
- Population  
- Region  
- Capital  

Clicking on a country's name navigates the user to the country's details page.

---

### Country Details  
![country details](/_for_readme/UI/country-details.png)  
The country details page includes:  
- Flag  
- Name  
- Native Name  
- Population  
- Region  
- Subregion  
- Capital  
- Top-Level Domain  
- Currencies  
- Languages  
- Border Countries  

Clicking on a border country navigates the user to that country's details page.

---

### Game  
![game select](/_for_readme/UI/game-select.png)  
Clicking the "Game" button in the header opens the game selection menu.

The menu displays a points counter, as well as counters for correct and incorrect answers. Below, users can select a game mode:

- **Name by Flag**  

  ![name by flag](/_for_readme/UI/name-by-flag.png)  

- **Name by Capital**  

  ![name by capital](/_for_readme/UI/name-by-capital.png)  

- **Flag by Name**  

  ![flag by name](/_for_readme/UI/flag-by-name.png)  

- **Flag by Capital**  

  ![flag by capital](/_for_readme/UI/flag-by-capital.png)  

- **Capital by Name**  

  ![capital by name](/_for_readme/UI/capital-by-name.png)  

- **Capital by Flag**  

  ![capital by flag](/_for_readme/UI/capital-by-flag.png)  

Users must answer the question by selecting one of four available options.  
- If the answer is **incorrect**, a wrong sound plays, the chosen answer is marked in red, and the correct answer is highlighted in green.  
- If the answer is **correct**, a correct sound plays, and the selected option is marked in green. The next question is then unlocked.  

## Performance

### Desktop
![desktop performance](/_for_readme/desktop-performance.png)

### Mobile
![mobile performance](/_for_readme/mobile-performance.png)

