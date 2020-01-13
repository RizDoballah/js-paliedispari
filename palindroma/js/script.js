alert('ciao');
var textUser = prompt('inserisci una parola');
if (palindrome(textUser) == true) {
  console.log('parola palindroma');
}
else {
  console.log('non é una parola palindroma');
}


function palindrome(text){
  var reversedText = text.toLowerCase().split('').reverse().join('');
  if (text == reversedText ) {
    return true;
  }
  else {
    return false;
  }
}
