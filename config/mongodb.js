import mongoose from "mongoose";

const connetDB = async () => {
    console.log("trying")
    mongoose.connection.on('connected', () => {
        console.log("DB CONNECTED")
    })

    await mongoose.connect(`mongodb://localhost:27017/dvlpr`)
}

export default connetDB;