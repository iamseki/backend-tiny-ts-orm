import { getRepository, createConnection, Connection } from 'typeorm';
import Student from '../entities/Student';

let connection: Connection;

beforeAll(async () => {
  connection = await createConnection();
});

afterAll(async () => {
  await connection.close();
});

describe('Testing Business Logic Service', () => {
  it('Should returning an empty array', async () => {
    const students = await getRepository(Student).createQueryBuilder().getMany();
    expect(students.length).toBe(0);
  });
});
