const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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
    mode: 'production'
};
