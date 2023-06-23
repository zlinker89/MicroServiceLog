import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LogModule } from './modules/log/log.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LOG_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://franklin:Expertosip%402023.@localhost/'],
          queue: 'log',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
    LogModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
