
function view_the_one(IDnum) {//函数名与onclink出调用名字一样即可
    var IDnum = document.getElementById("IDnum").value;
    var  url = 'http://localhost:8042/patients/' + IDnum;//是就向url所指发送信息
    return url;
}