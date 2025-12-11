const cart = [
  { name: "Laptop", price: 2200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
];

function sumCart() {
  let sum = 0;
  sum = cart.reduce((acc, cur) => acc + cur.price, 0);
  console.log("sum is:", sum);
}

sumCart();
