import { registerSelectors } from "../POM/registerSelectors";
import { productSearchSelectors } from "../POM/productSearchSelectors";
import { productDetailsSelectors } from "../POM/productDetails";
import { cartSelectors } from "../POM/cartSelectors";
import { checkoutSelectors } from "../POM/checkoutSelectors";
import { testUser, productData } from "../fixtures/testData";

describe('Shopping Cart', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(registerSelectors.loginRegisterLink).click();
        cy.login(testUser.userName, testUser.password);
    });

    it('should add product to cart and complete checkout', () => {
        // Search for product
        cy.get(productSearchSelectors.searchInput)
            .should('be.visible')
            .clear()
            .type(productData.searchTerm);
        
        cy.get(productSearchSelectors.searchButton)
            .should('be.visible')
            .click();

        // Add to cart from search results
        cy.get(productSearchSelectors.addToCartButton)
            .should('be.visible')
            .first()
            .click();

        // Wait for cart update and verify product
        cy.get(cartSelectors.nameTdLink)
            .should('be.visible')
            .and('contain', productData.expectedProductName);

        // Proceed to checkout
        cy.get(cartSelectors.checkoutBtn)
            .should('be.visible')
            .click();

        // Verify checkout page
        cy.get(checkoutSelectors.confirmationDetainsH1)
            .should('be.visible')
            .and('contain', 'Checkout Confirmation');

        // Complete checkout
        cy.get(checkoutSelectors.checkoutBtn)
            .should('be.visible')
            .click();

        // Verify successful checkout
        cy.url()
            .should('contain', '?rt=checkout/success');
    });
}); 