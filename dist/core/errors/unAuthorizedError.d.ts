import { ApplicationError, ErrorDetailsDescriptor } from "./apiError";
export declare class UnAuthorizedError extends ApplicationError {
    _statusCode: 401;
    _message: string;
    _details: null;
    constructor(message: string);
    get statusCode(): number;
    get message(): string;
    get details(): ErrorDetailsDescriptor;
}
