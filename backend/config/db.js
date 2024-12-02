import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://tirthg2612:T%21rt%23%40data@cluster0.emv5y.mongodb.net/food-del').then(() =>console.log("DB Connected"));
}
