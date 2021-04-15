const db = require("../models");

Livro = db.livros;

const Op = db.sequelize.Op; 

exports.create = (req ,res) => {
    //Validate request
    
    if(!req.body.nome ||
        !req.body.autor ||
        !req.body.dataDeAluguel ||
        !req.body.dataDeLancamento 
        ){
        res.status(400).send({message: "Os dados do livro não estão completos!"});
 
    return;
}


const livro = {
    nome: req.body.nome,
    autor: req.body.autor,
    sinopse: req.body.sinopse,
    dataDeLancamento: req.body.dataDeLancamento,
    dataDeAluguel: req.body.dataDeAluguel,
    status:req.body.status ? req.body.status: false 

}
Livro.create(livro) 
.then((data) => {
    res.send(data);
})
.catch(err => {
    res.status(500).send({
        message: err.message || "Erro interno ao criar livro!"
    });
});

}
exports.findAll = (req, res) => {
    Livro.findAll()
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar os livros"
        });
    });
};

exports.findAllPublished = (req, res) => {
    Livro.findAll({where: {status: true}})
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar os status do livro"
        });
    });
};

exports.findOne = (req,res) =>{
    const id = req.params.id;
    

    Livro.findByPk(id)
    .then((data) => {
        if(!data){
            res.status(404).send({message: "Id não encontrado"})
        }
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message:
            err.message || `Erro interno ao buscar id: ${id}`
        });
    });
}
exports.update = (req, res) =>{
    const id = req.params.id;

    Livro.update(req.body, {
        where: {id : id}

    })
    .then(num => {
        if(num == 1){
            res.send({
                message: "Cadastro atualizado"

            });
        } else {
            res.send({
                message: `Não foi possível atualizar o status do livro: ${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Erro interno ao atualizar o status do livro: ${id}`
        })
    })
}