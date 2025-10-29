// routes/questionRoute.js
const express = require("express");
const router = express.Router();
const {
  askQuestion,
  allQuestions,
  singleQuestion,
  editQuestion,
  deleteQuestion
} = require("../controller/questionController");
const authMiddleware = require("../middleware/authMiddleware");

// Public route - get all questions
router.get("/", authMiddleware, allQuestions);

// Public route - get single question by id
router.get("/:question_id", authMiddleware,singleQuestion);

// Protected route - ask (create) a new question
router.post("/", authMiddleware, askQuestion);

// Protected route - edit question (only owner)
router.put("/:question_id", authMiddleware, editQuestion);
router.delete("/:question_id", authMiddleware,deleteQuestion);
module.exports = router;
