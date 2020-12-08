module.exports = {
    isParceiro: function(req, res, next){
        if(req.isAuthenticated() && req.user.tipo == "parceiro"){
            return next()
        }

        req.flash("error_msg", "Seu perfil não possui permissão")
        res.redirect("/")
    }
}