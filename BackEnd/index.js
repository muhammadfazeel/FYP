const express = require("express");
const mongoose = require("mongoose");
const patient = require("./routes/pat");
const app = new express();

mongoose.connect("mongodb://localhost/database", { useNewUrlParser: true });
app.use(express.json());

app.use("/patient", patient);

app.listen(5000, () => {
  console.log("server Running on port 5000");
});
