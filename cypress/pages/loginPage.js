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

    fill_login_details() {
        cy.fixture("credentials").then((userData) => {
            cy.get(this.company_username).click({ force: true }).type(userData.company_username);
            cy.get(this.personal_username).click({ force: true }).type(userData.personal_username);
            cy.get(this.password).click({ force: true }).type(userData.password);
            this.submitForm()
        });
    }

    fill_incorrect_login_details() {
        cy.get(this.company_username).click({ force: true }).type(this.randomText);
        cy.get(this.personal_username).click({ force: true }).type(this.randomText);
        cy.get(this.password).click({ force: true }).type(this.randomText);
        this.submitForm()
    }


    submitForm() {
        cy.get('input[name="Submit"]').click();
    }
}
export const loginPage = new LoginPage()