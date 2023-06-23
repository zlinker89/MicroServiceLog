export class LogModel {
    private readonly message: string
    private httpCode?: number
    private stack: string
    private projectName: string
    private fileNameEmit: string
    
    constructor(message: string, httpCode: number, stack: string, projectName: string, fileNameEmit: string) {
        this.message = message
        this.httpCode = httpCode
        this.stack = stack
        this.projectName = projectName
        this.fileNameEmit = fileNameEmit
    }
}