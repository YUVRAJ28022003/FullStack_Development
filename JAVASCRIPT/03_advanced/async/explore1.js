function sayhello() {
  console.log("I would like to say hello");
}

// it will take time to print
setTimeout(() => {
  sayhello();
}, 4000);

console.log("chaicode");

// synchronous code
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
For Timer Function :
code ->  call stack(loaded function) -> browsers( enviroment ) -> queue -> event loop .

For Normal Function :
code -> callstack -> event loop .

An async function declaration creates an AsyncFunction object.
Each time when an async function is called, it returns a new Promise 
which will be resolved with the value returned by the async function,
or rejected with an exception uncaught within the async function.

*/