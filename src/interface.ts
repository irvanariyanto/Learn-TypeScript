interface Laptop{
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop{
    name: string
    isGaming: boolean;

    constructor(name: string, isGaming: boolean){
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log("Nyala");
    }
    off(): void {
        console.log("Mati");
    }  
}

class MacBook implements Laptop{
    name: string;  
    keyboardLight: boolean;

    constructor(name: string, keyboardLight: boolean){
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on(): void {
        console.log("Nyala");
    }
    off(): void {
        console.log("Mati");
    }
}

let asus = new Asus('Asus', true);
asus.on();
asus.off();

let mackbook = new MacBook('MackBook', true);
mackbook.on();
mackbook.off();
