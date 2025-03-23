// const express = require("express");
// const { getAllCases, createCase, analyzeCase } = require("./caseController");

// const router = express.Router();

// // Get all cases
// router.get("/cases", getAllCases);

// // Create a new case
// router.post("/cases", createCase);

// // Analyze case with AI
// router.post("/cases/analyze", analyzeCase);

// module.exports = router;
// const express = require("express");
// const { analyzeCaseController, chatbotController } = require("./caseController");

// const router = express.Router();

// router.post("/analyze-case", analyzeCaseController);
// router.post("/chatbot", chatbotController); // ✅ Chatbot route added
// router.get("/cases", async (req, res) => {
//   try {
//     // Placeholder response (Replace with database fetch if needed)
//     res.json([{ id: 1, title: "Test Case", description: "This is a sample case" }]);
//   } catch (error) {
//     res.status(500).json({ message: "❌ Error fetching cases", error });
//   }
// });

// module.exports = router;


// const express = require("express");
// const Case = require("./Case");
// const { analyzeCase } = require("./geminiService");

// const router = express.Router();

// // ✅ Save a new case and return analysis
// router.post("/analyze-case", async (req, res) => {
//   try {
//     const { title, description } = req.body;

//     // Perform AI analysis
//     const analysis = await analyzeCase(title, description);

//     console.log("🔍 AI Analysis Result:", analysis);

//     // Save case to MongoDB
//     const newCase = new Case({
//       title,
//       description,
//       status: "Open",
//       difficulty: analysis.difficulty,
//       priority: analysis.priority,
//       category: analysis.category,
//     });

//     await newCase.save();

//     res.json({
//       message: "✅ Case saved successfully",
//       case: newCase,
//       analysis,
//     });

//   } catch (error) {
//     console.error("❌ Error saving case:", error);
//     res.status(500).json({ message: "❌ Error saving case", error: error.message });
//   }
// });

// module.exports = router;
// 

const express = require("express");
const { analyzeCaseController } = require("./caseController");

const router = express.Router();

// Analyze Case Route
router.post("/analyze-case", analyzeCaseController);

// Placeholder for fetching cases (replace with DB integration later)
router.get("/cases", async (req, res) => {
    try {
        res.json([{ id: 1, title: "Test Case", description: "This is a sample case" }]);
    } catch (error) {
        res.status(500).json({ message: "❌ Error fetching cases", error });
    }
});

module.exports = router;
