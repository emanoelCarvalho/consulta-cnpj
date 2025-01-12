import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private readonly config: ConfigService) {}

  getKeyApi(): string {
    return this.config.get<string>('API_KEY');
  }

  getPort(): number {
    return this.config.get<number>('PORT');
  }

  getUrl(): string {
    return this.config.get<string>('API_URL');
  }
}
