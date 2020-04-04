const isDevelopment = process.env.NODE_ENV;
const path = require("path");
const loaders = require("./webpack.loaders");
const MiniCssExtract = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

const {
    CSSLoader,
    JSLoader,
    ImageLoader,
    FontLoader
} = loaders;

module.exports = {
    mode: isDevelopment,
    entry: ["./src/javascript/index.js", "./src/sass/styles.scss"],
    output: {
        path: path.resolve(__dirname, "build/javascript"),
        filename: "[name].js"
    },
    module: {
        rules: [
            CSSLoader,
            JSLoader,
            FontLoader,
            ImageLoader
        ]
    },
    plugins: [
        new MiniCssExtract({
            filename: "../css/style.css",
            chunkFilename: "../css/style.min.css"
        }),
        new BrowserSyncPlugin({
            host: "localhost",
            port: 3000,
            server: {
                baseDir: ["./"]
            }
        }),
        new ImageminPlugin({
            // disable: isDevelopment, // Disable during development
            externalImages: {
                context: 'src/image', // Important! This tells the plugin where to "base" the paths at
                destination: 'build/image',
                fileName: '[path][name].[ext]' // (filePath) => filePath.replace('jpg', 'webp') is also possible
            },
            pngquant: {
                quality: "95-100"
            }
        })
    ],
    resolve: {
        extensions: [".js", ".scss"]
    }
};