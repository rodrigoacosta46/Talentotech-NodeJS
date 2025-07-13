const customError = (msg, statusCode, status) => {
    const err = new Error(msg);
    err.statusCode = statusCode;
    err.status = status;
    
    return err;
}

export default customError;