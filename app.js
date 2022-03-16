const express = require("express");
const app = express();
const port = 3000;

const router = require("./routes/task");

app.use("/", express.static("./public"));
app.use(express.json({ extended: false }));
app.use("/api/v1/tasks", router);

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
