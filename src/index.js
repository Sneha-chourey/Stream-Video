import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';
import {app} from './app.js'

const PORT = process.env.PORT||3000;

const startserver = async()=>{
    try{
    await connectDB()
        app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
        
    })
}
    catch(err){
        console.log("MONGO DB connection failed !!! ",err);
    }
}

startserver()













