//  通用轮播图
// function move(bannerImgs, num) {
//     num++;
//     bannerImgs.forEach(function (ele, index) {
//         bannerImgs[index].classList.remove("active");
//     });
//     bannerImgs[num].classList.add("active");
//     slides.forEach(function (ele, index) {
//         slides[index].classList.remove("active");
//     });
//     slides[num].classList.add("active");
//     let q = setInterval(move, 3000);
//
//     let get = document.querySelector(".banner_box");
//     get.onmouseenter = function () {                  /*鼠标进入时*/
//         window.clearInterval(q);
//     }
//     get.onmouseleave = function () {                  /*鼠标离开时*/
//         if (flag) {
//             return;
//         }
//         q = setInterval(move, 3000);
//     }
// }

//  页面载入时，先加载全屏大图遮罩

let bigImg = document.querySelector("#rui");
bigImg.onclick = function () {
    bigImg.classList.add("active");
    document.querySelector("body").style.overflow = "inherit"
    let oA = document.querySelector("#dna");  // 获取audio元素
    oA.volume = 0.2;    //  20%音量
    // oA.play();          //  开始播放音频
}

//  漂浮窗
{
    let floatWindow = document.querySelector(".floating");
    let speedX=5;
    let speedY=5;
    let maxLeft=window.innerWidth-floatWindow.offsetWidth-17;
    let maxTop=window.innerHeight-floatWindow.offsetHeight;

    function floatmove() {
        let ol=floatWindow.offsetLeft;
        //  获取自身左外边框到定位父级的左内边框的距离
        let ot=floatWindow.offsetTop;
        ol+=speedX;
        ot+=speedY;
        if(ol<0||ol>maxLeft){
            speedX*=-1;
        }
        if(ot<0||ot>maxTop){
            speedY*=-1;
        }
        floatWindow.style.left=ol+"px";
        floatWindow.style.top=ot+"px";
    }
    let q=setInterval(floatmove,30)
    floatWindow.onmouseenter=function () {
        clearInterval(q)
    }
    floatWindow.onmouseleave=function () {
        q=setInterval(floatmove,30)
    }
}

//  首页顶部轮播图
{
    let bannerImgs = document.querySelectorAll(".banner_box li")
    let slides = document.querySelectorAll(".banner_slide li");
    let num = 0;
    let flag = false;   //  控制轮播图运行停止
    //  轮播点移入移除效果
    slides.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            flag = true;
            /*鼠标移入后，将flag值置为true*/
            num = index;
            for (let i = 0; i < bannerImgs.length; i++) {
                slides[i].classList.remove("active");
                bannerImgs[i].classList.remove("active");
            }
            slides[index].classList.add("active");
            bannerImgs[index].classList.add("active");
        }
        ele.onmouseleave = function () {
            flag = false;
        };
    })

    //  封装轮播图函数
    function move() {
        num++;
        if (num === bannerImgs.length) {
            num = 0;
        }
        if (num === -1) {
            num = bannerImgs.length - 1;
        }
        bannerImgs.forEach(function (ele, index) {
            bannerImgs[index].classList.remove("active");
        });
        bannerImgs[num].classList.add("active");
        slides.forEach(function (ele, index) {
            slides[index].classList.remove("active");
        });
        slides[num].classList.add("active");
    }

    let q = setInterval(move, 3000);
    let get = document.querySelector(".zw_box_body.mainBan");
    get.onmouseenter = function () {                  /*鼠标进入时*/
        window.clearInterval(q);
    }
    get.onmouseleave = function () {                  /*鼠标离开时*/
        if (flag) {
            return;
        }
        q = setInterval(move, 3000);
    }
}


//  今日轮播
{
    let bannerImgs = $(".today_banner li");
    let slides = $(".today_banner_slide li");
    let num = 0;
    let flag = false;

    //  轮播点移入移出
    slides.each(function (index, ele) {
        slides.eq(index).mouseenter(function (ele) {
            num = index;
            flag = true;
            for (let i = 0; i < slides.length; i++) {
                slides.eq(i).removeClass("active")
                bannerImgs.eq(i).removeClass("active")
            }
            slides.eq(num).addClass("active")
            bannerImgs.eq(num).addClass("active")
        });
        slides.eq(index).mouseleave(function () {
            flag = false;
        })
    });

    //  封装轮播图函数
    function move() {
        num++;
        if (num === bannerImgs.length) {
            num = 0;
        }
        if (num === -1) {
            num = bannerImgs.length - 1;
        }
        bannerImgs.each(function (index, ele) {
            bannerImgs.eq(index).removeClass("active")
        });
        bannerImgs.eq(num).addClass("active");
        slides.each(function (index, ele) {
            slides.eq(index).removeClass("active");
        });
        slides.eq(num).addClass("active");
    }

    let q = setInterval(move, 4000);

    let today_left = $(".today_left");
    today_left.mouseenter(function () {
        window.clearInterval(q)
    });
    today_left.mouseleave(function () {
        if (flag) {
            return
        }
        q = setInterval(move, 4000);
    });
}

//  专区轮播
{
    let bannerImgs = $(".zq_banner li");
    let slides = $(".zq_banner_slide li");
    let num = 0;
    let flag = false;

    //  轮播点移入移出
    slides.each(function (index, ele) {
        slides.eq(index).mouseenter(function (ele) {
            num = index;
            flag = true;
            for (let i = 0; i < slides.length; i++) {
                slides.eq(i).removeClass("active")
                bannerImgs.eq(i).removeClass("active")
            }
            slides.eq(num).addClass("active")
            bannerImgs.eq(num).addClass("active")
        });
        slides.eq(index).mouseleave(function () {
            flag = false;
        })
    });

    //  封装轮播图函数
    function move() {
        num++;
        if (num === bannerImgs.length) {
            num = 0;
        }
        if (num === -1) {
            num = bannerImgs.length - 1;
        }
        bannerImgs.each(function (index, ele) {
            bannerImgs.eq(index).removeClass("active")
        });
        bannerImgs.eq(num).addClass("active");
        slides.each(function (index, ele) {
            slides.eq(index).removeClass("active");
        });
        slides.eq(num).addClass("active");
    }

    let q = setInterval(move, 4000);

    let zq_banner = $(".zq_banner");
    zq_banner.mouseenter(function () {
        window.clearInterval(q)
    });
    zq_banner.mouseleave(function () {
        if (flag) {
            return
        }
        q = setInterval(move, 4000);
    });
}
