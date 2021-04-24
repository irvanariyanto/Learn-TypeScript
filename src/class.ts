export class User {
    public name: string;

    constructor(name: string, public age: number){
        this.name = name;
    }

    setName(value: string): void{
        this.name = this.name;
    }

    getName = (): string => {
        return this.name;
    }
}


class Admin extends  User{
    read: boolean = true;
    write: boolean = true;
    phone: string;

    constructor(phone: string, name: string, age: number){
        super(name, age);
        this.phone = phone;
    }

    getRole(): {read: boolean, write: boolean}{
        return{
            read: this.read,
            write: this.write
        }
    }
}

let admin = new Admin("08676", "Irvan", 24);

console.log(`${admin.getName()} ${admin.getRole().write}`)