const Book = require("../models/book");
const User = require("../models/user");

const takeBook = async (request, response) => {
  try {
    const { user_id, book_id } = request.params;

    const book = await Book.findById(book_id);
    if (!book) {
      return response.status(404).send("Книга не найдена");
    }

    const user = await User.findById(user_id);
    if (!user) {
      return response.status(404).send("Пользователь не найден");
    }

    if (book.borrower) {
      return response.status(400).send("Книга уже взята");
    }

    book.borrower = user._id;
    await book.save();

    user.borrowed_books.push(book._id);
    await user.save();

    return response.status(200).send("Вы успешно взяли книгу");
  } catch (error) {
    console.error("Error taking book:", error);
    return response.status(500).send(error.message);
  }
};

const returnBook = async (request, response) => {
  try {
    const { user_id, book_id } = request.params;

    const book = await Book.findById(book_id);
    if (!book) {
      return response.status(404).send("Книга не найдена");
    }

    if (!book.borrower) {
      return response.status(400).send("Книга не взята");
    }

    book.borrower = null;
    await book.save();

    const user = await User.findById(user_id);
    user.borrowed_books.pull(book._id);
    await user.save();

    return response.status(200).send("Вы вернули книгу");
  } catch (error) {
    console.error("Ошибка при возврате книги:", error);
    return response.status(500).send(error.message);
  }
};

module.exports = {
  takeBook,
  returnBook,
};
