export class User {
    public name: string;

    constructor(name: string, public age: number){
        this.name = name;
    }
}

let user = new User("Irvan", 10);

console.log(user);