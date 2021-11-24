;(function(window) {
    'use strict';
    function defineHSharp() {
        var HSharp = {};
        
        HSharp.name = "H#";
        HSharp.version = "1.0.0";

        HSharp.alert = function() {
            alert("this is a test message, this is H#");
        };

        HSharp.add = function() {
            if (arguments.length == 0) {
                console.log("No args");
                return HSharp;
            }
            
            var args = arguments;
            return this.argsToList(args).reduce((acc, cur) => {
                return acc + cur;
            }, 0);
        }

        HSharp.fe = function(_arr) {
            if (!_arr) return null;
            return _arr.forEach((i) => {
                console.log(i);
            });
        }

        HSharp.argsToList = function(_args) {
            var args = [];
            if (!_args) return args;
            else args = arguments;

            var arr = [];
            
            return [].reduce.call(args, (acc, cur) => {
                acc.push(cur);
                return acc;
            }, arr);

            // for (var i in _args) {
            //     arr.push(_args[i]);
            // }
            // return arr;
        }

        return HSharp;
    }

    if (typeof HSharp === 'undefined') {
        window.HSharp = defineHSharp();
    }
}) (window);