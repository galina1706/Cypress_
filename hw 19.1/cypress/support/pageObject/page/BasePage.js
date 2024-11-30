/// <reference types="cypress" />

export default class BasePage {
    constructor() {
        this.baseURL = Cypress.env('BASE_URL');
    }

    open(url) {
       console.log("_________", this.baseURL, url);
        cy.visit(`${this.baseURL}${url}`); // Используем относительный URL
    }
}
