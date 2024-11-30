/// <reference types="cypress"/>
import loginPage from "../../../pom/login.cy";

describe('Login Feature', () =>{
    it('user Login with invalid credentials', () =>{
        loginPage.visitPage();
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('ilham');
        loginPage.inputPassword().type('ilham123');
        loginPage.buttonLogin().click();
        cy.get('p').contains('Invalid credentials').should('have.text','Invalid credentials');
    })
})