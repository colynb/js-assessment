if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

  	// Struggling here - skipping for now
    alterContext : function(fn, obj) {
    	this.name = obj.name;
    	this.greeting = obj.greeting;
    	var out = fn();
    	console.log(obj);
    	return out;
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
