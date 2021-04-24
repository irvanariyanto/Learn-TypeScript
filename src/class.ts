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

    getRole(): {read: boolean, write: boolean}{
        return{
            read: this.read,
            write: this.write
        }
    }
}

let admin = new Admin("Irvan", 24);

console.log(`${admin.getName()} ${admin.getRole().write}`)