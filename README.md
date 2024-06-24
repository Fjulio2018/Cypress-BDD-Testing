# Cypress Cucumber Project

This project is set up to use Cypress and Cucumber for end-to-end testing.

## Project Structure

cypress-cucumber-project
├── cypress
│   ├── e2e
│   │   ├── features
│   │   │   └── login.feature
│   ├── support
│   │   ├── step_definitions
│   │   │   └── login_steps.js
│   │   ├── pages
│   │   │   └── Login.js
├── node_modules
├── cypress.config.js
├── package.json
└── package-lock.json




## Getting Started

### Prerequisites

- Node.js and npm installed
- Cypress and Cucumber preprocessor installed

### Installation

1. Install dependencies
    ```sh
     npm init -y
     npm install cypress
     npx cypress instal --force
     npm install @badeball/cypress-cucumber-preprocessor
     npm install @bahmutov/cypress-esbuild-preprocessor
    ```

### Running Tests

To open the Cypress Test Runner, use the following command:

```sh
npx cypress open


### BDD

Feature: Login

    Feature Description: 
    As a client
    I want to log in to the application
    To shop online

    Scenario: Login with the empty fields
        Given   I am on the login screen
        When    I click on login
        Then    I see the message "E-mail inválido."


     Scenario: Login with empty password field
         Given  I am on the login screen
         And    I fill just in the e-mail
         When   I click on login     
         Then   I see the message "Invalid password."


     Scenario: Login with empty e-mail field
         Given   I am on the login screen
         And     I fill just in the password
         When    I click on login     
         Then    I see the message "E-mail inválido."     


     Scenario: Successful login
         Given   I am on the login screen
         And     I will fill in the correct credentials
         When    I click on login     
         Then    I see the sucess message 