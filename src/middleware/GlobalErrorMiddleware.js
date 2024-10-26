import CustomError from "../exception/CustomError.js";


class GlobalErrorMiddleware {

    static handleError(err, req, res, next) {

        // Check if the error is an instance of CustomError
        if (err instanceof CustomError) {

            return res.status(err.statusCode).json({

                status: err.status,
                message: err.message,

            });

        } else {

            res.status(500).json({

                status: 'error',
                message: 'Something went very wrong!',

            });

        }

    }

}



export default GlobalErrorMiddleware;
