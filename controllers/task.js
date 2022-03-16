const getAllItems = (req, res) => {
  res.send("got all items from the server.");
};

const getItem = (req, res) => {
  res.send("Got single task");
};

const createItem = (req, res) => {
  res.send("Created Item");
};

const updateItem = (req, res) => {
  res.send("Updated selected Item");
};

const removeItem = (req, res) => {
  res.send("Item deleted");
};

module.exports = {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  removeItem,
};
