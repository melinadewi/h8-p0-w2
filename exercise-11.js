function balikKata(kata) {
  // you can only write your code here!
  var hasil='';
  for (i=1; i<=kata.length; i++){
    hasil += kata[kata.length-i]
  }
  return hasil;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS