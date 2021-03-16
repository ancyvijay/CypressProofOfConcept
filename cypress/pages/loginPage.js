import { mainNavBarPage } from "./mainNavBarPage";

class LoginPage {

    constructor() {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var randomText = '';
        for (var i = 0; i < 15; i++) {
            randomText += chars[Math.floor(Math.random() * chars.length)];
        }
        this.randomText = randomText
    }
    company_username = "#company-username";
    personal_username = "#personal-username";
    password = "#password-input";
    login_error_message = ".error-message";
     company_username_val= Cypress.env('stage_company_name');
     username_val= Cypress.env('stage_username');
     password_val= Cypress.env('stage_password');
     stage_url=Cypress.env('stage_url')

    //  company_username_val= Cypress.env('live_company_name');
    //  username_val= Cypress.env('live_username');
    //  password_val= Cypress.env('live_password');
    //  stage_url=Cypress.env('live_url')

    fill_login_details() {
        // cy.fixture("credentials").then((userData) => {
        //     cy.get(this.company_username).click({ force: true }).type(userData.company_username);
        //     cy.get(this.personal_username).click({ force: true }).type(userData.personal_username);
        //     cy.get(this.password).click({ force: true }).type(userData.password);
        //     this.submitForm()
        // });
        cy.get(this.company_username).click({ force: true }).type(this.company_username_val);
        cy.get(this.personal_username).click({ force: true }).type(this.username_val);
        cy.get(this.password).click({ force: true }).type(this.password_val);
        this.submitForm();

    }
    fill_login_details_apiOnly(){
     const clientUsername=this.company_username_val
     const username= this.username_val;
     const password=  this.password_val;
     const url= this.stage_url;
     const Submit='Sign In'
     

        cy.request({
            method: 'POST',
            url: '/login',
            form: true,
            body: {
                clientUsername,
                username,
                password,
                Submit
               
            }
          })
          expect(response.status).to.eq(302)
    }

    fill_incorrect_login_details() {
        cy.get(this.company_username).click({ force: true }).type(this.randomText);
        cy.get(this.personal_username).click({ force: true }).type(this.randomText);
        cy.get(this.password).click({ force: true }).type(this.randomText);
        this.submitForm()
       // return mainNavBarPage()
    }


    submitForm() {
        cy.get('input[name="Submit"]').click();
    }
}
export const loginPage = new LoginPage()