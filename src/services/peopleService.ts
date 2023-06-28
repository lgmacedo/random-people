import personsRepository from "../repositories/peopleRepository";

async function getRandomPerson() {
  const allPeople = await personsRepository.getAllPeople();
  const randomNumber = getRandomNumber(allPeople.rowCount);
  return allPeople.rows[randomNumber];
}

function getRandomNumber(upperBound: number): number {
  return Math.floor(Math.random() * upperBound);
}

const personsServices = { getRandomPerson };
export default personsServices;
