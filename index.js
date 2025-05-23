const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

app.get("/:page", (req, res, next) => {
  const fileName = path.join(__dirname, "public", `${req.params.page}.html`);
  res.sendFile(fileName, (err) => {
    if (err) {
      next(); // Move to the next middleware if the file is not found
    }
  });
});

app.get((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`APP RUNNING ON ${PORT}`);
});
