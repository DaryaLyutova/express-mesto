const fsPromises = require('fs').promises;

// eslint-disable-next-line arrow-body-style
function getDataInfo(filePath) {
  return fsPromises.readFile(filePath, { encoding: 'utf8' })
    // eslint-disable-next-line arrow-body-style
    .then((data) => { return JSON.parse(data); })
    // eslint-disable-next-line arrow-body-style
    .catch((err) => { return console.log(err); });
}

module.exports = getDataInfo;
