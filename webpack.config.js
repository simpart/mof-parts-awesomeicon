module.exports = {
    entry: __dirname + '/src/awesomeicon.js',
    output: {
        path: __dirname + '/dist',
        filename: 'awesomeicon.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
