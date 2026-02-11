// const { MongoClient } = require("mongodb");

// const url = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(url);
// async function connectDB() {
//   try {
//     await client.connect();
//     console.log("✅ Connected to MongoDB");

//     const db = client.db("sport");
//     const collection = db.collection("cricket");

//     await collection.insertOne({
//       name: "virat",
//       age: 30
//     });

//     console.log("✅ Data Inserted");

//   } catch (err) {
//     console.log("❌ Error:", err);
//   }
// }

// connectDB();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/salmankhan")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Connection Error", err));

  const studentSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Student = mongoose.model("Actor", studentSchema);

Student.create({
  name: "Faizan",
  age: 20
});

