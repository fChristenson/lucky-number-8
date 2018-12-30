const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

module.exports = app;
