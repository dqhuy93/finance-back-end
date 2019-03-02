import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const PORT_DEFAULT = process.env.PORT || 3000;
  await app.listen(PORT_DEFAULT);
}
bootstrap();
