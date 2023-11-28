import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Turn } from '../entities/turn.entity';
import { log } from 'console';
require('dotenv').config();

@Injectable()
export class TurnService {
  TIME_APPOINTMENT = 20;

  constructor(
    @InjectRepository(Turn) private turnRepo: Repository<Turn>,
  ) {}

  async create(body: Turn) {
    return this.turnRepo.save(body);
  }

  
}
