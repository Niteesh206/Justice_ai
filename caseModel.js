const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: String,
    priority: String,
    category: String,
    recommendations: String,
    content: String, // AI-Generated response
    createdAt: { type: Date, default: Date.now }
});

const Case = mongoose.model("Case", caseSchema);
module.exports = Case;
