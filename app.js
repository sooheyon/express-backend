const express = require("express");
const cors = require("cors");

const app = express();

const port = 3010;

let count = 0;

//app.use middle ware
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello, Express!");
});

app.get("/count", (req, res) => {
  count++;
  return res.json({ count: count });
});

app.listen(port, () => {
  console.log(`🚀 Server is listening on port : ${port}`);
});
