import {registerSelectors} from "../POM/registerSelectors";
import {productSearchSelectors} from "../POM/productSearchSelectors";
import {productDetailsSelectors} from "../POM/productDetails";
import {cartSelectors} from "../POM/cartSelectors"
import {checkoutSelectors} from "../POM/checkoutSelectors";

let data = {
    userName: "vidauri19",
    password: "testpass",
};
describe('Cart Tests', () => {
    it('Add to cart and checkout', () => {
        cy.visit('/');
        cy.get(registerSelectors.loginRegisterLink).click()
        cy.login(data.userName, data.password);
        cy.get(productSearchSelectors.searchTxt).type("lancome")
        cy.get(productSearchSelectors.mgnfrBtn).click()
        cy.get(productSearchSelectors.addToCartBtn).click()
        cy.get(productDetailsSelectors.addToCartBtn).click()
        cy.get(cartSelectors.nameTdLink).should('contain', 'Lancome Visionnaire');
        cy.get(cartSelectors.checkoutBtn).click()
        cy.get(checkoutSelectors.confirmationDetainsH1).should('contain', 'Checkout Confirmation');
        cy.get(checkoutSelectors.checkoutBtn).click()
        cy.url().should('contain', '?rt=checkout/success')
    })
})