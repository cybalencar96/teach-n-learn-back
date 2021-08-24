const mongo = require("../models/dbConnection")

exports.signIn = async (req,res) => {
    
    const data = await mongo.signUser(req.body);
    res.send(data);
};

exports.logIn = async (req,res) => {
    const data = await mongo.loginUser(req.body);
    res.send(data);
};

