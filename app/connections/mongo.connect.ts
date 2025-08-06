import mongoose from "mongoose";

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "";

mongoose.set("strictQuery", false);

const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions); // Needed for TypeScript
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ MongoDB Atlas connection error:", error);
    process.exit(1);
  }

  mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB connection error event:", err);
  });
};

export default connectToMongo;