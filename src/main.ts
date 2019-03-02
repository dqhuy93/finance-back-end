import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const PROT_DEFAULT = process.env.PORT || 3000;
  await app.listen(PROT_DEFAULT);
}
bootstrap();
