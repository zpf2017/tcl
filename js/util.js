/**
 * Created by zhangpingfu on 2015/12/16.
 * 工具模块
 */
define(function (require,exports,module) {
    require('jquery');
    module.exports = {//暴露方法
        reSize: function () {
            var height = window.innerHeight ;
            $(window).resize(function () {
                var _height = window.innerHeight ;
                if(_height<height) {
                    $('#wrap').height(height);
                }
            });
        }
    }
});
