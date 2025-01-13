describe("login test", () => {
  it("log in with wrong mail test@test.com", () => {
    cy.visit("/");
    cy.login(" ", "test");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("log in with wrong password test@test.com", () => {
    cy.visit("/");
    cy.login("test@test.com", "qwerty");
    cy.get(".mb-3").should("be.visible");
  });

  it("successful log in test@test.com", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Log out").should("be.visible");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });
});

describe("my favorite books", () => {
  it("add book", () => {
    cy.visit("/");
    cy.testLogin();
    cy.contains("Add new").click();
    cy.get(".modal-title").should("be.visible");
    cy.get("#title").type("Гарри Поттер и философский камень");
    cy.get("#description").type(
      "Первая часть большой франшизы о маленьком волшебнике"
    );
    cy.get("#authors").type("Дж.К. Роулинг");
    cy.get("#favorite").click();
    cy.contains("Submit").click();
    cy.contains("Гарри Поттер и философский камень").should("be.visible");
  });

  it("remove all books from favorites", () => {
    cy.visit("/");
    cy.testLogin();
    cy.contains("Favorites").click();
    cy.contains("Гарри").should("be.visible");
    cy.contains("Delete from favorite").each(($btn) => {
      cy.wrap($btn).click();
    });
    cy.contains("Please add").should("be.visible");
  });

  it("add to favorite from Books list", () => {
    cy.visit("/");
    cy.testLogin();
    cy.contains('Add to favorite').click();
    cy.contains('Delete from favorite').should("be.visible")
  });
});
