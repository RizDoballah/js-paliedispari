// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).
var pariDispari = prompt('scegli tra pari o dispari');
console.log(pariDispari);
var numeroUtente = parseInt(prompt('sceglie un numero tra 1 e 5'));
console.log(numeroUtente);
var numero = getRandomNumber(1, 5);
console.log(numero);
var somma = numero + numeroUtente
console.log(somma);
if (somma % 2 == 0 && pariDispari == 'pari') {
  alert('hai vinto');
}
else if (somma % 2 != 0 && pariDispari == 'dispari') {
  alert('hai vinto');
}
else  {
  alert('hai perso');
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
