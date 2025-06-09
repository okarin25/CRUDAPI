import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/product.routes.js";

dotenv.config();

const PORT = 5000;
const app = express();
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Connection not established"));

app.use(express());

//routes
app.use("api/product", productRoute);

app.listen(PORT, (req, res) => console.log(`Server started on  http://localhost:${PORT}`));