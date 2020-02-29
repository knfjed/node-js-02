const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hallo");
  console.log("/ is just called");
});

app.get("/user", (req, res) => {
  res.send("user hello");
});

app.listen(3000, () =>
  console.log(`server is now working at http://localhost:3000`)
);
