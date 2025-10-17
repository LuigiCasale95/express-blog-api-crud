// importo il framework express
const express = require("express");

/* importiamo i dati di posts */
/* const posts = require("../data/postsArray") */

// settiamo il router
const router = express.Router();
/* importiamo il controller  */
const postController = require("../controllers/postcontroller");

// Rotte di CRUD sulla risorsa post

// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// store
router.post('/', postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);

// destroy
router.delete('/:id', postController.destroy);

module.exports = router;