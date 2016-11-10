﻿


//1.名称
//js无刷新下载文件
//2.思路
//改变DOM结构,手动创建<iframe>和<form> 并提交form

var downLoadFile = function (options) {
    var config = $.extend(true, { method: 'post' }, options);
    var $iframe = $('<iframe id="down-file-iframe" />');
    var $form = $('<form target="down-file-iframe" method="' + config.method + '" />');
    $form.attr('action', config.url);
    for (var key in config.data) {
        $form.append('<input type="hidden" name="' + key + '" value="' + config.data[key] + '" />');
    }
    $iframe.append($form);
    $(document.body).append($iframe);
    $form[0].submit();
    $iframe.remove();
}

//1.名称
//angularjs渲染完成事件
//2.思路
//
$scope.$watch('$viewContentLoaded', function () {

})

//1.名称
//angularjs右键菜单
//2.思路
//
mapapp.directive('ngRightClick', function ($parse) {
    return function (scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function (event) {
            scope.$apply(function () {
                event.preventDefault();
                fn(scope, { $event: event });
            });
        });
    };
});

//1.名称
//关于window.open() 浏览器屏蔽
//2.思路
//修改dom树 点击_txt文本实现跳转。

var _open = function (url) {
    var _a = "<a></a>"
    var _txt = '<span>   </span>';
    var $a = $(_a);
    var $txt = $(_txt);
    $a.attr('href', url);
    $a.attr('target', '_blank');
    $a.append($txt);
    $(document.body).append($a);
    $txt.click();
    $a.remove();
}







