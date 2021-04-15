module.exports = app => {
    const livros = require("../controllers/livro.controller");

    var router = require("express").Router();


router.post("/", livros.create);

router.get("/", livros.findAll);

router.get("/status", livros.findAllPublished);

router.get("/:autor", livros.findAllAutor);



router.put("/:id", livros.update);


app.use('/api/livros', router)

}