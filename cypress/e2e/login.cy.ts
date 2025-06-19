import {registerSelectors} from "../POM/registerSelectors";
import {loginSelectors} from "../POM/loginSelectors";

describe('Login spec', () => {
    it('login as a user', () => {
        cy.visit('/');
        cy.get(registerSelectors.loginRegisterLink).click()
        cy.login(
            Cypress.env('TEST_USER_USERNAME'),
            Cypress.env('TEST_USER_PASSWORD')
        );
    })
}) 