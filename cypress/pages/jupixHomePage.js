import "cypress-iframe";

class JupixHomePage {

    guide_button = "a[title='Guide']";
    main_iframe="iframe[name='iFrame1']";
    master_frame="iframe[name='masterFrame']";
    left_frame= "frame[name='leftFrame']";

    checkGuideBtn() {
        cy.switchToIframe(this.main_iframe).within((iframe) => {
           cy.switchToIframe(this.master_frame).within((iframe) => {
                cy.switchToIframe(this.left_frame).within((iframe) => {
                    cy.get(this.guide_button)
                    .should('have.attr', 'href')
                    .and('contain', '/kb')
                });
            });
        });
    }
}

export const jupixHomePage = new JupixHomePage();
