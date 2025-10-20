/* import del framework express */
const express = require("express");
/* Creazione instanza di express */
const app = express();
/* Impostiamo un ref per il numero della porta*/
const port = 3000;

// importiamo modulo router pizze
const postsRouter = require("./router/posts")

/*usiamo il middleware static di express (per remdere disponibile il file statico ovvero le img in questo caso)*/
app.use(express.static("public"));

/* registro il body-parser per "application/json" */
app.use(express.json());

/* Impostazione della rotta di index */
app.get("/", (req, res) => {
    res.send('<h1>Server del mio blog</h1>')
})


// rotte per i post
app.use("/posts", postsRouter);


/* mettiamo in ascolto il server sulla porta definitiva */
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}); 