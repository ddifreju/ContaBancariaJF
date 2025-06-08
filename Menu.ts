import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    //Instancia da classe controller
    let contas: ContaController = new ContaController();

    //variaveis auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ["Conta Corrente", "Conta Poupanca"];

    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();  

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

                    console.log("Digite o número da agência: ")
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o nome do titular da conta: ")
                    titular = readlinesync.question("");

                    console.log("Digite o tipo da conta: ")
                    tipo = readlinesync.keyInSelect(tipoContas,"", {cancel:false}) + 1;

                    console.log("Digite o saldo da conta (RS): ")
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.cadastrar(
                                new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o Dia do aniversário da Conta Poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                   
                keyPress()
                break;
            case 2:
                console.log(colors.fg.magenta,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta (por número)\n\n"
                    , colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
             case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {

                    console.log("Digite o Número da agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o Saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o Dia do aniversário da Conta Poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, 
                                            aniversario));
                            break;
                    }

                } else {
                    console.log(colors.fg.red, "\nA Conta numero: " + numero + 
                    " não foi encontrada!", colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);

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