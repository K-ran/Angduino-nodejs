//
var SerialPort = require("serialport").SerialPort
var sleep = require('sleep');
var express = require('express');
var app=express();
var io = require('socket.io').listen(app.listen(3000,serverOn));
var serialPort = new SerialPort("/dev/ttyACM0");

app.use(express.static(__dirname + '/site/'));
app.get('/', function(req, res){
  res.sendFile('/index.html');
});

function serverOn(){
    //below code is to get the ip of our server
    var os = require('os');
    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }
  console.log('listening on '+ addresses+':3000');
};


serialPort.open(function (error) {
  if ( error ) {
    console.log('failed to open: '+error);
  } else {
    sleep.sleep(1);
    console.log('open');
    io.on('connection', function(socket){
      console.log('User Connected');
      socket.on('button', function(msg){
          serialPort.write(msg+"\n", function(err, results) {
            console.log('error :' + err);
          });
      });
    });
  }
});
