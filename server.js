// const express = require("express");
// const cors = require("cors");
// const caseRoutes = require("./caseRoutes");
// require("dotenv").config();

// const app = express();

// // Enable CORS for frontend requests
// app.use(cors({ origin: "http://localhost:3000" }));

// app.use(express.json());

// // API Routes
// app.use("/api", caseRoutes);

// // Start Server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
// const express = require("express");
// const cors = require("cors");

// const caseRoutes = require("./caseRoutes");

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/api", caseRoutes);

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


// const express = require("express");
// const cors = require("cors");
// const caseRoutes = require("./caseRoutes");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // Use API routes
// app.use("/api", caseRoutes);

// app.listen(PORT, () => {
//     console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const caseRoutes = require("./caseRoutes");

dotenv.config();
connectDB(); // ✅ Connect to MongoDB

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", caseRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
