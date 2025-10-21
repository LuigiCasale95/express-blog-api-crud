function error(err,  req, res, next) {
    req.status(500);
    res.json({
        error: err.message,
    });
    
}

module.exports = error;