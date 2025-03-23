require('dotenv').config();
const express = require('express');
const cors = require('cors');
const caseRoutes = require('./caseRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Register routes
app.use('/api/cases', caseRoutes);

module.exports = app;
