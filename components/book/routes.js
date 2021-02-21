const express = require('express')
const router = express.Router()
const multer = require('multer')
const { createBook, getBook, getBooks, updateBook } = require('./actions')
const coverUploader = multer({ dest: 'covers/' })
const setCover = require('../../middlewares/setCover')

// GET all
router.get('/', getBooks)

// GET by ID
router.get('/:id', getBook)

// POST Create a Book
router.post('/', coverUploader.single('cover'), setCover, createBook)

//PUT Update Book's info
router.put('/:id', coverUploader.single('cover'), setCover, updateBook)

module.exports = router