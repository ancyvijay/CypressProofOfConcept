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
  // guide() {
  //     cy.frameLoaded("[name='iFrame1']", { timeout: 5000 })
  //    //cy.frameLoaded("[name='leftFrame']", { timeout: 5000 })
  //     cy.log('This is insdie Iframe and going to click on guide')
  //     return cy.iframe().find('a[title="Guide"]')
  // }
  // clickGuide() {
  //     cy.get("#leftFrame").within($iFrame=>{
  //         const iFrameContent = $iFrame.contents().find('a[title="Guide"]')
  //         cy.wrap(iFrameContent)
  //         .click()
  //     })
  // }

  clickGuide() {
    getIframeBody("iframe[name='iFrame1']").within((iframe) => {
      getIframeBody("iframe[name='masterFrame']").within((iframe) => {
        getIframeBody("frame[name='leftFrame']").within((iframe) => {
          cy.get(".welcomeSettings").click();
        });
      });
    });
  }
}
export const jupixHomePage = new JupixHomePage();
