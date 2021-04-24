"use strict";
// tipe data pada balikan function
function getName() {
    return "Hello, my name is Irvan";
}
console.log(getName());
function getAge() {
    return 10;
}
console.log(getAge());
function printName() {
    console.log("print name");
}
printName();
////////////
function multiply(number1, number2) {
    return number1 * number2;
}
var result = multiply(20, 5);
console.log(result);
var Add = function (val1, val2) {
    return val1 + val2;
};
var total = Add(10, 10);
console.log(total);
// default parameter
var fullname = function (first, last) {
    if (last === void 0) { last = "Irvan"; }
    return first + " " + last;
};
console.log(fullname("Ari"));
// optional parameter
// tidak bisa untuk return number
var getUmur = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getUmur("A"));
