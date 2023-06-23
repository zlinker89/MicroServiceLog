import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller('log')
export class LogController {
  @EventPattern({ cmd: 'register-log' })
  async sendMail(@Payload() payload: string, @Ctx() context: RmqContext) {
    console.log('prueba de mensaje');
    console.log(payload);
  }
}
