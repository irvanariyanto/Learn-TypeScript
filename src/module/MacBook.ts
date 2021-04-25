import BaseLaptop from './BaseLaptop';

class MacBook<T> extends BaseLaptop<T>{
    constructor(type: T, withNumeric: boolean, withTouchBotton: boolean){
        super("MacBook", type, withNumeric, withTouchBotton);
    }
}

export default MacBook;