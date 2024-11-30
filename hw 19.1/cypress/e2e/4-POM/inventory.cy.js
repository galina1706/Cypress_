import LoginPage from "../../support/pageObject/page/LoginPage.js"
import InventoryPage from "../../support/pageObject/page/InventoryPage.js";
import testData from "../../fixtures/credentials.json";
import ItemPage from "../../support/pageObject/page/ItemPage";

describe('Login with pom inventory', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.userNames.correctUserName, testData.passwords.correctPassword);
    })

    it('Burger Menu', () => {
        InventoryPage.burgerMenu
            .should('be.visible').click();
        cy.get('.bm-menu-wrap[aria-hidden=false]').should('be.visible');
    })

    it('Cart', () => {
        const expectedUrl = "https://www.saucedemo.com/static/media/cart3x.3669d74a.svg"
        InventoryPage.bucketIcon
            .should('be.visible')
            .and('have.css', 'background-image')
            .and('include', `url("${expectedUrl}")`);
    })
    it('dropdown', () => {
        InventoryPage.dropdown
            .find('option')
            .should('have.length', 4);
    })
    it('Redirect to another page upon click Cart', () => {
        InventoryPage.bucketIcon
            .should('be.visible').click();
        cy.url().should('include', '/cart');


    })
    it('Check goods item description', () => {
        InventoryPage.goodsLink
            .should('be.visible')
            .click();
        ItemPage.verifyItemDetails();
    })
    it('Check remove btn in item page', () => {
        InventoryPage.goodsLink
            .should('be.visible')
            .click();
        ItemPage.addToCartBtn
            .click();
        ItemPage.removeFromCartBtn
            .should('be.visible');
    })
    it('Check appear add to cart btn in item page', () => {
        InventoryPage.goodsLink
            .should('be.visible')
            .click();
        ItemPage.addToCartBtn
            .click();
        ItemPage.removeFromCartBtn
            .click();
        ItemPage.addToCartBtn
            .should('be.visible');


    })
})

