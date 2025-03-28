'use client';

import { FiCheck, FiX } from 'react-icons/fi';

const PasswordRequirements = ({ password }) => {
  const requirements = [
    {
      id: 'length',
      label: 'At least 8 characters',
      test: (pwd) => pwd.length >= 8
    },
    {
      id: 'uppercase',
      label: 'One uppercase letter',
      test: (pwd) => /[A-Z]/.test(pwd)
    },
    {
      id: 'lowercase',
      label: 'One lowercase letter',
      test: (pwd) => /[a-z]/.test(pwd)
    },
    {
      id: 'number',
      label: 'One number',
      test: (pwd) => /[0-9]/.test(pwd)
    },
    {
      id: 'special',
      label: 'One special character (!@#$%^&*(),.?":{}|<>)',
      test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd)
    },
    {
      id: 'repeated',
      label: 'No repeated characters (e.g., "aaa")',
      test: (pwd) => !/(.)\1{2,}/.test(pwd)
    },
    {
      id: 'sequential',
      label: 'No sequential characters (e.g., "123", "abc")',
      test: (pwd) => {
        const sequentialChars = ['123', 'abc', 'qwerty', 'asdfgh'];
        return !sequentialChars.some(seq => pwd.toLowerCase().includes(seq));
      }
    }
  ];

  return (
    <div className="mt-2 space-y-1.5 text-sm">
      <p className="text-gray-600 dark:text-gray-400 mb-2">Password Requirements:</p>
      <ul className="space-y-1">
        {requirements.map((req) => {
          const isMet = req.test(password);
          return (
            <li key={req.id} className="flex items-center gap-2">
              {isMet ? (
                <FiCheck className="text-green-500" />
              ) : (
                <FiX className="text-red-500" />
              )}
              <span className={isMet ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'}>
                {req.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordRequirements; 