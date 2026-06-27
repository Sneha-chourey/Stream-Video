import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        // upload the file on cloudinary 
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded successfully
        console.log("file is uploaded on cloudinary ",response.url);
        // delete after success
        return response;
    }
   catch(error) {
    await fs.unlink(localFilePath).catch(() => {})
    return null;
  }
}
export {uploadOnCloudinary}