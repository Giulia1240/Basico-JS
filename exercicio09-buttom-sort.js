/*Programa
( M12): atividade9. html Ao clicar nos botões nada acontece Implemente
1.Associe as funções aos cliques dos botões*/

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("x").innerHTML = points;

function StringPoint() {
    points.sort(function(a, b) {
      return a - b;
    });
    console.log(points)
  }
  return StringPoint();




			