// const mongoose = require("mongoose");

// const caseSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   status: { type: String, enum: ["Open", "In Progress", "Closed"], default: "Open" },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Case", caseSchema);
// const mongoose = require("mongoose");

// const caseSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   status: { type: String, enum: ["Open", "In Progress", "Closed"], default: "Open" },
//   level: { type: String, enum: ["Low", "Medium", "High"], required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Case", caseSchema);
const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "Open" },
  createdAt: { type: Date, default: Date.now },
});

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
