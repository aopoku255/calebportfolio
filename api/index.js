const app = require("./api");

module.exports = (req, res) => {
  return app(req, res);
};
