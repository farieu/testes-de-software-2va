export class Abrigos {
  // Visitar tela "Abrigos"
  irParaTelaDeAbrigos() {
    return cy.visit("https://acolhe-disciplina.innovagovlab.org/shelters");
  }

  // Selecionar a barra de pesquisa de abrigos
  selecionarBarraDePesquisa() {
    return cy.get(
      ".flex-col > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex"
    );
  }

  // Ordena a lista de abrigos por nome
  ordenarAbrigosPorNome() {
    return cy
      .get(
        ".cdk-column-name > .mat-sort-header-container > .mat-sort-header-content"
      )
      .click();
  }

  // Aguarda a lista de abrigos ser carregada
  aguardarCarregamentoDeAbrigos() {
    return cy.get(".mdc-data-table__content").should("be.visible");
  }

  // Selecionar o n-ésimo filho da lista de abrigos
  selecionarAbrigoN(nthChild) {
    return cy
      .wait(1000)
      .get(
        `.mdc-data-table__content > :nth-child(${nthChild}) > .cdk-column-name`
      )
      .click();
  }

  // Selecionar aba "Acolhidos"
  selecionarAbaAcolhidos(n) {
    cy.get(`#mat-tab-label-${n}-3`).click();
  }

  // Selecionar opção "Ações" do n-ésimo filho
  selecionarOpcaoAcoes(nthChild) {
    return cy
      .get(
        `.mdc-data-table__content > :nth-child(${nthChild}) .family-actions-inline`
      )
      .click();
  }

  // Selecionar a opção "Saída do Abrigo"
  selecionarSaidaAbrigo() {
    return cy.get(".mat-mdc-menu-content > :nth-child(4)").click();
  }

  // Confirmar saída da família do abrigo
  confirmarSaidaAbrigo() {
    return cy.get(".mdc-button__label > .ng-star-inserted").click();
  }

  // Selecionar botão de importar família
  importarFamilia() {
    return cy.get(".mdc-button__label > span").click();
  }

  // Selecionar campo de pesquisa
  campoPesquisarFamilia() {
    return cy.get(
      ".family-checkin__search > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex"
    );
  }

  // Selecionar botão de buscar o responsável pela família
  buscarResponsavel() {
    return cy.get(".mdc-button__label > .ng-star-inserted").click();
  }

  // Selecionar botão de reativar família
  reativarFamilia() {
    return cy
      .get(
        ".mat-mdc-tooltip-trigger > .fuse-mat-button-medium > .mdc-button__label > .ng-star-inserted"
      )
      .click();
  }

  // Selecionar botão de cadastrar família
  cadastrarFamilia() {
    return cy
      .get(".shelter-add-button > .mdc-button__label > .ng-star-inserted")
      .click();
  }

  // Selecionar botão de adicionar família manualmente
  botaoAdicionarManualmente() {
    return cy
      .get(
        ".dialog__buttons-right > .fuse-mat-button-medium > .mdc-button__label > span"
      )
      .click();
  }

  // Selecionar campo de CEP
  getInputCep() {
    return cy.get("#zipCode");
  }

  // Selecionar campo de número da residência afetada
  getInputNumero() {
    return cy.get("#number");
  }

  // Selecionar campo de telefone
  getInputTelefone() {
    return cy.get("#phone1");
  }

  // Selecionar dropdown de moradia atingida
  getInputMoradiaAtingida() {
    return cy.get("#mat-select-value-7").click();
  }

  // Selecionar opção N no dropdown de moradia atingida
  selecionarOpcaoDeAfetoNaMoradia(opcaoN) {
    return cy
      .get("mat-option")
      .eq(`${opcaoN - 1}`)
      .click();
  }

  // Selecionar campo de bens perdidos
  getInputBensPerdidos() {
    return cy.get("#bensPerdidosEmergencia");
  }

  // Selecionar botão de adicionar membroda família
  botaoAdicionarMembroDaFamilia() {
    return cy
      .get(
        ".family-form__add-button > .fuse-mat-button-medium > .mdc-button__label > span"
      )
      .click();
  }

  // Selecionar campo de nome do membro da família
  getInputNomeDoMembro() {
    return cy.get("#name");
  }

  // Selecionar dropdown de gênero do membro da família
  getInputGeneroDoMembro() {
    return cy.get("#mat-select-value-11").click();
  }

  // Selecionar opção N no dropdown de gênero
  selecionarGenero(genero) {
    return cy
      .get("mat-option")
      .eq(`${genero - 1}`)
      .click();
  }

  // Abrir o seletor de data
  abrirSeletorDeData() {
    return cy
      .get(".person-form__body")
      .find('[formcontrolname="birthdate"]')
      .click();
  }

  // Abrir o seletor de ano
  abrirSeletorDeAno() {
    return cy.get(".mat-calendar-period-button");
  }

  // Selecionar ano yyyy
  selecionarAno(ano) {
    return cy.get(".mat-calendar-body-cell").contains(ano).click();
  }

  // Selecionar mês mm
  selecionarMes(mes) {
    return cy.get(".mat-calendar-body-cell").contains(mes).click();
  }

  // Selecionar dia dd
  selecionarDia(dia) {
    return cy.get(".mat-calendar-body-cell").contains(dia).click();
  }

  // Selecionar campo de CPF do membro da família
  getInputCpfMembroDaFamilia() {
    return cy.get("#cpf");
  }

  // Selecionar dropdown de cor do membro
  getInputCorDeclarada() {
    return cy.get("#mat-select-value-13").click();
  }

  // Selecionar opção N no dropdown de cor declarada
  selecionarCorDeclarada(opcaoCor) {
    return cy
      .get("mat-option")
      .eq(opcaoCor - 1)
      .click();
  }

  // Marcar checkbox indicando que a pessoa a responsável pela família
  marcarCheckboxResponsavel() {
    return cy.get("#mat-mdc-checkbox-5-input").click();
  }

  // Selecionar botão de confirmação de adição de membro
  botaoConfirmarAdicaoDeMembro() {
    return cy
      .get(
        ".dialog__buttons > .dialog__buttons-right > .fuse-mat-button-medium > .mdc-button__label > .ng-star-inserted"
      )
      .click();
  }
}
