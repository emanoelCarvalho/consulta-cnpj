import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = app.get(EnvService); 
  const PORT = config.getPort;
  
  await app.listen(PORT );
}
bootstrap();
