/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to login with username and password
         * @example cy.login('username', 'password')
         */
        login(username: string, password: string): Chainable<any>

        /**
         * Custom command to fill registration form
         * @example cy.fillRegistrationForm(userData)
         */
        fillRegistrationForm(userData: {
            firstName: string
            lastName: string
            email: string
            address: string
            city: string
            state: string
            postalCode: string
            userName: string
            password: string
            confirmPass: string
        }): Chainable<any>

        /**
         * Custom command to submit registration form
         * @example cy.submitRegistrationForm()
         */
        submitRegistrationForm(): Chainable<any>
    }
}