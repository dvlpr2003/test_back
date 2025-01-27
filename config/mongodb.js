import mongoose from "mongoose";

const connetDB = async () => {
    console.log("trying")
    mongoose.connection.on('connected', () => {
        console.log("DB CONNECTED")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/devil`,)
}

export default connetDB;