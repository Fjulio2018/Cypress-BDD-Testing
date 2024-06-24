/// <reference types="cypress" />


class MyAccount {
    constructor(){

        this.poupupMSG = '.swal2-popup'

       this.userLoggedName =  '#userLogged'
    }

    seeSucessMsg(){
        cy.get('.swal2-popup')
            .contains('fjulio@msn.com').should('be.visible');

    }

    seeUserLeggedName(){

    }

}

export default MyAccount;