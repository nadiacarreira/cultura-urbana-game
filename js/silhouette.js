//Función constructora con sus propiedades
function Silhouettes(pieces, checkPoints, game, score) {
  this.pieces = pieces;
  this.checkPoints = checkPoints;
  this.monumentDrop = ["big-ben", "bridge", "buckinham" , "sant-paul"]
  this.game = game;
  this.score = score;
}
// silhouttes

silhouette.prototype.addSilhouetteMonument = function(pieces) {
  pieces.sort( function() { return Math.random() } );
