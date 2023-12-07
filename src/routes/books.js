const router = require("express").Router();

const {
  getBooks,
  getBook,
  addBook,
  updateBook,
  removeBook,
} = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:book_id", getBook);
router.post("/books", addBook);
router.put("/books/:book_id", updateBook);
router.delete("/books/:book_id", removeBook);

module.exports = router;
