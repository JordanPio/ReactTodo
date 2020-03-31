const todoCollection = require("../db")
  .db("TodoApp")
  .collection("items");

// const ObjectID = require("mongodb").ObjectID;

exports.loadData = function(req, res) {
  try {
    todoCollection.find().toArray(function(err, items) {
      res.send(items);
    });
  } catch (error) {
    res.status("401").send(error.message);
  }
};

exports.createItem = function(req, res) {
  let safeText = req.body.text;
  try {cd
    todoCollection.insertOne({ text: safeText }, function(err, info) {
      res.json(info.ops[0]);
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
};
