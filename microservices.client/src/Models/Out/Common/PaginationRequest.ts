export class PaginationRequest{
    count: number;
    offset: number;

    constructor(data: Partial<PaginationRequest>) {
        Object.assign(this, data);
    }
}
