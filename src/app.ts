import "express-async-errors";
import express, { Application } from "express";
import * as middlers from "./middlewares";
import * as R from "./routers";

const app: Application = express();
app.use(express.json());

app.use("/movies", R.moviesRouter);

app.use(middlers.handleError);

export default app;
