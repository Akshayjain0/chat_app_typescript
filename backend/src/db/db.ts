import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database connected successfully ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error(`MONGODB ERROR :: ${error}`);
        process.exit(1);
    }
}
export default connectDB;