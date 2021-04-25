abstract class Vehicle{
    abstract wheels: number;
    
    start(): void{
        console.log("bruumm");
    }
}

class Car extends Vehicle{
    wheels: number = 4;
}

let car = new Car();
console.log(car.wheels);
car.start();

class Motor extends Vehicle{
    wheels: number = 2;
}

let motor = new Motor();
console.log(motor.wheels);
motor.start();
