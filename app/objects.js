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

    alterObjects : function(constructor, greeting) {

    },

    iterate : function(obj) {

    }
  };
});
