import { Injectable } from '@nestjs/common';
import { CreateCnpjDto } from './dto/create-cnpj.dto';
import { UpdateCnpjDto } from './dto/update-cnpj.dto';

@Injectable()
export class CnpjService {
  create(createCnpjDto: CreateCnpjDto) {
    return 'This action adds a new cnpj';
  }

  findAll() {
    return `This action returns all cnpj`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cnpj`;
  }

  update(id: number, updateCnpjDto: UpdateCnpjDto) {
    return `This action updates a #${id} cnpj`;
  }

  remove(id: number) {
    return `This action removes a #${id} cnpj`;
  }
}
