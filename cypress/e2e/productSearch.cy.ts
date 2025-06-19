import { registerSelectors } from "../POM/registerSelectors";
import { productSearchSelectors } from "../POM/productSearchSelectors";
import { testUser, productData } from "../fixtures/testData";

describe('Product Search', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(registerSelectors.loginRegisterLink).click();
        cy.login(testUser.userName, testUser.password);
    });

    it('should find a product using search', () => {
        // Type search term and submit
        cy.get(productSearchSelectors.searchInput)
            .should('be.visible')
            .clear()
            .type(productData.searchTerm);
        
        cy.get(productSearchSelectors.searchButton)
            .should('be.visible')
            .click();

        // Verify search results
        cy.get(productSearchSelectors.productCard)
            .should('be.visible')
            .invoke('text')
            .should('match', /Lancome/i);
    });

    it('should show "no products" message for invalid search', () => {
        const invalidSearch = 'xyzabc123nonexistent';
        
        cy.get(productSearchSelectors.searchInput)
            .should('be.visible')
            .clear()
            .type(invalidSearch);
        
        cy.get(productSearchSelectors.searchButton)
            .should('be.visible')
            .click();

        // Check for any variation of "no products found" message
        cy.get('body').then($body => {
            // Try different possible message locations and formats
            const possibleMessages = [
                '.alert.alert-warning',
                '.alert',
                '.content',
                '#content'
            ];

            for (const selector of possibleMessages) {
                if ($body.find(selector).length) {
                    cy.get(selector).invoke('text').then((text) => {
                        const normalizedText = text.toLowerCase();
                        expect(
                            normalizedText.includes('no product') ||
                            normalizedText.includes('no result') ||
                            normalizedText.includes('nothing found') ||
                            normalizedText.includes('0 item')
                        ).to.be.true;
                    });
                    return;
                }
            }

            // If no specific message is found, at least verify no products are displayed
            cy.get(productSearchSelectors.productCard).should('not.exist');
        });
    });
}); 