import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './wallet.entity';
// import { User } from '../user/user.entity';
// import { CreateWallet } from './interfaces/create-wallet.interface';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>, // private readonly userRepository: Repository<User>,
  ) {}

  async createWallet(wallet: CreateWalletDto): Promise<any> {
    const result = await this.walletRepository.save(wallet);
    return result;
  }

  async updateWallet(
    walletId: number,
    userId: number,
    wallet: UpdateWalletDto,
  ): Promise<any> {
    const toUpdate = await this.walletRepository.findOne({ id: walletId });
    const updated = Object.assign(toUpdate, wallet);
    const article = await this.walletRepository.save(updated);
    return { article };
  }

  async findAll(): Promise<Wallet[]> {
    return await this.walletRepository.find();
  }

  async findByUserId(userId: number): Promise<Wallet[]> {
    const result = await this.walletRepository.find({
      relations: ['user'],
      where: {
        user: userId,
      },
    });
    return result;
  }

  async findById(id: number): Promise<Wallet> {
    const result = await this.walletRepository.find({ id });
    return result[0];
  }
}
