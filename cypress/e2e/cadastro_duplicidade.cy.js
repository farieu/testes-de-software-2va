import { Abrigos } from "./pages/Abrigos.cy";

const abrigos = new Abrigos();

describe("Falha no Cadastro da Família por Duplicação de Pessoas", () => {
  beforeEach(() => {
    cy.apiLogin();
  });

  it("Tentativa de cadastrar famílias com pessoas já cadastrada no sistema.", () => {
    abrigos.irParaTelaDeAbrigos();
    abrigos.selecionarBarraDePesquisa().type("CJ");
    abrigos.aguardarCarregamentoDeAbrigos();
    abrigos.selecionarAbrigoN(1);

    cy.url().should(
      "eq",
      "https://acolhe-disciplina.innovagovlab.org/shelters/38"
    ); //saber se tá no abrigo correto (grupo CJ)

    abrigos.selecionarAbaAcolhidos(0);
    abrigos.importarFamilia();
    cy.wait(1000); //s

    abrigos.botaoAdicionarManualmente();
    abrigos.getInputCep().type("53240551");
    abrigos.getInputNumero().type("99");
    abrigos.getInputTelefone().type("8199998888");
    abrigos.getInputMoradiaAtingida();
    abrigos.selecionarOpcaoDeAfetoNaMoradia(2);
    abrigos
      .getInputBensPerdidos()
      .type("Roupas, Eletrodomésticos, Documentos, Eletrônicos");

    abrigos.botaoAdicionarMembroDaFamilia();
    abrigos.getInputNomeDoMembro().type("Rafaela Oliveira");
    abrigos.getInputGeneroDoMembro();
    abrigos.selecionarGenero(1);

    // CALENDARIO ACOLHE
    abrigos.abrirSeletorDeData();
    abrigos.abrirSeletorDeAno();
    abrigos.selecionarAno("2001");
    abrigos.selecionarMes("MAI");
    abrigos.selecionarDia("15");

    abrigos.getInputCpfMembroDaFamilia().type("871.545.614-59");
    abrigos.getInputCorDeclarada();
    abrigos.selecionarCorDeclarada(2);
    abrigos.marcarCheckboxResponsavel();
    abrigos.botaoConfirmarAdicaoDeMembro();
    abrigos.cadastrarFamilia();

    // Tentar cadastrar a família e verificar a mensagem de erro
    cy.intercept(
      "POST",
      "https://acolhebe-disciplina.innovagovlab.org/api/v1/family"
    ).as("cadastrarFamilia");

    // Aguardar a requisição e verificar a resposta
    cy.wait("@cadastrarFamilia")
      .its("response.statusCode")
      .should("equal", 400);

    cy.get("#cdk-overlay-6")
      .should("be.visible")
      .and("contain", "Este CPF já está associado a uma família");
  });
});
