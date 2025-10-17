const posts = require('../data/postsArray');


function index(req, res) {
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
}

function show(req, res) {
// recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)
    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);
    // Restituiamolo sotto forma di JSON
    res.json(post);
}

function store(req, res) {
    res.send('Creazione nuovo post');
}

function update(req, res) {
    res.send('Modifica integrale del post' + req.params.id);
}

function modify(req, res) {
        res.send('Modifica parziale del post' + req.params.id);
}

function destroy(req, res) {
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
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }