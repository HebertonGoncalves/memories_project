import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://adm_mern_1:2LmDJjyFyfwKr9z@cluster0.0w74v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>{console.log('server is running on port:', PORT)})
.catch((error)=>console.log(error.mensage));

