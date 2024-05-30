import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  planet: string;

  @Column()
  lot: number;
  @Column()
  @Column()
  phone: string;

  @Column()
  coordinates: string;

  @Column()
  type: string;
}
