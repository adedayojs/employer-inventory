require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./express.router");
const serveStatic = require("serve-static");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const port = process.env.PORT || 5000;

console.log("port", port);

app.use("/", router);
app.use(serveStatic(__dirname + "/dist"));
app.listen(port);
// eslint-disable-next-line no-console
console.log("server started " + port);

app.use(function(req, res) {
  res.status(404).json({ err: "error" });
});
