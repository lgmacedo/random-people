import { Router } from "express";
import { getPerson } from "../controllers/peopleController";

const personsRouter = Router();
personsRouter.get("/person", getPerson);

export default personsRouter;