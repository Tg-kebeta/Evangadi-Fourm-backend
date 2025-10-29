// routes/answerRoute.js
const express = require("express");
const router = express.Router();
const answerController = require("../controller/answerController");
const auth = require("../middleware/authMiddleware");


//getAnswerforQuestion function in answerController is called//
router.get("/:question_id", auth ,answerController.getAnswersForQuestion);
router.post("/", auth, answerController.postAnswer);

module.exports = router;
