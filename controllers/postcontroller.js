const posts = require('../data/postsArray');

/* Index */
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

/* Show */
function show(req, res) {
// recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)
    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);
    // Restituiamolo sotto forma di JSON
    res.json(post);
}

/* Store */
function store(req, res) {
    const newId = posts[posts.length - 1].id +1;

    /* creazione del nuovo post */
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    /* Aggiungiamo il nuovo posta ai posts precedenti */
    posts.push(newPost);

    /* Controllo */
    console.log(posts);

    /* restituzione dello status corretto e del post appena creato */
    req.status(201);
    res.json(newPost);
}

/* Update */
function update(req, res) {
    res.send('Modifica integrale del post' + req.params.id);
}

/* Modify */
function modify(req, res) {
        res.send('Modifica parziale del post' + req.params.id);
}

/*Destroy */
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