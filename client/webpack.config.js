var path = require('path')

config = {
 entry: "./src/app.js",
 output: {
   filename: "bundle.js",
   path: path.resolve('./build')
 },
 devtool: 'source-map'
}

module.exports = config;