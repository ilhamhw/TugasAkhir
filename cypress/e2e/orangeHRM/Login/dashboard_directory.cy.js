/// <reference types="cypress"/>
import loginPage from "../../../pom/login.cy";

describe('Login Dashboard Directory', () =>{
    it('user Checking', () =>{
        loginPage.visitPage();
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        loginPage.Actionsummary().as('actionSummary');
        loginPage.buttonLogin().click();
        loginPage.waitActionsummary();
        loginPage.dashboardPage().should('have.text','Dashboard');
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0').as('limit');
        cy.get('span').contains('Directory').click();
        cy.wait('@limit');
        cy.get('h6').contains('Directory').should('have.text','Directory');
        cy.get('[placeholder="Type for hints..."]').type('Peter');
        cy.get('span').contains('Peter Mac Anderson').click();
        cy.get('[class="oxd-select-text--after"]').eq(0).click();
        cy.get('span').contains('Chief Financial Officer').click();
        cy.get('[class="oxd-select-text--after"]').eq(1).click();
        cy.get('span').contains('New York Sales Office').click();
        cy.get('[type="submit"]').click();
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees/3?model=detailed').as('model');
        cy.get('[alt="Profile Picture"]').click();
        cy.wait('@model');
    })
})