const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createBook, getBooks, updateBook, deleteBook } = require('../controllers/bookController');

router.route('/')
  .post(protect, createBook)
  .get(protect, getBooks);

router.route('/:id')
  .put(protect, updateBook)
  .delete(protect, deleteBook);

module.exports = router;
