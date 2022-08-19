const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.use(() => {
  console.log("Server started");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;
