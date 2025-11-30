const chalk = require('chalk');

/**
 * Displays a welcome banner for the CLI
 */
const showBanner = () => {
  console.log(chalk.cyan.bold('\n╔════════════════════════════════════════╗'));
  console.log(chalk.cyan.bold('║') + chalk.white.bold('        nxpcli - Express CLI           ') + chalk.cyan.bold('║'));
  console.log(chalk.cyan.bold('╚════════════════════════════════════════╝'));
  console.log(chalk.gray('  Professional Express.js scaffolding\n'));
};

/**
 * Displays project creation success message with next steps
 * @param {string} projectName - Name of the created project
 */
const showProjectSuccess = (projectName) => {
  console.log(chalk.green.bold('\n✨ Success!') + chalk.white(` Project '${projectName}' created!\n`));
  console.log(chalk.cyan('📁 Next steps:\n'));
  console.log(chalk.white('  1. ') + chalk.yellow(`cd ${projectName}`));
  console.log(chalk.white('  2. ') + chalk.yellow('npm run dev'));
  console.log(chalk.white('  3. ') + chalk.gray('Open http://localhost:5000\n'));
};

/**
 * Displays module creation success message
 * @param {string} moduleName - Name of the created module
 */
const showModuleSuccess = (moduleName) => {
  console.log(chalk.green.bold('\n✨ Success!') + chalk.white(` Module '${moduleName}' created!\n`));
  console.log(chalk.cyan('📝 Files created:\n'));
  console.log(chalk.white(`  • ${moduleName}.route.ts`));
  console.log(chalk.white(`  • ${moduleName}.controller.ts`));
  console.log(chalk.white(`  • ${moduleName}.service.ts`));
  console.log(chalk.white(`  • ${moduleName}.validation.ts\n`));
};

/**
 * Displays error message in red
 * @param {string} message - Error message to display
 */
const showError = (message) => {
  console.log(chalk.red.bold('\n❌ Error: ') + chalk.white(message));
};

/**
 * Displays warning message in yellow
 * @param {string} message - Warning message to display
 */
const showWarning = (message) => {
  console.log(chalk.yellow.bold('\n⚠️  Warning: ') + chalk.white(message));
};

/**
 * Displays info message in blue
 * @param {string} message - Info message to display
 */
const showInfo = (message) => {
  console.log(chalk.blue.bold('\nℹ️  Info: ') + chalk.white(message));
};

module.exports = {
  showBanner,
  showProjectSuccess,
  showModuleSuccess,
  showError,
  showWarning,
  showInfo,
};
