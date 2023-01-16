// console.log('Task Manager App')

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


//middleware
app.use(express.json()) // if we don't use the we won't have that data in req.body

//routes
app.get('/hello', (req, res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


const port = 3000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}


// app.listen(port, console.log(`Server is listening on port ${port}...`))
start()