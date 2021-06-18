module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules", "/next"],
  collectCoverage: true,
  coolectCoverageFrom: ["/src/**/*.ts(x)"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
}
