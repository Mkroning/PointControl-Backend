import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity("employees")
class Employee {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name:string;

  @Column()
  description: string;

  @Column()
  timeEntry: string;

  @Column()
  timeDeparture: string;

  @CreateDateColumn();
  created_at: Date;
}

export default Employee;
