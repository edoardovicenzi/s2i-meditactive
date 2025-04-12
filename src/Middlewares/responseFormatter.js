export function responseHandler(req, res, next) {
    res.setHeader("Content-Type", "application/json");

    res.success = (data, code = 200, headers = []) => {
        //Set custom headers
        if (headers) {
            headers.forEach((el) => {
                res.setHeader(el.key, el.value);
            })
        }

        //Set custom response
        res.status(code || 200).json({
            status: 'success',
            data
        });
    };

    res.error = (message, code = 500, details = {}) => {
        res.status(code || 500).json({
            status: 'error',
            message: message || "Internal Server Error",
            error: {
                code,
                details
            },
            metadata: {
                timestamp: new Date().toISOString(),
            }
        });
    };

    next();
}
