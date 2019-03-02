import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateWalletDto {
  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty()
  readonly paymentDay: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly totalMoney: number;

  @IsNotEmpty()
  readonly updateAt: string;

  @IsNotEmpty()
  @IsNumber()
  readonly category: any;
}
