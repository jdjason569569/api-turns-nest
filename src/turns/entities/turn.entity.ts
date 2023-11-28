
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity()
export class Turn {
  @PrimaryGeneratedColumn()
  id_turn: number;

  @Column()
  identification: number;

  @Column()
  name: number;

  

}
