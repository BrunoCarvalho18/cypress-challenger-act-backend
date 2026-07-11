import { faker } from '@faker-js/faker'

describe("Cadastrar", () => {

  it("Should registration successfully", () => {

    const body = {
      "nome": "Fulano da Silva",
      "email": faker.internet.email(),
      "password": "teste@123",
      "administrador": "true"
    };

    cy.request({
      method: "POST",
      url: "/usuarios",
      body
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
    });

  });

  it("Registration unsuccessful", () => {

    const body = {
      "nome": "Fulano da Silva",
      "email": "beltrano@qa.com.br",
      "password": "teste@123",
      "administrador": "true"
    };

    cy.request({
      method: "POST",
      url: "/usuarios",
      body,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("Este email já está sendo usado");
    });

  });

});