
class CustomError extends Error {

    constructor(message, statusCode) {

        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;  // Mark this as an operational error
        Error.captureStackTrace(this, this.constructor);  // Captures the stack trace

    }
    
}

export default CustomError;
