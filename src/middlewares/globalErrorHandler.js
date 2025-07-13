const globalErrorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.statusCode >= 400 && error.statusCode <= 500 ? 'fail' : "success";
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message
    });
}

export default globalErrorHandler;