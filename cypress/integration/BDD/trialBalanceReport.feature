@TialBalanceReport

Feature: Generate trial balance report

 Background:
    Given I am logged in Jupix 

 Scenario: Report is generated successfully and can be downloaded
   When I navigate to Residential Lettings
   And I click on Reports
   Then I can select Trial Balances Report from the list
   And I am on the Report page
   Then I can generate report
   And I get a successful message

    