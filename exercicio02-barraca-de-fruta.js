
/*Dado o string abaixo

var str = “Maça, Banana, Kiwi,

Implemente:
1.Imprima cada fruta em uma linha separada
2.Utilize a função substr Bônus: Tente utilizer a função split*/


//FORMA 01 - UTILIZANDO REGEX 
 var fruta = "Apple, Banana, Kiwi, Uva"
 var frutaDois="Apple, Banana, Kiwi, Uva".replace(/\s/g, "<br>");
 var frutariaDois=fruta.replace(/\s/g, "<br>");


//UTILIZANDO REGEX E SUBSTRING
 var frutaria= fruta.substr(0).replace(/\s/g, "<br>");
 
 document.write(frutaDois);
 document.write(frutaria);
 document.write(frutariaDois);


//UTILIZANDO MATRIZ COM REPLACE E REGEX
var frutaTres = "Apple, Banana, Kiwi, Uva"
var frutaQuatro= frutaTres.replace(/\s/g, "<br>");
frutariaTres=frutaQuatro.split(", ");

//UTILIZANDO MATRIZ e FOR
frutariaQuatro= '';
for (i=0; i<= frutariaTres.length;i++){
    frutariaQuatro= frutariaQuatro + frutariaTres[i] + "<br>"
}

document.write(frutariaTres);
document.write(frutariaQuatro);
