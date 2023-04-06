import { DB_URL } from "./configurations";
import mongoose from "mongoose";

const createDbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(DB_URL).then(() => console.log("mongodb Connected"));
  } catch (err) {
    console.log(`Error establishing the mongodb connection ${err}`);
  }
};

export { createDbConnection };
