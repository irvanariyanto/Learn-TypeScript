export class User {
    public name: string;

    constructor(name: string, public age: number){
        this.name = name;
    }

    setName(value: string): void{
        this.name = value;
    }

    getName = (): string => {
        return this.name;
    }
}


class Admin extends  User{
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    static getRoleName: string = "Admin";

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

    static getNameRole(): string{
        return "HEI";
    }

    set email(value: string) {
        if(value.length < 5){
            this._email = 'Email salah';
        }else{
            this._email = value;
        }
    }

    get email(): string{
        return this._email;
    }
}

let admin = new Admin("08676", "Irvan", 24);

let newAdmin = Admin.getNameRole();
console.log(newAdmin);