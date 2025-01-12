import { Module } from '@nestjs/common';
import { CnpjModule } from './cnpj/cnpj.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CnpjModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
