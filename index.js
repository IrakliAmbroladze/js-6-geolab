const cart = [
  { name: "Laptop", price: 2200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
];

const sumCart = () => cart.reduce((acc, cur) => acc + cur.price, 0);
const addProduct = (product) => [...cart, product];

console.log("cart sum is: ", sumCart());
console.log(
  "new cart is: ",
  addProduct({ name: "Monitor", price: 250, quantity: 3 }),
);
