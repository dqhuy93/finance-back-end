import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsNotEmpty()
  readonly paymentDay: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly totalMoney: number;

  @IsNotEmpty()
  @IsNumber()
  user: any;

  @IsNotEmpty()
  @IsNumber()
  category: any;
}
