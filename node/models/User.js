const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: {
        type: String,
        require: true,
        default: "שם מלא"
    },

    city: {
        type: String,

    },
    email: {
        type: String
    },
    age: {
        type: String
    },
    phone: {
        type: String
    }




})

module.exports = mongoose.model("user", userSchema)





