function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;

      if (success) {
        resolve("data fetched successfully"); // linked with then
      } else {
        reject("Error fetching data"); // linked with catch
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return `Yuvraj`;
  })
  .then((value) => {
    console.log(value);
  }) // then chaining
  .catch((error) => console.error(error));

let response = fetchData();
console.log(response);

/*

"I Promise a Result!"
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and Consuming code

In JavaScript, Promises are used for handling asynchronous operations. They represent a value that might be available now, in the future, or never.

When  -	Call
Success -	myResolve(result value)
Error   - 	myReject(error object)

Basics of Promises :-
----------------------
A Promise is in one of these states:

Pending – Initial state, neither fulfilled nor rejected.
Fulfilled – The operation completed successfully.
Rejected – The operation failed.

Creating a Promise :
--------------------

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // Change to false to test rejection
        if (success) {
            resolve("Data loaded!");
        } else {
            reject("Error occurred!");
        }
    }, 2000);
});

Handling Promises :
-------------------
You can handle the results of a Promise using .then(), .catch(), and .finally():

myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Failure:", error);
    })
    .finally(() => {
        console.log("Operation completed!");
    });


Handling Promises with async/await :-
-------------------------------------
A more modern and readable way to handle Promises is by using async and await.

async function fetchDataAsync() {
    try {
        let response = await fetchData; // Waiting for the Promise to resolve
        console.log("✅ Success:", response);
    } catch (error) {
        console.error("❌ Failure:", error);
    } finally {
        console.log("🔄 Operation Completed!");
    }
}

fetchDataAsync();
-----------------
 Explanation:
await pauses execution until the Promise resolves.
If an error occurs, it jumps to catch.
finally runs no matter what.


4️ Handling Multiple Promises:-
------------------------------
Sometimes, you need to handle multiple asynchronous operations. 
JavaScript provides useful Promise utility methods for that.

🔹 Promise.all() :
-------------------
Runs multiple Promises in parallel and resolves only if all are successful.


const p1 = new Promise((res) => setTimeout(res, 1000, "One"));
const p2 = new Promise((res) => setTimeout(res, 2000, "Two"));
const p3 = new Promise((res) => setTimeout(res, 1500, "Three"));

Promise.all([p1, p2, p3])
    .then((results) => console.log("✅ All resolved:", results)) // ["One", "Two", "Three"]
    .catch((error) => console.error("❌ One failed:", error));
If any Promise fails, Promise.all() rejects.


🔹 Promise.race() :
--------------------
Returns the first resolved or rejected Promise.

Promise.race([p1, p2, p3])
    .then((result) => console.log("🏆 First resolved:", result)) // "One"
    .catch((error) => console.error("❌ First rejected:", error));


🔹 Promise.allSettled():
-------------------------
Waits for all Promises and returns results of both resolved & rejected Promises.

Promise.allSettled([p1, p2, Promise.reject("Error!")])
    .then((results) => console.log("📊 Settled results:", results));
Even if one fails, it still waits for all.

🔹 Promise.any() :
-------------------
Returns the first successfully resolved Promise.

Promise.any([Promise.reject("Err1"), p2, p3])
    .then((result) => console.log("🚀 First success:", result)) // "Two"
    .catch((error) => console.error("❌ All failed:", error));
If all fail, it rejects.


*/
