const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`data base connected to: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;