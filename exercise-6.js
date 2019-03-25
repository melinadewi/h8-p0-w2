//1.Melakukan Looping Menggunakan While
var i = 0;
console.log('LOOPING PERTAMA')
while (i<20){
  i += 2;
  console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA')
while (i>0){
  console.log(i + ' - I will become fullstack developer');
  i -= 2;
}


//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for(var j = 1; j <= 20; j++){
  console.log(j + ' - I love coding');
}
console.log('LOOPING KEDUA')
for(var j = 20; j > 0; j--){
  console.log(j + ' - I will become fullstack developer');
}


//3. Angka Ganjil dan Genap
for(var k = 1; k <= 100; k++){
    if(k%2==0){
        console.log('"GENAP"');
    }
    else{
        console.log('"GANJIL"');
    }
}

for(var l = 1; l <= 100; l+=2){
    if(l%3==0){
        console.log('"'+ l + ' KELIPATAN 3"');
    }
    else{
        console.log('""');
    }
}

for(var m = 1; m <= 100; m+=5){
    if(m%6==0){
        console.log('"'+ m + ' KELIPATAN 6"');
    }
    else{
       console.log('""');
    }
}

for(var n = 1; n <= 100; n+=9){
    if(n%10==0){
        console.log('"'+ n + ' KELIPATAN 10"');
    }
    else{
       console.log('""');
    }
}