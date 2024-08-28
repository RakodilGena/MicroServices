export class MessageDto {
    author: string;
    sentAt: Date;
    message: string;
    producedBy: string[];

    constructor(data: Partial<MessageDto>) {
        Object.assign(this, data);
    }
}
