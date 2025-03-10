// DOM MANIPULATION:

// Get the Element :
// document.querySelectorAll("button");
// document.getElementById("changeTextButton");
// document.getElementsByClassName()
// document.getElementsByTagName()

// Event Listening :
// .addEventListener();

// add elements :

// remove elements :

// alert("connected");

// example 1: accessing dom elements by id
// document
//   .getElementById("changeTextButton")
//   .addEventListener("click", function () {
//     console.log(this);
//   });

// or

// document.getElementById("changeTextButton").addEventListener("click", () => {
//   console.log(this);
// });

// changing inner context of paragraph

document.getElementById("changeTextButton").addEventListener("click", () => {
  let paragraph = document.getElementById("myparagraph");

  paragraph.textContent = " HI I AM yuvraj";
});

// example 2 : traversing the DOM
document.getElementById("highlightFirstCity").addEventListener("click", () => {
  let cities = document.getElementById("citiesList");
  cities.firstElementChild.classList.add("highlight");
});

// example 3 : manipulationg dom elements
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeetype = document.getElementById("coffeeType");
  //   console.log(coffeetype);
  coffeetype.textContent = "espresso";

  coffeetype.style.backgroundColor = "brown";
});

// EXAMPLE 4 Creating and inserting elements
document.getElementById("addNewItem").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "eggs";

  let additem = document.getElementById("shoppingList").appendChild(newItem);
});

// example 5 : removing a element
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//   example 6: event handling

document.getElementById("clickMeButton").addEventListener("mouseover", () => {
  alert("chai code");
});

// example 7: event delegation
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("you selected : " + event.target.textContent);
  }
});

// example 8 : form handling

document.getElementById("feedbackForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let feedback = document.getElementById("feedbackInput").value;
  console.log(feedback);
  document.getElementById(
    "feedbackDisplay"
  ).textContent = `Feedback is: ${feedback}`;
});

// example 9 : DOM Content Loading

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM is full Loaded";
});

// example 10: CSS Class Manipulation

document.getElementById("toggleHighlight").addEventListener("click", () => {
  let descriptionText = document.getElementById("descriptionText");
  descriptionText.classList.toggle("highlight");
});



// research on  HTMLCollection, NodeLis