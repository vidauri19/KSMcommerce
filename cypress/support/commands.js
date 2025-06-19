import {registerSelectors} from "../POM/registerSelectors";
import {loginSelectors} from "../POM/loginSelectors";

// Hide sensitive data in Cypress logs
const sensitiveKeys = Cypress.env('sensitiveKeys') || [];
Cypress.on('log:changed', (log) => {
    if (log.consoleProps) {
        const props = log.consoleProps();
        if (props.Yielded) {
            sensitiveKeys.forEach(key => {
                if (typeof props.Yielded === 'string' && props.Yielded.includes(key)) {
                    props.Yielded = '[REDACTED]';
                }
            });
        }
    }
});

// Custom command to fill registration form with hidden sensitive data
Cypress.Commands.add('fillRegistrationForm', (userData) => {
    // Log non-sensitive data
    Cypress.log({
        name: 'fillRegistrationForm',
        message: 'Filling registration form',
        consoleProps: () => ({
            'First Name': userData.firstName,
            'Last Name': userData.lastName,
            'Address': userData.address,
            'City': userData.city,
            'State': userData.state,
            'Postal Code': userData.postalCode,
            // Sensitive data is not logged
        })
    });

    cy.get(registerSelectors.userFirstNameTxt).type(userData.firstName)
    cy.get(registerSelectors.userLastNameTxt).type(userData.lastName)
    cy.get(registerSelectors.userEmailTxt).type(userData.email, { log: false })
    cy.get(registerSelectors.userAddressTxt).type(userData.address)
    cy.get(registerSelectors.userCity).type(userData.city)
    cy.get(registerSelectors.userStateSel).select(userData.state)
    cy.get(registerSelectors.userPostalCodeTxt).type(userData.postalCode)
    cy.get(registerSelectors.userLoginNameTxt).type(userData.userName, { log: false })
    cy.get(registerSelectors.userPasswordTxt).type(userData.password, { log: false })
    cy.get(registerSelectors.userConfirmPasswordTxt).type(userData.confirmPass, { log: false })
    cy.get(registerSelectors.agreeCbx).check()
})

Cypress.Commands.add('submitRegistrationForm',()=>{
    cy.get(registerSelectors.registerBtn).click()
})

// Custom command to login with hidden sensitive data
Cypress.Commands.add('login', (username, password) => {
    Cypress.log({
        name: 'login',
        message: 'Logging in user',
        // Don't log sensitive data
        consoleProps: () => ({
            'Action': 'Login attempt'
        })
    });

    cy.get(loginSelectors.userNameTxt).type(username, { log: false })
    cy.get(loginSelectors.userPasswordTxt).type(password, { log: false })
    cy.get(loginSelectors.loginBtn).click()
})