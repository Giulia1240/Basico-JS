/*tabuleiro xadrez

Inicie do zero

Implemente
1.Simule os movimentos do peão
2.O peão é repsentado pela letra p ou P;
3.O peão anda para frente
4.Se a posição final do peão estiver ocupada ele não anda
5.Abra um prompt para solicitar a posição final do peão

    function tabuleiro(){
        var board=' ';
            for(let linha=1;linha<=8;linha++){
        
                for(let coluna=1;coluna<=16;coluna++){
        
                     (linha+coluna)%2==0 ? board+=" " : board+="###";
        
                }
                board+="<br>";
            }
           return board;  
        }
            

*/
var board = [ 
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

  console.table(board);

  jogador = true;
  do {
      player = jogador==true ? "Jogador 1" : "Jogador 2";

      posInicH = parseInt(prompt(player + ", digite a posição HORIZONTAL da peça a ser movida: "));
      posInicV = parseInt(prompt(player + ", digite a posição VERTICAL da peça a ser movida: "));

      posFinalH = parseInt(prompt(player + ", digite a posição HORIZONTAL destino da peça: "));
      posFinalV = parseInt(prompt(player + ", digite a posição VERTICAL destino da peça: "));

      pecaComida = board[posFinalH][posFinalV];

      board[posFinalH][posFinalV] = board[posInicH][posInicV];
      board[posInicH][posInicV] = ' ';
      
      console.table(board);


      if(pecaComida.toLowerCase()=="k"){
          console.log("Vitória do " + player);
          break;
      }
      
      document.write(board);
      jogador = !jogador;
     
  }while(true);		

