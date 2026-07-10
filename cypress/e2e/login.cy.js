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
      expect(response.body.message).to.eq('Login realizado com sucesso');
    });

  });

});