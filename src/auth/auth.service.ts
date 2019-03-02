import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken(id: number, email: string) {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    // const user: JwtPayload = { email: 'user@email.com' };
    // return this.jwtService.sign(user);

    const user: JwtPayload = { id, email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  // async validateUser(payload: JwtPayload): Promise<any> {
  //   return await this.usersService.getUserByEmail(payload.email);
  // }

  async validateUser(payload: JwtPayload): Promise<any> {
    if (payload && payload.email) {
      const isVerify = await this.userService.getUserByEmail(payload.email);
      if (isVerify) {
        return payload;
      } else {
        return false;
      }
    }
    return false;
  }
}
