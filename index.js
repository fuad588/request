const express = require("express");
const app = express();

const prod = [
  { name: "Asus", price: 7, count: 22, id: 1 },
  { name: "Casper", price: 8, count: 11, id: 2 },
  { name: "Lenovo", price: 9, count: 7, id: 3 },
  { name: "Dell", price: 11, count: 2, id: 4 },
  { name: "Msi", price: 5, count: 15, id: 5 },
  { name: "Apple", price: 12, count: 3, id: 6 },
  { name: "Toshiba", price: 36, count: 6, id: 7 },
  { name: "Acer", price: 10, count: 18, id: 8 },
  { name: "HP", price: 20, count: 21, id: 9 },
  { name: "Samsung", price: 32, count: 13, id: 10 },
];

app.get("/product/:id", (req, res) => {
  res.send(JSON.stringify(prod.find((user) => user.id == req.params.id)));
});

app.get("/product", function (req, res) {
  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  res.send(JSON.stringify(prod.slice(count, offset + count)));
});

app.listen(3000, () => {
  console.log("Listening 3000");
});
