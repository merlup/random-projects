var Dashboard = require('./Dashboard');
var FamousEngine = require('famous/core/FamousEngine');
FamousEngine.init();

 //create the app and pass in the target element
var dashboard = FamousEngine.createScene().addChild(new Dashboard());