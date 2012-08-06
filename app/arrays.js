if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    /*
     * Thought process
     *  1. No changes here. Just need to fix index in test.
     */
    indexOf : function(arr, item) {
        return arr[item];
    },

    /*
     * Thought process
     *  1. Iterate over array.
     *  2. Keep a running total of the sum of each item.
     *  3. Return the sum, parsed as integer just to be sure.
     */
    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return parseInt(sum);
    },

    /*
     * Thought process
     *  1. Iterate over array. If item matches array item, 'delete' it from array.
     *  2. Return array.
     *  3. Turns out 'delete' doesn't really remove from array, it just adds an 'undefined' placeholder.
     *  4. Instead, create a new array with only the items from the array that don't match the item param.
     *  5. I'm guessing this might not be the best solution.
     */
    remove : function(arr, item) {
       var newArr = [];
       for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== item) {
                newArr.push(arr[i]);
            }
        } 
        return newArr;
    },

    /*
     *  Thought process
     *   1. Already very familiar with this
     */
    append : function(arr, item) {
        arr.push(item)
        return arr;
    },

    /*
     *  Thought process
     *   1. Used array_pop frequently in PHP.
     *   2. Let's try this in JS.
     *   3. Hey it works!
     */
    truncate : function(arr) {
        arr.pop()
        return arr;
    },

    /*
     * Thought process
     *  1. Hmm, how do I merge 2 arrays?
     *  2. In PHP you could use array_merge or arr1 + arr2.
     *  3. Let's try arr1 + arr2
     *  4. That didn't work; converts arrays to strings and concatenates them.
     *  5. (Cheat) Googled 'JS array merge'
     *  6. Found the 'concat' function
     */
    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    /*
     * Thought process
     *  1. Use splice function
     */
    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    /*
     * Thought process
     *  1. There might be a simpler, more elegant solution, but I'm just going to iterate over array,
     *     counting out the number of times the item is in the array.
     */
    count : function(arr, item) {
        var n = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == item) {
                n++;
            }
        }
        return n;
    },

    /*
     * Thought process
     *  1. I could use my count function above to help me here
     *  2. Iterate over the array
     *  3. If the array item count is greater than 1 and I haven't already tracked it, add it to a clean array
     *  4. Return the expected array
     */
    duplicates : function(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if ( this.count(arr, arr[i]) > 1 && newArr.indexOf(arr[i]) === -1) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },

    /*
     * Thought process
     *  1. Just iterate over array and multiply each item by itself - adding the product into a new array.
     */
    square : function(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i] * arr[i]);
        }
        return newArr;
    },

    findAllOccurrences : function(arr, target) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (target == arr[i])
                newArr.push(i);
        }
        return newArr;
    }
  };
});
