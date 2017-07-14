/**
 * Created by zhangpingfu on 2015/12/16.
 * main主模块
 */
define(function (require,exports,module) {
    require('jquery');require('swiper');
    //var util = require('util');
    module.exports = {
        init: function () {
            mainObject.loading();
        }
    };
    var mainObject = {
        loading: function () {
            var sum=0;
            $('img').each(function(){
                var nImg = new Image();
                nImg.src = $(this).attr('lazy_src');
                nImg.onload = function(){
                    $('img').eq(sum).attr('src',$('img').eq(sum).attr('lazy_src'));
                    sum++;
                    if (sum == 20) {
                        $("#loading").css("display", "none");//loading页面结
                        $('#wrap').show();
                        mainObject.mainSwiper();//Swiper初始化
                        mainObject.touchStart();
                        //util.reSize();//安卓的问题
                    };
                }
            });
        },
        mainSwiper: function () {

            //mySwiper为全局变量
            mySwiper = new Swiper('.swiper-container', {
                speed:700,
                effect : 'fade',
                //fade: {crossFade: false},
                noSwipingClass: 'stop-swiping',
                direction: 'vertical',
                //mousewheelControl: true,
                onInit: function (swiper) {
                    $("#wrap .swiper-slide").eq(0).find(".my_animated").addClass("in");//初始化动画
                },
                onSlideChangeStart: function(swiper){
                    $("#wrap").find(".my_animated").removeClass("in");//移除动画
                    if(mySwiper.activeIndex == 6){
                        $('#tip').hide();
                    }else{
                        $('#tip').show();
                    }
                },
                onSlideChangeEnd: function (swiper) {
                    $("#wrap .swiper-slide").eq(mySwiper.activeIndex).find(".my_animated").addClass("in");//初始化动画
                }
           });
        },
        touchStart: function () {
            $('#fx').on('touchstart', function () {
                $('#fx').hide();
            });
            $('#rotate_ani').on('touchstart', function () {
                $('#fx').show();
            });
            //音乐播放控制
            var music = document.getElementById("chrmas_music");
            $('#music').on('touchstart', function () {
                if (music.paused) {
                    music.play();
                    $("#music").addClass("go");
                } else {
                    music.pause();
                    $("#music").removeClass("go");
                }
            });

            //阻止默认事件
            //$("#wrap").on("touchmove", function (ev) {
            //    ev.preventDefault();
            //});
        }

    }
});
