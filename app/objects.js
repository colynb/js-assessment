if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    /*
     * Thought process
     *  1. If the only change I make is to simply return fn(), the name property gets used but not the greeting. (??)
     *  2. Turns out that the scope of the sayIt function is the window object, so name and greeting belong to the window object
     *  3. Setting the properties to the window object creates global leak error
     *  4. Re-thinking this
     *  5. Admit defeat - this was really tough. Googled "js alter context". Tried example from
            http://stackoverflow.com/questions/1536164/changing-context-of-a-function-in-javascript
            Still not exactly sure what's going on here.
     */
    alterContext : function(fn, obj) {
        this.name = obj.name;
        this.greeting = obj.greeting;
        return fn.call(this);
    },

    /*
     * Thought process
     *  1. Wasn't immediately sure what to do.
     *  2. I console.log'd the constructor
     *  3. Then I remembered prototype
     */
    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    /*
     * Thought process
     * 	1. Should iterate over object with for loop - building the expected array
     *  2. Output array shows all the properties including those from prototype - not what we want.
     *  3. Use 'hasOwnProperty' to only include direct properties
     */
    iterate : function(obj) {
    	var arrOut = [];
    	for ( var key in obj ) {
    		if (obj.hasOwnProperty(key))
    			arrOut.push(key + ': ' + obj[key]);
    	}
    	return arrOut;
    }
  };
});
