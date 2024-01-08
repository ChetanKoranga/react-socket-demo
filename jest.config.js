module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/src/constants/ManageAttributes/GridColumns.js",
    "<rootDir>/src/config/environment/index.js",
    "<rootDir>/src/components/index.js",
    "<rootDir>/src/components/Routes/index.js",
    "<rootDir>/src/components/Wildcards/index.js",
    "<rootDir>/src/constants/index.js",
    "<rootDir>/src/redux/actions/index.js",
    "<rootDir>/src/services/index.js",
    "<rootDir>/src/services/domain/index.js",
    "<rootDir>/src/services/network/http/http.js",
  ],
  setupFiles: ["<rootDir>/src/tests/setupTests.js"],
  transformIgnorePatterns: ["node_modules/?!(webcore-ux)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/tests/fileMock.js",
    "\\.(css|less)$": "<rootDir>/src/tests/styleMock.js",
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "css", "svg"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.js?$": "babel-jest",
    "^.+\\.css?$": "jest-transform-stub",
    "^.+\\.svg?$": "jest-transform-stub",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "src/utils", __dirname],
  coverageThreshold: {
    global: {
      branches: 73,
      functions: 82.9,
      lines: 85,
      statements: 85,
    },
  },
};
