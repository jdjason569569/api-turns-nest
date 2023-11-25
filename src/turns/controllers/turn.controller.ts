import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TurnService } from '../services/turn.service';

@Controller('api/turns')
export class TurnController {
  constructor(private turnService: TurnService) {}


  @Post(':method')
  create(@Param('method') method: string, @Body() body: any) {
    return this.turnService.create(body, method);
  }
}
