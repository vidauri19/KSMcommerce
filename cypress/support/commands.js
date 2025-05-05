import {registerSelectors} from "../POM/registerSelectors";
import {loginSelectors} from "../POM/loginSelectors";
Cypress.Commands.add('fillRegistrationForm', (userData) =>{
    cy.get(registerSelectors.userFirstNameTxt).type(userData.firstName)
    cy.get(registerSelectors.userLastNameTxt).type(userData.lastName)
    cy.get(registerSelectors.userEmailTxt).type(userData.email)
    cy.get(registerSelectors.userAddressTxt).type(userData.address)
    cy.get(registerSelectors.userCity).type(userData.city)
    cy.get(registerSelectors.userStateSel).select(userData.state)
    cy.get(registerSelectors.userPostalCodeTxt).type(userData.postalCode)
    cy.get(registerSelectors.userLoginNameTxt).type(userData.userName)
    cy.get(registerSelectors.userPasswordTxt).type(userData.password)
    cy.get(registerSelectors.userConfirmPasswordTxt).type(userData.confirmPass)
    cy.get(registerSelectors.agreeCbx).check()
})

Cypress.Commands.add('submitRegistrationForm',()=>{
    cy.get(registerSelectors.registerBtn).click()
})

Cypress.Commands.add('login',(username,password)=>{
    cy.get(loginSelectors.userNameTxt).type(username)
    cy.get(loginSelectors.userPasswordTxt).type(password)
    cy.get(loginSelectors.loginBtn).click()
})