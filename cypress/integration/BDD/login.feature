@Login

Feature: Sign in page

 Background:
    Given I visit Jupix login page 

 #Scenario: Login fails when i enter incorrect details
  #  When I enter incorrect credentials
   # Then I get a login failed message
    # And  I cannot access the system

 Scenario: Entering correct details should log you in successfull and can access Guide
   When I enter valid details
   Then I am logged in 
   And when I click on Guide
   Then I am taken to support 


#  Scenario: Connect to helpdesk link opens TeamViewer
#  Scenario: Download document editor downloads editor
#  Scenario: Forgot password link works



