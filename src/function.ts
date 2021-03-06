// tipe data pada balikan function

function getName(): string{
    return "Hello, my name is Irvan";
}

console.log(getName());

function getAge(): number{
    return 10;
}

console.log(getAge());

function printName(): void{
    console.log("print name");
}

printName();

////////////

function multiply(number1: number, number2: number): number{
    return number1 * number2;
}

const result = multiply(20, 5);
console.log(result);


// Function as type

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2; 
}

let total: number = Add(10, 10);
console.log(total);

// default parameter
const fullname = (first: string, last: string = "Irvan"): string => {
    return `${first} ${last}`
} 

console.log(fullname("Ari"));

// optional parameter
// tidak bisa untuk return number
const getUmur = (val1: string, val2?: string): string => {
    return `${val1} ${val2}`;
}

console.log(getUmur("A"));