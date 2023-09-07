const express = require("express");
const cors = require("cors");
const homeRouter = require("./router/home.cjs");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/home", homeRouter);

const port = 80;

app.listen(port, () => {
  console.log("启动成功", port);
});
