import "cypress-iframe";

class ResidentialLettingsPage {


    reports = 'td>a:contains("Reports")';
    trialBalanceReport = "Trial Balances Report"
    lettingsReportList = "#lettingsReports div"
    trialBalanceReport = "#lettingsReports div:contains('Trial Balances Report')"
    
    main_iframe = "iframe[name='iFrame1']";
    master_frame = "iframe[name='masterFrame']";
    top_frame = "frame[name='topFrame']";

    navigateToReports() {
       
            cy.switchToIframe(this.main_iframe).within((iframe) => {
                cy.switchToIframe(this.master_frame).within((iframe) => {
                    cy.switchToIframe(this.top_frame).within((iframe) => {
                        cy.get(this.reports)
                            .click({force:true})
                    

                    });
                });
            });
        }

    selectTrialBalanceReport(){
            cy.switchToIframe(this.main_iframe).within((iframe) => {
                cy.get(this.trialBalanceReport, {timeout:10000})
                    .click({force:true})
                    cy.log('clicked trial balance')
                    cy.wait(5000)
                 
            })

        }
}

    export const residentialLettingsPage = new ResidentialLettingsPage();
