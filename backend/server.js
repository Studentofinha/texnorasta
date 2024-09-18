import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from "./middleware/errorHandler.js";
dotenv.config();

connectDB();
const app = express();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
