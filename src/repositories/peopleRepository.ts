import { QueryResult } from "pg";
import connection from "../database/connection";

async function getAllPeople() {
  return connection.query(`SELECT * FROM people`);
}

const personsRepository = { getAllPeople };
export default personsRepository;