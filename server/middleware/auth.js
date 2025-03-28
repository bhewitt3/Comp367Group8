const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Middleware to authenticate JWT tokens
 * Verifies the JWT token from the Authorization header and attaches the decoded user data to the request
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Object} Response with error message if authentication fails
 */
const authenticateToken = (req, res, next) => {
  // Extract token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify token and decode user data
  jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    try {
      // Verify user exists in database
      const userFromDb = await User.findOne({ _id: decoded.userId });
      if (!userFromDb) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Attach decoded user data to request object
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
};

module.exports = { authenticateToken }; 
