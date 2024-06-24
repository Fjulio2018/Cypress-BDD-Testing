/// <reference types="cypress"/>
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import Home_Page from "../pages/Home_Page";
import LoginPage from "../pages/Login_Page";
import MyAccount from "../pages/MyAccount_Page";

lpg = new LoginPage;
mac = new MyAccount;

Given("I am on the login screen", () => {
    Home_Page.acessLogin();

})

Given("I fill just in the e-mail", () => {
    lpg.fillUserField('fjulio@msn.com')
    
})

Given("I fill just in the password", () => {
    lpg.fillPasswordField('Xpto@123')
    
})

Given("I will fill in the correct credentials", () => {
    lpg.fillUserField('fjulio@msn.com')
    lpg.fillPasswordField('Xpto@123')
    

})


When("I click on login", () => {
    lpg.clickLoginButton() ;
    
})


Then("I see the message {string}", (massage) => {
    
})

Then("I see the sucess message", () =>{
    mac.seeSucessMsg();

})