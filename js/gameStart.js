function myFunction() {
var count = 10;
var number = document.getElementById('number');
var intervalo = setInterval(function(){
  count--;
  number.innerHTML = count;
  if(count == 0){
  clearInterval(intervalo);
  alert("No te desanimes, ¡Vuelve a intentarlo!");
  }
  }, 1000);
}
