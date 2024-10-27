import { Voluntarios } from "./pages/Voluntarios.cy";

const voluntarios = new Voluntarios();

describe("Cadastro de Novo Voluntário", () => {
  beforeEach(() => {
    cy.apiLogin();
  });

  it("Tentativa de cadastrar um novo voluntário no Acolhe", () => {
    voluntarios.irParaTelaDeVoluntarios();
    voluntarios.botaoCadastrarNovoVoluntario();

    voluntarios.getInputDisponibilidade();
    voluntarios.selecionarDisponibilidade(1);
    voluntarios.selecionarDisponibilidade(2);
    voluntarios.fecharDropdownDisponibilidade();

    // //Esse conjunto de campos deve mudar TODA vez que rodar e for introduzido um usuário com SUCESSO. (Pois ele vai tentar inserir de novo e vai dar erro por já existir)
    voluntarios.getInputCpf().type("897.864.351-50");
    voluntarios.getInputNome().type("Joaquim Nabuco");
    voluntarios.getInputTelefone().type("81977776666");
    voluntarios
      .getInputHabilidades()
      .type("Cozinhar, Limpeza, Primeiros Socorros");

    // // Interceptar a requisição POST para o cadastro de voluntário
    cy.intercept(
      "POST",
      "https://acolhebe-disciplina.innovagovlab.org/api/v1/volunteer"
    ).as("cadastrarVoluntario");

    // // Clicar no botão para adicionar o voluntário
    voluntarios.botaoConfirmarCadastro();

    // // Aguarde a requisição e verifique a resposta
    cy.wait("@cadastrarVoluntario")
      .its("response.statusCode")
      .should("equal", 201);

    // // Opcional: Verificar se foi redirecionado para a página correta
    cy.url().should("include", "/volunteers");
  });
});
