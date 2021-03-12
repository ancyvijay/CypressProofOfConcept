import "cypress-iframe";

class JupixHomePage {
   
    checkGuideBtn() {
        cy.switchToIframe("iframe[name='iFrame1']").within((iframe) => {
           cy.switchToIframe("iframe[name='masterFrame']").within((iframe) => {
                cy.switchToIframe("frame[name='leftFrame']").within((iframe) => {
                    cy.get("a[title='Guide']")
                    .should('have.attr', 'href')
                    .and('contain', '/kb')
                });
            });
        });
    }
}

export const jupixHomePage = new JupixHomePage();
