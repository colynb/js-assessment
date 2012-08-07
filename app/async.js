if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {

  	/* 
  	 * Thought process
  	 *  1. This was a bit of a logic puzzle to make sure I followed the chain of functions correctly
  	 *  2. Some trial and error but got it working.
  	 */ 
    async : function(value) {
    	var my = {};
    	my.then = function(fn) {
    		fn(value);
    	}
    	return my;
    },


    /*
     * Thought process
     *  1. This method takes a URL and returns an object with a then function
	 *  2. 'Then' function instantiates ajax call and returns a sorted array on success
     */
    manipulateRemoteData : function(url) {
    	var my = {};
    	my.then = function(fn) {
    		$.ajax({
	    		url: url,
	    		success: function (result) {
	    			var people = [];
	    			for (var i = 0; i < result.people.length; i++) {
	    				people.push(result.people[i].name);
	    			}
	    			people.sort();
	    			fn(people);
	    		}
	    	});
    	}
    	return my;
    }
  };
});
