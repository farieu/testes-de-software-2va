
# Repositório - Testes de Software (2VA) 
Este repositório contém a documentação de testes manuais, automáticos e de desempenho, desenvolvidos com o framework **Cypress** e **JMeter** para a disciplina de Testes de Software.



## Artefatos 📄

Nesta seção, está disposto links importantes relacionados aos testes realizados:

1. **Suite de Testes**: [Planilha do Google Drive](https://docs.google.com/spreadsheets/d/1WsthTDD-xhuQl98TClzd0XDz60otJCqC/edit?usp=sharing&ouid=104511419060270763661&rtpof=true&sd=true) com a organização da metodologia dos testes.
- Os testes trabalhados pela equipe possuem uma tag **EQUIPE CJ**, estão disponíveis na página da planilha de **mesmo nome**.

  ![Equipe CJ](https://i.imgur.com/ReFszdB.png)

- Testes destacados em **amarelo** são testes que foram automatizados pela equipe, porém escritos pelo professor. Demais testes manuais foram escritos pela equipe, e um possui um anexo da tabela de decisão (técnica de caixa-preta).

2. **Apresentação**: [Slides da Apresentação](https://www.canva.com/design/DAFzUBDpOa8/Ei74wPX6tQ4dR8SR69dCRQ/edit) que detalham o processo de criação, divisão de atividades e experiência com o Cypress.

  ![Equipe CJ Slide](https://i.imgur.com/g9TVzVU.png)

3. **Vídeo:** [Exibição](https://drive.google.com/file/d/12CGZuzpeMgCM4zN0dd3GWbvw1Gxpo1nI/view?usp=sharing) do processo de testes, recapitulando brevemente o que foi apresentado no resultado parcial do projeto e destacando novas etapas realizadas. Portanto, o **foco principal** está na **exibição da automação dos testes com Cypress e nas melhorias implementadas desde a entrega parcial**. Entre os destaques estão:

- Automação dos Testes: Demonstração de como os testes automáticos foram estruturados e executados.

- Desempenho: Explicação sobre o uso de JMeter para medir o tempo de resposta do sistema, especialmente sob a carga de múltiplos usuários simultâneos.

- Melhorias Implementadas: Adoção do padrão POM (Page Object Model) para organizar o código de teste de forma mais modular e reutilizável.





### Instruções para executar os testes 👨🏻‍🏫

Primeiro, faça o clone deste repositório para o seu ambiente local. Isso pode ser feito utilizando o comando abaixo no terminal:

```bash
  git clone https://github.com/SCN-Organization/testes-para-o-sistema-acolhe-ts-2va-cj

```
Após clonar o repositório, navegue até o diretório do projeto e instale todas as dependências necessárias utilizando o npm, garantindo que todas as bibliotecas e pacotes necessários estejam disponíveis.

```bash
  npm install
```

Com todas as dependências instaladas, você pode executar a interface do Cypress para executar os testes através do comando:

```bash
  npx cypress open
```

## Teste de Desempenho 📊

Para avaliar o desempenho do sistema Acolhe, utilizamos o **Apache JMeter**, uma ferramenta de código aberto para realizar testes de carga e desempenho em aplicações web. Nosso objetivo é testar o tempo de resposta do sistema durante o processo de login com 500 usuários simultâneos em um intervalo de 5 segundos.

O teste foi elaborado na **GUI** do JMeter e organizado numa pasta separada, junto com um plot que é gerado pelo Listener.

  ![Local dos JMeter](https://i.imgur.com/i7Fn2x3.png)

