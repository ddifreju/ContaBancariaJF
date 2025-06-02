import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main () {

    let opcao: number;

    while(true) {
        console.log(colors.bg.blackbright, colors.fg.magentastrong,`
            *********************************************
                      BANCO FREDDI MONEY                  
            *********************************************

                 1 - Criar conta
                 2 - Listar todas as Contas
                 3 - Buscar Conta por Numero
                 4 - Atualizar dados da Conta
                 5 - Apagar Conta
                 6 - Sacar
                 7 - Depositar
                 8 - Transferir valores entre Contas
                 9 - Sair

            *********************************************          
            `, colors.reset);
            
        console.log("Entre com a opção desejada");
        opcao = readlinesync.questionInt("");
 if (opcao == 9) {
            console.log(colors.fg.magenta, 
                "\nBanco Freddi Money - Seu dinheiro na minha conta!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.magenta,
                    "\n\nCriar Conta\n\n", colors.reset);
                   
                keyPress()
                break;
            case 2:
                console.log(colors.fg.magenta,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.magenta,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.magenta,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.magenta,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.magenta,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.magenta,
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.magenta,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.magenta,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;

        }
    }
}                

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Juliana Freddi");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();