import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://franklin:Expertosip%402023.@localhost/`],
        queue: 'log',
        queueOptions: {
          durable: true,
        },
    },
  });
  await app.listen();
}
bootstrap();
