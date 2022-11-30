const express = require ('express');
const cors = require ('cors');
const app = express();

//settings
app.set('port', 5050);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/notes", require("./routes/note"));

module.exports = app;