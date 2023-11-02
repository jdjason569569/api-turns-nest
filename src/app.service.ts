import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getValues() {
    return Math.random();
  }
}
