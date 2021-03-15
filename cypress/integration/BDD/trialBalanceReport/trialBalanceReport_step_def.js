import { Given, When, Then, Before, And } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from "../../../pages/loginPage"
import { mainNavBarPage } from "../../../pages/mainNavBarPage"
import { residentialLettingsPage} from "../../../pages/residentialLettingsPage"
import {trialBalanceReportPage} from "../../../pages/trialBalanceReportPage"

//Given steps

Given("I am logged in Jupix", function () {
    cy.visit(Cypress.env('stage_url'));
   // loginPage.fill_login_details();
   loginPage.fill_login_details_apiOnly();
})

//When steps
When("I navigate to Residential Lettings", function () {
 mainNavBarPage.navigateToResidentialLettings();
})

//ANd Steps
And("I click on Reports",function(){
    residentialLettingsPage.navigateToReports();
    
    
})
And("I am on the Report page",function(){
    trialBalanceReportPage.selectDetailed()

})
And("I get a successful message",function(){
trialBalanceReportPage.messageOnPage().contains("Your report has been successfully generated")
})

//Then steps
Then("I can select Trial Balances Report from the list",function(){
    residentialLettingsPage.selectTrialBalanceReport();
})

Then("I can generate report",function(){
trialBalanceReportPage.generateReport()
})