function getData(value: any){
    return value;
}

console.log(getData("Irvan").length);
console.log(getData(123).length);


// Generic
function myData<T>(value: T){
    return value
}

console.log(myData("Irvan").length);
console.log(myData(123));

const arrowFunc = <T>(value: T) => {
    
}