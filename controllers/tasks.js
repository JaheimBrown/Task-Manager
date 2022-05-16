const asyncWrapper = require("../middleware/AsyncWrapper");
const Task = require("../model/task");
const { createCustomError } = require("../error/custom-error");

const getAllItems = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findById(taskID);

  if (!task) {
    return next(createCustomError(`No such task with id: ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete(taskID);

  if (!task) {
    return next(createCustomError(`No such task with id: ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate(taskID, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No such task with id: ${taskID}`, 404));
  }

  res.status(201).json(task);
});

module.exports = { getAllItems, createTask, getTask, updateTask, deleteTask };
