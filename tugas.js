//task 1

const nama = `Farhan`;
const umur = `19`;
const posisi = `manager`;
let kehadiran = `masuk`;

console.log(`Nama karyawan ialah : ${nama}`);

console.log(`Umurnya adalah : ${umur} tahun`);

console.log(`Posisi kerja saat ini adalah : ${posisi}`);
//task 2
if(posisi == "karyawan"){
    let jam = 7;
    jam ++

    console.log(`Jam kerja karyawan adalah ${jam}`)
}
else if (posisi == `manager`){
    jam = 10;
    jam += 2

    console.log(`Jam kerja Manager adalah ${jam}`)
}
else{

    console.log("Posisinya bukan manager atau karyawan");
}

//task 3
if (kehadiran === 'masuk'){

   console.log (`${nama} telah masuk, terima kasih.`);
}
else if(kehadiran === `cuti`){

    console.log (`${nama} telah mengambil jatah cuti, terimakasih.`);
}
else{

    console.log(`${nama}, tidak  hadir hari ini`);
}

//task 4

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
} else if (day === 'Senin' || day === 'Selasa' || day === 'Rabu' || day === 'Kamis' || day === 'Jumat') {
    console.log(`Hari ini ${day} ${nama} masuk sesuai jam kerja ${jam}.`);
} else if (day === 'Sabtu') {
    console.log(`Hari ini ${nama} sedang libur karena hari ${day}.`);
}

//task 5
const arraywarna = [`merah`, `kuning`, `hijau`, `biru`]

for(let i = 0; i < arraywarna.length; i++){
    console.log(`${arraywarna[i]}`)
}