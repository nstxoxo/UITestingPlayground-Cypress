import "cypress-wait-until";
require("@cypress/xpath");
require("@shelex/cypress-allure-plugin");

context("Launching the main page", () => {
  beforeEach(() => {
    cy.visit("http://uitestingplayground.com/");
  });

  describe("UI Test Automation", () => {
    it("Check Dynamic ID", () => {
      cy.contains("Dynamic ID").click();
      cy.get(".btn-primary").should("have.class", "btn btn-primary");
    });

    it("Click on the JS Alert and check Class Attribute", () => {
      cy.contains("Class Attribute").click();
      cy.get(".class2").as("middleBtn");
      cy.get("@middleBtn").click();
      cy.get("@middleBtn").should("be.enabled");
    });

    it("Check Hidden Layers", () => {
      cy.contains("Hidden Layers").click();
      cy.get(".btn.btn-success").should("have.id", "greenButton").click();
      cy.get(".btn.btn-primary").click().should("have.id", "blueButton");
    });

    it("Set a new button name and check the changes", () => {
      cy.contains("Text Input").click();
      cy.get(".form-control")
        .type("New Button")
        .should("have.value", "New Button");
      cy.get(".btn-primary").click();
      cy.get(".btn-primary").should("have.text", "New Button");
    });

    it("Find an element by displayed text has nuances", () => {
      cy.contains("Verify Text").click();
      cy.xpath("//span[normalize-space(.)='Welcome UserName!']").should(
        "contain",
        "Welcome UserName!"
      );
    });

    it("Sample App", () => {
      cy.contains("Sample App").click();
      cy.get('[name="UserName"]').type("UserName");
      cy.get('[name="Password"]').type("pwd");
      cy.get("#login").click();
      cy.get("#loginstatus").should("have.text", "Welcome, UserName!");
    });

    it("Execute the test and check that click count is increasing by 2", () => {
      cy.contains("Mouse Over").click();
      cy.get('[onmouseenter="linkActive(this)"]').dblclick();
      cy.get("#clickCount").should("have.text", "2");
    });

    it("Check locator with non-breaking space", () => {
      cy.contains("Non-Breaking Space").click();
      cy.get(".btn-primary")
        .filter(':contains("Button")')
        .should("have.length", 1);
    });

    it("Check overlapped element", () => {
      cy.contains("Overlapped Element").click();
      cy.get("#id").type("12345");
      cy.get("#name").scrollIntoView().should("be.visible").type("User1");
    });

    it("Progress Bar", () => {
      cy.contains("Progress Bar").click();
      cy.get("#startButton").click();
      cy.waitUntil(() => {
        return cy
          .get("#progressBar", { timeout: 180000 })
          .should("have.text", "75%");
      }).then(() => {
        cy.get("#stopButton").click();
      });
    });
  });
});
