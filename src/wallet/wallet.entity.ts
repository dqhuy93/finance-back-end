import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentDay: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: 0 })
  totalMoney: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt?: string;

  @ManyToOne(() => User, user => user.wallets)
  public user: User;

  @ManyToOne(() => Category, category => category.categories)
  public category: Category;
}
