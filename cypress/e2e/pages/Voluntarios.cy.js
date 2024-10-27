export class Voluntarios {
  // Visitar tela "Voluntários"
  irParaTelaDeVoluntarios() {
    return cy.visit("https://acolhe-disciplina.innovagovlab.org/volunteers");
  }

  // Selecionar botão de cadastrar novo voluntário
  botaoCadastrarNovoVoluntario() {
    return cy
      .get(".flex > .volunteer-add-button > .mdc-button__label > span")
      .click();
  }

  // Selecionar campo de CPF
  getInputCpf() {
    return cy.get("#cpf");
  }

  // Selecionar campo de Nome
  getInputNome() {
    return cy.get("#name");
  }

  // Selecionar campo de Telefone
  getInputTelefone() {
    return cy.get("#telephone");
  }

  // Selecionar campo de Habilidades
  getInputHabilidades() {
    return cy.get("#skills");
  }

  // Selecionar disponibilidade específica
  selecionarDisponibilidade(opcaoN) {
    return cy
      .get("mat-option")
      .eq(`${opcaoN - 1}`)
      .click();
  }

  // Selecionar dropdown de Disponibilidade
  getInputDisponibilidade() {
    return cy
      .get(
        ".volunteer-form__availabilities > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex"
      )
      .click();
  }

  // Fechar o dropdown se Disponibilidade
  fecharDropdownDisponibilidade() {
    return cy.get("body").click();
  }

  // Selecionar botão de confirmar cadastro
  botaoConfirmarCadastro() {
    return cy.get(".mdc-button__label > .ng-star-inserted").click();
  }
}
