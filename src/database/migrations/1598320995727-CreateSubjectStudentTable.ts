import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class CreateSubjectStudentTable1598320995727 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.createTable(
      new Table({
        name: 'students_subjects',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'studentsId',
            type: 'uuid',
          },
          {
            name: 'subjectsId',
            type: 'uuid',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'students_subjects',
      new TableForeignKey({
        columnNames: ['studentsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'students',
      })
    );

    await queryRunner.createForeignKey(
      'students_subjects',
      new TableForeignKey({
        columnNames: ['subjectsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'subjects',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('students_subjects');
    let foreignKey = (table as Table).foreignKeys.find(fk => fk.columnNames.indexOf('studentsId') !== -1);
    await queryRunner.dropForeignKey('students_subjects', foreignKey as TableForeignKey);

    foreignKey = (table as Table).foreignKeys.find(fk => fk.columnNames.indexOf('subjectsId') !== -1);
    await queryRunner.dropForeignKey('students_subjects', foreignKey as TableForeignKey);

    await queryRunner.dropTable('students_subjects');
  }
}
