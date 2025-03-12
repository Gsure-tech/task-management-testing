
describe("Task Management Automation", () => {
  beforeEach(() => {
    
    cy.visit("https://task-app-url.com");

    
    cy.get("#username").type("testusername");
    cy.get("#password").type("testPWD123");
    cy.get('button[type="submit"]').click();

    
    cy.url().should("include", "/dashboard");
  });

  it("should create a new task", () => {
    cy.get("#create-task-button").click();
    cy.get("#task-title").type("Automated Cypress Task");
    cy.get("#task-description").type(
      "This is a test task created using Cypress."
    );
    cy.get("#save-task-button").click();

    // Verify task creation
    cy.contains("Automated Cypress Task").should("exist");
  });

  it("should edit an existing task", () => {
    cy.get("#task-list").contains("Automated Cypress Task").click();
    cy.get("#edit-task-button").click();
    cy.get("#task-title").clear().type("Updated Cypress Task");
    cy.get("#save-task-button").click();


    cy.contains("Updated Cypress Task").should("exist");
  });

  it("should delete a task", () => {
    cy.get("#task-list").contains("Updated Cypress Task").click();
    cy.get("#delete-task-button").click();
    cy.get("#confirm-delete").click();


    cy.contains("Updated Cypress Task").should("not.exist");
  });

  it("should assign a task to a user", () => {
    cy.get("#task-list").contains("Automated Cypress Task").click();
    cy.get("#assign-user-dropdown").click();
    cy.get(".user-list-item").contains("John Doe").click();
    cy.get("#save-assignment").click();

    
    cy.contains("Assigned to John Doe").should("exist");
  });

  it("should add a comment to a task", () => {
    cy.get("#task-list").contains("Automated Cypress Task").click();
    cy.get("#comment-box").type("This is a test comment");
    cy.get("#post-comment-button").click();

    
    cy.contains("This is a test comment").should("exist");
  });

  it("should attach a file to a task", () => {
    cy.get("#task-list").contains("Automated Cypress Task").click();
    cy.get("#file-upload").attachFile("test-document.pdf");
    cy.get("#save-attachment").click();

    
    cy.contains("test-document.pdf").should("exist");
  });

  it("should verify cross-browser compatibility", () => {
    cy.viewport("macbook-15"); 
    cy.visit("https://your-task-app-url.com");
    cy.viewport("iphone-6"); 
    cy.reload();

  
    cy.get("#navbar").should("be.visible");
  });
});
