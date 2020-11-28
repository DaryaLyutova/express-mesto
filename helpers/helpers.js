const fsPromises = require('fs').promises;

// eslint-disable-next-line arrow-body-style
function getDataInfo(filePath) {
  return fsPromises.readFile(filePath, { encoding: 'utf8' })
    .then((data) => { JSON.parse(data); })
    .catch((err) => { console.log(err); });
}

module.exports = getDataInfo;
