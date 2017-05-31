module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'calculator.js' }
    ],

    tests: [
      { pattern: 'calculator.spec.js' }
    ],

    testFramework: 'jasmine',

    debug: true
  }
};
