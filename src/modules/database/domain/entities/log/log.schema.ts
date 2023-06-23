import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type LogEntityDocument = LogEntity & Document;

@Schema()
export class LogEntity {
    @Prop()
    logId: number;
    @Prop()
    message: string
    @Prop()
    httpCode?: number
    @Prop()
    stack: string
    @Prop()
    projectName: string
    @Prop()
    fileNameEmit: string
}
export const LogEntitySchema = SchemaFactory.createForClass(LogEntity);