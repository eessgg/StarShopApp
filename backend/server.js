import express from 'express';
import dotenv from "dotenv";
import chalk from "chalk";
import connectDB from "./config/db.js"; 
import {notFound, errorHandler} from './middleware/errorMidleware.js'
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('API is working');
});

app.use("/api/products", productRoutes);

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
  // console.log(`server working in ${process.env.NODE_ENV} mode on port: ${PORT}`);
  console.log(
    chalk.bgGreen.black(`server working in ${mode} mode on port: ${PORT}`)
  );
});