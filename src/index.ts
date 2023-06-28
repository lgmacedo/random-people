import express from "express";
import dotenv from "dotenv";
import personsRouter from "./routers/peopleRouter";

dotenv.config();

const app = express();
app.use(personsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
