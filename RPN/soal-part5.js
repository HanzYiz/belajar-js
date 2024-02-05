//soal 1

//proxyta
let nama = "Farhan";
let peran = "";

if (!nama) {
  console.log(`Nama wajib di isi!`);
  return;
}

if (!peran) {
  console.log(`Pilih peranmu untuk memulai game`);
}

if (peran == `ksatria`) {
  console.log(`Halo ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran == `tabib`) {
  console.log(`Halo Tabib ${nama}, kamu akan membantu teman mu yang terluka!`);
} else if (peran == `penyihir`) {
  console.log(
    `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenaganmu!`
  );
} else {
  console.log(`Kaya nya peran kamu kosong deh, jadi bot aja ya`);
}

//soal 2
let tanggal = 9;
let bulan = 5;
let tahun = 2024;

let namaBulan;

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Febuari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    namaBulan = "Bulan tidak valid";
}

console.log(`${tanggal} ${namaBulan} ${tahun}`);
