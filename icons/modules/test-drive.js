// es6 模块化语法 module
// js 变量或常量，类型由值决定
// var a=1;
// a='str'
// const b=123;
const testDrive = () =>{
    // 用内置的来自微信的api
    // 原生的api 大部分的小程序是html5 webview 
    //webview 区别于nativeview
    //微笑 
    //性能上比原生的慢一点
    wx.showToast({
        title:'暂不支持'
    })
}
export default testDrive
