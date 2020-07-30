const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("../src/routes/index");

require("./database");

app.use(cors());

app.use("/",routes());

const port = 3000;

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});