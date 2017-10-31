var myPieces = ["bingBen","palacioBuckinham","hydePark","torreDeLondres","puenteDeLaTorre"];
var player;
var myGameArea;
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
}
function startGame(){
  var silhouette = new silhouette();
  var piezes = new piezes();
}



//time set interval
function countDown(i, callback) {
    callback = callback || function(){};
    var int = setInterval(function() {
        document.getElementById("time").innerHTML = "Down time: " + i;
        i-- || (clearInterval(int), callback());
    }, 1000);
}
$("button").click(function(){
    countDown(60, function(){
        alert("Countdown done!")
    });
});
