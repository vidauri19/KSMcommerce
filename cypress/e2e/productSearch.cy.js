import {registerSelectors} from "../POM/registerSelectors";
import {productSearchSelectors} from "../POM/productSearchSelectors";

let data = {
    userName: "vidauri19",
    password: "testpass",
};
describe('Product Search spec', () => {
    it('search for a product', () => {
        cy.visit('/');
        cy.get(registerSelectors.loginRegisterLink).click()
        cy.login(data.userName, data.password);
        cy.get(productSearchSelectors.searchTxt).type("lancome")
        cy.get(productSearchSelectors.mgnfrBtn).click()
        cy.get(productSearchSelectors.productCard).should('contain', 'Lancome')
    })
})