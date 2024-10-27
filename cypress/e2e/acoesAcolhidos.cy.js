import { Acolhidos } from "./pages/Acolhidos.cy";

const acolhidos = new Acolhidos();

describe("Testa as ações disponíveis para famílias acolhidas", () => {
  beforeEach(() => {
    cy.apiLogin();
  });

  it("Teste de ações disponíveis", () => {
    acolhidos.irParaTelaDeAcolhidos();
    acolhidos.selecionarFiltroFamilias();
    acolhidos.filtrarPorAbrigados();
    cy.wait(2000);
    acolhidos.selecionarAcoesAbrigados();
    acolhidos
      .getOpcoesDeAcoes()
      .children()
      .its("length")
      .then((count) => {
        cy.log("Quantidade de filhos:", count); // Exibe a quantidade de filhos no console
        expect(count).to.be.eq(3);
      });
  });
});
