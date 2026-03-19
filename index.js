// import mongoose from "mongoose";

// async function dbConnection() {
//     await mongoose.connect("mongodb://localhost:27017/firstdb");
//     const schema = mongoose.Schema({
//         name: String,
//         email: String,
//         age: Number,
//     })

//     const Model = mongoose.model('firstcollection', schema,'firstcollection');
//     const result = await Model.find();
//     console.log(result);

// }
// dbConnection();

//                  ============ ====================== ===============
//                        Get API data from mongodb with mongoose
//                  ============ ====================== ===============

import mongoose from "mongoose";
import express from 'express';
import studentModel from "./model/studentModel.js";

await mongoose.connect("mongodb://localhost:27017/firstdb").then(() => {
    console.log("__________connected");

})

const app = express();

app.get('/', async (req, resp) => {

    const studentData = await studentModel.find();

    resp.send(studentData)
})
app.listen(3200)



//                  ============ ====================== ===============
//                        Make post API in Node with mongoose
//                  ============ ====================== ===============
