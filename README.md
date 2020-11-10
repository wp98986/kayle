# kayle
react +cordova


reactApp 为umi创建的一个应用。
正常开发都是进入reactApp中进行开发》
安装依赖
```bash
$ yarn
```
或者
npm install 


运行

```bash
$ yarn start
```
或者
npm run start 

打包build 

npm run build
 
build后的文件会自动注入到cordoava工程www 文件夹下.可自行根据cordova的项目的名称在config/config.js对输出路径修改
————————————————————————————————————————————————————————————————————————
————————————————————————————————————————————————————————————————————————
hello 目录为cordova工程目录。
一下命令均在hello 目录下进行
第一次运行时检查corodva 环境配置是否正确
运行
npm install -g cordova
完成后运行
cordova 
确保corodva 环境已经具备

添加平台
cordova platform add ios --save
cordova platform add android --save

检查运行平台是否具备
cordova platform ls

检查平台情况
cordova requirements
所有条件都是installed的时候即可

安卓运行，需虚拟机或者安卓设备连接到电脑
cordova run android

安卓打包
cordova build android
会有输出apk路径


IOS打包，

cordova build ios
找到这个文件 HelloWorl.xcodeproj 这是Xcode工程项目.
hello\platforms\ios\HelloWorl.xcodeproj。
使用Xcode（建议使用新版的Xcode，低版本会有些IOS13兼容性错误）打开这个工程。即可进入预览及IOS打包流程
具体流程可参考：https://blog.csdn.net/qq_38904099/article/details/102464390



11.10更新：移动端适配（测试版，具体还需在实际开发中探索）
引入插件： postcss-px2viewport 
在编译打包时对px单位做转化，于是乎，开发人员在开发期间可以根据设计稿的尺寸，px一把梭，无需再用以前的px=>rem插件，转为rem。在编译打包时，postcss-px2viewport插件会统一做vw转换

postcss-px2viewport 相关配置参数，
参见https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md