


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

