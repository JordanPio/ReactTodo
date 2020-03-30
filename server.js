const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require("path");
const morgan = require("morgan");
const compression = require("compression");
const dev = app.get("env") !== "production";

// load dotenv and config port

// const dotenv = require("dotenv");
// dotenv.config();
// port = process.env.PORT;
// app.listen(port, () => console.log(`server started on port ${port}`));

if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "build", "index.html"));
  });
}

if (dev) {
  app.use(morgan("dev"));
}

// router

const router = require("./router");
app.use("/", router);

const server = require("http").createServer(app);

//export server

module.exports = server;
