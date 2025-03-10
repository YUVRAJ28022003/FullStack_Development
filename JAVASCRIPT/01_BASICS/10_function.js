// how to define function
// function makeTea(typeOfTea) {
//   return typeOfTea;
// }
function makeTea(typeofTea) {
  console.log(`i will make ${typeofTea}`);
  return `makeTea: ${typeofTea}`;
}

makeTea("tata tea");

// function inside function

function orderTea(teaType) {
  function confirmOrder() {
    return `order is confirmed `;
  }
  return confirmOrder();
}

let orderTeaConfirm = orderTea("lemon tea");
console.log(orderTeaConfirm);

// ARROW FUNCTION
() => {};
const calculatetotal = (price, quantity) => {
  return price * quantity;
};

let totalcost = calculatetotal(900, 10);
console.log(totalcost);

// make a function with another function as a parameter
function processTeaOrder(teaFunction) {
  teaFunction("earl grey");
}

processTeaOrder(makeTea);
