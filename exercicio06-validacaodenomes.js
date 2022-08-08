/*1.Verifique se alguma coisa foi digitada
  2. Se nada foi digitado imprima “Nome esta em branco*/

  x= prompt("Digite seu nome: <br>"); 
 resultado = x != null && x!==" " ? `Seja bem vindo ${x}` : `Nome esta em branco`;
 document.write(resultado);