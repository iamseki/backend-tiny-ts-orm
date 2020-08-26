import { getRepository } from 'typeorm';
import Student from '../entities/Student';

class SomeBusinessLogicService {
  public async execute(): Promise<Student[]> {
    const students = await getRepository(Student).createQueryBuilder().getMany();

    // const saving = await getRepository(Student).save({ student object })

    return students;
  }
}

export default SomeBusinessLogicService;
