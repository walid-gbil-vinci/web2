import express from "express";
import FilmsRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films",FilmsRouter);

export default app;
