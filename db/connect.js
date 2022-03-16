const mongoose = require("mongoose");

const accessString =
  "mongodb+srv://Jaheim:programming@nodeexpressprojects.v89ck.mongodb.net/NodeExpressProjects?retryWrites=true&w=majority";

mongoose
  .connect(accessString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB..."))
  .catch(err => console.log(err));
