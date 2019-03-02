import {
  Controller,
  Get,
  Post,
  Response,
  Body,
  HttpStatus,
  Put,
  Req,
  Request,
  UseGuards,
  Headers,
  Param,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Wallet } from './wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user/user.decorator';

@Controller('wallet')
export class WalletController {
  constructor(private walletService: WalletService) {}

  // @Get()
  // @UseGuards(AuthGuard())
  // getWallets() {
  //   return this.walletService.findAll();
  // }

  @Get('/my-wallet')
  @UseGuards(AuthGuard())
  async getMyWallets(
    @User('id') userId: number,
    // @Req() request: Request,
  ): Promise<Wallet[]> {
    return await this.walletService.findByUserId(userId);
  }

  // @Get(':name')
  // getProductByName(@Param() params: any): Promise<Wallet> {
  //   return this.walletService.findByName(params.name);
  // }

  @Post()
  @UseGuards(AuthGuard())
  async createWallet(
    @Body() body: CreateWalletDto,
    @User('id') userId: number,
  ) {
    body.user = userId;
    return await this.walletService.createWallet(body);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateWallet(
    @User('id') userId: number,
    @Param('id') walletId,
    @Body() body: UpdateWalletDto,
  ) {
    return await this.walletService.updateWallet(walletId, userId, body);
  }
}
