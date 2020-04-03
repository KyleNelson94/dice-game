const MiniCssExtract = require("mini-css-extract-plugin");

const CSSLoader = {
    test: /\.(sa|sc|c)ss$/,
    exclude: /node_modules/,
    use: [{
            loader: MiniCssExtract.loader
        },
        {
            loader: "css-loader"
        },
        {
            loader: "sass-loader",
            options: {
                implementation: require("sass")
            }
        },

    ]
};

const ESLintLoader = {
    test: /\.js$/,
    enforce: "pre",
    exclude: /node_modules/,
    use: {
        loader: "eslint-loader",
        options: {
            configFile: __dirname + "/.eslintrc"
        }
    }
};

const JSLoader = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};

const ImageLoader = {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [{
        loader: "file-loader",
        options: {
            outputPath: "build/images",
            name: "[name].[ext]"
        }
    }]
};

const FontLoader = {
    test: /\.(woff|woff2|ttf|otf|eot)$/,
    use: [{
        loader: "file-loader",
        options: {
            outputPath: "build/fonts"
        }
    }]
};

module.exports = {
    ESLintLoader: ESLintLoader,
    CSSLoader: CSSLoader,
    JSLoader: JSLoader,
    ImageLoader: ImageLoader,
    FontLoader: FontLoader
};