/*
Programa( M12): atividade4 html
Implemente
1.Altere a impressão
2.Imprima os números pares;
*/

//Com entrada de dados pelo usuário
n= prompt("Digite um numero par: ");
number=parseInt(n);

if(number<=100){
for(i=0;i<=number;i++){

        if(i%2==0){
            document.write(i + "<br>");
        }
    }
}
else{
    alert("Numero invalido!");
}