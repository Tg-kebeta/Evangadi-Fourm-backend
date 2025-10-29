
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 2025;

const dbConnection = require("./db/dbConfig");
const UserRoutes = require("./routes/userRoute");
const QuestionRoutes = require("./routes/questionRoute");
const AnswerRoutes = require("./routes/answerRoute");

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Evangadi Forum Backend is running");
});

// Routes
app.use("/api/user", UserRoutes);
app.use("/api/question", QuestionRoutes);
app.use("/api/answer", AnswerRoutes);

// Optional logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
async function start() {
  try {
    await dbConnection.execute("select 'test'");
    app.listen(port, () => {
      console.log("Database connection established");
      console.log(`Listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("DB connection error:", error.message);
  }
}
start();

