import express from "express";
import globalRouter from "./routers/globalRouter.js";

const app = express();

const port = 3001;

app.set("port", port);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);

app.listen(port, () => console.log("Listening on", port));

export default app;
