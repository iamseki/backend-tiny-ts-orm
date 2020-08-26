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
            name: 'student_id',
            type: 'uuid',
          },
          {
            name: 'subject_id',
            type: 'uuid',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'students_subjects',
      new TableForeignKey({
        columnNames: ['student_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'students',
      })
    );

    await queryRunner.createForeignKey(
      'students_subjects',
      new TableForeignKey({
        columnNames: ['subject_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'subjects',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('students_subjects');
    let foreignKey = (table as Table).foreignKeys.find(fk => fk.columnNames.indexOf('student_id') !== -1);
    await queryRunner.dropForeignKey('students_subjects', foreignKey as TableForeignKey);

    foreignKey = (table as Table).foreignKeys.find(fk => fk.columnNames.indexOf('subject_id') !== -1);
    await queryRunner.dropForeignKey('students_subjects', foreignKey as TableForeignKey);

    await queryRunner.dropTable('students_subjects');
  }
}
