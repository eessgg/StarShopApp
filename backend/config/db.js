import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    // console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(
      chalk.bgGreen.black(`MongoDB Connected: ${conn.connection.host}`)
    );
  } catch (error) {
    console.error(chalk.bgRed(`Error: ${error.message}`));
    process.exit(1);
  }
};

export default connectDB;
