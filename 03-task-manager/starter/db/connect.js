const mongoose = require('mongoose')

// const connectionString = 
//     "mongodb+srv://xianjichen:<PASSWORD>@nodeexpressprojects.s10x4cj.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose
            .connect(url,{
                useNewUrlParser: true,
                useCreateIndex: true,
                userFindAndModify: false,
                useUnifiedTopology: true,
            })
}


// mongoose
//     .connect(connectionString,{
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         userFindAndModify: false,
//         useUnifiedTopology: true,
//     })
//     .then(()=>console.log('CONNECTED TO THE DB...'))
//     .catch((err)=>console.log(err))


module.exports = connectDB