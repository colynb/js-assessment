if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    /*
     * Thought process
     *  1. Learned about the call function through trial and error of the objects test.
     */
    speak : function(fn, obj) {
        return fn.call(obj);
    },

    /* 
     * Thought process
     *  1. Just take a stab at returning a function that returns a contatenated string
     */
    functionFunction : function(str1) {
        return function(str2) {
            return str1 + ', ' + str2;
        }
    },

    /*
     * Thought process
     *  1. Iterate over array, create another array of functions that return the return value of the doSomeStuff function.
     *  2. This was tricky but after trying several variations, I solved it.
     */
    makeClosures : function(arr, fn) {
        var funcs = [];
        for (var i = 0; i < arr.length; i++) {
            funcs.push((function() {
                var sq = fn(arr[i]);
                return function() {
                    return sq;
                }
            })());
        }
        return funcs;
    },

    partial : function(fn, str1, str2) {

    },

    /*
     * Thought process
     *  1. Just sum the items from the arguments object/array
     */
    useArguments : function() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
