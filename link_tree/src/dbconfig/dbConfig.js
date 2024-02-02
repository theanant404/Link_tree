
import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";
const connectDB=async()=>{
    try{
        const connectionInstance= await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\nMongoDB connected !! DB HOST:-${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGOODB connected error:-",error);
        process.exit(1)
    }
}

export default connectDB();


// // This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
// import { MongoClient } from "mongodb"

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
// }

// const uri = process.env.MONGODB_URI
// const options = {}

// let client
// let connectDB

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   connectDB = global._mongoClientPromise
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options)
//   connectDB = client.connect()
//   console.log("db connected")
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default connectDB