const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Must provide a name value for task.'],
    trim: true,
    maxLength: [20, 'Task cannot be more than 20 characters long.']
  },
  completed: {
    type: Boolean,
    default: false
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
