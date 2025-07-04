import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

export async function connectToDatabase() {
  try {
    if (!uri || !dbName) {
      throw new Error('MONGODB_URI or MONGODB_DB_NAME not set in environment variables');
    }

    await mongoose.connect(uri, {
      dbName: dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    mongoose.set("strictQuery", false);

    const db = mongoose.connection;

    db.once('open', () => {
      console.log(`✅ Connected to MongoDB database: ${dbName}`);
    });

    db.on('error', console.error.bind(console, '❌ MongoDB connection error:'));

  } catch (error) {
    console.error('Database connection failed:', error);
  }
}
