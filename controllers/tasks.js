const Task = require("../model/task");
const getAllItems = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findById(taskID);

    if (!task) {
      return res.status(404).json({ msg: `No such task with id: ${taskID}` });
    }

    return res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete(taskID);

    if (!task) {
      return res.status(404).json({ msg: `No such task with id: ${taskID}` });
    }

    return res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate(taskID, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: "no such task found." });
    }

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllItems, createTask, getTask, updateTask, deleteTask };
