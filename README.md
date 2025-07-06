# 🏦 Sistema de Gerenciamento de Contas Bancárias (TypeScript + POO)

Este repositório apresenta o projeto **"Banco Freddi Money"**, uma aplicação de console desenvolvida em **TypeScript**. Este trabalho representa um marco importante na minha jornada de aprendizado, pois foi aqui que iniciei minha transição do JavaScript para o TypeScript, focando intensamente na **Programação Orientada a Objetos (POO)** e na utilização da **tipagem forte** para construir um código mais robusto e organizado.

O projeto simula um sistema básico de gerenciamento de contas bancárias, implementando as operações fundamentais de **CRUD (Create, Read, Update, Delete)** para diferentes tipos de contas através de um menu interativo no terminal.

## ✨ Destaques e Aprendizados

* **Transição para TypeScript:** Aplicação prática dos conceitos de tipagem estática, interfaces e classes em um projeto real, aprimorando a segurança e manutenibilidade do código.
* **Programação Orientada a Objetos (POO):**
    * **Classes e Objetos:** Modelagem de entidades como `Conta`, `ContaCorrente` e `ContaPoupanca`.
    * **Herança:** `ContaCorrente` e `ContaPoupanca` herdando características da classe base `Conta`.
    * **Encapsulamento:** Proteção de dados através de modificadores de acesso (`private`, `protected`).
    * **Polimorfismo:** Possibilidade de tratar objetos de diferentes classes (Corrente e Poupança) de forma genérica, especialmente em operações de listagem e gerenciamento.
* **Implementação CRUD:** Desenvolvimento das operações essenciais de criação, leitura, atualização e exclusão de contas, demonstrando a gestão completa dos dados.
* **Estrutura de Projeto Modular:** Organização do código em módulos (`model`, `controller`, `repository`, `util`) para melhor manutenibilidade, escalabilidade e separação de responsabilidades.
* **Interação com o Usuário:** Utilização da biblioteca `readline-sync` para criar um menu interativo e coletar dados do usuário via console.

## 🚀 Funcionalidades Principais

O sistema "Banco Freddi Money" oferece as seguintes operações, que configuram um **CRUD** completo de contas:

1.  **Criar Conta (Create):** Permite cadastrar novas contas, sejam elas **Conta Corrente** (com limite de crédito) ou **Conta Poupança** (com dia de aniversário).
2.  **Listar Todas as Contas (Read):** Exibe um resumo de todas as contas cadastradas no sistema.
3.  **Buscar Conta por Número (Read):** Permite consultar os detalhes de uma conta específica.
4.  **Atualizar Dados da Conta (Update):** Edita informações de uma conta existente.
5.  **Apagar Conta (Delete):** Remove uma conta do sistema.
6.  **Sacar:** Realiza saques de uma conta, verificando o saldo disponível.
7.  **Depositar:** Efetua depósitos em uma conta.
8.  **Transferir Valores entre Contas:** Permite transferir fundos de uma conta de origem para uma conta de destino.

## 🛠️ Tecnologias Utilizadas

* **TypeScript:** Linguagem de programação tipada para o desenvolvimento da lógica do sistema.
* **Node.js:** Ambiente de execução para os programas TypeScript/JavaScript.
* **`readline-sync`:** Biblioteca para interação síncrona via linha de comando.
* **`colors` (Módulo `src/util/Colors.ts`):** Para formatação e estilização das saídas no terminal, tornando a interface mais amigável.

## 📁 Estrutura do Projeto

O projeto é modularizado para organizar as responsabilidades:

* **`src/`**: Contém todo o código-fonte da aplicação.
    * **`controller/`**: Lógica de negócios e gerenciamento das operações (CRUD) das contas.
    * **`model/`**: Definição das classes e modelos de dados (`Conta`, `ContaCorrente`, `ContaPoupanca`).
    * **`repository/`**: Abstração da camada de persistência/gerenciamento de dados (onde as contas são armazenadas e manipuladas).
    * **`util/`**: Utilitários auxiliares, como a funcionalidade de cores para o terminal.
    * `menu.ts` (ou `main.ts`): O ponto de entrada principal da aplicação, responsável pelo menu de interação.

## ⚙️ Como Rodar o Projeto

Para executar este projeto em sua máquina local, siga os passos abaixo:

1.  **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o [TypeScript](https://www.typescriptlang.org/download) instalados globalmente.
    ```bash
    npm install -g typescript
    ```
2.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/ddifreju/ContaBancariaJF.git](https://github.com/ddifreju/ContaBancariaJF.git)
    ```
3.  **Acesse o Diretório do Projeto:**
    ```bash
    cd ContaBancariaJF
    ```
4.  **Instale as Dependências:**
    ```bash
    npm install
    ```
5.  **Compile o Código TypeScript:**
    ```bash
    tsc
    ```
    Isso irá gerar os arquivos JavaScript na pasta `dist`.
6.  **Execute o Programa:**
    ```bash
    node dist/menu.js
    ```
    *(Note: Se o seu arquivo principal for `main.ts` e gerar `main.js` na pasta `dist`, o comando seria `node dist/main.js`.)*

## 🤝 Contribuições

Sinta-se à vontade para explorar o código, sugerir melhorias ou reportar issues! Este projeto é um reflexo do aprendizado e estou aberta a feedbacks e colaborações.

---
