import mongoose from "mongoose";

const connetDB = async () => {
    console.log("trying")
    mongoose.connection.on('connected', () => {
        console.log("DB CONNECTED")
    })

    await mongoose.connect(`mongodb+srv://sathya01:sathya01@cluster0.heq6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/dvlpr`,)
}

export default connetDB;