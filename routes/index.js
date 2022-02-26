const express = require('express');
const router = express.Router();
router.use(require('./voterRoutes'));


module.exports = router;