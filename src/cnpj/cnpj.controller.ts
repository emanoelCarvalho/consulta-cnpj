import { Controller, Get, Param, HttpException } from '@nestjs/common';
import { CnpjService } from './cnpj.service';

@Controller('cnpj')
export class CnpjController {
  constructor(private cnpjService: CnpjService) {}

  @Get(':cnpj')
  async getCnpjInfo(@Param('cnpj') cnpj: string) {
    if (!/^\d{14}$/.test(cnpj)) {
      throw new HttpException('CNPJ inválido!', 400);
    }
    return this.cnpjService.getCnpjInfo(cnpj);
  }
}
