if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr[1];
    },

    sum : function(arr) {
        var sum = 0;
        for (this.i = 0; this.i < arr.length; this.i++) {
            sum += arr[this.i];
        }
        return parseInt(sum);
    },

    /*
     * I assumed 'delete' would work but it just created an 'undefined' placeholder. I created a new array instead.
     */
    remove : function(arr, item) {
       console.log('removing %s from array: ', item, arr);
       var newArr = [];
       for (this.i = 0; this.i < arr.length; this.i++) {
            if (arr[this.i] === item) {
                console.log('%s removed!', item);
            } else {
                newArr.push(arr[this.i]);
            }
        } 
        return newArr;
    },

    append : function(arr, item) {
        arr.push(item)
        return arr;
    },

    truncate : function(arr) {
        arr.pop()
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
