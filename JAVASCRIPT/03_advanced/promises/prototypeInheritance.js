/*
JavaScript uses prototype-based inheritance instead of classical inheritance (like Java or C++). 
Every object in JavaScript has an internal reference to another object called its prototype,
 which it inherits properties and methods from.

*/

function person(name) {
  console.log("dfkdnfnwekfk");
  this.name = name;
}

person.prototype.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

let yuvraj = new person("Yuvraj");
yuvraj.greet();
