import express from "express";
import bodyparser from "body-parser";
const { json, urlencoded } = bodyparser;
import cors from "cors";
import userRouter from "./router/userRouter.js";
import healthRouter from "./router/healthRouter.js";
import db from "./config/dbConfig.js";

db.sync();

async function connectDatabase() {
  try {
    await db.authenticate();
  } catch (err) {
    console.log("Error: " + err);
  }
}

await connectDatabase();

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/v1/user", userRouter);
app.use("/", healthRouter);

export const start = async () => {
  try {
    app.listen(3001, () => {
      console.log(`starting server on port`);
    });
  } catch (e) {
    console.error(e);
  }
};

try {
  start();
} catch (error) {
  console.log(error);
}

export default app;
