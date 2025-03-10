/*
primitive data type

string
boolean 
Number
null
defined 
symbol

non-primitive data type

objects
-array
-function objects
*/

// NUMBER
let balance = 120;

let scorebalance = new Number(120);

console.log(balance);
console.log(scorebalance);

console.log(typeof balance);
console.log(typeof scorebalance);

// boolean

let isactive = true;

let isreallyactive = new Boolean(true);

console.log(isactive);
console.log(isreallyactive);

console.log(typeof isactive);
console.log(typeof isreallyactive);

// null or undefined

let firstname; //undefined - it is not defined yet

console.log(firstname);

// String

let mystring = "hello";
let mystringone = "hello";
let name = "yuvrsj";

let oldgreet = mystring + " " + name;
console.log(oldgreet);

let newgreetmessage = `hello ${name}`;
console.log(newgreetmessage);

// symbol - it always create new value every time.

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 == sm2); // false
