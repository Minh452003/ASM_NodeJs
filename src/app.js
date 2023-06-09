import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routers/product"

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

mongoose.connect("mongodb://127.0.0.1:27017/onluyen1");
export const viteNodeApp = app;