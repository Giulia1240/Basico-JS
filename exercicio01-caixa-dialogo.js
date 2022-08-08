/*
Programa( M10): atividade1. html

Crie um programa do zero e implemente:
1.Apresente 3 caixas de dialogos
2.Solicite Nome, idade e time e futebol
3.Imprima todos os dados solicitados*/

sc = ("Cadastro usuário: <br>");

var a = prompt("Insira seu nome? \n");
var b = prompt("Insira seu sobrenome \n");
var c = prompt("Insira sua idade? \n");
var d = prompt("Time de Futebol? \n");


e = confirm("Confirmar? \n");
resultado = e == true ? `Seu usuário foi cadastrado com sucesso, seja bem vindo ${a}` : `cadastro cancelado`;
alert(resultado);

if (e == true) {
    document.write(sc);
    document.write(`Nome:${a}<br>`);
    document.write(`Sobrenome:${b}<br>`);
    document.write(`Idade:${c}<br>`);
    document.write(`Time:${d}<br>`);
} else {
    document.write("usuário não encontrado");
}