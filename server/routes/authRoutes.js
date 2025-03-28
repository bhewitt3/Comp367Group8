const express = require('express');
const router = express.Router();
const { register, login, changePassword, deleteAccount } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/change-password', authenticateToken, changePassword);
router.post('/delete-account', authenticateToken, deleteAccount);

module.exports = router; 