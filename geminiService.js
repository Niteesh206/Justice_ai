// // // // const axios = require("axios");

// // // // const API_KEY = "AIzaSyCcJo2cqtxCvhpdKtabssprA5cP4G-Cxsw"; // Replace with your actual API key
// // // // const MODEL_NAME = "models/gemini-1.5-pro-001"; // Corrected model name

// // // // const API_URL = `https://generativelanguage.googleapis.com/v1/${MODEL_NAME}:generateContent?key=${API_KEY}`;

// // // // async function analyzeCase(prompt) {
// // // //   try {
// // // //     const response = await axios.post(API_URL, {
// // // //       contents: [{ role: "user", parts: [{ text: prompt }] }],
// // // //     });

// // // //     if (response.data && response.data.candidates) {
// // // //       return response.data.candidates[0].content.parts[0].text;
// // // //     } else {
// // // //       throw new Error("No valid response from Gemini API");
// // // //     }
// // // //   } catch (error) {
// // // //     console.error("❌ Gemini API Error:", error.response ? error.response.data : error.message);
// // // //     throw new Error("AI request failed");
// // // //   }
// // // // }

// // // // module.exports = { analyzeCase };
// // // const axios = require("axios");

// // // const analyzeCase = async (title, description) => {
// // //   try {
// // //     const response = await axios.post(
// // //       "https://api.your-ai-service.com/analyze",
// // //       { title, description },
// // //       { headers: { Authorization: `AIzaSyCcJo2cqtxCvhpdKtabssprA5cP4G-Cxsw` } }
// // //     );

// // //     return response.data; // Expected AI response: { difficulty, priority, category, recommendations }
// // //   } catch (error) {
// // //     console.error("Gemini API Error:", error);
// // //     throw new Error("AI request failed");
// // //   }
// // // };

// // // module.exports = analyzeCase;
// // require("dotenv").config();
// // const axios = require("axios");

// // const analyzeCase = async (title, description) => {
// //   try {
// //     const apiKey = "AIzaSyCcJo2cqtxCvhpdKtabssprA5cP4G-Cxsw";
// //     const response = await axios.post(
// //       `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro-002:generateContent=${apiKey}`,
// //       {
// //         contents: [{ parts: [{ text: `${title} ${description}` }] }],
// //       }
// //     );

// //     return response.data; // ✅ Successfully analyzed case
// //   } catch (error) {
// //     console.error("❌ Error analyzing case:", error.response?.data || error.message);
// //     throw error;
// //   }
// // };

// // module.exports = { analyzeCase };
// require("dotenv").config();
// const axios = require("axios");

// const analyzeCase = async (title, description) => {
//   try {
//     const apiKey = 'AIzaSyCcJo2cqtxCvhpdKtabssprA5cP4G-Cxsw';
//     const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${apiKey}`;

//     const response = await axios.post(apiUrl, {
//       contents: [{ role: "user", parts: [{ text: `${title} ${description}` }] }]
//     });

//     if (response.data && response.data.candidates) {
//       return response.data.candidates[0].content.parts[0].text;
//     } else {
//       throw new Error("Invalid response from Gemini API");
//     }
//   } catch (error) {
//     console.error("❌ Error analyzing case:", error.response?.data || error.message);

//   }
// };

// module.exports = { analyzeCase };
require("dotenv").config();
const axios = require("axios");

const GEMINI_API_KEY = ""

// ✅ Function for Case Analysis
const analyzeCase = async (title, description) => {
  try {
    const prompt = `
      Analyze the following legal case and return a structured JSON object with:
      - difficulty (Low, Medium, High)
      - priority (Low, Medium, High)
      - category (e.g., Civil, Criminal, Corporate)
      - recommendations (short action plan)

      Case Details:
      Title: ${title}
      Description: ${description}

      Provide JSON format response:
      {
        "difficulty": "Medium",
        "priority": "High",
        "category": "Corporate",
        "recommendations": "Consult a lawyer specializing in corporate fraud."
      }
    `;

    const response = await axios.post(GEMINI_API_URL, {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    if (response.data && response.data.candidates) {
      const textResponse = response.data.candidates[0].content.parts[0].text;
      
      console.log("📝 Raw AI Response:", textResponse);

      // Try parsing the response as JSON
      try {
        const jsonResponse = JSON.parse(textResponse);
        return jsonResponse;
      } catch (parseError) {
        console.error("❌ Failed to parse JSON response:", parseError);
        throw new Error("Invalid AI response format.");
      }
    } else {
      throw new Error("Invalid response from Gemini API");
    }
  } catch (error) {
    console.error("❌ Error analyzing case:", error.response?.data || error.message);
    throw new Error("Error analyzing case");
  }
};

// ✅ Function for Chatbot
const chatWithGemini = async (message) => {
  try {
    const response = await axios.post(GEMINI_API_URL, {
      contents: [{ role: "user", parts: [{ text: message }] }],
    });

    if (response.data && response.data.candidates) {
      return response.data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Invalid response from Gemini API");
    }
  } catch (error) {
    console.error("❌ Error in chatbot:", error.response?.data || error.message);
    throw new Error("Error in chatbot");
  }
};

module.exports = { analyzeCase, chatWithGemini };
