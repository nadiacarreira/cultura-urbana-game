function ShowDialog() {
  this.render = function(dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.getElementById('dialogboxhead').innerHTML = "Sigue intentadolo:";
    document.getElementById('dialogboxbody').innerHTML = Alert.render('Esfuerzo de hoy, victoria de mañana.');
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">Volver a intentar</button>';
  }
  this.ok = function() {
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
  return 'hola'
}
var Alert = new ShowDialog();


// function CustomAlertTwo() {
//   this.render = function(dialog) {
//     var winW = window.innerWidth;
//     var winH = window.innerHeight;
//     var dialogoverlay = document.getElementById('dialogoverlay');
//     var dialogbox = document.getElementById('dialogbox');
//     dialogoverlay.style.display = "block";
//     dialogoverlay.style.height = winH + "px";
//     dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
//     dialogbox.style.top = "100px";
//     dialogbox.style.display = "block";
//     document.getElementById('dialogboxhead').innerHTML = "Sigue intentadolo:";
//     document.getElementById('dialogboxbody').innerHTML = dialog;
//     document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">Volver a intentar</button>';
//   }
//   this.ok = function() {
//     document.getElementById('dialogbox').style.display = "none";
//     document.getElementById('dialogoverlay').style.display = "none";
//   }
// }
// var Alert = new CustomAlert();
