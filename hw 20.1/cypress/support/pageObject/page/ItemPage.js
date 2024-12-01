import BasePage from "./BasePage";

class ItemPage extends BasePage {

    get image() {
        return cy.get('img.inventory_details_img')
    }

    get itemName() {
        return cy.get('[data-test="inventory-item-name"]');
    }

    get details() {
        return cy.get('[data-test="inventory-item-desc"]');
    }
    get price() {
        return cy.get('[data-test="inventory-item-price"]');
    }
    get addToCartBtn() {
        return cy.get('button[data-test="add-to-cart"]');
    }
    get removeFromCartBtn() {
        return cy.get('button[data-test="remove"]');
    }
    verifyItemDetails() {
        this.image.should('be.visible');
        this.price.should('be.visible').and('contain', '$');
        this.itemName.should('be.visible').and('not.be.empty');
        this.details.should('be.visible').and('not.be.empty');
    }


  /*  get price() {
        return cy.get('button.btn.btn_secondary.btn_small.btn_inventory')
    }*/
}

export default new ItemPage();