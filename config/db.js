if (process.env.NODE_ENV == "production"){
    // module.exports = {mongoURI: "mongodb+srv://teste:teste123@cluster0.bsrny.mongodb.net/herotools?retryWrites=true&w=majority"}
    module.exports = {mongoURI: "mongodb://teste:teste123@cluster-shard-00-00.bsrny.mongodb.net:27017,cluster-shard-00-01.bsrny.mongodb.net:27017,cluster-shard-00-02.bsrny.mongodb.net:27017/herotools?ssl=true&replicaSet=atlas-a6skd6-shard-0&authSource=admin&retryWrites=true&w=majority"}
    console.log("Produção")
} else {
    module.exports = {mongoURI: "mongodb://localhost/herotools"}
    console.log("local")
}