var Node = require('famous/core/Node');
var DOMElement = require('famous/dom-renderables/DOMElement');
var data = require('./Data');

// The tweet class that will render a particular tweet

function Window2 () {
    // subclass Node
    Node.call(this);

    // create a new DOMElement and style it.
    this.el = new DOMElement(this).setProperty('boxSizing', 'border-box')
                                  .setProperty('lineHeight', '100px')
                                  .setProperty('borderBottom', '1px solid black')
                                  .setProperty('font-size', '12px')
                                 .setProperty('background-color', 'blue')
                                  .setContent(getRandomMessage2());
}

// subclass Node

Window2.prototype = Object.create(Node.prototype);



// Pick a random element from an array
function random (array) {
    return array[(Math.random() * array.length)|0];
}

function getRandomMessage2 () {
    return "THis is the second window";
}


module.exports = Window2;


