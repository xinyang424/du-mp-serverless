import express, { Express } from "express";
import cors from "cors";
import homeRouter from "./router/home";
const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/home", homeRouter);
const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log("启动成功", port);
});
