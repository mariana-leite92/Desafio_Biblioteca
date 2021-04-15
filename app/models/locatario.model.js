module.exports = (sequelize, Sequelize) => {
    const Locatario = sequelize.define("locatario", {
        nome: {
            type: Sequelize.STRING

        },
        cpf: {
            type: Sequelize.STRING
        },
        
        statusDoCadastro: {
            type:Sequelize.BOOLEAN
        }
    });
    
    return Locatario;
};