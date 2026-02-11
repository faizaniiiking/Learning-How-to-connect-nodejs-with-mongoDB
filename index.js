const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("bollywood");
    const collection = db.collection("actor");

    await collection.insertOne({
      name: "salman khan",
      age: 30
    });

    console.log("✅ Data Inserted");

  } catch (err) {
    console.log("❌ Error:", err);
  }
}

connectDB();
