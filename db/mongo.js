const mongoose = require("mongoose");

const connectMongo = async (uri) => {
  await mongoose.connect(uri);
  console.log("Mongo connected");
};

const getMongoReadyState = () => {
  return mongoose.connection.readyState;
};

module.exports = { connectMongo, getMongoReadyState };
