module.exports = {
  jsonToCSV: function(json) {
    //  get each key
    //  each key besides children becomes a column
    //  push every key-value pair into an array
    //  make a list from all the unique keys
    //  for each of all of the keys, add the value from an object or add null
    //  end each object line with a '\n'
    let csv = '';
    let keys = module.exports.getAllKeys(json);
    for (var i = 0; i < keys.length - 1; i++) {
      csv.concat(keys[i], ',');
    }
    csv.concat(keys[keys.length - 1], '\n');
    let pairs = module.exports.DFCollect(json);
    for (var i = 0; i < pairs.length; i++) {
      for (var j = i * pairs.length; j < keys.length; j++) {
        //  check if pair[i] has key
        //  check if pair[i] is 'sales'
        //    new line and break if so
        if (pairs[j][0] === 'sales') {
          csv.concat(pairs[j][1], '\n');
        } else if (pairs[j][0] === keys[j]) {
          csv.concat(pairs[j][1], ',');
        } else {
          csv.concat(',');
        }
      }
    }
    return csv;
  },
  getAllKeys: function(json, result = []) {
    //  check the top level
    //  check each level
    for (var key in json) {
      if (key === "children") {
        for (var i = 0; i < json[key].length; i++) {
          module.exports.getAllKeys(json[key][i], result);
        }
      } else if (result.indexOf(key) < 0 && key !== '0' && key !== '1') {
        result.push(key);
      }
    }
    return result;
  },
  DFCollect: function(json, pairs = []) {
    for (var key in json) {
      if (key === "children") {
        for (var i = 0; i < json[key].length; i++) {
          module.exports.DFCollect(json[key][i], pairs);
        }
      } else if (key !== '0' && key !== '1') {
        pairs.push([key, json[key]]);
      }
    }
    return pairs;
  }
};