import iLaptop from './iLaptop';
import * as Keyboard from './Keyboard';

abstract class BaseLaptop<T> implements iLaptop<T>{
    nama: string;    
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(
        name: string, 
        type: T, 
        withNumeric: boolean, 
        withTouchButton: boolean
    ){
        this.nama = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withTouchButton;
    }

    a(): void{
        console.log(Keyboard.a());
    }

    b(): void{
        console.log(Keyboard.b());
    }
}

export default BaseLaptop;