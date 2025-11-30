const { RESERVED_KEYWORDS, ERROR_MESSAGES } = require('./constants');

/**
 * Validates a project or module name
 * @param {string} name - The name to validate
 * @returns {{ valid: boolean, error?: string }} Validation result
 */
const validateName = (name) => {
  // Check if name is empty
  if (!name || name.trim().length === 0) {
    return { valid: false, error: 'Name cannot be empty.' };
  }

  // Check if name matches valid pattern (lowercase letters, numbers, hyphens)
  // Must start with a letter
  const validPattern = /^[a-z][a-z0-9-]*$/;
  if (!validPattern.test(name)) {
    return { valid: false, error: ERROR_MESSAGES.INVALID_NAME };
  }

  // Check if name is a reserved keyword
  if (RESERVED_KEYWORDS.includes(name.toLowerCase())) {
    return { valid: false, error: ERROR_MESSAGES.RESERVED_KEYWORD };
  }

  // Check if name is too long
  if (name.length > 214) {
    return { valid: false, error: 'Name is too long (max 214 characters).' };
  }

  return { valid: true };
};

/**
 * Validates Node.js version
 * @param {string} currentVersion - Current Node.js version
 * @param {string} minVersion - Minimum required version
 * @returns {boolean} Whether version is sufficient
 */
const validateNodeVersion = (currentVersion, minVersion) => {
  const parseVersion = (version) => {
    const cleaned = version.replace(/^v/, '');
    return cleaned.split('.').map(Number);
  };

  const current = parseVersion(currentVersion);
  const min = parseVersion(minVersion);

  for (let i = 0; i < 3; i++) {
    if (current[i] > min[i]) return true;
    if (current[i] < min[i]) return false;
  }
  return true;
};

/**
 * Checks if a directory has write permissions
 * @param {string} dirPath - Directory path to check
 * @returns {boolean} Whether directory is writable
 */
const isDirectoryWritable = (dirPath) => {
  const fs = require('fs');
  try {
    fs.accessSync(dirPath, fs.constants.W_OK);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
  validateName,
  validateNodeVersion,
  isDirectoryWritable,
};
