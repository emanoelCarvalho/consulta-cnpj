import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EnvService } from 'src/env/env.service';
import axios from 'axios';

@Injectable()
export class CnpjService {
  constructor(private readonly config: EnvService) {}

  private readonly apiKey = this.config.getKeyApi;
  private readonly apiUrl = this.config.getUrl;


  async getCnpjInfo(cnpj: string) {
    try {
      const response = await axios.get(`${this.apiUrl}${cnpj}`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error ao consultar o CNPJ',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
