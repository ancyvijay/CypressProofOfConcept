import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from "../../../pages/loginPage"
import {jupixHomePage} from "../../../pages/jupixHomePage"

//Given steps

Given("I visit Jupix login page", function () {
    cy.visit(Cypress.env('stage_url'));
})

//When steps
When("I enter incorrect credentials", function () {
    loginPage.fill_incorrect_login_details();
})
When("I enter valid details", function () {
    loginPage.fill_login_details();
})


// Then steps
Then("I get a login failed message", function () {
    cy.get(loginPage.login_error_message).should('be.visible').contains('Your login details are invalid. Access Denied.')
})
Then("I am logged in", function () {
    cy.checkUrl("/index4.php");
})

// And STeps
And("I cannot access the system", function () {
    cy.checkUrl("/?error=2");
})
And("I can see the correct link on Guide", function () {
  jupixHomePage.checkGuideBtn()
   
})