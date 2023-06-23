import { Injectable } from "@nestjs/common";
import { RepositoryBase } from "../../bases/repository.base";
import { LogEntity, LogEntityDocument } from '../../../domain/entities/log/log.schema';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class LogRepository extends RepositoryBase<LogEntity> {
    constructor(@InjectModel(LogEntity.name) private entity: Model<LogEntityDocument>) {
        super(entity);
    }
}