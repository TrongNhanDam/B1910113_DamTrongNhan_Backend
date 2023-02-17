import express from "express";

import cors from "cors";

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Welcomte to project's nhan" });
});

export default app;
