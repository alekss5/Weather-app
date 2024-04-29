module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testMatch: ['<rootDir>/tests/**/*.test.{js,jsx}'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  