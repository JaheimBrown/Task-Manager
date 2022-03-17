const mongoose = require("mongoose");

const accessString =
  "mongodb+srv://Jaheim:developer@nodeexpressprojects.v89ck.mongodb.net/NodeExpressProjects?retryWrites=true&w=majority";

const connectDB = url => {
  return mongoose.connect(accessString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
