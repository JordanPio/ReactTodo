// config and setup express and cors
const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

// import todoController
const todoController = require("./controllers/todoController");

//seutp routers

router.get("/", todoController.loadData);
router.post("/create-item", todoController.createItem);

module.exports = router;
