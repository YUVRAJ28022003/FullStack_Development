let teaflavour = ["green tea", "Black tea", "oolang tea"];

// printing using index
console.log(teaflavour[0]);

// printing the array
for (let i = 0; i < teaflavour.length; i++) {
  console.log(teaflavour[i]);
}

// change the value at index
teaflavour[1] = "belongi tea";
console.log(teaflavour[1]);

// push new element in array
teaflavour.push("tata tea");

console.log(teaflavour);

// create a soft copy of array
let softcopy = teaflavour;
console.log(softcopy);

// delete element in the array
softcopy.pop();
console.log(softcopy);

// create a hard copy of the array
let hardcopy = [...teaflavour];
teaflavour.pop();
console.log(teaflavour);
console.log(hardcopy);

// merge array
// let mergearray = softcopy + hardcopy;
let mergearray = softcopy.concat(hardcopy);
console.log(mergearray);

console.log(typeof mergearray);

// find length of the array
let len = hardcopy.length;

// check the value in array and save it in another variable
let citybucketlist = ["koyoto", "london", "capetown"];

let londonexist = citybucketlist.includes("London");

console.log(londonexist);
