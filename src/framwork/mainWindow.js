const {icpMain} = require("electron");

// 监听渲染进程发来的消息
icpMain.on("something",(event,data)=>{
    event.sender.send('something1','我是主进程返回的值')
})

module.export {
    icpMain
}