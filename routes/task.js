const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  removeItem,
} = require("../controllers/task");

// Routes
router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getItem).delete(removeItem).patch(updateItem);

module.exports = router;
