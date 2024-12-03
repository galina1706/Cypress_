const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ['cypress/e2e/**/*.cy.js', 'hw 21.1/cypress/e2e/**/*.cy.js'],
    chromeWebSecurity: false,
        setupNodeEvents(on, config) {
          // Используем значение переменной окружения из командной строки, если оно задано
          config.env.BASE_URL = process.env.BASE_URL || config.env.BASE_URL || "https://www.saucedemo.com/";
          return config;
        },
        env: {
          BASE_URL: "https://www.saucedemo.com/"
        }
     },
});
