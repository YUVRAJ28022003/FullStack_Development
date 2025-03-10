let teacllection = [];
let tea;
do {
  tea = prompt(`Enter your favourite tea(type "stop" to finish )`);
  if (tea !== "stop") teacllection.push(tea);
} while (tea !== "stop");

// will be checked in browser only as prompt is not defined in node

// using for loop
let total = 0;
for (let i = 0; i < 5; i++) {
  total += i;
}
console.log(total);
