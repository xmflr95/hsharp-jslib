;(function(window) {
    if (typeof window.h === 'undefined' || window.h === null) {
        window.h = h;
    }

    function h(selector) {
        var self = {};
        self.selector = selector;

        if (typeof selector === 'object') {
            self.element = self.selector;
        } else {
            self.element = document.querySelector(self.selector);
        }

        // BASIC function
        self.html = function() {
            return self.element;
        };

        self.height = function() {
            return self.element.offsetHeight;
        };

        self.width = function() {
            return self.element.offsetWidth;
        };

        self.parent = function() {
            self.element = self.element.parentNode;
            return self;
        };

        self.children = function(key) {
            if (!key) key = 0;
            self.element = self.element.childNodes[key];
            return self;
        }

        self.attr = function(name, value) {
            if (!value) return self.element.getAttribute(name);

            self.element.setAttribute(name, value);
            return self;
        };

        // Event function

        self.on = function(type, callback) {
            self.element['on' + type] = callback;
            return self;
        };

        // CSS related function
        // add a CSS rule directly to the stylesheet
        self.insertRule = function(name, value, position, stylesheet) {
            if (!stylesheet) stylesheet = 0;
            if (!position) position = 0;
            // check for the specified style sheet
            if (document.styleSheets[stylesheet]) {
                document.styleSheets[stylesheet].insertRule(self.selector + '{' + name + ': ' + value + '}', position);
            }

            // if that one dosen't exist, check if there are any stylesheets at all
            else if (document.styleSheets[0]) {
                // warn them
                console.warn("the specified stylesheet doesn't exist, the first was used instead");
                document.styleSheets[0].insertRule(self.selector + '{' + name + ': ' + value + '}', position);
            }
            // if none are available, give error
            else {
                console.error('No style sheets available to modify');
            }
            
            return self;
        };

        return self;
    }
}) (window);