/* eslint-disable no-undef */

describe("My First Test", () => {
  it("Finds particular tag", () => {
    cy.visit("localhost:3000");
    // .contain for Content
    // .get for css identifiers same query selector
    cy.get("p").contains("Edit");
    cy.get("code").contains("I cant be changed");
    cy.get("p").contains("and save to reload.");
    cy.get("img").should("have.attr", "src");
    // a11y
    cy.get("img").should("have.attr", "alt");
    cy.get('[alt="logo"]');
    cy.get("a").click();
    // url gives current
    cy.url().should("include", "/test");
  });
});
