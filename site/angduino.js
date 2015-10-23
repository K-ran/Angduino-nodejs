var angduino = angular.module('angduino',[]);
angduino.controller('appController',function($scope,socket){
});

angduino.factory('socket',function(){
    var socket = io();
    console.log("socket srvice called");
    return socket;
});

angduino.directive('angduinoButton',function(socket,$parse){
    return {
        restrict:'A',
        link: function(scope, element, attrs, ctrl){
            var model = $parse(attrs.angduinoButton);
            // Assigns a value to it
            model.assign(scope,1);
            // Apply it to the scope
            var html = element.html();
            element.html(attrs.on);
            socket.on('angduino-data', function(msg){
                var dataObject=JSON.parse(msg);
                if(typeof dataObject.button != "undefined"){
                    eval(dataObject.button);
                    if(scope[attrs.angduinoButton]==1)
                        element.html(attrs.off);
                    else element.html(attrs.on);
                    console.log("Got the packeage");
                }
                //console.log(msg);
            });

            element.on("click",function(){
                        var html2 = element.html();
                        socket.emit("button","button");
                        socket.emit("button",attrs.angduinoButton);
                     });
        }
    }
});
