const express = require("express");
const dotenv = require("dotenv");
const router = require("./src/router/index.js");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", router);

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
