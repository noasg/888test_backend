import express, { Request, Response } from "express";
import cors from "cors";
import { casinoContent } from "./data/casinoContent";

const app = express();

app.use(cors());

// JEST TEST
app.get("/", (req: Request, res: Response) => {
  res.send("Casino API is working");
});

// API endpoint
app.get("/api/content", (req: Request, res: Response) => {
  res.json(casinoContent);
});

// Export app for testing
export default app;

// Start server only if not in test environment
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
  });
}
