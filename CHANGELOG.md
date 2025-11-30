# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2025-11-30

### Added

- Input validation for project and module names
- Reserved keywords check to prevent using system names
- Centralized constants file for error messages and configuration
- Validation utilities module with comprehensive checks
- `.env.example` template for better environment setup guidance
- JSDoc comments to all utility functions
- Package metadata (repository, bugs, homepage URLs)
- Engine requirements (Node.js >=18.0.0, npm >=9.0.0)
- Enhanced keywords for better npm discoverability

### Fixed

- ESLint flat config syntax errors (removed invalid `extends` property)
- TypeScript error interface export (changed from `interface` to `type`)
- Nodemon configuration (removed redundant `nodemon --exec`)
- Template string syntax in ESLint configuration

### Changed

- Version bumped from 1.3.2 to 1.4.0
- Improved package description
- Error messages now use centralized constants
- Success messages now use centralized constants
- Template markers now use centralized constants

### Improved

- Error handling with clear, actionable messages
- User feedback during project/module creation
- Code documentation and maintainability
- Developer experience with better validation

## [1.3.2] - Previous Release

### Features

- Basic project scaffolding
- Module generation with optional model
- TypeScript support
- MongoDB integration
- ESLint and Prettier configuration
- Husky and lint-staged setup

---

[1.4.0]: https://github.com/najim2004/nxpcli/compare/v1.3.2...v1.4.0
[1.3.2]: https://github.com/najim2004/nxpcli/releases/tag/v1.3.2
