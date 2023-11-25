
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';


@Entity()
export class Turn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  completed: boolean;

  @Column()
  date_register: Date;

  date_register_string: string;

  @Column()
  order: number;

  @Column({ default: false })
  isSchedule: boolean;

}
