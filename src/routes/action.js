const router = require("express").Router();

const { takeBook, returnBook } = require("../controllers/action");

router.post("/take-book/:user_id/:book_id", takeBook);
router.post("/return-book/:user_id/:book_id", returnBook);

module.exports = router;
