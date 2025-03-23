const { chatWithGemini } = require("./geminiService");

const chatBotHandler = async (req, res) => {
  try {
    const { message } = req.body;
    console.log("📩 Received chatbot request:", message);

    const response = await chatWithGemini(message);
    console.log("🤖 Chatbot Response:", response);

    res.json({ response }); // Ensure response is sent back
  } catch (error) {
    console.error("❌ Error in chatbot API:", error);
    res.status(500).json({ message: "Chatbot failed", error });
  }
};

module.exports = { chatBotHandler };
