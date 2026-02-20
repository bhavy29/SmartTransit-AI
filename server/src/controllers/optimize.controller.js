const axios = require('axios');

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'http://localhost:8000';

exports.startOptimization = async (req, res, next) => {
    try {
        // 1. Validate input (validators/geojson.validator.js)

        // 2. Save project/request to DB (models/project.model.js)

        // 3. Forward to ML Service
        const response = await axios.post(`${ML_SERVICE_URL}/optimize`, req.body);

        // 4. Return initial status
        res.status(200).json({
            message: 'Optimization started',
            jobId: response.data.jobId
        });
    } catch (error) {
        // next(error);
        console.error(error);
        res.status(500).json({ error: 'Failed to start optimization' });
    }
};

exports.getOptimizationResult = async (req, res, next) => {
    try {
        const { id } = req.params;
        // Mock result for now
        res.status(200).json({ id, status: 'completed', data: {} });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch results' });
    }
};
