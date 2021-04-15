module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "...",
    DB: "db_biblioteca",
    dialect: "mysql",
    pool: {
        max: 5, //maximo de conexão
        min: 0, //minimo de conexoes
        acquire: 30000,// milissegundo até dar erro
        idle: 10000 // standby
    }
};