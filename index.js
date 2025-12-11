const cart = [
  { name: "Laptop", price: 2200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
];

const sumCart = () => cart.reduce((acc, cur) => acc + cur.price, 0);
const addProduct = (product) => [...cart, product];
const updateQuantity = (productName, newQty) =>
  cart.map((product) => {
    const { name } = product;
    if (name === productName) {
      product = { ...product, quantity: newQty };
    }
    return product;
  });

console.log("cart sum is: ", sumCart());
console.log(
  "cart with added product is:: ",
  addProduct({ name: "Monitor", price: 250, quantity: 3 }),
);
console.log("cart with updated product is: ", updateQuantity("Mouse", 8));
