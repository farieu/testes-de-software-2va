import { Voluntarios } from "./pages/Voluntarios.cy";

const voluntarios = new Voluntarios();

describe("Cadastro de múltiplos voluntários - Teste Data-Driven", () => {
  beforeEach(() => {
    cy.apiLogin();
  });

  it("Cadastro de 5 voluntários", () => {
    voluntarios.irParaTelaDeVoluntarios();

    cy.fixture("pessoas").then((pessoas) => {
      pessoas.forEach((pessoa) => {
        voluntarios.botaoCadastrarNovoVoluntario();

        voluntarios.getInputCpf().type(pessoa.cpf);
        voluntarios.getInputNome().type(pessoa.nome);
        voluntarios.getInputTelefone().type(pessoa.telefone);
        voluntarios.getInputHabilidades().type(pessoa.habilidades);
        voluntarios.getInputDisponibilidade();
        pessoa.disponibilidade.forEach((disponibilidade) => {
          cy.get("mat-option").contains(disponibilidade).click();
        });
        voluntarios.fecharDropdownDisponibilidade();
        voluntarios.botaoConfirmarCadastro();
      });
    });
  });
});
