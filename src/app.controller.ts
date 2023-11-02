import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller("test")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getValues(): number {
    return this.appService.getValues();
  }
}
