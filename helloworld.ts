class Greeter {
  constructor (public message: string) {

  }

  sayHi () {
    return `<h1> ${this.message} </h1>`;
  }
}

const greeterThing = new Greeter('Hello, Typescript!');

document.body.innerHTML = greeterThing.sayHi();
console.log(greeterThing.message);
