const mongoose = require("mongoose")

const tasksSchema = {
    title: String,
    content: String
}

const Task = mongoose.model("Task", tasksSchema);

module.exports = Task;