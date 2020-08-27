import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import Student from '../../entities/Student';
import Subject from '../../entities/Subject';

export default class SeedDatabase1598487294838 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const chris = await getRepository(Student).save({
      cpf: '44998266837',
      name: 'Christian Seki',
      ra: '082170004',
      email: 'chrisyuri_19@hotmail.com',
    });

    const thami = await getRepository(Student).save({
      cpf: '23750532818',
      name: 'Thamires Nobrega',
      ra: '08127004',
      email: 'thamires.nmedeiros@gmail.com',
    });

    await getRepository(Subject).save({
      description: 'Computer Science',
      students: [chris, thami],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('subjects');
    await queryRunner.clearTable('students');
  }
}
