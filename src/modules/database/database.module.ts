import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogEntity, LogEntitySchema } from './domain/entities/log/log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LogEntity.name, schema: LogEntitySchema },
    ]),
  ],
})
export class DatabaseModule {}
