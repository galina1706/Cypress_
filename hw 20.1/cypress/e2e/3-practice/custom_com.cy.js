import '../../support/commands.js';

describe('Basic query', () => {
    it('Custom', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.login('standard_user','secret_sauce')
    })
})