const { option } = require('commander')

const fs = jest.genMockFromModule('fs')
const _fs = jest.requireActual('fs')

Object.assign(fs, _fs)
const mocks = {}
fs.setMock = (path, error, data) => {
    mocks[path] = [error, data]
}
fs.readfile = (path, options, callback) => {
    if (callback === undefined) {
        callback = options
    }
    if (path in mocks) {
        // 如果这个路径是mock的就不去调用真正的fs
        callback(...mocks[path])
    } else {
        // 否则就走真正的fs.readFile
        _fs.readFile(path, options, callback)
    }
}

module.exports = fs
