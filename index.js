// IMPORT
const express = require("express");
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");

// INIT
const app = express();
const PORT = 3001;
const DB =
  "mongodb+srv://achievafutura:achieva17_@cluster0.uz2qygr.mongodb.net/?retryWrites=true&w=majority";

// MIDDLEWARE
app.use(express.json());
app.use(authRouter);

// DB Connection
mongoose.connect(DB).then(console.log("Successful Connection"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
