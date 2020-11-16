if (process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: process.env.MONGO_URI}
    console.log(process.env.TESTE)
    console.log("Produção")
} else {
    module.exports = {mongoURI: "mongodb://localhost/herotools"}
    console.log("local")
}