// Functions

// Fungsi greet
function greet(name) {
  console.log("Hello there " + name);
}

greet("Hafiq");
greet("Ihsan");

// Fungsi penjumlahan
let hasilTambah;
function add(a, b) {
  hasilTambah = a + b;
  return a + b;
}

let x = add(5, 2);
console.log(x);
console.log(hasilTambah);

// Fungsi perkalian
// Function Declaration dimana bentuk fungsi ini bisa dipanggil sebelum fungsi tersebut dideklarasikan
function perkalian(a, b) {
  console.log(a);
  return a * b;
}

let y = perkalian(10, 5);
console.log(y);

// Function Expressions dimana fungsi ini dimasukkan kedalam variable,
// lalu variable tersebut akan dipanggil setelah function dideklarasikan sehingga tidak akan terjadi ambiguitas kode
// Rekommended

// let variableExpression = function (a, b) {
//   return a - b;
// };

let variableExpression = (a, b) => {
  //   return a - b;
  console.log(a - b);
};

// arrow function satu baris bisa ditulis dengan cara
// let variableExpression = (a, b) => console.log(a - b);

variableExpression(25, 5);
// console.log(variableExpression(25, 5));

// Callback Function
function lingkaranSempurna(callback) {
  console.log("Lingkaran dibuat");
  callback("Hijau");
}

function warnaLingkaran(warna) {
  console.log("Lingkaran berwarna " + warna);
}

lingkaranSempurna(warnaLingkaran);
