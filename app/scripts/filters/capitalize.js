'use strict';

/**
 * @ngdoc filter
 * @name fatoresApp.filter:capitalize
 * @function
 * @description
 * # capitalize
 * Filter in the fatoresApp.
 */
angular.module('fatoresApp')
  .filter('capitalize', function () {
    return function (input) {
      return input.substring(0,1).toUpperCase()+input.substring(1);
    };
  });
