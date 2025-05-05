import {registerSelectors} from "../POM/registerSelectors";

const data = {
    firstName: "John",
    lastName: "Doe",
    email: "testemail@gmail.com",
    address: "123 Main St",
    city: "Anytown",
    state: "Aberdeen",
    postalCode: "12345",
    userName: "vidauri19",
    password: "testpass",
    confirmPass: "testpass"
}

describe('Register User spec', () => {
  it('register a user', () => {
    cy.visit('/')
    cy.get(registerSelectors.loginRegisterLink).click()
    cy.get(registerSelectors.continueRegistrationBtn).click()
    cy.fillRegistrationForm(data);
    cy.submitRegistrationForm();
  })
})