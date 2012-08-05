if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
    	var me = {};
    	me.greeting = str1;
    	me.name = str2;
    	me.sayIt = function(){
    		return me.greeting + ', ' + me.name;
    	};
    	return me;
    }
  };
});

