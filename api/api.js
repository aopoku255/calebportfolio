const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/:page", (req, res, next) => {
  const fileName = path.join(__dirname, "../public", `${req.params.page}.html`);
  res.sendFile(fileName, (err) => {
    if (err) {
      next();
    }
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../public", "404.html"));
});

module.exports = app;
