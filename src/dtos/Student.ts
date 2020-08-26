export interface CreateStudentDTO {
  id: number;
}

export interface InformationStudentDTO {
  id: number;
  ra: string;
  name: string;
  email: string;
  subjects: StudentSubjectsDTO[];
}

interface StudentSubjectsDTO {
  id: number;
  description: string;
}
