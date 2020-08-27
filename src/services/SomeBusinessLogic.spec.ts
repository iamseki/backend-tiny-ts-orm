import { createConnection, Connection } from 'typeorm';
import Subject from '../entities/Subject';
import Student from '../entities/Student';
import SomeBusinessLogicService from './SomeBusinessLogic';

let connection: Connection;

beforeAll(async () => {
  connection = await createConnection();
});

afterAll(async () => {
  await connection.close();
});

describe('Testing Business Logic Service', () => {
  it('Should returning an empty array', async () => {
    const businessLogicService = new SomeBusinessLogicService();

    const studentsPerSubjects = await businessLogicService.execute();

    expect(studentsPerSubjects).toMatchObject<Subject[]>(studentsPerSubjects);
    studentsPerSubjects.forEach(element => {
      expect(element.students).toMatchObject<Student[]>(element.students);
    });
  });
});
