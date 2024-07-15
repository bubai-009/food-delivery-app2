import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express(); //we will initialize our app using this express package
const port = process.env.PORT || 4000; //our server will running in this port number

//middleware
app.use(express.json()); //using this middleware whenever we will get the request from the frontend to backend that will be passed using this json
app.use(cors()); //using this we can access the backend from any frontend

// db connection
connectDB(); //database connected with the express app

//API endpoint => create the api endpoint for the food routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
}); //this get method is a http method using that we can request the data from the server

//runn the express server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
