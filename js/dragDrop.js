var currentScore;

/*Función que se ejecuta al arrastrar el elemento.*/
function start(e) {
  e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
  e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
  e.target.style.opacity = '0.4';
}

/*Función que se ejecuta se termina de arrastrar el elemento.*/
function end(e) {
  e.target.style.opacity = ''; // Restaura la opacidad del elemento
  e.dataTransfer.clearData("Data");
}
/*Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama.*/
function enter(e) {
  return true;
}

/*Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama.
 Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.*/
function over(e) {
  if ((e.target.className == "containerPiece") || (e.target.id == "containerPieces"))
    return false;
  else
    return true;
}
/* Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama.*/


function drop(e) {
  e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
  var dragableElemet = e.dataTransfer.getData("Text");

  if (checkCorrectPiece(dragableElemet, $(e.target).attr('id'))) {
    e.target.appendChild(document.getElementById(dragableElemet));
    //añadimos score
    var currentScore = parseInt(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = currentScore + 1;
    checkCorrectPoints();
  } // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcions

}

function checkCorrectPiece(dragableElemet, target) {

  switch (dragableElemet + ' | ' + target) {
    case "santPaul | two": return true; break;
    case "bridge | four": return true; break;
    case "buckinham | one": return true; break;
    case "bigBen | three": return true; break;
    default: return false; break;
  }
}
