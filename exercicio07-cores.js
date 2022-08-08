/*
O Botão Stop interrompe a mudança automática de cor
Porém ao clicar novamente no botão a cor volta a alternar
Implemente
1.Altere o texto do Botão para “ Reiniciar ” após clicar
no botão pela primeira vez
2.Altere o texto do Botão para “Stop” no segundo clique;
3.Também no Segundo clique reinicie a alternancia das cores;
*/

var change;
var red="red";
var blue ="blue";
 
var change;

function changeColor() {
  change = setInterval(textColor, 1000);
 }
 
function textColor() {
  var colorContext = document.getElementById('div1');
  colorContext.style.color =colorContext.style.color == 'red' ? 'blue' : 'red';
  
} 

function stopColor() {
  let button = document.getElementById("button");
  let x="Stop";
  
  isStop = button.textContent==x ? true : false;
  isStop ? clearInterval(change) : changeColor();

  var Restart=button.textContent="Restart";
  var stopButton=button.textContent="Stop";
 
  button.textContent = isStop? Restart : stopButton;

}
