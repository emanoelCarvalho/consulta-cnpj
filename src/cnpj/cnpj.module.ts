import { Module } from '@nestjs/common';
import { CnpjService } from './cnpj.service';
import { CnpjController } from './cnpj.controller';
import { EnvModule } from 'src/env/env.module';

@Module({
  imports: [EnvModule],
  controllers: [CnpjController],
  providers: [CnpjService],
})
export class CnpjModule {}
