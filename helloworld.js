var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1> " + this.message + " </h1>";
    };
    return Greeter;
}());
var greeterThing = new Greeter('Hello, Typescript!');
document.body.innerHTML = greeterThing.sayHi();
console.log(greeterThing.message);
