import { Abrigos } from "./pages/Abrigos.cy";

const abrigos = new Abrigos();

describe("Testa a transferência de acolhidos entre abrigos", () => {
  beforeEach(() => {
    cy.apiLogin();
  });

  let cpfResponsavel = "";

  it("Transferência de acolhidos", () => {
    // 1. Ir para tela de abrigos
    abrigos.irParaTelaDeAbrigos();
    abrigos.ordenarAbrigosPorNome();

    // 2. Selecionar "Abrigo 01 - Grupo CJ"
    abrigos.aguardarCarregamentoDeAbrigos();
    abrigos.selecionarAbrigoN(3);
    cy.url().should(
      "eq",
      "https://acolhe-disciplina.innovagovlab.org/shelters/38"
    );

    // 3. Na tela do abrigo, selecionar a aba "Acolhidos"
    abrigos.selecionarAbaAcolhidos(0);

    // 4. Copiar o CPF do responsável da primeira família
    cy.get(".mdc-data-table__content > :nth-child(1) .person-inline__cpf")
      .should("be.visible")
      .invoke("text")
      .then((cpf) => {
        cpfResponsavel = String(cpf).trim();
        cy.log("CPF copiado: ", cpfResponsavel);

        // 5. Na família abrigada, selecionar a opção "Ações" da primeira família
        abrigos.selecionarOpcaoAcoes(1);

        // 6. Ao abrir a opção de ações, selecionar a opção "Saída do Abrigo"
        abrigos.selecionarSaidaAbrigo();

        // 7. Clicar no botão "Confirmar";
        abrigos.confirmarSaidaAbrigo();
        cy.wait(1000);
      });

    // 8. Voltar para tela de abrigos
    abrigos.irParaTelaDeAbrigos();
    abrigos.ordenarAbrigosPorNome();

    // 9. Selecionar "Abrigo 02 - Grupo CJ"
    abrigos.aguardarCarregamentoDeAbrigos();
    abrigos.selecionarAbrigoN(4);
    cy.url().should(
      "eq",
      "https://acolhe-disciplina.innovagovlab.org/shelters/45"
    );

    // 10. Na tela do abrigo, selecionar a aba "Acolhidos"
    abrigos.selecionarAbaAcolhidos(0);

    // 11. Clicar no botão de importar família
    abrigos.importarFamilia();

    // 12. Inserir o CPF do responsável e clicar no botão "Buscar"
    abrigos
      .campoPesquisarFamilia()
      .should("be.visible")
      .then(($input) => {
        // Força o valor do CPF a ser string ao digitar no campo
        cy.wrap($input).clear().type(String(cpfResponsavel));
      });
    abrigos.buscarResponsavel();

    // 13. Clicar no botão "Reativar";
    abrigos.reativarFamilia();

    // 14. Clicar no botão "Cadastrar";
    abrigos.cadastrarFamilia();
  });
});
