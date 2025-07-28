// server.js
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ace-softwares.6uf7m3y.mongodb.net/?retryWrites=true&w=majority&appName=ace-softwares`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("✅ Successfully connected to MongoDB!");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    } finally {
        await client.close();
    }
}

run();

