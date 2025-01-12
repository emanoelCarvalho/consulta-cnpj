import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CnpjService } from './cnpj.service';
import { CreateCnpjDto } from './dto/create-cnpj.dto';
import { UpdateCnpjDto } from './dto/update-cnpj.dto';

@Controller('cnpj')
export class CnpjController {
  constructor(private readonly cnpjService: CnpjService) {}

  @Post()
  create(@Body() createCnpjDto: CreateCnpjDto) {
    return this.cnpjService.create(createCnpjDto);
  }

  @Get()
  findAll() {
    return this.cnpjService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cnpjService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCnpjDto: UpdateCnpjDto) {
    return this.cnpjService.update(+id, updateCnpjDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cnpjService.remove(+id);
  }
}
