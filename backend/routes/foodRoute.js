import express from "express";
import { addFood, listFood, removeFodd } from "../controlers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
//file rename and fill name become unique

const upload = multer({ storage: storage });

//we used the post method to send the data on the server and the server our data will be processed and after that we will get response
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFodd);

export default foodRouter;
