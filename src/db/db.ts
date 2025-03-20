import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Connected to MongoDB" + connection.host);
        })
        connection.on("error", (error) => {
            console.log("MongoDB connection error" + error);
            process.exit(1);
        })
      
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}







