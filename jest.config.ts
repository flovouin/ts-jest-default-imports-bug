import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  rootDir: "src",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["jest-extended/all"],
  testMatch: ["**/*.spec.ts"],
  extensionsToTreatAsEsm: [".ts"],
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

export default config;
