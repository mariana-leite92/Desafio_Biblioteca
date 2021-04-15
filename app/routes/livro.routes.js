module.exports = app => {
    const livros = require("../controllers/livro.controller");

    var router = require("express").Router();


router.post("/", livros.create);

router.get("/", livros.findAll);

router.get("/status", livros.findAllPublished);

router.get("/:id", livros.findOne);


router.put("/:id", livros.update);


app.use('/api/livros', router)

}