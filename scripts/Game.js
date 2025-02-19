"use strict";

class Game {
  constructor() {
    this.container = document.querySelector(".game");
    this.parent = document.querySelector("main");

    this.button = document.querySelector(".game-button");
    this.button.addEventListener("click", this.toggleGame.bind(this));

    this.close = this.container.querySelector(".close");
    this.close.addEventListener("click", this.hide.bind(this));

    this.loadStartDOMReferences();
    this.loadQuestionDOMReferences();
    this.initGameStats();

    this.correct_sound = new Audio("./../sounds/correct.mp3");
    this.wrong_sound = new Audio("./../sounds/wrong.mp3");
  }

  hide() {
    this.parent.classList.remove("game_on");
  }

  show() {
    this.points.innerText = this.stats.points;
    this.correct.innerText = this.stats.correct;
    this.wrong.innerText = this.stats.wrong;
    this.parent.classList.add("game_on");
  }

  toggleGame() {
    this.points.innerText = this.stats.points;
    this.correct.innerText = this.stats.correct;
    this.wrong.innerText = this.stats.wrong;
    this.parent.classList.toggle("game_on");
  }

  loadStartDOMReferences() {
    this.start = this.container.querySelector(".start");
    this.points = this.start.querySelector(".points .value");
    this.correct = this.start.querySelector(".correct .value");
    this.wrong = this.start.querySelector(".wrong .value");
    this.gamemodes = this.start.querySelectorAll(".option");

    for (let i = 0; i < this.gamemodes.length; i++) {
      this.gamemodes[i].addEventListener("click", () => {
        this.current_gamemode = i;
        this.addQuestion();
      });
    }
  }

  loadQuestionDOMReferences() {
    this.question = this.container.querySelector(".question");
    this.question_text = this.question.querySelector("header .text");
    this.question_hint = this.question.querySelector("header .hint");
    this.question_options = this.question.querySelector(".options");

    this.question_next = this.question.querySelector(".next");
    this.question_next.addEventListener("click", this.addQuestion.bind(this));

    this.question_back = this.question.querySelector(".back");
    this.question_back.addEventListener("click", () => {
      this.start.classList.remove("hidden");
      this.question.classList.add("hidden");
      this.show();
    });
  }

  initGameStats() {
    if (localStorage.getItem("game_stats") == null) {
      const stats = { points: 0, correct: 0, wrong: 0 };
      localStorage.setItem("game_stats", JSON.stringify(stats));
    }

    this.stats = JSON.parse(localStorage.getItem("game_stats"));
    this.current_gamemode = 0;
  }

  addQuestion() {
    this.question_hint.innerHTML = "";
    this.question_options.innerHTML = "";
    this.question.classList.remove("answered");

    /* prettier-ignore */
    switch (this.current_gamemode) {
        case 0: this.createQuestion("Guess name by flag",    "name",    "flag"); break;
        case 1: this.createQuestion("Guess name by capital", "name",    "capital"); break;
        case 2: this.createQuestion("Guess flag by name",    "flag",    "name"); break;
        case 3: this.createQuestion("Guess flag by capital", "flag",    "capital"); break;
        case 4: this.createQuestion("Guess capital by name", "capital", "name"); break;
        case 5: this.createQuestion("Guess capital by flag", "capital", "flag"); break;
      }

    this.question.classList.remove("hidden");
    this.start.classList.add("hidden");
  }

  createQuestion(text, options_content, header_content) {
    const answers_id = this.getAnswers(!text.includes("capital"));
    const answer = answers_id[getRandomInt(4)];

    this.question_text.innerText = text;

    switch (header_content) {
      case "flag":
        const flag_img = document.createElement("img");
        flag_img.src = countries_api.countries[answer].flags.svg;
        this.question_hint.appendChild(flag_img);
        break;

      case "name":
        this.question_hint.innerText = countries_api.countries[answer].name.common;
        break;

      case "capital":
        this.question_hint.innerText = countries_api.countries[answer].capital;
        break;
    }

    let correct_option = null;

    for (let i = 0; i < 4; i++) {
      const option = document.createElement("div");
      option.className = "option";

      switch (options_content) {
        case "flag":
          const flag_img = document.createElement("img");
          flag_img.src = countries_api.countries[answers_id[i]].flags.svg;
          option.appendChild(flag_img);
          option.classList.add("img");
          break;

        case "name":
          option.innerText = countries_api.countries[answers_id[i]].name.common;
          break;

        case "capital":
          option.innerText = countries_api.countries[answers_id[i]].capital;
          break;
      }

      this.question_options.appendChild(option);

      if (answers_id[i] === answer) correct_option = option;

      option.addEventListener("click", () => {
        this.checkAnswer(option, correct_option, answers_id[i], answer);
      });
    }
  }

  getAnswers(ignore_missing_capital) {
    const answers_id = [];

    for (let i = 0; i < 4; i++) {
      const random_country = getRandomInt(250);

      if (!answers_id.includes(random_country)) {
        if (ignore_missing_capital) {
          answers_id.push(random_country);
          continue;
        }

        if (countries_api.countries[random_country].capital != null) {
          answers_id.push(random_country);
          continue;
        }
      }

      i--;
    }

    return answers_id;
  }

  checkAnswer(clicked_option, correct_option, clicked_id, correct_id) {
    this.question.classList.add("answered");

    if (clicked_id === correct_id) {
      this.correct_sound.play();
      clicked_option.classList.add("correct");
      this.stats.points += 1;
      this.stats.correct += 1;
    } else {
      this.wrong_sound.play();
      clicked_option.classList.add("wrong");
      correct_option.classList.add("correct");
      this.stats.points -= 1;
      this.stats.wrong += 1;
    }

    localStorage.setItem("game_stats", JSON.stringify(this.stats));
  }
}

const game = new Game();