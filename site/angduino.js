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
        scope: {
          value:'=angduinoButton'
        },
        link: function(scope, element, attrs, ctrl){
            element.on("click",function(){
                        socket.emit("button",attrs.angduinoButton);
                        console.log("Emmited");
                     });
        }
    }
});
