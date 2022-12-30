/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*+(spec|test).+(ts|tsx|js)'],
};

export default config;
