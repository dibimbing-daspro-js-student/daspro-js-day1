const lodash = require("lodash");

let arrayOfNumber = [1, 2, 3, 4, 5];
let arrayOfObject = [
  { nama: "Hafiq", umur: 20, alamat: "Aceh" },
  { nama: "Ihsan", umur: 22, alamat: "Jogja" },
  { nama: "Wawan", umur: 15, alamat: "Surabaya" },
  { nama: "Ega", umur: 18, alamat: "Bandung" },
];
let users = [
  { user: "barney", age: 25, active: true },
  { user: "fred", age: 15, active: false },
];

// ARRAY MAP
console.log("MAP");
function mapArrayOfNumber(n) {
  console.log(n + 5);
}

// Pengolahan array dengan built in atau fungsi bawaan dari javascript menggunakan metode map
console.log("Built in JS");
arrayOfNumber.map(mapArrayOfNumber);

// Pengolahan array dengan lodash
const mapArrayOfNumberLodash = (n) => {
  console.log(n);
};

console.log("Lodash");
// lodash.map(arrayOfNumber, (n) => console.log(n));
lodash.map(arrayOfObject, (n) => console.log(n));

// ARRAY FILTER
console.log("FILTER");
let filterUmur = arrayOfObject.filter((n) => n.umur < 20);
// console.log(filterUmur);

let filterUmurLodash = lodash.filter(arrayOfObject, (n) => n.umur > 20);
// console.log(filterUmurLodash);

let usersFilter = users.filter((user) => user.active);
// console.log(usersFilter)

let usersFilterLodash = lodash.filter(users, (user) => user.user.length < 5);
console.log(usersFilterLodash);
