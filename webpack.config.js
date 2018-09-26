const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require("glob");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清除
const uglifyjs = require('uglifyjs-webpack-plugin');



// const Webpack = require('webpack');
// const Uglify = require('uglifyjs-webpack-plugin');

const writeDir = path.resolve(__dirname, './app');
const showDir = path.resolve(__dirname, './public');
const showcssDir = path.resolve(__dirname, './public/css');
const plugins = [];

//获取多页面的每个入口文件，用于配置中的entry:

// entry：{
//     "js/App":"xx/src/js/App.js",
//     "js/Test":"xx/src/js/Test.js"
//     }
function getEntry() {

    let files = glob.sync(writeDir+'/js/**/*.js'),
        entry = {},
        entryFileName,
        outputHtmlName;

    for(let i = 0; i < files.length; i++){
        let matchs = /js\/(\S*).js/.exec(files[i]);
        entryFileName = outputHtmlName = matchs[1]; //得到apps/question/index这样的文件名
        if(/^_\w*/.test(entryFileName) || /\/_\w*/.test(entryFileName))
        {
            continue;
        }
        entryFileName  =  'js/'+entryFileName;
        entry[entryFileName] = files[i]
        //生成html配置
        plugins.push(new HtmlWebpackPlugin({
            // 生成出来的html文件名
            filename: showDir+'/html/'+ outputHtmlName + '.html',
            // 每个html的模版，这里多个页面使用同一个模版
            template: writeDir + '/html/'+ outputHtmlName + '.html',
            // 自动将引用插入body
            inject: 'body',
            title:outputHtmlName,
            // 每个html引用的js模块，也可以在这里加上vendor等公用模块
            chunks: [entryFileName]
        }));
    }

    Plugins(plugins);

    // console.log('> entry' + JSON.stringify(entry));
    
    return entry;
}
function Plugins(plugins){//创建pligins
    plugins.push(
        new CleanWebpackPlugin(['public/js']) ,//传入数组,指定要删除的目录
        new CleanWebpackPlugin(['public/css']) ,//传入数组,指定要删除的目录
        new MiniCssExtractPlugin({
            chunkFilename: "[id].css",//打包后的文件存放目录
            filename: 'css/[name]_[chunkhash:8].css'
        }),
        new uglifyjs(), //压缩js
    )
}

module.exports = {
    // JS执行
    entry: getEntry(),//入口文件
    output: {
        //多文件输出
        path: showDir,//打包后的文件存放目录
        filename: '[name]_[chunkhash:8].js'//打包后输出文件的文件名
    },
    mode: 'development',  //设置mode
    devServer: {
        contentBase: "./public/",
        historyApiFallback: true,   //当访问不存在的页面时会重定向到index.html
        inline: true,               //设置为true，当源文件发生改变的时候会自动刷新页面
        port: 7777                  //其实是一个小型的服务器,这个是监听端口,默认8080
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {                                         //解析css, 并把css添加到html的style标签里
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", 'less-loader'
                ]
            },
            // {                                         //解析css, 并把css变成文件通过link标签引入
            //     test: /.css$/, 
            //     use: ['style-loader', 'css-loader']
            // },                                            
            // {
            //     test: /\.less$/,
            //     loader: 'style-loader!css-loader!less-loader'
            //     // use: ExtractTextPlugin.extract({
            //     //     use:[{
            //     //         loader: 'css-loader' // css-loader使我们可以在程序中require CSS文件
            //     //     },{
            //     //         loader: 'less-loader' // 将less编译为css
            //     //     },{
            //     //         loader: 'style-loader' // 通过注入<style>标签将CSS添加到DOM
            //     //     }]
            //     // })
                
            //   }
        ]
    },
    plugins: plugins,

    devtool: 'source-map'// 输出 source-map 方便直接调试 ES6 源码

}




