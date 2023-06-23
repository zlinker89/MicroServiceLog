import { Module } from '@nestjs/common';
import { LogService } from './application/services/log/log.service';

@Module({
  providers: [LogService]
})
export class LogModule {}
