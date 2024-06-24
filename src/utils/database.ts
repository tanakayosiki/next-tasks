import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI|| '')
        console.log('できたよ')
    } catch (error) {
        console.log(error)
        throw new Error();
    }
}