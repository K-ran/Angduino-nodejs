# Angduino-nodejs
This is the node js server for Angduino library. This library can help you easily build a web bases controller for arduino. It uses Angularjs for front end. [Check out its arduino library](https://github.com/K-ran/Angduino-arduino) as well that works with it.  

##Requrements
* [Node js](https://nodejs.org/)
* [Socket io](http://socket.io/). Installed using npm
* [Serial Port](https://www.npmjs.com/package/serialport). Installed using npm
* [Expressjs](http://expressjs.com/). Installed using npm
* [Sleep](https://www.npmjs.com/package/sleep). Installed using node js.

## Usage.

Recommended OS is linux.

To run the serve, download the zip file, and extract it:

1. Open terminal(linux) or cmd(Windows). 
2. Navigate to the main diectory in the zip.
3. Connect the arduino to the PC. Then type:

      `node index.js <Serial Port of arduino>`

4. In case of linux it looks like */dev/ttyACM0* or AMC(some other number).
5. In windows it looks like *COM3* or COM(some other number).
6. You can use arduino ide to check the port name. It's written at the bottom right corner.
7. As soon as you press Enter, server starts. Giving back you the ip and port on which the server is running.
8. Copy and paste it in the browser and you are ready to rock.

##Site

You can see the site folder in the repository. It contains website that will be shown in the browser. You are concerned with [*index.html*](https://github.com/K-ran/Angduino-nodejs/blob/master/site/index.html). It already consist of a basic example template. The code is pretty self explainatory.

If you want to add a new button, just add these directive to a new `<button>` tag:

    angduino-button="key" off="text when on" on="text when off"
    
To add serial monitor output add:

    <textarea cols="50" rows="10" angduino-serial-out>Welcome. This is you serial output monitor</textarea>
    
To add serial monitor input add:

    <input type="text" cols="50" rows="1" angduino-serial-in ng-model="SerialValue"></input>
    
##Licence
The MIT License (MIT)

#Contributers
[Karan Purohit](https://github.com/K-ran/)

More contributers required. 
    
