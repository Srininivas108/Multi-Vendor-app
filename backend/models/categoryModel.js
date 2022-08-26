import mongoose from "mongoose";

//for create Table into DB for User
const CategorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true}
    }, 
    {
        timestamps: true //for date
    }
);

export default mongoose.model("Category", CategorySchema);
