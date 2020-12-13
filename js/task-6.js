const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
]

const calculateTotalPrice = function (allProducts, productName) {
  for (const product of products) {
    if (product.name !== productName) continue

    return product.price * product.quantity
  }
}

console.log(calculateTotalPrice(products, "Радар"))

console.log(calculateTotalPrice(products, "Дроид"))
