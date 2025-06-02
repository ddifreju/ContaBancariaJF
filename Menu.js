"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
exports.sobre = sobre;
var readlinesync = require("readline-sync");
var Colors_1 = require("./src/util/Colors");
function main() {
    var opcao;
    while (true) {
        console.log(Colors_1.colors.bg.blackbright, Colors_1.colors.fg.magentastrong, "\n            *********************************************\n                      BANCO FREDDI MONEY                  \n            *********************************************\n\n                 1 - Criar conta\n                 2 - Listar todas as Contas\n                 3 - Buscar Conta por Numero\n                 4 - Atualizar dados da Conta\n                 5 - Apagar Conta\n                 6 - Sacar\n                 7 - Depositar\n                 8 - Transferir valores entre Contas\n                 9 - Sair\n\n            *********************************************          \n            ", Colors_1.colors.reset);
        console.log("Entre com a opção desejada");
        opcao = readlinesync.questionInt("");
        if (opcao == 9) {
            console.log(Colors_1.colors.fg.magenta, "\nBanco Freddi Money - Seu dinheiro na minha conta!");
            sobre();
            console.log(Colors_1.colors.reset, "");
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log(Colors_1.colors.fg.magenta, "\n\nCriar Conta\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 2:
                console.log(Colors_1.colors.fg.magenta, "\n\nListar todas as Contas\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 3:
                console.log(Colors_1.colors.fg.magenta, "\n\nConsultar dados da Conta - por número\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 4:
                console.log(Colors_1.colors.fg.magenta, "\n\nAtualizar dados da Conta\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 5:
                console.log(Colors_1.colors.fg.magenta, "\n\nApagar uma Conta\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 6:
                console.log(Colors_1.colors.fg.magenta, "\n\nSaque\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 7:
                console.log(Colors_1.colors.fg.magenta, "\n\nDepósito\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 8:
                console.log(Colors_1.colors.fg.magenta, "\n\nTransferência entre Contas\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            default:
                console.log(Colors_1.colors.fg.magenta, "\nOpção Inválida!\n", Colors_1.colors.reset);
                keyPress();
                break;
        }
    }
}
function sobre() {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Juliana Freddi");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}
function keyPress() {
    console.log(Colors_1.colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();
