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
            Then   I see the message "Senha inválida."


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