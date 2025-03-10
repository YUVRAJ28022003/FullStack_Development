/*
 A closure is the combination of a function bundled together (enclosed)
 with references to its surrounding state (the lexical environment). 
 In other words, a closure gives a function access to its outer scope.
 In JavaScript, closures are created every time a function is created,
 at function creation time.


 A closure is the combination of a function and the lexical environment
  within which that function was declared.This environment consists of any variables 
  that were in-scope at the time the closure was created. 
*/

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();

console.log(increment()); //5
console.log(increment()); //6
console.log(increment()); //7
