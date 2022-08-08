/*
1.Altere a impressão da tabuada
2. Imprima do maior para o menor*/

//Tabuada com Interação do usuario

 tabu= prompt("Digite um numero para calcular a tabuada: ");
    var num = parseInt(tabu);
    var tabuada='';

    if(num!=null && num!=Number && !num==" "){
    for(var i=10; i>0 ; i--){
     document.write (`${num} x ${i} = ${(num*i)} <br>`);
    }
   }
   else{
      document.write("tipo invalido <br>")
   }

 //Tabuada inteira e sem interação   do usuario
   if(num!=null && num!=Number && !num == " "){
for(var x=1; x<10 ; x++){
            document.write("<br>");
            document.write(`Tabuada do ${x} \n`)
            for(j=10; j>0 ; j--){
            document.write (`${x} x ${j} = ${(x*j)} <br>`);
         }
      }
   }
else{

   document.write("tipo invalido <br>")
}

