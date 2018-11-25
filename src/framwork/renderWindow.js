const {ipcRenderer} = require('electron');

//发送时间给主进程
ipcRenderer.send('sometging','传输给主进程的值')

// 监听主进程发回来的事件
ipcRenderer.on('something1',(event,data)=>{
    console.log(data);
})

module.export {
    ipcRenderer
}