module.exports = {
  jsonParser: function(json) {
    //  get each key
    //  each key besides children becomes a column
    //  push every key-value pair into an array
    //  make a list from all the unique keys
    //  for each of all of the keys, add the value from an object or add null
    //  end each object line with a '\n'
    let keys = module.exports.getAllKeys(json);
    
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