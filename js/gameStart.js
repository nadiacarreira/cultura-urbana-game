function Game(silhoettes, pieces, score, count) {
  this.silhouettes = silhouettes;
  this.pieces = pieces;
  this.score = 0;
  this.count = 60;
}
Game.prototype.startGame = function(pieces, silhouettes) {
  cards.addSilhouettes(silhouettes);
  this.showScore();
  this.showTimmer();
}

Game.prototype.showScore = function() {
  $("#score").text(this.score)
  console.log(this.score);
}

Game.prototype.countDown = function() {
  var that = this;

  var timmer = setInterval(function(){
    that.count--;
    if(that.count <= 0) clearInterval(timmer)


    that.showTimmer();
  }, 1000)

  this.count = 61;
}

Game.prototype.checkCorrectPiece = function() {
  this.score += 1;
}

Game.prototype.showTimmer = function() {
  $("#timmerDown").text(this.count)
}
