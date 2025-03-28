const validatePassword = (password) => {
  // Minimum length requirement
  if (password.length < 8) {
    return {
      isValid: false,
      message: 'Password must be at least 8 characters long'
    };
  }

  // Check for uppercase letters
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one uppercase letter'
    };
  }

  // Check for lowercase letters
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one lowercase letter'
    };
  }

  // Check for numbers
  if (!/[0-9]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one number'
    };
  }

  // Check for special characters
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)'
    };
  }

  // Check for common passwords
  const commonPasswords = [
    'password123',
    '12345678',
    'qwerty123',
    'admin123',
    'letmein123'
  ];

  if (commonPasswords.includes(password.toLowerCase())) {
    return {
      isValid: false,
      message: 'This password is too common. Please choose a stronger password'
    };
  }

  return {
    isValid: true,
    message: 'Password meets all requirements'
  };
};

module.exports = { validatePassword }; 