const fsPromises = require('fs').promises;

function getDataInfo(filePath) {
  return fsPromises.readFile(filePath, { encoding: 'utf8' })
    .then((data) => { return JSON.parse(data); })
    .catch((err) => { return console.log(err); });
}

module.exports = getDataInfo;
