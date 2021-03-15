import "cypress-iframe";

class TrialBalanceReportPage {

    detailed="#reportTypeDetailed"
    generateRep="input[value='Generate']"
    message="#successContent > h1"
    main_iframe="iframe[name='iFrame1']";
    master_frame="iframe[name='masterFrame']";
    report_frame= "frame[name='mainFrame']";

    selectDetailed() {
        cy.switchToIframe(this.main_iframe).within((iframe) => {
           cy.switchToIframe(this.master_frame).within((iframe) => {
                cy.switchToIframe(this.report_frame).within((iframe) => {
                    cy.get(this.detailed, { timeout: 10000 })
                    .check()
                    .should('be.checked')
                });
            });
        });
    }
    generateReport(){
        cy.switchToIframe(this.main_iframe).within((iframe) => {
            cy.switchToIframe(this.master_frame).within((iframe) => {
                 cy.switchToIframe(this.report_frame).within((iframe) => {
                     cy.get(this.generateRep, { timeout: 10000 })
                     .click({force:true})
                     cy.wait(5000)
                 });
             });
         });
        }
        messageOnPage(){
            cy.switchToIframe(this.main_iframe).within((iframe) => {
                cy.switchToIframe(this.master_frame).within((iframe) => {
                     cy.switchToIframe(this.report_frame).within((iframe) => {
                        cy.log(this.message)
                        return cy.get(this.message)
                     });
                 });
             });
        }
  
    
    
}

export const trialBalanceReportPage = new TrialBalanceReportPage();
