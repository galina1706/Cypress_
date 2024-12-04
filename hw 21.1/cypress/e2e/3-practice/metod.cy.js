/// <reference types="cypress" />


describe('Basic query ', () => {

it('Submit', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('form').submit();

})

it('go', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('form').submit();
    cy.get('[data-test="title"]').should('have.text', 'Products')
    cy.go('back')
    cy.go("forward")
    cy.url().should('include' , 'inventory.html')
    cy.wait(2000)
    cy.reload()
    cy.get('[data-test="title"]').should('have.text', 'Products')
})


it('should', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').should('have.attr', 'placeholder' , 'Username')
    const number = -2
    expect(number).to.be.at.least(1)
    const person = { name : 'Jhon' , age : 20};
    expect(person).to.have.property('name', 'Jhon')
})


it.only('expect', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('form').submit();
    cy.url().then((url) => {
        expect(url).to.include('inventory.html')
    });
})
})