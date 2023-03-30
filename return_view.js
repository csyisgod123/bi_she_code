
    //获取输入的ID的详细信息

function view_the_load() {//函数名与onclink出调用名字一样即可

    var url = 'http://localhost:8042/patients'//是就向url所指发送信息
    return url;
}
   /*f (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");// IE6, IE5 浏览器执行代码
            }//不同浏览器执行代码
   /*mlhttp.onreadystatechange = function () {//定义xmlhttp下的“onreadystatechange”
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {//状态码确认
        responsecontent = xmlhttp.responseText;

    Res =responsecontent;
    document.getElementById("result").innerText = Res;
                }
            }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
        }//显示已上传患者ID
        */