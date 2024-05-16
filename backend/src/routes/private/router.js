const express = require('express');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Users
router.use('/users', userRoutes);

module.exports = router;
