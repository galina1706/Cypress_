import LoginPage from "../../support/pageObject/page/LoginPage.js"
import testData from "../../fixtures/credentials.json"
//import cypress from "cypress";

describe('Login ', () => {
    beforeEach(() => {
        LoginPage.open();
    })
    it('Success login test', () => {
        LoginPage.login(testData.userNames.correctUserName, testData.passwords.correctPassword);
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })
    it('Login with incorrect password', () => {
        LoginPage.login(testData.userNames.correctUserName, testData.passwords.incorrectPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');

    })
    it('Login with incorrect userName', () => {
        LoginPage.login(testData.userNames.incorrectUserName, testData.passwords.correctPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');

    })
})