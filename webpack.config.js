const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        demo: './src/demo.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'demo')
    },
};