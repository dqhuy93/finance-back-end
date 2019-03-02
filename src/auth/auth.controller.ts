import {
  Controller,
  HttpStatus,
  Response,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async loginUser(@Response() res: any, @Body() body: User) {
    if (!(body && body.email && body.password)) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Email and password are required!' });
    }

    const user = await this.userService.getUserByEmail(body.email);

    if (user) {
      if (
        await this.userService.compareHash(body.password, user.passwordHash)
      ) {
        return res
          .status(HttpStatus.OK)
          .json(await this.authService.createToken(user.id, user.email));
      }
    }

    return res
      .status(HttpStatus.FORBIDDEN)
      .json({ message: 'Email or password wrong!' });
  }

  @Post('register')
  async registerUser(@Response() res: any, @Body() body: User) {
    if (!(body && body.email && body.password)) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Email and password are required!' });
    }

    let user = await this.userService.getUserByEmail(body.email);

    if (user) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Email exists' });
    } else {
      user = await this.userService.createUser(body);
      if (user) {
        user.passwordHash = undefined;
      }
    }

    return res.status(HttpStatus.OK).json(user);
  }

  // @Get('token')
  // async createToken(): Promise<any> {
  //   return await this.authService.createToken();
  // }

  // @Get('data')
  // @UseGuards(AuthGuard())
  // findAll() {
  //   // This route is restricted by AuthGuard
  //   // JWT strategy
  // }
}
