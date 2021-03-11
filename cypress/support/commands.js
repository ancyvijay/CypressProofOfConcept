// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add("checkUrl",(pageUrl) => 
{
    cy.url().should('include', pageUrl)
    
})

Cypress.Commands.add("checkTitle", (pageTitle) => 
{
    cy.title().should('include', pageTitle)
})

Cypress.Commands.add('switchToIframe', (iframe)=>{
    return cy
    .get(iframe)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
    

});
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
