const router = require('express').Router();
const {bookMiddleware} = require('../middleware');
const {bookControllers} = require("../controllers");

router.post('/', bookMiddleware.checkAddBook, bookControllers.creatBook);
router.get('/:id', bookMiddleware.checkIdFound, bookControllers.getBookById);
router.get('/', bookControllers.getAllBook);
router.put('/:id', bookMiddleware.checkIdFound,bookControllers.updateBook);
router.delete('/:id', bookMiddleware.checkIdFound,bookControllers.deleteBook);

module.exports = router;
