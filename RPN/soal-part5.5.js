//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here
console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);

// ---------------------------------------
console.log(" ");
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let kata = "wow JavaScript is so cool";
let kalimat1 = kata[0] + kata[1] + kata[2];
let kalimat2 =
  kata[4] +
  kata[5] +
  kata[6] +
  kata[7] +
  kata[8] +
  kata[9] +
  kata[10] +
  kata[11] +
  kata[12] +
  kata[13];
let kalimat3 = kata[15] + kata[16];
let kalimat4 = kata[18] + kata[19];
let kalimat5 = kata[21] + kata[22] + kata[23] + kata[24];

console.log("kalimat ke 1 : " + kalimat1);
console.log("Kalimat ke 2 : " + kalimat2);
console.log("Kalimat ke 3 : " + kalimat3);
console.log("kalimat ke 4 : " + kalimat4);
console.log("Kalimat ke 5 : " + kalimat5);

// ---------------------------------------
console.log(" ");
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = "wow JavaScript is so cool";
let kalimatke1 = word3.substring(0, 3);
let kalimatke2 = word3.substring(4, 14);
let kalimatke3 = word3.substring(15, 17);
let kalimatke4 = word3.substring(18, 20);
let kalimatke5 = word3.substring(21, 25);

console.log("kalimat ke 1 : " + kalimatke1);
console.log("kalimat ke 2 : " + kalimatke2);
console.log("kalimat ke 3 : " + kalimatke3);
console.log("kalimat ke 4 : " + kalimatke4);
console.log("kalimat ke 5 : " + kalimatke5);

// ---------------------------------------
console.log(" ");
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let kalimatKe1 = word3.substring(0, 3);
let kalimatKe2 = word3.substring(4, 14);
let kalimatKe3 = word3.substring(15, 17);
let kalimatKe4 = word3.substring(18, 20);
let kalimatKe5 = word3.substring(21, 25);

let kalimat_1 = kalimatKe1.length;
let kalimat_2 = kalimatKe2.length;
let kalimat_3 = kalimatKe3.length;
let kalimat_4 = kalimatKe4.length;
let kalimat_5 = kalimatKe5.length;

console.log("kalimat ke 1 : " + kalimatKe1 + ", with length: " + kalimat_1);
console.log("kalimat ke 2 : " + kalimatKe2 + ", with lenght: " + kalimat_2);
console.log("kalimat ke 3 : " + kalimatKe3 + ", with lenght: " + kalimat_3);
console.log("kalimat ke 4 : " + kalimatKe4 + ", with lenght: " + kalimat_4);
console.log("kalimat ke 5 : " + kalimatKe5 + ", with lenght: " + kalimat_5);
