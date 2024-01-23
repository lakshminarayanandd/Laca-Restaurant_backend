import mongoose from 'mongoose';

export const dbconnection = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("connected to mongodb");
    })
    .catch((error) => {
        console.log("Failed to connect database", error);
    })
}