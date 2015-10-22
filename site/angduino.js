var angduino = angular.module('angduino',[]);
angduino.controller('appController',function($scope){
});

angduino.factory('socket',function(){
    var socket = io();
    console.log("socket srvice called");
    return socket;
});

angduino.directive('angduinoButton',function(socket){
    return {
        restrict:'A',
        link: function(scope, element, attrs, ctrl){
            var html = element.html();
            element.html(attrs.on);
            element.on("click",function(){
                        var html2 = element.html();
                        socket.emit("button",attrs.angduinoButton);
                        if(html2==attrs.off)
                            element.html(attrs.on);
                        else
                            element.html(attrs.off);
                     });
        }
    }
});
