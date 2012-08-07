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
     *  1. Just take a stab at returning a function that returns a concatenated string
     */
    functionFunction : function(str1) {
        return function(str2) {
            return str1 + ', ' + str2;
        }
    },

    /*
     * Thought process
     *  1. Iterate over array, create another array of functions that return the return value of the doSomeStuff function.
     *  2. This was tricky but after trying several variations, I solved it with self executing function.
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

    /*
     * Thought process
     *  1. Needs to return a function that returns the result of the input function
     */
    partial : function(fn, greeting, name) {
        return function (punctuation) { return fn(greeting, name, punctuation); }
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

    /*
     * Thought process
     *  1. Just take function arguments, remove the first one then pass them to function.
     *  2. The trick is passing the arguments to the function dynamically.
     *  3. Can be done with the 'apply' method.
     */
    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        fn.apply(null, args);
    },

    /* 
     * Thought process
     *  1. Vaguely familiar with currying
     *  2. Kind of a brute force implementation
     */
    curryIt : function(fn) {
        var args = Array.prototype.slice.call(arguments);
        args.shift();

        if (args.length == 0) {
            return fn;  
        }
        if (args.length == 1) {
            return function (b, c) { return fn(args[0], b, c); }
        }
        if (args.length == 2) {
            return function (c) { return fn(args[0], args[1], c); }
        }
        if (args.length == 3) {
            return function () { return fn(args[0], args[1], args[2]); }
        }
        
    }
  };
});
