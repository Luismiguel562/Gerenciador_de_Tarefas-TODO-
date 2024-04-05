import "reflect-metadata";
import express from "express";
import cors from "cors";
import taskRouter from "./routes/TaskRoute";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Origin",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());

app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
