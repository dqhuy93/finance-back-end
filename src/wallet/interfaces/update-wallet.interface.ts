export interface CreateWallet {
  readonly id: number;
  readonly paymentDay: string;
  readonly description: string;
  readonly totalMoney: number;
  readonly updateAt: string;
  readonly user: number;
  readonly category: number;
}
