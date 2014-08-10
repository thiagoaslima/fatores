/* global jQuery: false */

'use strict';

/**
 * @ngdoc directive
 * @name fatoresApp.directive:customAttributes
 * @description
 * # customAttributes
 */
angular.module('customAttributes')
    .directive('openSlidingDown', function($animate) {
        return function(scope, element, attrs) {
            scope.$watch(attrs.openSlidingDown, function(newVal) {
                if (newVal) {
                    $animate.addClass(element, "down");
                } else {
                    $animate.removeClass(element, "down");
                }
            });
        };
    });





angular.module('customAttributes')
    .animation('.down', function() {
        return {
            addClass: function(element, className, done) {
                jQuery(element).slideDown(done);
            },
            removeClass: function(element, className, done) {
                jQuery(element).slideUp(done);
            }
        };
    });