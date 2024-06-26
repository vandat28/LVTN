const express = require("express");
const app = express();

const port = 8080;

var cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const route = require("./routes/route");
route(app);

app.listen(port, () => console.log(`server running at port ${port}`));
