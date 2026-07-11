describe("Login", () => {

  it("Should login successfully", () => {

    const body = {
      email: "brunocarvalhodesa@gmail.com",
      password: "Teste@123"
    };

    cy.request({
      method: "POST",
      url: "/login",
      body
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Login realizado com sucesso");
    });

  });

  it("Should not log in with invalid credentials", () => {

    const body = {
      email: "fulano@qa.com",
      password: "teste12414"
    };

    cy.request({
      method: "POST",
      url: "/login",
      body,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq("Email e/ou senha inválidos");
    });

  });

});