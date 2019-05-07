
//  修改语雀的滚动条
(function () {
    let style = document.createElement('style')
    style.innerHTML = `
/* 设置滚动条的样式 */
::-webkit-scrollbar {
width:3px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
-webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
border-radius:10px;
background:rgba(0,0,0,0.1);
-webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
background:rgba(53, 206, 122,1);
}
                `
    console.log(style)
    document.documentElement.append(style)
})();