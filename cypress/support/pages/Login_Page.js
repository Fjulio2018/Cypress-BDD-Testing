/// <reference types="cypress" />

class LoginPage {
    constructor() {
      this.userField = '#user';
      this.passwordField ='#password';
      this.loginButton = '#btnLogin';
      this.invalidEmailInput ='.invalid_input';
      
    }
  
    visit() {
      cy.visit('/login'); // Substitua '/login' pela URL real da tela de login
    }
  
    fillUserField(user) {
      cy.get(this.userField).type(user);
    }
    fillPasswordField(password) {
        cy.get(this.passwordField).type(password);
      }
  
    clickLoginButton() {
      cy.get(this.loginButton).click();
    }
  
    seeMessage(message) {
      cy.contains(message).should('be.visible');
    }
  }
  
  export default LoginPage;
  