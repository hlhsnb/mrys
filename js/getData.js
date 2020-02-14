$(document).ready(function () {
});

//  封装原生JS的ajax请求方法
function ajax_method(method, url, data, success) {
    //  异步对象
    var ajax = new XMLHttpRequest();
    //  get和post需要区分
    if (method == 'get') {
        //  get请求
        if (data) {
            //  如果有值
            url += '?';
            url += data;
        }
        //  设置 方法 以及 Url
        ajax.open(method, url);
        //  发送
        ajax.send();
    } else {
        //  post请求
        //  post请求的Url不需要改变
        ajax.open(method, url);

        //  需要设置请求报文(请求头)
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        //  判断data send发送数据
        if (data) {
            //  如果有值  从send发送
            ajax.send(data);
        } else {
            //  没有值,直接发送
            ajax.send();
        }
    }

    //  注册事件
    ajax.onreadystatechange = function () {
        //  在事件中，获取数据，并修改界面显示
        if (ajax.readyState == 4 && ajax.status == 200) {
            // console.log(ajax.responseText);

            // 将 数据 让 外面可以使用
            // return ajax.responseText;

            // 当 onreadystatechange 调用时 说明 数据回来了
            // ajax.responseText;

            // 如果请求成功 外面可以传入一个 function 作为参数 success
            success(ajax.responseText);
        }
    };
}

// 获取首页today数据
{
    /*let ajax = new XMLHttpRequest();
    ajax.open('get', '###?pageSize=' + 6);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            console.log(ajax.responseText);
        }
    }*/
    let today_list = document.querySelector(".today_list");
    let todayData = [];
    /*ajax_method('get', 'zwtoday', 'pageSize=6', function (data) {
        todayData = data;
    });*/
    for (let i = 0; i < 6; i++) {
        today_list.insertAdjacentHTML("beforeend", `<li>` +
            `<a href="###" target="_blank">` +
            `<span class="${i}">${todayData}</span>` +
            `</a>` +
            `</li>`)
    }
}
