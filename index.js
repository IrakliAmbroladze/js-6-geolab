const cart = [
  { name: "Laptop", price: 2200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
];

const sumCart = () => cart.reduce((acc, cur) => acc + cur.price, 0);

console.log("cart sum is: ", sumCart());
