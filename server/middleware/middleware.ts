import express from "express";
import bodyParser from "body-parser";
import router from "../routes/userRoutes";
import database from "../db/database";

const app = express();

app.use(bodyParser.json());
app.use('/api',router);

export default async () => {
    database.authenticate();
    return app;
}