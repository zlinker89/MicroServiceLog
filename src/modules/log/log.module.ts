import { Module } from '@nestjs/common';
import { LogService } from './application/services/log/log.service';
import { LogController } from './infrastructure/controllers/log/log.controller';

@Module({
  providers: [LogService],
  controllers: [LogController]
})
export class LogModule {}
