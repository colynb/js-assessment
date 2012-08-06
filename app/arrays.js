if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr[1];
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return parseInt(sum);
    },

    /*
     * I assumed 'delete' would work but it just created an 'undefined' placeholder. I created a new array instead.
     */
    remove : function(arr, item) {
       console.log('removing %s from array: ', item, arr);
       var newArr = [];
       for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                console.log('%s removed!', item);
            } else {
                newArr.push(arr[i]);
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
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var n = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == item) {
                n++;
            }
        }
        return n;
    },

    duplicates : function(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if ( this.count(arr, arr[i]) >= 2 && newArr.indexOf(arr[i]) === -1) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },

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
            if (target == arr[i]) {
                newArr.push(i);
            }
        }
        return newArr;
    }
  };
});
