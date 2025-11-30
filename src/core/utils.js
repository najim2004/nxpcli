const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const ora = require("ora");

/**
 * Capitalizes the first letter of a string
 * @param {string} s - String to capitalize
 * @returns {string} Capitalized string
 */
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Installs npm packages sequentially and tracks their versions
 * @param {string[]} packageList - Array of package names to install
 * @param {boolean} isDev - Whether to install as dev dependencies
 * @param {string} projectPath - Path to the project directory
 * @returns {Promise<{failedPackages: string[], installedPackagesWithVersions: Object}>} Installation results
 */
async function installDependenciesSequentially(
  packageList,
  isDev = false,
  projectPath
) {
  const failedPackages = [];
  const installedPackagesWithVersions = {};
  const installCommand = isDev ? "npm install -D" : "npm install";
  const dependencyType = isDev ? "devDependencies" : "dependencies";

  const spinner = ora(`Installing ${dependencyType}...`).start();

  for (const pkgName of packageList) {
    spinner.text = `Installing ${pkgName}...`;
    try {
      execSync(`${installCommand} ${pkgName} --no-save`, {
        stdio: "pipe",
        cwd: projectPath,
      });

      let actualPackageNameForNodeModules;
      if (pkgName.startsWith("@")) {
        const parts = pkgName.split("/");
        actualPackageNameForNodeModules = parts[0] + "/" + parts[1];
      } else {
        actualPackageNameForNodeModules = pkgName;
      }

      const nodeModulesPath = path.join(
        projectPath,
        "node_modules",
        actualPackageNameForNodeModules
      );
      const isNodeModulePresent = fs.existsSync(nodeModulesPath);

      if (isNodeModulePresent) {
        const installedPackageJsonPath = path.join(
          nodeModulesPath,
          "package.json"
        );
        const installedPackageJson = JSON.parse(
          fs.readFileSync(installedPackageJsonPath, "utf8")
        );
        const installedVersion = installedPackageJson.version;

        installedPackagesWithVersions[pkgName] = `^${installedVersion}`;
        spinner.succeed(`Installed ${pkgName}@${installedVersion}`);
      } else {
        spinner.warn(`Verification failed for ${pkgName}.`);
        failedPackages.push(pkgName);
      }
    } catch (error) {
      spinner.fail(`Failed to install ${pkgName}`);
      failedPackages.push(pkgName);
    }
  }
  spinner.stop();
  return { failedPackages, installedPackagesWithVersions };
}

/**
 * Initializes Husky and lint-staged for Git hooks
 * @param {string} projectPath - Path to the project directory
 */
function initializeHusky(projectPath) {
  const spinner = ora("Initializing Husky & Lint Staged...").start();
  try {
    execSync("npm install husky --save-dev", {
      stdio: "pipe",
      cwd: projectPath,
    });
    execSync("npx husky init", { stdio: "pipe", cwd: projectPath });
    
    // Write pre-commit hook content
    const preCommitPath = path.join(projectPath, ".husky", "pre-commit");
    fs.writeFileSync(preCommitPath, "npx lint-staged\n", { mode: 0o755 });
    
    spinner.succeed("Husky & Lint Staged initialized successfully.");
  } catch (error) {
    spinner.fail("Failed to initialize Husky & Lint Staged.");
  }
}

/**
 * Checks if a command exists in the system
 * @param {string} command - Command to check
 * @returns {boolean} Whether command exists
 */
function commandExists(command) {
  try {
    execSync(`which ${command}`, { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

/**
 * Gets the current Node.js version
 * @returns {string} Node.js version
 */
function getNodeVersion() {
  return process.version;
}

/**
 * Gets the current npm version
 * @returns {string} npm version
 */
function getNpmVersion() {
  try {
    return execSync("npm --version", { encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

module.exports = {
  capitalize,
  installDependenciesSequentially,
  initializeHusky,
  commandExists,
  getNodeVersion,
  getNpmVersion,
};
