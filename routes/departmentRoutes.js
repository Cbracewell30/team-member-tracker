const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Getting all Departments

router.get('/')