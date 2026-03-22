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

// import mongoose from "mongoose";
// import express from 'express';
// import studentModel from "./model/studentModel.js";

// await mongoose.connect("mongodb://localhost:27017/firstdb").then(() => {
//     console.log("__________connected");

// })

// const app = express();

// app.get('/', async (req, resp) => {

//     const studentData = await studentModel.find();

//     resp.send(studentData)
// })
// app.listen(3200)




//                  ============ ====================== ===============
//                        Make post API in Node with mongoose
//                  ============ ====================== ===============
// import mongoose from "mongoose";
// import express from 'express'
// import studentModel from "./model/studentModel.js";

// const app = express()

// app.use(express.json());

// await mongoose.connect('mongodb://localhost:27017/firstdb').then(() => {
//     console.log("__________connect_____");

// })

// app.get('/', async (req, resp) => {
//     const studentData = await studentModel.find()
//     resp.send(studentData)
// })

// app.post('/save', async (req, resp) => {
//     console.log(req.body);

//     const { name, email, age } = req.body;
//     if (!req.body || !name | !age | !email) {
//         resp.send({
//             message: "Data not Stored",
//             success: false,
//             storedInfo: null
//         })
//         return false;
//     }

//     const studentData = await studentModel.create(req.body)

//     resp.send({
//         message: "Data  Stored",
//         success: true,
//         storedInfo: studentData
//     })
// })

// app.listen(3200)





//                  ============ ====================== ===============
//                        Make post API in Node with mongoose
//                  ============ ====================== ===============

// import mongoose from "mongoose";
// import express from 'express'
// import studentModel from "./model/studentModel.js";

// const app = express()

// app.use(express.json());

// await mongoose.connect('mongodb://localhost:27017/firstdb').then(() => {
//     console.log("__________connect_____");

// })

// app.get('/', async (req, resp) => {
//     const studentData = await studentModel.find()
//     resp.send(studentData)
// })

// app.post('/save', async (req, resp) => {
//     console.log(req.body);
//     const { name, email, age } = req.body;
//     if (!req.body || !name | !age | !email) {
//         resp.send({
//             message: "Data not Stored",
//             success: false,
//             storedInfo: null
//         })
//         return false;
//     }
//     const studentData = await studentModel.create(req.body)
//     resp.send({
//         message: "Data  Stored",
//         success: true,
//         storedInfo: studentData
//     })
// })

// app.put('/update/:id', async (req, resp) => {
//     const id = req.params.id
//     console.log(req.body, id);

//     const studentData = await studentModel.findByIdAndUpdate(id, {
//         ...req.body
//     })

//     resp.send({
//         message: "Data updated",
//         success: true,
//         info: studentData
//     })
// })
// app.delete('/delete/:id', async (req, resp) => {
//     const id = req.params.id

//     const studentData = await studentModel.findByIdAndDelete(id)

//     resp.send({
//         message: "Data updated",
//         success: true,
//         info: studentData
//     })
// })

// app.listen(3200)




//                  ============ ====================== ===============
//                                   CORS ISSUE
//                  ============ ====================== ===============
// import express from 'express'
// import cors from 'cors'
// const app = express();

// app.use(cors())
// app.get('/', (req, resp) => {
//     resp.send({
//         name: "Navi Mughal",
//         email: "navi@gmail.com",
//         age: 29
//     })
// })
// app.listen(3200)



//                  ============ ====================== ===============
//                               Upload file in Node.js
//                  ============ ====================== ===============
// import express from 'express';
// import multer from 'multer';

// const app = express()
// const storage=multer.diskStorage({
//     destination:function (req,file,cb) {
//         cb(null,'upload')
//     },
//     filename:function (req,file,cb) {
//         cb(null,file.originalname)
//     },
// })

// const upload = multer({storage})

// app.get('/', (req, resp) => {
//     resp.send(
//         `<form action="/upload" method="post" enctype="multipart/form-data">
//             <input type="file" name='myfile'/><br /><br />
//             <button>Upload File</button>
//         </form>`
//     )
// })

// app.post('/upload', upload.single('myfile'), (req, resp) => {
//     resp.send({
//         message: "File uploaded",
//         info: req.file
//     })
// })

// app.listen(3200)






import express from 'express';
import multer from 'multer';

const app = express()
const storage=multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'upload')
    },
    filename:function (req,file,cb) {
        cb(null,file.originalname)
    },
})

const upload = multer({storage})

app.get('/', (req, resp) => {
    resp.send(
        `<form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name='myfile'/><br /><br />
            <button>Upload File</button>
        </form>`
    )
})

app.post('/upload', upload.single('myfile'), (req, resp) => {
    resp.send({
        message: "File uploaded",
        info: req.file
    })
})

app.listen(3200)