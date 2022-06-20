const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//all authors route
router.get('/', (req, res) =>{
    res.render('authors/index')
})

//new author route
router.get('/new', (req, res) =>{
    res.render('authors/new', {author: new Author()})
})

//create author route
//fpr create brauchen wir post
router.post('/', async (req, res) =>{
    const author = new Author({
        name: req.body.name
    })

    try{
        const newAuthor = await author.save()//await geht nur bei async
        //res.redirect(`authors/${newAuthor.id}`)
        res.redirect('authors')
    }catch{
        res.render('authors/new',{
        author: author,
        errorMessage: 'Error creating Author'
        }) 
    }
})

module.exports = router