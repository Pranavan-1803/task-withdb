const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

router.route("/create").post((req, res)=>{
    const title = req.body.title;
    const content = req.body.content; 
    const newTask = new Task({
        title,
        content
    });

    newTask.save();

});

router.route("/tasks").get((req, res) => {
    Task.find()
        .then(foundTasks => res.json(foundTasks))
})

module.exports = router;