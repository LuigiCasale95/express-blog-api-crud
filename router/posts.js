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

    //Inizialmente, i posts filtrato corrisponde a quello originale
    let filteredPosts = posts;
    // Se la richiesta contiene un filtro, allora filtriamo posts
    if (req.query.tags) {
    filteredPosts = posts.filter(
    post => post.tags.includes(req.query.tags)
    );
}
    // restituiamo la variabile filteredPosts
    // potrebbe essere stata filtrata o contenere i posts originale
    res.json(filteredPosts);
});

// show
router.get('/:id', function (req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)
    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);
    // Restituiamolo sotto forma di JSON
    res.json(post);
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
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)
    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);
    // Piccolo controllo
    if (!post) {
    res.status(404);
    return res.json({
    status: 404,
    error: "Not Found",
    message: "post non trovato"
    })
    }
    // Rimuoviamo il post da array posts
    posts.splice(posts.indexOf(post), 1);
});

module.exports = router;