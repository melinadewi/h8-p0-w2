var tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

var lanjut = true;
if (tanggal>31 || tanggal<1){
  console.log("Input tanggal salah. \nAssign nilai variabel tanggal dengan angka antara 1 - 31.");
  lanjut = false;
}
if (bulan>12 || bulan<1){
  console.log("Input bulan salah. \nAssign nilai variabel bulan dengan angka antara 1 - 12.");
  lanjut = false;
}
if (tahun>2200 || tahun<1900){
  console.log("Input tahun salah. \nAssign nilai variabel tahun dengan angka antara 1900 - 2200.");
  lanjut = false;
}

if (lanjut){
  switch(bulan){
    case 1:
      bulan = 'Januari';
      break;
    case 2:
      bulan = 'Februari';
      break;
    case 3:
      bulan = 'Maret';
      break;
    case 4:
      bulan = 'April';
      break;
    case 5:
      bulan = 'Mei';
      break;
    case 6:
      bulan = 'Juni';
      break;
    case 7:
      bulan = 'Juli';
      break;
    case 8:
      bulan = 'Agustus';
      break;
    case 9:
      bulan = 'September';
      break;
    case 10:
      bulan = 'Oktober';
      break;
    case 11:
      bulan = 'November';
      break;
    case 12:
      bulan = 'Desember';
      break;
  }
  console.log(tanggal+' '+bulan+' '+tahun);
}