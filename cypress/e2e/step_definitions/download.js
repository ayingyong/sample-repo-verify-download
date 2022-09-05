import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  Given("A user opens a testing site", () => {
    cy.visit("/");
  });

  When("user is on download page", () => {
    cy.visit("upload-download")
  });

  When("click Download button", (table) => {
    cy.get('a#downloadButton').click();
  });

  Then("verify file is downloaded", () => {
    cy.verifyDownload('.jpeg',{ contains: true});
  });