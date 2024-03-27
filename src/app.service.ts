import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return this.getNextMethod();
  }

  getNextMethod(): string {
    return 'Hola.';
  }
}
