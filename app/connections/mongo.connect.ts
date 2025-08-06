import mongoose from "mongoose";

const mongoUri = "mongodb://localhost:27017/pink_slip_db";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("✅ Connected to local MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectToMongo;