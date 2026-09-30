const express = require("express");
const router = express.Router();

// Middlewares-a import pannanum (unga folder structure-ku etha madhiri path-a mathikonga)
const { protect } = require("../middleware/auth"); 
const upload = require("../middleware/upload"); 

// Missing aana ellla controller functions-yum import pannanum
const {
  uploadMaterial,
  getMaterials,
  getMaterial,
  deleteMaterial,
  summarize,
  generateFlashcards,
  generateQuiz,
  generateStudyPlan
} = require("../controllers/materialController");

router.use(protect); // all routes require login

router.post("/upload", upload.single("file"), uploadMaterial);
router.get("/", getMaterials);
router.get("/:id", getMaterial);
router.delete("/:id", deleteMaterial);

// AI features
router.post("/:id/summarize", summarize);
router.post("/:id/flashcards", generateFlashcards);
router.post("/:id/quiz", generateQuiz);
router.post("/:id/study-plan", generateStudyPlan);

module.exports = router;
