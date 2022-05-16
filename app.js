const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error.message);
  }
};

start();
