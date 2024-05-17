import dotenv from 'dotenv';
import connectDB from './db/db';
import { app } from './app';

dotenv.config({
    path: '../.env'
})
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`);
    })
})
    .catch((error) => {
        console.error(`Connection failed :: ${error}`)
    })