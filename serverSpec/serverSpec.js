const csv = require('../server/csv');
const exampleData = require('../exampleData');

const testSuite = {
  runAllTests: function() {
    testSuite.testGetAllKeys();
  },
  testGetAllKeys: function() {
    let actual = csv.getAllKeys(exampleData);
    console.log(actual);
  }
}

testSuite.runAllTests();