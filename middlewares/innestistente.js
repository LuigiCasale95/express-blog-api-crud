/* funzione di gestione rotta in caso sia innesistente */
const innesistente = (req, res, next) => {
    /* status 404 */
    res.status(404);
    res.json({
        error: "non trovato",
        message: "Pagina non trovata"
    });
}

module.exports = innesistente;