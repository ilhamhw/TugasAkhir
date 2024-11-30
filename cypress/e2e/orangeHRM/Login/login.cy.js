/// <reference types="cypress"/>
import loginPage from "../../../pom/login.cy";

describe('Login Feature', () =>{
    it('user Login with valid credentials', () =>{
        loginPage.visitPage();
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        loginPage.Actionsummary().as('actionSummary');
        loginPage.buttonLogin().click();
        loginPage.waitActionsummary();
        loginPage.dashboardPage().should('have.text','Dashboard');
    })
    it('user Checking Add user', () =>{
        loginPage.visitPage();
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        loginPage.Actionsummary().as('actionSummary');
        loginPage.buttonLogin().click();
        loginPage.waitActionsummary();
        loginPage.dashboardPage().should('have.text','Dashboard');
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC').as('userlimit');
        cy.get('span').contains('Admin').click();
        cy.wait('@userlimit');
        cy.get('h6').contains('Admin').should('have.text','Admin');
        cy.get('[type="button"]').eq(5).click();
        cy.get('h6').contains('Admin').should('have.text','Admin');
    })
    it('user use coloumn search', () =>{
        loginPage.visitPage();
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        loginPage.Actionsummary().as('actionSummary');
        loginPage.buttonLogin().click();
        loginPage.waitActionsummary();
        loginPage.dashboardPage().should('have.text','Dashboard');
        cy.get('[placeholder="Search"]').click().type('Admin');
        cy.get('span').contains('Admin').should('have.text','Admin');
    })
    it('user checking about', () =>{
        loginPage.visitPage();
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        loginPage.Actionsummary().as('actionSummary');
        loginPage.buttonLogin().click();
        loginPage.waitActionsummary();
        loginPage.dashboardPage().should('have.text','Dashboard');
        cy.get('[alt="profile picture"]').eq(0).click();
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/core/about').as('about');
        cy.get('a').contains('About').click();
        cy.wait('@about');
        cy.get('h6').contains('About').should('have.text','About');
    })

})


