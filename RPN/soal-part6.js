// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 0;
console.log("LOOPING PERTAMA");
console.log(" ");
while (i <= 5) {
  console.log("angka maju " + i);
  i++;
  console.log(" ");
}

let z = 10;
console.log(" ");
console.log("LOOPING KE DUA");
console.log(" ");
while (z >= 5) {
  console.log("angka mundur " + z);
  z--;
  console.log(" ");
}

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log(" ");
console.log("Looping for pertama");
console.log(" ");
for (let j = 0; j <= 5; j++) {
  console.log(" Angka maju : " + j);
  console.log(" ");
}

console.log(" ");
console.log("Looping ke dua");
for (let x = 10; x >= 5; x--) {
  console.log("Angka mundur: " + x);
  console.log(" ");
}

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (a = 1; a <= 100; a++) {
  if (a % 2 == 0) {
    console.log(a + " Genap");
  } else {
    console.log(a + " ganjil");
  }
}

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.


console.log(' ')
console.log('Looping Kelipatan 3')
for (let p = 1; p <= 100; p+=2){
    if (p % 3 == 0){
    console.log(`${p} Kelipatan tiga`)
    }
    else{
        console.log(p)
    }
}
console.log(' ')
console.log('Looping kelipatan 6')
for(let y = 1; y <= 100; y+=5){
    if(y % 6 == 0){
    console.log(`${y}  Kelipatan 6`)
    }
    else{
        console.log(y)
    }
}
console.log(' ')
console.log('looping kelipatan 10')
for(let q = 1; q <= 100; q+=9){
    if(q % 10 == 0){
    console.log(`${q} kelipatan 10`)
    }
    else{
        console.log(q)
    }
}

//5. Bintang asteriks
//Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****
console.log(' ')
let input = 5;
let hasil = '';
for(let l = 1;  l<=input;l++){
   hasil += '*';
   console.log(hasil);
}