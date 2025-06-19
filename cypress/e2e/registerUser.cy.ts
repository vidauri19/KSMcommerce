import { registerSelectors } from "../POM/registerSelectors";
import { testUser } from "../fixtures/testData";

describe('User Registration', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(registerSelectors.loginRegisterLink)
            .should('be.visible')
            .click();
    });

    it('should register a new user successfully', () => {
        // Start registration process
        cy.get(registerSelectors.continueRegistrationBtn)
            .should('be.visible')
            .click();

        // Generate unique email and username for new registration
        const timestamp = Date.now();
        const uniqueUser = {
            ...testUser,
            email: `test.${timestamp}@example.com`,
            userName: `testuser${timestamp}`,
        };

        // Fill and submit registration form
        cy.fillRegistrationForm(uniqueUser);
        cy.submitRegistrationForm();

        // Verify successful registration
        cy.url().should('include', 'rt=account/success');
        cy.get('h1.heading1, .heading1 h1, h1')
            .should('be.visible')
            .invoke('text')
            .should('match', /account has been created/i);
    });

    it('should show error for existing email', () => {
        cy.get(registerSelectors.continueRegistrationBtn)
            .should('be.visible')
            .click();

        cy.fillRegistrationForm(testUser);
        cy.submitRegistrationForm();

        // Verify error message
        cy.get('.alert')
            .should('be.visible')
            .and('contain.text', 'already registered');
    });
}); 