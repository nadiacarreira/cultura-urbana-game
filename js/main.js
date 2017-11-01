window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
}
function startGame(){
  var count = 60;
  var number = document.getElementById('number');
  var intervalo = setInterval(function() {
    count--;
    number.innerHTML = count;
    if (count == 0) {
      clearInterval(intervalo);
      alert("No te desanimes, ¡Vuelve a intentarlo!");
    }
  }, 1000);
}
