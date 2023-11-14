const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenght: 2,
  },
  email: {
    type: String,
    required: true,
    minLenght: 2,
  },
  phone_number: {
    type: String,
    required: true,
    minLenght: 2,
  },
  borrowed_books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
