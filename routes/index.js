var db = require("../models");

module.exports = function(app){
    app.get("/api/users", function(req, res){
        db.User.findAll({
            include: [db.Cigar]
        })
        .then(dbUsers => res.json(dbUsers)) 
    })
    app.post("/api/users", function(req, res){
        db.User.create(req.body)
        .then(() => res.send("User Created")) 
    })
    app.get("/api/cigars", function(req, res){
        db.Cigar.findAll({
            include: [db.User]
        })
        .then(dbCigars => res.json(dbCigars)) 
    })
    app.post("/api/cigars", function(req, res){
        db.Cigar.create(req.body)
        .then(() => res.send("Cigars Found")) 
    })

}