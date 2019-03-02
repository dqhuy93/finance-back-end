import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Wallet } from 'wallet/wallet.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 80 })
  name: string;

  @Column('int', { default: 0 })
  parentId: number;

  @OneToMany(type => Wallet, wallet => wallet.category)
  categories: Wallet[];
}
