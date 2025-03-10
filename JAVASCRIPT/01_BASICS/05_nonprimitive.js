const { Declaration } = require("postcss");

// object initialization
let obj = {};
let heros = [""];

console.log(obj);
console.log(typeof obj);

// object Declaration
let username = {
  firstname: "hitesh",
  isloggedin: true,
};

console.log(username);
console.log(typeof username);

/* when variable as constant 
  then there space is fixed but inside it 
  variable can be changed .
*/
const userName = {
  firstname: "hitesh",
  isloggedin: true,
};

userName.firstname = "uv";
console.log(userName.firstname);
console.log(userName["firstname"]);

let today = new Date();
console.log(today.getDate());
console.log(today);

// Array

let heroses = ["a", "b", true, 1];
console.log(heroses);
console.log(heroses[1]);

// javascript cant do implicit conversion

let isvalue = false;

console.log(isvalue + 1);

console.log("1" + 1);
