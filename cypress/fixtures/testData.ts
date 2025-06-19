export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    userName: string;
    password: string;
    confirmPass: string;
}

export const testUser: UserData = {
    firstName: "John",
    lastName: "Doe",
    email: "testemail@gmail.com",
    address: "123 Main St",
    city: "Anytown",
    state: "Aberdeen",
    postalCode: "12345",
    userName: Cypress.env('TEST_USER_USERNAME') || "vidauri19",
    password: Cypress.env('TEST_USER_PASSWORD') || "testpass",
    confirmPass: Cypress.env('TEST_USER_PASSWORD') || "testpass"
}

export const productData = {
    searchTerm: "lancome",
    expectedProductName: "Lancome Visionnaire"
} 