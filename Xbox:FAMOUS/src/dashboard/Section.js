var data = require('./Data');
var Node = require('famous/core/Node');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Panel = require('./Panel');
var Window = require('./Window');


function Section (i) {
    // subclass Node
    Node.call(this);

    // create and style a new DOMElement
    this.el = new DOMElement(this).setProperty('overflow-y', 'scroll')
                                  .setProperty('overflow-x', 'scroll');

    // create the panels in the section.
        this.panels = createPanels.call(this, i);
    this.windows = createWindows.call(this, i);        
}

Section.prototype = Object.create(Node.prototype);

function createPanels (id) {
    var result = [];
    var numberOfPanels = data.sections[id].panelNumber;
    var panel;
    // create an array of length equal to the number of panels and then
    // map over it to create an array of tweets.
    for (var i = 0 ; i < numberOfPanels ; i++) {
        // this node will be 100px tall and positioned after the previous one
        // in the array
        panel = this.addChild()
                    .setSizeMode('default', 'absolute')
                    .setAbsoluteSize(null, 100)
                    .setPosition(0, 100 * i)
                    .addChild(new Panel());

        result.push(panel);
    }

    return result;
}


function createWindows (id) {
    var result = [];
 
    var numberOfWindows = data.sections[id].WindowCount;
    var window;
    // create an array of length equal to the number of panels and then
    // map over it to create an array of tweets.
    for (var i = 0 ; i < numberOfWindows ; i++) {
      
        // this node will be 100px tall and positioned after the previous one
        // in the array
     
        window = this.addChild().setDifferentialSize(-1200, 10, null)
                    .setAlign(0,0,2)
                    .addChild(new Window())
    
          // this node will be 100px tall and positioned after the previous one
      // in the array
    

        result.push(window);
    }

     return result;
}
      
        
    

   
       


module.exports = Section;