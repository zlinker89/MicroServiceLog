import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogEntitySchema } from './domain/entities/log/log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Logs', schema: LogEntitySchema },
    ]),
  ],
})
export class DatabaseModule {}
