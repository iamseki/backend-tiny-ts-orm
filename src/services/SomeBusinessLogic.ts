import { getRepository } from 'typeorm';
import Subject from '../entities/Subject';

class SomeBusinessLogicService {
  public async execute(): Promise<Subject[]> {
    // const students = await getRepository(Student).createQueryBuilder().getMany();

    // const saving = await getRepository(Student).save({ student object })

    const studentsPerSubjects = await getRepository(Subject).find({ relations: ['students'] });

    return studentsPerSubjects;

    /* Expected Response:
  [
    -{
      id: "5fe41086-0b41-42eb-882e-bff886180282",
      description: "Computer Science",
      students:- [
          -{
          id: "5be89f60-d53b-4583-b214-d448e4d608df",
          name: "Christian Seki",
          email: "chrisyuri_19@hotmail.com",
          cpf: "44998266837",
          ra: "082170004",
          created_at: "2020-08-27T03:52:58.837Z",
          updated_at: "2020-08-27T03:52:58.837Z"
          },
          -{
          id: "10359346-319a-426d-b590-08c05ddbf8a6",
          name: "Thamires Nobrega",
          email: "thamires.nmedeiros@gmail.com",
          cpf: "23750532818",
          ra: "08127004",
          created_at: "2020-08-27T03:52:58.853Z",
          updated_at: "2020-08-27T03:52:58.853Z"
          }
        ]
      }
  ]
    */
  }
}

export default SomeBusinessLogicService;
