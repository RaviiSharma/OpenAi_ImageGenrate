const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv").config();
const port = 5000;
const route = require("./routes/openaiRoutes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/", route);

app.listen(port, () => console.log("server running on port 5000"));
