const mongoose = require("mongoose")
const User = require('../models/User')






const newUser = async (req, res) => {

    console.log(req.body);
    try {
        // const exists = await User.find({ name: req.body.name })
        // if (exists.length !== 0)
        //     res.status(500).send("choose another password");
        let myUser = new User(req.body);
        await myUser.save();
        res.status(200).json({ user: myUser });

    }
    catch {
        (error) => {
            res.status(400).send(error + 'error');
        }
    }
}


const getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        if (users == null) {
            res.send("not have users");
        }
        res.status(200).json({ users: users })
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const loginUser = async (req, res) => {
    console.log(req.params.password)
    try {
        let user = await User.findOne({ id: req.params.id })
        console.log('name:    ', user.name)
        if (user == null) {
            res.send("could not have user")
        }
        res.status(200).json({ user: user });

        console.log(user);
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}
module.exports = { newUser, getAllUsers, loginUser }