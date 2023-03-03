const path = require("path");

module.exports = {
  entry: "./App.js",
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
