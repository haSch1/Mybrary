const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({//scheme is wie eine tabelle
    name:{
        type: String,
        required: true
    }
})

module.exports  = mongoose.model('Author', authorSchema)