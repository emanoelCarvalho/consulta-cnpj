import { Module } from '@nestjs/common';
import { CnpjModule } from './cnpj/cnpj.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [CnpjModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
