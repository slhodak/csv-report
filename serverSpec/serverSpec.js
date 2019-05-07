const csv = require('../server/csv');
const exampleData = require('../exampleData');

const testSuite = {
  runAllTests: function() {
    testSuite.testGetAllKeys();
    testSuite.testDFCollect();
  },
  testGetAllKeys: function() {
    let actual = csv.getAllKeys(exampleData);
    let expected = ['firstName', 'lastName', 'county', 'city', 'role', 'sales'];
    console.log(actual);
    console.log(expected);
    console.assert((actual == expected), 'should list all keys from all levels of input json');
  },
  testDFCollect: function() {
    let actual = csv.DFCollect(exampleData);
    console.log(actual);
  }
}

testSuite.runAllTests();