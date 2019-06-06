module.exports = {
  displayName: 'package-b',
  testEnvironment: 'node',
  resetMocks: true,
  rootDir: './',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
