import BasePage from "./BasePage";

class InventoryPage extends BasePage {

    get burgerMenu() {
        return cy.get('#react-burger-menu-btn')
    }

    get bucketIcon() {
        return cy.get('a.shopping_cart_link[data-test=shopping-cart-link]')
    }

    get dropdown() {
        return cy.get('select.product_sort_container')
    }

    get goodsLink () {
        return cy.get('.inventory_list .inventory_item_img a').eq(0);
    }
}

export default new InventoryPage();


