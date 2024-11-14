/// <reference types="cypress" />

describe("angular app", () => {
  let fixtureData;

  beforeEach("load from fixture", () => {
    cy.fixture("example").then((fd) => {
      fixtureData = fd;
    });
    cy.visit("http://localhost:4200");
  });

  it("displays the page header", () => {
    cy.get("[data-testid=page-header]").should(
      "have.text",
      "Angular Cypress e2e Testing"
    );
  });

  it("displays the default title", () => {
    cy.get("[data-testid=title-display]").should("have.text", "default title");
  });

  it("displays the typed in title after click", () => {
    cy.get("[data-testid=title-input]").clear();
    cy.get("[data-testid=title-input]").type(fixtureData.title);
    cy.get("[data-testid=set-title-button]").click();
    cy.get("[data-testid=title-display]").should(
      "have.text",
      fixtureData.title
    );
  });
});
