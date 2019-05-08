module.exports = {
  jsonToCSV: function(json) {
    jsonArrays = module.exports.splitJSON(json);
    module.exports.getAllKeys(jsonArrays);
  },
  getAllKeys: function(jsonArrays) {
    //  iterate through first object by checking for the first key repeating itself
    let firstRow = jsonArrays[0].split(', ');
    let keys = [];
    for (var i = 0; i < firstRow.length; i++) {
      if (keys.indexOf(firstRow[i].split(': ')[0]) < 0) {
        keys.push(firstRow[i].split(': ')[0]) 
      }
    }
    return keys;
  },
  splitJSON: function(jsonRaw) {
    json = jsonRaw.replace(/{|}|\s\s+|"/g, '');
    json = json.replace(/\[|\]/g, '');
    json = json.replace(/\s\s/g, '');
    json = json.split('children:');
    return json;
  }
};