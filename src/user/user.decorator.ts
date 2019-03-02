import { createParamDecorator } from '@nestjs/common';
import { SECRET } from '../config';
// import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';

export const User = createParamDecorator((data, req) => {
  // if route is protected, there is a user set in auth.middleware

  if (!!req.user) {
    return !!data ? req.user[data] : req.user;
  }

  // in case a route is not protected, we still want to get the optional auth user from jwt
  const token = req.headers.authorization
    ? (req.headers.authorization as string).split(' ')
    : null;
  if (token && token[1]) {
    const jwtService = new JwtService({
      secretOrPrivateKey: SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    });

    const decoded: any = jwtService.verify(token[1]);
    return !!data ? decoded[data] : decoded.user;

    // const decoded: any = jwtService.decode(token[1], {});

    // return decoded;
    // return !!data ? decoded[data] : decoded.user;
  }
});
