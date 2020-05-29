const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const dev = true;

if (dev){
    module.exports = {
        context: path.resolve(__dirname, 'src'),
        mode: 'development',
        watch: true,
        entry: {
            main: './app.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist/build'),
            publicPath: "/topia/build/"
        },
        resolve: {
            modules: [path.resolve(__dirname, 'libs'), 'node_modules'],
            alias: {
                './@': path.resolve(__dirname, 'src'),
                '@': path.resolve(__dirname, 'src')
            }
        },
        optimization: {
            splitChunks:{
                chunks: 'all'
            }
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './app.html'
            }),
            //new CleanWebpackPlugin(),
            new MiniCSSExtractPlugin({
                filename: '[name].css'
            })
        ],
        module:{
            rules: [
                {
                    test: /\.css$/,
                    use: [{
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    }, 'css-loader']
                },
                {
                    test: /\.html/,
                    use: ['html-loader']
                },
                {
                    test: /\.(png|jpg|gif|svg)/,
                    use: ['file-loader']
                },
                {
                    test: /\.(ttf|woff|woff2|eot)/,
                    use: ['file-loader']
                }
            ]
        }
    };    
}else{
    module.exports = {
        context: path.resolve(__dirname, 'src'),
        mode: 'production',
        entry: {
            main: './app.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist/build'),
            publicPath: "/build/"
        },
        resolve: {
            modules: [path.resolve(__dirname, 'libs'), 'node_modules'],
            alias: {
                './@': path.resolve(__dirname, 'src'),
                '@': path.resolve(__dirname, 'src')
            }
        },
        optimization: {
            splitChunks:{
                chunks: 'all'
            }
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './app.html'
            }),
            //new CleanWebpackPlugin(),
            new MiniCSSExtractPlugin({
                filename: '[name].css'
            })
        ],
        module:{
            rules: [
                {
                    test: /\.css$/,
                    use: [{
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    }, 'css-loader']
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            sourceType: 'unambiguous',
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                },
                {
                    test: /\.html/,
                    use: ['html-loader']
                },
                {
                    test: /\.(png|jpg|gif|svg)/,
                    use: ['file-loader']
                },
                {
                    test: /\.(ttf|woff|woff2|eot)/,
                    use: ['file-loader']
                }
            ]
        }
    };
}