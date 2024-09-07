let express = require("express");
let { getAllBooks, getBookById, getAllReviews, getReviewById, getUserById } = require("./book");
let app = express();
app.use(express.json());
// Exercise 1: Get All Books
app.get("/api/books", async (req, res) => {
  try {
    let result = await getAllBooks();
    if (result.length === 0) {
      return res.status(404).json({ error: "No books found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 2: Get Book by ID
app.get("/api/books/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getBookById(id);
    if (! result) {
      return res.status(404).json({ error: "Book not found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 3: Get All Reviews
app.get("/api/reviews", async (req, res) => {
  try {
    let result = await getAllReviews();
    if (result.length === 0) {
      return res.status(404).json({ error: "No reviews found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 4: Get Review by ID
app.get("/api/reviews/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getReviewById(id);
    if (! result) {
      return res.status(404).json({ error: "No review found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
// Exercise 5: Get User by ID
app.get("/api/users/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let result = await getUserById(id);
    if (! result) {
      return res.status(404).json({ error: "No user found"});
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error"});
  }
});
module.exports = { app };
