const person = {
  name: "yuvraj",

  greet() {
    console.log(`hi , i am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "john" });
boundGreet();

//bind ,call and apply

/*
The .bind() method in JavaScript is used to permanently bind a function to a specific object,
ensuring that this inside the function always refers to that object.
It returns a new function with the specified this value.
*/
