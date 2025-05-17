declare namespace Cypress {
    interface Chainable<Subject = any> {
        submitRegistrationForm(): void

        fillRegistrationForm(userData: any): void

        login(username: any, password: any): void
    }
}