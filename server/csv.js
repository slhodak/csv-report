module.exports = {
  jsonParser: function(json) {
    //  get each key
    //  each key besides children becomes a column
    //  push every key-value pair into an array
    //  make a list from all the unique keys
    //  for each of all of the keys, add the value from an object or add null
    //  end each object line with a '\n'
    let keys = module.exports.getAllKeys(json);
    console.log(keys);
  },
  getAllKeys: function(json, result = []) {
    //  check the top level
    //  check each level
    for (var key in json) {
      if (result.indexOf(key) < 0) {
        result.push(key);
      }
      if (key === "children") {
        for (var i = 0; i < key.length; i++) {
          module.exports.getAllKeys(key[i], result);
        }
      }
    }
    return result;
  }
};