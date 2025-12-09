# Contributing to nxpcli

Thank you for your interest in contributing to nxpcli! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Environment details** (OS, Node.js version, npm version)
- **Error messages** or screenshots if applicable

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - why is this enhancement needed?
- **Proposed solution** - how should it work?
- **Alternatives considered** - what other approaches did you think about?

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the code style guidelines
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Write clear commit messages**
6. **Submit a pull request**

## Development Setup

1. Clone your fork:

```bash
git clone https://github.com/najim2004/nxpcli.git
cd nxpcli
```

2. Install dependencies:

```bash
npm install
```

3. Test the CLI locally:

```bash
node src/cli/index.js --help
```

## Code Style Guidelines

### JavaScript

- Use **CommonJS** module syntax (`require`/`module.exports`)
- Use **2 spaces** for indentation
- Use **single quotes** for strings
- Add **JSDoc comments** for all functions
- Follow existing code patterns

### Naming Conventions

- **Files**: Use lowercase with hyphens (e.g., `module-templates.js`)
- **Functions**: Use camelCase (e.g., `validateName`)
- **Constants**: Use UPPER_SNAKE_CASE (e.g., `ERROR_MESSAGES`)
- **Variables**: Use camelCase (e.g., `projectName`)

### Comments

- Write clear, concise comments
- Use JSDoc for function documentation
- Explain **why**, not **what** (code should be self-explanatory)

## Template Guidelines

When modifying templates:

- Ensure generated code follows best practices
- Test generated projects thoroughly
- Keep templates up-to-date with latest package versions
- Add comments in generated code where helpful

## Testing

Before submitting a PR:

1. **Test project creation:**

```bash
node src/cli/index.js create project test-app
cd test-app
npm run build
```

2. **Test module generation:**

```bash
node src/cli/index.js create module user --model
npm run build
```

3. **Test validation:**

```bash
node src/cli/index.js create project "Invalid Name"  # Should fail
node src/cli/index.js create project node  # Should fail
```

## Commit Message Guidelines

Use clear, descriptive commit messages:

- **feat**: New feature (e.g., `feat: add Docker template support`)
- **fix**: Bug fix (e.g., `fix: correct ESLint config syntax`)
- **docs**: Documentation changes (e.g., `docs: update README`)
- **style**: Code style changes (e.g., `style: format with prettier`)
- **refactor**: Code refactoring (e.g., `refactor: extract validation logic`)
- **test**: Adding tests (e.g., `test: add unit tests for validators`)
- **chore**: Maintenance tasks (e.g., `chore: update dependencies`)

Example:

```
feat: add PostgreSQL database option

- Add PostgreSQL template
- Update database configuration
- Add migration scripts
```

## Project Structure

```
nxpcli/
├── src/
│   ├── cli/           # CLI entry point
│   ├── core/          # Core logic (commands, utils, validators)
│   └── templates/     # Code templates
├── package.json
└── README.md
```

## Questions?

Feel free to open an issue for questions or reach out to the maintainer:

- **Email**: itsnajim.mail@gmail.com
- **GitHub**: [@najim2004](https://github.com/najim2004)

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

---

Thank you for contributing to nxpcli! 🚀
