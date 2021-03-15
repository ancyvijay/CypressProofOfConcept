import "cypress-iframe";

class MainNavBarPage {

    residential_lettings = "Residential Lettings";
    main_iframe="iframe[name='iFrame1']";
    master_frame="iframe[name='masterFrame']";
    top_frame= "frame[name='topFrame']";

    navigateToResidentialLettings() {
        cy.switchToIframe(this.main_iframe).within((iframe) => {
           cy.switchToIframe(this.master_frame).within((iframe) => {
                cy.switchToIframe(this.top_frame).within((iframe) => {
                    cy.contains(this.residential_lettings)
                    .click()
                    cy.wait(5000)
                   
                });
            });
        });
    }
}

export const mainNavBarPage = new MainNavBarPage();
