const express = require('express');
const router = express.Router();
const optimizeController = require('../controllers/optimize.controller');

// POST /api/optimize/start
router.post('/start', optimizeController.startOptimization);

// GET /api/optimize/:id
router.get('/:id', optimizeController.getOptimizationResult);

module.exports = router;
