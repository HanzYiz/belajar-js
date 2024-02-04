/*

      Tugas GDSC
      Nama : Farhan Maulana
      Kelas : F1A6
      Npm : 202310715270
  
   Copyright by Farhan Maulana

   sosmed :
   IG : farhanmaulana.12
   GitHub : https://github.com/HanzYiz
*/


//task 1
console.log(`Task 1`);
console.log(` `);
const nama = `Farhan`;
const umur = `19`;
const posisi = `manager`;
let kehadiran = `masuk`;

if (!nama){
  console.log(`Nama harus di isi`);
  return;
}

if (!umur){
  console.log(`Umur harus di isi`);
  return;
}

if (!posisi){
  console.log(`Posisi harus di isi`);
  return;
}

if (!kehadiran){
  console.log(`kehadiran harus di isi`);
}
console.log(`Nama karyawan ialah : ${nama}`);
console.log(` `);
console.log(`Umurnya adalah : ${umur} tahun`);
console.log(` `);
console.log(`Posisi kerja saat ini adalah : ${posisi}`);
console.log(` `);
//task 2
console.log(`Task 2`);
console.log(` `);
if(posisi == "karyawan"){
    let jam = 7;
    jam ++

    console.log(`Jam kerja karyawan adalah ${jam} jam`)
    console.log(` `);
}
else if (posisi == `manager`){
    jam = 10;
    jam += 2

    console.log(`Jam kerja Manager adalah ${jam} jam`)
    console.log(` `);
}
else{

    console.log("Posisinya bukan manager atau karyawan");
}

//task 3
console.log(`Task 3`);
console.log(` `);
if (kehadiran === 'masuk'){

   console.log (`${nama} telah masuk, terima kasih.`);
   console.log (` `);
}
else if(kehadiran === `cuti`){

    console.log (`${nama} telah mengambil jatah cuti, terimakasih.`);
    console.log(` `);
}
else{

    console.log(`${nama}, tidak  hadir hari ini`);
}

//task 4
console.log(`Task 4`);
console.log(` `);
let day;

switch (new Date().getDay()) {
  case 0:
    day = "Minggu";
    break;
  case 1:
    day = "Senin";
    break;
  case 2:
    day = "Selasa";
    break;
  case 3:
    day = "Rabu";
    break;
  case 4:
    day = "Kamis";
    break;
  case 5:
    day = "Jumat";
    break;
  case 6:
    day = "Sabtu";
    break;
}

console.log(`hari ini adalah : ${day}`);
if (day === 'Minggu') {
    console.log(`Hari ini ${nama} sedang libur karena hari ${day}.`);
    console.log(` `)
} else if (day === 'Senin' || day === 'Selasa' || day === 'Rabu' || day === 'Kamis' || day === 'Jumat') {
    console.log(`Hari ini ${day} ${nama} masuk sesuai jam kerja ${jam}.`);
    console.log(` `)
} else if (day === 'Sabtu') {
    console.log(`Hari ini ${nama} sedang libur karena hari ${day}.`);
    console.log(` `)
}

//task 5
console.log(`Task 5`);
console.log(` `);
const arraywarna = [`merah`, `kuning`, `hijau`, `biru`]

for(let i = 0; i < arraywarna.length; i++){
    console.log(`${arraywarna[i]}`)
    console.log(` `)
}