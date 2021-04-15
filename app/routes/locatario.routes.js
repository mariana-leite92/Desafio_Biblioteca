module.exports = app => {
    const locatarios = require("../controllers/locatario.controller");

    var router1 = require("express").Router();


router1.post("/", locatarios.create);

router1.get("/", locatarios.findAll);

router1.get("/:statusDoCadastro", locatarios.findAllPublished);

router1.delete("/:id", locatarios.delete);

app.use('/api/locatarios', router1)

}