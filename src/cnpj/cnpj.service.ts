import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';


@Injectable()
export class CnpjService {
  private  apiUrl: string;
  private  apiKey: string; 

  constructor(config: ConfigService) {
    this.apiUrl = config.get<string>('API_URL');
    this.apiKey = config.get<string>('API_KEY');
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
