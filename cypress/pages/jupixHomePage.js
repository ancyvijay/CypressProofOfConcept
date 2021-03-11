import 'cypress-iframe'

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

    clickGuide(){
        cy.get("#mainFrameset")
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
        .find('#leftFrame')
        .its('0.contentDocument.body').should('not.be.empty')
        .find('a[title="Guide"]')
        .then(cy.wrap)
        .click()
    }

    // clickGuide() {
    //     cy.get("[name='iFrame1']")
    //         .its('0.contentDocument.body')
    //         .should('not.be.empty')
    //         .then((value)=>{
    //         console.log(value)
    //         cy.debug()
    //         })
    // }


    // clickGuide(){
    //     cy.get('#mainFrameset').within($frame =>{
    //         const [left_frame]=$frame.get()
    //         const guide =  left_frame.contentDocument.body.getElementByTagName('frame')[3]
    //                         .contentDocument.body.querySelector('a[title="Guide"]').click()
    //     })
    // }

    // clickGuide() {

    //     this.guide().click()
    //     cy.log('After clicking guide')
    // }


}
export const jupixHomePage = new JupixHomePage()