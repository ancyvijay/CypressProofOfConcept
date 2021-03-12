import "cypress-iframe";

const getIframeDocument = (selector) => {
    return (
        cy
            .get(`${selector}`)
            // Cypress yields jQuery element, which has the real
            // DOM element under property "0".
            // From the real DOM iframe element we can get
            // the "document" element, it is stored in "contentDocument" property
            // Cypress "its" command can access deep properties using dot notation
            // https://on.cypress.io/its
            .its("0.contentDocument")
            .should("exist")
    );
};

const getIframeBody = (selector) => {
    // get the document
    return (
        getIframeDocument(selector)
            // automatically retries until body is loaded
            .its("body")
            .should("not.be.undefined")
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            .then(cy.wrap)
    );
};

class JupixHomePage {


    checkGuideBtn() {
        getIframeBody("iframe[name='iFrame1']").within((iframe) => {
            getIframeBody("iframe[name='masterFrame']").within((iframe) => {
                getIframeBody("frame[name='leftFrame']").within((iframe) => {
                    cy.get("a[title='Guide']")
                    .should('have.attr', 'href')
                    .and('contain', '/kb')
                });
            });
        });
    }
}

export const jupixHomePage = new JupixHomePage();
