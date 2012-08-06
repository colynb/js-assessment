if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {

    // Just adding 'var' creates myObject locally
    globals : function() {

      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    // Setting the functions to named variables, solved the problem
    functions : function(flag) {
      if (flag) {
        var getValue = function () { return "a"; }
      } else {
        var getValue = function () { return "b"; }
      }

      return getValue();
    },

    // I'm not really sure what the problem is here.
    parseInt : function(num) {
      console.log('raw: %s, int: %i', num, parseInt(num));
      return parseInt(num, 10); // <--------- Hard code radix to 10 - otherwise JS interprets leading 0s as octal (Something I didn't know about before this test!)
    },

    identity : function(val1, val2) {
      return val1 === val2; // <--------- something I learned from PHP actually
    }
  };
});
