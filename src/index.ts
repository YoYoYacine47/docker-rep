import express, { Request, Response } from "express";
import { pool } from "./db"

const app = express();
const PORT = 3000;


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World after change, from docker !. now it's live !, using docker watch ");
});


app.get("/db-test", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW() AS now");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});