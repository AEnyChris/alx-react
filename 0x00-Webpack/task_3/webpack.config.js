const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        body: './modules/body/body.js',
        header: './modules/header/header.js',
        footer: './modules/footer/footer.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true
    },
    module: {
        rules: [
            { test: /\.css$/,
                use: [
                    { loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
                    { loader: 'css-loader' }
                ]
            },
            { test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ALX Dashboard"
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        open: true,
        port: 8564,
        onListening: function (devServer) {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }
            const port = devServer.server.address().port;
            console.log(`Listening on port: ${port}`);
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    mode: 'development',
};
