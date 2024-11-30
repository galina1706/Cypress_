/// <reference types="cypress" />

import BasePage from "./BasePage";

class LoginPage extends BasePage {

    get userNameField() {
        return cy.get('#user-name')
    }

    get passwordField() {
        return cy.get('#password')
    }

    get loginButton() {
        return cy.get('#login-button')
    }

    get errorMSG() {
        return cy.get('[data-test="error"]')
    }

    open() {
        super.open(''); // navigate to BasePage
    }

    login(username, password) {
        this.userNameField.type(username); 
        this.passwordField.type(password);
        this.loginButton.click();
    }

    verifyErrorMessage(text) {
        this.errorMSG.should('have.text', text)
    }
}

export default new LoginPage(); 
