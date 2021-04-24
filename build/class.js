"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this.age = age;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var user = new User("Irvan", 10);
console.log(user);
