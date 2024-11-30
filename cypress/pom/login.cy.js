export default class loginPage{
    static visitPage(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    static verifyLoginPage(){
        return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static buttonLogin(){
        return cy.get('[type="submit"]');
    }
    static dashboardPage(){
        return cy.get('h6').contains('Dashboard');
    }
    static Actionsummary(){
        return cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary');
    }
    static waitActionsummary(){
        return cy.wait('@actionSummary');
    }
   
}