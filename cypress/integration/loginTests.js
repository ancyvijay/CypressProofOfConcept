import { loginPage } from "../../../../../pages/loginPage"
import {jupixHomePage} from "../../../../../pages/jupixHomePage"


describe('I am able to use the login page',()=>{
    it('I get an error message when I enter incorrect details',()=>{
        cy.visit(Cypress.env('stage_url'));
        loginPage.fill_incorrect_login_details();
        cy.get(loginPage.login_error_message).should('be.visible').contains('Your login details are invalid. Access Denied.')
        cy.checkUrl("/?error=2");
    })

    it('I can login successfully when enter correct details',()=>{
        cy.visit(Cypress.env('stage_url'));
        loginPage.fill_login_details();
        cy.checkUrl("/index4.php");
        jupixHomePage.checkGuideBtn();
      
    })
})