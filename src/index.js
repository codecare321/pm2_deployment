const express = require("express");
const { PORT } = require("./config/server.config");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, RahemanAli! PM2 deployment is successful!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
