/*Implemente
1.Altere o programa para substituir “Santos” pelo Botafogo
2.Associe o botão a função javaScript
3.Associe o innerHTML ao element que será exibido*/

do{
quest= parseInt(prompt("Digite o time desejado: \n 1-Santos \n 2-Botafogo"));
}
while((quest!=1) && (quest !=2))

switch (quest) {
        case 1:
           quest= "Santos";
            break;
        case 2:
           quest= "Botafogo";
            break;
        
        default:
            break;    
    }

    text=document.getElementById("option");
    quest=="Santos"? text.innerText= "Santos ": text.innerText= "Botafogo ";







