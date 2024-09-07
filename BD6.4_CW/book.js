let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'Brave New World', author: 'Aldous Huxley' },
];

let reviews = [{ id: 1, bookId: 1, content: 'Great book!' }];

let users = [{ id: 1, name: 'John Doe', email: 'john@example.com' }];
// function to fetch all books
async function getAllBooks() {
  return books;
}
// function to get book by id.
async function getBookById(id) {
  return books.find((book) => book.id === id);
}
//function to get all reviews.
async function getAllReviews() {
  return reviews;
}
// function to get review by id
async function getReviewById(id) {
  return reviews.find((review) => review.id === id);
}
// function to get user by id.
async function getUserById(id) {
  return users.find((user) => user.id === id);
}

module.exports = { getAllBooks, getBookById, getAllReviews, getReviewById, getUserById };