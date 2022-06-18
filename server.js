//importieren
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

//einstellen, configure
app.set('view engine', 'ejs') //ejs ist unsere view engine
app.set('views', __dirname + '/views')//hier kommen die user erein
app.set('layout', 'layouts/layout')//header footer usw
app.use(expressLayouts)//das soll unser server verwenden
app.use(express.static('public'))

const mongoose = require('mongoose')
 mongoose.connect(process.env.DATABASE_URL, {
     useNewUrlParser: true })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open',() => console.log(' connected to mongoose'))


app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
