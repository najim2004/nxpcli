// Reserved keywords that cannot be used as project or module names
const RESERVED_KEYWORDS = [
  'node',
  'express',
  'npm',
  'package',
  'module',
  'require',
  'exports',
  'process',
  'global',
  'console',
  'buffer',
  'test',
  'src',
  'dist',
  'build',
  'public',
  'private',
  'static',
  'index',
  'main',
  'server',
  'app',
  'config',
  'utils',
  'helpers',
  'middleware',
  'middlewares',
  'node_modules',
];

// Template markers used in generated files
const TEMPLATE_MARKERS = {
  IMPORT: '// <new-import-here>',
  ROUTE: '// <new-route-here>',
};

// Error messages
const ERROR_MESSAGES = {
  INVALID_NAME: 'Invalid name. Use only lowercase letters, numbers, and hyphens. Must start with a letter.',
  RESERVED_KEYWORD: 'This name is a reserved keyword and cannot be used.',
  DIRECTORY_EXISTS: 'Directory already exists.',
  NOT_PROJECT_ROOT: 'This command must be run from project root (directory containing src/app.ts).',
  MODULE_EXISTS: 'Module already exists.',
  INSTALL_FAILED: 'Failed to install dependencies.',
  HUSKY_INIT_FAILED: 'Failed to initialize Husky.',
  NO_DATABASE_URL: 'Database URL is not defined in .env file.',
};

// Success messages
const SUCCESS_MESSAGES = {
  PROJECT_CREATED: 'Project created successfully!',
  MODULE_CREATED: 'Module created successfully!',
  DEPENDENCIES_INSTALLED: 'All dependencies installed successfully!',
  HUSKY_INITIALIZED: 'Husky & Lint Staged initialized successfully.',
};

// Minimum required versions
const MIN_VERSIONS = {
  NODE: '18.0.0',
  NPM: '9.0.0',
};

module.exports = {
  RESERVED_KEYWORDS,
  TEMPLATE_MARKERS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  MIN_VERSIONS,
};
