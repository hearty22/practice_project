import mongoose from "mongoose";

export const connectDB = async () =>{
try {
    await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connection.db.dropDatabase().then(() => console.log('base de datos dropeada'));
    console.log("base de datos conectada") 
} catch (error) {
  console.log(error);
}
}

