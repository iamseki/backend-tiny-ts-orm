import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Student from './Student';

@Entity('subjects')
class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  // JoinTable is used for many-to-many relations
  @ManyToMany(() => Student)
  @JoinTable({
    name: 'students_subjects',
  })
  students: Student[];
}

export default Subject;
