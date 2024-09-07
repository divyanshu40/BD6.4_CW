let request = require("supertest");
let http = require("http");
let { app } = require ("../index");
let { getAllBooks, getBookById, getAllReviews, getReviewById, getUserById } = require("../book");


jest.mock("../book", () => ({
  ...jest.requireActual("../book"),
  getAllBooks: jest.fn(),
  getBookById: jest.fn(),
  getAllReviews: jest.fn(),
  getReviewById: jest.fn(),
  getUserById: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe("API Error Testing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // Exercise 6: Test get all books with no books
  it("GET API /api/books should return 404 if books not found.", async () => {
    getAllBooks.mockReturnValue([]);
    let result = await request(server).get("/api/books");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("No books found");
  });
  // Exercise 7: Test get book by non-existent ID
  it("GET API /api/books/:id will return 404 for non existing book", async () => {
    getBookById.mockReturnValue(null);
    let result = await request(server).get("/api/books/7");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("Book not found");
  });
  // Exercise 8: Test get all reviews with no reviews
  it("GET API /api/reviews should return 404 if reviews not find", async () => {
    getAllReviews.mockReturnValue([]);
    let result = await request(server).get("/api/reviews");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("No reviews found");
  });
  // Exercise 9: Test get review by non-existent ID
  it("GET API /api/reviews/:id should return 404 if review not found", async () => {
    getReviewById.mockReturnValue(null);
    let result = await request(server).get("/api/reviews/5");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("No review found");
  });
  // Exercise 10: Test get user by non-existent ID
  it("GET API /api/users/:id should return 404 if user not found", async () => {
    getUserById.mockReturnValue(null);
    let result = await request(server).get("/api/users/6");
    expect(result.status).toEqual(404);
    expect(result.body.error).toBe("No user found");
  });
});