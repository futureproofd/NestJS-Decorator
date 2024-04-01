import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { IsDefined, IsOptional, IsString } from 'class-validator';
import { AppService } from './app.service';
import { TraceRequestHeaders } from './app.decorator';

export class TestHeaderDTO {
  @IsString()
  @IsDefined()
  @IsOptional()
  ['x-correlation-id']?: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @TraceRequestHeaders(
      'x-correlation-id',
      new ValidationPipe({ validateCustomDecorators: true }),
    )
    headers: TestHeaderDTO,
  ): string {
    console.log('headers resolved:', headers);
    return this.appService.getHello();
  }
}
