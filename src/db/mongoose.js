const mongoose = require("mongoose");
const DB =
  "mongodb+srv://Uj293:Abc123456@cluster0.yy2tidg.mongodb.net/database?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((err) => {
    console.log("no connection");
  });
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
