const express = require('express');
const cors = require('cors');
const optimizeRoutes = require('./routes/optimize.routes');
// const errorMiddleware = require('./middleware/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/optimize', optimizeRoutes);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Error handling
// app.use(errorMiddleware);

module.exports = app;
