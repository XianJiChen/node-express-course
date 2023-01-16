

const getAllTasks = (req, res) => {
    res.send('all items from the file')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    // res.send('get task')
    res.json({id:req.id})
}

const updateTask = (req, res) => {
    // res.send('update task')
    res.json({id:req.id})
}

const deleteTask = (req, res) => {
    res.send('delete task')
    res.json({id:req.id})
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}