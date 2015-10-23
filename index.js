//
var SerialPort = require("serialport").SerialPort
var sleep = require('sleep');
var express = require('express');
var app=express();
var io = require('socket.io').listen(app.listen(3000,serverOn));

var portName="/dev/ttyACM0";

process.argv.forEach(function (val, index, array) {
  if(index==2)
  portName=val;
});
var serialPort = new SerialPort(portName,{parser: require("serialport").parsers.readline("\n")});

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


//open the serial port
serialPort.open(function (error) {
  if ( error ) {
    console.log('failed to connect to Arduino on: '+portName+ '\n CHECK the port name again');
  } else {
    sleep.sleep(1);   //wait for the arduino to properly start
    console.log('Arduino connected successfully');

    io.on('connection', function(socket){
        var address = socket.handshake.address;
        console.log('New connection from ' + socket.request.socket.remoteAddress);

        //called when user clicks on any button on webpage
        socket.on('button', function(msg){
          //sends it to the arduino
          serialPort.write(msg+"\n", function(err, results) {
            console.log('error :' + err);
          });
      });
      //when reading data from the arduino
      serialPort.on('data', function(data) {
                io.emit('angduino-data',data);
        });
    });
  }
});
