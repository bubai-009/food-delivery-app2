//logic to connect with the database
//mongodb+srv://ShivaChatterjee:Shivamantu2003@cluster0.so3g7q2.mongodb.net/?
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ShivaChatterjee:Shivamantu2003@cluster0.so3g7q2.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
