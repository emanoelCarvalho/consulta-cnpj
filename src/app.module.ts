import { Module } from '@nestjs/common';
import { CnpjModule } from './cnpj/cnpj.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [CnpjModule, EnvModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
