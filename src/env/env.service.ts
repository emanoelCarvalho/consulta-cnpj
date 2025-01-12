import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private readonly config: ConfigService) {}

  get getKeyApi(): string {
    return this.config.get<string>('API_KEY');
  }

  get getUrl(): string {
    return this.config.get<string>('API_URL');
  }
  
  get getPort(): number {
    return this.config.get<number>('PORT');
  }
}
