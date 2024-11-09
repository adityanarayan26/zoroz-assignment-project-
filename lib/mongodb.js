import mongoose from "mongoose";



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_MONGODB_URI)
        console.log('connected to mongodb');

    } catch (error) {
        console.log('error connecting mongodb', error);

    }
}

export default connectDB