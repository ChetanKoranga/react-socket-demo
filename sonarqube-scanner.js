// eslint-disable-next-line no-undef
const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    options: {
      "sonar.projectKey": "INFRA_FRONTEND",
      "sonar.prjectName": "INFRA_FRONTEND",
      "sonar.projectVersion": "1.0",
      "sonar.sources": "./src",
      "sonar.exclusions": "**/*.spec.jsx,**/*.spec.js",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.login": "sqp_b461f82c675bee9a26d2db4c664d8c7a88687cc8",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  // eslint-disable-next-line no-undef
  () => process.exit(),
);
