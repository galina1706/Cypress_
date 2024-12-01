const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,//вимикає функцію безпеки chrome
    experimentalSessionAndOrigin: true,//вмикає підтримку сесій та крос-домених запитів
    defaultCommandTimeout:10000,//час очікування команд
   viewportWidth: 1280,
   viewportHeight:720,
    setupNodeEvents(on, config) {
      // Используем значение переменной окружения из командной строки, если оно задано
      config.env.BASE_URL = process.env.BASE_URL || config.env.BASE_URL || "https://qauto.forstudy.space/";
      return config;
    },
    env: {
      BASE_URL: "https://qauto.forstudy.space/",
      "username": "guest",
      "password": "welcome2qauto"
    },
    specPattern: ['cypress/e2e/**/*.cy.js', 'hw 19.1/cypress/e2e/**/*.cy.js'],
  },
});
