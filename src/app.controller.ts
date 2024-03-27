import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { IsDefined, IsOptional, IsString } from 'class-validator';
import { AppService } from './app.service';
import { GetRequestHeaders } from 'app.decorator';

export class TestHeaderDTO {
  @IsString()
  @IsDefined()
  @IsOptional()
  myHeader1?: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @GetRequestHeaders(new ValidationPipe({ validateCustomDecorators: true }))
    headers: TestHeaderDTO,
  ): string {
    console.log({ headers });
    return this.appService.getHello();
  }
}
