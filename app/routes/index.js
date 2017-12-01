var api = require("../api/timestamp-service");

module.exports = function(app, db){
    app.route("/").get(function(req, res){
        res.render('index');
    });    
    app.route("/:date").get(function(req, res){
        return api.timeStampConversion(req, res);
    });
};