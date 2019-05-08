const csv = require('../server/csv');

const testSuite = {
  runAllTests: function() {
    testSuite.testJSONtoCSV();
    testSuite.testGetAllKeys();
    testSuite.testSplitJSON();
  },
  testJSONtoCSV: function() {
    console.log('should convert JSON to csv');
    let actual = csv.jsonToCSV('{ "firstName": "Joshie", "lastName": "Wyattson", "county": "San Mateo", "city": "San Mateo", "role": "Broker", "sales": 1000000, "children": [ { "firstName": "Beth Jr.", "lastName": "Johnson", "county": "San Mateo", "city": "Pacifica", "role": "Manager", "sales": 2900000, "children": [ { "firstName": "Smitty", "lastName": "Won", "county": "San Mateo", "city": "Redwood City", "role": "Sales Person", "sales": 4800000, "children": [] }, { "firstName": "Allen", "lastName": "Price", "county": "San Mateo", "city": "Burlingame", "role": "Sales Person", "sales": 2500000, "children": [] } ] }, { "firstName": "Beth", "lastName": "Johnson", "county": "San Francisco", "city": "San Francisco", "role": "Broker/Sales Person", "sales": 7500000, "children": [] } ] };');
    console.log(actual);
  },
  testSplitJSON: function() {
    console.log('should split json into rows ending at object\'s last property');
    let actual = csv.splitJSON('{ "firstName": "Joshie", "lastName": "Wyattson", "county": "San Mateo", "city": "San Mateo", "role": "Broker", "sales": 1000000, "children": [ { "firstName": "Beth Jr.", "lastName": "Johnson", "county": "San Mateo", "city": "Pacifica", "role": "Manager", "sales": 2900000, "children": [ { "firstName": "Smitty", "lastName": "Won", "county": "San Mateo", "city": "Redwood City", "role": "Sales Person", "sales": 4800000, "children": [] }, { "firstName": "Allen", "lastName": "Price", "county": "San Mateo", "city": "Burlingame", "role": "Sales Person", "sales": 2500000, "children": [] } ] }, { "firstName": "Beth", "lastName": "Johnson", "county": "San Francisco", "city": "San Francisco", "role": "Broker/Sales Person", "sales": 7500000, "children": [] } ] };');
    console.log(actual);
  },
  testGetAllKeys: function() {
    console.log('should get all keys');
    let actual = csv.getAllKeys([ ' firstName: Joshie, lastName: Wyattson, county: San Mateo, city: San Mateo, role: Broker, sales: 1000000, ',
    '   firstName: Beth Jr., lastName: Johnson, county: San Mateo, city: Pacifica, role: Manager, sales: 2900000, ',
    '   firstName: Smitty, lastName: Won, county: San Mateo, city: Redwood City, role: Sales Person, sales: 4800000, ',
    '  ,  firstName: Allen, lastName: Price, county: San Mateo, city: Burlingame, role: Sales Person, sales: 2500000, ',
    '    ,  firstName: Beth, lastName: Johnson, county: San Francisco, city: San Francisco, role: Broker/Sales Person, sales: 7500000, ',
    '    ;' ]);
    console.log(actual);
  }
}

testSuite.runAllTests();