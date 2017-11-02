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

    if( count == 0 && currentScore < '4'){
      clearInterval(intervalo)
      alert("you loose");
    }
    if (count == 0) {
      clearInterval(intervalo);
    }
  }, 1000);
}

function resetScore() {
  document.getElementById('score').innerHTML = 0;
}

function checkCorrectPoints(){
  var score = document.getElementById('score').innerHTML;
  if(score === '4'){
    alert("you win");
  }
}
