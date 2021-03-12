import { Given, When, Then, Before, And } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from "../../../pages/loginPage"

//Given steps

Given("I am logged in Jupix", function () {
    cy.visit(Cypress.env('stage_url'));
    loginPage.fill_login_details();
})

//When steps
When("I navigate to Residential Lettings", function () {
    loginPage.fill_incorrect_login_details();
})

//ANd Steps
And("I click on Reports",function(){

})
And("I am on the Report page",function(){

})
And("I get a successful message",function(){

})

//Then steps
Then("I can select Trial Balances Report from the list",function(){

})

Then("I can generate report",function(){

})