/// <reference types="Cypress" />

context("Test firing up cypress", () => {
    it("Should be able to run on sites that has valid certificate", () => {
        cy.visit("https://localhost:8443");
        cy.contains("Hello World from SSL-enabled Spring Application")
    })
})