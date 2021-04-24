// 1. Declaration
let names: string[] = ['Irvan', 'Ari', 'Navri'];
// 2. Declaration
let numbers: Array<number> = [1, 2, 3, 4, 5];

// Akses data array
console.log(names[1]);
console.log(numbers[4]);

// Ubah data array
names[1] = "Rudi";

console.log(names[1]);

// Tipe data tuple
let student: [string, string, number] = ["1001", "Irvan", 90];
let product: [string, number] = ["Handphone", 10000000];

console.log(student[0]);
console.log(product[1]);


product[1] = 5000000;

console.log(product[1]);

// Tambah data array
let namesLagi: Array<string> = [];

namesLagi.push("Andi");
namesLagi.push("Rudi");

console.log(namesLagi);

// Hapus data array
delete namesLagi[0];

console.log(namesLagi);
