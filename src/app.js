import express, { Router } from "express";

import cors from "cors";

import initContactRouter from "./app/router/contact.router";

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

// Khoi tao contact Router
initContactRouter(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcomte to project's nhan" });
});

export default app;
