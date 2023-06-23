import { Inject, Injectable } from "@nestjs/common";
import { LogFactory } from '../../factories/log/log.factory';
import { LogCommand } from '../../../../log/application/commands/log/log.command';
import { CreatedModel } from '../../../infrastructure/interfaces/entity.interface';
import { LogRepository } from '../../../infrastructure/repositories/log/log.repository';

@Injectable()
export default class CreateFileDataUseCase {
  constructor(
    @Inject('FileDataRepository')
    private _logRepository: LogRepository,
    private _logFactory: LogFactory,
  ) {}

  public handler(logCommand: LogCommand): Promise<CreatedModel> {
    const logObject =
      this._logFactory.createLog(logCommand);
    return this._logRepository.create({ ...logObject });
  }
}