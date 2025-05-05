import {registerSelectors} from "../POM/registerSelectors";

let data = {
    userName: "vidauri19",
    password: "testpass",
};
describe('Login User spec', () => {
    it('login as a user', () => {
        cy.visit('/');
        cy.get(registerSelectors.loginRegisterLink).click()
        cy.login(data.userName, data.password);
    })
})