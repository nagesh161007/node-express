import request from "supertest";
import app from "./server.js";

describe("GET /", function () {
  test("Check if API is working", async function () {
    const response = await request(app).get("/healthz");
    expect(response.status).toEqual(200);
  });
});

describe("GET user API /", function () {
  test("Check if GET user API is working", async function () {
    const response = await request(app).get("/v1/user/1");
    expect(response.status).toEqual(403);
  });
});

describe("POST user API /", function () {
  test("Check if POST user API sending bad request", async function () {
    const response = await request(app).post("/v1/user");
    expect(response.status).toEqual(400);
  });
});

// describe("UPDATE user API /", function () {
//   test("Check if POST user API sending bad request", async function () {
//     const response = await request(app).put("/v1/user/1");
//     expect(response.status).toEqual(403);
//   });
// });
