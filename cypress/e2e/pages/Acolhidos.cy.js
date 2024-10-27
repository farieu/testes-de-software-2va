export class Acolhidos {
  irParaTelaDeAcolhidos() {
    return cy.visit(
      "https://acolhe-disciplina.innovagovlab.org/people-sheltered"
    );
  }

  selecionarFiltroFamilias() {
    return cy.get(".form-filters > :nth-child(1)").click();
  }

  filtrarPorAbrigados() {
    return cy.get("#mat-radio-4-input").click();
  }

  selecionarAcoesAbrigados() {
    return cy
      .get(".mdc-data-table__content > :nth-child(2) > .cdk-column-actions")
      .click();
  }

  getOpcoesDeAcoes() {
    return cy.get(".mat-mdc-menu-content");
  }
}
