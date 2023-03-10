const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

// const getAllTasks = async (req, res) => {
//     // res.send('all items from the file')
//     try {
//         const tasks = await Task.find({})
//         //res.status(200).json({ tasks, amount: tasks.length })
//         res
//             .status(200)
//             .json({ success: true, data: {tasks, nbHits: tasks.length }})
//     } catch (error) {
//         res.status(500).json({msg: error})
//     }
// }

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

// const createTask = async (req, res) => {
//     // res.json(req.body)
//     try {
//         const task = await Task.create(req.body)
//         res.status(201).json({ task })
//     } catch (error) {
//         res.status(500).json({msg: error})
//     }
// }

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getTask = asyncWrapper( async (req, res) => {
    const {id:taskID} = req.params
    const task = await Task.findOne({ _id: taskID })
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({ task })
})

// const updateTask = async (req, res) => {
//     // res.send('update task')
//     // res.json({id:req.id})
//     try {
//         const { id: taskID} = req.params

//         const task = await Task.findOneAndUpdate({ _id:taskID}, req.body ,{
//             new: true,
//             runValidators: true
//         })

//         if(!task){
//             return res.status(404).json({msg:`No task with id : ${taskID}`})
//         }

//         res.status(200).json({ task })
//     } catch (error) {
//         res.status(500).json({msg: error})
//     }
// }

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID} = req.params

    const task = await Task.findOneAndUpdate({ _id:taskID}, req.body ,{
        new: true,
        runValidators: true
    })

    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }

    res.status(200).json({ task })
})

// const deleteTask = async (req, res) => {
//     // res.send('delete task')
//     // res.json({id:req.id})
//     try {
//         const {id:taskID} = req.params;
//         const task = await Task.findOneAndDelete({ _id: taskID })
//         if(!task){
//             return res.status(404).json({msg:`No task with id : ${taskID}`})
//         }
//         res.status(200).send({ task:null, status:'success'})
//     } catch (error) {
//         res.status(500).json({msg: error})
//     }
// }


const deleteTask = asyncWrapper(async (req, res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID })
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).send({ task })
})

const editTask = async(req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
            overwrite: true
        })
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).send({ task:null, status:'success'})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask
}