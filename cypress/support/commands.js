// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("apiLogin", () => {
  cy.request({
    method: "POST",
    url: "https://acolhebe-disciplina.innovagovlab.org/api/v1/auth/login",
    body: {
      username: "roberto.oaraujo@ufrpe.br",
      password: "####",
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    const token = response.body;
    window.localStorage.setItem("accessToken", token);
  });
});
