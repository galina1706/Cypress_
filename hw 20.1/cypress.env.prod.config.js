const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: 's16jjz',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: true,
        json: true,
        charts: true,
        reportTitle: 'Test Report',
        embeddedScreenshots: true,
    },
    e2e: {
        chromeWebSecurity: false,//вимикає функцію безпеки chrome
        experimentalSessionAndOrigin: true,//вмикає підтримку сесій та крос-домених запитів
        defaultCommandTimeout:10000,//час очікування команд
        viewportWidth: 1280,
        viewportHeight:720,
        env: {
            BASE_URL: "https://www.saucedemo.com/",
            "username": "problem_user",
            "password": "secret_sauce"
        },
        specPattern: ['cypress/e2e/**/*.cy.js', 'hw 20.1/cypress/e2e/**/*.cy.js'],
    },
});