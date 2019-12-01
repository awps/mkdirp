const fs = require('fs')
const path = require('path')

const quickdir = (filePath) => {
    let dirname = path.dirname(filePath)
    if (fs.existsSync(dirname)) {
        return true
    }
    quickdir(dirname)
    fs.mkdirSync(dirname)
}

module.exports = quickdir
