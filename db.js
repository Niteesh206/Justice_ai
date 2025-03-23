// // const mongoose = require('mongoose');

// // mongoose.connect('mongodb+srv://admin:nani1620@cluster0.xxxxx.mongodb.net/myDatabase?retryWrites=true&w=majority', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(() => console.log('✅ Connected to MongoDB Atlas'))
// // .catch(err => console.error('❌ MongoDB Connection Error:', err));
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://kancharlaniteeshreddy:nani1620@cluster0.t6up8ni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('✅ MongoDB Connected');
//   } catch (error) {
//     console.error('❌ MongoDB Connection Error:', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB; // ✅ Make sure this line exists
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://kancharlaniteeshreddy:nani1620@cluster0.t6up8ni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB Connected");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
// const mongoose = require("mongoose");
// require("dotenv").config();

// const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://kancharlaniteeshreddy:nani1620@cluster0.t6up8ni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://kancharlaniteeshreddy:nani1620@cluster0.t6up8ni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
