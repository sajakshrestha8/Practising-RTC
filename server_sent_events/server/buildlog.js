const buildLogs = [
  {
    level: "INFO",
    message: "Build started...",
    delay: 500,
  },
  {
    level: "INFO",
    message: "Cloning repository...",
    delay: 5000,
  },
  {
    level: "SUCCESS",
    message: "Repository cloned successfully.",
    delay: 10000,
  },
  {
    level: "INFO",
    message: "Installing dependencies...",
    delay: 5000,
  },
  {
    level: "INFO",
    message: "Downloading npm packages...",
    delay: 15000,
  },
  {
    level: "SUCCESS",
    message: "Dependencies installed successfully.",
    delay: 700,
  },
  {
    level: "INFO",
    message: "Running ESLint...",
    delay: 1200,
  },
  {
    level: "SUCCESS",
    message: "No linting issues found.",
    delay: 600,
  },
  {
    level: "INFO",
    message: "Running unit tests...",
    delay: 1500,
  },
  {
    level: "INFO",
    message: "Executing authentication tests...",
    delay: 1800,
  },
  {
    level: "SUCCESS",
    message: "Authentication tests passed.",
    delay: 500,
  },
  {
    level: "INFO",
    message: "Executing payment tests...",
    delay: 2200,
  },
  {
    level: "SUCCESS",
    message: "Payment tests passed.",
    delay: 500,
  },
  {
    level: "INFO",
    message: "Executing API integration tests...",
    delay: 2500,
  },
  {
    level: "SUCCESS",
    message: "All integration tests passed.",
    delay: 700,
  },
  {
    level: "INFO",
    message: "⚙️ Compiling TypeScript...",
    delay: 3000,
  },
  {
    level: "SUCCESS",
    message: "TypeScript compilation completed.",
    delay: 800,
  },
  {
    level: "INFO",
    message: "Bundling application...",
    delay: 2800,
  },
  {
    level: "SUCCESS",
    message: "Bundle created successfully.",
    delay: 700,
  },
  {
    level: "INFO",
    message: "Optimizing assets...",
    delay: 2200,
  },
  {
    level: "SUCCESS",
    message: "Assets optimized.",
    delay: 600,
  },
  {
    level: "INFO",
    message: "Generating source maps...",
    delay: 1800,
  },
  {
    level: "SUCCESS",
    message: "Source maps generated.",
    delay: 500,
  },
  {
    level: "INFO",
    message: "Uploading build artifacts...",
    delay: 2500,
  },
  {
    level: "SUCCESS",
    message: "Artifacts uploaded successfully.",
    delay: 700,
  },
  {
    level: "INFO",
    message: "Deploying to staging environment...",
    delay: 3500,
  },
  {
    level: "INFO",
    message: "Restarting application server...",
    delay: 1500,
  },
  {
    level: "SUCCESS",
    message: "Application deployed successfully.",
    delay: 700,
  },
  {
    level: "INFO",
    message: "Performing health checks...",
    delay: 1800,
  },
  {
    level: "SUCCESS",
    message: "Health checks passed.",
    delay: 500,
  },
  {
    level: "SUCCESS",
    message: "Build completed successfully!",
    delay: 0,
  },
];

module.exports = buildLogs;
