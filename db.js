const mongoDB = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();

mongoDB.connect(
  process.env.CONNECTIONSTRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  function(err, client) {
    module.exports = client;
    const app = require("./server");
    app.listen(process.env.port);
    console.log(`server started`);
  }
);
