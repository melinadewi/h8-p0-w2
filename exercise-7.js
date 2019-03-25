///1. Menyusun Barisan Bintang
var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
for(i=0; i<rows1; i++){
  console.log('*');
}


//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5; // input the number of rows

// do loops to display asterisks in the console.
for(j=0; j<rows2; j++){
  var stars = '';
  for(k=0; k<rows2; k++){
    stars += '*';
  }
  console.log(stars);
}


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5; // input the number of rows

// do loops to display asterisks in the console.
for(l=0; l<rows3; l++){
  var stars = '';
  for(m=0; m<=l; m++){
    stars += '*';
  }
  console.log(stars);
}
