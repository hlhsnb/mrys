// 表单验证，发送请求
{
    let loginBtn = document.querySelector("#submit");
    loginBtn.onclick = function () {
        var doLogin = true;
        var errstr = '';
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        if (!username.value) {
            doLogin = false;
            errstr = '用户名不能为空'
        }
        if (!password.value) {
            doLogin = false;
            errstr = '密码不能为空'
        }
        if (doLogin) {
            alert("提交")
            //    发起post请求
            let ajax = new XMLHttpRequest();
            let data = {
                username: username,
                password: password
            }   //  JS普通对象
            ajax.open("post", "zwlogin");
            // 可以定义请求头带给后端
            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajax.send(JSON.stringify(data)) // 对象需转化成字符串
            // ajax.send('username='+username+'&password='+password);
            ajax.onreadystatechange = function () {
                if (ajax.readyState === 4 && ajax.status === 200) {
                    console.log(ajax.responseText);
                }
            }
        } else {
            alert(errstr);
        }
    }
}
