import { Injectable } from "@nestjs/common";
import { LogCommand } from '../../../../log/application/commands/log/log.command';
import { LogModel } from '../../../../log/domain/models/log.model';

@Injectable()
export class LogFactory {
  public createLog(logCommand: LogCommand): LogModel {
    return new LogModel(
      logCommand.message,
      logCommand.httpCode,
      logCommand.stack,
      logCommand.projectName,
      logCommand.fileNameEmit,
    );
  }
}