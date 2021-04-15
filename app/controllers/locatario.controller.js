const db = require("../models");

Locatario = db.locatarios;

const Op = db.sequelize.Op; 

exports.create = (req ,res) => {
    //Validate request
    
    if(!req.body.nome ||
       !req.body.cpf || 
       !req.body.statusDoCadastro
        ) {
        res.status(400).send({
        message: "Cadastro não pode estar vazio!"
    });

    return;
}


const locatario = {
    nome: req.body.nome,
    cpf: req.body.cpf,    
    statusDoCadastro:req.body.statusDoCadastro ? req.body.statusDoCadastro: false 

}
Locatario.create(locatario) 
.then((data) => {
    res.send(data);
})
.catch(err => {
    res.status(500).send({
        message: err.message || "Erro interno ao criar locatario!"
    });
});

}

exports.findAll = (req, res) => {
    Locatario.findAll()
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar os locatarios"
        });
    });
};

exports.findAllPublished = (req, res) => {
    Locatario.findAll({where: {statusDoCadastro: true}})
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar cadastro ativo"
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Locatario.destroy({where: {id : id}})
    .then(num => {
        if(num == 1){
            res.send({
                message: "Cadastro apagado com sucesso"

            });
        } else {
            res.send({
                message: `Não foi possível apagar o cadastro de id: ${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Erro interno ao apagar o tutorial de id: ${id}`
        })
    })

}
