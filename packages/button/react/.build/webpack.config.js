const { rules, plugins } = require('@podlove/build')
const pkg = require('../package.json');

module.exports = {
  mode: 'production',

  entry: './src/index.jsx',

  output: {
    filename: 'index.js',
    library: pkg.name,
    libraryTarget: "umd"
  },

  devtool: 'source-map',

  module: {
    rules: [rules.javascript()]
  },

  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom",
  },

  plugins: [plugins.env({ mode: 'production' })]
}
