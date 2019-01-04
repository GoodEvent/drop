dd.ready(function(){
    dd.device.notification.confirm({
    message: "你爱我吗",
    title: "提示",
    buttonLabels: ['爱', '不爱'],
    onSuccess : function(result) {
        //onSuccess将在点击button之后回调
        /*
        {
            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
        }
        */
    },
    onFail : function(err) {}
    });
});