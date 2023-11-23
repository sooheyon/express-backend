const express = require("express");

const app = express();

const port = 3010;

app.get("/", (req, res) => {
  return res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`🚀 Server is listening on port : ${port}`);
});
