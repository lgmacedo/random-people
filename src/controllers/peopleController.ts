import { Request, Response } from "express";
import personsServices from "../services/peopleService";

export async function getPerson(req: Request, res: Response) {
  try {
    const person = await personsServices.getRandomPerson();
    return res.status(200).send(person);
  } catch (err) {
    return res.status(500).send("Um erro inesperado aconteceu");
  }
}
