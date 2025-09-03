import request from "supertest";
import app from "../..";

describe("Casino API", () => {
  it("GET / should return a running message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Casino API is running 🎰");
  });

  it("GET /api/content should return casinoContent object with arrays", async () => {
    const res = await request(app).get("/api/content");
    expect(res.status).toBe(200);

    // The main response should be an object
    expect(res.body).toBeInstanceOf(Object);

    // Check casinoGames
    expect(Array.isArray(res.body.casinoGames)).toBe(true);
    expect(res.body.casinoGames.length).toBeGreaterThan(0);
    expect(res.body.casinoGames[0]).toHaveProperty("id");
    expect(res.body.casinoGames[0]).toHaveProperty("title");

    // Check promotions
    expect(Array.isArray(res.body.promotions)).toBe(true);
    expect(res.body.promotions.length).toBeGreaterThan(0);
    expect(res.body.promotions[0]).toHaveProperty("id");
    expect(res.body.promotions[0]).toHaveProperty("title");

    // Check casinoNews
    expect(Array.isArray(res.body.casinoNews)).toBe(true);
    expect(res.body.casinoNews.length).toBeGreaterThan(0);
    expect(res.body.casinoNews[0]).toHaveProperty("id");
    expect(res.body.casinoNews[0]).toHaveProperty("title");
  });
});
