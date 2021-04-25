"use strict";
function getData(value) {
    return value;
}
console.log(getData("Irvan").length);
console.log(getData(123).length);
// Generic
function myData(value) {
    return value;
}
console.log(myData("Irvan").length);
console.log(myData(123));
var arrowFunc = function (value) {
};
