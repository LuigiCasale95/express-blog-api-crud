// importo il framework express
const express = require("express");

/* importiamo i dati di posts */
const posts = require("../data/postsArray")

// settiamo il router
const router = express.Router();

// Rotte di CRUD sulla risorsa post

// index
router.get('/', function (req, res) {
    /* fa ritornare l'array dei posts esportato da postsArray */
    res.send(posts);
});
// show
router.get('/:id', function (req, res) {
    res.send('Dettagli del post' + req.params.id);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

module.exports = router;