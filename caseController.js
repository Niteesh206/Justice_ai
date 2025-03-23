// const Case = require("./Case");
// const { analyzeCaseAI } = require("./geminiService");

// // Get all cases
// const getAllCases = async (req, res) => {
//   try {
//     const cases = await Case.find();
//     res.json(cases);
//   } catch (error) {
//     res.status(500).json({ message: "❌ Error fetching cases", error });
//   }
// };

// // Create a new case
// const createCase = async (req, res) => {
//   try {
//     const newCase = new Case(req.body);
//     await newCase.save();
//     res.json({ message: "✅ Case created successfully", case: newCase });
//   } catch (error) {
//     res.status(400).json({ message: "❌ Error creating case", error });
//   }
// };

// // AI Case Analysis
// const analyzeCase = async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const analysis = await analyzeCaseAI(title, description);
//     res.json(analysis);
//   } catch (error) {
//     res.status(500).json({ message: "❌ Error analyzing case", error });
//   }
// };

// module.exports = { getAllCases, createCase, analyzeCase }
//  { analyzeCase, chatWithGemini } = require("./geminiService");


// const analyzeCaseController = async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     console.log("📥 Received request for case analysis:", { title, description });

//     const analysis = await analyzeCase(title, description);
    
//     console.log("📤 Sending analysis response:", analysis);
//     res.json(analysis);
//   } catch (error) {
//     console.error("❌ Error analyzing case:", error);
//     res.status(500).json({ message: "❌ Error analyzing case", error: error.message });
//   }
// };

// 

const analyzeCaseController = async (req, res) => {
    try {
        // Simulated AI API response (Replace with actual Gemini API call)
        const geminiResponse = {
            candidates: [
                {
                    content: {
                        parts: [
                            {
                                text: "A 'petty case' generally refers to a minor legal dispute, often involving a small amount of money.\n\nExamples:\n1. **Neighbor Disputes** - Fence placement issues.\n2. **Minor Car Accidents** - Small fender benders.\n3. **Landlord/Tenant Disputes** - Security deposit issues.\n4. **Breach of Small Contracts** - Unpaid services.\n5. **Small Claims for Debts** - Unpaid loans."
                            }
                        ],
                        role: "model"
                    }
                }
            ],
            usageMetadata: {
                totalTokenCount: 217
            }
        };

        // Extract the text from the response
        const extractedText = geminiResponse.candidates[0].content.parts[0].text;

        // Analysis details
        const analysis = {
            difficulty: "Low",
            priority: "Medium",
            category: "General",
            recommendations: "Take simple actions...",
            content: extractedText // ✅ Add extracted content here
        };

        console.log("📤 Sending analysis response:", analysis); // ✅ Debugging
        res.json(analysis); // ✅ Send to frontend
    } catch (error) {
        console.error("❌ Error analyzing case:", error);
        res.status(500).json({ message: "Error analyzing case", error });
    }
};

module.exports = { analyzeCaseController };
