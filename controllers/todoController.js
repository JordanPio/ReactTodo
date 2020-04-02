const todoCollection = require("../db")
  .db("TodoApp")
  .collection("items");

const ObjectID = require("mongodb").ObjectID;

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
  try {
    todoCollection.insertOne({ text: safeText }, function(err, info) {
      res.json(info.ops[0]);
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.deleteItem = function(req, res) {
  try {
    todoCollection.deleteOne({ _id: new ObjectID(req.body.id) }, function(
      err,
      info
    ) {
      res.send("Item deleted succesfully");
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.editItem = function(req, res) {
  let safeText = req.body.text;
  try {
    todoCollection.findOneAndUpdate(
      { _id: new ObjectID(req.body.id) },
      { $set: { text: safeText } },
      function(err, info) {
        res.send("update successful");
      }
    );
  } catch (error) {
    res.status("401").send(error.message);
  }
};
