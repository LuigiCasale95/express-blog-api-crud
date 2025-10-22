/* funzione di gestione rotta in caso di errore */
function error(err,  req, res, next) {
    console.log(err);    
    req.status(500);

    res.json({
        error: "errore interno del server",
        message: "errore interno"
    });
    
}

module.exports = error;