const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//ALL AUTHORS ROUTE
router.get('/', async (req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const authors = await Author.find(searchOptions)
        res.render('authors/index', {
            authors: authors,
            searchOptions: req.query
        })
    }catch{
        res.redirect('/')
    }
})

//NEW AUTHOR
//just displays the form
router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author() })
})

//actually create a new author
router.post('/', async (req, res) => {
    const author = new Author({
        name : req.body.name
    })
    try{
        const newAuthor = await author.save()
        // res.redirect(`authors/${newAuthor.id}`)
        res.redirect('authors')
    }catch{
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author'
        })
    }
    // author.save((err, newAuthor) => {
    //     if(err){
    //         res.render('authors/new', {
    //             author: author,
    //             errorMessage: 'Error creating Author'
    //         })
    //     }
    //     else{
    //         // res.redirect(`authors/${newAuthor.id}`)
    //         res.redirect('authors')
    //     }
    // })
    // // res.send(req.body.name)      no longer needed(just to test if proper data was being sent to the server)
})


module.exports = router