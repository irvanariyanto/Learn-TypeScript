import BaseLaptop from './BaseLaptop';

class Asus<T> extends BaseLaptop<T>{
    constructor(type: T, withNumeric: boolean, withTouchBotton: boolean){
        super("Asus", type, withNumeric, withTouchBotton);
    }
}

export default Asus;