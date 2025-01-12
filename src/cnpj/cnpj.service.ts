import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { EnvService } from 'src/env/env.service';


@Injectable()
export class CnpjService {
  private  apiUrl: string;
  private  apiKey: string; 

  constructor(config: EnvService) {
    this.apiUrl = config.getKeyApi();
    this.apiKey = config.getUrl();
  }

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
        "Error ao consultar o CNPJ", 
        HttpStatus.BAD_REQUEST
      )
    }
  }
}
