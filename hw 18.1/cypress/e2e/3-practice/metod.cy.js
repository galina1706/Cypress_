/// <reference types="cypress" />


describe('Basic query ', () => {

it('Have logo', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('a.header_logo')
         .should('be.visible')
         .and('have.attr', 'routerlink', '/')
})
it('Have Home btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('a.btn.header-link')
         .should('be.visible')
         .and('have.attr', 'routerlink', '/')
//         .and('have.text', 'Очікуваний текст кнопки');
})
it('Have About btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('button.btn.header-link[appscrollto=aboutSection]')
         .should('be.visible')
         .and('have.text', 'About');
})

it('Have Contacts btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('button.btn.header-link[appscrollto=contactsSection]')
         .should('be.visible')
         .and('have.text', 'Contacts');
})

it('Have Guest Log in btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('button.header-link.-guest')
         .should('be.visible')
         .and('have.text', 'Guest log in');
})

it('Have Sign in btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('button.btn.btn-outline-white.header_signin')
         .should('be.visible')
         .and('have.text', 'Sign In');
})

it('Have Sign up btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('button.hero-descriptor_btn.btn.btn-primary')
         .should('be.visible')
         .and('have.text', 'Sign up');
})

it('Have Facebook btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('span.socials_icon.icon.icon-facebook')
         .should('be.visible');
})

it('Have Telegram btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('span.socials_icon.icon.icon-telegram')
         .should('be.visible');
})

it('Have Youtube btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('span.socials_icon.icon.icon-youtube')
         .should('be.visible');
})

it('Have Instagram btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('span.socials_icon.icon.icon-instagram')
         .should('be.visible');
})

it('Have Linkedin btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('span.socials_icon.icon.icon-linkedin')
         .should('be.visible');
})

it('Have ithillel.ua btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('a.contacts_link.display-4')
         .should('be.visible');
})
it('Have support btn', () => {
   cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
   cy.get('a.contacts_link.h4')
         .should('be.visible');
})
it('Submit', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('form').submit();

})
})