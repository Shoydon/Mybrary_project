const express = require('express')
const router = express.Router()
const Book = require('../models/book')

//ALL BOOKS ROUTE
router.get('/', async (req, res) => {
    
})

//NEW BOOK
//just displays the form
router.get('/new', (req, res) => {
    
})

//actually create a new book
router.post('/', async (req, res) => {
    
})

module.exports = router